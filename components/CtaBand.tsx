export default function CtaBand({ text }: { text?: string }) {
  return (
    <div className="bg-ink px-6 py-16 text-center md:px-8">
      {text && <p className="mb-6 text-lg text-muted">{text}</p>}
      <a
        href="#finale"
        className="inline-block rounded-full bg-volt px-[34px] py-[18px] font-display text-[15px] uppercase tracking-[0.04em] text-ink transition hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(200,248,46,0.3)]"
      >
        Empieza tu temporada 1
      </a>
    </div>
  );
}
