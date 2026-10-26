import { ArrowDown } from "lucide-react";

import { Button } from "@/Components/ui/button";
import siteData from "@/data/site.json";
import type { SiteConfig } from "@/types";

const site = siteData as SiteConfig;

/**
 * Landing hero — the first thing visitors see. Introduces who I am and offers
 * a scroll cue into the sections below.
 *
 * Ambient glow/grid behind the content comes from the app-wide
 * <BackgroundFX> layer rather than a local one, so the effect is consistent
 * across the whole page instead of resetting at each section.
 */
export default function LandingHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="container relative z-10 flex flex-col items-center text-center">
        <p className="mb-5 text-xs font-medium uppercase tracking-[0.4em] text-primary">
          {site.role}
        </p>
        <h1 className="max-w-5xl text-6xl font-extrabold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl">
          Hi, I'm{" "}
          <span className="text-gold">{site.name}</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button asChild variant="glass" size="lg">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary"
      >
        <ArrowDown className="h-6 w-6 animate-float" />
      </a>
    </section>
  );
}
