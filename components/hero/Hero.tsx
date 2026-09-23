"use client";

import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { Magnetic } from "@/components/shared/Magnetic";
import { Button } from "@/components/ui/button";
import { useCan3D, usePrefersReducedMotion } from "@/lib/hooks";
import { useI18n } from "@/lib/i18n/context";
import { scrollToId } from "@/lib/lenis";
import { easeOutExpo } from "@/lib/motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState, type ComponentType } from "react";

type CanvasProps = { mouse: { current: { x: number; y: number } } };

export function Hero() {
  const { t } = useI18n();
  const can3D = useCan3D();
  const reduced = usePrefersReducedMotion();
  const section = useRef<HTMLElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [Canvas, setCanvas] = useState<ComponentType<CanvasProps> | null>(null);
  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  useEffect(() => {
    if (!can3D) return;
    let alive = true;
    import("@/components/hero/HeroCanvas").then((m) => {
      if (alive) setCanvas(() => m.default);
    });
    return () => {
      alive = false;
    };
  }, [can3D]);

  const words = t.hero.line.split(" ");

  return (
    <section
      id="top"
      ref={section}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper"
      onMouseMove={(e) => {
        mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -((e.clientY / window.innerHeight) * 2 - 1);
      }}
    >
      <div className="absolute inset-0 z-0" aria-hidden>
        {can3D && Canvas ? <Canvas mouse={mouse} /> : <div className="hero-fallback absolute inset-0" />}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/50 to-ink" />
      </div>

      <motion.div
        style={reduced ? undefined : { y, opacity: fade }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] flex-col justify-end px-4 pb-24 pt-24 sm:px-6 sm:pb-16 md:px-10 md:pb-20"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-paper/50"
        >
          <span className="pulse-ember inline-block h-1.5 w-1.5 rounded-full bg-ember" />
          {t.hero.kicker}
        </motion.p>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: easeOutExpo, delay: 0.08 }}
          className="font-display text-[clamp(2.4rem,11vw,7.2rem)] font-bold leading-[0.9] tracking-[-0.04em]"
        >
          {t.hero.name}
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo, delay: 0.2 }}
          className="mt-3 font-display text-[clamp(1.15rem,4.2vw,2.2rem)] font-semibold text-paper/50"
        >
          Com <span className="text-ember">&amp;</span> Code
        </motion.p>

        <p className="mt-7 max-w-xl font-display text-[clamp(1.25rem,4.6vw,2.05rem)] font-medium leading-[1.15] tracking-[-0.02em]">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              initial={reduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.28 + i * 0.045 }}
              className="me-1.5 inline-block"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOutExpo, delay: 0.55 }}
            className="text-ember"
          >
            {" "}
            {t.hero.lineAccent}
          </motion.span>
        </p>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.62 }}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-paper/60 sm:text-base"
        >
          {t.hero.body}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOutExpo, delay: 0.72 }}
          className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Magnetic>
            <Button
              type="button"
              className="w-full sm:w-auto"
              onClick={() => scrollToId("projets")}
              data-cursor="hover"
            >
              {t.hero.ctaPrimary}
            </Button>
          </Magnetic>
          <Magnetic>
            <Button
              type="button"
              variant="ghost"
              className="w-full sm:w-auto"
              onClick={() => scrollToId("contact")}
              data-cursor="hover"
            >
              {t.hero.ctaSecondary}
            </Button>
          </Magnetic>
        </motion.div>

        <dl className="mt-12 grid grid-cols-2 gap-x-4 gap-y-7 border-t border-paper/10 pt-7 sm:mt-16 sm:grid-cols-4 sm:gap-x-6">
          {t.stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[2rem] font-bold tracking-tight sm:text-4xl md:text-5xl">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </dd>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-paper/40">
                {s.label}
              </p>
            </div>
          ))}
        </dl>
      </motion.div>

      <button
        type="button"
        onClick={() => scrollToId("a-propos")}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-paper/40 md:bottom-8"
        aria-label={t.nav.about}
      >
        <span className="h-10 w-px bg-gradient-to-b from-ember to-transparent" />
      </button>
    </section>
  );
}
