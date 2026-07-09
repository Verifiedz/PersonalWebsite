import { motion } from "framer-motion";
import { Github } from "lucide-react";

import projectsData from "@/data/projects.json";
import siteData from "@/data/site.json";
import type { Project, SiteConfig } from "@/types";
import ProjectCard from "./ProjectCard";

const projects = projectsData as Project[];
const site = siteData as SiteConfig;

/**
 * Projects section — a responsive grid of project cards sourced from
 * projects.json, followed by a card that links out to my GitHub for the
 * additional projects not featured on this site.
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-card/30 py-24">
      <div className="container">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="text-gold">Projects</span>
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
          A selection of things I've built. Click any project for the full story.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}

          {/* "See more on GitHub" — routes out to the projects not featured here. */}
          <motion.a
            href={site.githubProjectsUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: projects.length * 0.08 }}
            className="glass-gold group flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-gold"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B8860B]/50 bg-white/5 transition-colors group-hover:bg-white/10">
              <Github className="h-8 w-8 text-[#B8860B]" />
            </span>
            <span className="text-lg font-semibold text-gold">
              More on GitHub
            </span>
            <span className="max-w-[22ch] text-sm text-muted-foreground">
              Explore additional projects and experiments I haven't featured here.
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
