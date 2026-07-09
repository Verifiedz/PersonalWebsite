/**
 * Shared content types.
 *
 * Every section of the site is driven by a JSON file under `src/data`.
 * These interfaces describe the shape of that JSON so components stay
 * type-safe while the content itself remains editable without touching code.
 */

/** Top-level site config (name, role, nav links). */
export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  /** Anchors rendered in the navbar, in order. */
  navLinks: NavLink[];
  /** Link to the GitHub profile/folder holding projects not featured here. */
  githubProjectsUrl: string;
}

export interface NavLink {
  /** Display label in the navbar. */
  label: string;
  /** Section id to scroll to, e.g. "about" -> <section id="about">. */
  href: string;
}

/** About section content. */
export interface About {
  heading: string;
  /** Path/URL to the portrait image. */
  image: string;
  /** Paragraphs of description about myself. */
  description: string[];
}

/** A single technical skill icon shown in the About section. */
export interface Skill {
  name: string;
  /** lucide-react icon name OR a path to a custom svg/png logo. */
  icon: string;
  /** Optional brand color for the icon. */
  color?: string;
}

/** One work-experience entry, rendered along a vertical timeline. */
export interface Experience {
  company: string;
  role: string;
  /** Path/URL to the company logo image (prompted from JSON per the brief). */
  logo: string;
  /** e.g. "Jan 2023" */
  startDate: string;
  /** e.g. "Present" */
  endDate: string;
  location?: string;
  /** Free-form details of the experience. */
  details: string;
}

/** A portfolio project card. */
export interface Project {
  /** URL-safe id used to route to the project's detail page. */
  slug: string;
  title: string;
  /** Path/URL to the project image. */
  image: string;
  /** Short summary shown on the card. */
  description: string;
  /** Full write-up shown on the project detail page. */
  longDescription?: string;
  /** My specific contributions, rendered as a list on the detail page. */
  contributions?: string[];
  /** Technologies used, rendered as tags/badges. */
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

/** Contact information (displayed only — no forms/APIs per the brief). */
export interface Contact {
  heading: string;
  email: string;
  phone?: string;
  location?: string;
}

/** A social/footer link. */
export interface Social {
  /** One of: "github" | "linkedin" | "email" (maps to an icon). */
  platform: string;
  label: string;
  url: string;
}
