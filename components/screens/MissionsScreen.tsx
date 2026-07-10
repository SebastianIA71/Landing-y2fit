import { IconApple, IconChart, IconHome, IconTarget } from "./icons";

const phases = [
  { code: "T1", name: "Base muscular", detail: "Semana 3 de 4 · en curso", tag: "Activa", active: true },
  { code: "T2", name: "Volumen", detail: "Carga progresiva", tag: "5 sem", active: false },
  { code: "T3", name: "Definición", detail: "Resultado visible", tag: "3 sem", active: false }
];

export default function MissionsScreen() {
  return (
    <div className="flex h-full flex-col gap-4 bg-ink px-4 pb-4 pt-9 text-fog">
      <p className="font-display text-lg uppercase text-fog">Misiones</p>

      <div className="rounded-2xl border border-volt/25 bg-card p-4">
        <p className="text-[15px] font-semibold text-fog">Cuadrado antes del verano</p>
        <p className="mb-3 mt-0.5 text-[11px] text-dim">Objetivo: 30 junio · Temporada 1 de 3</p>
        <div className="flex flex-col gap-2.5">
          {phases.map((p) => (
            <div key={p.code} className="flex items-center gap-3">
              <span
                className={
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold " +
                  (p.active ? "bg-volt/15 text-volt" : "bg-surface text-dim")
                }
              >
                {p.code}
              </span>
              <div className="flex-1">
                <p className="text-[12px] font-semibold text-fog">{p.name}</p>
                <p className="text-[10px] text-dim">{p.detail}</p>
              </div>
              <span className={"text-[10px] " + (p.active ? "text-volt" : "text-dim")}>{p.tag}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-1.5 rounded-2xl border border-dashed border-border px-4 py-4 text-center">
        <p className="text-[12px] text-dim">Otra misión a la vez</p>
        <p className="text-[10px] text-dim/70">
          Disponible en v1.5 — de momento, una misión activa para no dispersar el plan
        </p>
      </div>

      <div className="mt-auto flex justify-around border-t border-border pt-3 text-dim">
        <IconHome className="text-lg" />
        <IconTarget className="text-lg text-volt" />
        <IconChart className="text-lg" />
        <IconApple className="text-lg" />
      </div>
    </div>
  );
}
