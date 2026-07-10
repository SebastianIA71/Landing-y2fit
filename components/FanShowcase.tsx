"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import { PhoneFrame } from "@/components/PhoneFrame";
import { useMediaQuery } from "@/lib/useMediaQuery";
import ProgressScreen from "@/components/screens/ProgressScreen";
import MissionsScreen from "@/components/screens/MissionsScreen";
import HomeScreen from "@/components/screens/HomeScreen";
import YAssistantScreen from "@/components/screens/YAssistantScreen";
import EpisodeScreen from "@/components/screens/EpisodeScreen";

const CARDS = [
  { label: "Progreso", node: <ProgressScreen /> },
  { label: "Misiones", node: <MissionsScreen /> },
  { label: "Tu episodio", node: <HomeScreen /> },
  { label: "Coach Y", node: <YAssistantScreen /> },
  { label: "Sesión", node: <EpisodeScreen /> }
];

const MOBILE_INDEXES = [0, 2, 3];

export default function FanShowcase() {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const [active, setActive] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const indexes = isMobile ? MOBILE_INDEXES : [0, 1, 2, 3, 4];
  const center = (indexes.length - 1) / 2;

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <section className="overflow-hidden bg-ink px-6 pb-[150px] pt-[130px] md:px-8">
      <div className="mx-auto mb-[70px] max-w-[1280px] text-center">
        <Reveal>
          <p className="mb-[18px] font-display text-[13px] uppercase tracking-[0.12em] text-volt">
            Todo el ecosistema
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-[18ch] text-balance font-display text-[clamp(36px,3.8vw,56px)] uppercase leading-none text-fog">
            Una app. Toda tu segunda vida deportiva.
          </h2>
        </Reveal>
      </div>

      <div
        ref={containerRef}
        className="mx-auto flex h-[560px] max-w-[1280px] items-end justify-center"
      >
        {indexes.map((cardIdx, i) => {
          const c = i - center;
          const isActive = active === i;
          let rotate = c * 7;
          let x = 0;
          let y = Math.abs(c) * 26;
          let scale = 1;
          const z = isActive ? 10 : active === null && cardIdx === indexes[Math.round(center)] ? 3 : 1;

          if (active !== null) {
            if (i === active) {
              rotate = 0;
              y = -28;
              scale = 1.07;
            } else {
              const away = i < active ? -1 : 1;
              rotate += away * 4;
              x = away * 18;
            }
          }

          return (
            <motion.div
              key={cardIdx}
              className="relative -mx-[34px] h-[520px] w-[250px] cursor-pointer overflow-hidden rounded-[26px] border border-border shadow-phone"
              style={{ transformOrigin: "bottom center", zIndex: z }}
              animate={{ rotate, x, y, scale }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              onMouseEnter={() => !isMobile && setActive(i)}
              onMouseLeave={() => !isMobile && setActive(null)}
              onClick={(e) => {
                e.stopPropagation();
                setActive((current) => (current === i ? null : i));
              }}
            >
              <PhoneFrame className="h-full w-full rounded-none">{CARDS[cardIdx].node}</PhoneFrame>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent px-4 pb-3.5 pt-10 text-center font-display text-xs uppercase tracking-[0.1em] text-fog">
                {CARDS[cardIdx].label}
              </div>
            </motion.div>
          );
        })}
      </div>

      <Reveal className="mt-[60px] text-center">
        <a
          href="#finale"
          className="inline-block rounded-full bg-volt px-[34px] py-[18px] font-display text-[15px] uppercase tracking-[0.04em] text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(200,248,46,0.3)]"
        >
          Empieza tu temporada 1
        </a>
      </Reveal>
    </section>
  );
}
