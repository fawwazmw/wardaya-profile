"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { siteConfig } from "@/lib/constants";
import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper id="contact" className="relative bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative">
        <SectionHeader
          label="Contact"
          title="Let's start a conversation"
          description="Have a project in mind or just want to explore possibilities? We'd love to hear from you."
        />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Email
                  </p>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="text-sm font-medium group-hover:text-accent transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl border border-border bg-background">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1">
                    Location
                  </p>
                  <p className="text-sm font-medium">{siteConfig.address}</p>
                </div>
              </div>
            </div>

            {/* Quick links */}
            <div className="pt-6 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground mb-4 uppercase tracking-widest">
                Or reach us on
              </p>
              <div className="flex gap-3">
                {[
                  { label: "GitHub", href: "https://github.com/fawwazmw" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/fawwaz-mufid-wardaya" },
                  { label: "Instagram", href: "https://instagram.com/fwzmwrdy" },
                ].map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-mono rounded-full border border-border text-muted-foreground hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    {platform.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="md:col-span-3"
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground mb-2 uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground text-sm placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300 resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent-muted transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] cursor-pointer"
              >
                Send Message
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
