import { motion } from "framer-motion";

import { Badge } from "@/Components/ui/badge";
import shimmerData from "@/data/shimmer.json";
import type { Shimmer } from "@/types";

const shimmer = shimmerData as Shimmer;

/**
 * "Also Building" spotlight for Shimmer, a venture under active development.
 *
 * Deliberately sits after Projects: Projects carries the stack-matching
 * signal for roles (C#/.NET, Java), while this section is about founder
 * initiative, not a pitch for Rust work — so the description leads with the
 * product, and the tech shows up as a quiet meta line rather than a badge.
 */
export default function ShimmerSection() {
  return (
    <section id="shimmer" className="py-24">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gold">{shimmer.heading}</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          A venture I'm actively building outside of client and coursework
          projects.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-gold mx-auto grid max-w-4xl gap-8 rounded-2xl p-8 md:grid-cols-[180px_1fr] md:gap-10 md:p-10"
        >
          {/* Logo */}
          <div className="mx-auto shrink-0">
            <div className="h-36 w-36 overflow-hidden rounded-2xl border border-[#B8860B]/40 bg-black/40 md:h-44 md:w-44">
              <img
                src={shimmer.logo}
                alt={`${shimmer.name} logo`}
                className="h-full w-full object-contain p-5"
                loading="lazy"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-bold">{shimmer.name}</h3>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B8860B]/50 bg-white/5 px-3 py-1 text-xs font-medium text-gold">
                <span className="h-2 w-2 rounded-full bg-[#B8860B] animate-gold-pulse" />
                {shimmer.status}
              </span>
            </div>

            <p className="mb-5 text-sm text-muted-foreground">
              {shimmer.statusDetail}
            </p>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {shimmer.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {shimmer.features.map((feature) => (
                <Badge key={feature} variant="outline">
                  {feature}
                </Badge>
              ))}
            </div>

            {shimmer.tech && shimmer.tech.length > 0 && (
              <p className="mt-5 text-xs uppercase tracking-wide text-muted-foreground">
                Built in {shimmer.tech.join(", ")}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
