"use client";

import { useState } from "react";
import { navItems } from "@/data/landing";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[.07] bg-ink/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="font-display text-2xl font-black tracking-tight text-fog">
          Y2<span className="text-volt">FIT</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-fog">
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="#descarga" className="rounded-full bg-volt px-5 py-2.5 text-sm font-black text-ink transition hover:bg-acid">
            Empieza gratis
          </a>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-fog md:hidden"
            aria-label="Abrir menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className={cn("block h-0.5 w-5 bg-current transition", open && "translate-y-1 rotate-45")} />
            <span className={cn("absolute block h-0.5 w-5 translate-y-1.5 bg-current transition", open && "translate-y-1 -rotate-45")} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/[.07] bg-ink px-5 py-4 md:hidden">
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-lg bg-white/[.04] px-4 py-3 text-sm text-fog" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
