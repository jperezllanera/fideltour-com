"use client";

import Fuse, { type IFuseOptions } from "fuse.js";
import { ArrowUpRight, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { cn } from "@/lib/utils";

export type SearchablePost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  date: string;
};

const FUSE_OPTIONS: IFuseOptions<SearchablePost> = {
  keys: [
    { name: "title", weight: 0.6 },
    { name: "excerpt", weight: 0.3 },
    { name: "category", weight: 0.1 },
  ],
  threshold: 0.35,
  ignoreLocation: true,
  minMatchCharLength: 2,
};

const LIMIT = 6;

export function BlogSearch({ posts }: { posts: SearchablePost[] }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Indexamos sólo en cliente, una vez por carga.
  const fuse = useMemo(() => new Fuse(posts, FUSE_OPTIONS), [posts]);

  const results = useMemo(() => {
    const trimmed = query.trim();
    if (trimmed.length < 2) return [];
    return fuse.search(trimmed, { limit: LIMIT }).map((r) => r.item);
  }, [query, fuse]);

  // Cerrar el dropdown al hacer click fuera.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!wrapperRef.current) return;
      if (!wrapperRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full max-w-md">
      <label htmlFor="blog-search" className="sr-only">
        Buscar en el blog
      </label>
      <div className="relative">
        <Search
          aria-hidden
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => query.length >= 2 && setOpen(true)}
          placeholder="Buscar artículos…"
          autoComplete="off"
          className="h-11 w-full rounded-full border border-border/70 bg-card pl-9 pr-4 text-sm text-foreground shadow-[var(--shadow-soft)] outline-none transition placeholder:text-muted-foreground focus:border-brand focus:ring-2 focus:ring-brand/30"
        />
      </div>

      {open && query.trim().length >= 2 && (
        <div
          role="listbox"
          aria-label="Resultados de búsqueda"
          className={cn(
            "absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-[var(--shadow-bento)]",
          )}
        >
          {results.length === 0 ? (
            <div className="p-5 text-sm text-muted-foreground">
              Sin resultados para «{query.trim()}». Prueba con otra palabra
              clave.
            </div>
          ) : (
            <ul className="max-h-[420px] overflow-y-auto divide-y divide-border/40">
              {results.map((post) => (
                <li key={post.href}>
                  <Link
                    href={post.href}
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-3 p-4 transition-colors hover:bg-muted/50 focus:bg-muted/60 focus:outline-none"
                    role="option"
                  >
                    <div className="flex-1">
                      <div className="text-eyebrow text-brand-navy-deep">
                        {post.category}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-foreground line-clamp-2">
                        {post.title}
                      </div>
                      <div className="mt-1 text-2xs text-muted-foreground line-clamp-2">
                        {post.excerpt}
                      </div>
                    </div>
                    <ArrowUpRight
                      aria-hidden
                      className="mt-1 size-4 shrink-0 text-muted-foreground"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
