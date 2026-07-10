import { IconApple, IconChart, IconHome, IconPlus, IconTarget } from "./icons";

export default function ProgressScreen() {
  return (
    <div className="flex h-full flex-col gap-3.5 bg-ink px-4 pb-4 pt-9 text-fog">
      <div>
        <p className="font-display text-lg uppercase text-fog">Tu progreso</p>
        <p className="mt-0.5 text-[11px] text-dim">Temporada 1 · Base muscular · Semana 3</p>
      </div>

      <div className="flex gap-2.5">
        <div className="flex-1 rounded-2xl bg-card p-3">
          <p className="font-display text-lg text-fog">8</p>
          <p className="text-[10px] text-dim">Episodios completados</p>
        </div>
        <div className="flex-1 rounded-2xl bg-card p-3">
          <p className="font-display text-lg text-fog">0</p>
          <p className="text-[10px] text-dim">Temporadas superadas</p>
        </div>
      </div>

      <div className="rounded-2xl bg-card p-4">
        <div className="mb-3 flex items-center justify-between text-[11px] text-dim">
          <span>Peso y cintura · últimas 6 semanas</span>
        </div>
        <div className="mb-2 flex gap-3 text-[10px] text-dim">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-volt" /> Peso
          </span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Cintura
          </span>
        </div>
        <svg viewBox="0 0 280 90" className="h-[70px] w-full">
          <polyline points="0,55 50,52 100,50 150,46 200,42 250,38" fill="none" stroke="#c8f82e" strokeWidth="2.5" />
          <polyline points="0,30 50,32 100,38 150,42 200,48 250,55" fill="none" stroke="#57e0e6" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="rounded-xl border border-volt/20 bg-volt/[.06] p-3.5">
        <p className="text-[12px] leading-relaxed text-fog/90">
          Tu peso subió 0.8 kg pero tu cintura bajó 1.2 cm — eso es músculo, no grasa.
        </p>
      </div>

      <p className="text-[10px] uppercase tracking-[0.1em] text-dim">Historial de medidas</p>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between rounded-xl bg-card px-3.5 py-2.5 text-[12px]">
          <span className="text-dim">Esta semana</span>
          <span className="text-fog">68.4 kg · 79 cm</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-card px-3.5 py-2.5 text-[12px]">
          <span className="text-dim">Semana pasada</span>
          <span className="text-fog">67.6 kg · 80.2 cm</span>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 rounded-xl bg-volt py-3 text-[13px] font-bold uppercase text-ink">
        <IconPlus />
        Añadir medidas
      </button>

      <div className="mt-auto flex justify-around border-t border-border pt-3 text-dim">
        <IconHome className="text-lg" />
        <IconTarget className="text-lg" />
        <IconChart className="text-lg text-volt" />
        <IconApple className="text-lg" />
      </div>
    </div>
  );
}
