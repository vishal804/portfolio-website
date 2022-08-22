import React from "react";
import { AboutSection } from "./aboutSection/AboutSection";
import { BlogSection } from "./blogSection/BlogSection";
import { ProjectSection } from "./projectSection/ProjectSection";
import { SkillSection } from "./skillSection/SkillSection";
import { SocialSection } from "./socialSection/SocialSection";

const ProfilePage = () => {
  return (
    <div className="body">
      <section id="about">
        <AboutSection />
      </section>
      <section id="projects">
        <ProjectSection />
      </section>
      <section id="skills">
        <SkillSection />
      </section>
      <section id="blog">
        <BlogSection />
      </section>
      <section id="social">
        <SocialSection />
      </section>
    </div>
  );
};

export { ProfilePage };
