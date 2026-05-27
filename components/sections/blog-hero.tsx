import { BlogSearch, type SearchablePost } from "@/components/sections/blog-search";
import { HeroShapes } from "@/components/ui/hero-shapes";
import { categoryLabels, getAllPosts } from "@/lib/content/blog";

export function BlogHeroSection() {
  // Construimos el índice de búsqueda en el server; pasamos solo el subset
  // serializable (sin `raw`, sin componentes) al cliente.
  const searchIndex: SearchablePost[] = getAllPosts().map((post) => ({
    title: post.title,
    excerpt: post.excerpt,
    href: post.href,
    category: categoryLabels[post.category],
    date: post.date,
  }));

  return (
    <section className="relative overflow-hidden bg-hero-gradient text-white isolate">
      <HeroShapes />
      {/* Aro de marca (eco de la "O" del logo) — uno solo, grueso, recortado por overflow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] top-1/2 -translate-y-1/2 size-[144vw] max-w-[1440px] max-h-[1440px] rounded-full border-[160px] border-brand/[0.22]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-20 pb-20 md:grid-cols-12 md:gap-8 md:px-6 md:pt-24 md:pb-24">
        <div className="md:col-span-8 flex flex-col gap-6">
          <span className="text-eyebrow inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80 backdrop-blur">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden />
            Blog · CDP para hoteles
          </span>

          <h1 className="text-white">
            Ideas para hoteleros que{" "}
            <span className="text-brand">dominan el dato</span>
          </h1>

          <p className="max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Estrategia, casos reales y buenas prácticas para reducir la
            dependencia de las OTAs, unificar el perfil del huésped y convertir
            el dato hotelero en venta directa.
          </p>

          <div className="mt-2">
            <BlogSearch posts={searchIndex} />
          </div>
        </div>
      </div>
    </section>
  );
}
