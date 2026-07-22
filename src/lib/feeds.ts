import Parser from "rss-parser";

const parser = new Parser();

export type FeedPost = {
  title: string;
  link: string;
  date: string;
  source: string;
  excerpt: string;
  category: string;
  image?: string;
};

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
    url: "https://blog.angular.io/feed",
    source: "Angular Blog",
    category: "Engineering",
  },
  // Add or remove feeds here as you like
];

/** Extract the first <img> src from HTML content, if any */
function extractFirstImage(html?: string): string | undefined {
  if (!html) return undefined;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1] || undefined;
}

export async function getRssPosts(
  feeds?: { url: string; source: string; category: string }[]
): Promise<FeedPost[]> {
  const targets = feeds || curatedFeeds;
  const results = await Promise.allSettled(
    targets.map(async ({ url, source, category }) => {
      const feed = await parser.parseURL(url);
      return (feed.items || []).slice(0, 5).map((item): FeedPost => ({
        title: item.title || "Untitled",
        link: item.link || "#",
        date: item.pubDate
          ? new Date(item.pubDate).toISOString().split("T")[0]
          : "",
        source,
        category,
        image:
          item.enclosure?.url ||
          (item as any)["media:content"]?.$?.url ||
          extractFirstImage(item.content),
        excerpt:
          item.contentSnippet?.slice(0, 160).replace(/\n/g, " ") ||
          item.content?.slice(0, 160).replace(/<[^>]*>/g, "").replace(/\n/g, " ") ||
          "",
      }));
    })
  );

  return results
    .filter(
      (r): r is PromiseFulfilledResult<FeedPost[]> => r.status === "fulfilled"
    )
    .flatMap((r) => r.value)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 12);
}
