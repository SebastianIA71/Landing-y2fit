import { cn } from "@/lib/utils";

export function PhoneShell({
  children,
  className,
  compact = false
}: {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-[2.2rem] border border-white/10 bg-[#090a0b] p-2 shadow-phone",
        compact ? "w-[230px]" : "w-[292px]",
        className
      )}
    >
      <div className="absolute left-1/2 top-4 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
      <div
        className={cn(
          "overflow-hidden rounded-[1.75rem] border border-white/[.06] bg-[#0e1013]",
          compact ? "h-[470px]" : "h-[590px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function HeroPhone() {
  return (
    <PhoneShell>
      <div className="flex h-full flex-col gap-4 p-5 pt-12">
        <div className="flex items-center justify-between text-[11px] text-muted">
          <span>9:41</span>
          <span>100%</span>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-[.2em] text-muted">Temporada 1</p>
          <h3 className="mt-2 font-display text-4xl font-black uppercase leading-none text-fog">
            Renacer
          </h3>
        </div>
        <div className="rounded-2xl border border-volt/30 bg-volt/[.08] p-4">
          <div className="mb-3 flex items-center justify-between text-xs text-muted">
            <span>Semana 2 - Dia 2</span>
            <span className="text-volt">63%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[63%] rounded-full bg-volt" />
          </div>
        </div>
        <div className="rounded-2xl bg-surface p-4">
          <p className="text-[10px] uppercase tracking-[.18em] text-muted">Entrenamiento de hoy</p>
          <div className="mt-3 rounded-xl bg-black/35 p-4">
            <p className="font-display text-xl font-black uppercase text-fog">Fuerza</p>
            <p className="mt-1 text-xs text-muted">Espalda + biceps - 75 min</p>
          </div>
          <button className="mt-4 w-full rounded-xl bg-fog py-3 text-xs font-black uppercase text-ink">
            Comenzar
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[
            ["12", "Racha"],
            ["14", "Nivel"],
            ["3/5", "Retos"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-card p-3">
              <p className="font-display text-lg font-black text-volt">{value}</p>
              <p className="text-[10px] text-muted">{label}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto rounded-2xl border border-white/[.06] bg-card p-4">
          <p className="text-[10px] uppercase tracking-[.18em] text-muted">Proxima mision</p>
          <p className="mt-2 text-sm font-semibold text-fog">Dominadas lastradas</p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-2/3 rounded-full bg-cyan" />
          </div>
        </div>
      </div>
    </PhoneShell>
  );
}

export function ProductPhone({
  title,
  eyebrow,
  stat,
  copy,
  variant = "chart"
}: {
  title: string;
  eyebrow: string;
  stat: string;
  copy: string;
  variant?: "chart" | "chat" | "nutrition";
}) {
  return (
    <PhoneShell compact className="mx-auto">
      <div className="flex h-full flex-col gap-4 p-4 pt-10">
        <p className="text-[10px] uppercase tracking-[.18em] text-muted">{eyebrow}</p>
        <h3 className="font-display text-2xl font-black uppercase text-fog">{title}</h3>
        <div className="rounded-2xl border border-white/[.06] bg-card p-4">
          <p className="font-display text-4xl font-black text-volt">{stat}</p>
          <p className="mt-2 text-xs leading-relaxed text-muted">{copy}</p>
        </div>
        {variant === "chat" ? <ChatVisual /> : variant === "nutrition" ? <NutritionVisual /> : <ChartVisual />}
        <div className="mt-auto grid grid-cols-4 gap-2 border-t border-white/[.06] pt-3">
          {["Hoy", "Prog.", "IA", "Perfil"].map((item) => (
            <span key={item} className="text-center text-[9px] text-muted">
              {item}
            </span>
          ))}
        </div>
      </div>
    </PhoneShell>
  );
}

function ChartVisual() {
  return (
    <div className="rounded-2xl bg-[#10150f] p-4">
      <div className="flex h-28 items-end gap-3">
        {[22, 34, 30, 52, 48, 70, 82].map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t bg-volt"
            style={{ height: `${height}%`, opacity: 0.45 + index * 0.07 }}
          />
        ))}
      </div>
    </div>
  );
}

function ChatVisual() {
  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-card p-4">
      <p className="max-w-[80%] rounded-2xl bg-white/10 p-3 text-xs text-fog">
        He terminado cansado. Ajustas manana?
      </p>
      <p className="ml-auto max-w-[84%] rounded-2xl bg-volt p-3 text-xs font-semibold text-ink">
        Bajo volumen y mantengo intensidad. Recuperamos sin parar.
      </p>
    </div>
  );
}

function NutritionVisual() {
  return (
    <div className="rounded-2xl bg-card p-4">
      {[
        ["Proteinas", "152 g", "72%"],
        ["Carbohidratos", "235 g", "58%"],
        ["Grasas", "68 g", "46%"]
      ].map(([label, value, width]) => (
        <div key={label} className="mb-4 last:mb-0">
          <div className="mb-2 flex justify-between text-xs">
            <span className="text-muted">{label}</span>
            <span className="text-fog">{value}</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10">
            <div className="h-full rounded-full bg-volt" style={{ width }} />
          </div>
        </div>
      ))}
    </div>
  );
}
