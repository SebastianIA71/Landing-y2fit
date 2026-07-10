"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/Reveal";
import { trackEvent } from "@/lib/analytics";

type Message = { who: "y" | "u"; text: string };

const QUESTIONS: { q: string; a: string }[] = [
  {
    q: "¿Por qué hoy 8 reps y no 12?",
    a: "Ayer marcaste el check-in con fatiga alta. Hoy bajamos volumen y mantenemos carga: progresas igual y recuperas mejor."
  },
  {
    q: "¿Cuánto descanso entre series?",
    a: "Para press banca a 8 reps: 2 minutos. Te aviso yo — tú no cuentes, levanta."
  },
  {
    q: "Vengo de fútbol, ¿pierdo velocidad?",
    a: "No si la entrenamos. Tu temporada incluye un día de potencia: sprints y saltos siguen en tu plan."
  }
];

export default function CoachChat() {
  const [chat, setChat] = useState<Message[]>([
    { who: "y", text: "Soy Y, tu coach. Pregúntame lo que le preguntarías a tu entrenador." }
  ]);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  function scrollToEnd() {
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }

  function ask(index: number) {
    if (typing) return;
    const { q, a } = QUESTIONS[index];
    trackEvent("chat_demo_interaction", { question: q });
    setChat((current) => [...current, { who: "u", text: q }]);
    setTyping(true);
    scrollToEnd();
    setTimeout(() => {
      setChat((current) => [...current, { who: "y", text: a }]);
      setTyping(false);
      scrollToEnd();
    }, 1100);
  }

  return (
    <section className="mx-auto grid max-w-[1280px] items-center gap-16 px-6 py-[120px] md:grid-cols-2 md:px-8">
      <Reveal direction="left">
        <p className="mb-[18px] font-display text-[13px] uppercase tracking-[0.12em] text-volt">
          EP.03 — El coach
        </p>
        <h2 className="mb-[22px] text-balance font-display text-[clamp(36px,3.8vw,56px)] uppercase leading-none text-fog">
          Pregúntale a Y. Aquí mismo.
        </h2>
        <p className="max-w-[44ch] text-[17px] leading-[1.6] text-muted">
          Y sabe lo que hiciste ayer y lo que toca hoy. Hazle las preguntas que te daba vergüenza
          hacer en el gimnasio — esta demo responde de verdad.
        </p>
      </Reveal>

      <Reveal direction="right" className="flex min-h-[420px] flex-col gap-4 rounded-2xl border border-border bg-card p-6">
        <div className="flex items-center gap-2.5 border-b border-border pb-3.5">
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-volt font-display text-[15px] text-ink">
            Y
          </span>
          <span className="font-display text-[13px] uppercase tracking-[0.08em] text-fog">Coach Y</span>
          <span className="ml-auto h-2 w-2 rounded-full bg-volt" />
        </div>

        <div ref={scrollRef} className="flex max-h-[260px] flex-1 flex-col gap-2.5 overflow-y-auto pr-1">
          {chat.map((m, i) => (
            <div key={i} className={m.who === "u" ? "flex justify-end" : "flex"}>
              <div
                className={
                  "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed " +
                  (m.who === "u"
                    ? "rounded-tr-[4px] bg-volt font-semibold text-ink"
                    : "rounded-tl-[4px] bg-surface text-fog")
                }
              >
                {m.text}
              </div>
            </div>
          ))}
          {typing && <p className="px-2 text-[13px] text-dim">Y está escribiendo…</p>}
        </div>

        <div className="flex flex-col gap-2">
          {QUESTIONS.map((item, i) => (
            <button
              key={item.q}
              onClick={() => ask(i)}
              disabled={typing}
              className="rounded-xl border border-[#2a2e35] bg-surface px-4 py-3 text-left text-sm text-fog transition hover:border-volt hover:text-volt disabled:cursor-not-allowed disabled:opacity-60"
            >
              {item.q}
            </button>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
