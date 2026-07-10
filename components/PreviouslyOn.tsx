import Reveal from "@/components/Reveal";

export default function PreviouslyOn() {
  return (
    <section className="bg-ink">
      <div className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-16 text-center">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.28em] text-dim">Previously on — tu carrera</p>
        </Reveal>
        <Reveal direction="left">
          <p className="max-w-[20ch] text-balance font-display text-[clamp(34px,4.6vw,68px)] uppercase leading-[1.04] text-fog">
            El último partido nadie te avisa de que es el último.
          </p>
        </Reveal>
      </div>
      <div className="flex min-h-[85vh] flex-col items-center justify-center px-6 py-16 text-center">
        <Reveal direction="right">
          <p className="max-w-[20ch] text-balance font-display text-[clamp(34px,4.6vw,68px)] uppercase leading-[1.04] text-dim">
            El grupo de WhatsApp sigue. <span className="text-fog">Tú ya no.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
