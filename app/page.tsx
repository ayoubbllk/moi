"use client";

import { About } from "@/components/about/About";
import { Contact } from "@/components/contact/Contact";
import { Expertise } from "@/components/expertise/Expertise";
import { Hero } from "@/components/hero/Hero";
import { Process } from "@/components/process/Process";
import { Projects } from "@/components/projects/Projects";
import { Marquee } from "@/components/shared/Marquee";
import { useI18n } from "@/lib/i18n/context";
import { projects } from "@/lib/projects";

export default function Home() {
  const { t } = useI18n();
  const names = projects.map((p) => p.name);
  const verbs = t.expertise.pillars.map((p) => p.title);

  return (
    <main id="contenu">
      <Hero />
      <Marquee items={names} />
      <About />
      <Marquee items={verbs} invert />
      <Expertise />
      <Projects />
      <Process />
      <Contact />
    </main>
  );
}
