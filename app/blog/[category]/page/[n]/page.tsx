import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogPostsGrid } from "@/components/sections/blog-posts-grid";
import { BlogCtaSection } from "@/components/sections/blog-cta";
import {
  categoryIcons,
  categoryLabels,
  fallbackCategoryIcon,
  getPostsByCategory,
  paginatePosts,
  POSTS_PER_PAGE,
  type BlogCategorySlug,
} from "@/lib/content/blog";

type PageProps = {
  params: Promise<{ category: string; n: string }>;
};

const VALID_CATEGORIES: BlogCategorySlug[] = [
  "marketing",
  "fideltour",
  "fidelizacion",
  "fideltalks",
  "crm",
  "eventos",
];

function isValidCategory(c: string): c is BlogCategorySlug {
  return (VALID_CATEGORIES as string[]).includes(c);
}

export function generateStaticParams() {
  const params: Array<{ category: string; n: string }> = [];
  for (const category of VALID_CATEGORIES) {
    const total = getPostsByCategory(category).length;
    const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
    for (let p = 2; p <= totalPages; p++) {
      params.push({ category, n: String(p) });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, n } = await params;
  if (!isValidCategory(category)) {
    return { title: "Categoría no encontrada", robots: { index: false } };
  }
  const page = parseInt(n, 10);
  const label = categoryLabels[category];
  return {
    title: `${label} · Página ${page} — Blog`,
    description: `Página ${page} de los artículos publicados en la categoría ${label}.`,
    alternates: { canonical: `/blog/${category}/page/${page}/` },
  };
}

export default async function BlogCategoryPagedPage({ params }: PageProps) {
  const { category, n } = await params;
  if (!isValidCategory(category)) notFound();
  const requested = parseInt(n, 10);
  if (!Number.isFinite(requested) || requested < 2) notFound();

  const all = getPostsByCategory(category);
  const { page, totalPages, pageItems } = paginatePosts(all, requested);
  if (page !== requested) notFound();

  const Icon = categoryIcons[category] ?? fallbackCategoryIcon;

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border-[140px] border-brand/[0.22]"
        />
        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 md:px-6 md:pt-20 md:pb-16">
          <Link
            href={`/blog/${category}/`}
            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {categoryLabels[category]}
          </Link>
          <div className="mt-8 flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-full bg-white/10 text-brand ring-1 ring-white/15 backdrop-blur">
              <Icon className="size-5" />
            </span>
            <span className="text-eyebrow text-white/80">
              Página {page} de {totalPages}
            </span>
          </div>
          <h1 className="mt-6 text-white">
            {categoryLabels[category]}
          </h1>
        </div>
      </section>

      <BlogPostsGrid
        posts={pageItems}
        activeCategory={category}
        page={page}
        totalPages={totalPages}
        paginationBase={`/blog/${category}/`}
        heading={{
          eyebrow: `Artículos · ${categoryLabels[category]}`,
          title: `Todo sobre ${categoryLabels[category]}`,
        }}
      />

      <BlogCtaSection />
    </>
  );
}
