"use client";

import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";
import { useRef, type ReactNode } from "react";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const mobile = useIsMobile(900);

  return (
    <div
      className={cn("[perspective:1100px]", className)}
      onMouseMove={(e) => {
        if (reduced || mobile || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        const rx = (py - 0.5) * -14;
        const ry = (px - 0.5) * 16;
        ref.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
      }}
      onMouseLeave={() => {
        if (!ref.current) return;
        ref.current.style.transform = "rotateX(0deg) rotateY(0deg)";
      }}
    >
      <div
        ref={ref}
        className="h-full will-change-transform"
        style={{ transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {children}
      </div>
    </div>
  );
}
