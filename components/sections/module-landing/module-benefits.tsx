import { cn } from "@/lib/utils";
import type { ModuleBenefit } from "@/lib/content/module-landings/_types";

type Props = {
  benefits: ModuleBenefit[];
  eyebrow?: string;
  heading?: string;
};

/**
 * Tres beneficios numerados — el bloque corto de cierre antes de la FAQ.
 * Grid 1 col móvil / 3 col desktop, con número grande tipo "01" en la
 * esquina superior, en color de marca.
 */
export function ModuleBenefits({
  benefits,
  eyebrow = "En lo concreto",
  heading = "Qué se lleva el equipo del hotel.",
}: Props) {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">{eyebrow}</div>
          <h2 className="mt-3">{heading}</h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {benefits.map(({ title, description }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
              )}
            >
              <span
                aria-hidden
                className="text-eyebrow text-brand"
              >
                0{i + 1}
              </span>
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
