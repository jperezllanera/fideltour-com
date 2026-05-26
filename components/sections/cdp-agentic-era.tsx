import Image from "next/image";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

/**
 * Sustituye la antigua sección "Tu contexto vive en tres sitios" (rows
 * estáticos) por una reveal scroll-driven que entra desde abajo
 * mostrando el dashboard real del módulo Identity dentro de un marco
 * laptop. El relato pasa de "dónde vive el dato" a "qué construyes
 * cuando el dato vive en un solo sitio" — es el mismo argumento, mejor
 * teatralizado.
 */
export function CdpAgenticEraSection() {
  return (
    <section className="relative bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <div className="text-eyebrow text-brand-navy-deep">
              El cambio de era
            </div>
            <h2 className="h-mega mt-3">
              Bienvenido a la{" "}
              <span className="text-brand-navy-deep">era agéntica</span>.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Tu motor de reservas conversa, propone, cotiza y cierra.
              Detrás, el CDP le pasa el contexto vivo del huésped — el
              mismo que ves en tu panel de Identity.
            </p>
          </>
        }
      >
        <Image
          src="/brand/hero-identity-crm.webp"
          alt="Captura del módulo Identity de Fideltour: dashboard de contactos identificados, visitas por país y evolución temporal"
          width={1500}
          height={1114}
          sizes="(min-width: 1024px) 960px, 90vw"
          className="mx-auto h-auto w-full"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
