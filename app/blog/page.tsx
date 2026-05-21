import type { Metadata } from "next";

import { BlogHeroSection } from "@/components/sections/blog-hero";
import { BlogFeaturedSection } from "@/components/sections/blog-featured";
import { BlogPostsGrid } from "@/components/sections/blog-posts-grid";
import { BlogCtaSection } from "@/components/sections/blog-cta";
import {
  BreadcrumbJsonLd,
  ItemListJsonLd,
  WebPageJsonLd,
} from "@/components/seo/json-ld";
import { getAllPosts, getNonFeaturedPosts, paginatePosts } from "@/lib/content/blog";

const TITLE = "Blog";
const DESCRIPTION =
  "Estrategia, casos reales y buenas prácticas para hoteleros que están unificando su dato, reduciendo su dependencia de las OTAs y construyendo venta directa con Fideltour, el CDP para hoteles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/" },
  openGraph: {
    url: "/blog/",
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
  twitter: {
    title: `${TITLE} · Fideltour`,
    description: DESCRIPTION,
  },
};

export default function BlogPage() {
  const all = getAllPosts();
  const { page, totalPages, pageItems } = paginatePosts(getNonFeaturedPosts(), 1);
  return (
    <>
      <WebPageJsonLd
        path="/blog/"
        title={`${TITLE} · Fideltour`}
        description={DESCRIPTION}
        type="CollectionPage"
      />
      <BreadcrumbJsonLd items={[{ name: TITLE, path: "/blog/" }]} />
      <ItemListJsonLd
        name="Artículos del blog Fideltour"
        items={all.slice(0, 20).map((post) => ({
          name: post.title,
          path: post.href,
          description: post.excerpt,
        }))}
      />
      <BlogHeroSection />
      <BlogFeaturedSection />
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
