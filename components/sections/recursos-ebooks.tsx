import Image from "next/image";

import { recursosEbooks } from "@/lib/content/recursos";

import { LeadMagnetTrigger } from "./recursos-lead-magnet";

export function RecursosEbooksSection() {
  return (
    <section id="ebooks" className="relative bg-muted/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-brand-navy-deep">
            Ebooks · profundizar
          </div>
          <h2 className="mt-3">
            Ebooks para profundizar antes de pasar a la acción
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Guías largas para ir un paso más allá: del diagnóstico al plan de
            fidelización aterrizado en tu cuenta de explotación.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {recursosEbooks.map(
            (
              {
                slug,
                eyebrow,
                title,
                description,
                pages,
                cover,
                coverAlt,
                assetUrl,
              },
              i,
            ) => (
              <article
                key={slug}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                {/* Portada del ebook como cabecera del card. Las artes están
                    en /public/ebooks/ con nombres SEO-friendly; senior puede
                    sustituirlas sin cambiar el código. */}
                <div className="relative isolate aspect-square overflow-hidden bg-brand-navy">
                  {/* Los mockups son tablets 3D con padding alrededor, así que
                      `object-contain` evita que el bisel se pierda. El fondo
                      `bg-brand-navy` enmarca el tablet sobre azul. */}
                  <Image
                    src={cover}
                    alt={coverAlt}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                    <span className="text-eyebrow rounded-full border border-white/15 bg-brand-navy-deep/70 px-2.5 py-1 text-white backdrop-blur">
                      {eyebrow}
                    </span>
                    <span className="text-2xs rounded-full bg-white/15 px-2.5 py-1 text-white backdrop-blur">
                      {pages} páginas
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3>{title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  {/* Cada CTA dispara el lead magnet (modal de captura).
                      `ebookSlug` viaja en el form para identificar qué
                      pieza pidió el lead cuando senior conecte el endpoint. */}
                  <LeadMagnetTrigger
                    ebookSlug={slug}
                    assetUrl={assetUrl}
                    className="mt-auto self-start"
                  >
                    Acceder al ebook
                  </LeadMagnetTrigger>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
