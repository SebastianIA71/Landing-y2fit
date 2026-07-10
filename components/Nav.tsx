export default function Nav() {
  return (
    <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8">
      <span className="shrink-0 font-display text-base tracking-[0.06em] text-fog sm:text-lg">Y2FIT</span>
      <a
        href="#finale"
        className="shrink-0 whitespace-nowrap rounded-full bg-volt px-4 py-2.5 font-display text-[11px] uppercase tracking-[0.05em] text-ink transition hover:bg-fog sm:px-5 sm:py-3 sm:text-xs"
      >
        <span className="sm:hidden">Empieza</span>
        <span className="hidden sm:inline">Empieza tu temporada 1</span>
      </a>
    </div>
  );
}
