// ─── Dashboard Page ───────────────────────────────────────────────────────────
Pages.dashboard = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }
  const user = Auth.getUser();

  const aiTasks = [
    { icon:'🧠', title:'Complete DP Module', priority:'High', time:'~2 hrs', tag:'Coding' },
    { icon:'📊', title:'Attempt TCS NQT Mock', priority:'High', time:'~3 hrs', tag:'Mock Test' },
    { icon:'📖', title:'Revise OS Concepts', priority:'Medium', time:'~1 hr', tag:'Technical' },
    { icon:'⚡', title:'10 Aptitude Questions', priority:'Low', time:'~30 min', tag:'Aptitude' },
  ];

  const activity = [
    { icon:'✅', text:'Completed Array Challenges', time:'2 hours ago', color:'var(--success)' },
    { icon:'📝', text:'Attempted Infosys Mock Test', time:'Yesterday', color:'var(--primary)' },
    { icon:'🏢', text:'Viewed Amazon Company Guide', time:'2 days ago', color:'var(--warning)' },
    { icon:'💬', text:'Read 3 Interview Experiences', time:'3 days ago', color:'var(--secondary)' },
  ];

  const bodyHTML = `
    <!-- Welcome Row -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;flex-wrap:wrap;gap:16px;">
      <div class="fade-up">
        <h2 style="font-size:28px;font-weight:800;margin-bottom:4px;">Good Morning, ${user.name.split(' ')[0]} 👋</h2>
        <p style="color:var(--text2);">You're on a <span style="color:var(--warning);font-weight:700;">${user.streak}-day streak</span>! Keep it up and crack that dream company.</p>
      </div>
      <div class="fade-up" style="display:flex;gap:12px;">
        <button class="btn btn-primary" onclick="Router.navigate('mock-test')">📝 Take Mock Test</button>
        <button class="btn btn-secondary" onclick="Router.navigate('practice')">⚡ Practice Now</button>
      </div>
    </div>

    <!-- Stat Cards -->
    <div class="grid-4 fade-up-1" style="margin-bottom:32px;">
      ${[
        {icon:'🔥',label:'Day Streak',val:user.streak,sub:'Keep going!',color:'var(--warning)'},
        {icon:'📝',label:'Tests Done',val:user.testsCompleted,sub:'This month',color:'var(--primary)'},
        {icon:'⚡',label:'Questions',val:user.questionsAttempted,sub:'Attempted',color:'var(--success)'},
        {icon:'🏆',label:'Overall Score',val:user.progress.overall+'%',sub:'vs 58% avg',color:'var(--secondary)'},
      ].map(s=>`
        <div class="card" style="display:flex;align-items:center;gap:16px;padding:20px;">
          <div style="width:52px;height:52px;border-radius:14px;background:${s.color}20;display:flex;
            align-items:center;justify-content:center;font-size:26px;flex-shrink:0;">${s.icon}</div>
          <div>
            <div style="font-size:26px;font-weight:800;font-family:'Outfit',sans-serif;">${s.val}</div>
            <div style="font-size:13px;font-weight:600;">${s.label}</div>
            <div style="font-size:11px;color:var(--text3);">${s.sub}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <!-- Progress + AI Tasks Row -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:32px;" class="fade-up-2">
      <!-- Progress -->
      <div class="card">
        <h3 style="margin-bottom:20px;font-size:17px;">📈 Preparation Progress</h3>
        ${Object.entries(user.progress).map(([key,val])=>`
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
              <span style="font-size:13px;font-weight:500;text-transform:capitalize;">${key}</span>
              <span style="font-size:13px;font-weight:700;color:var(--primary-light);">${val}%</span>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width:${val}%;"></div>
            </div>
          </div>
        `).join('')}
        <div style="margin-top:20px;padding:14px;background:var(--bg2);border-radius:12px;text-align:center;">
          <span style="font-size:13px;color:var(--text2);">🎯 Target: <strong style="color:var(--success);">Amazon SDE-1</strong> · Readiness: <strong style="color:var(--warning);">65%</strong></span>
        </div>
      </div>

      <!-- AI Recommended Tasks -->
      <div class="card">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:20px;">
          <span style="font-size:20px;">🤖</span>
          <h3 style="font-size:17px;">AI Recommended Tasks</h3>
          <span style="margin-left:auto;font-size:11px;color:var(--primary-light);background:rgba(108,99,255,0.15);
            padding:3px 10px;border-radius:20px;">Personalized</span>
        </div>
        ${aiTasks.map((t,i)=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
            background:var(--bg2);margin-bottom:8px;cursor:pointer;transition:var(--transition);"
            onmouseover="this.style.background='var(--card2)'" onmouseout="this.style.background='var(--bg2)'">
            <span style="font-size:20px;">${t.icon}</span>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;">${t.title}</div>
              <div style="font-size:11px;color:var(--text3);">${t.time} · <span class="badge badge-${t.priority==='High'?'hard':t.priority==='Medium'?'medium':'easy'}" style="font-size:10px;padding:2px 8px;">${t.priority}</span></div>
            </div>
            <span style="font-size:11px;background:rgba(108,99,255,0.15);color:var(--primary-light);padding:3px 8px;border-radius:8px;">${t.tag}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Target Companies + Recent Activity -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;" class="fade-up-3">
      <!-- Target Companies -->
      <div class="card">
        <h3 style="margin-bottom:20px;font-size:17px;">🏢 Target Companies</h3>
        ${APP_DATA.companies.filter(c=>user.targetCompanies.includes(c.name)).map(c=>`
          <div onclick="Router.navigate('company','${c.id}')" style="display:flex;align-items:center;gap:12px;padding:12px;
            border-radius:12px;background:var(--bg2);margin-bottom:8px;cursor:pointer;transition:var(--transition);"
            onmouseover="this.style.background='var(--card2)'" onmouseout="this.style.background='var(--bg2)'">
            ${companyLogo(c.logo, c.name, 28)}
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:600;">${c.name}</div>
              <div style="font-size:11px;color:var(--text3);">${c.focus.join(' · ')}</div>
            </div>
            <span class="badge badge-${c.difficulty.toLowerCase()}">${c.difficulty}</span>
            <span style="color:var(--text3);">→</span>
          </div>
        `).join('')}
        <button class="btn btn-secondary btn-sm" onclick="Router.navigate('companies')" style="width:100%;justify-content:center;margin-top:8px;">
          Browse All Companies
        </button>
      </div>

      <!-- Recent Activity -->
      <div class="card">
        <h3 style="margin-bottom:20px;font-size:17px;">🕐 Recent Activity</h3>
        ${activity.map(a=>`
          <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:12px;
            background:var(--bg2);margin-bottom:8px;">
            <div style="width:36px;height:36px;border-radius:10px;background:${a.color}20;display:flex;
              align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">${a.icon}</div>
            <div style="flex:1;">
              <div style="font-size:13px;font-weight:500;">${a.text}</div>
              <div style="font-size:11px;color:var(--text3);">${a.time}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  renderDashboardLayout('dashboard', 'Dashboard', bodyHTML);
};
