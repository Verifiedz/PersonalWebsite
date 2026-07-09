# Saad Wasim — Personal Website

A modular personal website for a Software Engineer. Content is **JSON-driven**:
edit the files in `src/data/` and the UI updates — no component changes needed.

## Tech Stack

- **React 18 + TypeScript**
- **Vite** (dev server / bundler)
- **Tailwind CSS** with a **Black & Gold** theme
- **shadcn/ui** component primitives (`src/Components/ui`)
- **react-router-dom** with a `RouteGuard` wrapper
- **framer-motion** + Tailwind keyframes for animations

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Editing Content (the "JSON components")

| File                    | Drives                                                |
| ----------------------- | ----------------------------------------------------- |
| `src/data/site.json`      | Name, role, tagline, and navbar links                 |
| `src/data/about.json`     | About heading, portrait image, and description        |
| `src/data/skills.json`    | Technology skill icons shown in the About section     |
| `src/data/experience.json`| Work-experience timeline entries (incl. company logo) |
| `src/data/projects.json`  | Project cards (image, description, tags, links)       |
| `src/data/contact.json`   | Contact information (displayed only)                  |
| `src/data/socials.json`   | Footer socials: GitHub, LinkedIn, email               |

Images live in `public/images/` — see `public/images/README.md`.

## Structure

```
src/
├── App.tsx                 # central component — all routes/components wired here
├── main.tsx                # entry point (Router provider)
├── index.css               # Tailwind + Black & Gold theme variables
├── data/                   # JSON content (edit these)
├── lib/utils.ts            # cn() class-name helper
├── types/                  # TypeScript interfaces for the JSON content
└── Components/
    ├── ui/                 # shadcn/ui primitives (button, card, badge)
    ├── Navbar.tsx          # top navigation
    ├── Footer.tsx          # socials footnote
    ├── RouteGuard.tsx      # router guard wrapper
    ├── Home.tsx            # landing page composing all sections
    ├── NotFound.tsx
    ├── Hero/LandingHero.tsx
    ├── About/AboutSection.tsx
    ├── Experience/WorkExperience.tsx + ExperienceCard.tsx
    ├── Projects/ProjectsSection.tsx + ProjectCard.tsx
    └── Contact/ContactSection.tsx
```
