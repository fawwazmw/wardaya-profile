"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { siteConfig, stats } from "@/lib/constants";
import { CountUp } from "@/components/ui/CountUp";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/3 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12 pt-32 pb-20">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            Available for new projects
          </span>
        </motion.div>

        {/* Main Heading */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black tracking-tight leading-[0.95]"
          >
            We craft digital
            <br />
            <span className="gradient-text-accent">solutions</span> that
            <br />
            <span className="relative inline-block">
              actually work
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 8C50 2 100 4 150 6C200 8 250 4 298 6"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1.2, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            {siteConfig.description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent-muted transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
            >
              Start a Project
              <ArrowUpRight size={18} />
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-full hover:border-accent hover:text-accent transition-all duration-300"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-border pt-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-display font-black text-accent">
                <CountUp value={stat.value} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
