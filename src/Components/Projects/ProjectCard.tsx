import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Project card: image, title, description, and technology tags. Clicking the
 * card routes to the project's detail page (larger image, full description and
 * contributions). Optional repo/live links render as footer actions and stop
 * click propagation so they don't trigger the card navigation.
 */
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const navigate = useNavigate();
  const goToDetail = () => navigate(`/projects/${project.slug}`);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
    >
      <Card
        role="link"
        tabIndex={0}
        aria-label={`View details for ${project.title}`}
        onClick={goToDetail}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goToDetail();
          }
        }}
        className="group h-full cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {/* Project image */}
        <div className="relative aspect-video overflow-hidden border-b border-border bg-secondary">
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <CardHeader className="flex-row items-center justify-between space-y-0">
          <CardTitle>{project.title}</CardTitle>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
        </CardHeader>

        <CardContent className="space-y-4">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        {(project.repoUrl || project.liveUrl) && (
          <CardFooter className="gap-3">
            {project.repoUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                  <Github /> Code
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button
                asChild
                size="sm"
                onClick={(e) => e.stopPropagation()}
              >
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  <ExternalLink /> Live
                </a>
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
    </motion.div>
  );
}
