"use client";

import { motion } from "framer-motion";
import React from "react";

// ── Animation presets ────────────────────────────────────────
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

// ── Phone sub-components ─────────────────────────────────────

function WeekRow({ activeDay = 1 }: { activeDay?: number }) {
  return (
    <div className="flex justify-between">
      {["L", "M", "X", "J", "V", "S", "D"].map((d, i) => (
        <div
          key={d}
          className={`w-[25px] h-[25px] rounded-full flex items-center justify-center text-[9px] font-bold ${
            i === activeDay ? "bg-volt text-[#0a0b0c]" : "border border-white/[.12] text-[#9aa09a]"
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
          <span className={`w-[4px] h-[4px] rounded-full ${tab === active ? "bg-volt shadow-[0_0_5px_#c8f82e]" : ""}`} />
          <span className={`text-[7px] tracking-[.09em] uppercase font-semibold ${tab === active ? "text-volt" : "text-[#4e5450]"}`}>
            {tab}
          </span>
        </div>
      ))}
    </div>
  );
}

// ── Phone frame ───────────────────────────────────────────────

function PhoneFrame({
  children, w = 296, h = 596, or = 46, ir = 36, className = ""
}: {
  children: React.ReactNode; w?: number; h?: number; or?: number; ir?: number; className?: string;
}) {
  return (
    <div
      className={`bg-[#0a0b0c] border border-[#1c1f24] p-[12px] shadow-phone ${className}`}
      style={{ width: w, borderRadius: or }}
    >
      <div className="overflow-hidden bg-[#0a0b0c] flex flex-col" style={{ height: h, borderRadius: ir }}>
        {children}
      </div>
    </div>
  );
}

// ── App screen: Home ──────────────────────────────────────────

function ScreenHome({ small = false }: { small?: boolean }) {
  const fs = small ? 0.88 : 1;
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

      <div className={`flex-1 px-[17px] flex flex-col ${small ? "gap-[8px]" : "gap-[10px]"} overflow-hidden`}>
        <div className="flex justify-between items-center">
          <span className="font-display font-black tracking-tight text-[#f3f5f0]" style={{ fontSize: Math.round(20 * fs) }}>
            y<span className="text-volt">2</span>fit
          </span>
          <div className="w-[30px] h-[30px] rounded-full border border-white/[.12] flex items-center justify-center text-[12px] text-[#9aa09a]">🔔</div>
        </div>

        <div className="py-[7px] px-[11px] bg-volt/[.06] border border-volt/[.18] rounded-[8px] flex items-center gap-[7px]">
          <span className="text-[8px] tracking-[.14em] uppercase text-volt font-bold whitespace-nowrap">Temp. 1 · Semana 1</span>
          <div className="flex-1 flex gap-[2px]">
            <span className="flex-1 h-[3px] rounded-sm bg-volt" />
            {[0, 1, 2, 3].map((i) => <span key={i} className="flex-1 h-[3px] rounded-sm bg-white/10" />)}
          </div>
        </div>

        <div>
          <div className="text-[8px] text-[#4e5450] uppercase tracking-[.1em] mb-[2px]">Martes, 23 jun</div>
          <div className="font-display font-black uppercase text-[#f3f5f0] leading-[.9]" style={{ fontSize: Math.round(26 * fs), fontVariationSettings: "'wdth' 110" }}>
            Hola, tú 👋
          </div>
        </div>

        <div className="flex gap-[7px]">
          {[
            { val: "1🔥", label: "Racha",  cls: "text-volt" },
            { val: "S1",  sub: "/14", label: "Temp.", cls: "text-[#f3f5f0]" },
            { val: "14",  sub: "s",   label: "Obj.",  cls: "text-[#f3f5f0]" }
          ].map(({ val, sub, label, cls }) => (
            <div key={label} className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[11px] p-[9px] px-[8px]">
              <div className={`font-display font-black leading-none ${cls}`} style={{ fontSize: Math.round(20 * fs) }}>
                {val}{sub && <span className="text-[11px] text-[#9aa09a]">{sub}</span>}
              </div>
              <div className="text-[7px] uppercase tracking-[.08em] text-[#9aa09a] mt-[3px]">{label}</div>
            </div>
          ))}
        </div>

        <div className="rounded-[14px] overflow-hidden border border-white/[.07]">
          <div
            className="relative flex items-center justify-center"
            style={{ height: small ? 98 : 118, background: "linear-gradient(135deg,rgba(200,248,46,.07) 0%,#080a06 100%)" }}
          >
            <div className="w-[44px] h-[44px] rounded-full bg-volt flex items-center justify-center text-[16px] text-[#0a0b0c]" style={{ boxShadow: "0 0 24px rgba(200,248,46,.4)" }}>▶</div>
            <div className="absolute top-[10px] left-[10px] bg-volt text-[#0a0b0c] font-display font-black text-[7.5px] px-[8px] py-[3px] rounded-full uppercase">Pecho</div>
            <div className="absolute top-[10px] right-[10px] font-display font-black text-[9px] text-white/40">EP.01</div>
            <div className="absolute bottom-0 left-0 right-0 px-[11px] py-[7px]" style={{ background: "linear-gradient(to top,rgba(10,11,12,.92),transparent)" }}>
              <div className="font-display font-black uppercase text-[#f3f5f0] leading-[.9]" style={{ fontSize: small ? 13 : 15, fontVariationSettings: "'wdth' 110" }}>Empuje + Core</div>
              <div className="text-[8.5px] text-[#9aa09a] mt-[2px]">45 min · 3 ejercicios</div>
            </div>
          </div>
          <div className="py-[9px] bg-volt text-center text-[#0a0b0c] font-display font-black text-[10px] uppercase tracking-[.04em]">
            Empezar episodio →
          </div>
        </div>

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
      <div className="absolute pointer-events-none" style={{ top: -50, right: -50, width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(200,248,46,.13),transparent 70%)" }} />
      <div className="h-[34px] flex-none" />
      <div className="px-[18px] flex justify-between items-center mb-auto">
        <span className="font-display font-black text-[18px] tracking-tight text-[#f3f5f0]">y<span className="text-volt">2</span>fit</span>
        <span className="text-[7.5px] uppercase text-[#6c726b] border border-white/[.12] px-[8px] py-[4px] rounded-full tracking-widest">2026</span>
      </div>
      <div className="px-[18px] pb-[20px]">
        <div className="text-[7.5px] font-semibold tracking-[.14em] uppercase text-volt mb-[8px]">Sin excusas</div>
        <div className="font-display font-black uppercase text-[#f3f5f0] leading-[.9] mb-[20px]" style={{ fontSize: 26, fontVariationSettings: "'wdth' 110" }}>
          Empieza tu<br /><span className="text-volt">temporada</span>
        </div>
        <div className="flex flex-col gap-[8px]">
          <div className="px-[13px] py-[11px] bg-white/5 border border-white/[.09] rounded-[11px] text-[11px] text-[#6c726b]">Email</div>
          <div className="px-[13px] py-[11px] bg-white/5 border border-white/[.09] rounded-[11px] text-[11px] text-[#6c726b]">Contraseña</div>
          <div className="py-[13px] rounded-[11px] bg-volt text-center text-[#0a0b0c] font-display font-black text-[11px] uppercase tracking-[.02em]">Entrar →</div>
          <div className="text-center text-[10px] text-[#f3f5f0] font-semibold mt-[4px]">Crear cuenta nueva</div>
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
        <span className="font-display font-black text-[17px] tracking-tight text-[#f3f5f0]">y<span className="text-volt">2</span>fit</span>
      </div>
      <div className="px-[16px] mb-[10px]">
        <div className="text-[7px] tracking-[.12em] uppercase text-[#6c726b] mb-[3px]">Seguimiento</div>
        <div className="font-display font-black text-[21px] uppercase text-[#f3f5f0] leading-[.9]" style={{ fontVariationSettings: "'wdth' 110" }}>Tu progreso</div>
      </div>

      <div className="px-[16px] flex gap-[8px] mb-[10px]">
        <div className="flex-[1.4] bg-volt/[.08] border border-volt/25 rounded-[13px] p-[10px]">
          <div className="font-display font-black text-[42px] leading-[.8] text-volt">3</div>
          <div className="text-[7px] uppercase tracking-[.08em] text-[#9aa09a] mt-[5px]">Episodios</div>
        </div>
        <div className="flex-1 flex flex-col gap-[7px]">
          <div className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[10px] p-[8px]">
            <div className="font-display font-black text-[16px] text-[#f3f5f0]">0</div>
            <div className="text-[6.5px] uppercase text-[#9aa09a] mt-[2px]">Temp.</div>
          </div>
          <div className="flex-1 bg-[#14171c] border border-white/[.06] rounded-[10px] p-[8px]">
            <div className="font-display font-black text-[14px]" style={{ color: "#57e0e6" }}>-0.4kg</div>
            <div className="text-[6.5px] uppercase text-[#9aa09a] mt-[2px]">Peso</div>
          </div>
        </div>
      </div>

      <div className="mx-[16px] bg-[#14171c] border border-white/[.06] rounded-[12px] p-[11px] mb-[10px]">
        <div className="text-[8.5px] text-[#9aa09a] font-semibold mb-[8px]">Evolución semanal</div>
        <div className="flex items-end gap-[8px] h-[52px]">
          {[[100, 90], [78, 72], [60, 56], [45, 48], [33, 38]].map(([v, c], i) => (
            <div key={i} className="flex-1 flex gap-[2px] items-end h-full">
              <span className="flex-1 bg-volt rounded-t-sm" style={{ height: `${v}%` }} />
              <span className="flex-1 rounded-t-sm" style={{ height: `${c}%`, background: "#57e0e6" }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-[4px]">
          {["S1", "S2", "S3", "S4", "S5"].map((s) => <span key={s} className="text-[6.5px] text-[#4e5450]">{s}</span>)}
        </div>
      </div>

      <div className="px-[16px]">
        <div className="text-[7px] uppercase tracking-[.1em] text-[#6c726b] mb-[6px]">Historial</div>
        <div className="flex flex-col gap-[4px]">
          <div className="flex justify-between px-[9px] py-[7px] rounded-[7px] border border-volt/[.18]" style={{ background: "rgba(200,248,46,.06)" }}>
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
          <span key={tab} className={`text-[6.5px] uppercase tracking-[.08em] font-semibold ${tab === "Progreso" ? "text-volt" : "text-[#4e5450]"}`}>{tab}</span>
        ))}
      </div>
    </div>
  );
}

// ── CTA button ────────────────────────────────────────────────

function DownloadBtn({ large = false }: { large?: boolean }) {
  return (
    <a
      href="#stores"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-volt font-display font-black uppercase tracking-wide text-ink transition-all hover:-translate-y-0.5 hover:bg-acid animate-voltpulse ${
        large ? "min-h-[56px] px-10 text-[16px]" : "min-h-[50px] px-8 text-[14px]"
      }`}
    >
      Descarga Y2FIT
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────

export default function Home() {
  return (
    <main className="relative isolate overflow-hidden bg-ink text-fog">
      <div className="noise" />

      {/* ══ NAV ══ */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/[.06] bg-ink/95 backdrop-blur-xl">
        <nav className="mx-auto flex h-[68px] max-w-[1200px] items-center justify-between px-5 lg:px-10">
          <a href="#inicio" className="font-display text-2xl font-black tracking-tight text-fog">
            y<span className="text-volt">2</span>fit
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {(["El problema", "Cómo funciona", "La app"] as const).map((label, i) => (
              <a
                key={label}
                href={["#problema", "#como-funciona", "#capturas"][i]}
                className="text-[14px] text-muted transition-colors hover:text-fog"
              >
                {label}
              </a>
            ))}
          </div>
          <a
            href="#stores"
            className="rounded-full bg-volt px-5 py-[10px] font-display text-[13px] font-black uppercase tracking-wide text-ink transition-colors hover:bg-acid"
          >
            Descargar
          </a>
        </nav>
      </header>

      {/* ══ HERO ══ */}
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-[68px] lg:px-10">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 860px 640px at 80% 50%,rgba(200,248,46,.065),transparent 60%)" }} />
        <div className="pointer-events-none absolute inset-0" style={{ background: "repeating-linear-gradient(135deg,rgba(200,248,46,.009) 0 1px,transparent 1px 28px)" }} />

        <div className="relative mx-auto flex w-full max-w-[1200px] items-center gap-16 flex-col lg:flex-row">

          {/* Copy */}
          <motion.div
            className="flex-1 min-w-0"
            initial="hidden"
            animate="visible"
            variants={{ ...stagger, hidden: {}, visible: {} }}
          >
            {/* Badge */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-volt/30 bg-volt/10 px-4 py-2"
            >
              <span className="h-[6px] w-[6px] rounded-full bg-volt" style={{ boxShadow: "0 0 8px #c8f82e" }} />
              <span className="text-[12px] font-semibold text-volt">Para ex deportistas de equipo</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.55, delay: 0.04 }}
              className="mb-6 font-display font-black text-fog"
              style={{ fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: 0.9, letterSpacing: "-0.025em", fontVariationSettings: "'wdth' 115" }}
            >
              Del equipo<br />al gym,<br />sin perderte.
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="mb-8 max-w-[480px] text-[17px] leading-[1.7] text-muted"
            >
              Y2FIT te da un plan estructurado, entrenos por episodios y el progreso visible que necesitas para no tirar la toalla en el primer mes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mb-8 flex flex-wrap gap-3"
            >
              <DownloadBtn large />
              <a
                href="#capturas"
                className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/[.15] px-8 text-[14px] font-semibold text-fog transition-colors hover:border-volt/50 hover:text-volt"
              >
                Ver la app ↓
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="flex items-center gap-6 flex-wrap"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {["#c8f82e", "#57e0e6", "#f3f5f0", "#9aa09a"].map((c) => (
                    <div key={c} className="h-7 w-7 rounded-full border-2 border-ink" style={{ background: c }} />
                  ))}
                </div>
                <span className="text-[13px] text-muted">+2.000 deportistas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex gap-0.5">
                  {[0,1,2,3,4].map(i => <span key={i} className="text-[13px] text-volt">★</span>)}
                </div>
                <span className="text-[13px] text-muted">4.8 en App Store</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="relative flex flex-none justify-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full animate-glow"
              style={{ width: 400, height: 400, background: "radial-gradient(circle,rgba(200,248,46,.14),transparent 65%)" }}
            />
            <div className="relative z-10 animate-floatup">
              <PhoneFrame w={296} h={596} or={46} ir={36}>
                <ScreenHome />
              </PhoneFrame>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="border-y border-white/[.06] bg-[#060708] overflow-hidden">
        <div className="flex whitespace-nowrap py-4 animate-none" style={{ animation: "none" }}>
          {[...Array(2)].map((_, rep) => (
            <div key={rep} className="flex shrink-0 items-center gap-10 px-5">
              {[
                "14 semanas de programa",
                "Episodios de entreno diarios",
                "Seguimiento de progreso",
                "Plan desde cero",
                "iOS y Android",
                "Gratis para empezar"
              ].map((item) => (
                <span key={item} className="flex items-center gap-3 text-[13px] font-medium text-muted">
                  <span className="h-1 w-1 rounded-full bg-volt flex-none" />
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ══ PROBLEMA ══ */}
      <section id="problema" className="px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mb-4 text-[13px] font-semibold uppercase tracking-[.18em] text-volt">
              El problema
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="mb-14 font-display font-black text-fog"
              style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              El gym da miedo<br />cuando llegas solo.
            </motion.h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3 mb-16">
            {[
              {
                n: "01",
                title: "Sin nadie que marque el plan",
                text: "El primer mes en el gym parece un supermercado de máquinas sin lista de la compra. No sabes por dónde empezar ni si lo que haces tiene sentido."
              },
              {
                n: "02",
                title: "Sin el grupo que te tiraba",
                text: "En el equipo volvías porque volvían los demás. Ahora la motivación es solo tuya — y eso cansa mucho más de lo que parece."
              },
              {
                n: "03",
                title: "Sin referencias de progreso",
                text: "¿Estás mejorando o solo pasando el rato? Sin datos claros, cualquier día duro se convierte en una excusa para dejarlo."
              }
            ].map(({ n, title, text }, i) => (
              <motion.div
                key={n}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/[.06] bg-card p-8"
              >
                <div
                  className="pointer-events-none absolute bottom-[-10px] right-[10px] select-none font-display font-black leading-none"
                  style={{ fontSize: 88, color: "rgba(200,248,46,.04)" }}
                >
                  {n}
                </div>
                <div className="relative">
                  <p className="mb-3 font-display font-black text-[18px] text-fog">{title}</p>
                  <p className="text-[14px] leading-[1.7] text-[#7d827b]">{text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 rounded-2xl border border-volt/20 bg-volt/[.04] p-8 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-[18px] font-semibold text-fog leading-snug max-w-lg">
              Y2FIT resuelve los tres. Con un plan que arranca el primer día y no para.
            </p>
            <DownloadBtn />
          </div>
        </div>
      </section>

      {/* ══ FEATURES ══ */}
      <section id="features" className="border-t border-white/[.05] bg-[#060708] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mb-4 text-[13px] font-semibold uppercase tracking-[.18em] text-volt">
              Por qué funciona
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="mb-14 font-display font-black text-fog"
              style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Todo lo que necesitas<br />para no dejarlo.
            </motion.h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: "📺",
                title: "Entrenos como episodios",
                text: "Cada sesión tiene un objetivo claro y un final visible. Entras sabiendo exactamente qué toca y sales sabiendo que avanzaste.",
                accent: true
              },
              {
                icon: "📈",
                title: "Progreso que se ve",
                text: "Rachas, peso levantado, medidas. El avance aparece en pantalla para que nunca dudes de si estás mejorando.",
                accent: false
              },
              {
                icon: "🗺️",
                title: "Un plan desde cero",
                text: "14 semanas diseñadas para quien viene del deporte de equipo. Sin jerga de culturismo, con lógica de pretemporada.",
                accent: false
              },
              {
                icon: "⚡",
                title: "Interfaz de deportista",
                text: "Rápida, oscura y directa. Pensada para usar entre clase y entreno, no para estar mirando una pantalla en el gym.",
                accent: false
              }
            ].map(({ icon, title, text, accent }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-white/[.06] bg-card p-8 transition-colors hover:border-volt/25"
                style={{ borderLeft: `3px solid ${accent ? "#c8f82e" : "rgba(200,248,46,.22)"}` }}
              >
                <div className="mb-5 text-3xl">{icon}</div>
                <h3 className="mb-3 font-display font-black text-[20px] text-fog">{title}</h3>
                <p className="text-[15px] leading-[1.7] text-[#7d827b]">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CÓMO FUNCIONA ══ */}
      <section id="como-funciona" className="border-t border-white/[.05] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mb-4 text-[13px] font-semibold uppercase tracking-[.18em] text-volt">
              Cómo funciona
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="mb-16 font-display font-black text-fog"
              style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Primera semana resuelta<br />en tres pasos.
            </motion.h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-start gap-0">
            {[
              {
                n: "01",
                title: "Cuéntanos tu punto de partida",
                text: "Tres preguntas. Tienes un plan adaptado a tu cuerpo y tu nivel actual. Sin formularios interminables."
              },
              {
                n: "02",
                title: "Sigue tu primer episodio",
                text: "Sabes exactamente qué hacer, cuántas series y cómo ejecutarlo. Sin improvisar en el gym."
              },
              {
                n: "03",
                title: "Mira cómo subes de nivel",
                text: "Rachas, progreso semanal y próximos entrenos. La inercia del hábito se construye sola."
              }
            ].map(({ n, title, text }, i) => (
              <React.Fragment key={n}>
                <motion.div
                  className="flex-1 lg:pr-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div
                    className="mb-5 font-display font-black leading-none"
                    style={{ fontSize: 72, color: i === 0 ? "#c8f82e" : "rgba(200,248,46,.22)" }}
                  >
                    {n}
                  </div>
                  <h3 className="mb-3 font-display font-black text-[20px] text-fog">{title}</h3>
                  <p className="text-[15px] leading-[1.7] text-[#7d827b]">{text}</p>
                </motion.div>
                {i < 2 && (
                  <div className="hidden lg:flex flex-none items-center pt-[36px] px-2 text-[24px]" style={{ color: "rgba(200,248,46,.2)" }}>
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CAPTURAS ══ */}
      <section id="capturas" className="overflow-hidden border-t border-white/[.05] bg-[#060708] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mb-4 text-[13px] font-semibold uppercase tracking-[.18em] text-volt">
              La app
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="font-display font-black text-fog"
              style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Así se ve Y2FIT.
            </motion.h2>
          </motion.div>

          <div className="flex items-end justify-center gap-6">
            {/* Left: Login */}
            <motion.div
              className="hidden flex-none lg:block"
              initial={{ opacity: 0, x: -20, rotate: -3 }}
              whileInView={{ opacity: 1, x: 0, rotate: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ translateY: 24 }}
            >
              <PhoneFrame w={230} h={468} or={36} ir={28}>
                <ScreenLogin />
              </PhoneFrame>
            </motion.div>

            {/* Center: Home */}
            <motion.div
              className="relative z-10 flex-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              style={{ filter: "drop-shadow(0 0 48px rgba(200,248,46,.12))" }}
            >
              <PhoneFrame w={270} h={548} or={44} ir={34}>
                <ScreenHome small />
              </PhoneFrame>
            </motion.div>

            {/* Right: Progress */}
            <motion.div
              className="hidden flex-none lg:block"
              initial={{ opacity: 0, x: 20, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              style={{ translateY: 24 }}
            >
              <PhoneFrame w={230} h={468} or={36} ir={28}>
                <ScreenProgress />
              </PhoneFrame>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ══ */}
      <section className="border-t border-white/[.05] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={stagger}>
            <motion.p variants={fadeUp} transition={{ duration: 0.4 }} className="mb-4 text-[13px] font-semibold uppercase tracking-[.18em] text-volt">
              Lo que dicen
            </motion.p>
            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              className="mb-14 font-display font-black text-fog"
              style={{ fontSize: "clamp(36px,4vw,58px)", lineHeight: 0.92, letterSpacing: "-0.02em" }}
            >
              Ya lo están probando.
            </motion.h2>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                quote: "Dejé el fútbol y no sabía por dónde empezar. Y2FIT me dio una rutina sin hacerme sentir perdido.",
                name: "Alex", age: "18 años", sport: "Ex futbolista", initial: "A", featured: true
              },
              {
                quote: "Parece una serie. Cada semana tenía algo nuevo que completar y eso me mantuvo dentro.",
                name: "Nora", age: "20 años", sport: "Ex jugadora de basket", initial: "N", featured: false
              },
              {
                quote: "No quería una app de culturismo. Quería algo directo, visual y con energía. Esto es Y2FIT.",
                name: "Dani", age: "17 años", sport: "Ex jugador de rugby", initial: "D", featured: false
              }
            ].map(({ quote, name, age, sport, initial, featured }, i) => (
              <motion.blockquote
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="m-0 rounded-2xl border border-white/[.06] bg-card p-8"
              >
                <div className="mb-1 flex gap-0.5">
                  {[0,1,2,3,4].map(j => <span key={j} className="text-[13px] text-volt">★</span>)}
                </div>
                <p className="my-5 text-[15px] leading-[1.72] text-[#cfd3cc]">{quote}</p>
                <footer className="flex items-center gap-3 border-t border-white/[.06] pt-5">
                  <div
                    className="flex h-9 w-9 flex-none items-center justify-center rounded-full font-display font-black text-[14px]"
                    style={{
                      background: featured ? "rgba(200,248,46,.1)" : "rgba(255,255,255,.05)",
                      color: featured ? "#c8f82e" : "#9aa09a"
                    }}
                  >
                    {initial}
                  </div>
                  <div>
                    <p className="font-semibold text-[14px] text-fog">{name}, {age}</p>
                    <p className="text-[12px] text-dim">{sport}</p>
                  </div>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA FINAL ══ */}
      <section id="stores" className="bg-volt px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[.2em]" style={{ color: "rgba(10,11,12,.4)" }}>
            iOS y Android · Gratis para empezar
          </p>
          <h2
            className="mb-5 font-display font-black text-ink"
            style={{ fontSize: "clamp(44px,5vw,76px)", lineHeight: 0.9, letterSpacing: "-0.025em" }}
          >
            Tu primera temporada<br />empieza hoy.
          </h2>
          <p className="mx-auto mb-10 max-w-[420px] text-[17px] leading-[1.65]" style={{ color: "rgba(10,11,12,.55)" }}>
            Sin suscripción para empezar. Sin excusas para no hacerlo.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex min-w-[186px] items-center gap-4 rounded-2xl bg-ink px-6 py-4 transition-colors hover:bg-[#111316]"
            >
              <span className="flex-none text-[24px] leading-none text-fog">⌘</span>
              <div className="text-left">
                <p className="text-[10px] font-medium uppercase tracking-[.08em]" style={{ color: "rgba(255,255,255,.4)" }}>Descargar en</p>
                <p className="font-display font-black text-[17px] text-fog">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex min-w-[186px] items-center gap-4 rounded-2xl bg-ink px-6 py-4 transition-colors hover:bg-[#111316]"
            >
              <span className="flex-none text-[22px] leading-none text-volt">▶</span>
              <div className="text-left">
                <p className="text-[10px] font-medium uppercase tracking-[.08em]" style={{ color: "rgba(255,255,255,.4)" }}>Disponible en</p>
                <p className="font-display font-black text-[17px] text-fog">Google Play</p>
              </div>
            </a>
          </div>

          <p className="mt-8 text-[13px]" style={{ color: "rgba(10,11,12,.4)" }}>
            14 semanas de programa · Seguimiento completo · Sin tarjeta para empezar
          </p>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[.06] px-5 py-7 lg:px-10">
        <span className="font-display font-black text-[20px] tracking-tight text-fog">
          y<span className="text-volt">2</span>fit
        </span>
        <div className="flex gap-6">
          {["Privacidad", "Términos", "Contacto"].map((link) => (
            <a key={link} href="#" className="text-[13px] text-dim transition-colors hover:text-fog">{link}</a>
          ))}
        </div>
        <span className="text-[13px] text-[#4e5450]">© 2026 Y2FIT</span>
      </footer>
    </main>
  );
}
