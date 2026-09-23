"use client";

import { TiltCard } from "@/components/expertise/TiltCard";
import { Magnetic } from "@/components/shared/Magnetic";
import { useI18n } from "@/lib/i18n/context";
import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ProjectCard({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  const { t } = useI18n();
  const [hover, setHover] = useState(false);
  const host = project.url.replace(/^https?:\/\//, "");
  const copy = t.cases[project.slug as keyof typeof t.cases];

  return (
    <TiltCard className={large ? "md:col-span-2" : undefined}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        data-cursor="hover"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="group relative flex h-full min-h-[320px] flex-col overflow-hidden border border-ink/10 bg-white sm:min-h-[360px] md:min-h-[400px]"
      >
        <div
          className="relative min-h-[200px] flex-1 overflow-hidden sm:min-h-[240px]"
          style={{ background: `linear-gradient(160deg, ${project.accent}55, #0A0A0A)` }}
        >
          {project.image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={project.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-80" />
          )}
          {hover && (
            <iframe
              src={project.url}
              title={`${t.projects.visit} ${project.name}`}
              tabIndex={-1}
              sandbox=""
              referrerPolicy="no-referrer"
              className="pointer-events-none absolute inset-0 hidden h-[200%] w-[200%] origin-top-left scale-50 border-0 opacity-40 md:block"
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="font-display text-[2rem] font-bold leading-none tracking-tight text-paper sm:text-5xl md:text-6xl">
              {project.name}
            </p>
          </div>
          <div className="absolute end-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/70">
            {host}
          </div>
        </div>

        <div className="flex items-start justify-between gap-4 bg-paper p-5 sm:p-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-ember">
              {copy?.sector ?? project.sector}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/65">
              {copy?.problem ?? project.problem}
            </p>
            {project.stack && (
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/35">
                {project.stack}
              </p>
            )}
          </div>
          <Magnetic strength={0.2}>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors group-hover:border-ember group-hover:bg-ember">
              <ArrowUpRight size={16} className="rtl:rotate-180" />
              <span className="sr-only">{t.projects.visit}</span>
            </span>
          </Magnetic>
        </div>
      </a>
    </TiltCard>
  );
}
