"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  children,
  className = "",
  hover = true,
  glow = false,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`
        relative rounded-2xl border border-border bg-surface p-6 md:p-8
        transition-colors duration-300
        ${hover ? "hover:border-accent/30 hover:bg-surface-elevated" : ""}
        ${glow ? "glow" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
