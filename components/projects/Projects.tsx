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
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 sm:py-20 md:px-10 lg:py-32">
        <SectionReveal>
          <SectionLabel index="03">{t.projects.kicker}</SectionLabel>
          <h2 className="mt-4 max-w-2xl font-display text-[clamp(1.85rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            {t.projects.title}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] text-ink/55 sm:mt-4 sm:text-lg">{t.projects.subtitle}</p>
        </SectionReveal>

        <div
          className="mt-6 flex flex-wrap gap-2 sm:mt-10"
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
                "min-h-11 px-3.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors sm:px-4 sm:tracking-[0.16em]",
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
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4 }}
            className="mt-6 grid grid-cols-1 gap-5 sm:mt-10 sm:gap-6 md:mt-12 md:grid-cols-2"
          >
            {list.length === 0 ? (
              <p className="col-span-full py-16 text-ink/45">{t.projects.empty}</p>
            ) : (
              list.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
