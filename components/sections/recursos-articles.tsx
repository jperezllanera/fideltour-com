import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { recursosArticles } from "@/lib/content/recursos";

export function RecursosArticlesSection() {
  return (
    <section id="articulos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-20 pb-12 md:px-6 md:pt-24 md:pb-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-eyebrow text-brand-navy-deep">
              Artículos · día a día
            </div>
            <h2 className="mt-3">
              Contenidos prácticos para el día a día en tu hotel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Lecturas cortas pensadas para quien dirige marketing o reservas y
              necesita decisiones rápidas, no teoría de manual.
            </p>
          </div>

          <Button
            size="lg"
            className="self-start rounded-full bg-brand-navy text-white hover:bg-brand-navy-deep px-5 gap-1.5 md:self-end"
            render={<Link href="/blog" />}
          >
            Ver todos los artículos
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {recursosArticles.map(
            ({ eyebrow, title, excerpt, href, icon: Icon }, i) => (
              <article
                key={title}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative isolate flex h-36 items-center justify-center overflow-hidden bg-hero-gradient text-white">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -bottom-10 size-[180px] rounded-full border-[32px] border-brand/25"
                  />
                  <span className="relative inline-flex size-14 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15 backdrop-blur">
                    <Icon className="size-6" aria-hidden />
                  </span>
                  <span className="text-eyebrow absolute left-5 top-5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/85 backdrop-blur">
                    {eyebrow}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <h3>
                    <Link
                      href={href}
                      className="transition-colors hover:text-brand"
                    >
                      {title}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {excerpt}
                  </p>
                  <Link
                    href={href}
                    className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
                    aria-label={`Leer ${title}`}
                  >
                    Leer en el blog
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
