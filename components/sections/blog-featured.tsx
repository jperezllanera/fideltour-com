import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  categoryIcons,
  categoryLabels,
  fallbackCategoryIcon,
  formatBlogDate,
  getFeaturedPost,
  initialsFromName,
} from "@/lib/content/blog";

export function BlogFeaturedSection() {
  const featured = getFeaturedPost();
  if (!featured) return null;

  const Icon = categoryIcons[featured.category] ?? fallbackCategoryIcon;

  return (
    <section id="destacado" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-10 md:px-6 md:pt-20 md:pb-12">
        <div className="text-eyebrow text-brand-navy-deep">
          Destacado · 01
        </div>

        <article
          style={{ ["--i" as never]: 0 }}
          className="bento-cell group relative mt-6 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
        >
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />

          <div className="grid gap-0 md:grid-cols-12">
            {/* Imagen hero del post — fallback a gradient con icono si no hay. */}
            <div className="relative isolate overflow-hidden bg-hero-gradient text-white md:col-span-5 min-h-[260px] md:min-h-0">
              {featured.image ? (
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -bottom-16 size-[360px] rounded-full border-[64px] border-brand/25"
                />
              )}
              {/* Overlay legible + chip de categoría */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/85 via-brand-navy/30 to-transparent"
              />
              <div className="relative flex h-full flex-col justify-between gap-10 p-8 md:p-10">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15 backdrop-blur">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-eyebrow text-white drop-shadow">
                    {categoryLabels[featured.category]}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 p-6 md:col-span-7 md:p-12">
              <div className="flex flex-wrap items-center gap-3 text-2xs text-muted-foreground">
                <span>{formatBlogDate(featured.date)}</span>
                <span aria-hidden>·</span>
                <span>{featured.readTime} min de lectura</span>
              </div>

              <h2 className="h-cta">
                {featured.title}
              </h2>

              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {featured.excerpt}
              </p>

              <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span
                    aria-hidden
                    className="inline-flex size-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white"
                  >
                    {initialsFromName(featured.author.name)}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-foreground">
                      {featured.author.name}
                    </span>
                    {featured.author.role && (
                      <span className="text-2xs text-muted-foreground">
                        {featured.author.role}
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  size="lg"
                  className="rounded-full bg-brand text-white hover:bg-brand/90 px-5 gap-1.5"
                  render={<Link href={featured.href} />}
                >
                  Leer artículo
                  <ArrowUpRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
