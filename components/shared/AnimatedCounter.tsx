"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = usePrefersReducedMotion();
  const motion = useMotionValue(0);
  const spring = useSpring(motion, { stiffness: 70, damping: 22 });

  useEffect(() => {
    if (inView) motion.set(value);
  }, [inView, motion, value]);

  useEffect(() => {
    if (reduced && ref.current) {
      ref.current.textContent = `${value}${suffix}`;
      return;
    }
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
    return unsub;
  }, [spring, suffix, reduced, value]);

  return <span ref={ref}>{reduced ? `${value}${suffix}` : `0${suffix}`}</span>;
}
