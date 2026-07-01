/* =========================================================
   WABI GELATO — script.js
   ========================================================= */

/* ---- Translations ---- */
const LANGS = {
  es: {
    navNosotros: 'Nosotros',
    navMenu: 'Menú del día',
    navIngredientes: 'Ingredientes',
    navVisitanos: 'Visítanos',
    navCta: 'Síguenos',
    heroAccent: 'con alma',
    heroSub: 'Hecho como en Italia, nacido en Yucatán.',
    heroDesc: 'Ingredientes locales de temporada, leche pasteurizada de pueblo y el proceso artesanal italiano que respeta cada sabor. Cada día, una historia diferente.',
    heroBtn: 'Ver menú de hoy',
    heroLink: 'Nuestra historia',
    heroBadgeSabor: 'Sabor del día',
    heroBadgeIngr: 'Ingrediente',
    heroBadgeIngrName: 'Leche de pueblo',
    mq1: 'Gelatería Tropical', mq2: 'Ingredientes locales', mq3: 'Proceso italiano',
    mq4: 'Cacao natural', mq5: 'Leche de pueblo', mq6: 'Hecho hoy',
    storyTag: 'La filosofía',
    storyCardTitle: 'Wabi-sabi: la belleza de lo imperfecto',
    storyCardText: 'Como en el concepto japonés, encontramos belleza en lo natural, lo artesanal y lo que cambia cada día. No hay dos gelatos iguales, y eso lo hace especial.',
    storyPill: 'Receta nueva cada mañana',
    storyWhoTag: 'Quiénes somos',
    storyTitle: 'Una historia que <em>sabe</em> diferente',
    storyP1: 'Wabi Gelato nació en el corazón de Valladolid con una convicción simple: el mejor gelato no se hace con atajos. Usamos técnica italiana auténtica y los ingredientes más honestos de la región.',
    storyP2: 'Desde cacao totalmente amargo del monte hasta leche fresca pasteurizada de ranchos locales, cada sabor cuenta el territorio donde fue hecho.',
    storyP3: 'El espacio fue pensado para que cada visita sea cálida, íntima y memorable — como una tarde familiar en un rincón del Mediterráneo, pero con alma yucateca.',
    menuTag: 'Sabores',
    menuTitle: 'Menú de <em>hoy</em>',
    menuNote: 'El menú cambia todos los días según lo mejor de la temporada.',
    filterAll: 'Todos', filterFrutal: 'Frutal', filterCremoso: 'Cremoso',
    filterChocolate: 'Chocolate', filterEspecial: 'Especial',
    menuEmpty: 'Vuelve pronto — estamos preparando los sabores de hoy.',
    badgeHoy: 'hoy', badgeAgotado: 'agotado',
    ingrTag: 'Lo que usamos',
    ingrTitle: 'Ingredientes que <em>cuentan</em>',
    ingr1Name: 'Leche de rancho', ingr1Origin: 'Valladolid · Local',
    ingr1Desc: 'Pasteurizada en pequeños ranchos de la región. Sin conservadores, con sabor real.',
    ingr2Name: 'Cacao amargo', ingr2Origin: 'Yucatán · 100% natural',
    ingr2Desc: 'Cacao totalmente puro, sin mezclas ni aditivos. El chocolate como debe ser.',
    ingr3Name: 'Fruta de temporada', ingr3Origin: 'Mercado local · Fresco',
    ingr3Desc: 'Lo que el día tenga mejor. El menú cambia porque la naturaleza cambia.',
    ingr4Name: 'Proceso italiano', ingr4Origin: 'Tradición · Artesanal',
    ingr4Desc: 'Técnica auténtica que respeta los tiempos y temperaturas del gelato verdadero.',
    locTitle: 'Ven a <em>vernos</em> hacer el gelato',
    locHours: 'Martes a Domingo<br>12:00 pm — 9:00 pm',
    locBtn: 'Cómo llegar',
    footerBrand: 'wabi gelato · gelatería tropical vallisoletana',
    footerCopy: '© 2025 Wabi Gelato. Hecho con amor.',
    ariaOpen: 'Abrir menú', ariaClose: 'Cerrar menú', ariaLang: 'Cambiar idioma',
  },
  en: {
    navNosotros: 'About',
    navMenu: "Today's Menu",
    navIngredientes: 'Ingredients',
    navVisitanos: 'Visit Us',
    navCta: 'Follow Us',
    heroAccent: 'with soul',
    heroSub: 'Made like in Italy, born in Yucatán.',
    heroDesc: 'Seasonal local ingredients, fresh ranch-pasteurized milk and the authentic Italian artisan process that honors every flavor. Each day, a different story.',
    heroBtn: "See today's menu",
    heroLink: 'Our story',
    heroBadgeSabor: "Today's flavor",
    heroBadgeIngr: 'Ingredient',
    heroBadgeIngrName: 'Ranch milk',
    mq1: 'Tropical Gelateria', mq2: 'Local ingredients', mq3: 'Italian process',
    mq4: 'Natural cacao', mq5: 'Ranch milk', mq6: 'Made today',
    storyTag: 'The philosophy',
    storyCardTitle: 'Wabi-sabi: the beauty of imperfection',
    storyCardText: 'As in the Japanese concept, we find beauty in the natural, the handcrafted, and what changes each day. No two gelatos are alike, and that makes it special.',
    storyPill: 'New recipe every morning',
    storyWhoTag: 'Who we are',
    storyTitle: 'A story that <em>tastes</em> different',
    storyP1: 'Wabi Gelato was born in the heart of Valladolid with a simple conviction: the best gelato is not made with shortcuts. We use authentic Italian technique and the most honest ingredients from the region.',
    storyP2: 'From fully bitter cacao from the hills to fresh pasteurized milk from local ranches, each flavor tells the story of the territory where it was made.',
    storyP3: 'The space was designed so that every visit feels warm, intimate, and memorable — like a family afternoon in a corner of the Mediterranean, but with a Yucatecan soul.',
    menuTag: 'Flavors',
    menuTitle: "Today's <em>Menu</em>",
    menuNote: "The menu changes every day based on what's best in season.",
    filterAll: 'All', filterFrutal: 'Fruity', filterCremoso: 'Creamy',
    filterChocolate: 'Chocolate', filterEspecial: 'Special',
    menuEmpty: "Come back soon — we're preparing today's flavors.",
    badgeHoy: 'today', badgeAgotado: 'sold out',
    ingrTag: 'What we use',
    ingrTitle: 'Ingredients that <em>tell a story</em>',
    ingr1Name: 'Ranch Milk', ingr1Origin: 'Valladolid · Local',
    ingr1Desc: 'Pasteurized on small local ranches. No preservatives, real flavor.',
    ingr2Name: 'Dark Cacao', ingr2Origin: 'Yucatán · 100% natural',
    ingr2Desc: 'Completely pure cacao, no blends or additives. Chocolate as it should be.',
    ingr3Name: 'Seasonal Fruit', ingr3Origin: 'Local market · Fresh',
    ingr3Desc: "Whatever the day has best to offer. The menu changes because nature changes.",
    ingr4Name: 'Italian Process', ingr4Origin: 'Tradition · Artisanal',
    ingr4Desc: 'Authentic technique that respects the timing and temperatures of true gelato.',
    locTitle: 'Come <em>watch us</em> make the gelato',
    locHours: 'Tuesday to Sunday<br>12:00 pm — 9:00 pm',
    locBtn: 'Get directions',
    footerBrand: 'wabi gelato · tropical gelateria from valladolid',
    footerCopy: '© 2025 Wabi Gelato. Made with love.',
    ariaOpen: 'Open menu', ariaClose: 'Close menu', ariaLang: 'Change language',
  },
  fr: {
    navNosotros: 'À propos',
    navMenu: 'Menu du jour',
    navIngredientes: 'Ingrédients',
    navVisitanos: 'Nous rendre visite',
    navCta: 'Nous suivre',
    heroAccent: 'avec âme',
    heroSub: 'Fait comme en Italie, né au Yucatán.',
    heroDesc: "Ingrédients locaux de saison, lait frais pasteurisé de ranch et le procédé artisanal italien authentique qui respecte chaque saveur. Chaque jour, une histoire différente.",
    heroBtn: 'Voir le menu du jour',
    heroLink: 'Notre histoire',
    heroBadgeSabor: 'Saveur du jour',
    heroBadgeIngr: 'Ingrédient',
    heroBadgeIngrName: 'Lait de ranch',
    mq1: 'Gelateria tropicale', mq2: 'Ingrédients locaux', mq3: 'Procédé italien',
    mq4: 'Cacao naturel', mq5: 'Lait de ranch', mq6: "Fait aujourd'hui",
    storyTag: 'La philosophie',
    storyCardTitle: "Wabi-sabi : la beauté de l'imparfait",
    storyCardText: "Comme dans le concept japonais, nous trouvons la beauté dans le naturel, l'artisanal et ce qui change chaque jour. Pas deux gelatos pareils, et c'est ce qui le rend spécial.",
    storyPill: 'Nouvelle recette chaque matin',
    storyWhoTag: 'Qui nous sommes',
    storyTitle: 'Une histoire qui <em>a du goût</em>',
    storyP1: "Wabi Gelato est né au cœur de Valladolid avec une conviction simple : le meilleur gelato ne se fait pas avec des raccourcis. Nous utilisons une technique italienne authentique et les ingrédients les plus honnêtes de la région.",
    storyP2: "Du cacao pur et amer des collines au lait frais pasteurisé de ranchs locaux, chaque saveur raconte le territoire où elle a été créée.",
    storyP3: "L'espace a été conçu pour que chaque visite soit chaleureuse, intime et mémorable — comme un après-midi en famille dans un coin de Méditerranée, mais avec une âme yucatèque.",
    menuTag: 'Saveurs',
    menuTitle: 'Menu du <em>jour</em>',
    menuNote: 'Le menu change tous les jours selon le meilleur de la saison.',
    filterAll: 'Tous', filterFrutal: 'Fruité', filterCremoso: 'Crémeux',
    filterChocolate: 'Chocolat', filterEspecial: 'Spécial',
    menuEmpty: "Revenez bientôt — nous préparons les saveurs du jour.",
    badgeHoy: "aujourd'hui", badgeAgotado: 'épuisé',
    ingrTag: 'Ce que nous utilisons',
    ingrTitle: 'Des ingrédients qui <em>racontent</em>',
    ingr1Name: 'Lait de ranch', ingr1Origin: 'Valladolid · Local',
    ingr1Desc: 'Pasteurisé dans de petits ranchs de la région. Sans conservateurs, avec une vraie saveur.',
    ingr2Name: 'Cacao amer', ingr2Origin: 'Yucatán · 100% naturel',
    ingr2Desc: 'Cacao totalement pur, sans mélanges ni additifs. Le chocolat comme il devrait être.',
    ingr3Name: 'Fruits de saison', ingr3Origin: 'Marché local · Frais',
    ingr3Desc: 'Ce que le jour offre de meilleur. Le menu change parce que la nature change.',
    ingr4Name: 'Procédé italien', ingr4Origin: 'Tradition · Artisanal',
    ingr4Desc: 'Technique authentique qui respecte les temps et températures du vrai gelato.',
    locTitle: 'Venez <em>nous voir</em> faire le gelato',
    locHours: 'Mardi au dimanche<br>12h00 — 21h00',
    locBtn: 'Voir le chemin',
    footerBrand: 'wabi gelato · gelateria tropicale de valladolid',
    footerCopy: '© 2025 Wabi Gelato. Fait avec amour.',
    ariaOpen: 'Ouvrir le menu', ariaClose: 'Fermer le menu', ariaLang: 'Changer de langue',
  }
};

let currentLang = localStorage.getItem('wabi-lang') || 'es';

function t(key) {
  return (LANGS[currentLang] && LANGS[currentLang][key]) ?? (LANGS.es[key] ?? key);
}

function setLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  localStorage.setItem('wabi-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = t(el.dataset.i18n);
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = t(el.dataset.i18nHtml);
    if (typeof val === 'string') el.innerHTML = val;
  });

  /* Update picker button labels + active states */
  const codeEl = document.getElementById('langBtnCode');
  if (codeEl) codeEl.textContent = lang.toUpperCase();
  const mobileCode = document.getElementById('mobileLangCode');
  if (mobileCode) mobileCode.textContent = lang.toUpperCase();

  const langBtn = document.getElementById('langBtn');
  if (langBtn) langBtn.setAttribute('aria-label', t('ariaLang'));

  document.querySelectorAll('.lang-opt').forEach(opt => {
    const active = opt.dataset.lang === lang;
    opt.classList.toggle('is-active', active);
    opt.setAttribute('aria-selected', String(active));
  });

  /* Update mobile nav toggle aria-label if nav is already open */
  const navToggleEl = document.getElementById('navToggle');
  if (navToggleEl) {
    const isOpen = navToggleEl.getAttribute('aria-expanded') === 'true';
    navToggleEl.setAttribute('aria-label', isOpen ? t('ariaClose') : t('ariaOpen'));
  }
}

/* ---- Always start at the top on load/reload ---- */
if (history.scrollRestoration) history.scrollRestoration = 'manual';
if (window.location.hash) history.replaceState(null, '', window.location.pathname);
window.scrollTo(0, 0);

/* ---- Mobile nav toggle ---- */
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

function closeNav() {
  mobileMenu.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  navToggle.classList.remove('is-open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', t('ariaOpen'));
  document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
  const open = mobileMenu.classList.toggle('is-open');
  mobileMenu.setAttribute('aria-hidden', String(!open));
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? t('ariaClose') : t('ariaOpen'));
  document.body.style.overflow = open ? 'hidden' : '';
});

mobileMenu.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', closeNav);
});

/* ---- Language bottom sheet (mobile) ---- */
const mobileLangBtn      = document.getElementById('mobileLangBtn');
const langSheet          = document.getElementById('langSheet');
const langSheetBackdrop  = document.getElementById('langSheetBackdrop');

function openLangSheet()  {
  langSheet.classList.add('is-open');
  langSheet.setAttribute('aria-hidden', 'false');
}
function closeLangSheet() {
  langSheet.classList.remove('is-open');
  langSheet.setAttribute('aria-hidden', 'true');
}

if (mobileLangBtn) mobileLangBtn.addEventListener('click', openLangSheet);
if (langSheetBackdrop) langSheetBackdrop.addEventListener('click', closeLangSheet);

/* ---- Language picker dropdown ---- */
const navLang = document.getElementById('navLang');
const langBtn  = document.getElementById('langBtn');
const langDrop = document.getElementById('langDrop');

function openLangDrop() {
  navLang.classList.add('is-open');
  langBtn.setAttribute('aria-expanded', 'true');
}

function closeLangDrop() {
  navLang.classList.remove('is-open');
  langBtn.setAttribute('aria-expanded', 'false');
}

langBtn.addEventListener('click', e => {
  e.stopPropagation();
  navLang.classList.contains('is-open') ? closeLangDrop() : openLangDrop();
});

document.querySelectorAll('.lang-opt').forEach(opt => {
  opt.addEventListener('click', () => {
    const lang = opt.dataset.lang;
    setLang(lang);
    closeLangDrop();
    if (langSheet) closeLangSheet();
    renderMenuGrid();
  });
});

document.addEventListener('click', e => {
  if (!navLang.contains(e.target)) closeLangDrop();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLangDrop();
});

/* ---- Menu render + filter ---- */
const filters = document.querySelectorAll('.filter');

function showSkeletons(grid) {
  grid.innerHTML = Array(6).fill(`
    <article class="flavor flavor--skel" aria-hidden="true">
      <div class="skel skel-icon"></div>
      <div class="skel skel-title"></div>
      <div class="skel skel-body"></div>
      <div class="skel skel-tag"></div>
    </article>`).join('');
}

async function renderMenuGrid() {
  const grid = document.getElementById('menuGrid');
  if (!grid) return;

  showSkeletons(grid);

  let items;
  try {
    items = await wabiMenu.getAll();
  } catch {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--bark);font-family:var(--t-display)">${t('menuEmpty')}</p>`;
    return;
  }

  const activeCat = document.querySelector('.filter.is-active')?.dataset.cat || 'todos';

  const hoyFlavor = items.find(f => f.is_hoy && !f.agotado) || items.find(f => f.is_hoy);
  const heroBadgeName = document.getElementById('heroBadgeName');
  if (heroBadgeName && hoyFlavor) heroBadgeName.textContent = hoyFlavor.name;

  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--bark);font-family:var(--t-display);font-size:16px">${t('menuEmpty')}</p>`;
    return;
  }

  items.forEach(f => {
    const article = document.createElement('article');
    article.className = 'flavor' + (f.agotado ? ' flavor--agotado' : '');
    article.dataset.cat = f.category;

    const match = activeCat === 'todos' || f.category === activeCat;
    if (!match) article.classList.add('is-dim');

    if (f.is_hoy) {
      const badge = document.createElement('span');
      badge.className = 'flavor__badge';
      badge.textContent = t('badgeHoy');
      article.appendChild(badge);
    }

    if (f.agotado) {
      const soldBadge = document.createElement('span');
      soldBadge.className = 'flavor__badge flavor__badge--sold';
      soldBadge.textContent = t('badgeAgotado');
      article.appendChild(soldBadge);
    }

    const icon = document.createElement('span');
    icon.className = 'flavor__icon';
    icon.textContent = f.icon;

    const name = document.createElement('h3');
    name.className = 'flavor__name';
    name.textContent = f.name;

    const desc = document.createElement('p');
    desc.className = 'flavor__desc';
    desc.textContent = f.description;

    const tag = document.createElement('span');
    tag.className = 'flavor__tag';
    tag.textContent = f.tag;

    article.append(icon, name, desc, tag);
    grid.appendChild(article);
  });
}

renderMenuGrid();

filters.forEach(btn => {
  btn.addEventListener('click', () => {
    filters.forEach(f => f.classList.remove('is-active'));
    btn.classList.add('is-active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.flavor:not(.flavor--skel)').forEach(card => {
      const match = cat === 'todos' || card.dataset.cat === cat;
      card.classList.toggle('is-dim', !match);
    });
  });
});

/* ---- Reveal on scroll ---- */
const revealTargets = document.querySelectorAll(
  '.story, .menu__header, .menu__grid, .ingredients__grid, .location__map, .location__info'
);
revealTargets.forEach(el => el.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(el => io.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add('is-visible'));
}

/* ---- Subtle nav shadow on scroll ---- */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = window.scrollY > 10 ? '0 4px 24px rgba(124,102,71,0.08)' : 'none';
}, { passive: true });

/* ---- Instagram circle — rotación de foto sets ---- */
(function () {
  const sets = document.querySelectorAll('.ig-set');
  if (sets.length < 2) return;
  let current = 0;
  setInterval(() => {
    sets[current].classList.remove('is-visible');
    current = (current + 1) % sets.length;
    sets[current].classList.add('is-visible');
  }, 4500);
})();

/* ---- Apply saved language on load ---- */
setLang(currentLang);
