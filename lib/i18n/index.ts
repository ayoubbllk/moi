import { ar } from "@/lib/i18n/ar";
import { fr, type Dictionary } from "@/lib/i18n/fr";

export const locales = ["fr", "ar"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "fr";

const dictionaries: Record<Locale, Dictionary> = { fr, ar };

export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? fr;
}

export type { Dictionary };
