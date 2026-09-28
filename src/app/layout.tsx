import type { Metadata } from "next";
import { Outfit, Syne, JetBrains_Mono } from "next/font/google";
import { siteConfig, team } from "@/lib/constants";
import { ThemeProvider } from "@/hooks/useTheme";
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
  metadataBase: new URL(siteConfig.url),
  title: "Wardaya — Building Digital Solutions That Matter",
  description:
    "Wardaya is a technology-driven company focused on building digital solutions that are scalable, efficient, and impactful. Web applications, systems, and digital products tailored to solve real-world problems.",
  icons: {
    icon: "/wardaya-logo.png",
    apple: "/wardaya-logo.png",
  },
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-background text-foreground font-sans">
        <ThemeProvider>{children}</ThemeProvider>

        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://wardaya.my.id/#organization",
                  name: siteConfig.name,
                  url: siteConfig.url,
                  description: siteConfig.description,
                  email: siteConfig.email,
                  telephone: siteConfig.phone,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Malang",
                    addressCountry: "ID",
                  },
                  logo: {
                    "@type": "ImageObject",
                    url: "https://wardaya.my.id/wardaya-logo.png",
                  },
                  founder: {
                    "@type": "Person",
                    name: team[0]?.name,
                  },
                  sameAs: [
                    "https://github.com/fawwazmw",
                    "https://www.linkedin.com/in/fawwaz-mufid-wardaya",
                    "https://instagram.com/fwzmwrdy",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": "https://wardaya.my.id/#person",
                  name: team[0]?.name,
                  jobTitle: team[0]?.role,
                  description: team[0]?.bio,
                  image: team[0]?.avatar
                    ? `https://wardaya.my.id${team[0].avatar}`
                    : undefined,
                  sameAs: [
                    "https://github.com/fawwazmw",
                    "https://www.linkedin.com/in/fawwaz-mufid-wardaya",
                    "https://instagram.com/fwzmwrdy",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://wardaya.my.id/#website",
                  url: siteConfig.url,
                  name: siteConfig.name,
                  description: siteConfig.description,
                  publisher: { "@id": "https://wardaya.my.id/#organization" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
