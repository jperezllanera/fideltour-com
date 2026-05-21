import { cn } from "@/lib/utils";

import { cdpBenefits } from "@/lib/content/cdp";

export function CdpBeneficiosSection() {
  return (
    <section id="beneficios" className="relative bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Beneficios · 03
          </div>
          <h2 className="mt-3">
            Lo que cambia cuando todos tus datos viven en un mismo sitio.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Fideltour CDP no es un repositorio: es una capa que activa el dato
            en cada canal y a cada paso del guest journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {cdpBenefits.map(({ icon: Icon, title, description }, i) => (
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
