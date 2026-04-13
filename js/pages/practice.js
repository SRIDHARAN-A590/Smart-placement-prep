// ─── Practice Page ────────────────────────────────────────────────────────────
Pages.practice = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

  // Dropdown style (shared)
  const ddStyle = `appearance:none;-webkit-appearance:none;background:var(--card);color:var(--text);
    border:1px solid var(--border2);border-radius:10px;padding:8px 36px 8px 14px;font-size:13px;
    font-weight:600;cursor:pointer;outline:none;transition:var(--transition);
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat:no-repeat;background-position:right 12px center;`;

  function makeFilterBar(category, topics) {
    return `
      <div style="display:flex;gap:12px;margin-bottom:22px;flex-wrap:wrap;align-items:center;">
        <div style="display:flex;align-items:center;gap:8px;">
          <label style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Topic</label>
          <select id="${category}-topic-filter" onchange="applyPracticeFilter('${category}')" style="${ddStyle}">
            <option value="All">All Topics</option>
            ${topics.map(t => `<option value="${t}">${t}</option>`).join('')}
          </select>
        </div>
        <div style="display:flex;align-items:center;gap:8px;">
          <label style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Level</label>
          <select id="${category}-diff-filter" onchange="applyPracticeFilter('${category}')" style="${ddStyle}">
            <option value="All">All Levels</option>
            <option value="Easy">🟢 Easy</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Hard">🔴 Hard</option>
          </select>
        </div>
        <div style="margin-left:auto;font-size:13px;color:var(--text3);" id="${category}-count">
          ${APP_DATA.practice[category].length} topics
        </div>
      </div>
    `;
  }

  renderDashboardLayout('practice', 'Practice', `
    <div class="fade-up" style="margin-bottom:8px;">
      <div class="section-title">Practice Arena</div>
      <p class="section-subtitle">Sharpen your skills with curated question sets</p>
    </div>

    <!-- Category Tabs -->
    <div style="display:flex;gap:8px;margin-bottom:28px;background:var(--card);border-radius:14px;padding:6px;width:fit-content;" id="practice-tabs">
      ${[['aptitude','📊 Aptitude'],['coding','💻 Coding'],['technical','⚙️ Technical MCQs']].map(([id,label],i)=>`
        <button id="tab-${id}" onclick="switchPracticeTab('${id}')"
          class="btn btn-sm" style="${i===0?'background:var(--primary);color:#fff;':'color:var(--text2);background:transparent;'}
          border-radius:10px;font-weight:600;">
          ${label}
        </button>
      `).join('')}
    </div>

    <!-- Aptitude Section -->
    <div id="section-aptitude" class="practice-section">
      ${makeFilterBar('aptitude', ['Quantitative','Logical','Verbal'])}
      <div class="grid-3" id="aptitude-cards">
        ${APP_DATA.practice.aptitude.map(q=>practiceCard(q,'aptitude')).join('')}
      </div>
    </div>

    <!-- Coding Section -->
    <div id="section-coding" class="practice-section" style="display:none;">
      ${makeFilterBar('coding', ['Arrays','Strings','Stacks','Linked Lists','Trees','Graphs','DP','Algorithms','Recursion'])}
      <div class="grid-3" id="coding-cards">
        ${APP_DATA.practice.coding.map(q=>practiceCard(q,'coding')).join('')}
      </div>
    </div>

    <!-- Technical Section -->
    <div id="section-technical" class="practice-section" style="display:none;">
      ${makeFilterBar('technical', ['OS','DBMS','Networking','OOP','Design','DSA','Embedded'])}
      <div class="grid-3" id="technical-cards">
        ${APP_DATA.practice.technical.map(q=>practiceCard(q,'technical')).join('')}
      </div>
    </div>
  `);
};

function practiceCard(q, category) {
  const sourceColors = { 'IndiaBix':'#E65100', 'GeeksforGeeks':'#2E7D32', 'FacePrep':'#1565C0' };
  const srcColor = sourceColors[q.source] || 'var(--primary)';
  return `
    <div class="card fade-up" data-topic="${q.topic}" data-difficulty="${q.difficulty}" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
        <span style="background:rgba(108,99,255,0.12);color:var(--primary-light);border-radius:8px;
          padding:3px 10px;font-size:11px;font-weight:600;">${q.topic}</span>
        <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
      </div>
      <h3 style="font-size:15px;font-weight:700;margin-bottom:10px;line-height:1.4;">${q.title}</h3>
      <div style="display:flex;gap:16px;color:var(--text3);font-size:12px;margin-bottom:10px;">
        <span>📝 ${q.questions} questions</span>
        <span>⏱ ${q.duration}</span>
      </div>
      <div style="display:flex;align-items:center;gap:6px;margin-bottom:16px;">
        <span style="background:${srcColor}25;color:${srcColor};border:1px solid ${srcColor}40;
          border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">${q.source}</span>
        <span style="font-size:11px;color:var(--text3);">↗ Opens in new tab</span>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;"
        onclick="event.stopPropagation();startPractice('${q.url}','${q.title.replace(/'/g,'')}','${q.source}')">
        🚀 Start Practice
      </button>
    </div>
  `;
}

function switchPracticeTab(tab) {
  ['aptitude','coding','technical'].forEach(t => {
    document.getElementById('section-'+t).style.display = t===tab ? '' : 'none';
    const btn = document.getElementById('tab-'+t);
    btn.style.background = t===tab ? 'var(--primary)' : 'transparent';
    btn.style.color = t===tab ? '#fff' : 'var(--text2)';
  });
}

function applyPracticeFilter(category) {
  const topicVal = document.getElementById(`${category}-topic-filter`).value;
  const diffVal = document.getElementById(`${category}-diff-filter`).value;
  const cards = document.querySelectorAll(`#${category}-cards > .card`);
  let visible = 0;
  cards.forEach(card => {
    const topicMatch = topicVal === 'All' || card.dataset.topic === topicVal;
    const diffMatch = diffVal === 'All' || card.dataset.difficulty === diffVal;
    const show = topicMatch && diffMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const countEl = document.getElementById(`${category}-count`);
  if (countEl) countEl.textContent = `${visible} topic${visible !== 1 ? 's' : ''} found`;
}

function startPractice(url, title, source) {
  showToast(`🚀 Opening "${title}" on ${source}...`, 'success');
  setTimeout(() => {
    window.open(url, '_blank');
  }, 400);
}
