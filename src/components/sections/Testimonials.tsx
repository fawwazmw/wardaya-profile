"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { testimonials } from "@/lib/constants";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-16 md:mb-20">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 text-xs font-mono uppercase tracking-[0.3em] text-accent"
        >
          Testimonials
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight"
        >
          Trusted by those who build
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30"
          >
            {/* Quote icon */}
            <div className="mb-6">
              <Quote
                size={32}
                className="text-accent/30 group-hover:text-accent/60 transition-colors duration-300"
              />
            </div>

            {/* Quote text */}
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-8">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                <span className="text-sm font-display font-bold text-accent">
                  {testimonial.author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
