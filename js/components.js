/**
 * components.js
 * Inject navbar & footer ke semua halaman secara dinamis.
 * Update navbar/footer cukup di sini — semua halaman ikut.
 */

const Components = (() => {

  const NAV_LINKS = [
    { href: 'index.html', label: '<span data-i18n="nav_home">Beranda</span>', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00d4ff"/><stop offset="100%" stop-color="#0066cc"/></linearGradient></defs>
      <path d="M3 10.5L12 3l9 7.5V21a1 1 0 01-1 1h-5v-5H9v5H4a1 1 0 01-1-1V10.5z" fill="url(#hg)" opacity="0.9"/>
      <rect x="9" y="16" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)"/>
      <path d="M3 10.5L12 3l9 7.5" stroke="rgba(255,255,255,0.6)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    </svg>` },
    { href: 'about.html', label: '<span data-i18n="nav_about">Tentang</span>', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><radialGradient id="ag" cx="50%" cy="40%" r="50%"><stop offset="0%" stop-color="#fda4af"/><stop offset="100%" stop-color="#e11d48"/></radialGradient></defs>
      <circle cx="12" cy="7.5" r="4" fill="url(#ag)"/>
      <path d="M4 21c0-4.418 3.582-8 8-8s8 3.582 8 8" stroke="#fb7185" stroke-width="2" stroke-linecap="round" fill="none"/>
      <circle cx="12" cy="7.5" r="1.5" fill="white" opacity="0.7"/>
    </svg>` },
    { href: 'projects.html', label: '<span data-i18n="nav_projects">Proyek</span>', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#6ee7b7"/><stop offset="100%" stop-color="#059669"/></linearGradient></defs>
      <rect x="2" y="3" width="8" height="8" rx="2" fill="url(#pg)"/>
      <rect x="14" y="3" width="8" height="8" rx="2" fill="#10b981" opacity="0.7"/>
      <rect x="2" y="15" width="8" height="6" rx="2" fill="#10b981" opacity="0.5"/>
      <rect x="14" y="15" width="8" height="6" rx="2" fill="url(#pg)"/>
      <path d="M6 7l1.5 1.5L10 5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>` },
    { href: 'resume.html', label: '<span data-i18n="nav_resume">Resume</span>', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="rg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="100%" stop-color="#d97706"/></linearGradient></defs>
      <path d="M6 2h9l4 4v16a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1z" fill="url(#rg)" opacity="0.9"/>
      <path d="M14 2v5h5" stroke="#92400e" stroke-width="1.2" fill="none"/>
      <line x1="8" y1="11" x2="16" y2="11" stroke="rgba(0,0,0,0.4)" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="14" x2="14" y2="14" stroke="rgba(0,0,0,0.3)" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="8" y1="17" x2="16" y2="17" stroke="rgba(0,0,0,0.3)" stroke-width="1.2" stroke-linecap="round"/>
    </svg>` },
    { href: 'contact.html', label: 'Kontak', icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="cg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#c4b5fd"/><stop offset="100%" stop-color="#7c3aed"/></linearGradient></defs>
      <rect x="2" y="4" width="20" height="16" rx="3" fill="url(#cg)" opacity="0.9"/>
      <path d="M2 7l10 7 10-7" stroke="rgba(255,255,255,0.7)" stroke-width="1.5" stroke-linecap="round" fill="none"/>
      <circle cx="18" cy="18" r="4" fill="#7c3aed" stroke="white" stroke-width="1.5"/>
      <path d="M16.5 18h3M18 16.5v3" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    </svg>` }
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
          <a href="index.html" class="logo-link-hover">
            <div class="logo-4d-wrapper">
              <div class="logo-4d-core">
                <div class="logo-face front">&lt;</div>
                <div class="logo-face back">/&gt;</div>
                <div class="logo-face right"></div>
                <div class="logo-face left"></div>
                <div class="logo-face top"></div>
                <div class="logo-face bottom"></div>
              </div>
            </div>
            <span class="logo-text-gahar">&lt;Yazid /&gt;</span>
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
              <span data-i18n="nav_open_to_work">OPEN TO WORK</span>
            </div>

            <!-- Language Switcher -->
            <button id="lang-btn" class="icon-btn" title="Ganti Bahasa / Change Language" aria-label="Change language" style="font-family: var(--font-display); font-weight: 800; font-size: 0.85rem; color: var(--text);">
              ID
            </button>

            <!-- Accent Switcher -->
            <div style="position:relative;">
              <button id="accent-btn" class="icon-btn" title="Ganti warna aksen" aria-label="Change accent color">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" stroke-width="1.8"/>
                  <path d="M12 2v10M12 12l7.07-7.07" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
                  <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
                  <circle cx="12" cy="2" r="1.5" fill="#00d4ff"/>
                  <circle cx="19.07" cy="4.93" r="1.5" fill="#8b5cf6"/>
                </svg>
              </button>
              <div id="accent-dropdown">
                <div class="accent-opt" data-accent="cyan"><span class="accent-swatch" style="background:#00d4ff;"></span> Cyan</div>
                <div class="accent-opt" data-accent="violet"><span class="accent-swatch" style="background:#8b5cf6;"></span> Violet</div>
                <div class="accent-opt" data-accent="emerald"><span class="accent-swatch" style="background:#10b981;"></span> Emerald</div>
              </div>
            </div>



            <!-- Mobile Hamburger -->
            <button id="hamburger" class="icon-btn" style="display:none;" aria-label="Open menu" aria-expanded="false">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="7" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
                <line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <div id="mobile-menu" role="dialog" aria-label="Navigation menu">
      ${NAV_LINKS.map(l => `<a href="${l.href}" class="mobile-nav-link ${activePage === l.href ? 'active' : ''}">${l.label}</a>`).join('')}
    </div>
    `;
  }

  function renderFooter() {
    return `
    <style>
      .pro-footer {
        position: relative;
        background: var(--bg2);
        border-top: 1px solid rgba(255,255,255,0.05);
        color: var(--text-muted);
        overflow: hidden;
      }
      /* Realistic High-End Tech Background */
      .pro-footer::after {
        content: '';
        position: absolute;
        inset: 0;
        background: url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2000&auto=format&fit=crop') center/cover no-repeat;
        opacity: 0.15;
        z-index: 0;
        pointer-events: none;
        mix-blend-mode: luminosity;
        filter: contrast(1.2) brightness(0.8);
      }
      .pro-footer::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(3,7,18, 1) 5%, rgba(3,7,18, 0.85) 60%, rgba(3,7,18, 0.98) 100%);
        z-index: 1;
      }
      .pro-footer-glow {
        position: absolute;
        bottom: -250px;
        left: 50%;
        transform: translateX(-50%);
        width: 1000px;
        height: 400px;
        background: radial-gradient(ellipse, rgba(var(--accent-rgb),0.15) 0%, transparent 60%);
        pointer-events: none;
        z-index: 0;
        filter: blur(50px);
      }
      .pro-footer .container {
        position: relative;
        z-index: 10;
        padding-top: 6rem;
        padding-bottom: 2rem;
      }
      .footer-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1.5fr;
        gap: 4rem;
        margin-bottom: 5rem;
      }
      @media(max-width: 992px) {
        .footer-grid { grid-template-columns: 1fr 1fr; gap: 3rem; }
        .footer-grid > div:last-child { grid-column: 1 / -1; }
      }
      @media(max-width: 768px) {
        .footer-grid { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
        .footer-grid .logo-text { margin: 0 auto; display: block; }
        .footer-grid > div { align-items: center; }
        .pro-footer .social-row { justify-content: center; }
      }
      .footer-heading {
        color: var(--text);
        font-family: var(--font-display);
        font-size: 1.15rem;
        font-weight: 800;
        margin-bottom: 1.5rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        position: relative;
        display: inline-block;
      }
      .footer-heading::after {
        content: '';
        position: absolute;
        bottom: -6px; left: 0;
        width: 30px; height: 3px;
        background: var(--accent);
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(var(--accent-rgb),0.5);
      }
      @media(max-width: 768px) { .footer-heading::after { left: 50%; transform: translateX(-50%); } }
      .footer-desc {
        font-size: 0.95rem;
        line-height: 1.8;
        max-width: 360px;
        margin-bottom: 2rem;
        color: rgba(255,255,255,0.7);
      }
      @media(max-width: 768px) { .footer-desc { margin-left: auto; margin-right: auto; } }
      .social-row { display: flex; gap: 1rem; }
      .social-icon {
        width: 44px; height: 44px;
        border-radius: 14px;
        background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01));
        border: 1px solid rgba(255,255,255,0.08);
        border-top-color: rgba(255,255,255,0.15);
        display: flex; align-items: center; justify-content: center;
        color: var(--text-muted);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      }
      .social-icon:hover {
        background: var(--surface2);
        border-color: var(--accent);
        transform: translateY(-5px) scale(1.05) rotate(2deg);
        box-shadow: 0 15px 25px rgba(0,0,0,0.6), 0 0 15px rgba(var(--accent-rgb),0.4);
      }
      .footer-links { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1rem; }
      .footer-links a {
        color: var(--text-muted); text-decoration: none; font-size: 0.95rem;
        transition: all 0.3s var(--ease); display: inline-flex; align-items: center; width: fit-content;
      }
      @media(max-width: 768px) { .footer-links a { margin: 0 auto; } }
      .footer-links a:hover { color: var(--text); transform: translateX(6px); text-shadow: 0 0 10px rgba(255,255,255,0.3); }
      @media(max-width: 768px) { .footer-links a:hover { transform: translateY(-2px) translateX(0); } }
      
      /* Premium 4D Bento CTA */
      .footer-bento {
        background: linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.4) 100%);
        border: 1px solid rgba(255,255,255,0.08);
        border-top-color: rgba(255,255,255,0.2);
        border-radius: 20px;
        padding: 2.5rem;
        position: relative;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 0 15px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.1);
      }
      .footer-bento::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
        background: linear-gradient(90deg, transparent, var(--accent), transparent); opacity: 0.6;
      }
      .footer-bento:hover {
        border-color: rgba(var(--accent-rgb), 0.4);
        box-shadow: 0 25px 50px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 30px rgba(var(--accent-rgb), 0.2);
        transform: translateY(-5px) scale3d(1.02, 1.02, 1.02);
      }
      .btn-footer-collab {
        display: inline-flex; align-items: center; justify-content: center; gap: 0.75rem;
        background: linear-gradient(135deg, rgba(var(--accent-rgb), 1), rgba(var(--accent-rgb), 0.7));
        color: #000; font-family: var(--font-display); font-weight: 800;
        padding: 0.85rem 1.75rem; border-radius: 14px; text-decoration: none;
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.35), inset 0 2px 4px rgba(255,255,255,0.5);
        border: 1px solid rgba(255,255,255,0.4);
      }
      .btn-footer-collab:hover {
        transform: translateY(-3px) scale(1.03);
        box-shadow: 0 12px 30px rgba(var(--accent-rgb), 0.5), inset 0 2px 6px rgba(255,255,255,0.7);
      }
      
      .footer-bottom {
        border-top: 1px solid rgba(255,255,255,0.08); padding-top: 2.5rem;
        display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem;
        font-size: 0.9rem; position: relative; z-index: 10;
      }
      @media(max-width: 768px) { .footer-bottom { flex-direction: column; text-align: center; justify-content: center; } }
      
      /* Open To Work Pulse Status */
      .footer-status-pill {
        display: flex; align-items: center; gap: 12px;
        background: rgba(0,0,0,0.5); border: 1px solid rgba(255,255,255,0.08);
        padding: 8px 18px; border-radius: 99px;
        box-shadow: inset 0 2px 4px rgba(0,0,0,0.6);
      }
      .status-dot {
        width: 10px; height: 10px; border-radius: 50%;
        background: #10b981; box-shadow: 0 0 12px #10b981;
        animation: pulse-dot 2s infinite cubic-bezier(0.4, 0, 0.2, 1);
      }
      @keyframes pulse-dot {
        0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
        70% { box-shadow: 0 0 0 12px rgba(16, 185, 129, 0); }
        100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
      }

      /* Premium Back To Top */
      .btt-btn {
        position: relative; display: flex; align-items: center; justify-content: center;
        padding: 12px 30px; border: 1px solid rgba(255,255,255,0.15);
        background: linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2));
        font-size: 0.85rem; border-radius: 100px; font-weight: 700; letter-spacing: 0.08em;
        color: var(--text-muted); cursor: pointer; overflow: hidden;
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 6px 15px rgba(0,0,0,0.3);
      }
      .btt-btn svg {
        position: absolute; width: 18px; fill: var(--text-muted); z-index: 9;
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); transform: rotate(-90deg);
      }
      .btt-btn .arr-1 { right: 14px; }
      .btt-btn .arr-2 { left: -30%; }
      .btt-btn .circle {
        position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 24px; height: 24px; background: var(--accent); border-radius: 50%;
        opacity: 0; transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      .btt-btn .text { position: relative; z-index: 1; transform: translateX(-14px); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
      .btt-btn:hover { border-color: rgba(var(--accent-rgb),0.5); color: #000; box-shadow: 0 10px 25px rgba(var(--accent-rgb),0.3); transform: translateY(-3px); }
      .btt-btn:hover .arr-1 { right: -30%; }
      .btt-btn:hover .arr-2 { left: 14px; fill: #000; }
      .btt-btn:hover .text { transform: translateX(14px); }
      .btt-btn:hover .circle { width: 350px; height: 350px; opacity: 1; }
    </style>
    <footer class="pro-footer">
      <div class="pro-footer-glow"></div>
      <div class="container">
        
        <div class="footer-grid">
          
          <!-- Column 1: Brand & Bio -->
          <div style="display:flex; flex-direction:column;">
            <div class="logo-text" style="font-size:1.8rem; margin-bottom:1.25rem; text-shadow: 0 4px 15px rgba(var(--accent-rgb),0.3);">&lt;${PROFILE.nickname || 'Yazid'} /&gt;</div>
            <p class="footer-desc" data-i18n="footer_bio">
              ${window.t ? window.t(PROFILE.bio) : (PROFILE.bio.id || PROFILE.bio)}
            </p>
            <div class="social-row">
              <a href="${PROFILE.github}" target="_blank" rel="noopener" class="social-icon" aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" fill="#e5e7eb"/>
                </svg>
              </a>
              <a href="${PROFILE.whatsapp}" target="_blank" rel="noopener" class="social-icon" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35" fill="#25D366"/>
                </svg>
              </a>
              <a href="mailto:${PROFILE.email}" class="social-icon" aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6.5l10 7 10-7" stroke="#e5e7eb" stroke-width="1.8" stroke-linecap="round" fill="none"/>
                  <path d="M2 10l5 3.5M22 10l-5 3.5" stroke="rgba(229, 231, 235, 0.5)" stroke-width="1.5" stroke-linecap="round"/>
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="#e5e7eb" stroke-width="1.5" fill="none"/>
                </svg>
              </a>
            </div>
          </div>
          
          <!-- Column 2: Quick Links -->
          <div style="display:flex; flex-direction:column;">
            <h4 class="footer-heading">Navigasi Sistem</h4>
            <ul class="footer-links">
              <li><a href="index.html" data-i18n="nav_home">Beranda Utama</a></li>
              <li><a href="about.html" data-i18n="nav_about">Tentang Saya</a></li>
              <li><a href="projects.html" data-i18n="nav_projects">Proyek & Portofolio</a></li>
              <li><a href="resume.html" data-i18n="nav_resume">Resume & Kualifikasi</a></li>
            </ul>
          </div>
          
          <!-- Column 3: Collaboration Bento CTA -->
          <div class="footer-bento">
            <h4 class="footer-heading" style="margin-bottom: 1rem; font-size:1.25rem;" data-i18n="footer_collab_title">Mulai Eksekusi Proyek</h4>
            <p style="color:rgba(255,255,255,0.7); font-size:0.95rem; line-height:1.7; margin-bottom:1.8rem; max-width: 300px;" data-i18n="footer_collab_desc">
              Memiliki ide visi tingkat tinggi atau sekadar mencari talenta rekayasa lunak elit? Mari rakit mahakarya bersama.
            </p>
            <a href="contact.html" class="btn-footer-collab">
              <span data-i18n="footer_collab_btn">Mulai Diskusi</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/>
                <path d="M14 7l5 5-5 5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </div>
          
        </div>
        
        <!-- Bottom Section -->
        <div class="footer-bottom">
          <div style="color:rgba(255,255,255,0.6); font-family: var(--font-mono); font-size: 0.85rem;">
            © ${new Date().getFullYear()} ${PROFILE.name}. <span data-i18n="footer_copyright">Hak Cipta & Kekayaan Intelektual Dilindungi.</span>
          </div>
          <div style="display: flex; gap: 2.5rem; align-items: center; flex-wrap: wrap; justify-content: center;">
            <div class="footer-status-pill">
              <div class="status-dot"></div>
              <span style="font-weight: 700; letter-spacing: 0.1em; color:rgba(255,255,255,0.9); font-family: var(--font-mono); font-size: 0.8rem;" data-i18n="footer_status">TERSEDIA UNTUK KERJA SAMA</span>
            </div>
            <button class="btt-btn" onclick="window.scrollTo({top:0, behavior:'smooth'})" aria-label="Kembali ke atas" data-i18n-aria="footer_btt_aria">
              <svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span class="text" data-i18n="footer_btt">KEMBALI KE ATAS</span>
              <span class="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
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
    if (!hamburger || !mobileMenu) return;

    hamburger.style.display = 'flex';

    // Show hamburger only on mobile
    const mq = window.matchMedia('(max-width: 768px)');
    const updateVisibility = (e) => {
      hamburger.style.display = e.matches ? 'flex' : 'none';
      if (!e.matches && mobileMenu.classList.contains('open')) {
        // Reset if window gets big
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="7" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
      }
    };
    mq.addEventListener('change', updateVisibility);
    updateVisibility(mq);

    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      if (isOpen) {
        hamburger.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
      } else {
        hamburger.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="7" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
      }
    });

    // Close when clicking a link
    mobileMenu.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="7" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="11" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`;
      });
    });
  }

  function initPageTransitions() {
    const transition = document.getElementById('page-transition');
    if (!transition) return;

    // Fade in on load and back navigation (bfcache)
    transition.classList.remove('active');
    window.addEventListener('pageshow', (e) => {
      if (e.persisted) {
        transition.classList.remove('active');
      }
    });

    // Intercept all internal links
    document.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || link.hasAttribute('download') || link.getAttribute('target') === '_blank') return;
      link.addEventListener('click', e => {
        e.preventDefault();
        transition.classList.add('active');
        setTimeout(() => { window.location.href = href; }, 180);
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
    initPageTransitions();

    // Setup Lang Switcher Logic
    const langBtn = document.getElementById('lang-btn');
    if (langBtn && window.I18N) {
      langBtn.textContent = window.I18N.lang.toUpperCase();
      langBtn.addEventListener('click', () => {
        window.I18N.toggleLang();
        langBtn.textContent = window.I18N.lang.toUpperCase();
      });
    }

    // Initial Translation
    if (window.I18N) window.I18N.translateDOM();
  }

  return { init };
})();
