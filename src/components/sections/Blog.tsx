"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { blogPosts } from "@/lib/constants";
import { ArrowUpRight, Clock, Calendar } from "lucide-react";

export function Blog() {
  return (
    <SectionWrapper id="blog">
      <SectionHeader
        label="Blog"
        title="Thoughts & insights"
        description="We write about engineering decisions, architecture patterns, and lessons learned from building real products."
      />

      <div className="grid md:grid-cols-3 gap-6">
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
    </SectionWrapper>
  );
}
