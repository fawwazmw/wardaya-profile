"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Target, Eye, Zap } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: <Target size={24} />,
    title: "Mission",
    description:
      "To help individuals, startups, and organizations transform ideas into reliable digital systems that solve real-world problems.",
  },
  {
    icon: <Eye size={24} />,
    title: "Vision",
    description:
      "To become the most trusted technology partner in Southeast Asia, known for delivering solutions that are scalable, efficient, and impactful.",
  },
  {
    icon: <Zap size={24} />,
    title: "Values",
    description:
      "Quality over quantity. Performance by default. Long-term value over quick fixes. We build things right, not just fast.",
  },
];

export function About() {
  return (
    <SectionWrapper id="about" className="relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/3 rounded-full blur-[150px]" />

      <div className="relative">
        <SectionHeader
          label="About Us"
          title="Technology-driven, purpose-built"
          description="From concept to deployment, Wardaya combines technical expertise with a strong understanding of user needs to deliver solutions that work — not just technically, but practically."
        />

        {/* Story Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-surface border border-border overflow-hidden relative">
              <div className="absolute inset-0 dot-pattern" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <Image
                      src="/wardaya-logo.png"
                      alt="Wardaya"
                      width={48}
                      height={48}
                      className="rounded-xl"
                    />
                  </div>
                  <p className="text-sm font-mono text-muted-foreground">
                    Est. 2022
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-accent/20 rounded-2xl" />
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Wardaya was born from a simple belief: technology should serve
              people, not the other way around. We started as a small team of
              developers passionate about building things that matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we specialize in developing web applications, systems, and
              digital products tailored to solve real-world problems. Every line
              of code we write is driven by purpose and precision.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-mono text-accent tracking-widest uppercase">
                Since 2022
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:border-accent/30 hover:bg-surface-elevated"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6 transition-transform duration-300 group-hover:scale-110">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
