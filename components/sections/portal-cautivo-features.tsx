import { cn } from "@/lib/utils";

import { portalFeatures, portalAdvantages } from "@/lib/content/portal-cautivo";

export function PortalCautivoFeaturesSection() {
  return (
    <section id="caracteristicas" className="relative bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Más conexiones, más conocimiento
          </div>
          <h2 className="mt-3">
            El WiFi de tu hotel deja de ser un servicio básico y se convierte
            en un canal de captación y fidelización.
          </h2>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {portalFeatures.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell relative flex gap-5 rounded-2xl border border-border/70 bg-card p-6 md:p-8",
                "shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]",
              )}
            >
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-navy text-white">
                <Icon className="size-5" aria-hidden />
              </span>
              <div className="flex flex-col gap-2">
                <h3>{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-20 max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Ventajas diferenciales
          </div>
          <h2 className="mt-3">
            Sincronización en tiempo real con el resto del ecosistema.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {portalAdvantages.map(({ icon: Icon, title, description }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i + portalFeatures.length }}
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
