const CATEGORIES = [
  { id: 'restaurants',        name: 'Restaurants & Diners',  icon: '\u{1F37D}' },
  { id: 'mcdonalds',          name: "McDonald's",            icon: '\u{1F354}' },
  { id: 'elevator',           name: 'Elevator',              icon: '\u{1F3EC}' },
  { id: 'walmart',            name: 'Walmart',               icon: '\u{1F6CD}' },
  { id: 'target',             name: 'Target',                icon: '\u{1F3AF}' },
  { id: 'walgreens',          name: 'Walgreens',             icon: '\u{1F48A}' },
  { id: 'publix',             name: 'Publix',                icon: '\u{1F96D}' },
  { id: 'other-stores',       name: 'Other Stores',          icon: '\u{1F6D2}' },
  { id: 'car-driving',        name: 'Car & Driving',         icon: '\u{1F697}' },
  { id: 'beach-water',        name: 'Beach & Water',         icon: '\u{1F3D6}' },
  { id: 'kissing-dares',      name: 'Kissing Dares',         icon: '\u{1F48B}' },
  { id: 'stranger-dares',     name: 'Stranger Dares',        icon: '\u{1F464}' },
  { id: 'performance-social', name: 'Performance & Social Media', icon: '\u{1F4F1}' },
  { id: 'cops-authority',     name: 'Cops & Authority',      icon: '\u{1F46E}' },
  { id: 'party-drinking',     name: 'Party & Drinking',      icon: '\u{1F37E}' },
  { id: 'pranks-mischief',    name: 'Pranks & Mischief',     icon: '\u{1F3B2}' },
  { id: 'appearance-body',    name: 'Appearance & Body Dares', icon: '\u{1F487}' },
  { id: 'around-town',        name: 'Around Town',           icon: '\u{1F3DB}' },
  { id: 'big-challenges',     name: 'Big Challenges',        icon: '\u{1F3C6}' },
  { id: 'team-bonding',       name: 'Team Bonding',          icon: '\u{1F91D}' },
  { id: 'wild-cards',         name: 'Wild Cards',            icon: '\u{1F0CF}' },
];

const CATEGORY_RULES = [
  { id: 'restaurants',        patterns: ['restaurant', 'diner', 'waiter', 'waitress', 'dinner', 'waitstaff', 'bistro', 'cafe', 'dining'] },
  { id: 'mcdonalds',          patterns: ["mcdonald", "mcdonald's", 'big mac', 'happy meal', 'mcdonalds'] },
  { id: 'elevator',           patterns: ['elevator', 'lift', 'escalator'] },
  { id: 'walmart',            patterns: ['walmart', 'wal-mart'] },
  { id: 'target',             patterns: ['target'] },
  { id: 'walgreens',          patterns: ['walgreens', 'wal-greens'] },
  { id: 'publix',             patterns: ['publix'] },
  { id: 'other-stores',       patterns: ['victoria secret', 'gas station', '7-eleven', '7 eleven', 'shopping cart', 'cashier', 'aisle', 'store', 'shop', 'checkout', 'buy ', 'purchase', 'mall', 'retail'] },
  { id: 'car-driving',        patterns: ['car ', 'drive ', 'driving', 'vehicle', 'road', 'ride ', 'traffic', 'highway', 'parking lot', 'side of the road'] },
  { id: 'beach-water',        patterns: ['beach', 'ocean', 'pool', 'water', 'swim', 'lake', 'sea', 'hot tub', 'fountain', 'pool ', 'ocean '] },
  { id: 'kissing-dares',      patterns: ['kiss', 'make out', 'makeout', 'smooch', 'make-out'] },
  { id: 'stranger-dares',     patterns: ['stranger', 'random person', 'unknown person', 'ask a stranger', 'someone you don\'t know'] },
  { id: 'performance-social', patterns: ['post ', 'insta', 'story', 'tiktok', 'tik tok', 'music video', 'thirst trap', 'performance', 'show', 'public stunt', 'social media', 'youtube', 'snapchat'] },
  { id: 'cops-authority',     patterns: ['cop', 'officer', 'police', 'authority', 'sheriff', 'speeding ticket', 'tazed', 'taze', 'handcuff', 'get arrested', 'strip club'] },
  { id: 'party-drinking',     patterns: ['party', 'drink', 'shot ', 'shots', 'beer', 'alcohol', 'drunk', 'keg', 'shotgun', 'slurpee', 'slushee', 'sprite and banana', '711'] },
  { id: 'pranks-mischief',    patterns: ['prank', 'mischief', 'trick', 'joke', 'tp ', 'toilet paper', 'ding dong ditch', 'fake proposal', 'fake birthday', 'public break up', 'break up', 'stage a public'] },
  { id: 'appearance-body',    patterns: ['hair', 'shave', 'tattoo', 'piercing', 'body', 'dye ', 'nails', 'wax', 'bald', 'hickey', 'eyebrow', 'buzz cut', 'bleach', 'body shot', 'lipstick', 'forehead', 'butt', 'spit shot', 'appearance', 'makeover'] },
  { id: 'around-town',        patterns: ['town', 'local', 'city', 'visit ', 'go to ', 'downtown', 'neighborhood', 'school', 'hotel', 'library', 'church', 'castle', 'golf course', 'cemetery', 'firehouse', 'rollercoaster', 'trampoline', 'tall tree', 'baseball field', 'farm animal', 'house being built', 'neighbors house', 'roof of a house'] },
  { id: 'big-challenges',     patterns: ['sky dive', 'skydive', 'steal a street sign', 'laxatives', 'kidnap', 'dunk a basketball', 'run out of gas', 'superman a roach', 'tip over a cow', 'get tazed', 'big challenge', 'extreme', 'difficult', 'hard challenge', 'car wash with windows down', 'public dumpster'] },
  { id: 'team-bonding',       patterns: ['team bonding', 'bonding', 'team building', 'group activity', 'team activity', 'teammate', 'team member', 'team dinner', 'team selfie', 'group pic', 'group swim', 'group picture', 'each team member', 'full team', '4 team members', '3 team members', 'opponents team', 'opponent', 'opponent for', '4 opponents', 'opponents'] },
  { id: 'wild-cards',         patterns: [] },
];

function categorizeTask(text) {
  const lower = text.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.id === 'wild-cards') continue;
    for (const pattern of rule.patterns) {
      if (lower.includes(pattern)) return rule.id;
    }
  }
  return 'wild-cards';
}

function parseTask(line, index) {
  const trimmed = line.trim();
  if (!trimmed) return null;

  let bonusPoints = 0;
  let bonusCondition = '';
  let lineForBasePoints = trimmed;
  const bonusMatch = trimmed.match(/\(\+(\d+)\)/);
  let bonusStartIdx = -1;
  if (bonusMatch) {
    bonusPoints = parseInt(bonusMatch[1], 10);
    bonusStartIdx = trimmed.indexOf(bonusMatch[0]);
    lineForBasePoints = trimmed.substring(0, bonusStartIdx) + trimmed.substring(bonusStartIdx + bonusMatch[0].length);
  }

  let basePoints = 0;
  let taskText = lineForBasePoints.trim();
  const allBaseMatches = [...lineForBasePoints.matchAll(/\((\d+)\)/g)];
  if (allBaseMatches.length > 0) {
    const lastMatch = allBaseMatches[allBaseMatches.length - 1];
    basePoints = parseInt(lastMatch[1], 10);
    taskText = lineForBasePoints.substring(0, lastMatch.index).trim();
  }

  if (bonusMatch && allBaseMatches.length > 0) {
    const baseEndInOriginal = allBaseMatches[allBaseMatches.length - 1].index + allBaseMatches[allBaseMatches.length - 1][0].length;
    if (bonusStartIdx > baseEndInOriginal) {
      bonusCondition = trimmed.substring(baseEndInOriginal, bonusStartIdx).trim();
    }
  }

  const categoryId = categorizeTask(taskText);

  return {
    id: `task-${index}`,
    text: taskText,
    basePoints,
    bonusPoints,
    bonusCondition,
    categoryId,
  };
}

let tasks = [];
let state = {};

const STORAGE_KEY = 'seniorScav_state';

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {
    state = {};
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function toggleTask(taskId) {
  const wasCompleted = state[taskId];
  state[taskId] = !wasCompleted;
  saveState();
  updateTaskVisuals(taskId);

  if (state[taskId] && !wasCompleted) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      spawnConfetti(task.basePoints > 15 ? 20 : 10);
      showFloatingPoints(task.basePoints);
    }
  }
}

function toggleBonus(taskId) {
  const key = taskId + '-bonus';
  const wasCompleted = state[key];
  state[key] = !wasCompleted;
  saveState();
  updateHeaderAndCategoryStats(taskId);

  if (state[key] && !wasCompleted) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      spawnConfetti(8);
      showFloatingPoints(task.bonusPoints);
    }
  }
}

function resetAll() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  state = {};
  saveState();
  render();
}

function calculatePoints() {
  let total = 0;
  let completed = 0;
  for (const task of tasks) {
    if (state[task.id]) {
      total += task.basePoints;
      completed++;
    }
    if (task.bonusPoints && state[task.id + '-bonus']) {
      total += task.bonusPoints;
    }
  }
  return { total, completed };
}

function getCategoryStats(catId) {
  const catTasks = tasks.filter(t => t.categoryId === catId);
  let completed = 0;
  let pointsAvailable = 0;
  for (const t of catTasks) {
    pointsAvailable += t.basePoints + (t.bonusPoints || 0);
    if (state[t.id]) completed++;
  }
  return { total: catTasks.length, completed, pointsAvailable };
}

function getCategoryCompletionFraction(catId) {
  const catTasks = tasks.filter(t => t.categoryId === catId);
  if (catTasks.length === 0) return 0;
  let completed = 0;
  for (const t of catTasks) {
    if (state[t.id]) completed++;
  }
  return completed / catTasks.length;
}

function updateHeader() {
  const { total, completed } = calculatePoints();
  const totalTasks = tasks.length;
  const totalFraction = totalTasks ? completed / totalTasks : 0;

  const pointsEl = document.getElementById('pointsDisplay');
  const oldPoints = parseInt(pointsEl.textContent) || 0;
  pointsEl.textContent = total;
  if (oldPoints !== total) {
    pointsEl.classList.remove('pulse');
    void pointsEl.offsetWidth;
    pointsEl.classList.add('pulse');
  }

  document.getElementById('taskCount').textContent = `${completed} / ${totalTasks}`;
  updateProgressRing(totalFraction);
}

function updateCategoryStats(catId) {
  const catEl = document.querySelector(`[data-cat="${catId}"]`);
  if (!catEl) return;

  const stats = getCategoryStats(catId);
  const catFraction = getCategoryCompletionFraction(catId);
  const catPercent = Math.round(catFraction * 100);

  const fractionEl = catEl.querySelector('.cat-fraction');
  const pointsEl = catEl.querySelector('.cat-points');
  const progressFill = catEl.querySelector('.category-progress-fill');

  if (fractionEl) fractionEl.textContent = `${stats.completed}/${stats.total}`;
  if (pointsEl) pointsEl.textContent = `${stats.pointsAvailable}pts`;
  if (progressFill) progressFill.style.width = `${catPercent}%`;

  if (stats.completed > 0) {
    catEl.classList.add('has-completions');
  } else {
    catEl.classList.remove('has-completions');
  }
}

function updateTaskVisuals(taskId) {
  const taskRow = document.querySelector(`[data-task-id="${taskId}"]`);
  if (!taskRow) return;

  const wasCompleted = taskRow.classList.contains('completed');

  if (state[taskId]) {
    taskRow.classList.add('completed');
    if (!wasCompleted) {
      taskRow.classList.add('just-completed');
      setTimeout(() => taskRow.classList.remove('just-completed'), 600);
    }
  } else {
    taskRow.classList.remove('completed');
  }

  const task = tasks.find(t => t.id === taskId);
  if (task) {
    updateCategoryStats(task.categoryId);
  }
  updateHeader();
}

function updateHeaderAndCategoryStats(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    updateCategoryStats(task.categoryId);
  }
  updateHeader();
}

function updateProgressRing(fraction) {
  const circle = document.getElementById('progressRing');
  if (!circle) return;
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - fraction);
  circle.style.strokeDashoffset = offset;
}

/* Confetti */
function spawnConfetti(count = 12) {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#ff2d78', '#ff80a8', '#ffb700', '#ffe4ec', '#ff4d9e', '#ffd166'];
  const shapes = ['50%', '0%', '2px'];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.top = `${Math.random() * 40 + 10}%`;
    piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.width = `${Math.random() * 8 + 6}px`;
    piece.style.height = `${Math.random() * 8 + 6}px`;
    piece.style.animationDuration = `${Math.random() * 0.6 + 0.8}s`;
    piece.style.animationDelay = `${Math.random() * 0.2}s`;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 1500);
}

/* Floating Points */
function showFloatingPoints(points) {
  const header = document.querySelector('.header-inner');
  if (!header) return;

  const rect = header.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'float-pts';
  el.textContent = `+${points}`;
  el.style.left = `${rect.left + rect.width / 2}px`;
  el.style.top = `${rect.top + rect.height / 2}px`;
  document.body.appendChild(el);

  setTimeout(() => el.remove(), 1000);
}

function render() {
  const { total, completed } = calculatePoints();
  const totalTasks = tasks.length;
  const totalFraction = totalTasks ? completed / totalTasks : 0;

  const pointsEl = document.getElementById('pointsDisplay');
  const oldPoints = parseInt(pointsEl.textContent) || 0;
  pointsEl.textContent = total;
  if (oldPoints !== total) {
    pointsEl.classList.remove('pulse');
    void pointsEl.offsetWidth;
    pointsEl.classList.add('pulse');
  }

  document.getElementById('taskCount').textContent = `${completed} / ${totalTasks}`;
  updateProgressRing(totalFraction);

  const app = document.getElementById('app');
  const grouped = {};
  for (const cat of CATEGORIES) {
    grouped[cat.id] = [];
  }
  for (const task of tasks) {
    grouped[task.categoryId].push(task);
  }

  let html = '';
  let categoryDelay = 0;

  for (const cat of CATEGORIES) {
    const catTasks = grouped[cat.id];
    const stats = getCategoryStats(cat.id);
    const isOpen = document.querySelector(`[data-cat="${cat.id}"]`)?.classList.contains('open') ?? (cat.id === 'restaurants');
    const hasCompletions = stats.completed > 0 ? ' has-completions' : '';
    const catFraction = getCategoryCompletionFraction(cat.id);
    const catPercent = Math.round(catFraction * 100);

    html += `<div class="category${isOpen ? ' open' : ''}${hasCompletions}" data-cat="${cat.id}" style="animation-delay: ${categoryDelay}ms">`;
    html += `<div class="category-header" onclick="toggleCategory('${cat.id}')">`;
    html += `<span class="category-emoji">${cat.icon}</span>`;
    html += `<div class="category-info">`;
    html += `<span class="category-name">${cat.name}</span>`;
    html += `<div class="category-progress-bar"><div class="category-progress-fill" style="width: ${catPercent}%"></div></div>`;
    html += `</div>`;
    html += `<span class="category-stats"><span class="cat-fraction">${stats.completed}/${stats.total}</span><span class="cat-points">${stats.pointsAvailable}pts</span></span>`;
    html += `<svg class="chevron" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>`;
    html += `</div>`;
    html += `<div class="category-body"><div class="category-body-inner">`;
    html += `<div class="category-divider"></div>`;

    let taskDelay = 0;
    for (let i = 0; i < catTasks.length; i++) {
      const task = catTasks[i];
      const checked = state[task.id] ? 'checked' : '';
      const bonusChecked = task.bonusPoints && state[task.id + '-bonus'] ? 'checked' : '';
      const completedClass = state[task.id] ? ' completed' : '';

      html += `<div class="task${completedClass}" data-task-id="${task.id}" style="animation-delay: ${taskDelay}ms">`;
      html += `<label class="checkbox-wrap"><input type="checkbox" ${checked} onchange="toggleTask('${task.id}')" aria-label="Complete task"><span class="checkbox-visual"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span></label>`;
      html += `<div class="task-content"><div class="task-text">${escapeHtml(task.text)}`;
      if (task.bonusCondition) {
        html += ` <span class="task-bonus-label">(${escapeHtml(task.bonusCondition)})</span>`;
      }
      html += `</div></div>`;
      html += `<div class="task-right">`;
      if (task.basePoints > 0) {
        html += `<span class="pts-badge">${task.basePoints} pts</span>`;
      }
      if (task.bonusPoints) {
        html += `<label class="checkbox-wrap bonus-wrap"><input type="checkbox" ${bonusChecked} onchange="toggleBonus('${task.id}')" aria-label="Complete bonus"><span class="checkbox-visual"><svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></span></label>`;
        html += `<span class="bonus-badge">+${task.bonusPoints}</span>`;
      }
      html += `</div>`;
      html += `</div>`;
      taskDelay += 30;
    }

    html += `</div></div></div>`;
    categoryDelay += 60;
  }

  app.innerHTML = html;
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function toggleCategory(catId) {
  const el = document.querySelector(`[data-cat="${catId}"]`);
  if (el) el.classList.toggle('open');
}

async function init() {
  loadState();

  try {
    const resp = await fetch('./tasks.txt');
    if (!resp.ok) throw new Error('Failed to load tasks.txt');
    const text = await resp.text();
    const lines = text.split('\n').filter(l => l.trim());
    tasks = lines.map((line, i) => parseTask(line, i)).filter(Boolean);
  } catch (e) {
    document.getElementById('app').innerHTML = '<div class="loading"><div class="loading-spinner"></div><span>Error loading tasks. Make sure tasks.txt is in the same directory.</span></div>';
    return;
  }

  render();

  const firstCat = document.querySelector('.category');
  if (firstCat) firstCat.classList.add('open');
}

/* Share / Export */
function generateShareText() {
  const { total, completed } = calculatePoints();
  const totalTasks = tasks.length;

  if (completed === 0) {
    return 'Nothing completed yet — get out there! \u{1F3C3}';
  }

  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  const timeStr = today.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  let text = `\u{1F49C}  S E N I O R   S C A V E N G E R  \u{1F49C}\n`;
  text += `\n`;
  text += `        ${total} pts   |   ${completed}/${totalTasks} tasks\n`;
  text += `        ${'━'.repeat(30)}\n`;
  text += `\n`;

  const grouped = {};
  for (const cat of CATEGORIES) {
    grouped[cat.id] = [];
  }
  for (const task of tasks) {
    if (state[task.id]) {
      grouped[task.categoryId].push(task);
    }
  }

  for (const cat of CATEGORIES) {
    const catTasks = grouped[cat.id];
    if (catTasks.length === 0) continue;

    const catPts = catTasks.reduce((sum, t) => {
      let pts = t.basePoints;
      if (t.bonusPoints && state[t.id + '-bonus']) pts += t.bonusPoints;
      return sum + pts;
    }, 0);

    text += `${cat.icon}  ${cat.name.toUpperCase()}  (+${catPts})\n`;
    text += `${'─'.repeat(28)}\n`;

    for (const task of catTasks) {
      let ptsStr = '';
      if (task.basePoints > 0) {
        ptsStr = `${task.basePoints} pts`;
      }
      if (task.bonusPoints && state[task.id + '-bonus']) {
        ptsStr = ptsStr ? `${task.basePoints + task.bonusPoints} pts (+${task.bonusPoints} bonus)` : `+${task.bonusPoints} bonus pts`;
      }
      text += `  \u{2705}  ${task.text}\n`;
      text += `      ${ptsStr}\n`;
    }
    text += `\n`;
  }

  text += `\u{1F3C6}  TOTAL: ${total} POINTS EARNED\n`;
  text += `\u{1F4C5}  ${dateStr} @ ${timeStr}\n`;
  text += `\n`;
  text += `Check it off. Rack it up. \u{1F48C}`;

  return text;
}

function openShareModal() {
  const modal = document.getElementById('shareModal');
  const body = document.getElementById('modalBody');
  const shareText = generateShareText();

  if (shareText === 'Nothing completed yet — get out there! \u{1F3C3}') {
    body.innerHTML = `<div class="modal-empty">${escapeHtml(shareText)}</div>`;
    document.getElementById('copyBtn').style.display = 'none';
  } else {
    body.innerHTML = `<textarea class="modal-textarea" id="shareTextarea" readonly>${escapeHtml(shareText)}</textarea>`;
    document.getElementById('copyBtn').style.display = '';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    const ta = document.getElementById('shareTextarea');
    if (ta) {
      ta.focus();
      ta.setSelectionRange(0, ta.value.length);
    }
  });

  const copyBtn = document.getElementById('copyBtn');
  copyBtn.textContent = 'Copy to Clipboard';
  copyBtn.classList.remove('copied');
}

function closeShareModal() {
  const modal = document.getElementById('shareModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

function copyShareText() {
  const textarea = document.getElementById('shareTextarea');
  if (!textarea) return;

  const copyBtn = document.getElementById('copyBtn');
  navigator.clipboard.writeText(textarea.value).then(() => {
    copyBtn.textContent = 'Copied! ✓';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy to Clipboard';
      copyBtn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    textarea.select();
    document.execCommand('copy');
    copyBtn.textContent = 'Copied! ✓';
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = 'Copy to Clipboard';
      copyBtn.classList.remove('copied');
    }, 2000);
  });
}

/* Event listeners */
document.getElementById('resetBtn').addEventListener('click', resetAll);
document.getElementById('shareBtn').addEventListener('click', openShareModal);
document.getElementById('modalClose').addEventListener('click', closeShareModal);
document.getElementById('copyBtn').addEventListener('click', copyShareText);
document.getElementById('shareModal').addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeShareModal();
});

/* Keyboard shortcut for modal */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('shareModal');
    if (modal.classList.contains('active')) {
      closeShareModal();
    }
  }
});

init();


