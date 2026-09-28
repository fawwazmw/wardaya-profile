"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { ExternalLink, Rss } from "lucide-react";
import type { FeedPost } from "@/lib/feeds";

export function Blog({ externalPosts = [] }: { externalPosts?: FeedPost[] }) {
  return (
    <SectionWrapper id="blog">
      <SectionHeader
        label="Blog"
        title="Fresh from the tech world"
        description="Reading aggregated from open engineering, security, and developer sources across the web — refreshed every day."
      />

      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
          <Rss size={14} className="text-accent" />
          Auto-updated feeds
        </div>
        <div className="h-px flex-1 bg-border" />
      </div>

      {externalPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {externalPosts.map((post, i) => (
            <motion.a
              key={`${post.source}-${post.link}`}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30"
            >
              {/* Header */}
              <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
                {post.image ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external RSS thumbnails come from arbitrary hosts, so next/image optimization is not applicable
                  <img
                    src={post.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute inset-0 dot-pattern" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-3 py-1 text-[10px] font-mono rounded-full border border-border/50 text-muted-foreground bg-surface/80 backdrop-blur-sm">
                    {post.source}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono rounded-full border border-accent/20 text-accent bg-accent/5">
                    {post.category}
                  </span>
                  {post.date && (
                    <span className="text-[10px] font-mono text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-display font-semibold mb-2 group-hover:text-accent transition-colors duration-300 leading-snug line-clamp-2">
                  {post.title}
                </h3>

                {post.excerpt && (
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  <ExternalLink size={11} />
                  Read article
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-muted-foreground py-12 font-mono">
          No articles available right now — check back soon.
        </p>
      )}
    </SectionWrapper>
  );
}
