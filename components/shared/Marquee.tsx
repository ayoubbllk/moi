"use client";

import { usePrefersReducedMotion } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Marquee({
  items,
  invert = false,
  className,
}: {
  items: string[];
  invert?: boolean;
  className?: string;
}) {
  const reduced = usePrefersReducedMotion();
  const row = [...items, ...items];

  return (
    <div
      className={cn(
        "relative overflow-hidden border-y",
        invert ? "border-paper/10 bg-ink text-paper" : "border-ink/10 bg-paper text-ink",
        className,
      )}
    >
      <div className={cn("flex w-max gap-10 py-3", !reduced && "marquee-track")}>
        {row.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-xl font-semibold tracking-tight md:text-2xl">{item}</span>
            <span className="text-ember" aria-hidden>
              &amp;
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
