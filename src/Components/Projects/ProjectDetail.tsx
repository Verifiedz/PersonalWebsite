import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import projectsData from "@/data/projects.json";
import type { Project } from "@/types";
import NotFound from "@/Components/NotFound";

const projects = projectsData as Project[];

/**
 * Project detail page.
 *
 * Reached by clicking a project card (route: /projects/:slug). Shows the
 * project image at a larger scale, a detailed description, and my
 * contributions — as required by the brief.
 */
export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  // Unknown slug — fall back to the shared 404 page.
  if (!project) {
    return <NotFound />;
  }

  return (
    <article className="bg-zinc-950">
      <div className="container max-w-4xl py-28">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-3">
          <Link to="/#projects">
            <ArrowLeft /> Back to projects
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl">
            <span className="text-gold">{project.title}</span>
          </h1>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Larger-scale project image */}
          <div className="mt-8 overflow-hidden rounded-xl border border-border shadow-gold-lg">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full object-cover"
            />
          </div>

          {/* Detailed description */}
          <section className="mt-10">
            <h2 className="text-xl font-semibold text-primary">Overview</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-muted-foreground">
              {project.longDescription ?? project.description}
            </p>
          </section>

          {/* Contributions */}
          {project.contributions && project.contributions.length > 0 && (
            <section className="mt-10">
              <h2 className="text-xl font-semibold text-primary">
                My Contributions
              </h2>
              <ul className="mt-3 space-y-2">
                {project.contributions.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-relaxed text-muted-foreground"
                  >
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Links */}
          {(project.repoUrl || project.liveUrl) && (
            <div className="mt-10 flex flex-wrap gap-3">
              {project.repoUrl && (
                <Button asChild variant="glass">
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    <Github /> View Code
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink /> Live Site
                  </a>
                </Button>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </article>
  );
}
