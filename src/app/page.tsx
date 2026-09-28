import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Marquee } from "@/components/sections/Marquee";
import { Services } from "@/components/sections/Services";
import { Portfolio } from "@/components/sections/Portfolio";
import { getRssPosts } from "@/lib/feeds";

// Lazy load below-fold sections
const Team = dynamic(() =>
  import("@/components/sections/Team").then((m) => ({ default: m.Team }))
);
const Testimonials = dynamic(() =>
  import("@/components/sections/Testimonials").then((m) => ({
    default: m.Testimonials,
  }))
);
const Blog = dynamic(() =>
  import("@/components/sections/Blog").then((m) => ({ default: m.Blog }))
);
const Contact = dynamic(() =>
  import("@/components/sections/Contact").then((m) => ({ default: m.Contact }))
);

export const revalidate = 86400;

export default async function Home() {
  const rssPosts = await getRssPosts();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <Testimonials />
        <Blog externalPosts={rssPosts} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
