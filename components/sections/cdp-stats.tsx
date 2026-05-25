import { cdpStats } from "@/lib/content/cdp";

export function CdpStatsSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Por qué Fideltour
          </div>
          <h2 className="mt-3">
            Ya movemos el dato{" "}
            <span className="text-brand-navy-deep">a escala</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            No es un piloto. Es la base sobre la que se construyen los
            agentes que vienen. El mayor marketplace de conectividad del
            sector hotelero, reconocido mejor CRM de Europa, y un agente que
            ya conversa con huéspedes reales por WhatsApp.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8">
          {cdpStats.map((stat) => (
            <article
              key={stat.value}
              className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] md:p-8"
            >
              <div className="h-mega text-brand-navy-deep">{stat.value}</div>
              <div className="text-base font-bold text-brand-navy">
                {stat.label}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {stat.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
