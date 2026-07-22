"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { projects } from "@/lib/constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <SectionWrapper id="work">
      <SectionHeader
        label="Our Work"
        title="Projects that speak for themselves"
        description="A selection of projects we've built — each one solving a real problem with thoughtful engineering."
      />

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs font-mono rounded-full border transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-muted-foreground hover:border-accent/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => {
            const CardWrapper = project.link
              ? ({ children, className }: { children: React.ReactNode; className?: string }) => (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {children}
                  </a>
                )
              : ({ children, className }: { children: React.ReactNode; className?: string }) => (
                  <div className={className}>{children}</div>
                );

            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative"
              >
                <CardWrapper className={`block relative rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-500 hover:border-accent/30 ${project.link ? "cursor-pointer" : ""}`}>
                  <div className="grid md:grid-cols-5 gap-0">
                    {/* Image / Visual */}
                    <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto bg-surface-elevated overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 grid-pattern" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center p-8">
                              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3">
                                <span className="text-2xl font-display font-black text-accent">
                                  {project.title.charAt(0)}
                                </span>
                              </div>
                              <span className="text-xs font-mono text-muted-foreground">
                                {project.year}
                              </span>
                            </div>
                          </div>
                        </>
                      )}
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="px-3 py-1 text-xs font-mono rounded-full border border-accent/20 text-accent bg-accent/5">
                            {project.category}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground">
                            {project.year}
                          </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                          {project.title}
                        </h3>

                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
                        {project.link ? "Visit Project" : "Coming Soon"}
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </div>
                    </div>
                  </div>
                </CardWrapper>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-sm text-muted-foreground py-12 font-mono">
          No projects in this category yet.
        </p>
      )}
    </SectionWrapper>
  );
}
