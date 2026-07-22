import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/lib/constants";
import {
  Code2,
  Globe,
  Terminal,
  Monitor,
  Palette,
  Cpu,
  Box,
  BookOpen,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses — Wardaya",
  description:
    "The tools, software, and hardware I use daily for development and design.",
};

const sections = [
  {
    title: "Editor & Terminal",
    icon: <Terminal size={20} />,
    items: [
      { label: "Editor", value: "VS Code with JetBrains Mono" },
      { label: "Terminal", value: "iTerm2 + Oh My Zsh + Powerlevel10k" },
      { label: "Theme", value: "Catppuccin Mocha (dark) / Latte (light)" },
      { label: "Font", value: "JetBrains Mono Nerd Font" },
    ],
  },
  {
    title: "Languages & Frameworks",
    icon: <Code2 size={20} />,
    items: [
      { label: "Primary", value: "TypeScript / JavaScript" },
      { label: "Frontend", value: "Next.js, React, Tailwind CSS" },
      { label: "Backend", value: "Node.js, Hono, Go" },
      { label: "Database", value: "PostgreSQL, Redis, SQLite" },
    ],
  },
  {
    title: "Hardware",
    icon: <Monitor size={20} />,
    items: [
      { label: "Laptop", value: "MacBook Pro M4 Pro" },
      { label: "Desktop", value: "Custom Ryzen 9 + RTX 3060" },
      { label: "Monitor", value: "Dell 27\" 4K" },
      { label: "Keyboard", value: "Keychron Q1 (Gateron Jupiter Banana)" },
    ],
  },
  {
    title: "Design & Productivity",
    icon: <Palette size={20} />,
    items: [
      { label: "Design", value: "Figma, Excalidraw" },
      { label: "Notes", value: "Obsidian + Notion" },
      { label: "API Dev", value: "Bruno, Postman" },
      { label: "Git", value: "GitHub CLI, lazygit, git-cz" },
    ],
  },
  {
    title: "AI Tools",
    icon: <Cpu size={20} />,
    items: [
      { label: "Coding", value: "WardayaCode, Claude Code" },
      { label: "Chat", value: "Claude, ChatGPT" },
      { label: "Image Gen", value: "Midjourney, DALL·E" },
    ],
  },
  {
    title: "Deployment & Cloud",
    icon: <Globe size={20} />,
    items: [
      { label: "Hosting", value: "Vercel, Cloudflare" },
      { label: "VPS", value: "Hetzner, DigitalOcean" },
      { label: "DNS", value: "Cloudflare" },
      { label: "CI/CD", value: "GitHub Actions" },
    ],
  },
  {
    title: "System & Containers",
    icon: <Box size={20} />,
    items: [
      { label: "OS", value: "macOS + Arch Linux (desktop)" },
      { label: "Container", value: "Docker, Podman" },
      { label: "Orchestration", value: "Docker Compose, Coolify" },
      { label: "Proxy", value: "Cloudflare Tunnel, Nginx" },
    ],
  },
  {
    title: "Books & Learning",
    icon: <BookOpen size={20} />,
    items: [
      { label: "Currently", value: "System Design Interview by Alex Xu" },
      { label: "In Queue", value: "Designing Data-Intensive Applications" },
      { label: "Completed", value: "Clean Code, The Pragmatic Programmer" },
    ],
  },
];

export default function UsesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="mx-auto max-w-3xl px-6 md:px-8 lg:px-12">
          {/* Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm text-xs font-mono text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-accent" />
              /uses
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-[1.1] mb-4">
              Tools I use
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              A running list of the hardware, software, and tools I use daily
              for development, design, and everything in between.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-display font-bold">
                    {section.title}
                  </h2>
                </div>
                <div className="grid gap-3">
                  {section.items.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-baseline justify-between gap-4 px-5 py-3 rounded-xl border border-border bg-surface hover:border-accent/20 transition-all duration-300"
                    >
                      <span className="text-sm text-muted-foreground font-mono shrink-0">
                        {item.label}
                      </span>
                      <span className="text-sm text-foreground text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <p className="mt-16 text-xs text-muted-foreground text-center font-mono">
            Last updated July 2026
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
