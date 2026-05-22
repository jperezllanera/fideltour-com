import Link from "next/link";
import { ArrowRight } from "lucide-react";

import {
  moduleCategoryDescriptions,
  moduleCategoryLabels,
  moduleNavEntries,
  type ModuleCategory,
} from "@/lib/content/module-landings";

type Props = {
  /** Slug del módulo actual — se excluye del listado. */
  currentSlug: string;
  /** Categoría del módulo actual — se usan sus hermanos. */
  category: ModuleCategory;
};

/**
 * Sección "Módulos que se integran con este" — distribuye PageRank interno
 * entre landings de la misma familia funcional y abre cross-sell sin sacar
 * al visitante de la narrativa del módulo que está leyendo.
 *
 * Selección automática: hermanos de la misma `category` excluyendo el slug
 * actual, ordenados como aparecen en `moduleNavEntries` y limitados a 3.
 */
export function ModuleRelated({ currentSlug, category }: Props) {
  const siblings = moduleNavEntries
    .filter((m) => m.category === category && m.slug !== currentSlug)
    .slice(0, 3);

  if (siblings.length === 0) return null;

  return (
    <section
      aria-labelledby="modulos-relacionados-titulo"
      className="border-t border-border/60 bg-card/30 py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="max-w-2xl">
          <div className="text-eyebrow text-muted-foreground">
            {moduleCategoryLabels[category]}
          </div>
          <h2 id="modulos-relacionados-titulo" className="mt-3 text-brand-navy">
            Módulos que se integran con este
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            {moduleCategoryDescriptions[category]}
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siblings.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/${m.slug}/`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 shadow-soft transition-shadow hover:shadow-bento"
              >
                <div>
                  <div className="text-eyebrow-sm text-muted-foreground">
                    {moduleCategoryLabels[m.category]}
                  </div>
                  <h3 className="mt-2 text-brand-navy">{m.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {m.description}
                  </p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy">
                  Ver módulo
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
