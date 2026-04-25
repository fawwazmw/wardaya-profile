"use client";

import { motion } from "framer-motion";

interface BadgeProps {
  children: string;
  variant?: "default" | "accent" | "outline";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const variants = {
    default: "bg-surface-elevated text-muted-foreground border-border",
    accent: "bg-accent/10 text-accent border-accent/20",
    outline: "bg-transparent text-muted-foreground border-border",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center px-3 py-1 text-xs font-mono rounded-full border ${variants[variant]}`}
    >
      {children}
    </motion.span>
  );
}
