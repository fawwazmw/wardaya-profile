# Wardaya Profile

A portfolio and company profile website for **Wardaya** — a technology-driven consultancy based in Malang, Indonesia, focused on building scalable digital solutions.

**Live site:** [wardaya.my.id](https://wardaya.my.id)

## Overview

Single-page marketing site showcasing Wardaya's services, projects, team, and blog. Built with modern web technologies and optimized for performance and SEO.

## Features

- **Hero** — animated headline, CTA buttons, stats with count-up animation
- **Services** — web apps, system architecture, digital products, technical consulting
- **Portfolio** — project showcase with category filtering
- **Blog** — own articles plus auto-fetched tech news from RSS feeds
- **Contact** — functional form with Web3Forms integration
- **Dark / Light mode** — toggle persisted to localStorage
- **SEO** — JSON-LD structured data, Open Graph, Twitter cards
- **Responsive** — mobile-first with full desktop layout
- **Animations** — scroll-triggered reveals, hover effects, page transitions

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Outfit, Syne, JetBrains Mono |
| Email | Web3Forms + Cloudflare Email Routing |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to preview.

## Environment

For the contact form, create `.env.local`:

```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_key_here
```

Get a free key at [web3forms.com](https://web3forms.com).
