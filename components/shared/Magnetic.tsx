"use client";

import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

export function Magnetic({
  children,
  className,
  strength = 0.28,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile(900);

  return (
    <div
      ref={ref}
      className={cn("inline-block will-change-transform", className)}
      onMouseMove={(e) => {
        if (reduced || mobile || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * strength;
        const y = (e.clientY - r.top - r.height / 2) * strength;
        ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.transform = "translate3d(0, 0, 0)";
      }}
      style={{ transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {children}
    </div>
  );
}
