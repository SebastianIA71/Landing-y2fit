import Image from "next/image";
import { IconCheck, IconChevronRight, IconVolume, IconX } from "./icons";

const sets = [
  { detail: "Serie 1 — 10 reps · 40 kg", done: true },
  { detail: "Serie 2 — 10 reps · 40 kg", done: true },
  { detail: "Serie 3 — pendiente", done: false },
  { detail: "Serie 4 — pendiente", done: false }
];

export default function EpisodeScreen() {
  return (
    <div className="flex h-full flex-col bg-ink text-fog">
      <div className="relative h-[176px] shrink-0">
        <Image src="/landing/images/press-banca.jpg" alt="" fill className="object-cover" sizes="340px" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-ink/60" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between px-4 pt-9">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-black/35 text-fog/85">
            <IconX className="text-sm" />
          </span>
          <div className="text-center">
            <p className="text-[12px] font-medium text-fog/90">Empuje + core</p>
            <p className="text-[10px] text-fog/45">Ejercicio 2 de 6</p>
          </div>
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-black/35 text-fog/85">
            <IconVolume className="text-sm" />
          </span>
        </div>
        <div className="absolute inset-x-4 top-[88px] flex gap-1.5">
          {[true, true, false, false, false, false].map((done, i) => (
            <span key={i} className={"h-[3px] flex-1 rounded-full " + (done ? "bg-volt" : "bg-white/15")} />
          ))}
        </div>
        <div className="absolute inset-x-4 bottom-3">
          <span className="mb-1.5 inline-block rounded-full bg-volt px-2.5 py-1 text-[10px] font-bold text-ink">
            Pecho · Tríceps
          </span>
          <p className="font-display text-xl leading-none text-fog">Press banca</p>
          <p className="mt-1 text-[11px] text-fog/55">4 series objetivo · 10 reps · 40 kg</p>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 py-3.5">
        <div className="rounded-2xl bg-card px-4 py-1">
          {sets.map((s, i) => (
            <div key={i} className={"flex items-center gap-3 border-t border-border py-2.5 first:border-t-0"}>
              <span
                className={
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] " +
                  (s.done ? "border-volt bg-volt text-ink" : "border-dim/50 text-dim")
                }
              >
                {s.done ? <IconCheck className="text-[11px]" /> : i + 1}
              </span>
              <span className={"flex-1 text-[13px] " + (s.done ? "text-fog" : "text-dim")}>{s.detail}</span>
              {s.done && <IconCheck className="text-[14px] text-volt" />}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between rounded-2xl bg-card px-4 py-3">
          <div>
            <p className="text-[11px] text-dim">Descanso antes de la serie 3</p>
            <p className="font-display text-xl text-volt">1:32</p>
          </div>
        </div>

        <div className="flex items-center justify-between rounded-xl bg-card px-4 py-3">
          <span className="text-[12px] text-dim">Ver técnica de este ejercicio</span>
          <IconChevronRight className="text-dim" />
        </div>

        <button className="mt-auto flex items-center justify-center gap-2 rounded-xl bg-volt py-3.5 text-[14px] font-bold uppercase text-ink">
          <IconCheck />
          Marcar serie completada
        </button>
      </div>
    </div>
  );
}
