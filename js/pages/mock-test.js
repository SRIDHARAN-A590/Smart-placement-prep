// ─── Mock Test Page ───────────────────────────────────────────────────────────
Pages.mockTest = function() {
  if (!Auth.isLoggedIn()) { showLoginModal(); return; }

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

    <!-- Filter & Mock List -->
    <div style="display:flex;gap:8px;margin-bottom:24px;flex-wrap:wrap;">
      ${['All','Easy','Medium','Hard'].map((f,i)=>`
        <button class="btn btn-${i===0?'primary':'secondary'} btn-sm"
          onclick="filterMocks('${f}',this)">${f}</button>
      `).join('')}
      <button class="btn btn-secondary btn-sm" onclick="filterMockByCompany(this)">By Company</button>
    </div>

    <div class="grid-2" id="mock-grid">
      ${APP_DATA.mockTests.map(t => `
        <div class="card fade-up" data-difficulty="${t.difficulty}" data-company="${t.company}"
          style="cursor:pointer;" onclick="startMockTest(${t.id})">
          <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:14px;">
            <div>
              <div style="font-size:11px;color:var(--text3);margin-bottom:4px;">${t.company}</div>
              <h3 style="font-size:16px;font-weight:700;">${t.title}</h3>
            </div>
            <span class="badge badge-${t.difficulty.toLowerCase()}">${t.difficulty}</span>
          </div>
          <div style="display:flex;gap:20px;color:var(--text2);font-size:13px;margin-bottom:16px;flex-wrap:wrap;">
            <span>⏱ ${t.duration} mins</span>
            <span>❓ ${t.questions} ${t.questions<10?'problems':'questions'}</span>
            <span>👥 ${(t.participants/1000).toFixed(1)}K attempted</span>
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
      `).join('')}
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
  showToast(`🚀 Starting "${test.title}" — ${test.duration} minutes!`, 'success');
}

function filterMocks(diff, btn) {
  btn.parentElement.querySelectorAll('.btn').forEach(b=>b.className='btn btn-secondary btn-sm');
  btn.className='btn btn-primary btn-sm';
  document.querySelectorAll('#mock-grid .card').forEach(card=>{
    card.style.display = diff==='All'||card.dataset.difficulty===diff? '':'none';
  });
}

function filterMockByCompany(btn) {
  const companies = [...new Set(APP_DATA.mockTests.map(t=>t.company))];
  showToast('Companies: '+companies.join(', '),'info');
}
