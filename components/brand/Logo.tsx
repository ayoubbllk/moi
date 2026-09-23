import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  invert?: boolean;
  compact?: boolean;
  baseline?: string;
};

export function Logo({
  className,
  invert = false,
  compact = false,
  baseline = "communication et code",
}: LogoProps) {
  const ink = invert ? "text-paper" : "text-ink";
  return (
    <span className={cn("inline-flex flex-col items-start leading-none", className)}>
      <span className={cn("font-display text-[1.2rem] font-bold tracking-tight sm:text-[1.35rem]", ink)}>
        Com <span className="text-ember">&amp;</span> Code
      </span>
      {!compact && (
        <span className="mt-1.5 flex items-center gap-2 text-ember">
          <span className="h-px w-4 bg-ember" aria-hidden />
          <span className="font-mono text-[8px] uppercase tracking-[0.28em]">{baseline}</span>
          <span className="h-px w-4 bg-ember" aria-hidden />
        </span>
      )}
    </span>
  );
}
