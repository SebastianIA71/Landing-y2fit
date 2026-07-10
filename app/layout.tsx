import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import "./globals.css";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://y2fit.vercel.app"),
  title: "Y2FIT | Tu carrera no termino. Cambio de escenario.",
  description:
    "La app que te entrena cuando dejas el deporte de equipo y empiezas en el gimnasio. Plan por temporadas, coach IA y cada sesion guiada ejercicio a ejercicio.",
  keywords: [
    "Y2FIT",
    "fitness juvenil",
    "app gimnasio",
    "rutinas gym",
    "entrenamiento jovenes"
  ],
  openGraph: {
    title: "Y2FIT | Tu carrera no termino. Cambio de escenario.",
    description:
      "Temporada 1, coach IA y cada sesion guiada ejercicio a ejercicio. Gratis en iOS y Android.",
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
    title: "Y2FIT | Tu carrera no termino. Cambio de escenario.",
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
  themeColor: "#0a0b0c",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${archivoBlack.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
