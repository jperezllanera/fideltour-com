import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  type BlogPost,
} from "@/lib/content/blog";

const categoryFilters: Array<{ slug: BlogCategorySlug | "todos"; label: string; href: string }> = [
  { slug: "todos", label: "Todos", href: "/blog/" },
  { slug: "marketing", label: categoryLabels.marketing, href: "/blog/marketing/" },
  { slug: "fidelizacion", label: categoryLabels.fidelizacion, href: "/blog/fidelizacion/" },
  { slug: "fideltour", label: categoryLabels.fideltour, href: "/blog/fideltour/" },
  { slug: "fideltalks", label: categoryLabels.fideltalks, href: "/blog/fideltalks/" },
  { slug: "crm", label: categoryLabels.crm, href: "/blog/crm/" },
  { slug: "eventos", label: categoryLabels.eventos, href: "/blog/eventos/" },
];

export type BlogPostsGridProps = {
  /** Si no se pasa, usa todos los posts no destacados (uso en /blog landing). */
  posts?: BlogPost[];
  /** Slug de la categoría activa, o "todos" para la landing. */
  activeCategory?: BlogCategorySlug | "todos";
  /** Cuando hay paginación: número de página actual (1-indexed). */
  page?: number;
  /** Total de páginas (1 = sin paginación). */
  totalPages?: number;
  /** Base path para construir URLs de paginación, p. ej. "/blog/" o "/blog/marketing/". */
  paginationBase?: string;
  /** Título y eyebrow del bloque. Útil para reusar en categoría/landing/búsqueda. */
  heading?: { eyebrow: string; title: string; description?: string };
  /** Mostrar la fila de chips de categoría (solo en landing). */
  showFilters?: boolean;
};

const DEFAULT_HEADING = {
  eyebrow: "Artículos",
  title: "Todo lo que publicamos sobre dato hotelero",
  description:
    "Sin humo y sin recetas genéricas. Cada artículo nace de un problema real de un hotelero — desde la estrategia hasta el ajuste fino del perfil unificado.",
};

export function BlogPostsGrid({
  posts: postsProp,
  activeCategory = "todos",
  page = 1,
  totalPages = 1,
  paginationBase,
  heading = DEFAULT_HEADING,
  showFilters = true,
}: BlogPostsGridProps) {
  const posts = postsProp ?? getNonFeaturedPosts();

  if (posts.length === 0) {
    return (
      <section id="articulos" className="relative bg-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <p className="text-base text-muted-foreground">
            Aún no hay artículos publicados en esta sección. Vuelve pronto.
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
              {heading.eyebrow}
              {totalPages > 1 && ` · Pág. ${page}/${totalPages}`}
            </div>
            <h2 className="mt-3">
              {heading.title}
            </h2>
            {heading.description && (
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {heading.description}
              </p>
            )}
          </div>

          {showFilters && (
            <ul className="flex flex-wrap items-center gap-2">
              {categoryFilters.map(({ slug, label, href }) => {
                const isActive = slug === activeCategory;
                return (
                  <li key={slug}>
                    <Link
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                        isActive
                          ? "border-brand-navy bg-brand-navy text-white"
                          : "border-border/70 bg-card text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
                      )}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
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
                  <Link
                    href={`/blog/${post.category}/`}
                    className="absolute left-5 top-5 text-eyebrow rounded-full border border-white/20 bg-brand-navy/60 px-2.5 py-1 text-white backdrop-blur transition-colors hover:bg-brand-navy/80"
                  >
                    {categoryLabels[post.category]}
                  </Link>
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

        {totalPages > 1 && paginationBase && (
          <Pagination
            page={page}
            totalPages={totalPages}
            base={paginationBase}
          />
        )}
      </div>
    </section>
  );
}

// Wrapper sin props para mantener la API anterior en /blog landing.
export function BlogPostsGridSection() {
  return <BlogPostsGrid />;
}

function Pagination({
  page,
  totalPages,
  base,
}: {
  page: number;
  totalPages: number;
  base: string;
}) {
  const pageHref = (n: number) => (n === 1 ? base : `${base}page/${n}/`);

  return (
    <nav
      aria-label="Paginación"
      className="mt-14 flex flex-wrap items-center justify-center gap-2"
    >
      <Link
        href={page > 1 ? pageHref(page - 1) : pageHref(1)}
        aria-disabled={page <= 1}
        className={cn(
          "inline-flex items-center gap-1 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          page <= 1
            ? "pointer-events-none border-border/40 bg-card text-muted-foreground"
            : "border-border/70 bg-card text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
        )}
      >
        <ChevronLeft className="size-4" />
        Anterior
      </Link>

      <ul className="flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <Link
              href={pageHref(n)}
              aria-current={n === page ? "page" : undefined}
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors",
                n === page
                  ? "border-brand-navy bg-brand-navy text-white"
                  : "border-border/70 bg-card text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
              )}
            >
              {n}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href={page < totalPages ? pageHref(page + 1) : pageHref(totalPages)}
        aria-disabled={page >= totalPages}
        className={cn(
          "inline-flex items-center gap-1 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
          page >= totalPages
            ? "pointer-events-none border-border/40 bg-card text-muted-foreground"
            : "border-border/70 bg-card text-foreground/80 hover:border-brand-navy hover:text-brand-navy",
        )}
      >
        Siguiente
        <ChevronRight className="size-4" />
      </Link>
    </nav>
  );
}
