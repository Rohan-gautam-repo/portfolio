"use client";

import HeroSection from "@/components/hero/hero-section";
import AboutSection from "@/components/sections/about-section";
import SkillsSection from "@/components/sections/skills-section";
import ExperienceSection from "@/components/sections/experience-section";
import ProjectsSection from "@/components/sections/projects-section";
import PublicationsSection from "@/components/sections/publications-section";
import ContactSection from "@/components/sections/contact-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      suppressHydrationWarning
    >
      <main className="overflow-hidden">
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="skills">
          <SkillsSection />
        </section>
        
        <section id="experience">
          <ExperienceSection />
        </section>
        
        <section id="projects">
          <ProjectsSection />
        </section>
        
        <section id="publications">
          <PublicationsSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
      </main>
    </motion.div>
  );
}
