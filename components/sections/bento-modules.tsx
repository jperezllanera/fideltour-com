import { cn } from "@/lib/utils";
import { bentoModules } from "@/lib/content/modules";

export function BentoModulesSection() {
  return (
    <section id="plataforma" className="relative">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            La plataforma · 12 módulos
          </div>
          <h2 className="mt-3">
            Un CDP que unifica todo el dato del hotel.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cada módulo trabaja sobre el mismo perfil unificado. No copias entre
            herramientas, no ETLs interminables, no datos huérfanos: una sola
            verdad por huésped.
          </p>
        </div>

        <div className="bento-grid mt-12">
          {bentoModules.map((m, i) => (
            <article
              key={m.id}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/70 bg-card p-5",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
                "min-h-[170px]",
                m.span,
              )}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <header className="flex items-start justify-between gap-3">
                <span className="text-eyebrow text-brand-navy-deep">
                  {m.label}
                </span>
                {m.metric && (
                  <span className="text-2xs text-brand-navy">
                    {m.metric}
                  </span>
                )}
              </header>

              <div className="mt-6">
                <h3>
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {m.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
