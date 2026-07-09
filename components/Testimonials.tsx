import Reveal from "@/components/Reveal";
import { testimonials } from "@/data/landing";

export default function Testimonials() {
  return (
    <section id="historias" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
            Historias reales, <span className="text-volt">resultados reales.</span>
          </h2>
          <p className="mt-4 text-sm text-muted">Testimonios placeholder hasta validar citas reales.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <blockquote className="h-full rounded-2xl border border-white/[.07] bg-card p-5">
                <p className="text-volt" aria-label="5 estrellas">*****</p>
                <p className="mt-5 leading-7 text-fog">
                  <span aria-hidden="true">“</span>
                  {item.quote}
                  <span aria-hidden="true">”</span>
                </p>
                <footer className="mt-8 flex items-center gap-3 border-t border-white/[.06] pt-4">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-volt/10 font-display font-black text-volt">
                    {item.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-fog">{item.name}, {item.age}</p>
                    <p className="text-xs text-muted">{item.context}</p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
