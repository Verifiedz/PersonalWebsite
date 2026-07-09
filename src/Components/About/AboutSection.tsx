import { motion } from "framer-motion";

import aboutData from "@/data/about.json";
import skillsData from "@/data/skills.json";
import type { About, Skill } from "@/types";

const about = aboutData as About;
const skills = skillsData as Skill[];

/**
 * About section.
 *
 * Left: portrait image (path from about.json). Right: descriptive paragraphs.
 * Below: a grid of technical-skill icons that animate in and float on hover.
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <SectionHeading>{about.heading}</SectionHeading>

        <div className="grid items-center gap-12 md:grid-cols-[320px_1fr]">
          {/* Portrait */}
          <div className="mx-auto">
            <div className="relative aspect-square w-64 overflow-hidden rounded-2xl border-2 border-primary/40 shadow-lg">
              <img
                src={about.image}
                alt="Portrait of Saad Wasim"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            {about.description.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mt-16">
          <h3 className="mb-8 text-center text-xl font-semibold">
            Technologies &amp; Skills
          </h3>
          <div className="grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-6">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/60"
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-10 w-10 animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  loading="lazy"
                />
                <span className="text-xs font-medium text-muted-foreground">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Small shared heading used across sections. */
function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
      <span className="text-gold">{children}</span>
    </h2>
  );
}
