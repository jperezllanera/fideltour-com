import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogHeroSection } from "@/components/sections/blog-hero";
import { BlogPostsGrid } from "@/components/sections/blog-posts-grid";
import { BlogCtaSection } from "@/components/sections/blog-cta";
import {
  getNonFeaturedPosts,
  paginatePosts,
  POSTS_PER_PAGE,
} from "@/lib/content/blog";

type PageProps = {
  params: Promise<{ n: string }>;
};

export function generateStaticParams() {
  const total = getNonFeaturedPosts().length;
  const totalPages = Math.max(1, Math.ceil(total / POSTS_PER_PAGE));
  // Página 1 ya la sirve /blog/page.tsx — desde la 2 en adelante.
  return Array.from({ length: Math.max(0, totalPages - 1) }, (_, i) => ({
    n: String(i + 2),
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { n } = await params;
  const page = parseInt(n, 10);
  if (!Number.isFinite(page) || page < 2) {
    return { title: "Página no encontrada", robots: { index: false } };
  }
  return {
    title: `Blog · Página ${page}`,
    description: `Página ${page} de los artículos publicados en el blog de Fideltour, el CDP para hoteles.`,
    alternates: { canonical: `/blog/page/${page}/` },
    robots: { index: true, follow: true },
  };
}

export default async function BlogPagedPage({ params }: PageProps) {
  const { n } = await params;
  const requested = parseInt(n, 10);
  if (!Number.isFinite(requested) || requested < 2) notFound();

  const { page, totalPages, pageItems } = paginatePosts(
    getNonFeaturedPosts(),
    requested,
  );
  if (page !== requested) notFound();

  return (
    <>
      <BlogHeroSection />
      <BlogPostsGrid
        posts={pageItems}
        page={page}
        totalPages={totalPages}
        paginationBase="/blog/"
        activeCategory="todos"
      />
      <BlogCtaSection />
    </>
  );
}
