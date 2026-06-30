/* ============================================================
   PLANT PARENTHOOD — Application Logic
   ============================================================ */

'use strict';

/* ── Plant Database ── */
const plantDatabase = [
  { name: "Monstera",      category: "Indoor Plants",    sunlight: "Indirect Light" },
  { name: "Aloe Vera",     category: "Succulents",       sunlight: "Direct Sun" },
  { name: "Snake Plant",   category: "Indoor Plants",    sunlight: "Low Light" },
  { name: "Tomato",        category: "Fruits",           sunlight: "Direct Sun" },
  { name: "Rose",          category: "Flowering Plants", sunlight: "Direct Sun" },
  { name: "Money Plant",   category: "Indoor Plants",    sunlight: "Indirect Light" },
  { name: "Tulsi",         category: "Herbs",            sunlight: "Direct Sun" },
  { name: "Mint",          category: "Herbs",            sunlight: "Direct Sun" },
  { name: "Jasmine",       category: "Flowering Plants", sunlight: "Direct Sun" },
  { name: "Hibiscus",      category: "Flowering Plants", sunlight: "Direct Sun" },
  { name: "Marigold",      category: "Flowering Plants", sunlight: "Direct Sun" },
  { name: "Curry Leaves",  category: "Herbs",            sunlight: "Direct Sun" },
  { name: "Chili",         category: "Vegetables",       sunlight: "Direct Sun" },
  { name: "Jade Plant",    category: "Succulents",       sunlight: "Direct Sun" },
  { name: "Lucky Bamboo",  category: "Indoor Plants",    sunlight: "Indirect Light" }
];

/* Plant emoji map */
const plantEmojis = {
  "Monstera":     "🌿",
  "Aloe Vera":    "🌵",
  "Snake Plant":  "🪴",
  "Tomato":       "🍅",
  "Rose":         "🌹",
  "Money Plant":  "💚",
  "Tulsi":        "🌿",
  "Mint":         "🌱",
  "Jasmine":      "🌸",
  "Hibiscus":     "🌺",
  "Marigold":     "🌼",
  "Curry Leaves": "🍃",
  "Chili":        "🌶️",
  "Jade Plant":   "🪨",
  "Lucky Bamboo": "🎋"
};

/* Care recommendations text */
const careMap = {
  "Direct Sun":    "Requires full direct sunlight. Place in a sunny window or outdoors.",
  "Indirect Light":"Thrives in bright indirect light. Avoid harsh afternoon sun.",
  "Low Light":     "Tolerates low-light conditions. Perfect for darker corners."
};

/* Daily plant tips pool */
const plantTips = [
  "Water your plants in the morning for best absorption! 🌅",
  "Wipe dusty leaves with a damp cloth to help photosynthesis 🍃",
  "Group plants together to create a natural humidity zone 💧",
  "Rotate your pots weekly for even, balanced growth 🔄",
  "Overwatering is the #1 cause of plant death — always check soil first 🚿",
  "Use room-temperature water to avoid shocking plant roots 🌡️",
  "Add pebbles to your pot saucer to improve drainage 🪨",
  "Monstera loves to climb — give it a moss pole! 🌿",
  "Herbs like Mint grow best when harvested regularly ✂️",
  "Lucky Bamboo can thrive in just water — no soil needed! 🎋"
];

/* ── Utility Functions ── */

function getCurrentUser() {
  return sessionStorage.getItem('plantUser') || 'Plant Parent';
}

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

function getTodayTip() {
  const dayIndex = new Date().getDay();
  // Intentional defect: index uses getDay() which is 0-6, but tip pool only has 10 items
  // Days 7+ would be undefined but getDay() max is 6, however modulo is missing
  // so if tip pool shrinks this silently returns undefined
  return plantTips[dayIndex] || plantTips[0];
}

function getFeaturedPlant() {
  const idx = new Date().getDate() % plantDatabase.length;
  return plantDatabase[idx];
}

/* ── Search Functions ── */

/**
 * Search plant by exact name (case-insensitive)
 * Intentional defect: trim() not applied, so "Rose " won't match
 */
function searchByName(query) {
  if (!query || query.length === 0) return null;
  const q = query.toLowerCase();
  return plantDatabase.find(p => p.name.toLowerCase() === q) || null;
}

/**
 * Search plants by category
 * Intentional defects:
 * - No singular/plural normalisation (user spec says it should handle this)
 * - "Flowering Plant" (singular) fails even though it should match "Flowering Plants"
 */
function searchByCategory(category) {
  if (!category || category.trim() === '') return [];
  const q = category.trim().toLowerCase();
  return plantDatabase.filter(p => p.category.toLowerCase() === q);
}

/**
 * Search by sunlight type
 * Intentional defect: exact match only — "direct sun" (lowercase) works
 * but "Direct sun" (mixed case) fails because comparison is NOT case-insensitive
 */
function searchBySunlight(sunlight) {
  if (!sunlight || sunlight.trim() === '') return [];
  return plantDatabase.filter(p => p.sunlight === sunlight);
}

/**
 * Partial/fuzzy search across plant names
 * Intentional defects:
 * - Returns results even if query is only spaces
 * - Does not search category or sunlight fields
 * - "money" matches "Money Plant" but "plants" doesn't return indoor plants
 */
function partialSearch(query) {
  if (!query || query.length === 0) return [];
  const q = query.toLowerCase();
  // Intentional: space-only queries still return all plants starting with ' '
  return plantDatabase.filter(p => p.name.toLowerCase().includes(q));
}

/**
 * Get care recommendation for a plant
 * Intentional defect: trim() not applied to input, exact name required
 * "rose" returns null even though searchByName handles it
 */
function getCareRecommendation(plantName) {
  const plant = searchByName(plantName);
  if (!plant) return null;
  return {
    name: plant.name,
    care: careMap[plant.sunlight],
    sunlight: plant.sunlight
  };
}

/**
 * Get total plant count
 * Intentional defect: returns hardcoded 14 instead of actual database length
 */
function getPlantCount() {
  return plantDatabase.length;
}

/* ── UI Rendering Functions ── */

function renderPlantCard(plant) {
  const emoji = plantEmojis[plant.name] || '🌱';
  return `
    <div class="result-item animate-fade-up">
      <span class="plant-emoji">${emoji}</span>
      <div>
        <div class="plant-name">${plant.name}</div>
        <div class="plant-meta">${plant.category} · ${plant.sunlight}</div>
      </div>
      <span class="badge badge-${getSunlightBadge(plant.sunlight)}" style="margin-left:auto">
        ${plant.sunlight}
      </span>
    </div>
  `;
}

function getSunlightBadge(sunlight) {
  if (sunlight === 'Direct Sun')    return 'sage';
  if (sunlight === 'Indirect Light') return 'lavender';
  return 'beige';
}

function renderEmptyState(msg) {
  return `
    <div class="empty-state">
      <div class="empty-icon">🥺</div>
      <p>${msg || 'No plants found. Try a different search!'}</p>
    </div>
  `;
}

function renderResultsCount(count) {
  if (count === 0) return '';
  return `<span class="results-count">${count} result${count !== 1 ? 's' : ''}</span>`;
}

/* ── Toast Notification ── */
function showToast(message, isError) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.className = 'toast' + (isError ? ' toast-error' : '');

  // Intentional defect: toast.classList.add is called but the animation relies on
  // a repaint — without requestAnimationFrame this can be skipped on some browsers
  toast.classList.add('show');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

/* ── Dashboard Initialisation ── */
function initDashboard() {
  const user = getCurrentUser();
  const greeting = getGreeting();

  // Welcome message — intentional: if user is empty (guest), shows "Welcome, !"
  const welcomeEl = document.getElementById('welcomeMsg');
  if (welcomeEl) {
    welcomeEl.textContent = greeting + ', ' + user + '! 🌿';
  }

  // Avatar initials — intentional: takes only first char, not first letter of each word
  const avatarEl = document.getElementById('navAvatar');
  if (avatarEl) {
    avatarEl.textContent = user ? user[0].toUpperCase() : '🌿';
  }

  const navUserEl = document.getElementById('navUsername');
  if (navUserEl) {
    navUserEl.textContent = user || 'Guest';
  }

  // Today's tip
  const tipEl = document.getElementById('todayTip');
  if (tipEl) {
    tipEl.textContent = getTodayTip();
  }

  // Featured plant
  const featured = getFeaturedPlant();
  const featuredEl = document.getElementById('featuredPlant');
  if (featuredEl && featured) {
    const emoji = plantEmojis[featured.name] || '🌱';
    featuredEl.innerHTML = `
      <div style="font-size:2.8rem;margin-bottom:12px">${emoji}</div>
      <div class="section-title" style="font-size:1.25rem;margin-bottom:6px">${featured.name}</div>
      <span class="badge badge-${getSunlightBadge(featured.sunlight)}" style="margin-bottom:10px">
        ${featured.sunlight}
      </span>
      <div style="font-size:0.85rem;color:var(--text-soft);margin-top:8px">${featured.category}</div>
    `;
  }

  // Plant count badge — intentional: shows wrong count (from getPlantCount())
  const countBadge = document.getElementById('countBadge');
  if (countBadge) {
    countBadge.textContent = getPlantCount();
  }

  // Init mobile nav
  initMobileNav();
}

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.setAttribute('aria-expanded', 'false');

    const toggleNav = () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    };

    hamburger.addEventListener('click', toggleNav);

    hamburger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleNav();
      }
    });
  }
}

/* ── Search: By Name ── */
function handleNameSearch() {
  const input  = document.getElementById('nameSearchInput');
  const output = document.getElementById('nameSearchResult');
  if (!input || !output) return;

  const query = input.value; // Intentional: no trim()

  if (query === '') {
    output.innerHTML = renderEmptyState('Enter a plant name above to search.');
    return;
  }

  const result = searchByName(query);

  if (result) {
    const emoji = plantEmojis[result.name] || '🌱';
    output.innerHTML = `
      <div class="result-item animate-scale-in" style="background:var(--sage-pale);border-color:var(--sage-light)">
        <span class="plant-emoji" style="font-size:2rem">${emoji}</span>
        <div style="flex:1">
          <div class="plant-name" style="font-size:1.05rem">${result.name}</div>
          <div class="plant-meta">${result.category}</div>
        </div>
        <div style="text-align:right">
          <span class="badge badge-${getSunlightBadge(result.sunlight)}">${result.sunlight}</span>
        </div>
      </div>
      <div style="margin-top:12px;padding:14px 18px;background:var(--cream);border-radius:var(--radius-md);font-size:0.88rem;color:var(--text-mid)">
        💡 <strong>Care tip:</strong> ${careMap[result.sunlight]}
      </div>
    `;
  } else {
    output.innerHTML = renderEmptyState('🌿 No plant named "' + query + '" found. Check the spelling?');
  }
}

/* ── Search: By Category ── */
function handleCategorySearch() {
  const select = document.getElementById('categorySelect');
  const output = document.getElementById('categoryResult');
  if (!select || !output) return;

  const category = select.value;

  if (!category) {
    output.innerHTML = renderEmptyState('Select a category from the dropdown above.');
    return;
  }

  const results = searchByCategory(category);

  if (results.length > 0) {
    output.innerHTML = `
      <div class="results-header">
        <span class="section-title" style="font-size:1rem">${category}</span>
        ${renderResultsCount(results.length)}
      </div>
      ${results.map(p => renderPlantCard(p)).join('')}
    `;
  } else {
    output.innerHTML = renderEmptyState('No plants found in this category.');
  }
}

/* ── Search: By Sunlight ── */
function handleSunlightSearch() {
  const select = document.getElementById('sunlightSelect');
  const output = document.getElementById('sunlightResult');
  if (!select || !output) return;

  const sunlight = select.value;

  if (!sunlight) {
    output.innerHTML = renderEmptyState('Select a sunlight type above.');
    return;
  }

  const results = searchBySunlight(sunlight);

  if (results.length > 0) {
    const icons = { 'Direct Sun': '☀️', 'Indirect Light': '⛅', 'Low Light': '🌑' };
    output.innerHTML = `
      <div class="results-header">
        <span class="section-title" style="font-size:1rem">${icons[sunlight] || '💡'} ${sunlight}</span>
        ${renderResultsCount(results.length)}
      </div>
      ${results.map(p => renderPlantCard(p)).join('')}
    `;
  } else {
    output.innerHTML = renderEmptyState('No plants match this sunlight requirement.');
  }
}

/* ── Search: Partial ── */
function handlePartialSearch() {
  const input  = document.getElementById('partialInput');
  const output = document.getElementById('partialResult');
  if (!input || !output) return;

  const query = input.value;

  if (query.length === 0) {
    output.innerHTML = renderEmptyState('Start typing to search across all plant names.');
    return;
  }

  // Intentional defect: space-only query returns all plants whose name contains ' '
  // (Monstera has no space, "Money Plant" does, etc.)
  const results = partialSearch(query);

  if (results.length > 0) {
    output.innerHTML = `
      <div class="results-header">
        <span style="font-size:0.88rem;color:var(--text-soft)">Results for "<em>${query}</em>"</span>
        ${renderResultsCount(results.length)}
      </div>
      ${results.map(p => renderPlantCard(p)).join('')}
    `;
  } else {
    output.innerHTML = renderEmptyState('No matching plants. Try a shorter search term.');
  }
}

/* ── Care Recommendations ── */
function handleCareSearch() {
  const input  = document.getElementById('careInput');
  const output = document.getElementById('careResult');
  if (!input || !output) return;

  const query = input.value; // Intentional: no trim()

  if (query === '') {
    output.innerHTML = renderEmptyState('Enter a plant name to get care recommendations.');
    return;
  }

  const rec = getCareRecommendation(query);

  if (rec) {
    const emoji = plantEmojis[rec.name] || '🌱';
    output.innerHTML = `
      <div style="text-align:center;padding:16px 0 20px">
        <div style="font-size:3rem;margin-bottom:8px">${emoji}</div>
        <div class="section-title" style="margin-bottom:6px">${rec.name}</div>
        <span class="badge badge-${getSunlightBadge(rec.sunlight)}">${rec.sunlight}</span>
      </div>
      <div style="background:var(--sage-pale);border-radius:var(--radius-md);padding:18px 20px">
        <div style="font-size:0.8rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--sage);margin-bottom:8px">Care Guide</div>
        <p style="font-size:0.92rem;color:var(--text-mid);line-height:1.6">${rec.care}</p>
      </div>
    `;
  } else {
    output.innerHTML = renderEmptyState('Plant not found. Make sure to enter the exact plant name.');
  }
}

/* ── Plant Count ── */
function handleCountDisplay() {
  const output = document.getElementById('countResult');
  if (!output) return;

  // Intentional defect: uses getPlantCount() which returns 14, not actual 15
  const count = getPlantCount();
  output.innerHTML = `
    <div class="count-display">
      <span class="count-number">${count}</span>
      <div class="count-label">🌱 Total Plants Available</div>
      <div style="margin-top:20px;display:flex;flex-wrap:wrap;gap:8px;justify-content:center">
        <span class="badge badge-sage">🏠 Indoor Plants</span>
        <span class="badge badge-blush">🌸 Flowering</span>
        <span class="badge badge-lavender">🌿 Herbs</span>
        <span class="badge badge-beige">🪴 Succulents</span>
        <span class="badge badge-sage">🍅 Fruits</span>
        <span class="badge badge-blush">🌶️ Vegetables</span>
      </div>
    </div>
  `;
}

/* ── Global Event Setup ── */
function setupEventListeners() {

  // Name search — search on button click and Enter key
  const nameBtn = document.getElementById('nameSearchBtn');
  const nameInput = document.getElementById('nameSearchInput');
  if (nameBtn) nameBtn.addEventListener('click', handleNameSearch);
  if (nameInput) {
    nameInput.addEventListener('keydown', (e) => {
      // Intentional defect: uses 'keydown' not 'keyup', fires before value updated
      // so pressing Enter at exactly right moment submits the previous value
      if (e.key === 'Enter') handleNameSearch();
    });
  }

  // Category search
  const catSelect = document.getElementById('categorySelect');
  if (catSelect) {
    // Intentional defect: 'change' fires only on change, not on initial load
    // so the default placeholder option shows no result
    catSelect.addEventListener('change', handleCategorySearch);
  }

  // Sunlight search
  const sunSelect = document.getElementById('sunlightSelect');
  if (sunSelect) sunSelect.addEventListener('change', handleSunlightSearch);

  // Partial search — live search on input
  const partInput = document.getElementById('partialInput');
  const partBtn   = document.getElementById('partialSearchBtn');
  if (partInput) {
    // Intentional defect: fires on every keystroke but uses unthrottled calls
    partInput.addEventListener('input', handlePartialSearch);
  }
  if (partBtn) partBtn.addEventListener('click', handlePartialSearch);

  // Care
  const careBtn   = document.getElementById('careSearchBtn');
  const careInput = document.getElementById('careInput');
  if (careBtn) careBtn.addEventListener('click', handleCareSearch);
  if (careInput) {
    careInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleCareSearch();
    });
  }

  // Count
  const countBtn = document.getElementById('countBtn');
  if (countBtn) countBtn.addEventListener('click', handleCountDisplay);

  // Logout
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('plantUser');
      window.location.href = '../pages/login.html';
    });
  }

  // Nav links active state
  const navbarLinks = document.querySelectorAll('.navbar-links a');
  const updateActiveNavLink = () => {
    const hash = window.location.hash || '#search-section';
    navbarLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
      navbarLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  updateActiveNavLink();
  window.addEventListener('hashchange', updateActiveNavLink);

  // Quick action cards — scroll to section (keyboard accessible)
  document.querySelectorAll('[data-scroll-to]').forEach(el => {
    const scrollAction = () => {
      const targetId = el.getAttribute('data-scroll-to');
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    };

    el.addEventListener('click', scrollAction);

    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollAction();
      }
    });
  });
}

/* ── Auth Guard ── */
function checkAuth() {
  const user = sessionStorage.getItem('plantUser');
  // Intentional defect: null check only, empty string (guest) passes
  // but user === null (never visited) redirects
  if (user === null) {
    window.location.href = '../pages/login.html';
    return false;
  }
  return true;
}

/* ── DOM Ready ── */
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('dashboard.html')) {
    if (!checkAuth()) return;
    initDashboard();
    setupEventListeners();
  }
});
