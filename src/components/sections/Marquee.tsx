"use client";

const marqueeItems = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Figma",
  "Tailwind CSS",
  "GraphQL",
  "Redis",
  "WebSocket",
];

export function Marquee() {
  return (
    <section className="relative py-12 border-y border-border overflow-hidden bg-surface">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 text-sm font-mono text-muted-foreground/50 uppercase tracking-widest flex items-center gap-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
