// ─── Practice Page ────────────────────────────────────────────────────────────
Pages.practice = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

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
      <div style="display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
        ${['All','Quantitative','Logical','Verbal'].map((f,i)=>`
          <button class="btn btn-${i===0?'primary':'secondary'} btn-sm"
            onclick="filterPractice('aptitude','${f}',this)">${f}</button>
        `).join('')}
      </div>
      <div class="grid-3" id="aptitude-cards">
        ${APP_DATA.practice.aptitude.map(q=>practiceCard(q,'aptitude')).join('')}
      </div>
    </div>

    <!-- Coding Section -->
    <div id="section-coding" class="practice-section" style="display:none;">
      <div style="display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
        ${['All','Arrays','Strings','Trees','Graphs','DP','Algorithms','Recursion'].map((f,i)=>`
          <button class="btn btn-${i===0?'primary':'secondary'} btn-sm"
            onclick="filterPractice('coding','${f}',this)">${f}</button>
        `).join('')}
      </div>
      <div class="grid-3" id="coding-cards">
        ${APP_DATA.practice.coding.map(q=>practiceCard(q,'coding')).join('')}
      </div>
    </div>

    <!-- Technical Section -->
    <div id="section-technical" class="practice-section" style="display:none;">
      <div style="display:flex;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
        ${['All','OS','DBMS','Networking','OOP','Design','DSA','Embedded'].map((f,i)=>`
          <button class="btn btn-${i===0?'primary':'secondary'} btn-sm"
            onclick="filterPractice('technical','${f}',this)">${f}</button>
        `).join('')}
      </div>
      <div class="grid-3" id="technical-cards">
        ${APP_DATA.practice.technical.map(q=>practiceCard(q,'technical')).join('')}
      </div>
    </div>
  `);
};

function practiceCard(q, category) {
  const diffColor = { Easy:'var(--success)', Medium:'var(--warning)', Hard:'var(--danger)' };
  return `
    <div class="card fade-up" data-topic="${q.topic}" data-difficulty="${q.difficulty}" style="cursor:pointer;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
        <span style="background:rgba(108,99,255,0.12);color:var(--primary-light);border-radius:8px;
          padding:3px 10px;font-size:11px;font-weight:600;">${q.topic}</span>
        <span class="badge badge-${q.difficulty.toLowerCase()}">${q.difficulty}</span>
      </div>
      <h3 style="font-size:15px;font-weight:700;margin-bottom:10px;line-height:1.4;">${q.title}</h3>
      <div style="display:flex;gap:16px;color:var(--text3);font-size:12px;margin-bottom:16px;">
        <span>📝 ${q.questions} questions</span>
        <span>⏱ ${q.duration}</span>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;justify-content:center;"
        onclick="showToast('⚡ Starting ${q.title.replace(/'/g,'')}...','info')">
        Start Practice
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

function filterPractice(category, filter, btn) {
  btn.closest('div').querySelectorAll('.btn').forEach(b => b.className='btn btn-secondary btn-sm');
  btn.className='btn btn-primary btn-sm';
  const cards = document.querySelectorAll(`#${category}-cards > .card`);
  cards.forEach(card => {
    const show = filter==='All' || card.dataset.topic===filter || card.dataset.difficulty===filter;
    card.style.display = show ? '' : 'none';
  });
}
