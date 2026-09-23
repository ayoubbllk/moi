"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";
import { setLenis } from "@/lib/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { useEffect, type ReactNode } from "react";

// Setup GSAP ScrollTrigger — register once, then feed Lenis into gsap.ticker
// so pin / scrub stay in sync with the smooth scroll.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (reduced) return;

    const lenis = new Lenis({
      duration: 1.45,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.82,
      touchMultiplier: 1.45,
      syncTouch: true,
    });

    setLenis(lenis);
    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("resize", refresh);
    const warm = window.setTimeout(refresh, 400);

    return () => {
      window.clearTimeout(warm);
      window.removeEventListener("resize", refresh);
      gsap.ticker.remove(onTick);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduced]);

  return <>{children}</>;
}
