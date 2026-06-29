/* =========================================================
   WABI GELATO — menu-data.js
   API de menú vía Supabase (compartido entre index y admin)
   ========================================================= */

let _client = null;
function sb() {
  if (!_client) _client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
  return _client;
}

/* ---------- Menú ---------- */
const wabiMenu = {

  async getAll() {
    const { data, error } = await sb()
      .from('flavors')
      .select('*')
      .order('created_at', { ascending: true });
    if (error) throw error;
    return data || [];
  },

  async add(flavor) {
    const { data, error } = await sb()
      .from('flavors')
      .insert([flavor])
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async update(id, changes) {
    const { data, error } = await sb()
      .from('flavors')
      .update(changes)
      .eq('id', id)
      .select()
      .single();
    if (error) throw error;
    return data;
  },

  async remove(id) {
    const { error } = await sb().from('flavors').delete().eq('id', id);
    if (error) throw error;
  },

  /* Marca un sabor como "el de hoy" y quita el de los demás en una sola operación */
  async setHoy(id) {
    const { error } = await sb().rpc('set_flavor_hoy', { flavor_id: id });
    if (error) throw error;
  },

  async resetToDefaults() {
    const { data: all } = await sb().from('flavors').select('id');
    if (all?.length) {
      const { error } = await sb().from('flavors').delete().in('id', all.map(f => f.id));
      if (error) throw error;
    }
    const defaults = [
      { name: 'Cacao Yucateco',     description: 'Cacao 100% natural del monte, amargo y profundo, sin azúcares añadidos. Puro.',                 category: 'especial',  icon: '🍫', tag: 'Especial del día', is_hoy: true,  agotado: false },
      { name: 'Mango con Chile',    description: 'Mango de temporada de la región con un toque sorpresivo de chile habanero dulce.',               category: 'frutal',    icon: '🥭', tag: 'Local',            is_hoy: false, agotado: false },
      { name: 'Vainilla de Pueblo', description: 'Leche pasteurizada de rancho local con vainilla de Papantla. Simpleza perfecta.',                category: 'cremoso',   icon: '🥛', tag: 'Clásico',          is_hoy: false, agotado: false },
      { name: 'Jamaica & Limón',    description: 'Sorbete fresco de flor de jamaica con ralladura de limón de pica. Refrescante.',                 category: 'frutal',    icon: '🌺', tag: 'Sorbete',          is_hoy: false, agotado: false },
      { name: 'Stracciatella',      description: 'Base cremosa italiana con hilos de chocolate oscuro recién vertido. Italiano auténtico.',        category: 'chocolate', icon: '🍦', tag: 'Mediterráneo',     is_hoy: false, agotado: false },
      { name: 'Coco & Mezcal',      description: 'Combinación atrevida: coco natural con un velo de mezcal artesanal. Para los valientes.',       category: 'especial',  icon: '🥥', tag: 'Signature',        is_hoy: false, agotado: false },
    ];
    const { error: insErr } = await sb().from('flavors').insert(defaults);
    if (insErr) throw insErr;
  }
};

/* ---------- Auth ---------- */
const wabiAuth = {

  async signIn(email, password) {
    const { data, error } = await sb().auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  },

  async signOut() {
    await sb().auth.signOut();
  },

  async getSession() {
    const { data } = await sb().auth.getSession();
    return data?.session || null;
  },

  onChange(fn) {
    return sb().auth.onAuthStateChange(fn);
  }
};
