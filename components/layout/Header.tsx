"use client";

import { Logo } from "@/components/brand/Logo";
import { LangSwitch } from "@/components/layout/LangSwitch";
import { useI18n } from "@/lib/i18n/context";
import { scrollToId } from "@/lib/lenis";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { id: "a-propos", key: "about" as const },
  { id: "expertise", key: "expertise" as const },
  { id: "projets", key: "projects" as const },
  { id: "process", key: "process" as const },
];

export function Header() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-ink/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[72px] sm:px-6 md:px-10">
        <button
          type="button"
          onClick={() => go("top")}
          data-cursor="hover"
          className="min-h-11 text-start"
          aria-label={t.hero.brand}
        >
          <Logo invert compact />
        </button>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              data-cursor="hover"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70 transition-colors hover:text-ember"
            >
              {t.nav[l.key]}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangSwitch />
          <button
            type="button"
            onClick={() => go("contact")}
            data-cursor="hover"
            className="hidden h-10 items-center bg-ember px-5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ember-hot lg:inline-flex"
          >
            {t.nav.contact}
          </button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" className="border-t border-paper/10 bg-ink px-4 py-5 lg:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => go(l.id)}
                  className="w-full py-3.5 text-start font-display text-[1.7rem] leading-none text-paper"
                >
                  {t.nav[l.key]}
                </button>
              </li>
            ))}
            <li>
              <button
                type="button"
                onClick={() => go("contact")}
                className="mt-3 min-h-12 w-full bg-ember font-mono text-[11px] uppercase tracking-[0.2em] text-ink"
              >
                {t.nav.contact}
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
