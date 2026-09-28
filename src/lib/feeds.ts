import Parser from "rss-parser";

const parser = new Parser({
  headers: {
    "User-Agent":
      "Mozilla/5.0 (compatible; WardayaProfile/1.0; +https://wardaya.my.id)",
    Accept:
      "application/rss+xml, application/atom+xml, application/xml, text/xml, */*",
  },
  timeout: 15000,
});

export type FeedPost = {
  title: string;
  link: string;
  date: string;
  source: string;
  excerpt: string;
  category: string;
  image?: string;
};

/** Per-feed cap before the global sort/limit. */
const PER_FEED_LIMIT = 4;
/** Total posts rendered on the page. */
const TOTAL_LIMIT = 18;

/**
 * Open, no-key RSS/Atom sources. Add or remove entries freely — every feed is
 * fetched independently, so one failing source never breaks the section.
 */
export const curatedFeeds: { url: string; source: string; category: string }[] = [
  {
    url: "https://hnrss.org/frontpage?count=5",
    source: "Hacker News",
    category: "Tech News",
  },
  {
    url: "https://feeds.feedburner.com/TheHackersNews",
    source: "The Hacker News",
    category: "Security",
  },
  {
    url: "https://dev.to/feed",
    source: "DEV Community",
    category: "Community",
  },
  {
    url: "https://www.smashingmagazine.com/feed/",
    source: "Smashing Magazine",
    category: "Web Development",
  },
  {
    url: "https://css-tricks.com/feed/",
    source: "CSS-Tricks",
    category: "Frontend",
  },
  {
    url: "https://github.blog/feed/",
    source: "GitHub Blog",
    category: "Open Source",
  },
  {
    url: "https://nextjs.org/feed.xml",
    source: "Next.js",
    category: "Engineering",
  },
  {
    url: "https://blog.cloudflare.com/rss/",
    source: "Cloudflare",
    category: "Infrastructure",
  },
  {
    url: "https://techcrunch.com/feed/",
    source: "TechCrunch",
    category: "Industry",
  },
  {
    url: "https://www.freecodecamp.org/news/rss/",
    source: "freeCodeCamp",
    category: "Learning",
  },
];

/** Strip HTML tags and collapse whitespace from titles/snippets. */
function cleanText(text?: string): string {
  if (!text) return "";
  return text.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}

/** Extract the first <img> src from HTML content, if any. */
function extractFirstImage(html?: string): string | undefined {
  if (!html) return undefined;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || undefined;
}

export async function getRssPosts(
  feeds: { url: string; source: string; category: string }[] = curatedFeeds
): Promise<FeedPost[]> {
  const results = await Promise.allSettled(
    feeds.map(async ({ url, source, category }) => {
      const feed = await parser.parseURL(url);
      return (feed.items || []).slice(0, PER_FEED_LIMIT).map((item): FeedPost => {
        const published = item.pubDate || item.isoDate;
        const title = cleanText(item.title) || "Untitled";

        let excerpt = cleanText(item.contentSnippet || item.content);
        if (/^(Article URL|Comments URL|Discuss this|Read more)/i.test(excerpt)) {
          excerpt = "";
        } else if (excerpt.toLowerCase().startsWith(title.toLowerCase())) {
          excerpt = excerpt.slice(title.length).trim();
        }

        return {
          title,
          link: item.link || "#",
          date: published
            ? new Date(published).toISOString().split("T")[0]
            : "",
          source,
          category,
          image:
            item.enclosure?.url ||
            item["media:content"]?.$?.url ||
            extractFirstImage(item.content),
          excerpt: excerpt.slice(0, 160),
        };
      });
    })
  );

  const perFeed = results
    .filter(
      (r): r is PromiseFulfilledResult<FeedPost[]> => r.status === "fulfilled"
    )
    .map((r) => r.value.sort((a, b) => b.date.localeCompare(a.date)));

  const posts: FeedPost[] = [];
  const seen = new Set<string>();

  // Round-robin across sources so no single feed dominates the grid.
  for (let round = 0; round < PER_FEED_LIMIT; round++) {
    for (const list of perFeed) {
      const post = list[round];
      if (!post || post.link === "#" || seen.has(post.link)) continue;
      seen.add(post.link);
      posts.push(post);
      if (posts.length >= TOTAL_LIMIT) return posts;
    }
  }

  return posts;
}
