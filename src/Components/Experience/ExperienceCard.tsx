import { motion } from "framer-motion";

import { Card, CardContent } from "@/Components/ui/card";
import type { Experience } from "@/types";

interface ExperienceCardProps {
  experience: Experience;
  /** Index in the timeline — used to alternate/side and stagger animation. */
  index: number;
}

/**
 * A single work-experience entry sitting on the timeline: company logo (from
 * JSON), role/company, dates, and a free-text details area.
 */
export default function ExperienceCard({
  experience,
  index,
}: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="relative pl-16"
    >
      {/* Timeline node */}
      <span className="absolute left-[22px] top-6 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-primary bg-background animate-gold-pulse" />

      <Card className="transition-colors hover:border-primary/60">
        <CardContent className="flex gap-4 p-6">
          {/* Company logo */}
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-md border border-border bg-secondary p-1.5">
            <img
              src={experience.logo}
              alt={`${experience.company} logo`}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-lg font-semibold">{experience.role}</h3>
              <span className="text-sm text-muted-foreground">
                {experience.startDate} – {experience.endDate}
              </span>
            </div>
            <p className="text-sm font-medium text-primary">
              {experience.company}
              {experience.location ? ` · ${experience.location}` : ""}
            </p>
            <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
              {experience.details}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
