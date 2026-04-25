"use client";

import { motion } from "framer-motion";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { team } from "@/lib/constants";
import { Code2, Globe, Share2 } from "lucide-react";
import Image from "next/image";

export function Team() {
  return (
    <SectionWrapper id="team" className="relative bg-surface">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative">
        <SectionHeader
          label="Behind Wardaya"
          title="The person behind the code"
          description="A solo founder who designs, builds, and ships end-to-end — driven by craft and purpose."
          align="center"
        />

        <div className="flex justify-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group text-center max-w-xs"
            >
              {/* Avatar */}
              <div className="relative mx-auto w-full aspect-square max-w-[220px] mb-6">
                <div className="absolute inset-0 rounded-2xl border border-border bg-surface-elevated overflow-hidden transition-all duration-500 group-hover:border-accent/30">
                  {member.avatar ? (
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="220px"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 dot-pattern" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                          <span className="text-3xl font-display font-bold text-accent">
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* Decorative corner */}
                <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r border-b border-accent/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <h3 className="text-lg font-display font-bold group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm font-mono text-accent mt-1">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                {member.bio}
              </p>

              {/* Social */}
              {member.socials && (
                <div className="flex items-center justify-center gap-4 mt-5">
                  {member.socials.github && (
                    <a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Code2 size={16} />
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Globe size={16} />
                    </a>
                  )}
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      <Share2 size={16} />
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
