import Reveal from "@/components/Reveal";

export default function TheTwist() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-volt px-6 py-20 text-center text-ink">
      <div
        className="motion-safe:animate-breathe pointer-events-none absolute -inset-[20%]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.5) 0%, rgba(200,248,46,0) 45%), radial-gradient(circle at 75% 70%, rgba(163,214,0,0.6) 0%, rgba(200,248,46,0) 50%)"
        }}
      />
      <div className="relative">
        <Reveal>
          <p className="mb-7 text-xs uppercase tracking-[0.28em] text-ink/55">Ahora, en Y2FIT</p>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-[16ch] text-balance font-display text-[clamp(44px,6.6vw,100px)] uppercase leading-[0.96]">
            No dejaste de ser atleta. Te faltaba el plan.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 font-sans text-[clamp(18px,1.8vw,26px)] font-semibold">
            Hay una segunda vida deportiva. Esta es tu temporada 1.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
