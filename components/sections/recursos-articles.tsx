import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/content/blog";
import { recursosArticleRefs } from "@/lib/content/recursos";

export function RecursosArticlesSection() {
  const articles = recursosArticleRefs
    .map((ref) => {
      const post = getPostBySlug(ref.category, ref.slug);
      return post ? { post, eyebrow: ref.eyebrow } : null;
    })
    .filter(Boolean) as Array<{
    post: NonNullable<ReturnType<typeof getPostBySlug>>;
    eyebrow: string;
  }>;

  if (articles.length === 0) return null;

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
          {articles.map(({ post, eyebrow }, i) => (
            <article
              key={`${post.category}/${post.slug}`}
              style={{ ["--i" as never]: i + 1 }}
              className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
            >
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <Link
                href={post.href}
                className="relative isolate block aspect-[16/10] overflow-hidden bg-muted/40"
                aria-label={`Leer ${post.title}`}
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <span
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-brand-navy-deep/35 via-brand-navy-deep/0 to-transparent"
                />
                <span className="text-eyebrow absolute left-5 top-5 rounded-full border border-white/15 bg-brand-navy-deep/70 px-2.5 py-1 text-white backdrop-blur">
                  {eyebrow}
                </span>
              </Link>

              <div className="flex flex-1 flex-col gap-4 p-6">
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
                <Link
                  href={post.href}
                  className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
                  aria-label={`Leer ${post.title}`}
                >
                  Leer en el blog
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
