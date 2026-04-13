// ─── Landing Page ─────────────────────────────────────────────────────────────
Pages.landing = function() {
  const container = document.getElementById('page-container');
  container.innerHTML = `
    <div style="min-height:100vh;background:var(--bg);">

      <!-- NAVBAR -->
      <nav style="position:sticky;top:0;z-index:100;backdrop-filter:blur(20px);background:rgba(10,11,30,0.85);
        border-bottom:1px solid var(--border2);padding:16px 60px;display:flex;align-items:center;justify-content:space-between;">
        <div style="font-family:'Outfit',sans-serif;font-weight:800;font-size:22px;
          background:linear-gradient(135deg,var(--primary),var(--secondary));-webkit-background-clip:text;
          -webkit-text-fill-color:transparent;background-clip:text;">🎯 PlacePrep AI</div>
        <div style="display:flex;gap:32px;align-items:center;">
          <a href="#features" style="color:var(--text2);font-size:14px;font-weight:500;transition:var(--transition);"
            onmouseover="this.style.color='var(--text)'" onmouseout="this.style.color='var(--text2)'">Features</a>
          <a href="#companies-preview" style="color:var(--text2);font-size:14px;font-weight:500;"
            onmouseover="this.style.color='var(--text)'" onmouseout="this.style.color='var(--text2)'">Companies</a>
          <a href="#experiences-preview" style="color:var(--text2);font-size:14px;font-weight:500;"
            onmouseover="this.style.color='var(--text)'" onmouseout="this.style.color='var(--text2)'">Experiences</a>
          <button class="btn btn-secondary btn-sm" onclick="showLoginModal()">Login</button>
          <button class="btn btn-primary btn-sm" onclick="showSignupModal()">Sign Up Free</button>
        </div>
      </nav>

      <!-- HERO -->
      <section style="padding:120px 60px 80px;text-align:center;position:relative;overflow:hidden;">
        <!-- BG Blobs -->
        <div style="position:absolute;top:-200px;left:-100px;width:600px;height:600px;border-radius:50%;
          background:radial-gradient(circle,rgba(108,99,255,0.15),transparent 70%);pointer-events:none;"></div>
        <div style="position:absolute;bottom:-100px;right:-100px;width:500px;height:500px;border-radius:50%;
          background:radial-gradient(circle,rgba(0,212,255,0.1),transparent 70%);pointer-events:none;"></div>

        <div class="fade-up" style="display:inline-flex;align-items:center;gap:8px;background:rgba(108,99,255,0.12);
          border:1px solid var(--border);border-radius:20px;padding:6px 16px;font-size:13px;color:var(--primary-light);
          margin-bottom:24px;font-weight:500;">
          ✨ AI-Powered · 11 Top Companies · Real Experiences
        </div>
        <h1 class="fade-up-1" style="font-size:clamp(42px,6vw,76px);font-weight:900;line-height:1.1;
          font-family:'Outfit',sans-serif;margin-bottom:24px;max-width:900px;margin-inline:auto;">
          AI-Powered<br/>
          <span style="background:linear-gradient(135deg,var(--primary),var(--secondary),var(--accent));
            -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
            Placement Preparation
          </span><br/>Platform
        </h1>
        <p class="fade-up-2" style="font-size:18px;color:var(--text2);max-width:600px;margin:0 auto 40px;line-height:1.7;">
          Get company-specific prep strategies, AI-curated roadmaps, DSA practice, 
          mock tests, and real student interview experiences — all in one place.
        </p>
        <div class="fade-up-3" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary btn-lg" onclick="showSignupModal()">
            🚀 Start Free Prep
          </button>
          <button class="btn btn-secondary btn-lg" onclick="Router.navigate('companies')">
            🏢 Explore Companies
          </button>
        </div>

        <!-- Stats Row -->
        <div class="fade-up-4" style="display:flex;gap:48px;justify-content:center;margin-top:64px;flex-wrap:wrap;">
          ${[['11+','Companies Covered'],['50K+','Students Placed'],['500+','Interview Questions'],['98%','Success Rate']].map(([n,l])=>`
            <div style="text-align:center;">
              <div style="font-size:32px;font-weight:800;font-family:'Outfit',sans-serif;
                background:linear-gradient(135deg,var(--primary),var(--secondary));
                -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${n}</div>
              <div style="font-size:13px;color:var(--text3);margin-top:4px;">${l}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- FEATURES -->
      <section id="features" style="padding:80px 60px;">
        <div style="text-align:center;margin-bottom:56px;">
          <div class="section-title">Everything You Need to Get Placed</div>
          <p class="section-subtitle">A complete ecosystem designed to take you from preparation to offer letter</p>
        </div>
        <div class="grid-4">
          ${[
            {icon:'🤖',title:'AI Guidance',desc:'Personalized learning paths and AI-curated study plans tailored to your target companies.',color:'var(--primary)'},
            {icon:'🏢',title:'Company Prep',desc:'Detailed preparation guides for Amazon, Microsoft, TCS, and 8 more top companies.',color:'var(--secondary)'},
            {icon:'📝',title:'Mock Tests',desc:'Timed mock tests simulating real company assessments with detailed performance analytics.',color:'var(--accent)'},
            {icon:'💬',title:'Student Experiences',desc:'Real interview experiences shared by students who cracked top product and service companies.',color:'var(--success)'},
          ].map(f=>`
            <div class="card fade-up" style="text-align:center;padding:36px 24px;">
              <div style="font-size:44px;margin-bottom:16px;
                filter:drop-shadow(0 4px 16px ${f.color}40);">${f.icon}</div>
              <h3 style="font-size:18px;margin-bottom:10px;">${f.title}</h3>
              <p style="color:var(--text2);font-size:14px;line-height:1.6;">${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- COMPANIES PREVIEW -->
      <section id="companies-preview" style="padding:80px 60px;background:var(--bg2);">
        <div style="text-align:center;margin-bottom:48px;">
          <div class="section-title">Companies We Cover</div>
          <p class="section-subtitle">Comprehensive prep guides for product and service companies</p>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
          ${APP_DATA.companies.map(c=>`
            <div onclick="Auth.isLoggedIn()?Router.navigate('company',\'${c.id}\'):showLoginModal()"
              style="background:var(--card);border:1px solid var(--border2);border-radius:14px;
              padding:16px 24px;display:flex;align-items:center;gap:12px;cursor:pointer;
              transition:var(--transition);"
              onmouseover="this.style.borderColor='${c.color}';this.style.transform='translateY(-3px)'"
              onmouseout="this.style.borderColor='var(--border2)';this.style.transform='translateY(0)'">
              <span style="font-size:24px;">${c.logo}</span>
              <div>
                <div style="font-weight:600;font-size:14px;">${c.name}</div>
                <div style="font-size:11px;color:var(--text3);">${c.package}</div>
              </div>
              <span class="badge badge-${c.difficulty.toLowerCase()}">${c.difficulty}</span>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:40px;">
          <button class="btn btn-primary" onclick="Auth.isLoggedIn()?Router.navigate('companies'):showLoginModal()">
            View All Companies →
          </button>
        </div>
      </section>

      <!-- EXPERIENCES PREVIEW -->
      <section id="experiences-preview" style="padding:80px 60px;">
        <div style="text-align:center;margin-bottom:48px;">
          <div class="section-title">Student Success Stories</div>
          <p class="section-subtitle">Real experiences from students who cracked their dream companies</p>
        </div>
        <div class="grid-3">
          ${APP_DATA.experiences.slice(0,3).map(e=>`
            <div class="card">
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
                <div class="avatar">${e.avatar}</div>
                <div>
                  <div style="font-weight:600;">${e.name}</div>
                  <div style="font-size:12px;color:var(--text3);">${e.role} @ ${e.company} · ${e.year}</div>
                </div>
                <div class="stars" style="margin-left:auto;">${'★'.repeat(e.rating)}</div>
              </div>
              <p style="color:var(--text2);font-size:13px;line-height:1.65;">${e.summary.slice(0,140)}...</p>
              <div style="margin-top:12px;">${e.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- CTA -->
      <section style="padding:80px 60px;text-align:center;background:var(--bg2);">
        <div style="max-width:600px;margin:auto;">
          <h2 style="font-size:42px;font-weight:900;font-family:'Outfit',sans-serif;margin-bottom:16px;">
            Ready to Land Your<br/>
            <span style="background:linear-gradient(135deg,var(--primary),var(--secondary));
              -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Dream Job?</span>
          </h2>
          <p style="color:var(--text2);margin-bottom:32px;">Join 50,000+ students already using PlacePrep AI to crack their dream company.</p>
          <button class="btn btn-primary btn-lg" onclick="showSignupModal()">Get Started for Free →</button>
        </div>
      </section>

      <!-- FOOTER -->
      <footer style="padding:32px 60px;border-top:1px solid var(--border2);display:flex;
        justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;">
        <div style="font-family:'Outfit',sans-serif;font-weight:700;font-size:16px;
          background:linear-gradient(135deg,var(--primary),var(--secondary));
          -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
          🎯 PlacePrep AI
        </div>
        <div style="color:var(--text3);font-size:13px;">© 2025 PlacePrep AI. Built for students, by students.</div>
      </footer>
    </div>
  `;
};
