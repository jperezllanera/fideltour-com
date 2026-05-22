import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { moduleNavEntries } from "@/lib/content/module-landings";

type Props = {
  /** Slug del módulo a enlazar — debe coincidir con `moduleNavEntries`. */
  slug: string;
  /** Eyebrow opcional, por defecto "Lee también". */
  eyebrow?: string;
  /** Título opcional — si no se aporta, se usa `"Conoce <label>"`. */
  title?: string;
  /** Descripción opcional — si no se aporta, se usa la del menú. */
  description?: string;
};

/**
 * CTA contextual hacia una landing de módulo, pensado para insertarse a
 * mitad de un post de blog desde MDX:
 *
 *     <RelatedModuleCta slug="crm-hoteles" />
 *
 * Toma label/description de `moduleNavEntries` como fallback para que los
 * redactores no tengan que repetir la descripción del módulo. Si el slug no
 * existe, no renderiza nada (no rompe el post).
 */
export function RelatedModuleCta({
  slug,
  eyebrow = "Lee también",
  title,
  description,
}: Props) {
  const entry = moduleNavEntries.find((m) => m.slug === slug);
  if (!entry) return null;

  const finalTitle = title ?? `Conoce ${entry.label}`;
  const finalDescription = description ?? entry.description;

  return (
    <aside className="not-prose my-10 rounded-2xl border border-border/70 bg-card p-6 shadow-soft md:p-7">
      <div className="text-eyebrow text-brand-navy-deep">{eyebrow}</div>
      <h3 className="mt-2 text-brand-navy">{finalTitle}</h3>
      <p className="mt-2 text-base text-muted-foreground">
        {finalDescription}
      </p>
      <Link
        href={`/${entry.slug}/`}
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand"
      >
        Ver el módulo
        <ArrowRight className="size-4" />
      </Link>
    </aside>
  );
}
