import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  children,
  invert = false,
}: {
  index: string;
  children: string;
  invert?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em]",
        invert ? "text-paper/50" : "text-ink/45",
      )}
    >
      <span className="text-ember">{index}</span>
      <span className="h-px w-8 bg-ember" aria-hidden />
      <span>{children}</span>
    </p>
  );
}
