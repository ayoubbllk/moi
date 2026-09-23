"use client";

import { CustomCursor } from "@/components/layout/CustomCursor";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LocaleProvider } from "@/lib/i18n/context";
import { type ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <SmoothScroll>
        <ScrollProgress />
        <CustomCursor />
        {children}
      </SmoothScroll>
    </LocaleProvider>
  );
}
