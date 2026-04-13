// ─── Companies Page ───────────────────────────────────────────────────────────
Pages.companies = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

  const filterBar = `
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px;" id="company-filters">
      ${['All','Easy','Medium','Hard'].map((f,i)=>`
        <button class="btn btn-${i===0?'primary':'secondary'} btn-sm" 
          onclick="filterCompanies('${f}',this)" data-filter="${f}">${f}</button>
      `).join('')}
      <div style="margin-left:auto;display:flex;gap:8px;flex-wrap:wrap;">
        ${['DSA','Aptitude','Core CS','Embedded','Full Stack'].map(tag=>`
          <button class="btn btn-secondary btn-sm" onclick="filterByFocus('${tag}',this)"
            style="border-radius:20px;">${tag}</button>
        `).join('')}
      </div>
    </div>
  `;

  const cardsHTML = APP_DATA.companies.map(c => `
    <div class="card company-card fade-up" data-difficulty="${c.difficulty}" data-focus="${c.focus.join(',')}"
      style="cursor:pointer;padding:0;overflow:hidden;" onclick="Router.navigate('company','${c.id}')">
      <!-- Card Header -->
      <div style="padding:24px 24px 16px;background:linear-gradient(135deg,${c.color}18,${c.color}05);
        border-bottom:1px solid var(--border2);position:relative;">
        <div style="position:absolute;top:16px;right:16px;">${diffBadge(c.difficulty)}</div>
        <div style="font-size:42px;margin-bottom:10px;">${companyLogo(c.logo, c.name, 48)}</div>
        <h3 style="font-size:18px;font-weight:700;">${c.name}</h3>
        <div style="font-size:12px;color:var(--text3);margin-top:2px;">📦 ${c.package}</div>
      </div>
      <!-- Card Body -->
      <div style="padding:16px 24px 20px;">
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;">
          ${c.focus.map(f=>`<span style="background:rgba(108,99,255,0.12);color:var(--primary-light);
            border-radius:8px;padding:3px 10px;font-size:12px;font-weight:500;">${f}</span>`).join('')}
        </div>
        <div style="font-size:12px;color:var(--text3);margin-bottom:14px;">
          📋 ${c.rounds.length} Interview Rounds · ${c.skills.length} Key Skills
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation();Router.navigate('company','${c.id}')">
            View Guide →
          </button>
          <span style="font-size:12px;color:var(--text3);">${c.rounds[0].name}</span>
        </div>
      </div>
    </div>
  `).join('');

  renderDashboardLayout('companies', 'Companies', `
    <div class="fade-up" style="margin-bottom:8px;">
      <div class="section-title">Company Preparation Guides</div>
      <p class="section-subtitle">Detailed interview prep for ${APP_DATA.companies.length} top companies</p>
    </div>
    ${filterBar}
    <div class="grid-3" id="companies-grid">${cardsHTML}</div>
  `);
};

function diffBadge(d) {
  const map = { Easy:'badge-easy', Medium:'badge-medium', Hard:'badge-hard' };
  return `<span class="badge ${map[d]}">${d}</span>`;
}

function filterCompanies(difficulty, btn) {
  document.querySelectorAll('#company-filters .btn').forEach(b => {
    if (['All','Easy','Medium','Hard'].includes(b.dataset.filter)) {
      b.className = 'btn btn-secondary btn-sm';
    }
  });
  btn.className = 'btn btn-primary btn-sm';
  document.querySelectorAll('.company-card').forEach(card => {
    const show = difficulty === 'All' || card.dataset.difficulty === difficulty;
    card.style.display = show ? '' : 'none';
  });
}

function filterByFocus(focus, btn) {
  const isActive = btn.style.background === 'var(--primary)';
  document.querySelectorAll('#company-filters .btn').forEach(b => { b.style.background = ''; b.style.color = ''; });
  if (!isActive) {
    btn.style.background = 'var(--primary)';
    btn.style.color = '#fff';
    document.querySelectorAll('.company-card').forEach(card => {
      card.style.display = card.dataset.focus.includes(focus) ? '' : 'none';
    });
  } else {
    document.querySelectorAll('.company-card').forEach(card => { card.style.display = ''; });
  }
}
