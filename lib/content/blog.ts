import "server-only";

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import matter from "gray-matter";
import readingTime from "reading-time";
import {
  Briefcase,
  Calendar,
  Compass,
  LineChart,
  Megaphone,
  Mic,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

/* ──────────────────────────────────────────────────────────────────────
   Tipos
   ────────────────────────────────────────────────────────────────────── */

/**
 * Slugs de categoría que existen en el blog (espejo de las URLs de
 * fideltour.com/blog/{category}/). Si añades una categoría nueva,
 * añade aquí su slug + label en `categoryLabels` + icono en `categoryIcons`.
 */
export type BlogCategorySlug =
  | "marketing"
  | "fideltour"
  | "fidelizacion"
  | "fideltalks"
  | "crm"
  | "eventos";

export const categoryLabels: Record<BlogCategorySlug, string> = {
  marketing: "Marketing",
  fideltour: "Fideltour",
  fidelizacion: "Fidelización",
  fideltalks: "FidelTalks",
  crm: "CRM",
  eventos: "Eventos",
};

export const categoryIcons: Record<BlogCategorySlug, LucideIcon> = {
  marketing: Megaphone,
  fideltour: Sparkles,
  fidelizacion: Compass,
  fideltalks: Mic,
  crm: LineChart,
  eventos: Calendar,
};

export type BlogAuthor = {
  name: string;
  role?: string;
};

/**
 * Forma del frontmatter en cada archivo `content/blog/{category}/{slug}.mdx`.
 * Conservar consistencia entre archivos — el script `scripts/migrate-blog.mjs`
 * y la edición manual deben respetar este shape.
 */
export type BlogPostFrontmatter = {
  title: string;
  /** Resumen visible en la card del grid. */
  excerpt: string;
  /** ISO 8601 (YYYY-MM-DD). */
  date: string;
  author: BlogAuthor;
  /** Imagen hero opcional (URL absoluta o ruta /public). */
  image?: string;
  /** Tags libres (no obligatorios). */
  tags?: string[];
  /** Si true, aparece en BlogFeaturedSection. */
  featured?: boolean;
};

export type BlogPost = BlogPostFrontmatter & {
  slug: string;
  category: BlogCategorySlug;
  /** URL pública canónica (con slash final, igual que el blog original). */
  href: string;
  /** Minutos de lectura calculados a partir del body. */
  readTime: number;
  /** Contenido MDX en bruto (lo consume `app/blog/[category]/[slug]/page.tsx`). */
  raw: string;
};

/* ──────────────────────────────────────────────────────────────────────
   Lectura desde filesystem
   ────────────────────────────────────────────────────────────────────── */

const CONTENT_ROOT = join(process.cwd(), "content", "blog");

function isCategorySlug(value: string): value is BlogCategorySlug {
  return value in categoryLabels;
}

function readAllPostsFromDisk(): BlogPost[] {
  let categories: string[];
  try {
    categories = readdirSync(CONTENT_ROOT, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name);
  } catch {
    // content/blog/ aún no existe (primera vez antes de la migración) → lista vacía.
    return [];
  }

  const posts: BlogPost[] = [];

  for (const category of categories) {
    if (!isCategorySlug(category)) continue;

    const categoryDir = join(CONTENT_ROOT, category);
    let files: string[];
    try {
      files = readdirSync(categoryDir).filter((f) => f.endsWith(".mdx"));
    } catch {
      continue;
    }

    for (const file of files) {
      const filePath = join(categoryDir, file);
      if (!statSync(filePath).isFile()) continue;

      const slug = file.replace(/\.mdx$/, "");
      const raw = readFileSync(filePath, "utf8");
      const { data, content } = matter(raw);
      const front = data as BlogPostFrontmatter;

      // YAML interpreta `date: 2024-10-04` como Date — lo normalizamos a
      // string ISO (`YYYY-MM-DD`) para que el resto del código pueda asumir
      // siempre string.
      const dateValue = (front as unknown as { date: unknown }).date;
      const dateString =
        dateValue instanceof Date
          ? dateValue.toISOString().slice(0, 10)
          : String(dateValue ?? "");

      posts.push({
        ...front,
        date: dateString,
        slug,
        category,
        href: `/blog/${category}/${slug}/`,
        readTime: Math.max(1, Math.round(readingTime(content).minutes)),
        raw: content,
      });
    }
  }

  // Más recientes primero.
  posts.sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

// Cache en memoria: el filesystem no cambia entre invocaciones del mismo
// build, así que leerlo una sola vez ahorra trabajo en cada `generateStaticParams`.
let cached: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cached) return cached;
  cached = readAllPostsFromDisk();
  return cached;
}

export function getPostBySlug(
  category: string,
  slug: string,
): BlogPost | undefined {
  return getAllPosts().find(
    (post) => post.category === category && post.slug === slug,
  );
}

export function getFeaturedPost(): BlogPost | undefined {
  const all = getAllPosts();
  return all.find((post) => post.featured) ?? all[0];
}

export function getNonFeaturedPosts(): BlogPost[] {
  const featured = getFeaturedPost();
  return getAllPosts().filter((p) => p !== featured);
}

/** Tamaño de página por defecto en la landing del blog y categorías. */
export const POSTS_PER_PAGE = 24;

/**
 * Aplica paginación a una lista ya ordenada. Devuelve la lista de la página
 * solicitada junto al total, clampando `page` al rango [1, totalPages].
 */
export function paginatePosts<T>(
  items: T[],
  page: number,
  pageSize: number = POSTS_PER_PAGE,
): { page: number; totalPages: number; pageItems: T[] } {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * pageSize;
  return {
    page: safePage,
    totalPages,
    pageItems: items.slice(start, start + pageSize),
  };
}

export function getPostsByCategory(
  category: BlogCategorySlug,
): BlogPost[] {
  return getAllPosts().filter((post) => post.category === category);
}

/**
 * Posts relacionados con scoring híbrido:
 *  - +3 por cada tag compartido (más específico, pesa más).
 *  - +1 por estar en la misma categoría.
 *  - Empate: el más reciente gana.
 *
 * Si nada puntúa (post sin tags + único en su categoría), cae a los posts
 * más recientes para que el bloque "Sigue leyendo" nunca quede vacío.
 */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts();
  const ownTags = new Set((post.tags ?? []).map((t) => t.toLowerCase()));

  const scored = all
    .filter((p) => !(p.slug === post.slug && p.category === post.category))
    .map((p) => {
      const pTags = (p.tags ?? []).map((t) => t.toLowerCase());
      let score = 0;
      for (const t of pTags) if (ownTags.has(t)) score += 3;
      if (p.category === post.category) score += 1;
      return { post: p, score };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.post.date < b.post.date ? 1 : -1;
    });

  const withScore = scored.filter((s) => s.score > 0).map((s) => s.post);
  if (withScore.length >= limit) return withScore.slice(0, limit);

  // Padding: rellenamos con los más recientes que aún no estén en la lista.
  const seen = new Set(withScore.map((p) => `${p.category}/${p.slug}`));
  for (const p of all) {
    if (withScore.length >= limit) break;
    const key = `${p.category}/${p.slug}`;
    if (seen.has(key)) continue;
    if (p.slug === post.slug && p.category === post.category) continue;
    withScore.push(p);
    seen.add(key);
  }
  return withScore.slice(0, limit);
}

/* ──────────────────────────────────────────────────────────────────────
   Utilidades de presentación
   ────────────────────────────────────────────────────────────────────── */

/**
 * Formatea una fecha ISO al estilo "12 may 2026" en español.
 */
export function formatBlogDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function initialsFromName(name: string): string {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// Re-export de un tipo "legible" para componentes que solo necesitan el subset
// público (sin el campo `raw`).
export type BlogPostCard = Omit<BlogPost, "raw">;

// Icono usado por defecto cuando una categoría no tiene mapeo (no debería
// ocurrir; defensivo por si añadimos categorías sin pasar por aquí).
export const fallbackCategoryIcon: LucideIcon = Briefcase;
