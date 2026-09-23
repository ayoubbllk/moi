"use client";

import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { useI18n } from "@/lib/i18n/context";
import { projects, type ProjectCategory } from "@/lib/projects";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type FilterId = "all" | ProjectCategory;

export function Projects() {
  const { t } = useI18n();
  const [filter, setFilter] = useState<FilterId>("all");

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projets" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:px-10 lg:py-32">
        <SectionReveal>
          <SectionLabel index="03">{t.projects.kicker}</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            {t.projects.title}
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink/55 sm:text-lg">{t.projects.subtitle}</p>
        </SectionReveal>

        <div
          className="-mx-4 mt-8 flex gap-2 overflow-x-auto px-4 pb-1 hide-scrollbar sm:mx-0 sm:mt-10 sm:flex-wrap sm:overflow-visible sm:px-0"
          role="tablist"
          aria-label={t.projects.kicker}
        >
          {t.projects.filters.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              data-cursor="hover"
              onClick={() => setFilter(f.id as FilterId)}
              className={cn(
                "h-11 shrink-0 px-4 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
                filter === f.id
                  ? "bg-ink text-paper"
                  : "border border-ink/15 text-ink/60 hover:border-ember hover:text-ember",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.45 }}
            className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 hide-scrollbar md:mt-12 md:grid md:grid-cols-2 md:overflow-visible md:pb-0"
          >
            {list.length === 0 ? (
              <p className="col-span-full py-16 text-ink/45">{t.projects.empty}</p>
            ) : (
              list.map((p, i) => (
                <div
                  key={p.slug}
                  className={`w-[88vw] shrink-0 snap-center sm:w-[70vw] md:w-auto md:min-w-0 ${i % 5 === 0 ? "md:col-span-2" : ""}`}
                >
                  <ProjectCard project={p} large={i % 5 === 0} />
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
