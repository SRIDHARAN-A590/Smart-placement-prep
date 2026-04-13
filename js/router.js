// ─── Router ───────────────────────────────────────────────────────────────────
const Router = (() => {
  const routes = {
    '': () => Pages.landing(),
    'landing': () => Pages.landing(),
    'dashboard': () => Pages.dashboard(),
    'companies': () => Pages.companies(),
    'company': (id) => Pages.companyDetail(id),
    'practice': () => Pages.practice(),
    'mock-test': () => Pages.mockTest(),
    'experiences': () => Pages.experiences(),
    'profile': () => Pages.profile(),
  };

  function navigate(page, param) {
    const hash = param ? `#${page}/${param}` : `#${page}`;
    window.location.hash = hash;
  }

  function handleRoute() {
    const hash = window.location.hash.replace('#', '') || '';
    const [page, param] = hash.split('/');
    const routeFn = routes[page] || routes[''];
    if (page === 'company' || page === 'companies') {
      if (page === 'company' && param) { Pages.companyDetail(param); return; }
    }
    routeFn(param);
    window.scrollTo(0, 0);
  }

  function init() {
    window.addEventListener('hashchange', handleRoute);
    handleRoute();
  }

  return { navigate, init };
})();

// Auto-init after all scripts are parsed
document.addEventListener('DOMContentLoaded', () => Router.init());
