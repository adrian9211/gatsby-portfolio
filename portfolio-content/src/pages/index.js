import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  MetricsSection,
  Page,
  ProjectsSection,
  Seo,
} from "theme";

const metrics = [
  { value: "2+", label: "Years at Amazon" },
  { value: "1st", label: "Best Result in Class of 30+" },
  { value: "50+", label: "Articles & Audio Content" },
  { value: "1000+", label: "Structured Workouts Built" },
];

export default function IndexPage() {
  return (
    <>
      <Seo title="Adrian Nykiel — Full-Stack Developer, Edinburgh" />
      <Page>
        <HeroSection sectionId="hero" />
        <MetricsSection sectionId="metrics" metrics={metrics} />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="interests" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="contact" heading="Get in Touch" />
      </Page>
    </>
  );
}
