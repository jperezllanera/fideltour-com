import { cn } from "@/lib/utils";

import { portalBenefits } from "@/lib/content/portal-cautivo";

export function PortalCautivoBeneficiosSection() {
  return (
    <section id="beneficios" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Por qué integrarlo
          </div>
          <h2 className="mt-3">
            Convierte el WiFi en una de las palancas más rentables de tu hotel.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            El portal cautivo deja de ser un mero servicio de conectividad y se
            convierte en una fuente continua de datos identificados.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {portalBenefits.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell relative flex flex-col gap-5 rounded-2xl border border-border/70 bg-card p-6 md:p-8",
                "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
              )}
            >
              <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white">
                <Icon className="size-5" aria-hidden />
              </span>

              <div className="flex flex-col gap-3">
                <h3>{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
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
