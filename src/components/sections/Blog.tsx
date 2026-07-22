"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { blogPosts } from "@/lib/constants";
import { ArrowUpRight, Clock, Calendar, ExternalLink, Rss } from "lucide-react";
import type { FeedPost } from "@/lib/feeds";

export function Blog({ externalPosts = [] }: { externalPosts?: FeedPost[] }) {
  return (
    <SectionWrapper id="blog">
      {/* Own posts */}
      <div className="mb-4">
        <SectionHeader
          label="Blog"
          title="Thoughts & insights"
          description="We write about engineering decisions, architecture patterns, and lessons learned from building real products."
        />
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-20">
        {blogPosts.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30"
          >
            {/* Image placeholder */}
            <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
              <div className="absolute inset-0 grid-pattern" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 text-xs font-mono rounded-full border border-accent/20 text-accent bg-accent/5">
                  {post.category}
                </span>
              </div>
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              {/* Meta */}
              <div className="flex items-center gap-4 mb-4 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300 leading-snug">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
                Read Article
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* External / RSS feed posts */}
      {externalPosts.length > 0 && (
        <>
          <div className="flex items-center gap-3 mb-8">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-[0.2em]">
              <Rss size={14} className="text-accent" />
              Latest from the Tech World
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {externalPosts.map((post, i) => (
              <motion.a
                key={`${post.source}-${i}`}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-300 hover:border-accent/30"
              >
                {/* Header */}
                <div className="relative aspect-[16/9] bg-surface-elevated overflow-hidden">
                  {post.image ? (
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
                <div className="p-6 md:p-8">
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
                    {post.source}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </>
      )}
    </SectionWrapper>
  );
}
