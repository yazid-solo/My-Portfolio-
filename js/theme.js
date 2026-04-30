/**
 * theme.js
 * Mengelola dark/light mode dan accent color.
 * Preferensi disimpan di localStorage.
 */

const Theme = (() => {
  const STORAGE_KEY_THEME = 'pf-theme';
  const STORAGE_KEY_ACCENT = 'pf-accent';
  const ACCENTS = ['cyan', 'violet', 'emerald'];

  function init() {
    const savedTheme = localStorage.getItem(STORAGE_KEY_THEME) || 'dark';
    const savedAccent = localStorage.getItem(STORAGE_KEY_ACCENT) || 'cyan';
    applyTheme(savedTheme);
    applyAccent(savedAccent);
    bindToggle();
    bindAccentSwitcher();
  }

  function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'light') {
      html.classList.add('light');
    } else {
      html.classList.remove('light');
    }
    localStorage.setItem(STORAGE_KEY_THEME, theme);
    updateThemeIcon(theme);
  }

  function applyAccent(accent) {
    document.documentElement.setAttribute('data-accent', accent);
    localStorage.setItem(STORAGE_KEY_ACCENT, accent);
  }

  function updateThemeIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.innerHTML = theme === 'light'
      ? `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`
      : `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`;
  }

  function bindToggle() {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const current = localStorage.getItem(STORAGE_KEY_THEME) || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  function bindAccentSwitcher() {
    const btn = document.getElementById('accent-btn');
    const dropdown = document.getElementById('accent-dropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('open');
    });

    document.addEventListener('click', () => dropdown.classList.remove('open'));

    dropdown.querySelectorAll('.accent-opt').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        const accent = opt.dataset.accent;
        applyAccent(accent);
        dropdown.classList.remove('open');
      });
    });
  }

  return { init, applyTheme, applyAccent };
})();
