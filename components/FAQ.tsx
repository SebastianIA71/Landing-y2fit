import Reveal from "@/components/Reveal";
import { faqs } from "@/data/landing";

export default function FAQ() {
  return (
    <section id="faq" className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-fog md:text-6xl">
            FAQ
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-3">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03}>
              <details className="group rounded-2xl border border-white/[.07] bg-card p-5">
                <summary className="cursor-pointer list-none font-display text-lg font-black uppercase text-fog">
                  {faq.question}
                </summary>
                <p className="mt-4 leading-7 text-muted">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
