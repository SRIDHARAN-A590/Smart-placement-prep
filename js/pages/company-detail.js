// ─── Company Detail Page ──────────────────────────────────────────────────────
Pages.companyDetail = function(id) {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }
  const c = APP_DATA.companies.find(x => x.id === id);
  if (!c) { Router.navigate('companies'); return; }

  const bodyHTML = `
    <!-- Back + Header -->
    <button class="btn btn-secondary btn-sm" onclick="Router.navigate('companies')" style="margin-bottom:24px;">
      ← Back to Companies
    </button>
    <div class="card fade-up" style="padding:32px;margin-bottom:28px;
      background:linear-gradient(135deg,${c.color}15,var(--card));border-color:${c.color}40;">
      <div style="display:flex;align-items:center;gap:24px;flex-wrap:wrap;">
        <div style="font-size:64px;filter:drop-shadow(0 8px 24px ${c.color}60);">${c.logo}</div>
        <div style="flex:1;">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;flex-wrap:wrap;">
            <h1 style="font-size:32px;font-weight:900;">${c.name}</h1>
            <span class="badge badge-${c.difficulty.toLowerCase()}">${c.difficulty}</span>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
            ${c.focus.map(f=>`<span class="tag">${f}</span>`).join('')}
          </div>
          <div style="color:var(--text2);font-size:14px;">💰 Package: <strong style="color:var(--success);">${c.package}</strong> &nbsp;·&nbsp; 📋 ${c.rounds.length} Rounds</div>
        </div>
        <button class="btn btn-success btn-lg" onclick="showToast('🚀 Preparation started for ${c.name}!','success')">
          🚀 Start Preparation
        </button>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-bottom:24px;">
      <!-- Hiring Process -->
      <div class="card fade-up-1">
        <h2 style="font-size:18px;margin-bottom:20px;">📋 Hiring Process</h2>
        <div style="position:relative;">
          <div style="position:absolute;left:18px;top:0;bottom:0;width:2px;background:linear-gradient(180deg,${c.color},transparent);border-radius:1px;"></div>
          ${c.rounds.map((r,i)=>`
            <div style="display:flex;gap:16px;margin-bottom:20px;padding-left:8px;">
              <div style="width:28px;height:28px;border-radius:50%;background:${c.color};display:flex;
                align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:12px;flex-shrink:0;z-index:1;">${i+1}</div>
              <div style="background:var(--bg2);border-radius:12px;padding:12px 14px;flex:1;">
                <div style="font-weight:600;font-size:14px;margin-bottom:4px;">${r.name}</div>
                <div style="font-size:12px;color:var(--text3);">${r.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Skills -->
      <div>
        <div class="card fade-up-1" style="margin-bottom:24px;">
          <h2 style="font-size:18px;margin-bottom:16px;">🛠 Required Skills</h2>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            ${c.skills.map(s=>`
              <span style="background:linear-gradient(135deg,rgba(108,99,255,0.15),rgba(0,212,255,0.08));
                border:1px solid var(--border);border-radius:10px;padding:7px 14px;font-size:13px;font-weight:500;">
                ${s}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Preparation Roadmap -->
        <div class="card fade-up-2">
          <h2 style="font-size:18px;margin-bottom:16px;">🗺 Preparation Roadmap</h2>
          ${c.roadmap.map((r,i)=>`
            <div style="display:flex;gap:12px;margin-bottom:12px;align-items:flex-start;">
              <div style="background:linear-gradient(135deg,${c.color},${c.color}80);color:#fff;border-radius:8px;
                padding:4px 10px;font-size:11px;font-weight:700;min-width:72px;text-align:center;margin-top:2px;">
                ${r.week}
              </div>
              <div style="background:var(--bg2);border-radius:10px;padding:10px 14px;flex:1;font-size:13px;">${r.task}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- FAQs -->
    <div class="card fade-up-3">
      <h2 style="font-size:18px;margin-bottom:20px;">❓ Frequently Asked Questions</h2>
      <div id="faq-list">
        ${c.faqs.map((f,i)=>`
          <div style="border:1px solid var(--border2);border-radius:12px;margin-bottom:10px;overflow:hidden;">
            <div onclick="toggleFAQ(${i})" style="display:flex;justify-content:space-between;align-items:center;
              padding:16px 20px;cursor:pointer;transition:var(--transition);"
              onmouseover="this.style.background='var(--bg2)'" onmouseout="this.style.background=''">
              <span style="font-weight:600;font-size:14px;">${f.q}</span>
              <span id="faq-icon-${i}" style="font-size:18px;transition:var(--transition);">+</span>
            </div>
            <div id="faq-ans-${i}" style="display:none;padding:0 20px 16px;color:var(--text2);font-size:14px;line-height:1.6;">${f.a}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  renderDashboardLayout('companies', `${c.logo} ${c.name}`, bodyHTML);
};

function toggleFAQ(i) {
  const ans = document.getElementById('faq-ans-' + i);
  const icon = document.getElementById('faq-icon-' + i);
  const open = ans.style.display === 'block';
  ans.style.display = open ? 'none' : 'block';
  icon.textContent = open ? '+' : '−';
}
