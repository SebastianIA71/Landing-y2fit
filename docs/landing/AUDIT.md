# Auditoria de landing Y2FIT

## Estado del repo

- Framework: Next.js 14 con App Router, React 18 y TypeScript.
- Estilos: Tailwind CSS con tokens propios en `tailwind.config.ts`.
- Animacion: Framer Motion disponible y reutilizada en `components/Reveal.tsx`.
- Estructura inicial: landing monolitica en `app/page.tsx`, estilos globales en `app/globals.css`, assets locales en `public/assets`.
- Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.
- Deploy: compatible con Vercel; `next.config.mjs` solo configura formatos de imagen.

## Assets disponibles

- `public/assets/hero-phone.svg`, `progress-panel.svg`, `app-screens.svg`, `og-y2fit.svg`, `noise.svg`.
- Asset aportado por el usuario copiado a `public/landing/images/athlete-hero.jpg`.
- Los mockups de producto siguen siendo placeholders generados con componentes/CSS.

## Problemas detectados

- La landing anterior mezclaba todo el contenido en un unico componente grande.
- Habia texto con caracteres rotos por codificacion en `app/page.tsx`.
- Enlaces de App Store, Google Play, legal y contacto eran placeholders.
- Testimonios y metricas eran placeholders sin una fuente de verdad editable.
- El producto aparecia visualmente, pero faltaba una estructura CRO clara con prueba social, FAQ y comparativa.

## Que se conserva

- Next.js, TypeScript, Tailwind y Framer Motion.
- Identidad oscura, verde lima, mockups de telefono y concepto de temporadas/episodios.
- Deploy simple en Vercel.

## Que se reestructura

- `app/page.tsx` pasa a ser composicion de secciones.
- Copy, metricas, testimonios, FAQ y listas editables viven en `data/landing.ts`.
- Se crean componentes separados en `components/`.
- Se anade documentacion especifica en `docs/landing/`.

## Riesgos pendientes

- Sustituir datos placeholder por metricas reales antes de publicar.
- Sustituir testimonios placeholder por citas validadas.
- Cambiar enlaces `#` por URLs reales de stores, privacidad, terminos y contacto.
- Confirmar dominio final en `metadataBase`.
