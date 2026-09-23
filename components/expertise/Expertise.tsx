"use client";

import { TiltCard } from "@/components/expertise/TiltCard";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { useI18n } from "@/lib/i18n/context";

export function Expertise() {
  const { t } = useI18n();

  return (
    <section id="expertise" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 md:px-10 lg:py-32">
        <SectionReveal>
          <SectionLabel index="02" invert>
            {t.expertise.kicker}
          </SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-[clamp(2rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
            {t.expertise.title}
          </h2>
        </SectionReveal>

        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 hide-scrollbar lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-5 lg:overflow-visible lg:pb-0">
          {t.expertise.pillars.map((p) => (
            <TiltCard key={p.id} className="w-[86vw] shrink-0 snap-center sm:w-[70vw] lg:w-auto">
              <article
                data-cursor="hover"
                className="group relative flex h-full min-h-[360px] flex-col overflow-hidden border border-paper/10 bg-graphite p-6 sm:p-8 md:p-10"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ember">{p.id}</span>
                <h3 className="mt-5 font-display text-[1.7rem] font-semibold tracking-tight sm:text-3xl">
                  {p.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-paper/55 sm:text-base">{p.text}</p>
                <ul className="mt-auto space-y-2 border-t border-paper/10 pt-6">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.12em] text-paper/70"
                    >
                      <span className="h-px w-4 shrink-0 bg-ember" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-8 -end-4 font-display text-[7rem] font-bold text-ember/10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:text-ember/20"
                >
                  &amp;
                </span>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
