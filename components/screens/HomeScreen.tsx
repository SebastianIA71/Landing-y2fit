import Image from "next/image";
import { IconApple, IconChart, IconHome, IconPlay, IconTarget } from "./icons";

const days = [
  { label: "L", state: "done" },
  { label: "M", state: "done" },
  { label: "X", state: "today" },
  { label: "J", state: "future" },
  { label: "V", state: "future" }
] as const;

export default function HomeScreen() {
  return (
    <div className="flex h-full flex-col gap-3 bg-ink px-4 pb-4 pt-9 text-fog">
      <p className="text-[10px] uppercase tracking-[0.2em] text-dim">Hoy · Miércoles</p>
      <div>
        <p className="text-[11px] text-dim">Hola, Marcos</p>
        <p className="font-display text-lg uppercase leading-none text-fog">Cuadrado antes del verano</p>
        <p className="mt-1 text-[11px] text-dim">Objetivo: 30 junio · 7 semanas</p>
      </div>

      <div className="flex gap-2">
        {days.map((d) => (
          <span
            key={d.label}
            className={
              "flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold " +
              (d.state === "done"
                ? "bg-volt text-ink"
                : d.state === "today"
                  ? "border border-volt text-volt"
                  : "bg-surface text-dim")
            }
          >
            {d.label}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-card px-4 py-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-dim">Racha</p>
          <p className="mt-0.5 font-display text-xl text-fog">22 días</p>
        </div>
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-surface">
          <div className="h-full w-[78%] rounded-full bg-volt" />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl bg-card">
        <div className="relative h-[84px]">
          <Image src="/landing/images/gym-pullup.jpg" alt="" fill className="object-cover opacity-60" sizes="340px" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
          <div className="absolute left-3 top-3 rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold text-ink">
            Episodio 12
          </div>
        </div>
        <div className="p-3.5">
          <p className="text-sm font-semibold text-fog">Empuje · 45 min</p>
          <p className="mt-0.5 text-[11px] text-dim">Press banca · Militar · Fondos · Elevaciones</p>
          <button className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-volt py-3 text-[13px] font-bold uppercase text-ink">
            <IconPlay className="text-[13px]" />
            Empezar episodio
          </button>
        </div>
      </div>

      <div className="mt-auto flex justify-around border-t border-border pt-3 text-dim">
        <IconHome className="text-lg text-volt" />
        <IconTarget className="text-lg" />
        <IconChart className="text-lg" />
        <IconApple className="text-lg" />
      </div>
    </div>
  );
}
