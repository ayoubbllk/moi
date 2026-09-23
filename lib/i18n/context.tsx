"use client";

import { getDictionary, type Dictionary, type Locale } from "@/lib/i18n";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

const STORAGE = "comcode-locale";

type I18n = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Dictionary;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18n | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("fr");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE);
    if (saved === "ar" || saved === "fr") setLocaleState(saved);
  }, []);

  useEffect(() => {
    const dict = getDictionary(locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = dict.dir;
    document.documentElement.classList.toggle("is-rtl", locale === "ar");
    window.localStorage.setItem(STORAGE, locale);
  }, [locale]);

  const value = useMemo<I18n>(() => {
    const t = getDictionary(locale);
    return {
      locale,
      dir: t.dir,
      t,
      setLocale: setLocaleState,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    const t = getDictionary("fr");
    return { locale: "fr" as Locale, dir: t.dir, t, setLocale: () => undefined };
  }
  return ctx;
}
