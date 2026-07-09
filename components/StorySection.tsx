import Reveal from "@/components/Reveal";
import { storySteps } from "@/data/landing";

export default function StorySection() {
  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="max-w-4xl font-display text-5xl font-black uppercase leading-none text-fog md:text-7xl">
            No dejaste el deporte. <span className="text-volt">Solo cambiaste de competicion.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {storySteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.06}>
              <article className="min-h-56 rounded-2xl border border-white/[.07] bg-card p-6">
                <p className="font-display text-5xl font-black text-volt/30">{step.number}</p>
                <h3 className="mt-8 font-display text-2xl font-black uppercase text-fog">{step.title}</h3>
                <p className="mt-3 text-muted">{step.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
