import {
  partnerCommissionRules,
  partnerProgramBenefits,
} from "@/lib/content/partners";

export function PartnersProgramSection() {
  return (
    <section id="programa" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Cómo funciona
          </div>
          <h2 className="mt-3">
            Cómo se comisiona y qué te damos para vender
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            El modelo está pensado para que el partner se centre en abrir
            puerta — Fideltour cierra, factura, implementa y da soporte.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {partnerCommissionRules.map((rule, i) => {
            const Icon = rule.icon;
            return (
              <article
                key={rule.title}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3>{rule.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {rule.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="text-eyebrow text-brand-navy-deep">
            Soporte del programa
          </div>
          <h2 className="mt-3">
            Lo que recibes al firmar como partner
          </h2>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {partnerProgramBenefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3>{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
