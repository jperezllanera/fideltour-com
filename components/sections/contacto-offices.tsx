import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { oficinas } from "@/lib/content/oficinas";
import { cn } from "@/lib/utils";

export function ContactoOfficesSection() {
  return (
    <section id="oficinas" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Oficinas · 04
          </div>
          <h2 className="mt-3">
            Cerca de los hoteles que confían en nosotros.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Equipo local en cuatro mercados, una sola plataforma. Pásate a
            saludar o llámanos directamente — hablamos tu idioma.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {oficinas.map(({ id, pais, ciudad, flag, direccion, telefono, mapsUrl }, i) => (
            <article
              key={id}
              style={{ ["--i" as never]: i }}
              className={cn(
                "bento-cell group relative flex flex-col gap-6 overflow-hidden rounded-2xl border border-border/70 bg-card p-6",
                "shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-bento)] transition-shadow duration-300",
              )}
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <header className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-eyebrow text-brand-navy-deep">
                    {ciudad}
                  </div>
                  <h3 className="mt-1">
                    {pais}
                  </h3>
                </div>
                <span aria-hidden className="text-2xl leading-none">
                  {flag}
                </span>
              </header>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2.5 text-foreground/85">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                  <span className="leading-relaxed">{direccion}</span>
                </div>
                <a
                  href={`tel:${telefono.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2.5 font-medium text-brand-navy hover:text-brand"
                >
                  <Phone className="size-4 shrink-0 text-brand" aria-hidden />
                  <span>{telefono}</span>
                </a>
              </div>

              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
              >
                Cómo llegar <ArrowUpRight className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
