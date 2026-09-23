"use client";

import { TiltCard } from "@/components/expertise/TiltCard";
import { useI18n } from "@/lib/i18n/context";
import type { Project } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useI18n();
  const host = project.url.replace(/^https?:\/\//, "");
  const copy = t.cases[project.slug as keyof typeof t.cases];
  const [broken, setBroken] = useState(false);

  return (
    <TiltCard>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="no-referrer"
        data-cursor="hover"
        className="group flex h-full flex-col overflow-hidden border border-ink/10 bg-white"
      >
        <div
          className="relative aspect-[16/10] overflow-hidden bg-ink"
          style={{ background: `linear-gradient(160deg, ${project.accent}66, #0A0A0A)` }}
        >
          {project.image && !broken ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt={project.name}
              width={1440}
              height={900}
              onError={() => setBroken(true)}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : null}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-ink/10" />
          <div className="absolute end-3 top-3 bg-ink/75 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-paper/90 backdrop-blur-sm sm:end-4 sm:top-4 sm:text-[10px] sm:tracking-[0.2em]">
            {host}
          </div>
        </div>

        <div className="flex items-start justify-between gap-3 bg-paper p-4 sm:gap-4 sm:p-5">
          <div className="min-w-0">
            <p className="font-display text-[1.45rem] font-bold leading-none tracking-tight text-ink sm:text-[1.85rem]">
              {project.name}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ember">
              {copy?.sector ?? project.sector}
            </p>
            <p className="mt-1.5 text-[13px] leading-relaxed text-ink/65 sm:text-sm">
              {copy?.problem ?? project.problem}
            </p>
            {project.stack && (
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.14em] text-ink/35">
                {project.stack}
              </p>
            )}
          </div>
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 text-ink transition-colors group-hover:border-ember group-hover:bg-ember group-hover:text-ink">
            <ArrowUpRight size={16} className="rtl:rotate-180" />
            <span className="sr-only">{t.projects.visit}</span>
          </span>
        </div>
      </a>
    </TiltCard>
  );
}
