/* =========================================================
   WABI GELATO — admin.js  (i18n: ES · EN · FR)
   ========================================================= */

/* ---------- Traducciones ---------- */
const LANGS = {
  es: {
    loginTitle: 'Panel del día', loginSub: 'Accede para actualizar el menú',
    loginEmail: 'Correo electrónico', loginPassword: 'Contraseña',
    loginBtn: 'Entrar', loginBtnLoading: 'Entrando...',
    loginFooter: 'Solo para uso del equipo Wabi Gelato',
    loginErr: 'Correo o contraseña incorrectos',
    navLabel: 'Panel del día', navPreview: 'Ver sitio', navSignOut: 'Salir',
    statSabores: 'sabores', statDisp: 'disponibles', statAgot: 'agotados',
    statHoyLabel: '☀ Sabor de hoy',
    mainTitle: 'Menú de hoy',
    mainDesc: 'Edita sabores, marca agotados o agrega nuevos. Los cambios se reflejan al instante en el sitio.',
    btnAdd: 'Agregar sabor', loading: 'Cargando menú...',
    emptyGrid: 'No hay sabores todavía. ¡Agrega el primero!',
    errConnect: 'Error al conectar. Verifica tu configuración de Supabase.',
    panelAdd: 'Agregar sabor', panelEdit: 'Editar sabor',
    labelIcon: 'Ícono', labelName: 'Nombre del sabor *',
    placeholderName: 'Ej: Maracuyá tropical',
    labelDesc: 'Descripción *',
    placeholderDesc: 'Describe los ingredientes y el perfil del sabor...',
    labelCat: 'Categoría',
    catFrutal: '🍓 Frutal', catCremoso: '🥛 Cremoso', catChocolate: '🍫 Chocolate', catEspecial: '✨ Especial',
    catLabelFrutal: 'Frutal', catLabelCremoso: 'Cremoso', catLabelChocolate: 'Chocolate', catLabelEspecial: 'Especial',
    labelTag: 'Etiqueta', placeholderTag: 'Ej: Local, Clásico, Sorbete...',
    toggleHoy: 'Sabor de hoy ☀', toggleAgotado: 'Marcar como agotado',
    btnCancel: 'Cancelar', btnSave: 'Guardar sabor', btnSaving: 'Guardando...',
    btnReset: 'Restablecer menú predeterminado',
    badgeHoy: 'hoy', badgeSold: 'agotado',
    cardHoyActive: '☀ Es hoy', cardHoyInactive: '☀ Marcar como hoy',
    cardSoldActive: '✓ Reponer', cardSoldInactive: '✕ Agotado',
    toastSignOut: 'Sesión cerrada', toastHoyRemoved: 'Sabor de hoy removido',
    toastReset: 'Menú restablecido a valores originales',
    toastErrConnect: 'Error de conexión', toastErrUpdate: 'Error al actualizar', toastErrDelete: 'Error al eliminar',
    confirmReset: '¿Restablecer el menú a los 6 sabores originales? Se eliminarán todos los cambios.',
    toastHoySet:    (n) => `☀ "${n}" marcado como sabor de hoy`,
    toastAgotadoOn: (n) => `"${n}" marcado como agotado`,
    toastAgotadoOff:(n) => `"${n}" vuelve a estar disponible`,
    toastDeleted:   (n) => `"${n}" eliminado`,
    toastAdded:     (n) => `"${n}" agregado al menú`,
    toastUpdated:   (n) => `"${n}" actualizado`,
    toastErrSave:   (m) => `Error al guardar: ${m}`,
    toastErrReset:  (m) => `Error: ${m}`,
    confirmDelete:  (n) => `¿Eliminar "${n}" del menú?`,
  },
  en: {
    loginTitle: 'Daily Panel', loginSub: 'Log in to update the menu',
    loginEmail: 'Email address', loginPassword: 'Password',
    loginBtn: 'Sign in', loginBtnLoading: 'Signing in...',
    loginFooter: 'For Wabi Gelato team use only',
    loginErr: 'Incorrect email or password',
    navLabel: 'Daily Panel', navPreview: 'View site', navSignOut: 'Sign out',
    statSabores: 'flavors', statDisp: 'available', statAgot: 'sold out',
    statHoyLabel: "☀ Today's flavor",
    mainTitle: "Today's Menu",
    mainDesc: 'Edit flavors, mark sold out, or add new ones. Changes are reflected instantly on the site.',
    btnAdd: 'Add flavor', loading: 'Loading menu...',
    emptyGrid: 'No flavors yet. Add the first one!',
    errConnect: 'Connection error. Check your Supabase configuration.',
    panelAdd: 'Add flavor', panelEdit: 'Edit flavor',
    labelIcon: 'Icon', labelName: 'Flavor name *',
    placeholderName: 'E.g.: Tropical passion fruit',
    labelDesc: 'Description *',
    placeholderDesc: 'Describe the ingredients and flavor profile...',
    labelCat: 'Category',
    catFrutal: '🍓 Fruity', catCremoso: '🥛 Creamy', catChocolate: '🍫 Chocolate', catEspecial: '✨ Special',
    catLabelFrutal: 'Fruity', catLabelCremoso: 'Creamy', catLabelChocolate: 'Chocolate', catLabelEspecial: 'Special',
    labelTag: 'Tag', placeholderTag: 'E.g.: Local, Classic, Sorbet...',
    toggleHoy: "Today's flavor ☀", toggleAgotado: 'Mark as sold out',
    btnCancel: 'Cancel', btnSave: 'Save flavor', btnSaving: 'Saving...',
    btnReset: 'Reset to default menu',
    badgeHoy: 'today', badgeSold: 'sold out',
    cardHoyActive: '☀ Today', cardHoyInactive: '☀ Set as today',
    cardSoldActive: '✓ Restock', cardSoldInactive: '✕ Sold out',
    toastSignOut: 'Signed out', toastHoyRemoved: "Today's flavor removed",
    toastReset: 'Menu reset to defaults',
    toastErrConnect: 'Connection error', toastErrUpdate: 'Error updating', toastErrDelete: 'Error deleting',
    confirmReset: 'Reset the menu to the 6 original flavors? All changes will be lost.',
    toastHoySet:    (n) => `☀ "${n}" set as today's flavor`,
    toastAgotadoOn: (n) => `"${n}" marked as sold out`,
    toastAgotadoOff:(n) => `"${n}" is available again`,
    toastDeleted:   (n) => `"${n}" deleted`,
    toastAdded:     (n) => `"${n}" added to menu`,
    toastUpdated:   (n) => `"${n}" updated`,
    toastErrSave:   (m) => `Error saving: ${m}`,
    toastErrReset:  (m) => `Error: ${m}`,
    confirmDelete:  (n) => `Delete "${n}" from the menu?`,
  },
  fr: {
    loginTitle: 'Panel du jour', loginSub: 'Connectez-vous pour mettre à jour le menu',
    loginEmail: 'Adresse e-mail', loginPassword: 'Mot de passe',
    loginBtn: 'Connexion', loginBtnLoading: 'Connexion...',
    loginFooter: "Réservé à l'équipe Wabi Gelato",
    loginErr: 'E-mail ou mot de passe incorrect',
    navLabel: 'Panel du jour', navPreview: 'Voir le site', navSignOut: 'Déconnexion',
    statSabores: 'saveurs', statDisp: 'disponibles', statAgot: 'épuisées',
    statHoyLabel: '☀ Saveur du jour',
    mainTitle: 'Menu du jour',
    mainDesc: "Modifiez les saveurs, marquez les épuisées ou ajoutez-en. Les changements s'affichent instantanément.",
    btnAdd: 'Ajouter saveur', loading: 'Chargement...',
    emptyGrid: 'Aucune saveur encore. Ajoutez la première !',
    errConnect: 'Erreur de connexion. Vérifiez votre configuration Supabase.',
    panelAdd: 'Ajouter saveur', panelEdit: 'Modifier saveur',
    labelIcon: 'Icône', labelName: 'Nom de la saveur *',
    placeholderName: 'Ex : Fruit de la passion tropical',
    labelDesc: 'Description *',
    placeholderDesc: 'Décrivez les ingrédients et le profil de saveur...',
    labelCat: 'Catégorie',
    catFrutal: '🍓 Fruité', catCremoso: '🥛 Crémeux', catChocolate: '🍫 Chocolat', catEspecial: '✨ Spécial',
    catLabelFrutal: 'Fruité', catLabelCremoso: 'Crémeux', catLabelChocolate: 'Chocolat', catLabelEspecial: 'Spécial',
    labelTag: 'Étiquette', placeholderTag: 'Ex : Local, Classique, Sorbet...',
    toggleHoy: 'Saveur du jour ☀', toggleAgotado: 'Marquer comme épuisé',
    btnCancel: 'Annuler', btnSave: 'Enregistrer', btnSaving: 'Enregistrement...',
    btnReset: 'Réinitialiser le menu',
    badgeHoy: "aujourd'hui", badgeSold: 'épuisé',
    cardHoyActive: "☀ Aujourd'hui", cardHoyInactive: "☀ Définir aujourd'hui",
    cardSoldActive: '✓ Remettre', cardSoldInactive: '✕ Épuisé',
    toastSignOut: 'Déconnecté', toastHoyRemoved: 'Saveur du jour supprimée',
    toastReset: 'Menu réinitialisé',
    toastErrConnect: 'Erreur de connexion', toastErrUpdate: 'Erreur de mise à jour', toastErrDelete: 'Erreur de suppression',
    confirmReset: 'Réinitialiser le menu aux 6 saveurs originales ? Toutes les modifications seront perdues.',
    toastHoySet:    (n) => `☀ "${n}" défini comme saveur du jour`,
    toastAgotadoOn: (n) => `"${n}" marqué comme épuisé`,
    toastAgotadoOff:(n) => `"${n}" est à nouveau disponible`,
    toastDeleted:   (n) => `"${n}" supprimé`,
    toastAdded:     (n) => `"${n}" ajouté au menu`,
    toastUpdated:   (n) => `"${n}" mis à jour`,
    toastErrSave:   (m) => `Erreur d'enregistrement : ${m}`,
    toastErrReset:  (m) => `Erreur : ${m}`,
    confirmDelete:  (n) => `Supprimer "${n}" du menu ?`,
  }
};

let currentLang = localStorage.getItem('wabi-lang') || 'es';

function t(key) { return LANGS[currentLang][key] ?? LANGS.es[key] ?? key; }

function setLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  localStorage.setItem('wabi-lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.dataset.i18n);
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-value]').forEach(el => {
    const v = t(el.dataset.i18nValue);
    if (typeof v === 'string') el.textContent = v;
  });
  document.querySelectorAll('.lang-sw__btn').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
}

document.querySelectorAll('.lang-sw__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLang(btn.dataset.lang);
    if (!document.getElementById('viewAdmin').hidden) renderGrid();
  });
});

/* ---------- Estado de editing ---------- */
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
  btn.textContent = t('loginBtnLoading');
  errEl.textContent = '';

  try {
    await wabiAuth.signIn(email, password);
  } catch {
    errEl.textContent = t('loginErr');
    btn.disabled = false;
    btn.textContent = t('loginBtn');
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
  showToast(t('toastSignOut'));
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
const CAT_COLORS = { frutal: '#EC9389', cremoso: '#C9A85C', chocolate: '#7C6647', especial: '#F2C744' };

async function renderGrid() {
  const grid = document.getElementById('admGrid');
  grid.innerHTML = `<div class="adm-loading">${t('loading')}</div>`;

  let items;
  try {
    items = await wabiMenu.getAll();
  } catch {
    grid.innerHTML = `<p class="adm-empty">${t('errConnect')}</p>`;
    return;
  }

  updateStats(items);
  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<p class="adm-empty">${t('emptyGrid')}</p>`;
    return;
  }

  const CAT_LABELS = {
    frutal: t('catLabelFrutal'), cremoso: t('catLabelCremoso'),
    chocolate: t('catLabelChocolate'), especial: t('catLabelEspecial')
  };

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
          ${f.is_hoy  ? `<span class="adm-badge adm-badge--hoy">☀ ${t('badgeHoy')}</span>`  : ''}
          ${f.agotado ? `<span class="adm-badge adm-badge--sold">${t('badgeSold')}</span>`   : ''}
        </div>
      </div>
      <div class="adm-card__cat" style="color:${CAT_COLORS[f.category] || '#C9A85C'}">${CAT_LABELS[f.category] || f.category}</div>
      <h3 class="adm-card__name">${esc(f.name)}</h3>
      <p class="adm-card__desc">${esc(f.description)}</p>
      <span class="adm-card__tag">${esc(f.tag)}</span>
      <div class="adm-card__actions">
        <button class="adm-act adm-act--hoy"  data-id="${f.id}">${f.is_hoy  ? t('cardHoyActive')  : t('cardHoyInactive')}</button>
        <button class="adm-act adm-act--sold" data-id="${f.id}">${f.agotado ? t('cardSoldActive') : t('cardSoldInactive')}</button>
        <div class="adm-card__ctrl">
          <button class="adm-ctrl adm-ctrl--edit" data-id="${f.id}" title="${t('panelEdit')}">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2.5l3 3L6 17H3v-3L14.5 2.5z"/></svg>
          </button>
          <button class="adm-ctrl adm-ctrl--del" data-id="${f.id}">
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
  document.getElementById('panelTitle').textContent = t('panelAdd');
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
  document.getElementById('panelTitle').textContent    = t('panelEdit');
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
  try { items = await wabiMenu.getAll(); } catch { showToast(t('toastErrConnect'), 'warn'); return; }
  const f = items.find(x => x.id === id);
  if (!f) return;

  try {
    if (!f.is_hoy) {
      await wabiMenu.setHoy(id);
      showToast(LANGS[currentLang].toastHoySet(f.name));
    } else {
      await wabiMenu.update(id, { is_hoy: false });
      showToast(t('toastHoyRemoved'));
    }
    renderGrid();
  } catch { showToast(t('toastErrUpdate'), 'warn'); }
}

async function toggleAgotado(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { showToast(t('toastErrConnect'), 'warn'); return; }
  const f = items.find(x => x.id === id);
  if (!f) return;

  try {
    await wabiMenu.update(id, { agotado: !f.agotado });
    showToast(f.agotado
      ? LANGS[currentLang].toastAgotadoOff(f.name)
      : LANGS[currentLang].toastAgotadoOn(f.name));
    renderGrid();
  } catch { showToast(t('toastErrUpdate'), 'warn'); }
}

async function deleteFlavor(id) {
  let items;
  try { items = await wabiMenu.getAll(); } catch { return; }
  const f = items.find(x => x.id === id);
  if (!f || !confirm(LANGS[currentLang].confirmDelete(f.name))) return;

  try {
    await wabiMenu.remove(id);
    showToast(LANGS[currentLang].toastDeleted(f.name), 'warn');
    renderGrid();
  } catch { showToast(t('toastErrDelete'), 'warn'); }
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
  btn.textContent = t('btnSaving');

  try {
    if (editingId) {
      if (is_hoy) await wabiMenu.setHoy(editingId);
      await wabiMenu.update(editingId, { icon, name, description: desc, category: cat, tag, is_hoy, agotado });
      showToast(LANGS[currentLang].toastUpdated(name));
    } else {
      const nuevo = await wabiMenu.add({ icon, name, description: desc, category: cat, tag, is_hoy: false, agotado });
      if (is_hoy) await wabiMenu.setHoy(nuevo.id);
      showToast(LANGS[currentLang].toastAdded(name));
    }
    closePanel();
    renderGrid();
  } catch (err) {
    showToast(LANGS[currentLang].toastErrSave(err.message), 'warn');
  } finally {
    btn.disabled = false;
    btn.textContent = t('btnSave');
  }
});

/* ---------- Restablecer ---------- */
document.getElementById('btnReset')?.addEventListener('click', async () => {
  if (!confirm(t('confirmReset'))) return;
  const btn = document.getElementById('btnReset');
  btn.disabled = true;
  try {
    await wabiMenu.resetToDefaults();
    showToast(t('toastReset'));
    renderGrid();
  } catch (err) {
    showToast(LANGS[currentLang].toastErrReset(err.message), 'warn');
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
  if (el) el.textContent = new Date().toLocaleDateString(
    currentLang === 'fr' ? 'fr-FR' : currentLang === 'en' ? 'en-US' : 'es-MX',
    { weekday: 'long', day: 'numeric', month: 'long' }
  );
}

/* ---------- Inicializar idioma ---------- */
setLang(currentLang);
