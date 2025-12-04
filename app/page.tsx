"use client";

import { useState } from "react";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/footer";
import { TerminalIntro } from "@/components/retro/terminal-intro";
import { MonitorWrapper } from "@/components/retro/monitor-wrapper";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <TerminalIntro onComplete={() => setShowIntro(false)} />;
  }

  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
