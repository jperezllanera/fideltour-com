"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type Locale = "es" | "en";

/**
 * UI-only language toggle. NO route-based i18n yet.
 * TODO senior: cuando se decida la estrategia de i18n (next-intl, paraglide,
 * etc.), reemplazar este componente por uno que cambie el segmento de ruta.
 */
export function LocaleToggle({ className }: { className?: string }) {
  const [locale, setLocale] = useState<Locale>("es");

  return (
    <div
      role="group"
      aria-label="Selector de idioma"
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-card/60 p-0.5 text-[11px] font-mono uppercase backdrop-blur",
        className,
      )}
    >
      {(["es", "en"] as const).map((l) => {
        const active = locale === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 transition-colors",
              active
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {l}
          </button>
        );
      })}
    </div>
  );
}
