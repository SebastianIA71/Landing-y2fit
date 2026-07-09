import Reveal from "@/components/Reveal";
import { HeroPhone } from "@/components/PhoneMockups";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden px-5 pb-12 pt-28 lg:px-8">
      <div className="absolute inset-0 bg-[url('/landing/images/athlete-hero.jpg')] bg-cover bg-[65%_center] opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#070809_0%,rgba(7,8,9,.92)_38%,rgba(7,8,9,.34)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_36%,rgba(200,248,46,.15),transparent_34%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_.9fr]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-volt/40 bg-volt/10 px-4 py-2 text-xs font-bold uppercase tracking-[.18em] text-volt">
              Tu segunda vida deportiva
            </p>
            <h1 className="font-display text-[4rem] font-black uppercase leading-[.86] tracking-tight text-fog sm:text-[5.8rem] lg:text-[6.8rem]">
              The game ended.
              <span className="block text-volt">Your journey didn&apos;t.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#c8cec3]">
              Y2FIT es el entrenador inteligente que te acompana en tu nueva vida en el gimnasio: plan, progreso, IA, retos y comunidad desde el primer dia.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#descarga" className="rounded-full bg-volt px-7 py-4 text-sm font-black uppercase text-ink transition hover:bg-acid">
                Empieza gratis
              </a>
              <a href="#como-funciona" className="rounded-full border border-white/20 px-7 py-4 text-sm font-black uppercase text-fog transition hover:border-volt/60">
                Ver como funciona
              </a>
            </div>
            <p className="mt-5 text-sm text-muted">Gratis - Sin tarjeta - iOS y Android</p>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative flex justify-center lg:justify-end">
          <div className="absolute bottom-6 right-4 hidden h-64 w-64 rounded-full bg-volt/10 blur-3xl lg:block" />
          <HeroPhone />
        </Reveal>
      </div>
    </section>
  );
}
