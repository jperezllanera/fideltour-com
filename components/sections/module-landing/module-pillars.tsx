import { cn } from "@/lib/utils";
import type { ModulePillar } from "@/lib/content/module-landings/_types";

type Props = {
  pillars: ModulePillar[];
  /** Eyebrow opcional de la sección. */
  eyebrow?: string;
  /** Heading opcional de la sección. */
  heading?: string;
};

/**
 * Cuatro pilares "Más X, menos Y" — el patrón largo del cuerpo de cada
 * landing. Grid 2×2 desktop / 1 col móvil. Sigue el estilo `bento-cell`
 * con métrica opcional en la esquina superior derecha.
 */
export function ModulePillars({
  pillars,
  eyebrow = "Por qué importa",
  heading = "Lo que cambia cuando el dato vive en el CDP.",
}: Props) {
  return (
    <section id="plataforma" className="relative bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">{eyebrow}</div>
          <h2 className="mt-3">{heading}</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 md:gap-6">
          {pillars.map(({ title, description, metric }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 md:p-8",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
              )}
            >
              <header className="flex items-start justify-between gap-3">
                <span className="text-eyebrow text-brand-navy-deep">
                  Pilar · 0{i + 1}
                </span>
                {metric && (
                  <span className="text-2xs text-brand">{metric}</span>
                )}
              </header>

              <div>
                <h3>{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
