// ─── Shared Layout Helpers ────────────────────────────────────────────────────
function renderSidebar(activePage) {
  const user = Auth.getUser();
  const navItems = [
    { id:'dashboard', icon:'🏠', label:'Home' },
    { id:'companies', icon:'🏢', label:'Companies' },
    { id:'practice', icon:'⚡', label:'Practice' },
    { id:'mock-test', icon:'📝', label:'Mock Tests' },
    { id:'experiences', icon:'💬', label:'Experiences' },
    { id:'profile', icon:'👤', label:'Profile' },
  ];
  return `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-text">🎯 PlacePrep AI</div>
        <div class="logo-sub">Smart Placement Guidance</div>
      </div>
      <nav class="sidebar-nav">
        ${navItems.map(n => `
          <div class="nav-item ${activePage===n.id?'active':''}" onclick="Router.navigate('${n.id}')">
            <span class="nav-icon">${n.icon}</span>
            <span>${n.label}</span>
          </div>
        `).join('')}
      </nav>
      <div style="padding:16px 20px;border-top:1px solid var(--border2);">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div class="avatar" style="width:32px;height:32px;font-size:12px;">${user?.avatar||'U'}</div>
          <div>
            <div style="font-size:13px;font-weight:600;">${user?.name||'Guest'}</div>
            <div style="font-size:11px;color:var(--text3);">${user?.college||''}</div>
          </div>
        </div>
        <button class="btn btn-secondary btn-sm" onclick="Auth.logout();Router.navigate('');" style="width:100%;justify-content:center;">Logout</button>
      </div>
    </aside>
  `;
}

function renderTopbar(title) {
  const user = Auth.getUser();
  return `
    <div class="topbar">
      <div style="display:flex;align-items:center;gap:16px;">
        <button id="mobile-menu-btn" onclick="document.getElementById('sidebar').classList.toggle('open')"
          style="display:none;background:none;border:none;color:var(--text);font-size:22px;cursor:pointer;">☰</button>
        <h1 style="font-size:20px;font-weight:700;">${title}</h1>
      </div>
      <div class="topbar-right">
        <div class="topbar-search">
          <span>🔍</span>
          <input type="text" placeholder="Search companies, topics..."/>
        </div>
        <div style="position:relative;cursor:pointer;">
          <span style="font-size:20px;">🔔</span>
          <span style="position:absolute;top:-4px;right:-4px;background:var(--danger);color:#fff;border-radius:50%;width:16px;height:16px;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:700;">3</span>
        </div>
        <div class="avatar" onclick="Router.navigate('profile')">${user?.avatar||'U'}</div>
      </div>
    </div>
    <style>@media(max-width:768px){#mobile-menu-btn{display:block!important;}}</style>
  `;
}

function renderDashboardLayout(activePage, title, bodyHTML) {
  const container = document.getElementById('page-container');
  container.innerHTML = `
    <div class="app-layout">
      ${renderSidebar(activePage)}
      <main class="main-content">
        ${renderTopbar(title)}
        <div class="page-body" style="padding-top:28px;">
          ${bodyHTML}
        </div>
      </main>
    </div>
  `;
}
