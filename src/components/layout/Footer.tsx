"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Globe, Share2 } from "lucide-react";
import { siteConfig, footerLinks } from "@/lib/constants";
import Image from "next/image";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Code2 size={18} />,
  LinkedIn: <Globe size={18} />,
  Instagram: <Share2 size={18} />,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface">
      {/* Top CTA Band */}
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight leading-[1.1]">
              Let&apos;s build something{" "}
              <span className="gradient-text-accent">remarkable</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-base md:text-lg">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
          </motion.div>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent-muted transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]"
          >
            Get in Touch
            <ArrowUpRight size={18} />
          </motion.a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pb-16 border-b border-border">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/wardaya-logo.png"
                alt={siteConfig.name}
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-display font-bold text-lg">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {socialIcons[link.label]}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with precision in Malang, Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
