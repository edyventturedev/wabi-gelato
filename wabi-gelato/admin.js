/* =========================================================
   WABI GELATO — admin.js
   Panel de administración con Supabase Auth
   ========================================================= */

let editingId = null;

/* ---------- Vistas ---------- */
function showLogin() {
  document.getElementById('viewLogin').hidden = false;
  document.getElementById('viewAdmin').hidden = true;
}

function showAdmin() {
  document.getElementById('viewLogin').hidden = true;
  document.getElementById('viewAdmin').hidden = false;
}

/* ---------- Login ---------- */
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email    = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl    = document.getElementById('loginErr');
  const btn      = e.target.querySelector('.login-btn');

  btn.disabled = true;
  btn.textContent = 'Entrando...';
  errEl.textContent = '';

  try {
    await wabiAuth.signIn(email, password);
    /* onAuthStateChange maneja la transición */
  } catch {
    errEl.textContent = 'Correo o contraseña incorrectos';
    btn.disabled = false;
    btn.textContent = 'Entrar';
  }
});

/* ---------- Estado de auth ---------- */
wabiAuth.onChange((_event, session) => {
  if (session) {
    showAdmin();
    updateHeaderDate();
    renderGrid();
  } else {
    showLogin();
  }
});

/* ---------- Cerrar sesión ---------- */
document.getElementById('btnSignOut').addEventListener('click', async () => {
  await wabiAuth.signOut();
  showToast('Sesión cerrada');
});

/* ---------- Stats ---------- */
function updateStats(items) {
  const sold = items.filter(f => f.agotado).length;
  const hoy  = items.find(f => f.is_hoy);
  document.getElementById('statTotal').textContent   = items.length;
  document.getElementById('statAvail').textContent   = items.length - sold;
  document.getElementById('statSoldOut').textContent = sold;
  const todayEl = document.getElementById('todayFlavor');
  if (todayEl) todayEl.textContent = hoy ? hoy.name : '—';
}

/* ---------- Render ---------- */
const CAT_LABELS = { frutal: 'Frutal', cremoso: 'Cremoso', chocolate: 'Chocolate', especial: 'Especial' };
const CAT_COLORS = { frutal: '#EC9389', cremoso: '#C9A85C', chocolate: '#7C6647', especial: '#F2C744' };

async function renderGrid() {
  const grid = document.getElementById('admGrid');
  grid.innerHTML = '<div class="adm-loading">Cargando menú...</div>';

  let items;
  try {
    items = await wabiMenu.getAll();
  } catch {
    grid.innerHTML = '<p class="adm-empty">Error al conectar. Verifica tu configuración de Supabase.</p>';
    return;
  }

  updateStats(items);
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<p class="adm-empty">No hay sabores todavía. ¡Agrega el primero!</p>';
    return;
  }

  items.forEach(f => {
    const card = document.createElement('div');
    card.className = 'adm-card'
      + (f.agotado ? ' adm-card--sold' : '')
      + (f.is_hoy  ? ' adm-card--hoy'  : '');
    card.dataset.id = f.id;

    card.innerHTML = `
      <div class="adm-card__top">
        <span class="adm-card__icon">${esc(f.icon)}</span>
        <div class="adm-card__badges">
          ${f.is_hoy  ? '<span class="adm-badge adm-badge--hoy">☀ hoy</span>'     : ''}
          ${f.agotado ? '<span class="adm-badge adm-badge--sold">agotado</span>'   : ''}
        </div>
      </div>
      <div class="adm-card__cat" style="color:${CAT_COLORS[f.category] || '#C9A85C'}">${CAT_LABELS[f.category] || f.category}</div>
      <h3 class="adm-card__name">${esc(f.name)}</h3>
      <p class="adm-card__desc">${esc(f.description)}</p>
      <span class="adm-card__tag">${esc(f.tag)}</span>
      <div class="adm-card__actions">
        <button class="adm-act adm-act--hoy"  data-id="${f.id}">${f.is_hoy  ? '☀ Es hoy'   : '☀ Marcar como hoy'}</button>
        <button class="adm-act adm-act--sold" data-id="${f.id}">${f.agotado ? '✓ Reponer'  : '✕ Agotado'}</button>
        <div class="adm-card__ctrl">
          <button class="adm-ctrl adm-ctrl--edit" data-id="${f.id}" title="Editar">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2.5l3 3L6 17H3v-3L14.5 2.5z"/></svg>
          </button>
          <button class="adm-ctrl adm-ctrl--del" data-id="${f.id}" title="Eliminar">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="4,6 16,6"/><path d="M8 6V4h4v2M6 6l1 11h6l1-11"/></svg>
          </button>
        </div>
      </div>`;

    grid.appendChild(card);
  });

  grid.querySelectorAll('.adm-ctrl--edit').forEach(b => b.addEventListener('click', () => openEdit(b.dataset.id)));
  grid.querySelectorAll('.adm-ctrl--del' ).forEach(b => b.addEventListener('click', () => deleteFlavor(b.dataset.id)));
  grid.querySelectorAll('.adm-act--hoy'  ).forEach(b => b.addEventListener('click', () => toggleHoy(b.dataset.id)));
  grid.querySelectorAll('.adm-act--sold' ).forEach(b => b.addEventListener('click', () => toggleAgotado(b.dataset.id)));
}

/* ---------- Helpers ---------- */
function esc(str) {
  return String(str ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function showToast(msg, type = 'ok') {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.className = `adm-toast adm-toast--${type} adm-toast--show`;
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('adm-toast--show'), 2800);
}

/* ---------- Panel ---------- */
function openPanel() {
  document.getElementById('panel').classList.add('is-open');
  document.getElementById('overlay').classList.add('is-show');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.querySelector('#panel input, #panel textarea')?.focus(), 120);
}

function closePanel() {
  document.getElementById('panel').classList.remove('is-open');
  document.getElementById('overlay').classList.remove('is-show');
  document.body.style.overflow = '';
  editingId = null;
  document.getElementById('flavorForm').reset();
  document.getElementById('fIcon').value = '🍦';
  highlightEmoji('🍦');
}

function openAdd() {
  editingId = null;
  document.getElementById('panelTitle').textContent = 'Agregar sabor';
  document.getElementById('flavorForm').reset();
  document.getElementById('fIcon').value = '🍦';
  document.getElementById('fCat').value = 'frutal';
  highlightEmoji('🍦');
  openPanel();
}

async function openEdit(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { return; }
  const f = items.find(x => x.id === id);
  if (!f) return;

  editingId = id;
  document.getElementById('panelTitle').textContent    = 'Editar sabor';
  document.getElementById('fIcon').value               = f.icon;
  document.getElementById('fName').value               = f.name;
  document.getElementById('fDesc').value               = f.description;
  document.getElementById('fCat').value                = f.category;
  document.getElementById('fTag').value                = f.tag;
  document.getElementById('fHoy').checked              = f.is_hoy;
  document.getElementById('fAgotado').checked          = f.agotado;
  highlightEmoji(f.icon);
  openPanel();
}

/* ---------- Acciones ---------- */
async function toggleHoy(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { showToast('Error de conexión', 'warn'); return; }
  const f = items.find(x => x.id === id);
  if (!f) return;

  try {
    if (!f.is_hoy) {
      await wabiMenu.setHoy(id);
      showToast(`☀ "${f.name}" marcado como sabor de hoy`);
    } else {
      await wabiMenu.update(id, { is_hoy: false });
      showToast('Sabor de hoy removido');
    }
    renderGrid();
  } catch { showToast('Error al actualizar', 'warn'); }
}

async function toggleAgotado(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { showToast('Error de conexión', 'warn'); return; }
  const f = items.find(x => x.id === id);
  if (!f) return;

  try {
    await wabiMenu.update(id, { agotado: !f.agotado });
    showToast(f.agotado
      ? `"${f.name}" vuelve a estar disponible`
      : `"${f.name}" marcado como agotado`);
    renderGrid();
  } catch { showToast('Error al actualizar', 'warn'); }
}

async function deleteFlavor(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { return; }
  const f = items.find(x => x.id === id);
  if (!f || !confirm(`¿Eliminar "${f.name}" del menú?`)) return;

  try {
    await wabiMenu.remove(id);
    showToast(`"${f.name}" eliminado`, 'warn');
    renderGrid();
  } catch { showToast('Error al eliminar', 'warn'); }
}

/* ---------- Formulario ---------- */
document.getElementById('flavorForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const icon    = document.getElementById('fIcon').value.trim() || '🍦';
  const name    = document.getElementById('fName').value.trim();
  const desc    = document.getElementById('fDesc').value.trim();
  const cat     = document.getElementById('fCat').value;
  const tag     = document.getElementById('fTag').value.trim() || cat;
  const is_hoy  = document.getElementById('fHoy').checked;
  const agotado = document.getElementById('fAgotado').checked;

  const btn = document.querySelector('.adm-btn-save');
  btn.disabled = true;
  btn.textContent = 'Guardando...';

  try {
    if (editingId) {
      if (is_hoy) await wabiMenu.setHoy(editingId);
      await wabiMenu.update(editingId, { icon, name, description: desc, category: cat, tag, is_hoy, agotado });
      showToast(`"${name}" actualizado`);
    } else {
      const nuevo = await wabiMenu.add({ icon, name, description: desc, category: cat, tag, is_hoy: false, agotado });
      if (is_hoy) await wabiMenu.setHoy(nuevo.id);
      showToast(`"${name}" agregado al menú`);
    }
    closePanel();
    renderGrid();
  } catch (err) {
    showToast('Error al guardar: ' + err.message, 'warn');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Guardar sabor';
  }
});

/* ---------- Restablecer ---------- */
document.getElementById('btnReset')?.addEventListener('click', async () => {
  if (!confirm('¿Restablecer el menú a los 6 sabores originales? Se eliminarán todos los cambios.')) return;
  const btn = document.getElementById('btnReset');
  btn.disabled = true;
  try {
    await wabiMenu.resetToDefaults();
    showToast('Menú restablecido a valores originales');
    renderGrid();
  } catch (err) {
    showToast('Error: ' + err.message, 'warn');
  } finally {
    btn.disabled = false;
  }
});

/* ---------- Emoji picker ---------- */
const EMOJIS = ['🍦','🍧','🍨','🍫','🥛','🥭','🍓','🫐','🍑','🥥','🍋','🌺','🍵','🍇','🍬','🌿','🍪','✨','🧁','🍰'];

function highlightEmoji(val) {
  document.querySelectorAll('.adm-emoji-btn').forEach(b => {
    b.classList.toggle('is-active', b.dataset.emoji === val);
  });
}

document.getElementById('emojiRow').innerHTML = EMOJIS.map(e =>
  `<button type="button" class="adm-emoji-btn" data-emoji="${e}">${e}</button>`
).join('');

document.getElementById('emojiRow').addEventListener('click', (e) => {
  const btn = e.target.closest('.adm-emoji-btn');
  if (!btn) return;
  document.getElementById('fIcon').value = btn.dataset.emoji;
  highlightEmoji(btn.dataset.emoji);
});

document.getElementById('fIcon').addEventListener('input', (e) => highlightEmoji(e.target.value.trim()));

/* ---------- Controles del panel ---------- */
document.getElementById('btnAdd').addEventListener('click', openAdd);
document.getElementById('btnClose').addEventListener('click', closePanel);
document.getElementById('btnCancel').addEventListener('click', closePanel);
document.getElementById('overlay').addEventListener('click', closePanel);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

/* ---------- Fecha ---------- */
function updateHeaderDate() {
  const el = document.getElementById('headerDate');
  if (el) el.textContent = new Date().toLocaleDateString('es-MX', {
    weekday: 'long', day: 'numeric', month: 'long'
  });
}
