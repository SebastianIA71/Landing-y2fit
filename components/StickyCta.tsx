"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function StickyCta() {
  const [pastHero, setPastHero] = useState(false);
  const [finaleVisible, setFinaleVisible] = useState(false);

  useEffect(() => {
    const heroEnd = document.getElementById("hero-end");
    const finale = document.getElementById("finale");
    const observers: IntersectionObserver[] = [];

    if (heroEnd) {
      const io = new IntersectionObserver(
        ([entry]) => setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0),
        { threshold: 0 }
      );
      io.observe(heroEnd);
      observers.push(io);
    }

    if (finale) {
      const io = new IntersectionObserver(([entry]) => setFinaleVisible(entry.isIntersecting), {
        threshold: 0.1
      });
      io.observe(finale);
      observers.push(io);
    }

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const visible = pastHero && !finaleVisible;

  return (
    <a
      href="#finale"
      className={cn(
        "fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 whitespace-nowrap rounded-full bg-volt px-7 py-4 font-display text-[13px] uppercase tracking-[0.04em] text-ink shadow-[0_12px_40px_rgba(200,248,46,0.25)] transition-opacity duration-300",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      Empieza tu temporada 1
    </a>
  );
}
