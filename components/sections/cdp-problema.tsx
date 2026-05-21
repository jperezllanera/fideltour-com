export function CdpProblemaSection() {
  return (
    <section id="problema" className="relative bg-background">
      <div className="mx-auto max-w-4xl px-4 py-20 md:px-6 md:py-28">
        <div className="text-eyebrow text-brand-navy-deep">
          El insight de partida
        </div>
        <h2 className="mt-3">
          El problema no es la falta de datos. Es no saber activarlos.
        </h2>
        <div className="mt-6 flex flex-col gap-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            Los hoteles generan datos de forma constante, pero la mayoría no se
            transforman en valor real. Parte del dato permanece anónimo y se
            pierde, el dato identificado se fragmenta entre sistemas y la
            fidelización se convierte en acciones aisladas sin continuidad.
          </p>
          <p>
            El resultado es una relación débil con el huésped, menor repetición
            y una dependencia excesiva de intermediarios. No falta información:
            falta un modelo que permita activarla de forma coherente y
            continua.
          </p>
        </div>
      </div>
    </section>
  );
}
