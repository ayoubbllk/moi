"use client";

import { Parallax } from "@/components/shared/Parallax";
import { SectionLabel } from "@/components/shared/SectionLabel";
import { SectionReveal } from "@/components/shared/SectionReveal";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n/context";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export function About() {
  const { t, dir } = useI18n();
  const reduced = usePrefersReducedMotion();
  const list = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 80%", "end 50%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="a-propos" className="relative overflow-hidden bg-paper text-ink">
      <Parallax offset={70} className="pointer-events-none absolute -end-6 top-16 select-none sm:top-24">
        <span className="font-display text-[42vw] font-bold leading-none text-ink/[0.045] sm:text-[28vw]">
          &amp;
        </span>
      </Parallax>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-6 md:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-32">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionReveal>
            <SectionLabel index="01">{t.about.kicker}</SectionLabel>
            <h2 className="mt-5 max-w-md font-display text-[clamp(2rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
              {t.about.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 sm:text-lg">{t.about.lead}</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-ink/50 sm:text-base">{t.about.body}</p>
          </SectionReveal>
        </div>

        <ol ref={list} className="relative border-s border-ink/10 ps-7 sm:ps-10 md:ps-12">
          <motion.span
            aria-hidden
            className="absolute start-0 top-0 w-px origin-top bg-ember"
            style={{ height: "100%", scaleY: reduced ? 1 : scaleY }}
          />
          {t.about.timeline.map((item, i) => (
            <motion.li
              key={item.year}
              initial={reduced ? false : { opacity: 0, x: dir === "rtl" ? -28 : 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-12 last:mb-0 sm:mb-14"
            >
              <span
                aria-hidden
                className="absolute -start-[33px] top-1.5 h-3 w-3 rounded-full border-2 border-ember bg-paper sm:-start-[45px] md:-start-[53px]"
              />
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-ember">{item.year}</p>
              <h3 className="mt-2 font-display text-[1.55rem] font-semibold tracking-tight sm:text-2xl md:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink/55 sm:text-base">{item.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
