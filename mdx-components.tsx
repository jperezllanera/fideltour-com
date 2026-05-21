import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { RelatedModuleCta } from "@/components/blog/related-module-cta";

/**
 * Componentes que `next-mdx-remote/rsc` usa para renderizar los `.mdx` del
 * blog. Toda la jerarquía visual sale de los tokens definidos en
 * `app/globals.css` (sin valores tipográficos arbitrarios), de manera que el
 * contenido editorial respete el sistema Aurora Bento sin que el redactor
 * tenga que pensar en clases.
 */
export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => (
    <h1 {...props} className="mt-8 first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 {...props} className="mt-12 scroll-mt-24">
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 {...props} className="mt-10 scroll-mt-24">
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 {...props} className="mt-8 scroll-mt-24">
      {children}
    </h4>
  ),
  p: ({ children, ...props }) => (
    <p {...props} className="mt-5 text-base leading-relaxed text-foreground/90 md:text-lg">
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const url = href ?? "";
    const isInternal = url.startsWith("/") || url.startsWith("#");
    const className =
      "font-semibold text-brand-navy underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-brand hover:decoration-brand";
    if (isInternal) {
      return (
        <Link href={url} className={className}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  ul: ({ children, ...props }) => (
    <ul {...props} className="mt-5 ml-5 list-disc space-y-2 marker:text-brand text-base leading-relaxed text-foreground/90 md:text-lg">
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol {...props} className="mt-5 ml-5 list-decimal space-y-2 marker:text-brand-navy marker:font-bold text-base leading-relaxed text-foreground/90 md:text-lg">
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li {...props} className="pl-2">
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }) => (
    <blockquote
      {...props}
      className="mt-8 border-l-4 border-brand bg-card/60 px-6 py-4 rounded-r-2xl text-base leading-relaxed text-foreground/85 italic md:text-lg"
    >
      {children}
    </blockquote>
  ),
  hr: (props) => (
    <hr
      {...props}
      className="my-12 border-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
    />
  ),
  strong: ({ children, ...props }) => (
    <strong {...props} className="font-bold text-brand-navy">
      {children}
    </strong>
  ),
  em: ({ children, ...props }) => (
    <em {...props} className="italic">
      {children}
    </em>
  ),
  code: ({ children, className, ...props }) => {
    // Si el padre es <pre>, dejamos el code "puro" para que el bloque herede el estilo.
    const isInlineCode = !className?.includes("language-");
    if (isInlineCode) {
      return (
        <code
          {...props}
          className={cn(
            "rounded-md border border-border/70 bg-muted px-1.5 py-0.5 text-sm font-semibold text-brand-navy",
            className,
          )}
        >
          {children}
        </code>
      );
    }
    return (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
  pre: ({ children, ...props }) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-2xl border border-border/70 bg-foreground/95 p-5 text-sm text-background"
    >
      {children}
    </pre>
  ),
  img: ({ src, alt, width, height, ...props }) => {
    if (!src) return null;
    // Imágenes externas (CDN del WP original tras migración) — usar <img> nativo
    // con dimensiones explícitas. Para imágenes locales en /public usar `<Image>`.
    const stringSrc = typeof src === "string" ? src : "";
    if (stringSrc.startsWith("http")) {
      // Imágenes externas (CDN del WordPress original tras la migración) — no
      // se pasan por next/image porque exigiría allowlistear cada hostname en
      // next.config y la imagen ya viene optimizada por el CDN origen.
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={stringSrc}
          alt={alt ?? ""}
          loading="lazy"
          className="mt-8 w-full rounded-2xl border border-border/70 shadow-[var(--shadow-soft)]"
          {...props}
        />
      );
    }
    return (
      <Image
        src={stringSrc}
        alt={alt ?? ""}
        width={typeof width === "number" ? width : 1280}
        height={typeof height === "number" ? height : 720}
        className="mt-8 w-full rounded-2xl border border-border/70 shadow-[var(--shadow-soft)]"
        {...(props as Partial<ImageProps>)}
      />
    );
  },
  table: ({ children, ...props }) => (
    <div className="mt-6 overflow-x-auto rounded-2xl border border-border/70">
      <table {...props} className="w-full border-collapse text-left text-sm">
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      {...props}
      className="border-b border-border/70 bg-muted/60 px-4 py-3 text-eyebrow text-brand-navy-deep"
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td {...props} className="border-b border-border/40 px-4 py-3 align-top">
      {children}
    </td>
  ),
  // Custom — disponibles desde MDX para que los redactores enlacen módulos.
  RelatedModuleCta,
};
