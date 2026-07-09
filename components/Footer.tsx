export default function Footer() {
  return (
    <footer className="border-t border-white/[.06] px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <a href="#inicio" className="font-display text-2xl font-black text-fog">
          Y2<span className="text-volt">FIT</span>
        </a>
        <nav className="flex flex-wrap gap-5 text-sm text-muted">
          <a href="#">Privacidad</a>
          <a href="#">Terminos</a>
          <a href="#">Contacto</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </nav>
        <p className="text-sm text-dim">© 2026 Y2FIT. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
