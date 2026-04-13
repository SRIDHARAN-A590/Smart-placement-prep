// ─── Profile Page ─────────────────────────────────────────────────────────────
Pages.profile = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }
  const user = Auth.getUser();

  const achievements = [
    { icon:'🔥', title:'14-Day Streak', desc:'Practiced 14 days in a row!' },
    { icon:'⚡', title:'Speed Solver', desc:'Solved 5 problems in under 30 mins' },
    { icon:'🎯', title:'First Mock Test', desc:'Completed your first mock test' },
    { icon:'🏆', title:'Top Performer', desc:'Top 10% in Aptitude category' },
  ];

  const bodyHTML = `
    <!-- Profile Header -->
    <div class="card fade-up" style="padding:36px;margin-bottom:28px;
      background:linear-gradient(135deg,rgba(108,99,255,0.15),rgba(0,212,255,0.05));
      border-color:var(--border);display:flex;align-items:center;gap:32px;flex-wrap:wrap;">
      <div style="position:relative;">
        <div style="width:90px;height:90px;border-radius:50%;
          background:linear-gradient(135deg,var(--primary),var(--secondary));
          display:flex;align-items:center;justify-content:center;
          font-size:34px;font-weight:800;border:3px solid var(--bg2);">
          ${user.avatar}
        </div>
        <div style="position:absolute;bottom:4px;right:4px;width:18px;height:18px;
          background:var(--success);border-radius:50%;border:2px solid var(--bg2);"></div>
      </div>
      <div style="flex:1;">
        <h1 style="font-size:28px;font-weight:900;margin-bottom:4px;">${user.name}</h1>
        <div style="color:var(--text2);font-size:14px;margin-bottom:12px;">
          📧 ${user.email} &nbsp;·&nbsp; 🎓 ${user.college} &nbsp;·&nbsp; ${user.branch} &nbsp;·&nbsp; ${user.year}
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          ${user.targetCompanies.map(c=>`
            <span style="background:var(--primary);color:#fff;border-radius:8px;padding:4px 12px;font-size:12px;font-weight:600;">
              🎯 ${c}
            </span>
          `).join('')}
        </div>
      </div>
      <button class="btn btn-secondary" onclick="showToast('✏️ Profile editing coming soon!','info')">
        ✏️ Edit Profile
      </button>
    </div>

    <!-- Stats Row -->
    <div class="grid-4 fade-up-1" style="margin-bottom:28px;">
      ${[
        {icon:'🔥',val:user.streak,label:'Day Streak'},
        {icon:'📝',val:user.testsCompleted,label:'Tests Completed'},
        {icon:'⚡',val:user.questionsAttempted,label:'Questions Done'},
        {icon:'🏆',val:user.progress.overall+'%',label:'Overall Progress'},
      ].map(s=>`
        <div class="card" style="text-align:center;padding:22px;">
          <div style="font-size:28px;margin-bottom:8px;">${s.icon}</div>
          <div style="font-size:28px;font-weight:800;font-family:'Outfit',sans-serif;">${s.val}</div>
          <div style="font-size:12px;color:var(--text3);margin-top:4px;">${s.label}</div>
        </div>
      `).join('')}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:28px;" class="fade-up-2">
      <!-- Skills -->
      <div class="card">
        <h2 style="font-size:18px;margin-bottom:20px;">🛠 Skills</h2>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-bottom:20px;">
          ${user.skills.map(s=>`
            <span style="background:linear-gradient(135deg,rgba(108,99,255,0.2),rgba(0,212,255,0.1));
              border:1px solid var(--border);border-radius:10px;padding:8px 16px;
              font-size:13px;font-weight:600;">${s}</span>
          `).join('')}
        </div>
        <button class="btn btn-secondary btn-sm" onclick="showToast('➕ Add skill feature coming soon!','info')">
          + Add Skill
        </button>
      </div>

      <!-- Progress -->
      <div class="card">
        <h2 style="font-size:18px;margin-bottom:20px;">📈 Preparation Progress</h2>
        ${Object.entries(user.progress).map(([key,val])=>`
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:13px;font-weight:500;text-transform:capitalize;">${key}</span>
              <span style="font-size:13px;font-weight:700;
                color:${val>=70?'var(--success)':val>=50?'var(--warning)':'var(--danger)'};">${val}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${val}%;
                background:${val>=70?'linear-gradient(90deg,var(--success),#00B87C)':
                val>=50?'linear-gradient(90deg,var(--warning),#FF8C00)':
                'linear-gradient(90deg,var(--danger),#FF6B6B)'};"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Achievements -->
    <div class="card fade-up-3">
      <h2 style="font-size:18px;margin-bottom:20px;">🏅 Achievements</h2>
      <div class="grid-4">
        ${achievements.map(a=>`
          <div style="text-align:center;padding:20px;background:var(--bg2);border-radius:14px;
            border:1px solid var(--border2);transition:var(--transition);"
            onmouseover="this.style.borderColor='var(--primary)';this.style.transform='translateY(-3px)'"
            onmouseout="this.style.borderColor='var(--border2)';this.style.transform='translateY(0)'">
            <div style="font-size:32px;margin-bottom:8px;">${a.icon}</div>
            <div style="font-weight:700;font-size:13px;margin-bottom:4px;">${a.title}</div>
            <div style="font-size:11px;color:var(--text3);">${a.desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  renderDashboardLayout('profile', 'My Profile', bodyHTML);
};
