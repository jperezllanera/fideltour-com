import { cdpSources } from "@/lib/content/cdp";

export function CdpThreeSourcesSection() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Las tres fuentes
          </div>
          <h2 className="mt-3">
            Tu contexto vive en{" "}
            <span className="text-brand-navy-deep">tres sitios</span>.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Cuantas más fuentes conectas, más rico es el contexto. Y ahí está
            tu mayor ventaja frente a las OTAs: ellas tienen el dato de
            búsqueda; tú tienes el de toda la estancia.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {cdpSources.map((source) => {
            const Icon = source.icon;
            return (
              <article
                key={source.number}
                className="grid items-start gap-5 rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)] md:grid-cols-[auto_1fr_auto] md:items-center md:gap-8 md:p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="font-sans text-3xl font-bold text-brand md:text-4xl">
                    {source.number}
                  </div>
                  <div className="text-eyebrow text-brand-navy-deep">
                    {source.kicker}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-brand-navy">{source.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {source.description}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-start md:self-center md:justify-end">
                  <span className="text-eyebrow inline-flex items-center gap-2 rounded-full border border-border/70 bg-muted/40 px-3 py-1 text-muted-foreground">
                    <Icon className="size-3.5 text-brand" aria-hidden />
                    {source.label}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
