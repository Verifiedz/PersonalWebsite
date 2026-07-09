import { Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

import socialsData from "@/data/socials.json";
import siteData from "@/data/site.json";
import type { Social, SiteConfig } from "@/types";

const socials = socialsData as Social[];
const site = siteData as SiteConfig;

/** Map a social platform key to its lucide icon. */
const ICONS: Record<string, LucideIcon> = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

/**
 * Footnote section with my socials: GitHub, LinkedIn, and email.
 * Links are sourced from src/data/socials.json.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container flex flex-col items-center gap-6 py-10">
        <ul className="flex items-center gap-6">
          {socials.map((social) => {
            const Icon = ICONS[social.platform] ?? Mail;
            return (
              <li key={social.platform}>
                <a
                  href={social.url}
                  target={social.platform === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={social.label}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Icon className="h-6 w-6" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="text-sm text-muted-foreground">
          © {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
