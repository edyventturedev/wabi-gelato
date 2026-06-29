/* =========================================================
   WABI GELATO — script.js
   ========================================================= */

/* ---- Always start at the top on load/reload ---- */
if (history.scrollRestoration) history.scrollRestoration = 'manual';
if (window.location.hash) history.replaceState(null, '', window.location.pathname);
window.scrollTo(0, 0);

/* ---- Mobile nav toggle ---- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

/* Close mobile nav when a link is tapped */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
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
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--bark);font-family:var(--t-display)">Vuelve pronto — estamos preparando los sabores de hoy.</p>';
    return;
  }

  const activeCat = document.querySelector('.filter.is-active')?.dataset.cat || 'todos';

  /* Actualizar badge del hero */
  const hoyFlavor = items.find(f => f.is_hoy && !f.agotado) || items.find(f => f.is_hoy);
  const heroBadgeName = document.getElementById('heroBadgeName');
  if (heroBadgeName && hoyFlavor) heroBadgeName.textContent = hoyFlavor.name;

  grid.innerHTML = '';

  if (items.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;padding:40px;color:var(--bark);font-family:var(--t-display);font-size:16px">Vuelve pronto — estamos preparando los sabores de hoy.</p>';
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
      badge.textContent = 'hoy';
      article.appendChild(badge);
    }

    if (f.agotado) {
      const soldBadge = document.createElement('span');
      soldBadge.className = 'flavor__badge flavor__badge--sold';
      soldBadge.textContent = 'agotado';
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
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  nav.style.boxShadow = y > 10 ? '0 4px 24px rgba(124,102,71,0.08)' : 'none';
  lastY = y;
}, { passive: true });
