"use client";

import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/utils";

export function LangSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      role="group"
      aria-label={t.lang.switch}
      className={cn("inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-[0.16em]", className)}
    >
      <button
        type="button"
        data-cursor="hover"
        onClick={() => setLocale("fr")}
        className={cn(
          "px-2 py-1 transition-colors",
          locale === "fr" ? "text-ember" : "text-paper/45 hover:text-paper",
        )}
      >
        {t.lang.fr}
      </button>
      <span className="text-paper/25" aria-hidden>
        /
      </span>
      <button
        type="button"
        data-cursor="hover"
        onClick={() => setLocale("ar")}
        className={cn(
          "px-2 py-1 transition-colors",
          locale === "ar" ? "text-ember" : "text-paper/45 hover:text-paper",
        )}
      >
        {t.lang.ar}
      </button>
    </div>
  );
}
