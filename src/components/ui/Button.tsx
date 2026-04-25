"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 rounded-full cursor-pointer";

  const variants = {
    primary:
      "bg-accent text-background hover:bg-accent-muted hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]",
    secondary:
      "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
    ghost: "text-muted-foreground hover:text-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={combinedClass}
      {...(href ? { href } : { onClick })}
    >
      {children}
    </MotionComponent>
  );
}
