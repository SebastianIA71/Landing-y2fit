import Reveal from "@/components/Reveal";
import { demoSteps } from "@/data/landing";

export default function ScrollDemo() {
  return (
    <section id="como-funciona" className="border-y border-white/[.06] bg-[#080909] px-5 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-volt">Como funciona</p>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
            Una sesion guiada de principio a fin.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted">
            Del episodio del dia al ajuste inteligente del proximo entrenamiento. Sin friccion, sin pantallas innecesarias.
          </p>
        </Reveal>
        <div className="grid gap-4">
          {demoSteps.map((step, index) => (
            <Reveal key={step.label} delay={index * 0.04}>
              <article className="grid gap-5 rounded-2xl border border-white/[.07] bg-card p-5 md:grid-cols-[180px_1fr]">
                <div className="rounded-xl bg-[#101214] p-4">
                  <p className="text-xs font-bold uppercase tracking-[.16em] text-muted">{step.label}</p>
                  <div className="mt-6 h-2 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-volt" style={{ width: `${(index + 1) * 20}%` }} />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-black uppercase text-fog">{step.title}</h3>
                  <p className="mt-3 leading-7 text-muted">{step.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
