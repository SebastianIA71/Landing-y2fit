"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 }
};

const features = [
  {
    title: "Rutinas tipo episodio",
    text: "Sesiones cortas, visuales y con objetivo claro para saber que toca antes de tocar una maquina."
  },
  {
    title: "Progreso que engancha",
    text: "Rachas, niveles y mejoras visibles para mantener la sensacion de temporada en marcha."
  },
  {
    title: "Transicion sin caos",
    text: "Del vestuario al gym con una guia que traduce fuerza, movilidad y habitos sin tecnicismos."
  },
  {
    title: "Look deportivo real",
    text: "Una interfaz oscura, rapida y directa pensada para usar entre clase, entreno y amigos."
  }
];

const steps = [
  "Elige tu punto de partida",
  "Sigue episodios de entrenamiento",
  "Sube nivel y desbloquea progreso"
];

const benefits = [
  "Menos dudas al entrar al gym",
  "Mas constancia sin depender de motivacion",
  "Rutinas pensadas para cuerpos jovenes",
  "Sensacion de equipo aunque entrenes solo",
  "Progreso facil de enseñar y compartir",
  "CTA claro hacia App Store y Google Play"
];

const testimonials = [
  {
    quote:
      "Placeholder: deje futbol y no sabia ni por donde empezar. Y2FIT me dio una rutina sin hacerme sentir perdido.",
    name: "Alex, 18"
  },
  {
    quote:
      "Placeholder: parece una serie. Cada semana tenia algo nuevo que completar y eso me mantuvo dentro.",
    name: "Nora, 20"
  },
  {
    quote:
      "Placeholder: no queria una app de culturismo. Queria algo directo, visual y con energia.",
    name: "Dani, 17"
  }
];

function ButtonRow() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href="#stores"
        className="group inline-flex min-h-12 items-center justify-center rounded-md bg-volt px-6 py-3 text-sm font-black uppercase tracking-wide text-ink shadow-neon transition hover:-translate-y-0.5 hover:bg-acid"
      >
        Descargar app
        <span className="ml-2 transition group-hover:translate-x-1">→</span>
      </a>
      <a
        href="#como-funciona"
        className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-bold uppercase tracking-wide text-fog transition hover:border-volt/70 hover:text-volt"
      >
        Ver como funciona
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 font-display text-xs font-black uppercase tracking-[0.26em] text-volt">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-ink">
      <div className="noise" />
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/78 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="font-display text-2xl font-black text-fog">
            y<span className="text-volt">2</span>fit
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-muted md:flex">
            <a className="hover:text-fog" href="#problema">
              Problema
            </a>
            <a className="hover:text-fog" href="#features">
              Features
            </a>
            <a className="hover:text-fog" href="#capturas">
              Capturas
            </a>
          </div>
          <a
            href="#stores"
            className="rounded-md bg-volt px-4 py-2 text-xs font-black uppercase tracking-wide text-ink transition hover:bg-acid"
          >
            Descargar
          </a>
        </nav>
      </header>

      <section
        id="inicio"
        className="relative min-h-screen overflow-hidden pt-28 sm:pt-32"
      >
        <div className="absolute inset-0 -z-10 bg-radial-grid bg-[length:100%_100%,100%_100%,32px_32px] opacity-80" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-ink to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex rounded-full border border-volt/30 bg-volt/10 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-volt">
              Entrena como si fuera tu serie
            </div>
            <h1 className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.9] text-balance text-fog sm:text-7xl lg:text-8xl">
              Del equipo al gym sin perder el ritmo.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              Y2FIT convierte el primer gym en una experiencia guiada, visual y
              motivadora para jovenes que vienen del deporte de equipo y quieren
              seguir progresando.
            </p>
            <div className="mt-8">
              <ButtonRow />
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {["+42%", "3 pasos", "0 caos"].map((item, index) => (
                <div
                  key={item}
                  className="border-l border-white/12 pl-4"
                >
                  <p className="font-display text-2xl font-black text-fog">
                    {item}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                    {index === 0
                      ? "retencion objetivo"
                      : index === 1
                        ? "onboarding"
                        : "primera semana"}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="relative mx-auto w-full max-w-[520px]"
          >
            <div className="absolute left-1/2 top-1/2 -z-10 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt/20 blur-3xl" />
            <Image
              src="/assets/hero-phone.svg"
              alt="Mockup movil de la app Y2FIT"
              width={760}
              height={920}
              priority
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </section>

      <section id="problema" className="border-y border-white/10 bg-graphite/80 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <SectionLabel>El problema</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-fog sm:text-5xl">
              Cuando acaba el equipo, empieza el vacio.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              "Sin entrenador que marque el plan.",
              "Sin grupo que tire de ti cuando cuesta.",
              "Sin mapa para saber si estas mejorando."
            ].map((text) => (
              <div
                key={text}
                className="rounded-md border border-white/10 bg-white/[0.035] p-5"
              >
                <p className="text-lg font-bold leading-7 text-fog">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <SectionLabel>La propuesta</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-fog sm:text-6xl">
              Una transicion guiada, motivadora y visual.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Y2FIT no intenta parecer una hoja de ejercicios. Ordena el cambio:
              diagnostico simple, entrenos por episodios, objetivos de semana y
              feedback visual para que el usuario sienta avance desde el primer
              dia.
            </p>
            <div className="mt-8">
              <ButtonRow />
            </div>
          </div>
          <Image
            src="/assets/progress-panel.svg"
            alt="Panel de progreso visual de Y2FIT"
            width={920}
            height={680}
            className="h-auto w-full rounded-md"
          />
        </div>
      </section>

      <section id="features" className="bg-fog py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Features</SectionLabel>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-black uppercase leading-tight sm:text-6xl">
              Todo lo que empuja a volver manana.
            </h2>
            <p className="max-w-sm text-base leading-7 text-black/60">
              Features enfocadas en conversion, retencion y una experiencia que
              se siente nativa para una audiencia joven.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-md border border-black/10 bg-white p-6"
              >
                <span className="font-display text-4xl font-black text-volt [-webkit-text-stroke:1px_#070809]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-xl font-black uppercase">
                  {feature.title}
                </h3>
                <p className="mt-4 leading-7 text-black/62">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="capturas" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-12 max-w-2xl">
            <SectionLabel>Capturas / mockups</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-fog sm:text-6xl">
              Parece producto real desde el primer vistazo.
            </h2>
          </div>
          <Image
            src="/assets/app-screens.svg"
            alt="Tres capturas placeholder de la app Y2FIT"
            width={1200}
            height={760}
            className="h-auto w-full rounded-md border border-white/10"
          />
        </div>
      </section>

      <section id="como-funciona" className="border-y border-white/10 bg-graphite py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Como funciona</SectionLabel>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step} className="relative rounded-md border border-white/10 bg-ink p-7">
                <span className="font-display text-7xl font-black text-white/8">
                  {index + 1}
                </span>
                <h3 className="mt-8 text-2xl font-black uppercase text-fog">
                  {step}
                </h3>
                <p className="mt-4 leading-7 text-muted">
                  {index === 0
                    ? "Responde unas preguntas rapidas y aterriza en un plan adaptado a tu punto de forma."
                    : index === 1
                      ? "Cada entreno tiene estructura clara, foco visual y sensacion de capitulo completado."
                      : "Consulta progreso, rachas y proximos retos para mantener la energia de competicion."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <SectionLabel>Beneficios</SectionLabel>
            <h2 className="font-display text-4xl font-black uppercase leading-tight text-fog sm:text-5xl">
              Mas claro. Mas constante. Mas tuyo.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.035] p-4"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt text-sm font-black text-ink">
                  ✓
                </span>
                <p className="font-semibold text-fog">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-fog py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionLabel>Testimonios placeholder</SectionLabel>
          <div className="grid gap-4 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-md border border-black/10 bg-white p-6">
                <p className="text-lg font-semibold leading-8">{item.quote}</p>
                <footer className="mt-6 font-display text-sm font-black uppercase tracking-widest text-black/55">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="stores" className="relative overflow-hidden py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(200,248,46,.2),transparent_35%)]" />
        <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
          <p className="font-display text-sm font-black uppercase tracking-[0.3em] text-volt">
            App Store / Google Play placeholders
          </p>
          <h2 className="mt-5 font-display text-5xl font-black uppercase leading-[0.92] text-balance text-fog sm:text-7xl">
            Tu proximo entreno empieza en una descarga.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            Sustituye estos botones por los enlaces reales cuando la app este
            publicada. La landing ya esta orientada a conversion.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a className="inline-flex min-h-14 w-full max-w-xs items-center justify-center rounded-md bg-volt px-7 text-sm font-black uppercase tracking-wide text-ink shadow-neon transition hover:bg-acid sm:w-auto" href="#">
              Descargar app
            </a>
            <a className="inline-flex min-h-14 w-full max-w-xs items-center justify-center rounded-md border border-white/15 bg-white/[0.04] px-7 text-sm font-black uppercase tracking-wide text-fog transition hover:border-volt/70 sm:w-auto" href="#">
              Google Play pronto
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
