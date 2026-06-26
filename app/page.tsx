"use client";

import { motion } from "framer-motion";
import React from "react";

// ── Animation presets ────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

// ── Phone sub-components ─────────────────────────────────────

function WeekRow({ activeDay = 1 }: { activeDay?: number }) {
  return (
    <div className="flex justify-between">
      {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
        <div
          key={d}
          className={`w-[25px] h-[25px] rounded-full flex items-center justify-center text-[9px] font-bold ${
            i === activeDay
              ? "bg-volt text-[#0a0b0c]"
              : "border border-white/[.12] text-[#9aa09a]"
          }`}
        >
          {d}
        </div>
      ))}
    </div>
  );
}

function AppTabBar({ active = "Hoy" }: { active?: string }) {
  const tabs = ["Hoy", "Misiones", "Progreso", "Ejercicios", "Nutrición"];
  return (
    <div className="flex justify-between items-center px-[17px] pt-[9px] pb-[18px] border-t border-white/[.06] flex-none">
      {tabs.map((tab) => (
        <div key={tab} className="flex flex-col items-center gap-[3px]">
          <span
            className={`w-[4px] h-[4px] rounded-full ${
              tab === active ? "bg-volt shadow-[0_0_5px_#c8f82e]" : ""
            }`}
          />
          <span
            className={`text-[7px] tracking-[.09em] uppercase font-semibold ${
              tab === active ? "text-volt" : "text-[#4e5450]"
            }`}
          >
            {tab}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Phone frame ───────────────────────────────────────────────

function PhoneFrame({
  children,
  w = 296,
  h = 596,
  or = 46,
  ir = 36,
  className = ""
}: {
  children: React.ReactNode;
  w?: number;
  h?: number;
  or?: number;
  ir?: number;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#0a0b0c] border border-[#1c1f24] p-[12px] shadow-phone ${className}`}
      style={{ width: w, borderRadius: or }}
    >
      <div
        className="overflow-hidden bg-[#0a0b0c] flex flex-col"
        style={{ height: h, borderRadius: ir }}
      >
        {children}
      </div>
    </div>
  );
}

// ── App screen: Home ──────────────────────────────────────────

function ScreenHome({ compact = false }: { compact?: boolean }) {
  const textScale = compact ? 0.88 : 1;
  const gap      = compact ? "gap-[8px]" : "gap-[10px]";

  return (
    <>
      <div className="h-[42px] flex items-center justify-between px-5 flex-none">
        <span className="text-[12px] font-semibold text-[#f3f5f0]">9:41</span>
        <div className="flex gap-[2px] items-end" style={{ height: 11 }}>
          {[6, 8, 11].map((ht) => (
            <span key={ht} className="w-[3px] bg-[#f3f5f0] rounded-sm" style={{ height: ht }} />
          ))}
        </div>
      </div>

      <div className={`flex-1 px-[17px] flex flex-col ${gap} overflow-hidden`}>
        {/* Logo */}
        <div className="flex justify-between items-center">
          <span
            className="font-display font-black tracking-tight text-[#f3f5f0]"
            style={{ fontSize: Math.round(20 * textScale) }}
          >
            y<span className="text-volt">2</span>fit
          </span>
          <div className="w-[30px] h-[30px] rounded-full border border-white/[.12] flex items-center justify-center text-[12px] text-[#9aa09a]">
            🔔
          </div>
        </div>

        {/* Season strip */}
        <div className="py-[7px] px-[11px] bg-volt/[.06] border border-volt/[.18] rounded-[8px] flex items-center gap-[7px]">
          <span className="text-[8px] tracking-[.14em] uppercase text-volt font-bold whitespace-nowrap">
            Temp. 1 · Semana 1
          </span>
          <div className="flex-1 flex gap-[2px]">
            <span className="flex-1 h-[3px] rounded-sm bg-volt" />
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className="flex-1 h-[3px] rounded-sm bg-white/10" />
            ))}
          </div>
        </div>

        {/* Greeting */}
        <div>
          <div className="text-[8px] text-[#4e5450] uppercase tracking-[.1em] mb-[2px]">
            Martes, 23 jun
          </div>
          <div
            className="font-display font-black uppercase text-[#f3f5f0] leading-[.9]"
            style={{
              fontSize: Math.round(26 * textScale),
              fontVariationSettings: "'wdth' 125"
            }}
          >
            Hola, tú 👋
          </div>
        </div>

        {/* Stats row */}
        <div className="flex gap-[7px]">
          {[
            { val: "1🔥", label: "Racha",  cls: "text-volt" },
            { val: "S1",  sub: "/14", label: "Temp.", cls: "text-[#f3f5f0]" },
            { val: "14",  sub: "s",   label: "Obj.",  cls: "text-[#f3f5f0]" }
          ].map(({ val, sub, label, cls }) => (
            <div
              key={label}
              className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[11px] p-[9px] px-[8px]"
            >
              <div className={`font-display font-black leading-none ${cls}`} style={{ fontSize: Math.round(20 * textScale) }}>
                {val}
                {sub && <span className="text-[11px] text-[#9aa09a]">{sub}</span>}
              </div>
              <div className="text-[7px] uppercase tracking-[.08em] text-[#9aa09a] mt-[3px]">
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Episode card */}
        <div className="rounded-[14px] overflow-hidden border border-white/[.07]">
          <div
            className="relative flex items-center justify-center"
            style={{
              height: compact ? 98 : 118,
              background: "linear-gradient(135deg,rgba(200,248,46,.07) 0%,#080a06 100%)"
            }}
          >
            <div
              className="w-[44px] h-[44px] rounded-full bg-volt flex items-center justify-center text-[16px] text-[#0a0b0c]"
              style={{ boxShadow: "0 0 24px rgba(200,248,46,.4)" }}
            >
              ▶
            </div>
            <div className="absolute top-[10px] left-[10px] bg-volt text-[#0a0b0c] font-display font-black text-[7.5px] px-[8px] py-[3px] rounded-full uppercase">
              Pecho
            </div>
            <div className="absolute top-[10px] right-[10px] font-display font-black text-[9px] text-white/40">
              EP.01
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 px-[11px] py-[7px]"
              style={{ background: "linear-gradient(to top,rgba(10,11,12,.92),transparent)" }}
            >
              <div
                className="font-display font-black uppercase text-[#f3f5f0] leading-[.9]"
                style={{ fontSize: compact ? 13 : 15, fontVariationSettings: "'wdth' 125" }}
              >
                Empuje + Core
              </div>
              <div className="text-[8.5px] text-[#9aa09a] mt-[2px]">45 min · 3 ejercicios</div>
            </div>
          </div>
          <div className="py-[9px] bg-volt text-center text-[#0a0b0c] font-display font-black text-[10px] uppercase tracking-[.04em]">
            Empezar episodio →
          </div>
        </div>

        {/* Calendar */}
        <div className="bg-[#14171c] border border-white/[.06] rounded-[12px] px-[10px] py-[9px]">
          <WeekRow />
        </div>
      </div>

      <AppTabBar active="Hoy" />
    </>
  );
}

// ── App screen: Login ─────────────────────────────────────────

function ScreenLogin() {
  return (
    <div className="flex flex-col h-full relative overflow-hidden">
      <div
        className="absolute pointer-events-none"
        style={{
          top: -50, right: -50, width: 220, height: 220,
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(200,248,46,.13),transparent 70%)"
        }}
      />
      <div className="h-[34px] flex-none" />
      <div className="px-[18px] flex justify-between items-center mb-auto">
        <span className="font-display font-black text-[18px] tracking-tight text-[#f3f5f0]">
          y<span className="text-volt">2</span>fit
        </span>
        <span className="text-[7.5px] tracking-[.14em] uppercase text-[#6c726b] border border-white/[.12] px-[8px] py-[4px] rounded-full">
          Temporada 2026
        </span>
      </div>
      <div className="px-[18px] pb-[20px]">
        <div className="text-[7.5px] font-semibold tracking-[.16em] uppercase text-volt mb-[8px]">
          Tu coach · sin excusas
        </div>
        <div
          className="font-display font-black uppercase text-[#f3f5f0] leading-[.9] mb-[20px]"
          style={{ fontSize: 26, fontVariationSettings: "'wdth' 125" }}
        >
          Empieza tu<br />
          <span className="text-volt">temporada</span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="px-[13px] py-[11px] bg-white/5 border border-white/[.09] rounded-[11px] text-[11px] text-[#6c726b]">
            Email
          </div>
          <div className="px-[13px] py-[11px] bg-white/5 border border-white/[.09] rounded-[11px] text-[11px] text-[#6c726b]">
            Contraseña
          </div>
          <div className="py-[13px] rounded-[11px] bg-volt text-center text-[#0a0b0c] font-display font-black text-[11px] uppercase tracking-[.02em]">
            Entrar →
          </div>
          <div className="text-center text-[10px] text-[#f3f5f0] font-semibold mt-[4px]">
            Crear cuenta nueva
          </div>
        </div>
      </div>
    </div>
  );
}

// ── App screen: Progress ──────────────────────────────────────

function ScreenProgress() {
  return (
    <div className="flex flex-col h-full">
      <div className="h-[34px] flex-none" />
      <div className="px-[16px] mb-[8px]">
        <span className="font-display font-black text-[17px] tracking-tight text-[#f3f5f0]">
          y<span className="text-volt">2</span>fit
        </span>
      </div>
      <div className="px-[16px] mb-[10px]">
        <div className="text-[7px] tracking-[.14em] uppercase text-[#6c726b] mb-[3px]">
          Seguimiento
        </div>
        <div
          className="font-display font-black text-[21px] uppercase text-[#f3f5f0] leading-[.9]"
          style={{ fontVariationSettings: "'wdth' 125" }}
        >
          Tu progreso
        </div>
      </div>

      <div className="px-[16px] flex gap-[8px] mb-[10px]">
        <div className="flex-[1.4] bg-volt/[.08] border border-volt/25 rounded-[13px] p-[10px]">
          <div className="font-display font-black text-[42px] leading-[.8] text-volt">3</div>
          <div className="text-[7px] uppercase tracking-[.08em] text-[#9aa09a] mt-[5px]">Episodios</div>
        </div>
        <div className="flex-1 flex flex-col gap-[7px]">
          <div className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[10px] p-[8px]">
            <div className="font-display font-black text-[16px] text-[#f3f5f0]">0</div>
            <div className="text-[6.5px] uppercase tracking-[.06em] text-[#9aa09a] mt-[2px]">Temp.</div>
          </div>
          <div className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[10px] p-[8px]">
            <div className="font-display font-black text-[14px]" style={{ color: "#57e0e6" }}>-0.4kg</div>
            <div className="text-[6.5px] uppercase tracking-[.06em] text-[#9aa09a] mt-[2px]">Peso</div>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="mx-[16px] bg-[#14171c] border border-white/[.06] rounded-[12px] p-[11px] mb-[10px]">
        <div className="text-[8.5px] text-[#9aa09a] font-semibold mb-[8px]">Evolución de medidas</div>
        <div className="flex items-end gap-[8px] h-[52px]">
          {[[100, 90], [78, 72], [60, 56], [45, 48], [33, 38]].map(([v, c], i) => (
            <div key={i} className="flex-1 flex gap-[2px] items-end h-full">
              <span className="flex-1 bg-volt rounded-t-sm" style={{ height: `${v}%` }} />
              <span className="flex-1 rounded-t-sm" style={{ height: `${c}%`, background: "#57e0e6" }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-[4px]">
          {["S1", "S2", "S3", "S4", "S5"].map((s) => (
            <span key={s} className="text-[6.5px] text-[#4e5450]">{s}</span>
          ))}
        </div>
      </div>

      {/* History */}
      <div className="px-[16px]">
        <div className="text-[7px] uppercase tracking-[.1em] text-[#6c726b] mb-[6px]">Historial</div>
        <div className="flex flex-col gap-[4px]">
          <div
            className="flex justify-between px-[9px] py-[7px] rounded-[7px] border border-volt/[.18]"
            style={{ background: "rgba(200,248,46,.06)" }}
          >
            <span className="text-[9px] text-[#f3f5f0]"><span className="text-volt">●</span> 21 jun</span>
            <span className="text-[9px] font-semibold text-[#f3f5f0]">73.5 kg</span>
          </div>
          <div className="flex justify-between px-[9px] py-[7px] bg-[#14171c] border border-white/5 rounded-[7px]">
            <span className="text-[9px] text-[#6c726b]">● 14 jun</span>
            <span className="text-[9px] text-[#6c726b]">73.9 kg</span>
          </div>
        </div>
      </div>

      <div className="flex justify-around px-[11px] pt-[8px] pb-[13px] border-t border-white/[.06] flex-none mt-auto">
        {["Hoy", "Misiones", "Progreso", "Ejercicios", "Nutrición"].map((tab) => (
          <span
            key={tab}
            className={`text-[6.5px] uppercase tracking-[.08em] font-semibold ${
              tab === "Progreso" ? "text-volt" : "text-[#4e5450]"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Page-level helpers ────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-[11px] font-semibold tracking-[.2em] uppercase text-[#6c726b]">
      {children}
    </p>
  );
}

function BigHeading({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`m-0 font-display font-black uppercase text-fog leading-[.9] tracking-[-0.025em] ${className}`}
      style={{ fontSize: "clamp(38px,4.5vw,62px)", fontVariationSettings: "'wdth' 125" }}
    >
      {children}
    </h2>
  );
}

// ── Data ──────────────────────────────────────────────────────

const problems = [
  {
    num: "01",
    title: "Sin plan que siga",
    text: "Nadie marca qué toca hoy. El gym parece un supermercado de máquinas sin lista de la compra."
  },
  {
    num: "02",
    title: "Sin grupo que tire",
    text: "El vestuario era lo que hacía que volvieras. Sin él, la motivación es solo tuya — y eso cansa."
  },
  {
    num: "03",
    title: "Sin mapa de progreso",
    text: "¿Estás mejorando o solo pasando el rato? Sin referencias claras, es imposible saberlo."
  }
];

const features = [
  {
    num: "01",
    title: "Rutinas tipo episodio",
    text: "Sesiones cortas con objetivo claro y acabado visible. Sabes qué toca antes de tocar la primera máquina.",
    accent: true
  },
  {
    num: "02",
    title: "Progreso que engancha",
    text: "Rachas, niveles y mejoras visibles. La temporada se siente en marcha, no estancada.",
    accent: false
  },
  {
    num: "03",
    title: "Transición sin caos",
    text: "Del vestuario al gym con una guía que traduce fuerza, movilidad y hábitos sin tecnicismos.",
    accent: false
  },
  {
    num: "04",
    title: "Interfaz de deportista",
    text: "Oscura, rápida y directa. Pensada para usar entre clase, entreno y amigos.",
    accent: false
  }
];

const testimonials = [
  {
    quote: "Dejé el fútbol y no sabía ni por dónde empezar. Y2FIT me dio una rutina sin hacerme sentir perdido.",
    name: "Alex, 18",
    role: "Ex futbolista",
    initial: "A",
    featured: true
  },
  {
    quote: "Parece una serie. Cada semana tenía algo nuevo que completar y eso me mantuvo dentro.",
    name: "Nora, 20",
    role: "Ex jugadora de basket",
    initial: "N",
    featured: false
  },
  {
    quote: "No quería una app de culturismo. Quería algo directo, visual y con energía. Y2FIT lo es.",
    name: "Dani, 17",
    role: "Ex jugador de rugby",
    initial: "D",
    featured: false
  }
];

// ── Page ──────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-ink text-fog">
      <div className="noise" />

      {/* ══ NAV ══ */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.06] bg-ink/[.96] backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1296px] items-center justify-between px-5 lg:px-[72px]">
          <a href="#inicio" className="font-display text-[26px] font-black tracking-[-0.03em] text-fog">
            y<span className="text-volt">2</span>fit
          </a>
          <div className="hidden items-center gap-9 md:flex">
            {(["Problema", "Features", "La app"] as const).map((label, i) => (
              <a
                key={label}
                href={["#problema", "#features", "#capturas"][i]}
                className="text-[14px] tracking-[.03em] text-[#9aa09a] transition-colors hover:text-fog"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#stores"
            className="inline-flex items-center gap-2 rounded-full bg-volt px-6 py-[11px] font-display text-[13px] font-black uppercase tracking-[.02em] text-ink transition-colors hover:bg-acid"
          >
            Descargar app →
          </a>
        </nav>
      </header>

      {/* ══ HERO ══ */}
      <section
        id="inicio"
        className="relative flex min-h-[760px] items-center overflow-hidden px-5 pb-20 pt-[72px] lg:px-[72px]"
      >
        {/* BG layers */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 900px 700px at 88% 50%,rgba(200,248,46,.07),transparent 60%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "repeating-linear-gradient(135deg,rgba(200,248,46,.011) 0 1px,transparent 1px 26px)" }}
        />
        <div
          className="pointer-events-none absolute -right-[180px] -top-[180px] h-[560px] w-[560px] animate-glow rounded-full"
          style={{ background: "radial-gradient(circle,rgba(200,248,46,.07),transparent 70%)" }}
        />

        <div className="relative mx-auto flex w-full max-w-[1296px] items-center gap-14 pt-5 flex-col lg:flex-row">

          {/* Left: copy */}
          <motion.div
            className="flex-1 min-w-0"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="mb-[26px] inline-flex items-center gap-[10px]">
              <span
                className="h-[6px] w-[6px] rounded-full bg-volt"
                style={{ boxShadow: "0 0 10px #c8f82e" }}
              />
              <span className="text-[11px] font-semibold uppercase tracking-[.2em] text-volt">
                Para jóvenes que dejan el deporte de equipo
              </span>
            </div>

            <h1
              className="mb-[30px] font-display font-black uppercase text-fog leading-[.88] tracking-[-0.025em]"
              style={{ fontSize: "clamp(60px, 7vw, 106px)", fontVariationSettings: "'wdth' 125" }}
            >
              Del equipo<br />
              al gym sin<br />
              perder el <span className="text-volt">ritmo.</span>
            </h1>

            <p className="mb-[34px] max-w-[500px] text-[17px] leading-[1.68] text-[#9aa09a]">
              Y2FIT convierte el primer gym en una temporada guiada. Episodios de entreno,
              progreso visible y un coach que te conoce. Sin caos desde el primer día.
            </p>

            <div className="mb-[52px] flex flex-col gap-3 sm:flex-row">
              <a
                href="#stores"
                className="group inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-volt px-8 font-display text-[15px] font-black uppercase tracking-[.02em] text-ink shadow-neon transition-all hover:-translate-y-0.5 hover:bg-acid animate-voltpulse"
              >
                Descargar app
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="#capturas"
                className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-white/[.14] px-8 text-[15px] font-semibold text-fog transition-colors hover:border-volt/70 hover:text-volt"
              >
                Ver la app ↓
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-stretch gap-0">
              {[
                { val: "3",    label: "Pasos de onboarding",    color: "text-volt", divider: true  },
                { val: "0",    label: "Caos la primera semana", color: "text-fog",  divider: true  },
                { val: "+42%", label: "Retención objetivo",     color: "text-fog",  divider: false }
              ].map(({ val, label, color, divider }) => (
                <div
                  key={label}
                  className={divider ? "pr-8 border-r border-white/[.08] mr-8" : ""}
                >
                  <div className={`font-display font-black text-[38px] leading-none ${color}`}>{val}</div>
                  <div className="mt-[5px] text-[11px] font-semibold uppercase tracking-[.12em] text-[#6c726b]">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: phone */}
          <motion.div
            className="relative flex flex-none justify-center"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 animate-glow rounded-full"
              style={{ background: "radial-gradient(circle,rgba(200,248,46,.13),transparent 65%)" }}
            />
            <div className="relative z-10 animate-floatup">
              <PhoneFrame w={296} h={596} or={46} ir={36}>
                <ScreenHome />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PROBLEMA ══ */}
      <section id="problema" className="border-t border-white/[.05] px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <SectionLabel>El problema</SectionLabel>
          <BigHeading className="mb-14">
            Cuando acaba el equipo,<br />empieza el vacío.
          </BigHeading>

          <div className="mb-[70px] grid grid-cols-1 gap-5 md:grid-cols-3">
            {problems.map(({ num, title, text }, i) => (
              <motion.div
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-[20px] border border-white/[.06] bg-card p-8"
              >
                <div
                  className="pointer-events-none absolute bottom-[-8px] right-[14px] select-none font-display font-black leading-none"
                  style={{ fontSize: 96, color: "rgba(200,248,46,.05)" }}
                >
                  {num}
                </div>
                <div className="relative">
                  <div className="mb-3 font-display font-black text-[17px] text-fog">{title}</div>
                  <p className="m-0 text-[14px] leading-[1.65] text-[#7d827b]">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* La propuesta */}
          <div className="flex flex-col gap-20 border-t border-white/[.06] pt-14 lg:flex-row lg:items-start">
            <div className="flex-1">
              <SectionLabel>La propuesta</SectionLabel>
              <h3
                className="m-0 font-display font-black uppercase text-fog leading-[.92] tracking-[-0.02em]"
                style={{ fontSize: "clamp(26px,3vw,36px)", fontVariationSettings: "'wdth' 125" }}
              >
                Una transición guiada,<br />motivadora y visual.
              </h3>
            </div>
            <div className="flex-[1.3]">
              <p className="m-0 mb-7 text-[16px] leading-[1.72] text-[#9aa09a]">
                Y2FIT no intenta parecer una hoja de ejercicios. Ordena el cambio con episodios de
                entreno, objetivos de semana y feedback visual para que sientas avance desde el
                primer día.
              </p>
              <a
                href="#stores"
                className="inline-flex items-center gap-2 rounded-full bg-volt px-7 py-[14px] font-display text-[14px] font-black uppercase tracking-[.02em] text-ink transition-colors hover:bg-acid"
              >
                Descargar app →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" className="border-t border-white/[.05] bg-[#060708] px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <SectionLabel>Features</SectionLabel>
          <BigHeading className="mb-14">
            Todo lo que empuja<br />a volver mañana.
          </BigHeading>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {features.map(({ num, title, text, accent }, i) => (
              <motion.article
                key={num}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-[20px] border border-white/[.06] bg-card p-9 transition-colors hover:border-volt/20"
                style={{ borderLeft: `3px solid ${accent ? "#c8f82e" : "rgba(200,248,46,.25)"}` }}
              >
                <div className="mb-[14px] font-display font-black text-[12px] uppercase tracking-[.2em] text-volt">
                  {num}
                </div>
                <h3 className="m-0 mb-3 font-display font-black text-[22px] text-fog">{title}</h3>
                <p className="m-0 text-[15px] leading-[1.68] text-[#7d827b]">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPTURAS ══ */}
      <section id="capturas" className="overflow-hidden border-t border-white/[.05] px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>La app</SectionLabel>
              <BigHeading>
                Parece producto real<br />desde el primer vistazo.
              </BigHeading>
            </div>
            <p className="m-0 max-w-[260px] text-[14px] leading-[1.7] text-dim lg:text-right">
              Tres pantallas. Un flujo. La experiencia completa desde el primer día.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 pb-10 pt-5">
            {/* Phone 1: Login — rotated left */}
            <div
              className="hidden flex-none lg:block"
              style={{ transform: "rotate(-4deg) translateY(24px)" }}
            >
              <PhoneFrame w={236} h={480} or={38} ir={30}>
                <ScreenLogin />
              </PhoneFrame>
            </div>

            {/* Phone 2: Home — center featured */}
            <div
              className="relative z-10 flex-none"
              style={{ filter: "drop-shadow(0 0 40px rgba(200,248,46,.12))" }}
            >
              <PhoneFrame w={266} h={542} or={44} ir={34}>
                <ScreenHome compact />
              </PhoneFrame>
            </div>

            {/* Phone 3: Progress — rotated right */}
            <div
              className="hidden flex-none lg:block"
              style={{ transform: "rotate(4deg) translateY(24px)" }}
            >
              <PhoneFrame w={236} h={480} or={38} ir={30}>
                <ScreenProgress />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CÓMO FUNCIONA ══ */}
      <section id="como-funciona" className="border-t border-white/[.05] bg-[#060708] px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <SectionLabel>Cómo funciona</SectionLabel>
          <BigHeading className="mb-16">
            Tres pasos para empezar<br />tu temporada.
          </BigHeading>

          <div className="flex flex-col items-start lg:flex-row">
            {/* Step 1 */}
            <div className="flex-1 lg:pr-9">
              <div
                className="mb-5 font-display font-black leading-[.85]"
                style={{ fontSize: 80, color: "#c8f82e" }}
              >
                01
              </div>
              <h3 className="m-0 mb-3 font-display font-black text-[20px] text-fog">
                Aterrizas con un diagnóstico
              </h3>
              <p className="m-0 text-[15px] leading-[1.68] text-[#7d827b]">
                Unas preguntas rápidas y tienes un plan adaptado a tu punto de forma y objetivo.
              </p>
            </div>

            <div className="hidden flex-none pt-[34px] mx-2 text-[28px] lg:block" style={{ color: "rgba(200,248,46,.25)" }}>
              →
            </div>

            {/* Step 2 */}
            <div className="flex-1 lg:px-9 mt-10 lg:mt-0">
              <div
                className="mb-5 font-display font-black leading-[.85]"
                style={{ fontSize: 80, color: "rgba(200,248,46,.25)" }}
              >
                02
              </div>
              <h3 className="m-0 mb-3 font-display font-black text-[20px] text-fog">
                Sigues tu primer episodio
              </h3>
              <p className="m-0 text-[15px] leading-[1.68] text-[#7d827b]">
                Estructura clara, foco visual y sensación de capítulo completado cada vez que entrenas.
              </p>
            </div>

            <div className="hidden flex-none pt-[34px] mx-2 text-[28px] lg:block" style={{ color: "rgba(200,248,46,.25)" }}>
              →
            </div>

            {/* Step 3 */}
            <div className="flex-1 lg:pl-9 mt-10 lg:mt-0">
              <div
                className="mb-5 font-display font-black leading-[.85]"
                style={{ fontSize: 80, color: "rgba(200,248,46,.25)" }}
              >
                03
              </div>
              <h3 className="m-0 mb-3 font-display font-black text-[20px] text-fog">
                Subes nivel cada semana
              </h3>
              <p className="m-0 text-[15px] leading-[1.68] text-[#7d827b]">
                Progreso, rachas y próximos retos. La energía de la competición sin necesitar un equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ══ */}
      <section className="border-t border-white/[.05] px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px]">
          <SectionLabel>Lo que dicen</SectionLabel>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map(({ quote, name, role, initial, featured }, i) => (
              <motion.blockquote
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="m-0 rounded-[20px] border border-white/[.06] bg-card p-9"
              >
                <div
                  className="mb-[22px] font-display font-black leading-[.8]"
                  style={{ fontSize: 56, color: featured ? "#c8f82e" : "rgba(200,248,46,.3)" }}
                >
                  "
                </div>
                <p className="m-0 mb-7 text-[15px] leading-[1.72] text-[#cfd3cc]">{quote}</p>
                <footer className="flex items-center gap-3">
                  <div
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full font-display font-black text-[14px]"
                    style={{
                      background: featured ? "rgba(200,248,46,.1)" : "rgba(200,248,46,.06)",
                      border: `1px solid ${featured ? "rgba(200,248,46,.2)" : "rgba(200,248,46,.12)"}`,
                      color: featured ? "#c8f82e" : "#9aa09a"
                    }}
                  >
                    {initial}
                  </div>
                  <div>
                    <div className="font-display font-black text-[14px] text-fog">{name}</div>
                    <div className="text-[11px] text-dim">{role}</div>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA / STORES ══ */}
      <section id="stores" className="bg-volt px-5 py-24 lg:px-[72px]">
        <div className="mx-auto max-w-[1296px] text-center">
          <div
            className="mb-5 text-[11px] font-semibold uppercase tracking-[.2em]"
            style={{ color: "rgba(10,11,12,.45)" }}
          >
            Disponible próximamente
          </div>
          <h2
            className="m-0 mb-[18px] font-display font-black uppercase text-ink leading-[.88] tracking-[-0.03em]"
            style={{ fontSize: "clamp(44px,5.5vw,76px)", fontVariationSettings: "'wdth' 125" }}
          >
            Tu próxima temporada<br />empieza en una descarga.
          </h2>
          <p
            className="mx-auto mb-11 max-w-[480px] text-[17px] leading-[1.65]"
            style={{ color: "rgba(10,11,12,.55)" }}
          >
            Disponible en iOS y Android. Gratis para empezar. Tu primera temporada, lista en 3 pasos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex min-w-[196px] items-center gap-[14px] rounded-[14px] bg-ink px-7 py-[17px] transition-colors hover:bg-[#111316]"
            >
              <span className="flex-none text-[26px] leading-none text-fog">⌘</span>
              <div className="text-left">
                <div
                  className="mb-[2px] text-[10px] font-semibold uppercase tracking-[.08em]"
                  style={{ color: "rgba(255,255,255,.5)" }}
                >
                  Descargar en el
                </div>
                <div className="font-display font-black text-[18px] text-fog">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex min-w-[196px] items-center gap-[14px] rounded-[14px] bg-ink px-7 py-[17px] transition-colors hover:bg-[#111316]"
            >
              <span className="flex-none text-[24px] leading-none text-volt">▶</span>
              <div className="text-left">
                <div
                  className="mb-[2px] text-[10px] font-semibold uppercase tracking-[.08em]"
                  style={{ color: "rgba(255,255,255,.5)" }}
                >
                  Disponible en
                </div>
                <div className="font-display font-black text-[18px] text-fog">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="flex items-center justify-between border-t border-white/[.06] px-5 py-[30px] lg:px-[72px]">
        <span className="font-display font-black text-[20px] tracking-[-0.03em] text-fog">
          y<span className="text-volt">2</span>fit
        </span>
        <div className="flex gap-7">
          {["Privacidad", "Términos", "Contacto"].map((link) => (
            <a key={link} href="#" className="text-[13px] text-dim transition-colors hover:text-fog">
              {link}
            </a>
          ))}
        </div>
        <span className="text-[13px] text-[#4e5450]">© 2026 Y2FIT</span>
      </footer>
    </main>
  );
}
