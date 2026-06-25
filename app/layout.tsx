import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://y2fit.vercel.app"),
  title: "Y2FIT | Entrena como si fuera tu serie",
  description:
    "Y2FIT guia a jovenes que dejan el deporte de equipo y empiezan el gym con rutinas visuales, progreso claro y motivacion diaria.",
  keywords: [
    "Y2FIT",
    "fitness juvenil",
    "app gimnasio",
    "rutinas gym",
    "entrenamiento jovenes",
    "fitness app"
  ],
  openGraph: {
    title: "Y2FIT | Entrena como si fuera tu serie",
    description:
      "La app que convierte el salto del equipo al gym en una experiencia guiada, visual y motivadora.",
    url: "https://y2fit.vercel.app",
    siteName: "Y2FIT",
    images: [
      {
        url: "/assets/og-y2fit.svg",
        width: 1200,
        height: 630,
        alt: "Y2FIT landing preview"
      }
    ],
    locale: "es_ES",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Y2FIT | Entrena como si fuera tu serie",
    description:
      "Rutinas visuales, progreso claro y motivacion para empezar el gym sin perder el ritmo competitivo.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
