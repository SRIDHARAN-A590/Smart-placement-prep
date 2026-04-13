// ─── Student Experiences Page ─────────────────────────────────────────────────
Pages.experiences = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

  const companies = ['All', ...new Set(APP_DATA.experiences.map(e=>e.company))];

  renderDashboardLayout('experiences', 'Student Experiences', `
    <div class="fade-up" style="margin-bottom:8px;">
      <div class="section-title">Real Interview Experiences</div>
      <p class="section-subtitle">Insights from students who cracked their dream companies</p>
    </div>

    <!-- Stats Row -->
    <div class="grid-4 fade-up-1" style="margin-bottom:32px;">
      ${[
        {icon:'💬',val:'9+',label:'Experiences Shared'},
        {icon:'🏢',val:'9',label:'Companies Covered'},
        {icon:'⭐',val:'4.6',label:'Avg Rating'},
        {icon:'👁',val:'50K+',label:'Views This Month'},
      ].map(s=>`
        <div class="card" style="text-align:center;padding:20px;">
          <div style="font-size:28px;margin-bottom:8px;">${s.icon}</div>
          <div style="font-size:24px;font-weight:800;font-family:'Outfit',sans-serif;">${s.val}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:2px;">${s.label}</div>
        </div>
      `).join('')}
    </div>

    <!-- Filters -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:24px;" id="exp-filters">
      ${companies.map((c,i)=>`
        <button class="btn btn-${i===0?'primary':'secondary'} btn-sm"
          onclick="filterExperiences('${c}',this)" style="border-radius:20px;">${c}</button>
      `).join('')}
    </div>

    <!-- Share Experience Banner -->
    <div class="card fade-up-1" style="margin-bottom:28px;padding:24px 28px;
      background:linear-gradient(135deg,rgba(0,229,160,0.12),rgba(108,99,255,0.08));
      border-color:rgba(0,229,160,0.3);display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
      <div style="font-size:40px;">🎤</div>
      <div style="flex:1;">
        <h3 style="font-size:18px;margin-bottom:4px;">Got Placed? Share Your Experience!</h3>
        <p style="color:var(--text2);font-size:13px;">Help future students by sharing your interview journey.</p>
      </div>
      <button class="btn btn-success" onclick="showToast('📝 Experience submission form coming soon!','info')">
        Share Experience
      </button>
    </div>

    <!-- Experience Cards -->
    <div class="grid-3" id="exp-grid">
      ${APP_DATA.experiences.map((e,i)=>`
        <div class="card fade-up" data-company="${e.company}" style="display:flex;flex-direction:column;gap:14px;">
          <!-- Header -->
          <div style="display:flex;align-items:center;gap:12px;">
            <div class="avatar" style="width:44px;height:44px;font-size:15px;">${e.avatar}</div>
            <div style="flex:1;">
              <div style="font-weight:700;font-size:15px;">${e.name}</div>
              <div style="font-size:12px;color:var(--text3);">${e.role} · ${e.year}</div>
            </div>
            <div style="text-align:right;">
              <div style="background:rgba(108,99,255,0.15);color:var(--primary-light);border-radius:8px;
                padding:4px 10px;font-size:12px;font-weight:600;">${e.company}</div>
              <div class="stars" style="font-size:12px;margin-top:4px;">${'★'.repeat(e.rating)}${'☆'.repeat(5-e.rating)}</div>
            </div>
          </div>
          <!-- Body -->
          <p style="color:var(--text2);font-size:13px;line-height:1.7;flex:1;">${e.summary}</p>
          <!-- Tags -->
          <div>${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
          <!-- Action -->
          <button class="btn btn-secondary btn-sm" onclick="showToast('📖 Full experience by ${e.name} loading...','info')">
            Read Full Experience →
          </button>
        </div>
      `).join('')}
    </div>
  `);
};

function filterExperiences(company, btn) {
  document.querySelectorAll('#exp-filters .btn').forEach(b=>b.className='btn btn-secondary btn-sm');
  btn.className='btn btn-primary btn-sm';
  document.querySelectorAll('#exp-grid .card').forEach(card=>{
    card.style.display = company==='All'||card.dataset.company===company ? '':'none';
  });
}
