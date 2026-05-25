import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { casosDeExito } from "@/lib/content/casos";

export function CasosGridSection() {
  return (
    <section id="historias" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Historias reales
          </div>
          <h2 className="mt-3">
            Hoteles que están dominando su dato
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Tres segmentos, tres puntos de partida, una misma conclusión: el
            CDP devuelve al hotelero el control sobre la relación con su
            huésped.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {casosDeExito.map((caso, i) => {
            const Icon = caso.segmentIcon;
            return (
              <article
                key={caso.slug}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-visible rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <Link
                  href={`/casos-de-exito/${caso.slug}`}
                  className="relative isolate flex h-44 items-center justify-center overflow-hidden bg-hero-gradient text-white transition-opacity hover:opacity-95"
                  aria-label={`Ver caso ${caso.title}`}
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -bottom-10 size-[200px] rounded-full border-[36px] border-brand/25"
                  />
                  <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15 backdrop-blur">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="text-eyebrow absolute left-5 top-5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/85 backdrop-blur">
                    {caso.segment}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="text-eyebrow text-brand-navy-deep">
                    {caso.eyebrow}
                  </div>
                  <h3>
                    <Link
                      href={`/casos-de-exito/${caso.slug}`}
                      className="transition-colors hover:text-brand"
                    >
                      {caso.title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {caso.excerpt}
                  </p>

                  <div className="mt-2 grid grid-cols-3 gap-3 border-t border-border/60 pt-4">
                    {caso.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col">
                        <span className="text-lg font-bold text-brand-navy">
                          {metric.value}
                        </span>
                        <span className="text-2xs text-muted-foreground">
                          {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/casos-de-exito/${caso.slug}`}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
                  >
                    Ver caso
                    <ArrowUpRight className="size-3.5" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
