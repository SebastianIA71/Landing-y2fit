"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { PhoneDevice } from "@/components/PhoneFrame";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

const TIMES = [19 * 60 + 4, 19 * 60 + 6, 19 * 60 + 38, 19 * 60 + 41];
const STEP_MS = 2400;

const SUBTITLES = [
  { time: "19:04", text: "Abres la app. Tu episodio de hoy te espera." },
  { time: "19:06", text: "4 series. 8–12 reps. El peso de la última vez, ya puesto." },
  { time: "19:38", text: "Última serie. El botón más satisfactorio del gimnasio." },
  { time: "19:41", text: "Dos toques. Y mañana el plan se ajusta solo." }
];

function formatClock(minuteOfDay: number) {
  const h = Math.floor(minuteOfDay / 60);
  const m = Math.round(minuteOfDay % 60);
  return `${h}:${String(m).padStart(2, "0")}`;
}

function useAutoplaySequence(length: number, active: boolean) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!active || index >= length - 1) return;
    const timer = setTimeout(() => setIndex((i) => i + 1), STEP_MS);
    return () => clearTimeout(timer);
  }, [active, index, length]);
  return index;
}

function Clock({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const prevIndex = useRef(0);

  useEffect(() => {
    const from = TIMES[prevIndex.current];
    const to = TIMES[index];
    prevIndex.current = index;
    const controls = animate(from, to, {
      duration: STEP_MS / 1000,
      ease: "easeInOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = formatClock(v);
      }
    });
    return () => controls.stop();
  }, [index]);

  return (
    <div ref={ref} className="font-display text-[clamp(48px,5vw,84px)] leading-none text-fog">
      19:04
    </div>
  );
}

function Frame({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div className={"absolute inset-0 transition-opacity duration-700 " + (active ? "opacity-100" : "pointer-events-none opacity-0")}>
      {children}
    </div>
  );
}

function HomeToday() {
  return (
    <div className="flex h-full flex-col gap-4 px-5 py-6 text-fog">
      <p className="text-[11px] uppercase tracking-[0.2em] text-dim">Hoy · Miércoles</p>
      <div>
        <p className="font-display text-4xl uppercase leading-[0.95] text-fog">Episodio 12</p>
        <p className="mt-1.5 font-display text-base uppercase text-volt">Empuje · 45 min</p>
      </div>
      <div className="flex gap-2">
        {["L", "M", "X", "J", "V"].map((d, i) => (
          <span
            key={d}
            className={
              "flex h-[34px] w-[34px] items-center justify-center rounded-full text-xs font-bold " +
              (i < 2 ? "bg-volt text-ink" : i === 2 ? "border-[1.5px] border-volt text-volt" : "bg-surface text-dim")
            }
          >
            {d}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-card px-[18px] py-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-dim">Racha</p>
          <p className="mt-0.5 font-display text-2xl text-fog">22 días</p>
        </div>
        <div className="h-1.5 w-[90px] overflow-hidden rounded-full bg-surface">
          <div className="h-full w-[78%] bg-volt" />
        </div>
      </div>
      <div className="rounded-2xl bg-card px-[18px] py-4">
        <p className="text-[11px] uppercase tracking-[0.16em] text-dim">Hoy en el episodio</p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          Press banca · Press militar · Fondos · Elevaciones
        </p>
      </div>
      <div className="mt-auto rounded-2xl bg-volt py-4 text-center font-display text-[15px] uppercase text-ink">
        Empezar episodio
      </div>
    </div>
  );
}

function EpisodeFrame({ done }: { done: boolean }) {
  const dots = done ? [true, true, true, true] : [true, true, false, false];
  return (
    <div className="flex h-full flex-col text-fog">
      <div className="relative h-[44%] shrink-0">
        <Image src="/landing/images/press-banca.jpg" alt="" fill className="object-cover" sizes="330px" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
        <div className="absolute bottom-3.5 left-5 font-display text-[28px] uppercase leading-[0.95] text-fog">
          Press banca
        </div>
        {done && (
          <div className="absolute right-3.5 top-3.5 rounded-full bg-volt px-3 py-1.5 font-display text-[11px] uppercase text-ink">
            4/4
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3.5 px-5 py-[18px]">
        <div className="flex gap-2.5">
          <span className="flex-1 rounded-[14px] bg-surface py-3.5 text-center font-display text-base uppercase text-fog">
            4 series
          </span>
          <span className="flex-1 rounded-[14px] bg-surface py-3.5 text-center font-display text-base uppercase text-fog">
            {done ? "12 reps" : "8–12 reps"}
          </span>
        </div>
        <div className="flex items-center justify-between rounded-[14px] bg-card px-[18px] py-3.5">
          <span className="text-xs uppercase tracking-[0.14em] text-dim">
            {done ? "Peso · hoy" : "Peso · última vez"}
          </span>
          <span className={"font-display text-xl " + (done ? "text-volt" : "text-fog")}>
            {done ? "45 kg" : "42,5 kg"}
          </span>
        </div>
        <div className="mt-1.5 flex justify-center gap-3.5">
          {dots.map((filled, i) => (
            <span
              key={i}
              className={
                "h-11 w-11 rounded-full " +
                (filled ? "bg-volt" + (done && i === 3 ? " shadow-[0_0_24px_rgba(200,248,46,0.5)]" : "") : "border-2 border-border2")
              }
            />
          ))}
        </div>
        <div
          className={
            "mt-auto rounded-2xl py-[18px] text-center font-display text-base uppercase " +
            (done ? "bg-fog text-ink" : "bg-volt text-ink")
          }
        >
          {done ? "Episodio completado" : "Marcar serie"}
        </div>
      </div>
    </div>
  );
}

function CheckIn() {
  return (
    <div className="flex h-full flex-col gap-[18px] px-5 py-7 text-fog">
      <p className="text-[11px] uppercase tracking-[0.2em] text-dim">Check-in · EP.12</p>
      <p className="font-display text-[34px] uppercase leading-[0.98] text-fog">¿Cómo ha ido?</p>
      <div className="flex gap-2">
        <span className="flex-1 rounded-xl bg-surface py-3.5 text-center text-[13px] text-dim">Fácil</span>
        <span className="flex-1 rounded-xl bg-volt py-3.5 text-center text-[13px] font-bold text-ink">
          Duro pero bien
        </span>
        <span className="flex-1 rounded-xl bg-surface py-3.5 text-center text-[13px] text-dim">Al límite</span>
      </div>
      <div className="rounded-2xl bg-card p-[18px]">
        <p className="text-[11px] uppercase tracking-[0.16em] text-cyan">Y ajusta tu mañana</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Subiste a 45 kg y lo moviste bien. El jueves mantenemos carga y bajamos una serie:
          recuperas mejor, progresas igual.
        </p>
      </div>
      <div className="flex items-center justify-between rounded-2xl bg-card p-[18px]">
        <span className="text-xs uppercase tracking-[0.14em] text-dim">Racha</span>
        <span className="font-display text-xl text-volt">23 días</span>
      </div>
      <div className="mt-auto rounded-2xl bg-volt py-4 text-center font-display text-base uppercase text-ink">
        Guardar
      </div>
    </div>
  );
}

function DemoAutoplay() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrapRef, { amount: 0.5, once: true });
  const index = useAutoplaySequence(4, inView);

  return (
    <section ref={wrapRef} className="relative bg-ink py-24">
      <div className="mx-auto grid min-h-[80vh] max-w-[1400px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-[1fr_auto_1fr] md:px-10">
        <div className="hidden flex-col gap-2 justify-self-end text-right md:flex">
          <p className="font-display text-[13px] uppercase tracking-[0.12em] text-volt">EP.12 — Empuje</p>
          <Clock index={index} />
          <p className="text-[13px] text-dim">Una sesión real, en directo.</p>
        </div>

        <PhoneDevice className="mx-auto h-[700px] w-[330px]">
          <Frame active={index === 0}>
            <HomeToday />
          </Frame>
          <Frame active={index === 1}>
            <EpisodeFrame done={false} />
          </Frame>
          <Frame active={index === 2}>
            <EpisodeFrame done />
          </Frame>
          <Frame active={index === 3}>
            <CheckIn />
          </Frame>
        </PhoneDevice>

        <div className="relative hidden h-[140px] w-full max-w-[340px] self-center justify-self-start md:block">
          {SUBTITLES.map((s, i) => (
            <div
              key={i}
              className={"absolute inset-0 transition-opacity duration-700 " + (index === i ? "opacity-100" : "opacity-0")}
            >
              <p className="mb-2.5 text-xs uppercase tracking-[0.2em] text-dim">{s.time}</p>
              <p className="text-[19px] leading-[1.45] text-fog">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoStatic() {
  const frames = [
    { label: "19:04", node: <HomeToday /> },
    { label: "19:06", node: <EpisodeFrame done={false} /> },
    { label: "19:38", node: <EpisodeFrame done /> },
    { label: "19:41", node: <CheckIn /> }
  ];
  return (
    <section className="bg-ink px-6 py-24 md:px-10">
      <p className="mb-10 text-center font-display text-[13px] uppercase tracking-[0.12em] text-volt">
        EP.12 — Empuje · Una sesión real
      </p>
      <div className="mx-auto grid max-w-[1100px] gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {frames.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-4">
            <PhoneDevice className="h-[560px] w-[260px]">{f.node}</PhoneDevice>
            <p className="font-display text-lg text-fog">{f.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function DemoPinned() {
  const reduceMotion = usePrefersReducedMotion();
  if (reduceMotion) return <DemoStatic />;
  return <DemoAutoplay />;
}
