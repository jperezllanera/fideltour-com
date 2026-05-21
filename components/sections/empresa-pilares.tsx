import { empresaPilares } from "@/lib/content/empresa";

export function EmpresaPilaresSection() {
  return (
    <section id="pilares" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Pilares · 03
          </div>
          <h2 className="mt-3">
            Tres principios que guían cada decisión de producto
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Fideltour no es un CRM genérico maquillado para hotelería. Cada
            módulo, cada flujo y cada integración se diseña respondiendo a
            estos tres pilares.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {empresaPilares.map(({ title, description, icon: Icon }, i) => (
            <article
              key={title}
              style={{ ["--i" as never]: i + 1 }}
              className="bento-cell group relative flex flex-col gap-5 overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)] md:p-8"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <span className="inline-flex size-12 items-center justify-center rounded-full bg-brand-navy text-white transition-colors group-hover:bg-brand">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3>{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
