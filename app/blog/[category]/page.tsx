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
  type BlogCategorySlug,
} from "@/lib/content/blog";

type PageProps = {
  params: Promise<{ category: string }>;
};

const VALID_CATEGORIES: BlogCategorySlug[] = [
  "marketing",
  "fideltour",
  "fidelizacion",
  "fideltalks",
  "crm",
  "eventos",
];

export function generateStaticParams() {
  return VALID_CATEGORIES.map((category) => ({ category }));
}

function isValidCategory(c: string): c is BlogCategorySlug {
  return (VALID_CATEGORIES as string[]).includes(c);
}

const CATEGORY_DESCRIPTIONS: Record<BlogCategorySlug, string> = {
  marketing:
    "Estrategia y operativa de marketing hotelero. Email, automatizaciones, omnicanalidad, SEO geográfico y todo lo que mueve venta directa.",
  fidelizacion:
    "Cómo convertir huéspedes en clientes recurrentes. Escalera de fidelización, programas, segmentación y el papel del dato.",
  fideltour:
    "Notas del equipo: producto, hitos, premios, alianzas y la visión detrás del CDP para hoteles.",
  fideltalks:
    "Conversaciones en formato podcast con hoteleros, expertos y partners del sector.",
  crm: "CRM hotelero — qué pedir, cómo elegirlo, en qué se diferencia de un CRM genérico y cómo conecta con el resto del stack.",
  eventos: "FITUR, ITB, Tianguis, WTM y otros encuentros donde el sector se redefine.",
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isValidCategory(category)) {
    return { title: "Categoría no encontrada", robots: { index: false } };
  }

  const label = categoryLabels[category];
  const desc = CATEGORY_DESCRIPTIONS[category];
  return {
    title: `${label} — Blog`,
    description: desc,
    alternates: { canonical: `/blog/${category}/` },
    openGraph: {
      url: `/blog/${category}/`,
      title: `${label} · Fideltour`,
      description: desc,
    },
  };
}

export default async function BlogCategoryPage({ params }: PageProps) {
  const { category } = await params;
  if (!isValidCategory(category)) notFound();

  const all = getPostsByCategory(category);
  const { page, totalPages, pageItems } = paginatePosts(all, 1);
  const Icon = categoryIcons[category] ?? fallbackCategoryIcon;

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[120vw] max-w-[1200px] max-h-[1200px] rounded-full border-[108px] border-brand/[0.22]"
        />

        <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-16 md:px-6 md:pt-20 md:pb-20">
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
            <span className="text-eyebrow text-white/80">
              Blog · {categoryLabels[category]}
            </span>
          </div>

          <h1 className="mt-6 text-white">
            {categoryLabels[category]}
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {CATEGORY_DESCRIPTIONS[category]}
          </p>

          <p className="mt-6 text-sm text-white/70">
            {all.length} {all.length === 1 ? "artículo" : "artículos"} publicados.
          </p>
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
