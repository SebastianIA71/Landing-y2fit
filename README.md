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

## Waitlist con Supabase

La landing incluye un formulario de waitlist en el CTA final. El formulario envia datos a `POST /api/waitlist`, y esa API route inserta registros en Supabase sin exponer la service role key en el navegador.

1. Crea un proyecto en Supabase.
2. Ejecuta el SQL de `docs/supabase-waitlist.sql` en el SQL Editor de Supabase.
3. Copia `.env.example` a `.env.local`.
4. Rellena:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

En Vercel, anade las mismas variables en Project Settings > Environment Variables. `SUPABASE_SERVICE_ROLE_KEY` debe quedarse siempre solo en servidor.

Campos guardados en `public.waitlist_users`:

- `email`
- `name`
- `sport_origin`
- `goal`
- `source`
- `user_agent`
- `created_at`

Para probar el endpoint localmente:

```bash
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"test@y2fit.app\",\"name\":\"Test\",\"sportOrigin\":\"futbol\",\"goal\":\"empezar-gym\"}"
```

## Diseno: "Segunda Temporada"

La landing recrea el prototipo de handoff "Y2FIT Landing — Segunda Temporada v2". Las pantallas de
la app (home, misiones, progreso, episodio, coach IA) estan recreadas como componentes React en
`components/screens/`, no como capturas o iframes, para mantener un unico set de componentes
reutilizado en el hero, el plan, la demo pinneada y el abanico de ecosistema.

Mecanicas de motion (ver el handoff `MOTION-SPEC.md` para la especificacion original):

- Reveals/slides: `components/Reveal.tsx` (prop `direction`).
- Scrub pinned de la demo de sesion: `components/DemoPinned.tsx` (Framer Motion `useScroll`/`useTransform`).
- Tipo monumental Y2FIT: `components/MonumentalType.tsx`.
- Fondos vivos (breathe) y grano: `tailwind.config.ts` + `components/GrainOverlay.tsx`.
- Marquee cinetico: `components/Marquee.tsx`.

Todas las mecanicas dependientes de scroll (`DemoPinned`, `MonumentalType`, `StreakSection`) usan
`lib/usePrefersReducedMotion.ts` (no el hook de framer-motion) para evitar mismatches de hidratacion
entre servidor y cliente, y renderizan una alternativa estatica bajo `prefers-reduced-motion: reduce`.

## Assets usados

Todos los assets estan en `public/landing/images` y `public/assets` y son locales:

- `hero-vestuario-bn.jpg`, `historia-alvaro.jpg`, `historia-marta.jpg`, `historia-iker.jpg`,
  `press-banca.jpg`, `gym-pullup.jpg`: fotografia del handoff (`ai/`, `app/assets/exercises/`,
  `screens/img/`).
- `og-y2fit.svg`: imagen Open Graph.
- `noise.svg`, `favicon.svg`: sin usar por la landing actual (quedan por si se reutilizan).

## Magnific

No se ha usado Magnific ni se han gastado creditos. Se reutilizo la fotografia incluida en el
paquete de handoff.

## Pendientes reales antes de publicar

- Sustituir los enlaces `#` de App Store y Google Play por URLs reales.
- Reemplazar testimonios placeholder (Alvaro/Marta/Iker) por citas reales o dejarlos ocultos hasta validacion.
- Cambiar `metadataBase` en `app/layout.tsx` por el dominio final.
- Configurar las variables de Supabase en Vercel antes de activar la waitlist real.
- Conectar el chat demo de "Pregúntale a Y" (`components/CoachChat.tsx`) a la IA real en produccion.
