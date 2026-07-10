export default function YAssistantScreen() {
  return (
    <div className="flex h-full flex-col bg-ink text-fog">
      <div className="border-b border-white/[.06] px-5 pb-4 pt-9 text-center">
        <div className="mb-2 flex items-center justify-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-volt font-display text-base text-ink">
            Y
          </span>
          <span className="font-display text-lg uppercase text-fog">Tu coach</span>
        </div>
        <div className="mb-3 flex items-center justify-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-volt shadow-[0_0_8px_#c8f82e]" />
          <span className="text-[10px] text-muted">Activo ahora · responde al instante</span>
        </div>
        <div className="flex flex-wrap justify-center gap-1.5">
          {["Temp. 1 · Sem 1", "Descanso activo", "EP.01 completado"].map((p) => (
            <span key={p} className="rounded-full border border-border bg-card px-2.5 py-1 text-[9.5px] text-dim">
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 overflow-hidden px-4 py-4">
        <div className="flex gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt font-display text-[11px] text-ink">
            Y
          </span>
          <div className="max-w-[80%] rounded-[4px_16px_16px_16px] bg-card px-3.5 py-2.5">
            <p className="text-[12.5px] leading-relaxed text-fog/90">Buenos días. Hoy es tu día de descanso activo</p>
          </div>
        </div>
        <div className="flex gap-2 pl-8">
          <div className="max-w-[86%] rounded-[4px_16px_16px_16px] bg-card px-3.5 py-2.5">
            <p className="text-[12.5px] leading-relaxed text-fog/90">
              Ayer registraste tu primer episodio. Para recuperar bien: camina 15–20 min y estira el pecho 3x30 seg por lado.
            </p>
          </div>
        </div>
        <div className="flex gap-2 pl-8">
          <div className="max-w-[91%] rounded-2xl border border-volt/25 bg-volt/[.06] px-4 py-3">
            <p className="mb-1.5 text-[9.5px] font-bold uppercase tracking-[0.1em] text-volt">Sugerencia de Y</p>
            <p className="mb-3 text-[12.5px] leading-relaxed text-fog/90">
              ¿Preparo el EP.02 para mañana a las 7:00? Llevas bien el ritmo.
            </p>
            <div className="flex gap-2">
              <button className="flex-1 rounded-[10px] bg-volt py-2 text-[12px] font-bold text-ink">Sí, preparar</button>
              <button className="flex-1 rounded-[10px] border border-white/15 py-2 text-[12px] text-muted">Cambiar hora</button>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-[65%] rounded-[16px_4px_16px_16px] bg-surface px-3.5 py-2.5">
            <p className="text-[12.5px] text-fog">Sí, prepáralo</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[.06] px-4 pb-7 pt-2.5">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          <span className="rounded-full border border-volt/25 bg-volt/[.06] px-3 py-1.5 text-[11px] text-volt">
            ¿Cómo mejorar mi recuperación?
          </span>
          <span className="rounded-full border border-white/10 bg-card px-3 py-1.5 text-[11px] text-muted">Ver EP.02</span>
        </div>
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/[.09] bg-card px-4 py-3">
          <span className="text-sm">🎙️</span>
          <span className="flex-1 text-[13px] text-dim/70">Pregunta algo a Y...</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-volt text-base font-black text-ink">
            ↑
          </span>
        </div>
      </div>
    </div>
  );
}
