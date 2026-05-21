import { cn } from "@/lib/utils";
import { kitDigitalModules } from "@/lib/content/kit-digital";

export function KitDigitalModulosSection() {
  return (
    <section id="modulos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Soluciones subvencionables · 03
          </div>
          <h2 className="mt-3">
            Tres soluciones de Fideltour cubiertas por el Kit Digital.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Elige el módulo que mejor encaja con tu hotel. La ayuda cubre el
            coste de la implantación, dentro del importe máximo definido por
            segmento.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-8 md:gap-10">
          {kitDigitalModules.map(
            (
              { slug, product, category, description, icon: Icon, subsidies, priceRange },
              i,
            ) => (
              <article
                key={slug}
                id={slug}
                style={{ ["--i" as never]: i }}
                className={cn(
                  "bento-cell group relative overflow-hidden rounded-2xl border border-border/70 bg-card",
                  "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
                )}
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="grid gap-8 p-6 md:grid-cols-12 md:gap-10 md:p-10">
                  <header className="md:col-span-5 lg:col-span-4 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-11 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                        <Icon className="size-5" aria-hidden />
                      </span>
                      <span className="text-eyebrow text-brand-navy-deep">
                        {category}
                      </span>
                    </div>

                    <div>
                      <h3>{product}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                        {description}
                      </p>
                    </div>

                    {priceRange ? (
                      <p className="text-body-sm text-muted-foreground">
                        <span className="text-eyebrow-sm text-brand-navy-deep">
                          Rango precio
                        </span>{" "}
                        <span className="ml-2">{priceRange}</span>
                      </p>
                    ) : null}
                  </header>

                  <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-4">
                    <div className="text-eyebrow text-muted-foreground">
                      Ayuda máxima por segmento
                    </div>
                    <ul className="grid gap-3 sm:grid-cols-3">
                      {subsidies.map(({ segment, amount }) => (
                        <li
                          key={segment}
                          className="flex flex-col gap-2 rounded-xl border border-border/60 bg-background p-5 shadow-[var(--shadow-soft)]"
                        >
                          <span className="text-eyebrow text-brand-navy-deep">
                            {segment}
                          </span>
                          <span className="h-cta text-brand-navy">
                            {amount}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
