export const siteConfig = {
  name: "Wardaya",
  tagline: "Building Digital Solutions That Matter",
  description:
    "Wardaya is a technology-driven company focused on building digital solutions that are scalable, efficient, and impactful.",
  url: "https://wardaya.my.id",
  email: "hello@wardaya.my.id",
  phone: "+62 895 2737 4152",
  address: "Malang, Indonesia",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    title: "Web Applications",
    description:
      "Full-stack web applications built with modern frameworks. From concept to deployment, we deliver performant, scalable solutions.",
    icon: "Globe",
    tags: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    title: "System Architecture",
    description:
      "Designing robust system architectures that scale. We plan infrastructure that grows with your business needs.",
    icon: "Layers",
    tags: ["Microservices", "Cloud", "DevOps", "CI/CD"],
  },
  {
    title: "Digital Products",
    description:
      "End-to-end digital product development. We transform ideas into reliable, user-centered digital experiences.",
    icon: "Smartphone",
    tags: ["UI/UX", "Mobile", "PWA", "API Design"],
  },
  {
    title: "Technical Consulting",
    description:
      "Expert guidance on technology decisions. We help you choose the right stack and approach for your specific challenges.",
    icon: "MessageSquare",
    tags: ["Strategy", "Audit", "Migration", "Optimization"],
  },
];

export const projects = [
  {
    title: "WardayaSubs",
    category: "SaaS",
    description:
      "Full-stack subscription tracking and spending analytics platform with AI-powered chatbot, spending forecasts, billing comparison, and automated renewal reminders.",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    year: "2026",
    image: "/images/project-1.png",
    link: "https://wardayasubs.wardaya.my.id",
  },
  {
    title: "OriensSpace",
    category: "Platform",
    description:
      "A comprehensive spatial data platform enabling real-time geospatial analysis and visualization for enterprise clients.",
    tags: ["React", "Node.js", "PostgreSQL", "MapBox"],
    year: "2025",
    image: "/images/project-2.PNG",
  },
  {
    title: "BusTracker",
    category: "IoT System",
    description:
      "Real-time bus tracking system with live GPS monitoring, route optimization, and passenger information displays.",
    tags: ["Next.js", "WebSocket", "IoT", "Redis"],
    year: "2025",
    image: "/images/project-3.png",
  },
  {
    title: "UB Voice",
    category: "Game",
    description:
      "Universitas Brawijaya Virtual Campus on Roblox. An immersive virtual campus experience bringing the university environment into a game platform.",
    tags: ["Roblox", "Lua", "Game Dev", "3D"],
    year: "2025",
    image: "/images/project-4.png",
    link: "https://ubvoice.my.id",
  },
  {
    title: "WardayaCode",
    category: "Open Source",
    description:
      "An AI-powered coding agent that lives in your terminal. Multi-provider support for Claude, GPT-4, and Gemini with a permission system, session management, undo/checkpoint, and plugin extensibility. Privacy-first, open-source.",
    tags: ["TypeScript", "Node.js", "React", "Ink", "CLI", "Open Source"],
    year: "2026",
    image: "/images/project-5.png",
    link: "https://wardayacode.my.id",
  },
];

export const team = [
  {
    name: "Fawwaz MW",
    role: "Founder",
    bio: "Full-stack developer with a passion for building scalable digital solutions. Designing, building, and shipping end-to-end.",
    avatar: "/images/team-1.jpeg",
    socials: {
      github: "https://github.com/fawwazmw",
      linkedin: "https://www.linkedin.com/in/fawwaz-mufid-wardaya",
      instagram: "https://instagram.com/fwzmwrdy",
    },
  },
];

export const testimonials = [
  {
    quote:
      "Wardaya transformed our vision into a working product faster than we expected. Their technical expertise and attention to detail is remarkable.",
    author: "Ahmad Rizki",
    role: "CEO, TechStartup ID",
    avatar: "/images/client-1.jpg",
  },
  {
    quote:
      "The team at Wardaya doesn't just write code — they understand the business problem and deliver solutions that actually work in the real world.",
    author: "Maya Putri",
    role: "Product Manager, DataCorp",
    avatar: "/images/client-2.jpg",
  },
  {
    quote:
      "Working with Wardaya was a game-changer for our operations. The system they built handles our scale effortlessly.",
    author: "Budi Santoso",
    role: "CTO, LogiFlow",
    avatar: "/images/client-3.jpg",
  },
];

export const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime SLA" },
];

export const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Team", href: "#team" },
  ],
  resources: [
    { label: "Blog", href: "#blog" },
    { label: "Uses", href: "/uses" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/fawwazmw" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/fawwaz-mufid-wardaya" },
    { label: "Instagram", href: "https://instagram.com/fwzmwrdy" },
  ],
};
