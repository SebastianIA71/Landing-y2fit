"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/usePrefersReducedMotion";

function Copy() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
      <p className="max-w-[20ch] text-balance font-display text-[clamp(30px,4vw,58px)] uppercase leading-[1.05] text-fog">
        El compañero de tu <span className="text-volt">segunda vida deportiva.</span>
      </p>
      <p className="mt-5 max-w-[46ch] text-base leading-[1.6] text-dim">
        Entrenamiento, coach IA, nutrición, progreso, retos y tu gente. Un solo ecosistema.
      </p>
    </div>
  );
}

function MonumentalAutoplay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.5, once: true });
  const x = useMotionValue(0);

  useEffect(() => {
    if (!inView || !wordRef.current) return;
    const overflow = Math.max(0, wordRef.current.scrollWidth - window.innerWidth * 0.8);
    const controls = animate(x, -overflow, { duration: 3.2, ease: "easeInOut" });
    return () => controls.stop();
  }, [inView, x]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <motion.div
        ref={wordRef}
        style={{ x }}
        className="whitespace-nowrap pl-[10vw] font-display leading-[0.78] text-card [-webkit-text-stroke:1px_#23262c] will-change-transform"
      >
        <span style={{ fontSize: "120vh" }}>Y2FIT</span>
      </motion.div>
      <Copy />
    </section>
  );
}

function MonumentalStatic() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-ink py-24">
      <div
        className="select-none whitespace-nowrap font-display text-card [-webkit-text-stroke:1px_#23262c]"
        style={{ fontSize: "22vh", lineHeight: 0.78 }}
      >
        Y2FIT
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Copy />
      </div>
    </section>
  );
}

export default function MonumentalType() {
  const reduceMotion = usePrefersReducedMotion();
  if (reduceMotion) return <MonumentalStatic />;
  return <MonumentalAutoplay />;
}
