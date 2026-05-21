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
   - Cada CTA "Acceder al ebook" abre este modal.
   - El modal pasa el slug del ebook como `ebookSlug` para que, cuando
     senior conecte el endpoint real, se sepa qué pieza pidió el lead.
   - El form es **placeholder visual** (action="#", noValidate, sin
     persistencia). NO se envía nada hasta que se decida la stack de
     marketing (HubSpot, Brevo, custom).

   TODO senior: enchufar endpoint real + tracking + entrega del PDF.
   ────────────────────────────────────────────────────────────────────── */

type LeadMagnetContextValue = {
  open: (ebookSlug?: string) => void;
};

const LeadMagnetContext = React.createContext<LeadMagnetContextValue | null>(
  null,
);

export function LeadMagnetProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [requestedEbook, setRequestedEbook] = React.useState<string | undefined>(
    undefined,
  );

  const open = React.useCallback((ebookSlug?: string) => {
    setRequestedEbook(ebookSlug);
    setIsOpen(true);
  }, []);

  const value = React.useMemo<LeadMagnetContextValue>(() => ({ open }), [open]);

  return (
    <LeadMagnetContext.Provider value={value}>
      {children}
      <LeadMagnetDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        requestedEbook={requestedEbook}
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
  className,
  children,
}: {
  ebookSlug?: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const { open } = useLeadMagnet();
  return (
    <Button
      type="button"
      size="lg"
      onClick={() => open(ebookSlug)}
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
}: {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  requestedEbook?: string;
}) {
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

          {/* TODO senior: enchufar endpoint real de lead capture + entrega
              del PDF correspondiente a `requestedEbook`. De momento es un
              form placeholder sin envío (action="#", noValidate). */}
          <form
            action="#"
            method="post"
            noValidate
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
