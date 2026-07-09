# Landing Y2FIT

Landing independiente de Y2FIT construida con Next.js, TypeScript, Tailwind CSS y Framer Motion.

## Instalacion

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy en Vercel

1. Sube el repositorio a GitHub.
2. Importa el proyecto en Vercel.
3. Vercel detecta Next.js automaticamente.
4. Usa `npm run build` como comando de build.

## Donde cambiar copy y datos

- Copy estructural, metricas, features, testimonios, FAQ y comparativa: `data/landing.ts`.
- Metadata SEO/OpenGraph: `app/layout.tsx`.
- Orden de secciones: `app/page.tsx`.

## Donde cambiar metricas

Edita `trustMetrics` en `data/landing.ts`. Todas estan marcadas como placeholder hasta confirmar datos reales.

## Donde cambiar imagenes

- Imagen hero: `public/landing/images/athlete-hero.jpg`, referenciada en `components/Hero.tsx`.
- OpenGraph: `public/assets/og-y2fit.svg`, referenciada en `app/layout.tsx`.
- Mockups: actualmente se generan con componentes en `components/PhoneMockups.tsx`.

## Activar o desactivar secciones

Edita `app/page.tsx` y comenta o elimina el componente de la seccion correspondiente. Las secciones actuales son:

- `Hero`
- `TrustBar`
- `StorySection`
- `ProductShowcase`
- `FeatureGrid`
- `ScrollDemo`
- `Testimonials`
- `Comparison`
- `MidCTA`
- `FAQ`
- `FinalCTA`
- `Footer`

## Pendientes antes de publicar

- Cambiar enlaces `#` por URLs reales.
- Validar metricas y testimonios.
- Sustituir placeholders de stores y QR.
- Confirmar dominio final de metadata.
