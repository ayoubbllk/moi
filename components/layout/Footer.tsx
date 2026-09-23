"use client";

import { Logo } from "@/components/brand/Logo";
import { useI18n } from "@/lib/i18n/context";
import { scrollToId } from "@/lib/lenis";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-12 pb-20 sm:px-6 md:flex-row md:items-end md:justify-between md:px-10 md:py-16 lg:pb-16">
        <div>
          <Logo invert baseline={t.logo.baseline} />
          <p className="mt-4 max-w-xs text-sm text-paper/50">{t.footer.location}</p>
        </div>
        <div className="flex flex-col items-start gap-3 md:items-end">
          <a
            href={`mailto:${site.email}`}
            data-cursor="hover"
            className="min-h-11 font-mono text-xs tracking-wide text-paper/70 hover:text-ember"
          >
            {site.email}
          </a>
          <button
            type="button"
            onClick={() => scrollToId("top")}
            data-cursor="hover"
            className="min-h-11 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/45 hover:text-ember"
          >
            {t.footer.top}
          </button>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper/35">
            {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
