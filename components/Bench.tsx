import Reveal from "@/components/Reveal";

export default function Bench() {
  return (
    <section className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-[120px] md:grid-cols-2 md:px-8">
      <Reveal direction="left" className="flex justify-center md:order-1">
        <div className="flex w-full max-w-[360px] flex-col gap-4 rounded-2xl border border-border bg-card p-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-dim">Resumen semanal · para tu familia</p>
          <p className="font-display text-xl uppercase text-fog">Semana 8 de Álvaro</p>
          <div className="flex gap-2.5">
            <div className="flex-1 rounded-[14px] bg-surface p-3.5 text-center">
              <p className="font-display text-2xl text-volt">4/4</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-dim">Episodios</p>
            </div>
            <div className="flex-1 rounded-[14px] bg-surface p-3.5 text-center">
              <p className="font-display text-2xl text-cyan">23</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.1em] text-dim">Racha</p>
            </div>
          </div>
          <div className="rounded-[14px] bg-surface p-4 text-sm leading-relaxed text-muted">
            Está entrenando con constancia y durmiendo mejor. No hace falta preguntarle nada.
          </div>
        </div>
      </Reveal>
      <Reveal direction="right" className="md:order-2">
        <p className="mb-[18px] font-display text-[13px] uppercase tracking-[0.12em] text-volt">El banquillo</p>
        <h2 className="mb-[22px] text-balance font-display text-[clamp(36px,3.8vw,56px)] uppercase leading-none text-fog">
          Alguien en la grada. Nadie en tu vestuario.
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-[1.6] text-muted">
          Si quieres, un familiar recibe un resumen semanal — solo lo esencial, nunca tus datos de
          sesión. Tú entrenas tranquilo; ellos se quedan tranquilos.
        </p>
      </Reveal>
    </section>
  );
}
