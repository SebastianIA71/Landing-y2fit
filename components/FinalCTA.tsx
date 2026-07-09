import Reveal from "@/components/Reveal";
import { HeroPhone } from "@/components/PhoneMockups";
import WaitlistForm from "@/components/WaitlistForm";

export function MidCTA() {
  return (
    <section className="px-5 py-16 lg:px-8">
      <Reveal>
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl border border-volt/20 bg-volt/[.08] p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-volt">Tu proxima etapa</p>
            <h2 className="mt-3 font-display text-4xl font-black uppercase text-fog">Descubre tu temporada.</h2>
          </div>
          <a href="#descarga" className="rounded-full bg-volt px-7 py-4 text-sm font-black uppercase text-ink">
            Empieza gratis
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default function FinalCTA() {
  return (
    <section id="descarga" className="overflow-hidden border-t border-white/[.06] bg-volt px-5 py-24 text-ink lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.65fr] lg:items-center">
        <Reveal>
          <p className="mb-4 text-sm font-black uppercase tracking-[.2em] text-ink/55">Acceso anticipado · iOS y Android</p>
          <h2 className="font-display text-5xl font-black uppercase leading-none md:text-7xl">
            Entra en la waitlist antes del lanzamiento.
          </h2>
          <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-ink/70">
            Dejanos tu email y te avisamos cuando abramos la beta. Buscamos gente que viene del deporte, del gym o de ese punto raro en medio.
          </p>
          <WaitlistForm />
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="grid h-28 w-28 place-items-center rounded-xl border-4 border-ink bg-fog text-center text-[10px] font-black uppercase leading-tight">
              QR<br />placeholder
            </div>
            <StoreButton label="App Store" />
            <StoreButton label="Google Play" />
          </div>
        </Reveal>
        <Reveal className="hidden justify-center lg:flex">
          <div className="scale-90">
            <HeroPhone />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StoreButton({ label }: { label: string }) {
  return (
    <a href="#" className="rounded-2xl bg-ink px-5 py-3 text-fog">
      <p className="text-[10px] uppercase tracking-[.12em] text-white/45">Disponible en</p>
      <p className="font-display text-lg font-black">{label}</p>
    </a>
  );
}
