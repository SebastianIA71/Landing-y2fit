import Image from "next/image";
import Reveal from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import HomeScreen from "@/components/screens/HomeScreen";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/landing/images/hero-vestuario-bn.jpg"
          alt="Atleta joven en vestuario vacío, botas de tacos a un lado y zapatillas de gym al otro"
          fill
          priority
          className="object-cover object-[center_30%] grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,12,0.35)_0%,rgba(10,11,12,0.1)_40%,rgba(10,11,12,0.92)_82%,#0a0b0c_100%)]" />

      <div className="absolute bottom-[-12%] right-[5%] z-[2] hidden h-[74vh] w-[300px] rotate-[-7deg] drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)] md:block">
        <PhoneFrame className="h-full w-full">
          <HomeScreen />
        </PhoneFrame>
      </div>

      <div className="relative z-[3] mx-auto w-full max-w-[1400px] px-6 pb-[72px] md:px-8">
        <Reveal>
          <p className="mb-5 text-xs uppercase tracking-[0.24em] text-dim">
            Temporada 1 · Disponible en iOS y Android
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="max-w-[12ch] text-balance font-display text-[clamp(52px,7.6vw,116px)] uppercase leading-[0.94] tracking-[-0.01em] text-fog">
            Tu carrera no terminó.
            <br />
            <span className="text-volt">Cambió de escenario.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="my-6 max-w-[44ch] text-[clamp(16px,1.4vw,20px)] leading-[1.55] text-muted">
            La app que te entrena cuando dejas el deporte de equipo y empiezas en el gimnasio. Tu
            plan por temporadas, un coach IA y cada sesión guiada ejercicio a ejercicio.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mb-9 flex items-center gap-3.5 font-display text-xs uppercase tracking-[0.14em] text-volt">
            <span>Plan</span>
            <span className="text-border2">·</span>
            <span>Coach IA</span>
            <span className="text-border2">·</span>
            <span>Progreso</span>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-wrap items-center gap-[18px]">
            <a
              href="#finale"
              className="inline-block rounded-full bg-volt px-[34px] py-[18px] font-display text-[15px] uppercase tracking-[0.04em] text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(200,248,46,0.3)]"
            >
              Empieza tu temporada 1
            </a>
            <span className="text-sm text-dim">Gratis · iOS y Android</span>
          </div>
        </Reveal>

        <Reveal delay={0.25} className="mx-auto mt-9 h-[300px] w-[210px] md:hidden">
          <PhoneFrame className="h-full w-full border border-border shadow-phone">
            <HomeScreen />
          </PhoneFrame>
        </Reveal>
      </div>

      <div id="hero-end" className="absolute bottom-0 h-px w-full" />
    </section>
  );
}
