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
      <Seo title="Adrian Nykiel — Full-Stack Developer, Edinburgh" />
      <Page>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" />
        <InterestsSection sectionId="skills" />
        <ProjectsSection sectionId="work" />
        <ContactSection sectionId="contact" />
      </Page>
    </>
  );
}
