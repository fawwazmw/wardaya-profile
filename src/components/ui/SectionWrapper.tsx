"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`relative py-24 md:py-32 ${className}`}>
      <div
        className={
          fullWidth ? "w-full" : "mx-auto max-w-7xl px-6 md:px-8 lg:px-12"
        }
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 md:mb-20 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-xl"
      }`}
    >
      {label && (
        <span className="inline-block mb-4 text-xs font-mono uppercase tracking-[0.3em] text-accent">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
