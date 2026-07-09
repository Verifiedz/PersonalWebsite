import { ArrowDown } from "lucide-react";

import { Button } from "@/Components/ui/button";
import siteData from "@/data/site.json";
import type { SiteConfig } from "@/types";

const site = siteData as SiteConfig;

/**
 * Landing hero — the first thing visitors see. Introduces who I am and offers
 * a scroll cue into the sections below.
 */
export default function LandingHero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950"
    >
      {/* Ambient glow — slow-drifting, blurred gold orbs behind the content.
          Kept at z-0 with pointer-events-none so text stays crisp and clickable. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute left-[15%] top-[20%] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#B8860B] opacity-20 blur-3xl animate-glow-a" />
        <div className="absolute right-[12%] top-[35%] h-[26rem] w-[26rem] translate-x-1/2 rounded-full bg-[#B8860B] opacity-20 blur-3xl animate-glow-b" />
        <div className="absolute bottom-[10%] left-1/2 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-[#B8860B] opacity-10 blur-3xl animate-glow-a" />
      </div>

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
