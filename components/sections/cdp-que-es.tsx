import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cdpFaq } from "@/lib/content/cdp";

export function CdpQueEsSection() {
  return (
    <section id="que-es" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 flex flex-col gap-5 md:sticky md:top-24 md:self-start">
            <div className="text-eyebrow text-brand-navy-deep">
              Qué es Fideltour CDP
            </div>
            <h2>Una sola tarifa. Toda la escalera. Cero piezas sueltas.</h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Fideltour CDP es la tarifa plana por habitación que incluye todos
              los módulos del ecosistema Fideltour y permite trabajar la
              fidelización de forma integral, desde el primer contacto hasta la
              repetición.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              No se trata de contratar piezas sueltas ni de anticipar qué
              necesitarás dentro de un año. Se trata de disponer del sistema
              completo y activarlo de forma progresiva, según la estrategia y
              la madurez de cada hotel o cadena.
            </p>
          </div>

          <Accordion
            className="md:col-span-7 rounded-2xl border border-border/70 bg-card px-2 shadow-[var(--shadow-soft)] md:px-4"
          >
            {cdpFaq.map(({ question, answer }) => (
              <AccordionItem
                key={question}
                value={question}
                className="px-2 md:px-4"
              >
                <AccordionTrigger className="py-5 text-base font-semibold text-brand-navy md:text-lg">
                  {question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
