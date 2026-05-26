import { ArrowLeft, ArrowUpRight, Clock4 } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import { mdxComponents } from "@/mdx-components";
import { ZoomableImages } from "@/components/blog/zoomable-image";
import {
  categoryIcons,
  categoryLabels,
  fallbackCategoryIcon,
  formatBlogDate,
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  initialsFromName,
} from "@/lib/content/blog";
import { BlogCtaSection } from "@/components/sections/blog-cta";
import {
  BlogPostingJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/seo/site";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) {
    return {
      title: "Artículo no encontrado",
      robots: { index: false, follow: false },
    };
  }

  const ogImages = post.image
    ? [{ url: post.image, alt: post.title }]
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: post.href },
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      url: post.href,
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.date,
      section: categoryLabels[post.category],
      tags: post.tags,
      authors: [post.author.name],
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) notFound();

  const Icon = categoryIcons[post.category] ?? fallbackCategoryIcon;
  const related = getRelatedPosts(post, 3);
  const postUrl = absoluteUrl(post.href);

  return (
    <>
      <BlogPostingJsonLd
        url={postUrl}
        headline={post.title}
        description={post.excerpt}
        datePublished={post.date}
        authorName={post.author.name}
        authorRole={post.author.role}
        image={post.image}
        category={categoryLabels[post.category]}
        keywords={post.tags}
        readingTimeMinutes={post.readTime}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Blog", path: "/blog/" },
          {
            name: categoryLabels[post.category],
            path: `/blog/${post.category}/`,
          },
          { name: post.title, path: post.href },
        ]}
      />
      {/* Hero del artículo — imagen como fondo (estilo editorial). Si el post
          no tiene `image`, cae al gradient brand-navy con el aro de marca. */}
      <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
        {post.image ? (
          <>
            <Image
              src={post.image}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden
            />
            {/* Overlay para legibilidad del título sobre la foto. Doble capa:
                un velo navy plano y un degradado vertical denso por arriba. */}
            <div
              aria-hidden
              className="absolute inset-0 bg-brand-navy-deep/65"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-b from-brand-navy-deep/85 via-brand-navy/55 to-brand-navy/85"
            />
          </>
        ) : (
          <div
            aria-hidden
            className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border-[108px] border-brand/[0.22]"
          />
        )}

        <div className="relative mx-auto max-w-4xl px-4 pt-16 pb-20 md:px-6 md:pt-20 md:pb-28">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            Volver al blog
          </Link>

          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15 backdrop-blur">
              <Icon className="size-5" />
            </span>
            <Link
              href={`/blog/${post.category}/`}
              className="text-eyebrow text-white/80 transition-colors hover:text-brand"
            >
              {categoryLabels[post.category]}
            </Link>
          </div>

          <h1 className="mt-6 text-white">
            {post.title}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="inline-flex size-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white ring-1 ring-white/15"
              >
                {initialsFromName(post.author.name)}
              </span>
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  {post.author.name}
                </span>
                {post.author.role && (
                  <span className="text-2xs text-white/70">
                    {post.author.role}
                  </span>
                )}
              </div>
            </div>

            <span aria-hidden className="text-white/30">·</span>
            <time dateTime={post.date}>{formatBlogDate(post.date)}</time>

            <span aria-hidden className="text-white/30">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock4 aria-hidden className="size-3.5" />
              {post.readTime} min de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Cuerpo del artículo */}
      <section className="relative bg-background">
        <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
          <article>
            <MDXRemote
              source={post.raw}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug],
                },
              }}
            />
          </article>
          {/* Activa medium-zoom sobre las <img> del artículo anterior. */}
          <ZoomableImages />

          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2">
              <span className="text-eyebrow text-muted-foreground">
                Tags
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/70 bg-card px-3 py-1 text-sm text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Posts relacionados */}
      {related.length > 0 && (
        <section className="relative bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
            <div className="text-eyebrow text-brand-navy-deep">
              Sigue leyendo
            </div>
            <h2 className="mt-3">
              Más sobre {categoryLabels[post.category]}
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {related.map((rel, i) => {
                const RelIcon =
                  categoryIcons[rel.category] ?? fallbackCategoryIcon;
                return (
                  <article
                    key={`${rel.category}/${rel.slug}`}
                    style={{ ["--i" as never]: i }}
                    className="bento-cell group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-soft)] transition-shadow duration-300 hover:shadow-[var(--shadow-bento)]"
                  >
                    <div className="relative isolate flex h-32 items-center justify-center overflow-hidden bg-hero-gradient text-white">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -bottom-8 size-[160px] rounded-full border-[28px] border-brand/25"
                      />
                      <span className="relative inline-flex size-12 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15 backdrop-blur">
                        <RelIcon className="size-5" />
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <span className="text-eyebrow text-brand-navy-deep">
                        {categoryLabels[rel.category]}
                      </span>
                      <h3>
                        <Link
                          href={rel.href}
                          className="transition-colors hover:text-brand"
                        >
                          {rel.title}
                        </Link>
                      </h3>
                      <div className="mt-auto pt-2">
                        <Link
                          href={rel.href}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-navy hover:text-brand"
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
      )}

      <BlogCtaSection />
    </>
  );
}
