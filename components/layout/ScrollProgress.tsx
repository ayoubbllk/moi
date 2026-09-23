"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, restDelta: 0.001 });
  const reduced = usePrefersReducedMotion();

  if (reduced) return null;

  return (
    <motion.div
      aria-hidden
      className="scroll-progress fixed inset-x-0 top-0 z-[70] h-[2px] bg-ember"
      style={{ scaleX }}
    />
  );
}
