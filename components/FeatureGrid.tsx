import Reveal from "@/components/Reveal";
import { features } from "@/data/landing";

export default function FeatureGrid() {
  return (
    <section id="ia" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-volt">IA, habito y comunidad</p>
          <h2 className="max-w-3xl font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
            Seis motivos para volver manana.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.04}>
              <article className="group h-full rounded-2xl border border-white/[.07] bg-card p-5 transition hover:border-volt/35">
                <MiniVisual type={feature.visual} />
                <h3 className="mt-6 font-display text-xl font-black uppercase text-fog">{feature.title}</h3>
                <p className="mt-3 leading-7 text-muted">{feature.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function MiniVisual({ type }: { type: string }) {
  if (type === "chat") {
    return (
      <div className="h-36 rounded-xl bg-[#101214] p-4">
        <div className="mb-3 h-8 w-2/3 rounded-xl bg-white/10" />
        <div className="ml-auto h-10 w-4/5 rounded-xl bg-volt/90" />
      </div>
    );
  }

  if (type === "plan") {
    return (
      <div className="h-36 rounded-xl bg-[#101214] p-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="mb-3 flex items-center gap-3 rounded-lg bg-white/[.05] p-3">
            <span className="h-6 w-6 rounded-full bg-volt/80" />
            <span className="h-2 flex-1 rounded bg-white/20" />
          </div>
        ))}
      </div>
    );
  }

  if (type === "chart") {
    return (
      <div className="flex h-36 items-end gap-2 rounded-xl bg-[#10150f] p-4">
        {[20, 28, 44, 36, 62, 74, 88].map((height, index) => (
          <span key={index} className="flex-1 rounded-t bg-volt" style={{ height: `${height}%` }} />
        ))}
      </div>
    );
  }

  if (type === "badge") {
    return (
      <div className="grid h-36 place-items-center rounded-xl bg-[#101214]">
        <div className="grid h-24 w-24 place-items-center rounded-2xl border border-volt/40 bg-volt/10 font-display text-xl font-black text-volt">
          NIV 14
        </div>
      </div>
    );
  }

  if (type === "rank") {
    return (
      <div className="h-36 rounded-xl bg-[#101214] p-4">
        {["Marco", "Alex", "Hugo", "Tu"].map((name, index) => (
          <div key={name} className="mb-2 flex items-center justify-between rounded-lg bg-white/[.05] px-3 py-2 text-xs">
            <span className="text-fog">{index + 1}. {name}</span>
            <span className="text-volt">{75 - index * 4} dias</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="h-36 rounded-xl bg-[#101214] p-4">
      <div className="h-16 rounded-xl border border-volt/20 bg-volt/10" />
      <div className="mt-5 flex items-center justify-center gap-5">
        <span className="h-5 w-5 rounded-full bg-white/20" />
        <span className="h-10 w-10 rounded-full bg-volt" />
        <span className="h-5 w-5 rounded-full bg-white/20" />
      </div>
    </div>
  );
}
