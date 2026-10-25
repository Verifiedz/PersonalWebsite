import LandingHero from "@/Components/Hero/LandingHero";
import AboutSection from "@/Components/About/AboutSection";
import WorkExperience from "@/Components/Experience/WorkExperience";
import ProjectsSection from "@/Components/Projects/ProjectsSection";
import ShimmerSection from "@/Components/Shimmer/ShimmerSection";
import ContactSection from "@/Components/Contact/ContactSection";

/**
 * The single landing page. Stacks every section in order so a visitor can
 * scroll straight through — the "scroll down" navigation option from the brief,
 * complementing the navbar's anchor links.
 *
 * ShimmerSection sits after Projects on purpose: Projects carries the
 * stack-matching signal for the roles being targeted, Shimmer is the
 * founder-initiative signal.
 */
export default function Home() {
  return (
    <main>
      <LandingHero />
      <AboutSection />
      <WorkExperience />
      <ProjectsSection />
      <ShimmerSection />
      <ContactSection />
    </main>
  );
}
