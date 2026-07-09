import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import siteData from "@/data/site.json";
import type { SiteConfig } from "@/types";

const site = siteData as SiteConfig;

/**
 * Fixed top navigation.
 *
 * Provides the "navbar" navigation option from the brief. Each link is an
 * in-page anchor that smooth-scrolls to its <section id="...">. On mobile the
 * links collapse into a toggle menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between">
        <a
          href="#top"
          className="text-lg font-bold tracking-tight text-gold"
        >
          {site.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="container flex flex-col gap-2 border-t border-border bg-background/95 pb-4 pt-2 md:hidden">
          {site.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={`#${link.href}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
