import { cn } from "@/lib/utils";
import type { ModuleMiniCard } from "@/lib/content/module-landings/_types";

type Props = {
  cards: ModuleMiniCard[];
};

/**
 * Trío de mini-cards bajo el hero. Layout 1 col móvil / 3 col desktop.
 * Reutiliza el patrón visual de `bento-cell` con el efecto reveal por
 * índice (`--i`) ya definido en `globals.css`.
 */
export function ModuleMiniCards({ cards }: Props) {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-20 md:px-6 md:pt-24 md:pb-24">
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          {cards.map(({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-6",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
              )}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {Icon && (
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                  <Icon className="size-5" />
                </span>
              )}

              <h3>{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
