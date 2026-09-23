"use client";

import { SectionLabel } from "@/components/shared/SectionLabel";
import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n/context";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Process() {
  const { t, dir } = useI18n();
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const mobile = useIsMobile(900);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (mobile || reduced || !pin.current || !track.current) return;

    const ctx = gsap.context(() => {
      gsap.to(track.current, {
        x: () => {
          const delta = track.current!.scrollWidth - window.innerWidth;
          return dir === "rtl" ? delta : -delta;
        },
        ease: "none",
        scrollTrigger: {
          trigger: pin.current,
          start: "top top",
          end: () => `+=${track.current!.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pin);

    return () => ctx.revert();
  }, [mobile, reduced, dir]);

  return (
    <section id="process" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-4 pt-20 sm:px-6 md:px-10 lg:pt-32">
        <SectionLabel index="04" invert>
          {t.process.kicker}
        </SectionLabel>
        <h2 className="mt-5 max-w-3xl font-display text-[clamp(2rem,8vw,4.1rem)] font-bold leading-[0.95] tracking-[-0.03em]">
          {t.process.title}
        </h2>
        <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.28em] text-paper/35">
          {t.processHint}
        </p>
      </div>

      {mobile || reduced ? (
        <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-16 hide-scrollbar sm:px-6">
          {t.process.steps.map((s) => (
            <article
              key={s.n}
              className="w-[82vw] shrink-0 snap-center border border-paper/10 bg-graphite p-6 sm:w-[60vw] sm:p-8"
            >
              <p className="font-display text-6xl font-bold leading-none text-ember/30">{s.n}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/55 sm:text-base">{s.text}</p>
            </article>
          ))}
        </div>
      ) : (
        <div ref={pin} className="relative h-screen overflow-hidden">
          <div ref={track} className="flex h-full w-max items-stretch pt-8">
            {t.process.steps.map((s) => (
              <article
                key={s.n}
                className="flex h-full w-[68vw] max-w-[780px] shrink-0 flex-col justify-center border-s border-paper/10 px-16"
              >
                <p className="font-display text-[8rem] font-bold leading-none text-ember/25">{s.n}</p>
                <h3 className="mt-2 font-display text-5xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/55">{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
