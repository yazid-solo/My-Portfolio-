/**
 * components.js
 * Inject navbar & footer ke semua halaman secara dinamis.
 * Update navbar/footer cukup di sini — semua halaman ikut.
 */

const Components = (() => {

  const NAV_LINKS = [
    { href: 'index.html', label: 'Home', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 5px rgba(0,212,255,0.5)); color:var(--accent);"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>' },
    { href: 'about.html', label: 'About', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 5px rgba(239,68,68,0.5)); color:#ef4444;"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>' },
    { href: 'projects.html', label: 'Projects', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 5px rgba(16,185,129,0.5)); color:#10b981;"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>' },
    { href: 'resume.html', label: 'Resume', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 5px rgba(245,158,11,0.5)); color:#f59e0b;"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>' },
    { href: 'contact.html', label: 'Contact', icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 5px rgba(139,92,246,0.5)); color:#8b5cf6;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>' }
  ];

  function getActivePage() {
    const p = window.location.pathname.toLowerCase();
    if (p.includes('projects')) return 'projects.html';
    if (p.includes('resume')) return 'resume.html';
    if (p.includes('about')) return 'about.html';
    if (p.includes('contact')) return 'contact.html';
    return 'index.html';
  }

  function renderNavbar() {
    const activePage = getActivePage();
    const navLinksHTML = NAV_LINKS.map(link => `
      <a href="${link.href}" class="nav-link ${activePage === link.href ? 'active' : ''}">${link.label}</a>
    `).join('');

    return `
    <div id="scroll-progress"></div>
    <div id="page-transition"></div>

    <nav id="navbar">
      <div class="nav-wrapper">
        <div style="display:flex;align-items:center;justify-content:space-between;height:64px;gap:1rem;">

          <!-- ── Logo ── -->
          <a href="index.html" class="logo-text" style="text-decoration:none;display:flex;align-items:center;gap:10px;flex-shrink:0;">
            <span style="display:inline-flex;align-items:center;justify-content:center;width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,rgba(0,212,255,0.15),rgba(0,212,255,0.05));border:1px solid rgba(0,212,255,0.3);box-shadow:0 0 14px rgba(0,212,255,0.15);">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </span>
            <span style="font-size:1rem;">&lt;Yazid /&gt;</span>
          </a>

          <!-- ── Desktop Nav (pill group) ── -->
          <div class="hide-mobile" style="display:flex;align-items:center;gap:2px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:99px;padding:4px;">
            ${NAV_LINKS.map(link => `
              <a href="${link.href}" class="nav-link ${activePage === link.href ? 'active' : ''}" style="border-radius:99px;padding:6px 16px;font-size:0.82rem;letter-spacing:0.02em;white-space:nowrap;">${link.label}</a>
            `).join('')}
          </div>

          <!-- ── Right Controls ── -->
          <div style="display:flex;align-items:center;gap:8px;flex-shrink:0;">

            <!-- Status badge -->
            <div class="hide-mobile" style="display:flex;align-items:center;gap:6px;background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.25);border-radius:99px;padding:5px 12px;font-size:0.72rem;font-weight:600;color:#10b981;letter-spacing:0.04em;">
              <span style="display:block;width:6px;height:6px;background:#10b981;border-radius:50%;box-shadow:0 0 8px #10b981;animation:pulse-dot 2s infinite;"></span>
              OPEN TO WORK
            </div>

            <!-- Command Palette -->
            <button id="cmd-btn" class="icon-btn hide-mobile" title="Command Palette (Ctrl+K)" aria-label="Open command palette">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/></svg>
            </button>

            <!-- Accent Switcher -->
            <div style="position:relative;">
              <button id="accent-btn" class="icon-btn" title="Ganti warna aksen" aria-label="Change accent color">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6" fill="currentColor" opacity="0.3"/></svg>
              </button>
              <div id="accent-dropdown">
                <div class="accent-opt" data-accent="cyan"><span class="accent-swatch" style="background:#00d4ff;"></span> Cyan</div>
                <div class="accent-opt" data-accent="violet"><span class="accent-swatch" style="background:#8b5cf6;"></span> Violet</div>
                <div class="accent-opt" data-accent="emerald"><span class="accent-swatch" style="background:#10b981;"></span> Emerald</div>
              </div>
            </div>



            <!-- Mobile Hamburger -->
            <button id="hamburger" class="icon-btn" style="display:none;" aria-label="Open menu" aria-expanded="false">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
          </div>

        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" role="dialog" aria-label="Navigation menu">
      <button id="mobile-close" style="position:absolute;top:1.5rem;right:1.5rem;" class="icon-btn" aria-label="Close menu">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      ${NAV_LINKS.map(l => `<a href="${l.href}" class="mobile-nav-link ${activePage === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>

    <!-- Command Palette -->
    <div id="cmd-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
      <div id="cmd-box">
        <input id="cmd-input" type="text" placeholder="Cari halaman atau fitur..." autocomplete="off" aria-label="Search pages" />
        <div id="cmd-list">
          ${NAV_LINKS.map((l, i) => `
            <div class="cmd-item" tabindex="-1" data-href="${l.href}" role="option">
              <div class="cmd-icon">${l.icon}</div>
              <span>${l.label}</span>
            </div>
          `).join('')}
        </div>
        <div class="cmd-hint">
          <span><kbd>↑↓</kbd> Navigasi</span>
          <span><kbd>Enter</kbd> Buka</span>
          <span><kbd>Esc</kbd> Tutup</span>
        </div>
      </div>
    </div>
    `;
  }

  function renderFooter() {
    return `
    <style>
      .pro-footer {
        position: relative;
        background: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=40&w=800&auto=format&fit=crop&fm=webp') center/cover no-repeat fixed;
        border-top: 1px solid rgba(255,255,255,0.05);
        color: var(--text-muted);
        overflow: hidden;
      }
      .pro-footer::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, var(--bg2) 0%, rgba(3, 7, 18, 0.85) 40%, rgba(3, 7, 18, 0.95) 100%);
        z-index: 1;
      }
      .pro-footer-glow {
        position: absolute;
        bottom: -250px;
        left: 50%;
        transform: translateX(-50%);
        width: 800px;
        height: 400px;
        background: radial-gradient(ellipse, rgba(var(--accent-rgb),0.12) 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
        filter: blur(50px);
      }
      .pro-footer .container {
        position: relative;
        z-index: 10;
        padding-top: 5rem;
        padding-bottom: 2rem;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1.5fr;
        gap: 3rem;
        margin-bottom: 4rem;
      }
      @media(max-width: 768px) {
        .footer-grid { grid-template-columns: 1fr; gap: 2.5rem; text-align: center; }
        .footer-grid .logo-text { margin: 0 auto; display: block; }
        .footer-grid > div { align-items: center; }
        .pro-footer .social-row { justify-content: center; }
        .pro-footer .btn-primary { margin: 0 auto; }
      }
      .footer-heading {
        color: var(--text);
        font-family: var(--font-display);
        font-size: 1.1rem;
        font-weight: 700;
        margin-bottom: 1.5rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
      }
      .footer-desc {
        font-size: 0.9rem;
        line-height: 1.8;
        max-width: 340px;
        margin-bottom: 1.5rem;
      }
      @media(max-width: 768px) { .footer-desc { margin-left: auto; margin-right: auto; } }
      .social-row {
        display: flex;
        gap: 1rem;
      }
      .social-icon {
        width: 40px;
        height: 40px;
        border-radius: 12px;
        background: rgba(255,255,255,0.03);
        border: 1px solid rgba(255,255,255,0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-muted);
        transition: all 0.3s var(--ease);
      }
      .social-icon:hover {
        background: var(--accent);
        color: white;
        border-color: var(--accent);
        transform: translateY(-4px) scale(1.05);
        box-shadow: 0 10px 20px rgba(var(--accent-rgb),0.3);
      }
      .footer-links {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 0.85rem;
      }
      .footer-links a {
        color: var(--text-muted);
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.3s var(--ease);
        display: inline-flex;
        align-items: center;
        width: fit-content;
      }
      @media(max-width: 768px) { .footer-links a { margin: 0 auto; } }
      .footer-links a:hover {
        color: var(--accent);
        transform: translateX(4px);
      }
      @media(max-width: 768px) { .footer-links a:hover { transform: translateY(-2px) translateX(0); } }
      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.08);
        padding-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        font-size: 0.85rem;
      }
      @media(max-width: 768px) {
        .footer-bottom { flex-direction: column; text-align: center; justify-content: center; }
      }
      .btt-btn {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        font-family: inherit;
        font-size: 0.85rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: color 0.3s var(--ease);
      }
      .btt-btn:hover { color: var(--accent); }
    </style>
    <footer class="pro-footer">
      <div class="pro-footer-glow"></div>
      <div class="container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Bio -->
          <div style="display:flex; flex-direction:column;">
            <div class="logo-text" style="font-size:1.6rem; margin-bottom:1rem;">&lt;${PROFILE.nickname || 'Yazid'} /&gt;</div>
            <p class="footer-desc">
              Membangun antarmuka digital yang cerdas dan interaktif. Berfokus pada pengalaman pengguna yang tak terlupakan dan performa yang efisien.
            </p>
            <div class="social-row">
              <a href="${PROFILE.github}" target="_blank" rel="noopener" class="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="${PROFILE.whatsapp}" target="_blank" rel="noopener" class="social-icon" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
              <a href="mailto:${PROFILE.email}" class="social-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>
          
          <!-- Column 2: Quick Links -->
          <div style="display:flex; flex-direction:column;">
            <h4 class="footer-heading">Navigasi</h4>
            <ul class="footer-links">
              <li><a href="index.html">Beranda</a></li>
              <li><a href="about.html">Tentang Saya</a></li>
              <li><a href="projects.html">Proyek Pilihan</a></li>
              <li><a href="resume.html">Resume & CV</a></li>
            </ul>
          </div>
          
          <!-- Column 3: Collaboration CTA -->
          <div style="display:flex; flex-direction:column;">
            <h4 class="footer-heading">Mulai Berkolaborasi</h4>
            <p style="color:var(--text-dim); font-size:0.9rem; line-height:1.6; margin-bottom:1.5rem; max-width: 280px;">
              Punya ide luar biasa atau sedang mencari talent baru? Mari ciptakan sebuah produk digital magis bersama.
            </p>
            <a href="contact.html" class="btn-primary" style="width: max-content; padding: 0.6rem 1.25rem;">
              Kerja Bareng
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
          
        </div>
        
        <!-- Bottom Section -->
        <div class="footer-bottom">
          <div style="color:var(--text-dim);">
            © ${new Date().getFullYear()} ${PROFILE.name}. Hak Cipta Dilindungi.
          </div>
          <div style="display: flex; gap: 2.5rem; align-items: center; flex-wrap: wrap; justify-content: center;">
            <span style="display:flex; align-items:center; gap:8px;">
              <span style="display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981; box-shadow:0 0 10px #10b981;"></span>
              <span style="font-weight: 500; letter-spacing: 0.05em; color:var(--text-muted); font-family: var(--font-mono); font-size: 0.8rem;">OPEN TO WORK</span>
            </span>
            <button class="btt-btn" onclick="window.scrollTo({top:0, behavior:'smooth'})" aria-label="Kembali ke atas">
              KEMBALI KE ATAS 
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </div>
        
      </div>
    </footer>
    `;
  }

  function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileClose = document.getElementById('mobile-close');
    if (!hamburger || !mobileMenu) return;

    hamburger.style.display = 'flex';

    // Show hamburger only on mobile
    const mq = window.matchMedia('(max-width: 768px)');
    const updateVisibility = (e) => {
      hamburger.style.display = e.matches ? 'flex' : 'none';
    };
    mq.addEventListener('change', updateVisibility);
    updateVisibility(mq);

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
    });
    mobileClose?.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  }

  function initCommandPalette() {
    const overlay = document.getElementById('cmd-overlay');
    const input = document.getElementById('cmd-input');
    const list = document.getElementById('cmd-list');
    const cmdBtn = document.getElementById('cmd-btn');
    if (!overlay || !input || !list) return;

    let focusedIndex = -1;
    const items = () => list.querySelectorAll('.cmd-item');

    function open() {
      overlay.classList.add('open');
      input.value = '';
      filterItems('');
      input.focus();
      focusedIndex = -1;
    }

    function close() {
      overlay.classList.remove('open');
      focusedIndex = -1;
    }

    function filterItems(query) {
      const q = query.toLowerCase();
      items().forEach(item => {
        const text = item.querySelector('span').textContent.toLowerCase();
        item.style.display = text.includes(q) ? 'flex' : 'none';
      });
    }

    function navigate(dir) {
      const visible = Array.from(items()).filter(i => i.style.display !== 'none');
      if (!visible.length) return;
      visible.forEach(i => i.classList.remove('focused'));
      focusedIndex = (focusedIndex + dir + visible.length) % visible.length;
      visible[focusedIndex].classList.add('focused');
      visible[focusedIndex].scrollIntoView({ block: 'nearest' });
    }

    function go() {
      const visible = Array.from(items()).filter(i => i.style.display !== 'none');
      const focused = visible[focusedIndex] || visible[0];
      if (focused) {
        navigateTo(focused.dataset.href);
        close();
      }
    }

    function navigateTo(href) {
      const transition = document.getElementById('page-transition');
      if (transition) {
        transition.classList.add('active');
        setTimeout(() => { window.location.href = href; }, 300);
      } else {
        window.location.href = href;
      }
    }

    // Keyboard shortcut
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); open(); }
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowDown') { e.preventDefault(); navigate(1); }
      if (e.key === 'ArrowUp') { e.preventDefault(); navigate(-1); }
      if (e.key === 'Enter') go();
    });

    overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
    input.addEventListener('input', () => filterItems(input.value));
    cmdBtn?.addEventListener('click', open);

    items().forEach(item => {
      item.addEventListener('click', () => {
        navigateTo(item.dataset.href);
        close();
      });
    });
  }

  function initPageTransitions() {
    const transition = document.getElementById('page-transition');
    if (!transition) return;

    // Fade in on load
    transition.classList.remove('active');

    // Intercept all internal links
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel')) return;
      link.addEventListener('click', e => {
        e.preventDefault();
        transition.classList.add('active');
        setTimeout(() => { window.location.href = href; }, 300);
      });
    });
  }

  function inject() {
    // Inject global 4D background behind everything
    if (!document.getElementById('global-4d-bg')) {
      const bg = document.createElement('div');
      bg.id = 'global-4d-bg';
      document.body.insertAdjacentElement('afterbegin', bg);
    }

    // Inject navbar before body content
    const navContainer = document.getElementById('nav-inject');
    if (navContainer) navContainer.innerHTML = renderNavbar();

    const footerContainer = document.getElementById('footer-inject');
    if (footerContainer) footerContainer.innerHTML = renderFooter();
  }

  function init() {
    inject();
    initMobileMenu();
    initCommandPalette();
    initPageTransitions();
  }

  return { init };
})();
