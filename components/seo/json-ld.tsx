import { absoluteUrl, siteConfig } from "@/lib/seo/site";
import { oficinas } from "@/lib/content/oficinas";

/* ──────────────────────────────────────────────────────────────────────
   Helper de renderizado

   Un único componente que serializa el objeto JSON-LD dentro de un
   <script type="application/ld+json">. Lo usamos desde Server Components
   para que el bot lo encuentre en el HTML inicial.
   ────────────────────────────────────────────────────────────────────── */

type JsonLdObject = Record<string, unknown>;

function JsonLdScript({ data }: { data: JsonLdObject | JsonLdObject[] }) {
  return (
    <script
      type="application/ld+json"
      // Inyectamos como string — el JSON ya está sanitizado al ser un objeto
      // controlado por nuestro código (no input de usuario). Escapamos `<`
      // para evitar romper el cierre del script en cualquier valor con HTML.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/* ──────────────────────────────────────────────────────────────────────
   Organization

   Una sola instancia por documento. Cubre nombre legal, logo, perfiles
   sociales, contacto y direcciones físicas (oficinas).
   ────────────────────────────────────────────────────────────────────── */

export function OrganizationJsonLd() {
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: `${siteConfig.url}/`,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.logoPath),
      contentUrl: absoluteUrl(siteConfig.logoPath),
    },
    image: absoluteUrl(siteConfig.ogImagePath),
    description: siteConfig.description,
    foundingDate: "2018",
    email: siteConfig.contactEmail,
    sameAs: Object.values(siteConfig.social),
    contactPoint: oficinas.map((oficina) => ({
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: oficina.telefono,
      areaServed: oficina.pais,
      availableLanguage: ["es", "en"],
    })),
    address: oficinas.map((oficina) => ({
      "@type": "PostalAddress",
      addressLocality: oficina.ciudad,
      addressCountry: oficina.pais,
      streetAddress: oficina.direccion,
    })),
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   WebSite

   Marca la entidad sitio web, habilita el sitelinks search box potencial
   y declara el idioma por defecto.
   ────────────────────────────────────────────────────────────────────── */

export function WebsiteJsonLd() {
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    inLanguage: siteConfig.defaultLanguage,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   WebPage

   Subtipo de schema.org para páginas individuales. Útil cuando queremos
   declarar explícitamente el title, breadcrumb y locale de la página.
   ────────────────────────────────────────────────────────────────────── */

type WebPageProps = {
  path: string;
  title: string;
  description: string;
  /** Subtipo más específico (AboutPage, ContactPage, CollectionPage...). */
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
};

export function WebPageJsonLd({
  path,
  title,
  description,
  type = "WebPage",
}: WebPageProps) {
  const url = absoluteUrl(path);
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: siteConfig.defaultLanguage,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl(siteConfig.ogImagePath),
    },
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   BreadcrumbList

   Itinerario jerárquico de la página. Acepta una lista de [name, path]
   en orden top-down. La home siempre se inyecta como primer elemento.
   ────────────────────────────────────────────────────────────────────── */

type Crumb = { name: string; path: string };

export function BreadcrumbJsonLd({ items }: { items: Crumb[] }) {
  const allItems: Crumb[] = [{ name: "Inicio", path: "/" }, ...items];
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   SoftwareApplication / Product — Fideltour CDP

   Posiciona al producto en el grafo de schema.org. Usamos
   SoftwareApplication porque encaja mejor con un SaaS B2B; añadimos
   applicationCategory para reforzar la categoría de marca.
   ────────────────────────────────────────────────────────────────────── */

export function SoftwareApplicationJsonLd() {
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteConfig.url}/#software`,
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: siteConfig.category,
    operatingSystem: "Web",
    url: `${siteConfig.url}/`,
    description: siteConfig.description,
    provider: { "@id": `${siteConfig.url}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Hoteles, cadenas hoteleras y grupos hoteleros",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      // TODO senior: confirmar pricing público; por ahora exponemos solo
      // que existe oferta comercial sin precio cerrado.
      price: "0",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/contacto/"),
    },
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   Service — para landings de módulo individuales

   `SoftwareApplication` ya posiciona el producto a nivel global; este
   schema enmarca cada módulo (CRM, Campaigns, WhatsApp…) como un servicio
   ofrecido por la organización en los países donde operamos. Refuerza la
   semántica de "servicio B2B vertical hotelero" y permite que Google
   rinda mejor las landings en SERPs locales.
   ────────────────────────────────────────────────────────────────────── */

type ServiceProps = {
  /** Path canónico del módulo, ej. "/crm-hoteles/". */
  path: string;
  /** Nombre del servicio, ej. "CRM para hoteles · Del CRM al CDP". */
  name: string;
  description: string;
  /** Etiqueta de la categoría de módulo (Data Import, Multicanalidad…). */
  serviceType: string;
};

export function ServiceJsonLd({
  path,
  name,
  description,
  serviceType,
}: ServiceProps) {
  const url = absoluteUrl(path);
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    serviceType,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Hoteles, cadenas hoteleras y grupos hoteleros",
    },
    areaServed: oficinas.map((oficina) => ({
      "@type": "Country",
      name: oficina.pais,
    })),
    isPartOf: { "@id": `${siteConfig.url}/#software` },
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   BlogPosting

   Para artículos individuales. Acepta los campos derivados de
   `BlogPost` en lib/content/blog.
   ────────────────────────────────────────────────────────────────────── */

type BlogPostingProps = {
  url: string;
  headline: string;
  description: string;
  datePublished: string;
  authorName: string;
  authorRole?: string;
  image?: string;
  category: string;
  /** Tags libres (no obligatorios). */
  keywords?: string[];
  /** Tiempo de lectura en minutos. */
  readingTimeMinutes?: number;
};

export function BlogPostingJsonLd({
  url,
  headline,
  description,
  datePublished,
  authorName,
  authorRole,
  image,
  category,
  keywords,
  readingTimeMinutes,
}: BlogPostingProps) {
  const absoluteImage = image
    ? image.startsWith("http")
      ? image
      : absoluteUrl(image)
    : absoluteUrl(siteConfig.ogImagePath);

  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    headline,
    description,
    image: absoluteImage,
    datePublished,
    dateModified: datePublished,
    inLanguage: siteConfig.defaultLanguage,
    articleSection: category,
    author: {
      "@type": "Person",
      name: authorName,
      ...(authorRole ? { jobTitle: authorRole } : {}),
      worksFor: { "@id": `${siteConfig.url}/#organization` },
    },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    ...(keywords && keywords.length ? { keywords: keywords.join(", ") } : {}),
    ...(readingTimeMinutes
      ? { timeRequired: `PT${readingTimeMinutes}M` }
      : {}),
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   FAQPage

   Marcado de preguntas frecuentes. Si una sección renderiza acordeones
   con Q/A, declararlos aquí permite rich-results en SERP.
   ────────────────────────────────────────────────────────────────────── */

type FaqItem = { question: string; answer: string };

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  if (!items.length) return null;
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return <JsonLdScript data={data} />;
}

/* ──────────────────────────────────────────────────────────────────────
   ItemList — para listados (blog index, marketplace listing, etc.)
   ────────────────────────────────────────────────────────────────────── */

type ListItemInput = { name: string; path: string; description?: string };

export function ItemListJsonLd({
  name,
  items,
}: {
  name: string;
  items: ListItemInput[];
}) {
  const data: JsonLdObject = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: absoluteUrl(item.path),
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
    })),
  };
  return <JsonLdScript data={data} />;
}
