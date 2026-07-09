create extension if not exists pgcrypto;
create extension if not exists citext;

create table if not exists public.waitlist_users (
  id uuid primary key default gen_random_uuid(),
  email citext not null unique,
  name text,
  sport_origin text,
  goal text,
  source text not null default 'landing',
  user_agent text,
  created_at timestamptz not null default now()
);

alter table public.waitlist_users enable row level security;

-- La landing inserta desde una API route usando SUPABASE_SERVICE_ROLE_KEY.
-- No hace falta policy publica de insert mientras uses esa clave solo en servidor.

create index if not exists waitlist_users_created_at_idx
  on public.waitlist_users (created_at desc);

create index if not exists waitlist_users_goal_idx
  on public.waitlist_users (goal);
