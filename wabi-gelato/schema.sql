-- ============================================================
-- WABI GELATO — Supabase Schema
-- Pega esto en: Supabase → SQL Editor → Run
-- ============================================================

-- Tabla de sabores
create table public.flavors (
  id          uuid        primary key default gen_random_uuid(),
  name        text        not null,
  description text        not null,
  category    text        not null check (category in ('frutal','cremoso','chocolate','especial')),
  icon        text        not null default '🍦',
  tag         text        not null default '',
  is_hoy      boolean     not null default false,
  agotado     boolean     not null default false,
  created_at  timestamptz not null default now()
);

-- Seguridad a nivel de fila (RLS)
alter table public.flavors enable row level security;

-- Cualquier visitante puede LEER el menú
create policy "lectura_publica"
  on public.flavors for select
  using (true);

-- Solo empleados autenticados pueden ESCRIBIR
create policy "escritura_autenticada"
  on public.flavors for insert
  to authenticated with check (true);

create policy "actualizacion_autenticada"
  on public.flavors for update
  to authenticated using (true);

create policy "eliminacion_autenticada"
  on public.flavors for delete
  to authenticated using (true);

-- Función para marcar un solo sabor como "el de hoy" en una sola consulta
create or replace function public.set_flavor_hoy(flavor_id uuid)
returns void
language sql
security definer
as $$
  update public.flavors set is_hoy = (id = flavor_id);
$$;

-- Sabores por defecto
insert into public.flavors (name, description, category, icon, tag, is_hoy) values
  ('Cacao Yucateco',     'Cacao 100% natural del monte, amargo y profundo, sin azúcares añadidos. Puro.',                  'especial',  '🍫', 'Especial del día', true),
  ('Mango con Chile',    'Mango de temporada de la región con un toque sorpresivo de chile habanero dulce.',                'frutal',    '🥭', 'Local',            false),
  ('Vainilla de Pueblo', 'Leche pasteurizada de rancho local con vainilla de Papantla. Simpleza perfecta.',                'cremoso',   '🥛', 'Clásico',          false),
  ('Jamaica & Limón',    'Sorbete fresco de flor de jamaica con ralladura de limón de pica. Refrescante.',                  'frutal',    '🌺', 'Sorbete',          false),
  ('Stracciatella',      'Base cremosa italiana con hilos de chocolate oscuro recién vertido. Italiano auténtico.',         'chocolate', '🍦', 'Mediterráneo',     false),
  ('Coco & Mezcal',      'Combinación atrevida: coco natural con un velo de mezcal artesanal. Para los valientes.',        'especial',  '🥥', 'Signature',        false);
