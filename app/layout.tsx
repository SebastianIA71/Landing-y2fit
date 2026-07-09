import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://y2fit.vercel.app"),
  title: "Y2FIT | Tu segunda vida deportiva",
  description:
    "Y2FIT es el entrenador inteligente para jovenes que dejan el deporte de equipo y empiezan una nueva etapa en el gimnasio.",
  keywords: [
    "Y2FIT",
    "fitness juvenil",
    "app gimnasio",
    "rutinas gym",
    "entrenamiento jovenes"
  ],
  openGraph: {
    title: "Y2FIT | Tu segunda vida deportiva",
    description:
      "Plan, progreso, IA, retos y comunidad para convertir el gym en tu nueva competicion.",
    url: "https://y2fit.vercel.app",
    siteName: "Y2FIT",
    images: [
      {
        url: "/assets/og-y2fit.svg",
        width: 1200,
        height: 630,
        alt: "Y2FIT"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Y2FIT | Tu segunda vida deportiva",
    description: "Entrenador inteligente, temporadas y episodios para empezar el gym con plan.",
    images: ["/assets/og-y2fit.svg"]
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export const viewport: Viewport = {
  themeColor: "#070809",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
