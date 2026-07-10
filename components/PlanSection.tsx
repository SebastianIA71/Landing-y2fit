import Reveal from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import MissionsScreen from "@/components/screens/MissionsScreen";

export default function PlanSection() {
  return (
    <section className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-[140px] md:grid-cols-2 md:px-8">
      <Reveal direction="left">
        <p className="mb-[18px] font-display text-[13px] uppercase tracking-[0.12em] text-volt">
          EP.01 — El plan
        </p>
        <h2 className="mb-[22px] text-balance font-display text-[clamp(36px,3.8vw,56px)] uppercase leading-none text-fog">
          Una misión. Temporadas. Episodios.
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-[1.6] text-muted">
          Entrenar vuelve a tener guion. Eliges tu misión y Y2FIT genera tu temporada: fases con
          sentido, episodios de una sesión, y un motivo para cada número.
        </p>
      </Reveal>
      <Reveal direction="right" className="flex justify-center">
        <PhoneFrame className="h-[620px] w-[300px] border border-border shadow-phone">
          <MissionsScreen />
        </PhoneFrame>
      </Reveal>
    </section>
  );
}
