import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  categoryIcons,
  categoryLabels,
  fallbackCategoryIcon,
  formatBlogDate,
  getNonFeaturedPosts,
  initialsFromName,
  type BlogCategorySlug,
} from "@/lib/content/blog";

const categoryFilters: Array<{ slug: BlogCategorySlug | "todos"; label: string }> = [
  { slug: "todos", label: "Todos" },
  { slug: "marketing", label: categoryLabels.marketing },
  { slug: "fidelizacion", label: categoryLabels.fidelizacion },
  { slug: "fideltour", label: categoryLabels.fideltour },
  { slug: "fideltalks", label: categoryLabels.fideltalks },
  { slug: "crm", label: categoryLabels.crm },
  { slug: "eventos", label: categoryLabels.eventos },
];

export function BlogPostsGridSection() {
  const posts = getNonFeaturedPosts();

  if (posts.length === 0) {
    return (
      <section id="articulos" className="relative bg-background">
        <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
          <p className="text-base text-muted-foreground">
            Aún no hay artículos publicados. Vuelve pronto.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="articulos" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 pb-20 md:px-6 md:pb-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="text-eyebrow text-brand-navy-deep">
              Artículos · {posts.length.toString().padStart(2, "0")}
            </div>
            <h2 className="mt-3">
              Todo lo que publicamos sobre dato hotelero
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Sin humo y sin recetas genéricas. Cada artículo nace de un
              problema real de un hotelero — desde la estrategia hasta el ajuste
              fino del perfil unificado.
            </p>
          </div>

          {/* TODO senior: filtros por categoría sin lógica de cliente todavía.
              Mock visual hasta que decidamos paginación/filtrado real. */}
          <ul className="flex flex-wrap items-center gap-2">
            {categoryFilters.map(({ slug, label }, idx) => (
              <li key={slug}>
                <button
                  type="button"
                  aria-pressed={idx === 0}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                    idx === 0
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-border/70 bg-card text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
                  )}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => {
            const Icon = categoryIcons[post.category] ?? fallbackCategoryIcon;
            return (
              <article
                key={`${post.category}/${post.slug}`}
                style={{ ["--i" as never]: i + 1 }}
                className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="relative isolate h-44 overflow-hidden bg-hero-gradient text-white">
                  {post.image ? (
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-10 -bottom-10 size-[200px] rounded-full border-[36px] border-brand/25"
                      />
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex size-14 items-center justify-center rounded-full bg-white/10 text-brand-mint ring-1 ring-white/15 backdrop-blur">
                        <Icon className="size-6" />
                      </span>
                    </>
                  )}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/15 to-transparent"
                  />
                  <span className="absolute left-5 top-5 text-eyebrow rounded-full border border-white/20 bg-brand-navy/60 px-2.5 py-1 text-white backdrop-blur">
                    {categoryLabels[post.category]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex flex-wrap items-center gap-2 text-2xs text-muted-foreground">
                    <span>{formatBlogDate(post.date)}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime} min</span>
                  </div>

                  <h3>
                    <Link
                      href={post.href}
                      className="transition-colors hover:text-brand"
                    >
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                    <div className="flex items-center gap-2">
                      <span
                        aria-hidden
                        className="inline-flex size-8 items-center justify-center rounded-full bg-brand-navy text-2xs font-bold text-white"
                      >
                        {initialsFromName(post.author.name)}
                      </span>
                      <span className="text-sm font-semibold text-foreground">
                        {post.author.name}
                      </span>
                    </div>

                    <Link
                      href={post.href}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
                      aria-label={`Leer ${post.title}`}
                    >
                      Leer
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
