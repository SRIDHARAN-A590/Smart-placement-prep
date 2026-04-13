// ─── Shared Layout Helpers ────────────────────────────────────────────────────

// Renders company logo as <img> with fallback
function companyLogo(src, name, size = 42) {
  return `<img src="${src}" alt="${name}" style="width:${size}px;height:${size}px;object-fit:contain;border-radius:8px;background:#fff;padding:4px;" onerror="this.style.fontSize='${Math.floor(size*0.5)}px';this.style.display='flex';this.style.alignItems='center';this.style.justifyContent='center';this.outerHTML='<div style=\\'width:${size}px;height:${size}px;border-radius:8px;background:linear-gradient(135deg,var(--primary),var(--secondary));display:flex;align-items:center;justify-content:center;font-weight:800;font-size:${Math.floor(size*0.4)}px;color:#fff;\\'>${name.charAt(0)}</div>'"/>`;
}
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
  const drives = window.APP_DATA ? APP_DATA.hiringDrives : [];
  
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
        
        <!-- Notifications Dropdown -->
        <div style="position:relative;cursor:pointer;" id="notif-bell" onclick="document.getElementById('notif-dropdown').classList.toggle('show')">
          <span style="font-size:20px;">🔔</span>
          <span style="position:absolute;top:-4px;right:-4px;background:var(--danger);color:#fff;border-radius:50%;width:16px;height:16px;font-size:10px;display:flex;align-items:center;justify-content:center;font-weight:700;">${drives.length}</span>
          
          <div id="notif-dropdown" class="card" style="display:none;position:absolute;top:100%;right:0;width:320px;margin-top:16px;padding:16px;box-shadow:0 10px 40px rgba(0,0,0,0.3);z-index:100;border:1px solid var(--border);border-top:3px solid var(--primary);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:1px solid var(--border2);padding-bottom:8px;">
              <h3 style="font-size:14px;font-weight:800;margin:0;">Upcoming Hiring Drives</h3>
              <span style="font-size:11px;color:var(--brand);font-weight:600;cursor:pointer;">Update Daily</span>
            </div>
            <div style="max-height:300px;overflow-y:auto;display:flex;flex-direction:column;gap:12px;">
              ${drives.map(d => `
                <div style="display:flex;flex-direction:column;gap:4px;padding:8px;border-radius:8px;background:var(--bg2);transition:var(--transition);" onmouseover="this.style.background='var(--card2)'" onmouseout="this.style.background='var(--bg2)'">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="font-size:13px;font-weight:700;color:var(--primary-light);">${d.company}</span>
                    <span style="font-size:10px;background:rgba(255,255,255,0.1);padding:2px 6px;border-radius:4px;">${d.date}</span>
                  </div>
                  <div style="font-size:12px;color:var(--text);">${d.title}</div>
                  <a href="${d.url}" target="_blank" style="font-size:11px;color:var(--brand);text-decoration:none;font-weight:600;margin-top:4px;">Apply on Official Site ↗</a>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <div class="avatar" onclick="Router.navigate('profile')">${user?.avatar||'U'}</div>
      </div>
    </div>
    
    <style>
      @media(max-width:768px){#mobile-menu-btn{display:block!important;}}
      #notif-dropdown.show { display:block !important; animation: fadeUp 0.2s ease forwards; }
    </style>
    
    <script>
      // Close dropdown if clicked outside
      document.addEventListener('click', function(e) {
        const bell = document.getElementById('notif-bell');
        const dp = document.getElementById('notif-dropdown');
        if (bell && dp && !bell.contains(e.target)) {
          dp.classList.remove('show');
        }
      });
    </script>
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
