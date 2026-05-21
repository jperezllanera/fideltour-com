import { partnerTypes } from "@/lib/content/partners";

export function PartnersTypesSection() {
  return (
    <section id="tipos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:px-6 md:pt-24 md:pb-16">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Para quién · 02
          </div>
          <h2 className="mt-3">
            Sé parte de Fideltour
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Construimos partnerships con quienes ya están cerca del hotelero:
            agencias de marketing especializadas y proveedores tecnológicos
            que quieren amplificar su catálogo.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {partnerTypes.map((type, i) => {
            const Icon = type.icon;
            return (
              <article
                key={type.slug}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)] md:p-8"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <header className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="text-eyebrow text-brand-navy-deep">
                      {type.eyebrow}
                    </span>
                  </div>
                  <h3>{type.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    {type.description}
                  </p>
                </header>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {type.benefits.map((benefit) => (
                    <li
                      key={benefit.title}
                      className="flex flex-col gap-1 rounded-xl border border-border/60 bg-muted/40 p-4"
                    >
                      <span className="text-sm font-semibold text-brand-navy">
                        {benefit.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {benefit.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
