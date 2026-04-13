// ─── Mock Test Page ───────────────────────────────────────────────────────────
Pages.mockTest = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

  const ddStyle = `appearance:none;-webkit-appearance:none;background:var(--card);color:var(--text);
    border:1px solid var(--border2);border-radius:10px;padding:8px 36px 8px 14px;font-size:13px;
    font-weight:600;cursor:pointer;outline:none;transition:var(--transition);
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat:no-repeat;background-position:right 12px center;`;

  const companies = [...new Set(APP_DATA.mockTests.map(t=>t.company))];
  const sourceColors = { 'PrepInsta':'#E65100', 'GeeksforGeeks':'#2E7D32', 'IndiaBix':'#D84315', 'LeetCode':'#FFA000' };

  renderDashboardLayout('mock-test', 'Mock Tests', `
    <div class="fade-up" style="margin-bottom:8px;">
      <div class="section-title">Mock Test Center</div>
      <p class="section-subtitle">Simulate real company assessments with timed mock tests</p>
    </div>

    <!-- Timer UI Demo Banner -->
    <div class="card fade-up-1" style="margin-bottom:32px;padding:28px 32px;
      background:linear-gradient(135deg,rgba(108,99,255,0.2),rgba(0,212,255,0.08));
      border-color:var(--primary);display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
      <div>
        <div style="font-size:13px;color:var(--primary-light);font-weight:600;margin-bottom:4px;">
          🔴 LIVE SIMULATION
        </div>
        <h3 style="font-size:22px;font-weight:800;margin-bottom:6px;">In-Progress: Amazon Mock Assessment</h3>
        <p style="color:var(--text2);font-size:14px;">3 Problems · Medium-Hard · 90 minutes</p>
      </div>
      <div style="text-align:center;">
        <div style="font-size:48px;font-weight:900;font-family:'Outfit',sans-serif;
          background:linear-gradient(135deg,var(--warning),var(--danger));
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;
          line-height:1;" id="mock-timer">47:23</div>
        <div style="font-size:12px;color:var(--text3);margin-top:4px;">Time Remaining</div>
      </div>
      <div style="display:flex;gap:16px;flex-wrap:wrap;">
        <div style="text-align:center;padding:14px 20px;background:var(--bg2);border-radius:12px;">
          <div style="font-size:22px;font-weight:800;">1/3</div>
          <div style="font-size:11px;color:var(--text3);">Solved</div>
        </div>
        <div style="text-align:center;padding:14px 20px;background:var(--bg2);border-radius:12px;">
          <div style="font-size:22px;font-weight:800;color:var(--warning);">2</div>
          <div style="font-size:11px;color:var(--text3);">Remaining</div>
        </div>
      </div>
      <button class="btn btn-danger btn-sm" onclick="showToast('✅ Test submitted!','success')"
        style="background:linear-gradient(135deg,var(--danger),#C2185B);color:#fff;border:none;margin-left:auto;">
        Submit Test
      </button>
    </div>

    <!-- Dropdown Filters -->
    <div style="display:flex;gap:12px;margin-bottom:24px;flex-wrap:wrap;align-items:center;">
      <div style="display:flex;align-items:center;gap:8px;">
        <label style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Level</label>
        <select id="mock-diff-filter" onchange="applyMockFilters()" style="${ddStyle}">
          <option value="All">All Levels</option>
          <option value="Easy">🟢 Easy</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Hard">🔴 Hard</option>
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <label style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Company</label>
        <select id="mock-company-filter" onchange="applyMockFilters()" style="${ddStyle}">
          <option value="All">All Companies</option>
          ${companies.map(c=>`<option value="${c}">${c}</option>`).join('')}
        </select>
      </div>
      <div style="display:flex;align-items:center;gap:8px;">
        <label style="font-size:12px;color:var(--text3);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">Category</label>
        <select id="mock-cat-filter" onchange="applyMockFilters()" style="${ddStyle}">
          <option value="All">All Categories</option>
          <option value="Aptitude">📊 Aptitude</option>
          <option value="Coding">💻 Coding</option>
          <option value="Technical">⚙️ Technical</option>
        </select>
      </div>
      <div style="margin-left:auto;font-size:13px;color:var(--text3);" id="mock-count">
        ${APP_DATA.mockTests.length} tests available
      </div>
    </div>

    <div class="grid-2" id="mock-grid">
      ${APP_DATA.mockTests.map(t => {
        const srcColor = sourceColors[t.source] || 'var(--primary)';
        return `
        <div class="card fade-up" data-difficulty="${t.difficulty}" data-company="${t.company}" data-category="${t.category}"
          style="cursor:pointer;">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px;">
            <div>
              <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">${t.company}</div>
              <h3 style="font-size:16px;font-weight:700;">${t.title}</h3>
            </div>
            <span class="badge badge-${t.difficulty.toLowerCase()}">${t.difficulty}</span>
          </div>
          <div style="display:flex;gap:20px;color:var(--text2);font-size:13px;margin-bottom:12px;flex-wrap:wrap;">
            <span>⏱ ${t.duration} mins</span>
            <span>❓ ${t.questions} ${t.questions<10?'problems':'questions'}</span>
            <span>👥 ${(t.participants/1000).toFixed(1)}K attempted</span>
          </div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:14px;">
            <span style="background:${srcColor}25;color:${srcColor};border:1px solid ${srcColor}40;
              border-radius:6px;padding:2px 8px;font-size:10px;font-weight:700;">${t.source}</span>
            <span style="font-size:11px;color:var(--text3);">↗ Opens in new tab</span>
          </div>
          <!-- Rating Bar -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;">
              <span style="color:var(--text3);">Community Rating</span>
              <span style="color:var(--warning);font-weight:700;">${t.rating} ★</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${(t.rating/5)*100}%;
                background:linear-gradient(90deg,var(--warning),var(--success));"></div>
            </div>
          </div>
          <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;"
            onclick="event.stopPropagation();startMockTest(${t.id})">
            🚀 Start Test
          </button>
        </div>
      `}).join('')}
    </div>
  `);

  // Start timer animation
  startTimerAnimation();
};

function startTimerAnimation() {
  let secs = 47*60+23;
  const timerEl = document.getElementById('mock-timer');
  if (!timerEl) return;
  const interval = setInterval(()=>{
    secs--;
    if (secs < 0 || !document.getElementById('mock-timer')) { clearInterval(interval); return; }
    const m = Math.floor(secs/60), s = secs%60;
    if (timerEl) timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }, 1000);
}

function startMockTest(id) {
  const test = APP_DATA.mockTests.find(t=>t.id===id);
  if (test && test.url) {
    showToast(`🚀 Opening "${test.title}" on ${test.source}...`, 'success');
    setTimeout(() => { window.open(test.url, '_blank'); }, 400);
  }
}

function applyMockFilters() {
  const diff = document.getElementById('mock-diff-filter').value;
  const company = document.getElementById('mock-company-filter').value;
  const cat = document.getElementById('mock-cat-filter').value;
  const cards = document.querySelectorAll('#mock-grid > .card');
  let visible = 0;
  cards.forEach(card => {
    const dMatch = diff === 'All' || card.dataset.difficulty === diff;
    const cMatch = company === 'All' || card.dataset.company === company;
    const catMatch = cat === 'All' || card.dataset.category === cat;
    const show = dMatch && cMatch && catMatch;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  const countEl = document.getElementById('mock-count');
  if (countEl) countEl.textContent = `${visible} test${visible !== 1 ? 's' : ''} found`;
}
