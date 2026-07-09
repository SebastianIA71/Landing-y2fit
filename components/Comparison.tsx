import Reveal from "@/components/Reveal";
import { comparison } from "@/data/landing";

export default function Comparison() {
  return (
    <section className="border-y border-white/[.06] bg-[#050606] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
            Antes vs despues
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <List title="Antes" items={comparison.before} muted />
          <List title="Despues con Y2FIT" items={comparison.after} />
        </div>
      </div>
    </section>
  );
}

function List({ title, items, muted = false }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <Reveal>
      <article className="rounded-2xl border border-white/[.07] bg-card p-6">
        <h3 className={muted ? "font-display text-3xl font-black uppercase text-muted" : "font-display text-3xl font-black uppercase text-volt"}>
          {title}
        </h3>
        <ul className="mt-6 grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 rounded-xl bg-white/[.04] px-4 py-3 text-fog">
              <span className={muted ? "h-2 w-2 rounded-full bg-muted" : "h-2 w-2 rounded-full bg-volt"} />
              {item}
            </li>
          ))}
        </ul>
      </article>
    </Reveal>
  );
}
