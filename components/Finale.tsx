import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";

export default function Finale() {
  return (
    <section
      id="finale"
      className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 py-24 text-center md:px-8"
    >
      <Reveal>
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-dim">Mañana · 19:04</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-[14ch] text-balance font-display text-[clamp(48px,7vw,110px)] uppercase leading-[0.96] text-fog">
          La temporada 1 <span className="text-volt">empieza hoy.</span>
        </h2>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-11 flex flex-wrap items-center justify-center gap-3.5">
          <span className="rounded-full border border-border2 px-7 py-[18px] font-sans text-sm font-semibold text-fog transition hover:border-volt hover:text-volt">
            App Store
          </span>
          <span className="rounded-full border border-border2 px-7 py-[18px] font-sans text-sm font-semibold text-fog transition hover:border-volt hover:text-volt">
            Google Play
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-5 text-sm text-dim">Gratis. Sin tarjeta. Tu primer episodio, en 2 minutos.</p>
      </Reveal>

      <Reveal delay={0.2} className="w-full">
        <WaitlistForm />
      </Reveal>
    </section>
  );
}
