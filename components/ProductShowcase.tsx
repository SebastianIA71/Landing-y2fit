import Reveal from "@/components/Reveal";
import { ProductPhone } from "@/components/PhoneMockups";
import { productScreens } from "@/data/landing";

export default function ProductShowcase() {
  return (
    <section id="producto" className="border-y border-white/[.06] bg-[#050606] px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
          <Reveal>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-volt">Producto</p>
            <h2 className="font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
              Todo lo que necesitas para tu mejor version.
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Y2FIT combina ciencia, tecnologia e inteligencia artificial para que entrenar deje de ser una obligacion y se convierta en tu estilo de vida.
            </p>
            <a href="#descarga" className="mt-8 inline-flex rounded-full bg-volt px-7 py-4 text-sm font-black uppercase text-ink">
              Descubre tu temporada
            </a>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {productScreens.map((screen, index) => (
              <Reveal key={screen.title} delay={index * 0.06}>
                <ProductPhone
                  {...screen}
                  variant={index === 1 ? "chat" : index === 2 ? "nutrition" : "chart"}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
