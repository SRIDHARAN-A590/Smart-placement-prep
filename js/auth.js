// ─── Auth Module ──────────────────────────────────────────────────────────────
const Auth = (() => {
  let user = JSON.parse(localStorage.getItem('pp_user') || 'null');

  const defaultUser = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: 'AJ',
    college: 'VIT University',
    branch: 'Computer Science',
    year: '4th Year',
    skills: ['Python', 'Java', 'React', 'SQL', 'DSA'],
    targetCompanies: ['Amazon', 'Microsoft', 'IBM'],
    progress: { aptitude: 72, coding: 58, technical: 64, overall: 65 },
    streak: 14,
    testsCompleted: 23,
    questionsAttempted: 847
  };

  function login(email, pass) {
    user = { ...defaultUser, email };
    localStorage.setItem('pp_user', JSON.stringify(user));
    return user;
  }

  function signup(name, email, pass) {
    user = { ...defaultUser, name, email, avatar: name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase() };
    localStorage.setItem('pp_user', JSON.stringify(user));
    return user;
  }

  function logout() { user = null; localStorage.removeItem('pp_user'); }
  function getUser() { return user; }
  function isLoggedIn() { return !!user; }

  return { login, signup, logout, getUser, isLoggedIn };
})();

// ─── Auth Modal ──────────────────────────────────────────────────────────────
function showLoginModal() {
  const overlay = document.getElementById('auth-modal');
  const content = document.getElementById('auth-content');
  content.innerHTML = `
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:36px;margin-bottom:12px;">🎯</div>
      <h2 style="font-size:24px;margin-bottom:6px;">Welcome Back</h2>
      <p style="color:var(--text2);font-size:14px;">Sign in to continue your prep journey</p>
    </div>
    <form onsubmit="handleLogin(event)">
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="email" id="login-email" placeholder="alex@example.com" value="alex@example.com" required/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" id="login-pass" placeholder="••••••••" value="password" required/>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;">
        Sign In →
      </button>
    </form>
    <p style="text-align:center;margin-top:20px;color:var(--text2);font-size:14px;">
      Don't have an account? 
      <span onclick="showSignupModal()" style="color:var(--primary);cursor:pointer;font-weight:600;">Sign Up</span>
    </p>
    <button onclick="closeAuthModal()" style="position:absolute;top:16px;right:20px;background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;">×</button>
  `;
  overlay.classList.add('show');
}

function showSignupModal() {
  const content = document.getElementById('auth-content');
  content.innerHTML = `
    <div style="text-align:center;margin-bottom:28px;">
      <div style="font-size:36px;margin-bottom:12px;">🚀</div>
      <h2 style="font-size:24px;margin-bottom:6px;">Create Account</h2>
      <p style="color:var(--text2);font-size:14px;">Start your AI-powered prep journey today</p>
    </div>
    <form onsubmit="handleSignup(event)">
      <div class="form-group">
        <label>Full Name</label>
        <input class="form-control" type="text" id="signup-name" placeholder="Alex Johnson" required/>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input class="form-control" type="email" id="signup-email" placeholder="alex@example.com" required/>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input class="form-control" type="password" id="signup-pass" placeholder="Create a strong password" required/>
      </div>
      <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;margin-top:8px;">
        Create Account →
      </button>
    </form>
    <p style="text-align:center;margin-top:20px;color:var(--text2);font-size:14px;">
      Already have an account? 
      <span onclick="showLoginModal()" style="color:var(--primary);cursor:pointer;font-weight:600;">Sign In</span>
    </p>
    <button onclick="closeAuthModal()" style="position:absolute;top:16px;right:20px;background:none;border:none;color:var(--text2);font-size:22px;cursor:pointer;">×</button>
  `;
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const pass = document.getElementById('login-pass').value;
  Auth.login(email, pass);
  closeAuthModal();
  showToast('✅ Welcome back! Ready to ace your placements?', 'success');
  Router.navigate('dashboard');
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const pass = document.getElementById('signup-pass').value;
  Auth.signup(name, email, pass);
  closeAuthModal();
  showToast('🎉 Account created! Let\'s start your journey!', 'success');
  Router.navigate('dashboard');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.remove('show');
}

// ─── Toast Notifications ──────────────────────────────────────────────────────
function showToast(msg, type = 'info') {
  const toast = document.getElementById('toast');
  const colors = { success: 'var(--success)', error: 'var(--danger)', info: 'var(--primary)' };
  const el = document.createElement('div');
  el.style.cssText = `
    background:var(--card2);border:1px solid ${colors[type]};border-radius:12px;
    padding:14px 20px;color:var(--text);font-size:14px;font-weight:500;
    box-shadow:var(--shadow);margin-top:8px;pointer-events:all;
    animation:fadeUp 0.3s ease;max-width:340px;
  `;
  el.textContent = msg;
  toast.appendChild(el);
  setTimeout(() => el.style.opacity = '0', 2700);
  setTimeout(() => el.remove(), 3000);
}
