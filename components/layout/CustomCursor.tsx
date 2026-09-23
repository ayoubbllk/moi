"use client";

import { useIsMobile, usePrefersReducedMotion } from "@/lib/hooks";
import { useEffect, useRef } from "react";

export function CustomCursor() {
  const ring = useRef<HTMLDivElement>(null);
  const mobile = useIsMobile(1024);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (mobile || reduced) return;
    const el = ring.current;
    if (!el) return;

    document.documentElement.classList.add("has-custom-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest("a, button, [data-cursor='hover']");
      el.dataset.hover = interactive ? "1" : "0";
    };

    const tick = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, [mobile, reduced]);

  if (mobile || reduced) return null;

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper mix-blend-difference transition-[width,height,background-color] duration-300 data-[hover='1']:h-14 data-[hover='1']:w-14 data-[hover='1']:bg-ember data-[hover='1']:mix-blend-normal"
    />
  );
}
