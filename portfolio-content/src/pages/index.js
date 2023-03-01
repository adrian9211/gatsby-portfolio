import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "theme";

export default function IndexPage() {
  return (
    <>
      <Seo title="Freelance Web developer based Edinburgh, Scotland" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="interests" heading="Interests" />
        <ProjectsSection sectionId="features" heading="Projects" />
        <ContactSection sectionId="github" heading="Thank you for reaching out!" />
      </Page>
    </>
  );
}
