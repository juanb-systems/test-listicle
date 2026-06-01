/* ─────────────────────────────────────────────────────────────
   Listicle Builder — app.js
   ───────────────────────────────────────────────────────────── */

// ── State ──────────────────────────────────────────────────────
const state = {
  design: 'dark-neon',
  size: { w: 1080, h: 1080 },
  font: 'Inter',
  titleSize: 32,
  itemSize: 18,
  titleWeight: '800',
  itemWeight: '600',
  colors: {
    bg: '#1a1a2e',
    bg2: '#0f3460',
    accent: '#e94560',
    title: '#ffffff',
    item: '#e2e8f0',
    number: '#e94560',
    card: '#16213e',
  },
  bgStyle: 'solid',
  itemStyle: 'numbered',
  listEmoji: '✅',
  padding: 40,
  gap: 16,
  titleAlign: 'left',
  showDividers: true,
  showWatermark: false,
  watermarkText: '@yourhandle',
  title: '10 Tips to Boost Productivity',
  subtitle: 'Level up your workflow today',
  items: [
    'Wake up 30 minutes earlier each day',
    'Use time-blocking for deep work',
    'Eliminate distractions with app blockers',
    'Take regular breaks (Pomodoro method)',
    'Batch similar tasks together',
    'Review your day every evening',
    'Prioritize your top 3 tasks nightly',
    'Automate repetitive workflows',
    'Learn keyboard shortcuts',
    'Say no to unnecessary meetings',
  ],
  carouselMode: false,
  itemsPerSlide: 3,
  showProgress: true,
  currentSlide: 0,
  zoom: 0.75,
  bgOverlay: {
    type: 'none',      // 'none' | 'pattern' | 'photo' | 'custom'
    patternId: 'none',
    patternColor: '#ffffff',
    photoSeed: '',
    customUrl: '',
    opacity: 0.18,
    blend: 'normal',
  },
  textEffect: 'none',  // 'none' | 'shadow' | 'glow' | 'outline'
  titleLetterSpacing: '-0.02',
};

// ── Design Presets ─────────────────────────────────────────────
const DESIGNS = [
  {
    id: 'dark-neon',
    name: 'Dark Neon',
    colors: { bg:'#1a1a2e', bg2:'#0f3460', accent:'#e94560', title:'#ffffff', item:'#e2e8f0', number:'#e94560', card:'#16213e' },
    bgStyle: 'gradient-tb',
    itemStyle: 'numbered',
    preview: { bg: 'linear-gradient(to bottom, #1a1a2e, #0f3460)', accent: '#e94560', text: '#fff' },
  },
  {
    id: 'sunrise',
    name: 'Sunrise',
    colors: { bg:'#ff6b6b', bg2:'#feca57', accent:'#ffffff', title:'#ffffff', item:'#fff9e6', number:'#fff', card:'rgba(255,255,255,0.15)' },
    bgStyle: 'gradient-diagonal',
    itemStyle: 'numbered',
    preview: { bg: 'linear-gradient(135deg, #ff6b6b, #feca57)', accent: '#fff', text: '#fff' },
  },
  {
    id: 'ocean',
    name: 'Ocean',
    colors: { bg:'#0052d4', bg2:'#4364f7', accent:'#00d2ff', title:'#ffffff', item:'#d0eeff', number:'#00d2ff', card:'rgba(0,210,255,0.12)' },
    bgStyle: 'gradient-lr',
    itemStyle: 'icon',
    preview: { bg: 'linear-gradient(to right, #0052d4, #4364f7)', accent: '#00d2ff', text: '#fff' },
  },
  {
    id: 'forest',
    name: 'Forest',
    colors: { bg:'#1a3a2a', bg2:'#0d2117', accent:'#52d68a', title:'#ffffff', item:'#c8f5da', number:'#52d68a', card:'rgba(82,214,138,0.1)' },
    bgStyle: 'gradient-tb',
    itemStyle: 'bullet',
    preview: { bg: 'linear-gradient(to bottom, #1a3a2a, #0d2117)', accent: '#52d68a', text: '#fff' },
  },
  {
    id: 'minimal-light',
    name: 'Minimal',
    colors: { bg:'#ffffff', bg2:'#f8f9fa', accent:'#1a1a2e', title:'#1a1a2e', item:'#4a5568', number:'#1a1a2e', card:'#f0f2f5' },
    bgStyle: 'solid',
    itemStyle: 'numbered',
    preview: { bg: '#ffffff', accent: '#1a1a2e', text: '#1a1a2e' },
  },
  {
    id: 'pastel',
    name: 'Pastel',
    colors: { bg:'#fdf6ff', bg2:'#e8d5f5', accent:'#b05ce6', title:'#4a2060', item:'#7a5580', number:'#b05ce6', card:'#f3e6ff' },
    bgStyle: 'gradient-radial',
    itemStyle: 'emoji',
    preview: { bg: 'radial-gradient(circle, #fdf6ff, #e8d5f5)', accent: '#b05ce6', text: '#4a2060' },
  },
  {
    id: 'bold-red',
    name: 'Bold Red',
    colors: { bg:'#c0392b', bg2:'#8e1010', accent:'#ffffff', title:'#ffffff', item:'#ffe4e1', number:'#fff', card:'rgba(255,255,255,0.15)' },
    bgStyle: 'gradient-diagonal',
    itemStyle: 'card',
    preview: { bg: 'linear-gradient(135deg, #c0392b, #8e1010)', accent: '#fff', text: '#fff' },
  },
  {
    id: 'purple-haze',
    name: 'Purple',
    colors: { bg:'#2d1b69', bg2:'#11998e', accent:'#a855f7', title:'#ffffff', item:'#e9d5ff', number:'#a855f7', card:'rgba(168,85,247,0.12)' },
    bgStyle: 'gradient-diagonal',
    itemStyle: 'numbered',
    preview: { bg: 'linear-gradient(135deg, #2d1b69, #11998e)', accent: '#a855f7', text: '#fff' },
  },
  {
    id: 'gold',
    name: 'Gold',
    colors: { bg:'#1a1200', bg2:'#3d2b00', accent:'#f5c518', title:'#f5c518', item:'#fff8dc', number:'#f5c518', card:'rgba(245,197,24,0.1)' },
    bgStyle: 'gradient-tb',
    itemStyle: 'icon',
    preview: { bg: 'linear-gradient(to bottom, #1a1200, #3d2b00)', accent: '#f5c518', text: '#f5c518' },
  },
];

// ── Canvas Sizes ───────────────────────────────────────────────
const SIZES = [
  { label: 'Square',    dim: '1080×1080', w: 1080, h: 1080 },
  { label: 'Portrait',  dim: '1080×1350', w: 1080, h: 1350 },
  { label: 'Story',     dim: '1080×1920', w: 1080, h: 1920 },
  { label: 'Landscape', dim: '1080×608',  w: 1080, h: 608  },
  { label: 'Twitter',   dim: '1600×900',  w: 1600, h: 900  },
  { label: 'FB Cover',  dim: '820×312',   w: 820,  h: 312  },
];

// ── Background Patterns (SVG, royalty-free) ────────────────────
const PATTERNS = [
  { id: 'none',       name: 'None',       previewBg: '#1a1a2e' },
  { id: 'dots',       name: 'Dots',       previewBg: '#1a1a2e' },
  { id: 'grid',       name: 'Grid',       previewBg: '#1a1a2e' },
  { id: 'diagonal',   name: 'Lines',      previewBg: '#1a1a2e' },
  { id: 'crosshatch', name: 'Crosshatch', previewBg: '#1a1a2e' },
  { id: 'hexagons',   name: 'Hexagons',   previewBg: '#1a1a2e' },
  { id: 'topo',       name: 'Topo',       previewBg: '#1a1a2e' },
  { id: 'plus',       name: 'Plus',       previewBg: '#1a1a2e' },
  { id: 'waves',      name: 'Waves',      previewBg: '#1a1a2e' },
  { id: 'circuit',    name: 'Circuit',    previewBg: '#1a1a2e' },
  { id: 'triangles',  name: 'Triangles',  previewBg: '#1a1a2e' },
];

// ── Royalty-Free Photos (picsum.photos — CC0/Public Domain) ────
// All images via picsum.photos use Creative Commons Zero licensed photos.
// Thumbnails use ?w=120&h=120, full canvas uses ?w={size}
const PHOTOS = [
  { seed: 'mountain-fog',     name: 'Mountain Fog',    cat: 'Nature'  },
  { seed: 'ocean-waves',      name: 'Ocean Waves',     cat: 'Nature'  },
  { seed: 'dark-forest',      name: 'Dark Forest',     cat: 'Nature'  },
  { seed: 'golden-hour',      name: 'Golden Hour',     cat: 'Nature'  },
  { seed: 'misty-valley',     name: 'Misty Valley',    cat: 'Nature'  },
  { seed: 'starry-night',     name: 'Starry Night',    cat: 'Nature'  },
  { seed: 'city-lights',      name: 'City Lights',     cat: 'Urban'   },
  { seed: 'neon-city',        name: 'Neon City',       cat: 'Urban'   },
  { seed: 'rooftop-view',     name: 'Rooftop View',    cat: 'Urban'   },
  { seed: 'rain-window',      name: 'Rainy Window',    cat: 'Moody'   },
  { seed: 'dark-concrete',    name: 'Dark Texture',    cat: 'Texture' },
  { seed: 'marble-stone',     name: 'Marble',          cat: 'Texture' },
  { seed: 'abstract-ink',     name: 'Ink Abstract',    cat: 'Abstract'},
  { seed: 'cosmic-purple',    name: 'Cosmic',          cat: 'Abstract'},
  { seed: 'bokeh-lights',     name: 'Bokeh',           cat: 'Abstract'},
  { seed: 'tropical-leaves',  name: 'Tropical',        cat: 'Nature'  },
];

function photoThumbUrl(seed) {
  return `https://picsum.photos/seed/${seed}/120/120`;
}
function photoFullUrl(seed) {
  return `https://picsum.photos/seed/${seed}/${state.size.w}/${state.size.h}`;
}

// ── Pattern CSS Builder ────────────────────────────────────────
function getPatternCSS(id, colorHex) {
  if (id === 'none') return null;
  const c = colorHex || '#ffffff';
  const E = s => encodeURIComponent(s);

  const svgs = {
    dots:
      `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><circle cx='3' cy='3' r='1.5' fill='${c}'/></svg>`,
    grid:
      `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='40'><path d='M40 0L0 0 0 40' fill='none' stroke='${c}' stroke-width='0.75'/></svg>`,
    diagonal:
      `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><line x1='0' y1='20' x2='20' y2='0' stroke='${c}' stroke-width='0.75'/></svg>`,
    crosshatch:
      `<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20'><line x1='0' y1='20' x2='20' y2='0' stroke='${c}' stroke-width='0.5'/><line x1='0' y1='0' x2='20' y2='20' stroke='${c}' stroke-width='0.5'/></svg>`,
    hexagons:
      `<svg xmlns='http://www.w3.org/2000/svg' width='52' height='90'><polygon points='26,2 50,15 50,43 26,56 2,43 2,15' fill='none' stroke='${c}' stroke-width='1'/><polygon points='26,57 50,70 50,90' fill='none' stroke='${c}' stroke-width='1'/><polygon points='26,57 2,70 2,90' fill='none' stroke='${c}' stroke-width='1'/></svg>`,
    topo:
      `<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><circle cx='60' cy='60' r='18' fill='none' stroke='${c}' stroke-width='0.75'/><circle cx='60' cy='60' r='36' fill='none' stroke='${c}' stroke-width='0.75'/><circle cx='60' cy='60' r='54' fill='none' stroke='${c}' stroke-width='0.75'/><ellipse cx='0' cy='0' rx='28' ry='18' fill='none' stroke='${c}' stroke-width='0.75'/><ellipse cx='0' cy='0' rx='52' ry='40' fill='none' stroke='${c}' stroke-width='0.75'/><ellipse cx='120' cy='120' rx='28' ry='18' fill='none' stroke='${c}' stroke-width='0.75'/><ellipse cx='120' cy='120' rx='52' ry='40' fill='none' stroke='${c}' stroke-width='0.75'/></svg>`,
    plus:
      `<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 5 v14 M5 12 h14' stroke='${c}' stroke-width='1' fill='none' stroke-linecap='round'/></svg>`,
    waves:
      `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='20'><path d='M0,10 Q10,0 20,10 T40,10 T60,10 T80,10' stroke='${c}' stroke-width='0.75' fill='none'/></svg>`,
    circuit:
      `<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M0,20 H20 M20,0 V20 M20,20 H40 M40,20 V40 M40,40 H60' stroke='${c}' stroke-width='0.75' fill='none'/><circle cx='20' cy='20' r='2.5' fill='${c}'/><circle cx='40' cy='40' r='2.5' fill='${c}'/><path d='M0,50 H10 M10,50 V30 M10,30 H30 M30,30 V10 M30,10 H60' stroke='${c}' stroke-width='0.75' fill='none'/><circle cx='10' cy='30' r='2.5' fill='${c}'/><circle cx='30' cy='10' r='2.5' fill='${c}'/></svg>`,
    triangles:
      `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='52'><polygon points='15,2 28,24 2,24' fill='none' stroke='${c}' stroke-width='0.75'/><polygon points='15,52 28,30 2,30' fill='none' stroke='${c}' stroke-width='0.75'/></svg>`,
  };

  const svg = svgs[id];
  if (!svg) return null;
  return `url("data:image/svg+xml,${E(svg)}")`;
}

// ── Text Effect CSS ────────────────────────────────────────────
function getTextShadow(effect, accentColor) {
  switch (effect) {
    case 'shadow':
      return 'text-shadow: 0 2px 12px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.4)';
    case 'glow':
      return `text-shadow: 0 0 24px ${accentColor}cc, 0 0 8px ${accentColor}88`;
    case 'outline':
      return `text-shadow: -1px -1px 0 rgba(0,0,0,0.7), 1px -1px 0 rgba(0,0,0,0.7), -1px 1px 0 rgba(0,0,0,0.7), 1px 1px 0 rgba(0,0,0,0.7)`;
    default:
      return '';
  }
}

// ── Init ────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  buildDesignGrid();
  buildSizeGrid();
  buildItemList();
  buildPatternGrid();
  buildPhotoGrid();
  syncUIFromState();
  render();
  applyZoom();
});

// ── Build Design Grid ──────────────────────────────────────────
function buildDesignGrid() {
  const grid = document.getElementById('designGrid');
  grid.innerHTML = DESIGNS.map(d => {
    const p = d.preview;
    return `<div class="design-thumb ${d.id === state.design ? 'active' : ''}"
      data-id="${d.id}"
      style="background:${p.bg}; color:${p.text}; border: 2px solid ${d.id === state.design ? '#6c63ff' : 'transparent'}"
      onclick="applyDesign('${d.id}')">
      <div>
        <div style="color:${p.accent};font-size:8px;font-weight:700;margin-bottom:2px">●●●</div>
        ${d.name}
      </div>
    </div>`;
  }).join('');
}

// ── Build Size Grid ────────────────────────────────────────────
function buildSizeGrid() {
  const grid = document.getElementById('sizeGrid');
  grid.innerHTML = SIZES.map(s => `
    <button class="size-btn ${s.w === state.size.w && s.h === state.size.h ? 'active' : ''}"
      onclick="applySize(${s.w},${s.h},this)">
      <span class="size-label">${s.label}</span>
      <span class="size-dim">${s.dim}</span>
    </button>
  `).join('');
}

// ── Build Item List ────────────────────────────────────────────
function buildItemList() {
  const container = document.getElementById('itemList');
  container.innerHTML = state.items.map((text, i) => `
    <div class="item-entry" data-index="${i}">
      <span class="item-drag" title="drag">⠿</span>
      <input type="text" value="${escHtml(text)}"
        oninput="updateItem(${i}, this.value)"
        placeholder="Item ${i+1}">
      <button class="item-remove" onclick="removeItem(${i})">×</button>
    </div>
  `).join('');
}

function addItem() {
  state.items.push('New list item');
  buildItemList();
  render();
}
function removeItem(i) {
  if (state.items.length <= 1) return;
  state.items.splice(i, 1);
  buildItemList();
  render();
}
function updateItem(i, val) {
  state.items[i] = val;
  render();
}

// ── Build Pattern Grid ─────────────────────────────────────────
function buildPatternGrid() {
  const grid = document.getElementById('patternGrid');
  const color = state.bgOverlay.patternColor;
  grid.innerHTML = PATTERNS.map(p => {
    const isNone = p.id === 'none';
    const patCss = isNone ? 'none' : getPatternCSS(p.id, color);
    const active  = state.bgOverlay.patternId === p.id && state.bgOverlay.type === 'pattern';
    const noneActive = p.id === 'none' && state.bgOverlay.type !== 'pattern' && state.bgOverlay.type !== 'photo' && state.bgOverlay.type !== 'custom';
    const isActive = active || (isNone && state.bgOverlay.type === 'none');

    return `<div class="bgi-thumb ${isActive ? 'active' : ''}"
      style="background:#1a1a2e; background-image:${patCss || 'none'}; background-repeat:repeat;"
      onclick="applyPattern('${p.id}', this)"
      title="${p.name}">
      <span>${p.name}</span>
    </div>`;
  }).join('');
}

// ── Build Photo Grid ───────────────────────────────────────────
function buildPhotoGrid() {
  const grid = document.getElementById('photoGrid');
  grid.innerHTML = PHOTOS.map(ph => {
    const active = state.bgOverlay.type === 'photo' && state.bgOverlay.photoSeed === ph.seed;
    return `<div class="bgi-thumb bgi-photo ${active ? 'active' : ''}"
      style="background-image:url('${photoThumbUrl(ph.seed)}'); background-size:cover; background-position:center;"
      onclick="applyPhoto('${ph.seed}', this)"
      title="${ph.name}">
      <span>${ph.name}</span>
    </div>`;
  }).join('');
}

// ── Background Overlay Handlers ────────────────────────────────
function switchBgiTab(tab, btn) {
  ['Pattern','Photo','Custom'].forEach(t => {
    document.getElementById('bgiTab' + t).style.display = 'none';
  });
  document.querySelectorAll('.bgi-tab').forEach(b => b.classList.remove('active'));
  document.getElementById('bgiTab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = '';
  btn.classList.add('active');
}

function applyPattern(id, el) {
  state.bgOverlay.type = id === 'none' ? 'none' : 'pattern';
  state.bgOverlay.patternId = id;
  document.querySelectorAll('#patternGrid .bgi-thumb').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  render();
}

function applyPhoto(seed, el) {
  state.bgOverlay.type = 'photo';
  state.bgOverlay.photoSeed = seed;
  document.querySelectorAll('#photoGrid .bgi-thumb').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  render();
}

function applyCustomBg() {
  const url = document.getElementById('bgCustomUrl').value.trim();
  state.bgOverlay.type = url ? 'custom' : 'none';
  state.bgOverlay.customUrl = url;
  render();
}

function applyBgOverlay() {
  const opEl = document.getElementById('bgOverlayOpacity');
  state.bgOverlay.opacity = parseInt(opEl.value) / 100;
  document.getElementById('bgOverlayOpacityVal').textContent = opEl.value + '%';
  state.bgOverlay.blend = document.getElementById('bgOverlayBlend').value;
  render();
}

function applyPatternColor() {
  state.bgOverlay.patternColor = document.getElementById('patternColor').value;
  document.getElementById('patternColorHex').value = state.bgOverlay.patternColor;
  buildPatternGrid();
  render();
}

// ── Build Overlay HTML ─────────────────────────────────────────
function buildBgOverlayHTML() {
  const ov = state.bgOverlay;
  if (ov.type === 'none') return '';

  const opacity = ov.opacity;
  const blend   = ov.blend;
  const base    = `position:absolute; inset:0; pointer-events:none; z-index:0; opacity:${opacity}; mix-blend-mode:${blend};`;

  if (ov.type === 'pattern') {
    const css = getPatternCSS(ov.patternId, ov.patternColor);
    if (!css) return '';
    return `<div style="${base} background-image:${css}; background-repeat:repeat;"></div>`;
  }

  if (ov.type === 'photo') {
    const url = photoFullUrl(ov.photoSeed);
    return `<div style="${base} overflow:hidden;"><img src="${url}" crossorigin="anonymous" style="width:100%; height:100%; object-fit:cover; display:block; position:absolute; inset:0; border-radius:0;"></div>`;
  }

  if (ov.type === 'custom' && ov.customUrl) {
    return `<div style="${base} overflow:hidden;"><img src="${escHtml(ov.customUrl)}" crossorigin="anonymous" style="width:100%; height:100%; object-fit:cover; display:block; position:absolute; inset:0;"></div>`;
  }

  return '';
}

// ── Text Effect Handler ────────────────────────────────────────
function applyTextEffect() {
  state.textEffect = document.getElementById('textEffect').value;
  render();
}

function applyLetterSpacing() {
  state.titleLetterSpacing = document.getElementById('titleLetterSpacing').value;
  render();
}

// ── Sync UI → State ────────────────────────────────────────────
function syncUIFromState() {
  document.getElementById('fontFamily').value     = state.font;
  document.getElementById('titleFontSize').value  = state.titleSize;
  document.getElementById('itemFontSize').value   = state.itemSize;
  document.getElementById('titleWeight').value    = state.titleWeight;
  document.getElementById('itemWeight').value     = state.itemWeight;
  document.getElementById('bgStyle').value        = state.bgStyle;
  document.getElementById('itemStyle').value      = state.itemStyle;
  document.getElementById('canvasPadding').value  = state.padding;
  document.getElementById('itemGap').value        = state.gap;
  document.getElementById('showDividers').checked = state.showDividers;
  document.getElementById('showWatermark').checked= state.showWatermark;
  document.getElementById('watermarkText').value  = state.watermarkText;
  document.getElementById('postTitle').value      = state.title;
  document.getElementById('postSubtitle').value   = state.subtitle;
  document.getElementById('listEmoji').value      = state.listEmoji;
  document.getElementById('itemsPerSlide').value  = state.itemsPerSlide;
  document.getElementById('showProgress').checked = state.showProgress;
  document.getElementById('textEffect').value     = state.textEffect;
  document.getElementById('titleLetterSpacing').value = state.titleLetterSpacing;

  // bg overlay
  document.getElementById('bgOverlayOpacity').value = Math.round(state.bgOverlay.opacity * 100);
  document.getElementById('bgOverlayOpacityVal').textContent = Math.round(state.bgOverlay.opacity * 100) + '%';
  document.getElementById('bgOverlayBlend').value = state.bgOverlay.blend;
  document.getElementById('patternColor').value = state.bgOverlay.patternColor;
  document.getElementById('patternColorHex').value = state.bgOverlay.patternColor;

  // colors
  const cp = ['Bg','Bg2','Accent','Title','Item','Number','Card'];
  cp.forEach(k => {
    const lk = k.charAt(0).toLowerCase() + k.slice(1);
    const v = lk === 'bg2' ? state.colors.bg2 : state.colors[lk] || state.colors[lk.toLowerCase()];
    const el = document.getElementById('color'+k);
    const hex = document.getElementById('color'+k+'Hex');
    if (el && v) { el.value = v; }
    if (hex && v) { hex.value = v; }
  });

  updateBgColor2Visibility();
  updateEmojiVisibility();
  updateWatermarkVisibility();
}

// ── Apply Design Preset ────────────────────────────────────────
function applyDesign(id) {
  const d = DESIGNS.find(x => x.id === id);
  if (!d) return;
  state.design = id;
  Object.assign(state.colors, d.colors);
  state.bgStyle = d.bgStyle;
  state.itemStyle = d.itemStyle;

  ['Bg','Accent','Title','Item','Number','Card'].forEach(k => {
    const lk = k.charAt(0).toLowerCase() + k.slice(1);
    const v = state.colors[lk] || state.colors[lk.toLowerCase()];
    const el = document.getElementById('color'+k);
    const hex = document.getElementById('color'+k+'Hex');
    if (el && v) { el.value = toHex(v); }
    if (hex && v) { hex.value = toHex(v); }
  });
  if (state.colors.bg2) {
    document.getElementById('colorBg2').value = toHex(state.colors.bg2);
    document.getElementById('colorBg2Hex').value = toHex(state.colors.bg2);
  }
  document.getElementById('bgStyle').value = state.bgStyle;
  document.getElementById('itemStyle').value = state.itemStyle;

  updateBgColor2Visibility();
  updateEmojiVisibility();
  buildDesignGrid();
  render();
}

function toHex(c) {
  if (!c || c.startsWith('rgba') || c.startsWith('radial') || c.startsWith('linear')) return '#000000';
  if (c.startsWith('#')) return c;
  return c;
}

// ── Apply Size ─────────────────────────────────────────────────
function applySize(w, h, btn) {
  state.size = { w, h };
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  render();
  fitZoom();
}
function applyCustomSize() {
  const w = parseInt(document.getElementById('customW').value);
  const h = parseInt(document.getElementById('customH').value);
  if (w >= 100 && h >= 100) {
    state.size = { w, h };
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    render();
    fitZoom();
  }
}

// ── Apply Font ─────────────────────────────────────────────────
function applyFont() {
  state.font = document.getElementById('fontFamily').value;
  render();
}
function applyFontSizes() {
  state.titleSize  = parseInt(document.getElementById('titleFontSize').value) || 32;
  state.itemSize   = parseInt(document.getElementById('itemFontSize').value) || 18;
  state.titleWeight = document.getElementById('titleWeight').value;
  state.itemWeight  = document.getElementById('itemWeight').value;
  render();
}

// ── Apply Colors ───────────────────────────────────────────────
function applyColors() {
  state.colors.bg     = document.getElementById('colorBg').value;
  state.colors.accent = document.getElementById('colorAccent').value;
  state.colors.title  = document.getElementById('colorTitle').value;
  state.colors.item   = document.getElementById('colorItem').value;
  state.colors.number = document.getElementById('colorNumber').value;
  state.colors.card   = document.getElementById('colorCard').value;

  ['Bg','Accent','Title','Item','Number','Card'].forEach(k => {
    const el = document.getElementById('color'+k);
    const hex = document.getElementById('color'+k+'Hex');
    if (el && hex) hex.value = el.value;
  });
  render();
}

function syncColorFromHex(colorId, hexId) {
  const hex = document.getElementById(hexId).value;
  if (/^#[0-9a-fA-F]{6}$/.test(hex)) {
    document.getElementById(colorId).value = hex;
    if (hexId === 'patternColorHex') { applyPatternColor(); return; }
    applyColors();
    applyBackground();
  }
}

// ── Apply Background ───────────────────────────────────────────
function applyBackground() {
  state.bgStyle = document.getElementById('bgStyle').value;
  state.colors.bg  = document.getElementById('colorBg').value;
  state.colors.bg2 = document.getElementById('colorBg2').value;
  document.getElementById('colorBg2Hex').value = state.colors.bg2;
  updateBgColor2Visibility();
  render();
}

function updateBgColor2Visibility() {
  const show = state.bgStyle !== 'solid';
  document.getElementById('bgColor2Field').style.display = show ? '' : 'none';
}

// ── Apply Item Style ───────────────────────────────────────────
function applyItemStyle() {
  state.itemStyle = document.getElementById('itemStyle').value;
  state.listEmoji = document.getElementById('listEmoji').value || '✅';
  updateEmojiVisibility();
  render();
}
function updateEmojiVisibility() {
  document.getElementById('emojiField').style.display = state.itemStyle === 'emoji' ? '' : 'none';
}

// ── Apply Layout ───────────────────────────────────────────────
function applyLayout() {
  state.padding      = parseInt(document.getElementById('canvasPadding').value) || 40;
  state.gap          = parseInt(document.getElementById('itemGap').value) || 16;
  state.showDividers = document.getElementById('showDividers').checked;
  state.showWatermark= document.getElementById('showWatermark').checked;
  state.watermarkText= document.getElementById('watermarkText').value;
  updateWatermarkVisibility();
  render();
}
function updateWatermarkVisibility() {
  document.getElementById('watermarkField').style.display = state.showWatermark ? '' : 'none';
}

// ── Apply Content ──────────────────────────────────────────────
function applyContent() {
  state.title    = document.getElementById('postTitle').value;
  state.subtitle = document.getElementById('postSubtitle').value;
  render();
}

// ── Title Align ────────────────────────────────────────────────
function setTitleAlign(btn) {
  document.querySelectorAll('.align-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  state.titleAlign = btn.dataset.align;
  render();
}

// ── Carousel Mode ──────────────────────────────────────────────
function toggleCarouselMode() {
  state.carouselMode = !state.carouselMode;
  state.currentSlide = 0;
  document.getElementById('carouselControls').style.display = state.carouselMode ? '' : 'none';
  document.getElementById('carouselBtnText').textContent = state.carouselMode ? 'Back to Single' : 'Split to Carousel';
  render();
}

function renderCarousel() {
  state.itemsPerSlide = parseInt(document.getElementById('itemsPerSlide').value) || 3;
  state.showProgress  = document.getElementById('showProgress').checked;
  render();
}

function prevSlide() {
  if (state.currentSlide > 0) { state.currentSlide--; render(); }
}
function nextSlide() {
  const total = getSlides().length;
  if (state.currentSlide < total - 1) { state.currentSlide++; render(); }
}

function getSlides() {
  const slides = [];
  if (!state.carouselMode) return [state.items];
  slides.push(null);
  for (let i = 0; i < state.items.length; i += state.itemsPerSlide) {
    slides.push(state.items.slice(i, i + state.itemsPerSlide));
  }
  slides.push('cta');
  return slides;
}

// ── Render ─────────────────────────────────────────────────────
function render() {
  const slides = getSlides();
  const total  = slides.length;
  const canvas = document.getElementById('canvas');

  canvas.style.width  = state.size.w + 'px';
  canvas.style.height = state.size.h + 'px';
  canvas.style.fontFamily = `'${state.font}', sans-serif`;

  const bg = buildBg();
  canvas.style.background = bg;

  const slideData = slides[state.currentSlide] || slides[0];
  canvas.innerHTML = buildSlideHTML(slideData, state.currentSlide, total);

  updateDots(total);
  document.getElementById('slideIndicator').textContent = `${state.currentSlide + 1} / ${total}`;
}

function buildBg() {
  const { bg, bg2 } = state.colors;
  switch (state.bgStyle) {
    case 'gradient-lr':       return `linear-gradient(to right, ${bg}, ${bg2})`;
    case 'gradient-tb':       return `linear-gradient(to bottom, ${bg}, ${bg2})`;
    case 'gradient-radial':   return `radial-gradient(circle at 50% 30%, ${bg}, ${bg2})`;
    case 'gradient-diagonal': return `linear-gradient(135deg, ${bg}, ${bg2})`;
    default:                  return bg;
  }
}

function buildSlideHTML(slideData, slideIndex, totalSlides) {
  const p   = state.padding;
  const gap = state.gap;
  const C   = state.colors;
  const overlay = buildBgOverlayHTML();

  if (slideData === null) {
    return `${overlay}<div class="canvas-inner" style="padding:${p}px; justify-content:center; gap:${gap}px; position:relative; z-index:1; height:100%">
      ${buildTitleBlock()}
      ${buildProgressDots(slideIndex, totalSlides)}
      ${buildWatermark()}
    </div>`;
  }

  if (slideData === 'cta') {
    const ts = getTextShadow(state.textEffect, C.accent);
    return `${overlay}<div class="canvas-inner" style="padding:${p}px; justify-content:center; align-items:center; text-align:center; gap:${gap}px; position:relative; z-index:1; height:100%">
      <div class="canvas-title" style="font-size:${state.titleSize * 0.85}px; font-weight:${state.titleWeight}; color:${C.title}; text-align:center; letter-spacing:${state.titleLetterSpacing}em; ${ts}">
        Save this for later! 🔖
      </div>
      <div class="canvas-subtitle" style="font-size:${state.itemSize}px; color:${C.item}; text-align:center; margin-top:12px">
        Follow for more tips like this.
      </div>
      <div style="width:60px; height:4px; background:${C.accent}; border-radius:2px; margin-top:16px"></div>
      ${buildProgressDots(slideIndex, totalSlides)}
      ${buildWatermark()}
    </div>`;
  }

  const items = Array.isArray(slideData) ? slideData : state.items;
  const startIndex = state.carouselMode ? (slideIndex - 1) * state.itemsPerSlide : 0;
  const itemsHTML = items.map((text, localIdx) => buildItem(text, startIndex + localIdx, localIdx, items.length)).join('');
  const showTitle = !state.carouselMode || slideIndex === 1;

  return `${overlay}<div class="canvas-inner" style="padding:${p}px; gap:${gap}px; position:relative; z-index:1; height:100%">
    ${showTitle
      ? buildTitleBlock()
      : `<div style="font-size:${state.titleSize * 0.55}px; font-weight:700; color:${C.accent}; opacity:0.7; letter-spacing:${state.titleLetterSpacing}em">${escHtml(state.title)}</div>`
    }
    <div class="items-list" style="gap:${gap}px; display:flex; flex-direction:column; margin-top:${gap}px; flex:1">
      ${itemsHTML}
    </div>
    ${state.carouselMode && state.showProgress ? buildProgressDots(slideIndex, totalSlides) : ''}
    ${buildWatermark()}
  </div>`;
}

function buildTitleBlock() {
  const C  = state.colors;
  const ts = getTextShadow(state.textEffect, C.accent);
  const ls = parseFloat(state.titleLetterSpacing) || -0.02;
  const accentBarAlign = state.titleAlign === 'center'
    ? 'margin-left:auto; margin-right:auto;'
    : state.titleAlign === 'right' ? 'margin-left:auto;' : '';

  return `<div>
    <div class="canvas-title" style="font-size:${state.titleSize}px; font-weight:${state.titleWeight}; color:${C.title}; text-align:${state.titleAlign}; letter-spacing:${ls}em; line-height:1.1; ${ts}">
      ${escHtml(state.title)}
    </div>
    ${state.subtitle
      ? `<div class="canvas-subtitle" style="font-size:${state.itemSize * 0.9}px; color:${C.item}; text-align:${state.titleAlign}; margin-top:8px; letter-spacing:0.01em; opacity:0.85">
          ${escHtml(state.subtitle)}
        </div>`
      : ''}
    <div style="width:48px; height:4px; background:${C.accent}; border-radius:2px; margin-top:14px; ${accentBarAlign}"></div>
  </div>`;
}

function buildItem(text, globalIdx, localIdx, total) {
  const C     = state.colors;
  const num   = globalIdx + 1;
  const isLast = localIdx === total - 1;
  const ts    = getTextShadow(state.textEffect, C.accent);

  let prefix   = '';
  let wrapOpen = '', wrapClose = '';

  switch (state.itemStyle) {
    case 'numbered':
      prefix = `<span style="color:${C.number}; font-size:${state.itemSize * 1.2}px; font-weight:900; min-width:${state.itemSize * 1.6}px; line-height:1.45; flex-shrink:0; ${ts}">${num}</span>`;
      break;
    case 'bullet':
      prefix = `<span style="color:${C.accent}; font-size:${state.itemSize * 0.65}px; padding-top:${state.itemSize * 0.35}px; flex-shrink:0; line-height:1">●</span>`;
      break;
    case 'emoji':
      prefix = `<span style="font-size:${state.itemSize}px; flex-shrink:0; line-height:1.45">${state.listEmoji}</span>`;
      break;
    case 'icon':
      prefix = `<span style="background:${C.accent}22; color:${C.accent}; width:${state.itemSize * 1.85}px; height:${state.itemSize * 1.85}px; border-radius:${state.itemSize * 0.4}px; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:${state.itemSize * 0.72}px; flex-shrink:0; border:1px solid ${C.accent}44; ${ts}">${num}</span>`;
      break;
    case 'card':
      wrapOpen  = `<div style="background:${C.card}; border-radius:${state.itemSize * 0.55}px; padding:${state.itemSize * 0.65}px ${state.itemSize * 0.8}px; display:flex; align-items:flex-start; gap:${state.itemSize * 0.65}px; backdrop-filter:blur(4px);">`;
      wrapClose = `</div>`;
      prefix    = `<span style="color:${C.number}; font-size:${state.itemSize * 1.1}px; font-weight:900; min-width:${state.itemSize * 1.5}px; flex-shrink:0; line-height:1.45; ${ts}">${num}</span>`;
      break;
  }

  const divider = state.showDividers && !isLast && state.itemStyle !== 'card'
    ? `<hr style="border:none; border-top:1px solid ${C.accent}22; margin:0">`
    : '';

  return `<div>
    ${wrapOpen}
    <div style="display:flex; align-items:flex-start; gap:${state.itemSize * 0.65}px">
      ${prefix}
      <span style="font-size:${state.itemSize}px; font-weight:${state.itemWeight}; color:${C.item}; line-height:1.5; flex:1; letter-spacing:0.005em; ${ts}">${escHtml(text)}</span>
    </div>
    ${wrapClose}
    ${divider}
  </div>`;
}

function buildProgressDots(current, total) {
  if (!state.showProgress) return '';
  const dots = Array.from({length: total}, (_, i) =>
    `<div style="width:6px; height:6px; border-radius:50%; background:${i === current ? state.colors.title : state.colors.title + '33'};"></div>`
  ).join('');
  return `<div style="display:flex; gap:5px; justify-content:center; margin-top:auto; padding-top:10px;">${dots}</div>`;
}

function buildWatermark() {
  if (!state.showWatermark) return '';
  return `<div style="position:absolute; bottom:14px; right:18px; font-size:${Math.max(11, state.size.w * 0.012)}px; color:${state.colors.item}; opacity:0.4; letter-spacing:0.04em; z-index:2">${escHtml(state.watermarkText)}</div>`;
}

// ── Dots ───────────────────────────────────────────────────────
function updateDots(total) {
  const dotsEl = document.getElementById('carousel-dots');
  if (!state.carouselMode || total <= 1) { dotsEl.innerHTML = ''; return; }
  dotsEl.innerHTML = Array.from({length: total}, (_, i) =>
    `<div class="dot ${i === state.currentSlide ? 'active' : ''}" onclick="goToSlide(${i})"></div>`
  ).join('');
}
function goToSlide(i) {
  state.currentSlide = i;
  render();
}

// ── Zoom ───────────────────────────────────────────────────────
function zoom(delta) {
  state.zoom = Math.max(0.1, Math.min(3, state.zoom + delta));
  applyZoom();
}
function resetZoom() { fitZoom(); }
function fitZoom() {
  const area = document.getElementById('preview-area');
  const aw = area.clientWidth - 80;
  const ah = area.clientHeight - 80;
  const zw = aw / state.size.w;
  const zh = ah / state.size.h;
  state.zoom = Math.min(zw, zh, 1);
  applyZoom();
}
function applyZoom() {
  document.getElementById('canvas-container').style.transform = `scale(${state.zoom})`;
  document.getElementById('zoomLevel').textContent = Math.round(state.zoom * 100) + '%';
}

// ── Export ─────────────────────────────────────────────────────
async function exportImage(format) {
  const exportType = document.querySelector('input[name="exportType"]:checked').value;
  if (exportType === 'single' || !state.carouselMode) {
    await captureAndDownload(format, `listicle.${format}`);
  } else {
    await captureAndDownload(format, `listicle-slide-${state.currentSlide + 1}.${format}`);
  }
}

async function exportZip() {
  const zip = new JSZip();
  const slides = getSlides();
  const total  = slides.length;
  const exportType = document.querySelector('input[name="exportType"]:checked').value;

  if (exportType === 'single' || !state.carouselMode) {
    const jpgBlob = await captureBlob('jpeg');
    const pngBlob = await captureBlob('png');
    zip.file('listicle.jpg', jpgBlob);
    zip.file('listicle.png', pngBlob);
  } else {
    for (let i = 0; i < total; i++) {
      state.currentSlide = i;
      render();
      await sleep(150);
      const blob = await captureBlob('png');
      zip.file(`slide-${String(i+1).padStart(2,'0')}.png`, blob);
    }
    state.currentSlide = 0;
    render();
  }

  const content = await zip.generateAsync({ type: 'blob' });
  triggerDownload(content, 'listicle-export.zip');
}

async function captureAndDownload(format, filename) {
  showExportOverlay(true);
  try {
    const blob = await captureBlob(format === 'jpg' ? 'jpeg' : 'png');
    triggerDownload(blob, filename);
  } finally {
    showExportOverlay(false);
  }
}

async function captureBlob(format) {
  const canvas = document.getElementById('canvas');
  const origTransform = canvas.parentElement.style.transform;
  canvas.parentElement.style.transform = 'scale(1)';

  // Wait for any overlay images to load
  const imgs = canvas.querySelectorAll('img');
  await Promise.all(Array.from(imgs).map(img =>
    img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r; })
  ));

  const opts = {
    scale: 2,
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    logging: false,
    width: state.size.w,
    height: state.size.h,
    imageTimeout: 8000,
  };

  let blob;
  try {
    const c = await html2canvas(canvas, opts);
    blob = await new Promise(res => {
      const mime = format === 'jpeg' ? 'image/jpeg' : 'image/png';
      c.toBlob(res, mime, 0.95);
    });
  } finally {
    canvas.parentElement.style.transform = origTransform;
  }
  return blob;
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function showExportOverlay(show) {
  let el = document.getElementById('export-overlay');
  if (show && !el) {
    el = document.createElement('div');
    el.id = 'export-overlay';
    el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;z-index:9999;color:#fff;font-size:18px;font-weight:600;font-family:Inter,sans-serif;flex-direction:column;gap:12px;';
    el.innerHTML = '<div>Exporting…</div><div style="font-size:13px;opacity:0.6">Loading background images if needed</div>';
    document.body.appendChild(el);
  } else if (!show && el) {
    el.remove();
  }
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Utilities ──────────────────────────────────────────────────
function escHtml(s) {
  return String(s)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

window.addEventListener('load', () => { setTimeout(fitZoom, 100); });
window.addEventListener('resize', fitZoom);
