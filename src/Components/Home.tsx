import LandingHero from "@/Components/Hero/LandingHero";
import AboutSection from "@/Components/About/AboutSection";
import WorkExperience from "@/Components/Experience/WorkExperience";
import ProjectsSection from "@/Components/Projects/ProjectsSection";
import ContactSection from "@/Components/Contact/ContactSection";

/**
 * The single landing page. Stacks every section in order so a visitor can
 * scroll straight through — the "scroll down" navigation option from the brief,
 * complementing the navbar's anchor links.
 */
export default function Home() {
  return (
    <main>
      <LandingHero />
      <AboutSection />
      <WorkExperience />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
