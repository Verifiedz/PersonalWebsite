import experienceData from "@/data/experience.json";
import type { Experience } from "@/types";
import ExperienceCard from "./ExperienceCard";

const experiences = experienceData as Experience[];

/**
 * Work Experience section.
 *
 * Renders each role from experience.json along a single vertical timeline —
 * the connecting line runs down the left edge and every entry pins a node to
 * it, giving the experience-to-experience timeline feature from the brief.
 */
export default function WorkExperience() {
  return (
    <section id="experience" className="py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gold">Work Experience</span>
        </h2>

        <div className="relative mx-auto max-w-3xl">
          {/* The vertical timeline line. */}
          <span className="absolute bottom-0 left-[22px] top-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
