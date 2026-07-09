import { trustMetrics } from "@/data/landing";

export default function TrustBar() {
  return (
    <section className="relative z-10 px-5 lg:px-8">
      <div className="mx-auto -mt-10 grid max-w-7xl gap-3 rounded-2xl border border-white/[.08] bg-[#111316]/90 p-4 shadow-2xl backdrop-blur md:grid-cols-5">
        {trustMetrics.map((metric) => (
          <div key={metric.label} className="border-white/[.08] px-4 py-3 md:border-r md:last:border-r-0">
            <p className="font-display text-3xl font-black text-volt">{metric.value}</p>
            <p className="mt-1 text-sm font-medium text-fog">{metric.label}</p>
            <p className="mt-1 text-[11px] uppercase tracking-[.12em] text-dim">{metric.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
