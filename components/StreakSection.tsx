"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

export default function StreakSection() {
  const ref = useRef<HTMLElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduceMotion = usePrefersReducedMotion();
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    if (reduceMotion) {
      if (numRef.current) numRef.current.textContent = "23";
      return;
    }
    const controls = animate(0, 23, {
      duration: 1.4,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => {
        if (numRef.current) numRef.current.textContent = String(Math.round(v));
      }
    });
    return () => controls.stop();
  }, [inView, reduceMotion]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-volt px-6 py-20 text-center text-ink"
    >
      <div
        className="motion-safe:animate-breathe pointer-events-none absolute -inset-[20%]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.5) 0%, rgba(200,248,46,0) 45%), radial-gradient(circle at 25% 75%, rgba(163,214,0,0.6) 0%, rgba(200,248,46,0) 50%)"
        }}
      />
      <div className="relative">
        <p className="mb-2.5 text-[13px] uppercase tracking-[0.28em] text-ink/55">Tu racha</p>
        <p className="font-display text-[clamp(120px,22vw,340px)] leading-[0.9] tracking-[-0.02em]">
          DÍA <span ref={numRef}>0</span>
        </p>
        <p className="mt-6 font-sans text-[clamp(18px,1.8vw,26px)] font-semibold">
          La racha es el nuevo marcador.
        </p>
      </div>
    </section>
  );
}
