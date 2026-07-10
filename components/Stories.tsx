import Image from "next/image";
import Reveal from "@/components/Reveal";

const stories = [
  {
    name: "Álvaro, 19",
    achievement: "Extremo → press banca 80 kg · 6 meses",
    quote: "«Echaba de menos que alguien me dijera qué tocaba hoy. Y me lo dice.»",
    image: "/landing/images/historia-alvaro.jpg",
    position: "center 20%",
    direction: "left" as const
  },
  {
    name: "Marta, 22",
    achievement: "Base → 8 dominadas estrictas · 4 meses",
    quote: "«Dejé el baloncesto por la rodilla. No dejé de competir: ahora compito conmigo.»",
    image: "/landing/images/historia-marta.jpg",
    position: "center 15%",
    direction: "up" as const
  },
  {
    name: "Iker, 17",
    achievement: "Portero → sentadilla 100 kg · 8 meses",
    quote: "«Mi madre ve el resumen semanal y me deja en paz. Trato justo.»",
    image: "/landing/images/historia-iker.jpg",
    position: "center 15%",
    direction: "right" as const
  }
];

export default function Stories() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-[140px] md:px-8">
      <Reveal>
        <p className="mb-[18px] font-display text-[13px] uppercase tracking-[0.12em] text-volt">
          Fichajes de esta temporada
        </p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mb-12 max-w-[18ch] text-balance font-display text-[clamp(36px,3.8vw,56px)] uppercase leading-none text-fog">
          Vienen de donde tú vienes.
        </h2>
      </Reveal>
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((s) => (
          <Reveal key={s.name} direction={s.direction}>
            <article className="group overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1.5">
              <div className="relative h-[260px]">
                <Image src={s.image} alt={s.name} fill className="object-cover" style={{ objectPosition: s.position }} sizes="(min-width: 768px) 33vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
              </div>
              <div className="p-[22px]">
                <p className="font-display text-xl uppercase text-fog">{s.name}</p>
                <p className="my-1.5 text-[13px] font-semibold text-volt">{s.achievement}</p>
                <p className="text-sm leading-relaxed text-muted">{s.quote}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
