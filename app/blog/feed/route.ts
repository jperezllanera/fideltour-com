import { siteConfig } from "@/lib/seo/site";
import { getAllPosts, categoryLabels } from "@/lib/content/blog";

/**
 * RSS 2.0 feed del blog. Sirve los últimos 30 artículos.
 *
 * URL pública: /blog/feed/ (con `trailingSlash: true` en next.config).
 * Content-Type `application/rss+xml` — los lectores RSS lo reconocen por
 * cabecera, no por extensión, así que la URL puede ir sin `.xml`.
 *
 * Si alguien lo enlaza, declarar también el `<link rel="alternate">` en el
 * `<head>` del layout/blog.
 */

export const dynamic = "force-static";

const ENCODER_MAP: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

function escapeXml(value: string): string {
  return value.replace(/[&<>"']/g, (ch) => ENCODER_MAP[ch] ?? ch);
}

function rfc822(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toUTCString();
}

export async function GET() {
  const posts = getAllPosts().slice(0, 30);
  const feedUrl = `${siteConfig.url}/blog/feed/`;
  const blogUrl = `${siteConfig.url}/blog/`;
  const lastBuildDate =
    posts.length > 0 ? rfc822(posts[0].date) : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url = `${siteConfig.url}${post.href}`;
      const category = categoryLabels[post.category];
      const image = post.image
        ? `<enclosure url="${escapeXml(
            post.image.startsWith("http") ? post.image : `${siteConfig.url}${post.image}`,
          )}" type="image/webp" />`
        : "";
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${rfc822(post.date)}</pubDate>
      <category>${escapeXml(category)}</category>
      <author>noreply@fideltour.com (${escapeXml(post.author.name)})</author>
      <description>${escapeXml(post.excerpt)}</description>
      ${image}
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(`${siteConfig.name} — Blog`)}</title>
    <link>${escapeXml(blogUrl)}</link>
    <atom:link href="${escapeXml(feedUrl)}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(
      "Estrategia, casos reales y buenas prácticas para hoteleros que dominan el dato. CDP para hoteles.",
    )}</description>
    <language>${siteConfig.locale.replace("_", "-")}</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <generator>Next.js — Fideltour</generator>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
