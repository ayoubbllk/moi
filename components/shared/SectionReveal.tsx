"use client";

import { reveal } from "@/lib/motion";
import { usePrefersReducedMotion } from "@/lib/hooks";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function SectionReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = usePrefersReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
      variants={{
        ...reveal,
        visible: {
          ...reveal.visible,
          transition: { ...reveal.visible.transition, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
