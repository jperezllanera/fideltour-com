"use client";

import * as React from "react";
import { Dialog } from "@base-ui/react/dialog";
import { ArrowRight, Download, X } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ──────────────────────────────────────────────────────────────────────
   LEAD MAGNET — pieza crítica de marketing
   ----------------------------------------------------------------------
   La página /recursos/ original engancha cada ebook (y cualquier "contenido
   gratuito") a un mismo formulario popup de captura de lead. Es lo que
   alimenta la base de datos de marketing — replicar fielmente.

   Comportamiento:
   - Cada CTA "Acceder al ebook" llama a `request({ slug, assetUrl })`.
   - Si el lead **ya rellenó el form** alguna vez en este navegador
     (flag en localStorage), se salta el modal y se dispara directamente
     la descarga del asset si la URL existe.
   - Si no, se abre el modal. Al hacer submit:
       1) se marca el flag en localStorage,
       2) se cierra el modal,
       3) se abre el asset solicitado (si hay URL).
   - El form sigue siendo **placeholder visual** (action="#", noValidate).
     NO se envía nada al backend hasta que senior conecte la stack de
     marketing (HubSpot, Brevo, custom). El handler local solo recuerda
     la captura en el navegador para no volver a pedirla.

   TODO senior:
   - Reemplazar el handler local por una llamada real al endpoint de
     captura (con `ebook` slug y el resto de campos).
   - Rellenar `assetUrl` en lib/content/recursos.ts (URLs firmadas, CDN,
     HubSpot file… lo que decida marketing).
   - Considerar mover el flag a cookie httpOnly servidor-side cuando exista
     backend, en lugar de localStorage cliente.
   ────────────────────────────────────────────────────────────────────── */

const SUBMITTED_STORAGE_KEY = "fideltour:lead-magnet:captured";

type LeadMagnetRequest = {
  slug?: string;
  assetUrl?: string;
};

type LeadMagnetContextValue = {
  request: (params: LeadMagnetRequest) => void;
};

const LeadMagnetContext = React.createContext<LeadMagnetContextValue | null>(
  null,
);

/**
 * Abre el asset en una pestaña nueva. Pensado para PDFs servidos por CDN
 * o URLs firmadas; el `noopener,noreferrer` evita que el destino acceda
 * a `window.opener`.
 */
function openAsset(assetUrl?: string) {
  if (!assetUrl || typeof window === "undefined") return;
  window.open(assetUrl, "_blank", "noopener,noreferrer");
}

function hasCapturedLead() {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(SUBMITTED_STORAGE_KEY) === "true";
  } catch {
    // Safari en modo privado puede lanzar al leer localStorage.
    return false;
  }
}

function markLeadCaptured() {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(SUBMITTED_STORAGE_KEY, "true");
  } catch {
    // Si el storage está bloqueado, perdemos la memoria entre visitas
    // pero el flujo de esta sesión sigue funcionando vía el state local.
  }
}

export function LeadMagnetProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [requestedEbook, setRequestedEbook] = React.useState<string | undefined>(
    undefined,
  );
  const [pendingAssetUrl, setPendingAssetUrl] = React.useState<
    string | undefined
  >(undefined);

  const request = React.useCallback(
    ({ slug, assetUrl }: LeadMagnetRequest) => {
      if (hasCapturedLead()) {
        openAsset(assetUrl);
        return;
      }
      setRequestedEbook(slug);
      setPendingAssetUrl(assetUrl);
      setIsOpen(true);
    },
    [],
  );

  const handleSubmitted = React.useCallback(() => {
    markLeadCaptured();
    setIsOpen(false);
    openAsset(pendingAssetUrl);
  }, [pendingAssetUrl]);

  const value = React.useMemo<LeadMagnetContextValue>(
    () => ({ request }),
    [request],
  );

  return (
    <LeadMagnetContext.Provider value={value}>
      {children}
      <LeadMagnetDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        requestedEbook={requestedEbook}
        onSubmitted={handleSubmitted}
      />
    </LeadMagnetContext.Provider>
  );
}

function useLeadMagnet() {
  const ctx = React.useContext(LeadMagnetContext);
  if (!ctx) {
    throw new Error(
      "LeadMagnetTrigger / useLeadMagnet deben usarse dentro de <LeadMagnetProvider>.",
    );
  }
  return ctx;
}

/**
 * Botón "Acceder al ebook" que dispara el lead magnet. Reemplaza al
 * `<Link href="#captura">` del placeholder inicial.
 */
export function LeadMagnetTrigger({
  ebookSlug,
  assetUrl,
  className,
  children,
}: {
  ebookSlug?: string;
  assetUrl?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { request } = useLeadMagnet();
  return (
    <Button
      type="button"
      size="lg"
      onClick={() => request({ slug: ebookSlug, assetUrl })}
      className={cn(
        "rounded-full bg-brand text-white hover:bg-brand/90 px-5 gap-1.5",
        className,
      )}
    >
      <Download className="size-4" aria-hidden />
      {children ?? "Acceder al ebook"}
      <ArrowRight className="size-4" aria-hidden />
    </Button>
  );
}

function LeadMagnetDialog({
  open,
  onOpenChange,
  requestedEbook,
  onSubmitted,
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  requestedEbook?: string;
  onSubmitted: () => void;
}) {
  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      // TODO senior: aquí va el envío real al CRM/marketing stack. De
      // momento prevenimos el submit nativo, marcamos el flag local y
      // disparamos la descarga del asset (si la URL ya está rellena).
      event.preventDefault();
      onSubmitted();
    },
    [onSubmitted],
  );


  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-50 bg-brand-navy-deep/40 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup className="fixed left-1/2 top-1/2 z-50 grid w-full max-w-xl -translate-x-1/2 -translate-y-1/2 gap-6 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-elevated)] transition duration-200 data-ending-style:opacity-0 data-ending-style:scale-95 data-starting-style:opacity-0 data-starting-style:scale-95 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-eyebrow text-brand-navy-deep">
                Contenido gratuito
              </div>
              <Dialog.Title
                render={
                  <h2 className="text-2xl md:text-3xl text-brand-navy">
                    Accede a nuestro contenido gratuito
                  </h2>
                }
              />
              <Dialog.Description className="text-sm leading-relaxed text-muted-foreground">
                Te enviamos el ebook a tu email profesional. Sin spam: solo
                contenido útil para hoteleros que quieren dominar su dato.
              </Dialog.Description>
            </div>
            <Dialog.Close
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background text-muted-foreground transition-colors hover:border-brand-navy hover:text-brand-navy"
              aria-label="Cerrar formulario"
            >
              <X className="size-4" aria-hidden />
            </Dialog.Close>
          </div>

          {/* TODO senior: enchufar endpoint real de lead capture aquí. El
              handler local solo marca el flag en localStorage para no
              volver a pedir el form y dispara la descarga del asset si
              `assetUrl` ya está rellena en lib/content/recursos.ts. */}
          <form
            action="#"
            method="post"
            noValidate
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {requestedEbook && (
              <input type="hidden" name="ebook" value={requestedEbook} />
            )}

            <div className="grid gap-3 md:grid-cols-2">
              <LeadMagnetField
                id="lead-name"
                name="name"
                label="Nombre"
                autoComplete="given-name"
                required
              />
              <LeadMagnetField
                id="lead-lastname"
                name="lastname"
                label="Apellidos"
                autoComplete="family-name"
                required
              />
            </div>

            <LeadMagnetField
              id="lead-company"
              name="company"
              label="Empresa"
              autoComplete="organization"
              required
            />

            <LeadMagnetField
              id="lead-email"
              name="email"
              label="Email corporativo"
              type="email"
              autoComplete="email"
              required
            />

            <div className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-muted/40 p-4">
              <LeadMagnetCheckbox
                id="lead-newsletter"
                name="newsletter"
                label="Quiero estar al día de las novedades de Fideltour."
              />
              <LeadMagnetCheckbox
                id="lead-terms"
                name="terms"
                label={
                  <>
                    He leído y acepto los{" "}
                    <Link
                      href="/terminos-y-condiciones"
                      className="font-semibold text-brand-navy underline-offset-4 hover:underline"
                    >
                      términos y condiciones
                    </Link>
                    .
                  </>
                }
                required
              />
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-1">
              <Dialog.Close
                render={
                  <button
                    type="button"
                    className="rounded-full px-5 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-brand-navy"
                  >
                    Cancelar
                  </button>
                }
              />
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-brand-navy text-white hover:bg-brand-navy-deep px-6 gap-1.5"
              >
                Acceder
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </form>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function LeadMagnetField({
  id,
  label,
  ...inputProps
}: React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}
      </label>
      <input
        id={id}
        {...inputProps}
        className="h-11 rounded-full border border-border/70 bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-navy focus:ring-2 focus:ring-brand-navy/15"
      />
    </div>
  );
}

function LeadMagnetCheckbox({
  id,
  name,
  label,
  required,
}: {
  id: string;
  name: string;
  label: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 text-sm leading-relaxed text-foreground"
    >
      <input
        id={id}
        name={name}
        type="checkbox"
        required={required}
        className="mt-1 size-4 shrink-0 rounded border-border/70 text-brand-navy accent-brand-navy focus:ring-2 focus:ring-brand-navy/30"
      />
      <span>{label}</span>
    </label>
  );
}
