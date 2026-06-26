import type { Metadata, Viewport } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["wdth"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://y2fit.vercel.app"),
  title: "Y2FIT — Entrena como si fuera tu temporada",
  description:
    "Y2FIT guía a jóvenes que dejan el deporte de equipo y empiezan el gym con rutinas por episodios, progreso claro y motivación diaria.",
  keywords: ["Y2FIT", "fitness juvenil", "app gimnasio", "rutinas gym", "entrenamiento jovenes"],
  openGraph: {
    title: "Y2FIT — Entrena como si fuera tu temporada",
    description:
      "La app que convierte el salto del equipo al gym en una experiencia guiada, visual y motivadora.",
    url: "https://y2fit.vercel.app",
    siteName: "Y2FIT",
    images: [{ url: "/assets/og-y2fit.svg", width: 1200, height: 630, alt: "Y2FIT" }],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Y2FIT — Entrena como si fuera tu temporada",
    description: "Rutinas por episodios, progreso claro y motivación para empezar el gym.",
    images: ["/assets/og-y2fit.svg"]
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" }
};

export const viewport: Viewport = {
  themeColor: "#070809",
  colorScheme: "dark"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
