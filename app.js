/**
 * ============================================================
 *  app.js — Main Application Logic (Plain JS version)
 * ============================================================
 *  Contains:
 *    1. SVG Icon definitions
 *    2. Card data array
 *    3. Card HTML generation
 *    4. Age gate + flip + click handlers
 * ============================================================
 */

/* ==========================================================
 *  1. SVG ICONS (replacing Lucide React)
 * ========================================================== */
const ICONS = {
  check: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  star: '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  gift: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>',
  rotateCw: '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>',
  x: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
};


/* ==========================================================
 *  2. FRONT STATS LABELS (which 4 stats show on front)
 * ========================================================== */
const FRONT_STATS_LABELS = [
  'Dep. mínimo',
  'Valor do bónus',
  'Rodadas grátis',
  'Tempo de levant.',
];


/* ==========================================================
 *  3. SPONSOR CARD DATA
 * ========================================================== */
const sponsorCards = [

  /* ——— CARD 1: SMOKING ACE ——— */
  {
    name: 'SMOKING ACE',
    headerColor: 'gladiator-header-black',
    logoUrl: 'https://smokace12.co/assets/images/logo-Fxnt_nuT.webp',
    tagline: '125% no 1º Depósito + 125 Freespins',
    perks: [],
    promoCode: 'Brutus',
    badgeText: '10 FS Sem Depósito',
    affiliateLink: 'https://record.joinaff.com/_hwHCWKmquIiQAbEseutvtGNd7ZgqdRLk/1/',
    statsColor: 'stats-badge-silver',
    stats: [
      { label: 'Dep. mínimo',    value: '€25' },
      { label: 'Valor do bónus', value: '225% até €2k' },
      { label: 'Rodadas grátis', value: '225 FS' },
      { label: 'Tempo de levant.', value: '0-24h' },
      { label: 'Rollover',       value: '50x' },
      { label: 'Ganho máx.',     value: '25€' },
      { label: 'Limite de levant.', value: '€50k/mês' },
      { label: 'Cripto',         value: 'Sim' },
      { label: 'Clube VIP',      value: 'Sim' },
      { label: 'Mét. depósito',  value: 'Visa, MC, Skrill, BTC, ETH +' },
    ],
    backNotes: [
      '1º Depósito: 125% + 125 Freespins (código: Brutus)',
      '10 Freespins sem depósito no registo',
      'Rollover: 50x | Ganho máx: 25€',
      'Depósito mínimo: €25 | Sem taxas',
      'Levantamento mínimo: €20 | Sem taxas',
      'Limites: €1.000/transação, €3.000/dia, €50.000/mês',
      'Carteiras digitais: 24-48h | Cripto: 0-48h | Banco: 3-7 dias',
      'Métodos: Visa, MC, Skrill, Neteller, Bitcoin, ETH, TRON, Tether, Paysafecard',
      'Verificação: 0-24h | Levantamentos ao fim de semana: Sim',
      'Jackpots progressivos pagos na totalidade',
      'Estabelecido: 2023 | Empresa: Altacore N.V.',
      '18+ | T&C Aplicam-se',
    ],
  },

  /* ——— CARD 2: WINHUGO ——— */
  {
    name: 'WINHUGO',
    headerColor: 'gladiator-header-limegreen',
    logoUrl: 'https://dibv43v5qvczy.cloudfront.net/tenant2c6d3f79-41c3-4a38-99bb-0efbe511b6c2/MyqJnaYEE8nUnSdYSpvOY9DM4ZzCvQPbmw8LGTdl.png',
    tagline: '100% até 1000€ + 100 Freespins',
    perks: [],
    promoCode: 'brutus',
    badgeText: 'Non-Sticky Bónus',
    affiliateLink: 'https://www.winhugo1.com/a/brutus',
    statsColor: 'stats-badge-green',
    stats: [
      { label: 'Dep. mínimo',    value: '€10' },
      { label: 'Valor do bónus', value: '100% até €1k' },
      { label: 'Rodadas grátis', value: '100 FS' },
      { label: 'Tempo de levant.', value: 'N/A' },
      { label: 'Rollover',       value: '25x' },
      { label: 'Ganho máx.',     value: '100% dep.' },
      { label: 'Mét. depósito',  value: 'Visa, MC, MB Way, Cripto +' },
    ],
    backNotes: [
      '🎁 Bónus: 100% até 1000€ + 100 Freespins',
      'Bónus Non-Sticky (pode levantar saldo real a qualquer momento)',
      '1º Depósito: 100% até €1.000 + 100 Freespins (código: brutus)',
      'Depósito mínimo: €10',
      'Rollover: 25x',
      'Após completar o rollover, o máximo que pode ganhar com o bónus é 100% do valor depositado.',
      'Exemplo: depositar 100€ → ganho máximo com bónus: 100€',
      '18+ | T&C Aplicam-se',
    ],
  },

  /* ——— CARD 3: LOLLYSPINS 🍭 ——— */
  {
    name: 'LOLLYSPINS 🍭',
    headerColor: 'gladiator-header-pink',
    logoUrl: 'https://lollyspins7.com/assets/images/logo-VIEBohb5.svg',
    tagline: '400% Bónus até €2200 & 350 Rodadas Grátis',
    perks: [],
    affiliateLink: 'https://record.joinaff.com/_hwHCWKmquIiBYt4A521OEWNd7ZgqdRLk/1/',
    statsColor: 'stats-badge-pink',
    stats: [
      { label: 'Dep. mínimo',    value: '25€' },
      { label: 'Cashback',       value: '35%' },
      { label: 'Valor do bónus', value: '400% até €2.2k' },
      { label: 'Rodadas grátis', value: '350 FS' },
      { label: 'Tempo de levant.', value: '0-24h' },
      { label: 'Mét. depósito',  value: 'Visa, MC, Skrill, BTC +' },
    ],
    backNotes: [
      'Depósito mínimo: 25€',
      '1º depósito: 100% de bônus + 100 Freespins Wanted Dead or a Wild (Hacksaw)',
      '2º depósito: 80% de bônus + 50 Freespins Razor Returns (Push Gaming)',
      '3º depósito: 70% de bônus + 100 Freespins Duel at Dawn (Hacksaw)',
      '4º depósito: 50% de bônus',
      '5º depósito: 100% de bônus + 100 Freespins Pirate Bonanza (Hacksaw)',
      '24/7 Suporte ao vivo (para ajuda com rodadas grátis)',
    ],
  },

  /* ——— CARD 4: RIOACE ——— */
  {
    name: 'RIOACE',
    headerColor: 'gladiator-header-darkblue',
    logoUrl: 'https://rioace23.co/assets/images/logo-SZWvIA3N.webp',
    tagline: '400% Bónus + 350 Freespins',
    perks: [],
    affiliateLink: 'https://record.joinaff.com/_hwHCWKmquIhZNvOoThXn9GNd7ZgqdRLk/1/',
    statsColor: 'stats-badge-blue',
    stats: [
      { label: 'Dep. mínimo',    value: '20€' },
      { label: 'Valor do bónus', value: '400% até €2.2k' },
      { label: 'Rodadas grátis', value: '350 FS' },
      { label: 'Tempo de levant.', value: '0-24h' },
      { label: 'Limite de levant.', value: '€50k/mês' },
      { label: 'Tempo pendente', value: '0-96h' },
      { label: 'Cripto',         value: 'Sim' },
      { label: 'Apps móveis',    value: 'iOS & Android' },
      { label: 'Desportos',      value: 'Sim' },
      { label: 'Mét. depósito',  value: 'Visa, MC, Skrill, MiFinity, BTC +' },
    ],
    backNotes: [
      '400% Bónus + 350 Freespins no 1º depósito',
      'Depósito mínimo: €25 | Sem taxas de depósito',
      'Sem taxas de levantamento',
      'Limites: €10.000/dia, €50.000/mês',
      'Carteiras digitais: 24-48h | Banco: 1-7 dias',
      'Tempo pendente: 0-96h | Sem levantamentos ao fim de semana',
      'Métodos: Visa, MC, Skrill, Neteller, MiFinity, eZeeWallet, MuchBetter',
      'Cripto: Bitcoin, ETH, Tether, LTC, DOGE, TRON',
      'Casino ao vivo, Apps móveis (iOS & Android), Desportos',
      'Estabelecido: 2024 | Empresa: Altacore N.V.',
      '18+ | T&C Aplicam-se',
    ],
  },

  /* ——— CARD 5: STELARIO ——— */
  {
    name: 'STELARIO',
    headerColor: 'gladiator-header-cream',
    logoUrl: 'https://boomaff.com/wp-content/uploads/2020/12/%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B5%D0%B7-%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F-18.png',
    tagline: '100% até 300€ + 100 Freespins',
    perks: [],
    affiliateLink: 'https://record.joinaff.com/_hwHCWKmquIjsP_BZ5nQwFmNd7ZgqdRLk/1/',
    statsColor: 'stats-badge-cream',
    stats: [
      { label: 'Dep. mínimo',    value: '€25' },
      { label: 'Valor do bónus', value: '100% até €300' },
      { label: 'Rodadas grátis', value: '100 FS' },
      { label: 'Tempo de levant.', value: '0-48h' },
      { label: 'Rollover',       value: '40x' },
      { label: 'Levant. mínimo', value: '€20' },
      { label: 'Limite de levant.', value: '€10.000/mês' },
      { label: 'Cripto',         value: 'Sim' },
      { label: 'Clube VIP',      value: 'Sim' },
      { label: 'Mét. depósito',  value: 'Visa, MC, Skrill, Payz, BTC +' },
    ],
    backNotes: [
      '🎁 Bónus: 100% até 300€ + 100 Freespins (Gates of Olympus)',
      'Depósito mínimo: €25 | Aposta máxima: €5',
      'Freespins creditadas a cada 24h (25 Freespins por dia)',
      'Rollover: 40x',
      'Levantamento mínimo: €20 | Sem taxas de levantamento',
      'Limites: €400/transação, €400/dia, €10.000/mês',
      'Carteiras digitais: 0-1h | Cripto: 0-1h | Banco: 5-7 dias | Cartões: 5-7 dias',
      'Levantamentos ao fim de semana: Sim | Jackpots pagos na totalidade',
      'Métodos: Visa, MC, Skrill, Neteller, Payz, Bitcoin, LTC, ETH, Trustly, Transferência, Interac, Discover, MiFinity, Paysafecard',
      'Verificação: 0-24h | Tempo pendente: 24-48h',
      'Tipo: Casino Instantâneo, Móvel, Casino ao Vivo, Casino Cripto',
      "Fornecedores: Pragmatic Play, Play'n GO, Yggdrasil, Push Gaming, NetEnt, Evolution, Big Time Gaming, Nolimit City e mais",
      'Estabelecido: 2020 | Empresa: Altacore N.V.',
      '18+ | T&C Aplicam-se',
    ],
  },

  /* ——— CARD 6: JOKER8 ——— */
  {
    name: 'JOKER8',
    headerColor: 'gladiator-header-purple',
    logoUrl: 'https://3joker8.com/assets/logo/logo-big.webp',
    tagline: 'Casino Cripto & Ao Vivo',
    perks: [],
    affiliateLink: 'https://jokj.fynkelto.com/?mid=256706_1508369',
    statsColor: 'stats-badge-purple',
    stats: [
      { label: 'Dep. mínimo',    value: '€10' },
      { label: 'Valor do bónus', value: '100% até €500' },
      { label: 'Rodadas grátis', value: '200 FS' },
      { label: 'Tempo de levant.', value: '0-24h' },
      { label: 'Limite de levant.', value: '€7.000/mês' },
      { label: 'Tempo pendente', value: '0-96h' },
      { label: 'Cripto',         value: 'Sim' },
      { label: 'Clube VIP',      value: 'Sim' },
      { label: 'Mét. depósito',  value: 'Visa, MC, Skrill, MiFinity, BTC +' },
    ],
    backNotes: [
      '🎁 Bónus: 100% até 500€ + 200 Freespins',
      'Casino Cripto, Jogo Instantâneo, Casino ao Vivo, Móvel',
      'Depósito mínimo: verificar site | Sem taxas de depósito',
      'Sem taxas de levantamento',
      'Limites: €500/dia, €7.000/mês',
      'Carteiras digitais: 0-24h | Banco: 3-5 dias | Cartões: 3-5 dias',
      'Tempo pendente: 0-96h | Sem levantamentos ao fim de semana',
      'Depósito: Visa, MC, Skrill, Neteller, eZeeWallet, MiFinity, MuchBetter, Paysafecard, Siru Mobile, BTC, ETH, USDT, LTC, DOGE, TRON',
      'Levantamento: Visa, MC, Skrill, Neteller, Payz, Jeton, MiFinity, MuchBetter, eZeeWallet, Pay4Fun, Pix, BTC, ETH, USDT, LTC, TRON, DOGE',
      "Fornecedores: Pragmatic Play, Play'n GO, Evolution, NetEnt, Playtech, Hacksaw, Push Gaming, Nolimit City e mais",
      'Estabelecido: 2023 | Empresa: Liernin Enterprises LTD',
      '18+ | T&C Aplicam-se',
    ],
  },
];


/* ==========================================================
 *  4. HELPER — Render card name (LollySpins special branding)
 * ========================================================== */
function renderCardName(name) {
  if (name === 'LOLLYSPINS 🍭') {
    return '<span class="text-pink">LOLLY</span><span class="text-yellow">SPINS</span> 🍭';
  }
  return escapeHTML(name);
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}


/* ==========================================================
 *  5. CARD HTML GENERATOR
 * ========================================================== */
function createCardHTML(card) {
  const frontStats = card.stats
    ? card.stats.filter(s => FRONT_STATS_LABELS.includes(s.label))
    : [];
  const backStats = card.stats
    ? card.stats.filter(s => !FRONT_STATS_LABELS.includes(s.label))
    : [];
  const hasBackFace = !!(card.stats || card.termsAndConditions);
  const badgeClass = card.statsColor || 'stats-badge';
  const logoLargeClass = card.logoSize === 'large' ? ' logo-large' : '';
  const filterStyle = card.logoFilter ? ` style="filter: ${card.logoFilter};"` : '';

  /* --- Header content --- */
  let headerInner = '';

  if (card.isFeatured) {
    headerInner += `
      <div class="popular-badge">
        ${ICONS.star}
        <span>POPULAR</span>
      </div>`;
  }

  if (card.badgeText) {
    headerInner += `
      <div class="badge-text">${escapeHTML(card.badgeText)}</div>`;
  }

  if (card.logoUrl) {
    headerInner += `
      <img src="${card.logoUrl}" alt="${escapeHTML(card.name)}" class="card-logo${logoLargeClass}"${filterStyle}>`;
  } else {
    headerInner += `
      <h3 class="card-title">${renderCardName(card.name)}</h3>`;
  }

  /* --- Front stats grid --- */
  let frontStatsHTML = '';
  if (frontStats.length > 0) {
    frontStatsHTML = '<div class="stats-grid">';
    frontStats.forEach(stat => {
      frontStatsHTML += `
        <div class="${badgeClass} stat-item">
          <span class="stat-label">${escapeHTML(stat.label)}</span>
          <span class="stat-value">${escapeHTML(stat.value)}</span>
        </div>`;
    });
    frontStatsHTML += '</div>';
  }

  /* --- Tagline (only when no stats) --- */
  let taglineHTML = '';
  if (!card.stats) {
    taglineHTML = `<p class="tagline">${escapeHTML(card.tagline)}</p>`;
  }

  /* --- Perks list --- */
  let perksHTML = '';
  if (card.perks && card.perks.length > 0) {
    perksHTML = '<ul class="perks-list">';
    card.perks.forEach(perk => {
      perksHTML += `<li>${ICONS.check}<span>${escapeHTML(perk)}</span></li>`;
    });
    perksHTML += '</ul>';
  }

  /* --- Promo code box --- */
  let promoFrontHTML = '';
  if (card.promoCode) {
    promoFrontHTML = `
      <div class="code-badge">
        <div class="code-inner">
          <span class="code-label">Código</span>
          <span class="code-value">${escapeHTML(card.promoCode)}</span>
        </div>
        <span class="code-icon">${ICONS.gift}</span>
      </div>`;
  }

  /* --- T&C flip link --- */
  let tcFlipHTML = '';
  if (hasBackFace) {
    tcFlipHTML = `
      <p class="tc-link" data-flip>
        T&C Aplicam-se ${ICONS.rotateCw}
      </p>`;
  }

  /* --- Back body content --- */
  let backBodyHTML = '';

  if (card.stats && card.stats.length > 0) {
    backBodyHTML += '<p class="back-notice">+18 | T&C Apply</p>';

    if (backStats.length > 0) {
      backBodyHTML += '<div class="stats-grid">';
      backStats.forEach(stat => {
        backBodyHTML += `
          <div class="${badgeClass} stat-item">
            <span class="stat-label">${escapeHTML(stat.label)}</span>
            <span class="stat-value">${escapeHTML(stat.value)}</span>
          </div>`;
      });
      backBodyHTML += '</div>';
    }

    if (card.backNotes) {
      card.backNotes.forEach(note => {
        backBodyHTML += `<p class="back-note">• ${escapeHTML(note)}</p>`;
      });
    }

  } else if (card.termsAndConditions && card.termsAndConditions.length > 0) {
    backBodyHTML += '<h4 class="tc-title">Termos e Condições</h4>';
    backBodyHTML += '<ol class="tc-list">';
    card.termsAndConditions.forEach(term => {
      backBodyHTML += `<li>${escapeHTML(term)}</li>`;
    });
    backBodyHTML += '</ol>';

  } else {
    backBodyHTML += `<p class="back-tagline">${escapeHTML(card.tagline)}</p>`;
  }

  /* --- Back promo code --- */
  let promoBackHTML = '';
  if (card.promoCode) {
    promoBackHTML = `
      <div class="code-badge">
        <div class="code-inner">
          <span class="code-label">Código</span>
          <span class="code-value code-value-back">${escapeHTML(card.promoCode)}</span>
        </div>
        <span class="code-icon">${ICONS.gift}</span>
      </div>`;
  }

  /* --- Back header (same as front minus badges) --- */
  let backHeaderInner = '';
  if (card.logoUrl) {
    backHeaderInner = `
      <img src="${card.logoUrl}" alt="${escapeHTML(card.name)}" class="card-logo${logoLargeClass}"${filterStyle}>`;
  } else {
    backHeaderInner = `
      <h3 class="card-title">${renderCardName(card.name)}</h3>`;
  }

  /* --- Assemble the full card --- */
  return `
    <div class="card-flip-container" data-link="${card.affiliateLink || '#'}">
      <div class="card-flip-inner">

        <!-- FRONT FACE -->
        <div class="card-flip-front gladiator-card">
          <div class="${card.headerColor} gladiator-header-pattern card-header">
            ${headerInner}
          </div>
          <div class="card-body">
            ${frontStatsHTML}
            ${taglineHTML}
            ${perksHTML}
            <div class="card-bottom">
              ${promoFrontHTML}
              <button class="btn-gladiator register-btn">Registar Agora</button>
              ${tcFlipHTML}
            </div>
          </div>
        </div>

        <!-- BACK FACE -->
        <div class="card-flip-back gladiator-card">
          <button class="close-btn" data-flip>${ICONS.x}</button>
          <div class="${card.headerColor} gladiator-header-pattern card-header">
            ${backHeaderInner}
          </div>
          <div class="card-body-back scrollbar-hidden">
            ${backBodyHTML}
            ${promoBackHTML}
            <div class="card-bottom">
              <a href="${card.affiliateLink || '#'}" target="_blank" rel="noopener noreferrer"
                 class="btn-gladiator register-btn register-link"
                 onclick="event.stopPropagation();">
                Registar Agora
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>`;
}


/* ==========================================================
 *  6. INITIALIZATION
 * ========================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Render all cards into the grid --- */
  const grid = document.getElementById('cards-grid');
  grid.innerHTML = sponsorCards.map(createCardHTML).join('');

  /* --- Age Gate --- */
  const ageGate = document.getElementById('age-gate');
  const mainContent = document.getElementById('main-content');

  document.getElementById('age-confirm').addEventListener('click', () => {
    ageGate.style.display = 'none';
    mainContent.style.display = 'block';
  });

  /* --- Card click → open affiliate link --- */
  grid.addEventListener('click', (e) => {
    /* Don't navigate if clicking a flip trigger, close button, or direct link */
    if (e.target.closest('[data-flip]') || e.target.closest('.close-btn') || e.target.closest('.register-link')) {
      return;
    }

    const container = e.target.closest('.card-flip-container');
    if (!container) return;

    const link = container.dataset.link;
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  });

  /* --- Flip card handlers (event delegation) --- */
  grid.addEventListener('click', (e) => {
    const flipTrigger = e.target.closest('[data-flip]');
    if (!flipTrigger) return;

    e.stopPropagation();
    const container = flipTrigger.closest('.card-flip-container');
    if (!container) return;

    const inner = container.querySelector('.card-flip-inner');
    inner.classList.toggle('card-flipped');
  });

  /* --- Close button on back face --- */
  grid.addEventListener('click', (e) => {
    const closeBtn = e.target.closest('.close-btn');
    if (!closeBtn) return;

    e.stopPropagation();
    const container = closeBtn.closest('.card-flip-container');
    if (!container) return;

    const inner = container.querySelector('.card-flip-inner');
    inner.classList.remove('card-flipped');
  });
});
