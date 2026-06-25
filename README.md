# Y2FIT Landing

Landing comercial para Y2FIT, preparada para desplegar en Vercel con Next.js, TypeScript, Tailwind CSS y Framer Motion.

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

1. Sube el proyecto a GitHub.
2. Importa el repositorio desde Vercel.
3. Vercel detectara Next.js automaticamente.
4. Ejecuta el build con `npm run build`.

## Assets usados

Todos los assets estan en `public/assets` y son locales:

- `hero-phone.svg`: mockup movil principal.
- `progress-panel.svg`: panel visual de progreso.
- `app-screens.svg`: capturas/mockups de la app.
- `og-y2fit.svg`: imagen Open Graph.
- `noise.svg`: textura ligera de fondo.
- `favicon.svg`: favicon local.

Los mockups son placeholders vectoriales creados para la landing. Deben sustituirse por capturas reales de la app cuando existan pantallas definitivas de producto.

## Magnific

No se ha usado Magnific ni se han gastado creditos. Alternativa aplicada: crear assets SVG locales inspirados en la identidad visual aportada.

## Pendientes reales antes de publicar

- Sustituir los enlaces `#` de App Store y Google Play por URLs reales.
- Reemplazar testimonios placeholder por citas reales o dejarlos ocultos hasta validacion.
- Cambiar `metadataBase` en `app/layout.tsx` por el dominio final.
