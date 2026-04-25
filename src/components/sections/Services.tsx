"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { services } from "@/lib/constants";
import {
  Globe,
  Layers,
  Smartphone,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={28} />,
  Layers: <Layers size={28} />,
  Smartphone: <Smartphone size={28} />,
  MessageSquare: <MessageSquare size={28} />,
};

export function Services() {
  return (
    <SectionWrapper id="services" className="relative bg-surface">
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <div className="relative">
        <SectionHeader
          label="Services"
          title="What we do best"
          description="We focus on what we're great at — building digital products and systems that are reliable, performant, and built to last."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-background p-8 md:p-10 transition-all duration-300 hover:border-accent/30 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                {/* Icon + Number */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-background group-hover:scale-110">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-5xl font-display font-black text-border/50 group-hover:text-accent/20 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono rounded-full border border-border text-muted-foreground bg-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground group-hover:text-accent transition-colors duration-300">
                  Learn more
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
