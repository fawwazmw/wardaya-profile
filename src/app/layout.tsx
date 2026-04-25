import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wardaya — Building Digital Solutions That Matter",
  description:
    "Wardaya is a technology-driven company focused on building digital solutions that are scalable, efficient, and impactful. Web applications, systems, and digital products tailored to solve real-world problems.",
  keywords: [
    "Wardaya",
    "web development",
    "digital solutions",
    "software engineering",
    "Malang",
    "Indonesia",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Wardaya" }],
  openGraph: {
    title: "Wardaya — Building Digital Solutions That Matter",
    description:
      "Technology-driven company focused on building digital solutions that are scalable, efficient, and impactful.",
    url: "https://wardaya.my.id",
    siteName: "Wardaya",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wardaya — Building Digital Solutions That Matter",
    description:
      "Technology-driven company focused on building digital solutions that are scalable, efficient, and impactful.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${syne.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
