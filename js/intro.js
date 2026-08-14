/**
 * intro.js
 * ─────────────────────────────────────────────────────────────────
 * 1. PAGE INTRO  — premium overlay saat pertama kali buka browser
 * 2. SCROLL REVEAL 4D — efek scale+fade+slide saat scroll ke bawah
 *
 * Tidak mengubah atau menimpa kode di animations.js / main.js.
 * ─────────────────────────────────────────────────────────────────
 */

(function () {
  'use strict';

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ═══════════════════════════════════════════════════════════════
     1. PAGE INTRO OVERLAY
     ═══════════════════════════════════════════════════════════════ */
  function initPageIntro() {
    // Cek apakah halaman ini adalah homepage
    const isHome = window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') || window.location.pathname.includes('portfolio');
    const introPlayed = sessionStorage.getItem('introPlayed');

    // Skip intro jika bukan di homepage ATAU intro sudah pernah dimainkan di sesi ini
    if ((!isHome || introPlayed) && !prefersReduced) {
      document.body.style.overflow = '';
      return;
    }

    // FOUC Prevention: hide body content while intro is loading
    document.documentElement.classList.add('intro-loading');

    // Inject CSS saat intro
    const introStyle = document.createElement('style');
    introStyle.textContent = `
      /* ── Page Intro Overlay ── */
      html.intro-loading body > *:not(#page-intro-overlay) {
        opacity: 0 !important;
        visibility: hidden !important;
        pointer-events: none !important;
      }
      
      #page-intro-overlay {
        position: fixed;
        inset: 0;
        z-index: 999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: #060b16;
        pointer-events: all;
        overflow: hidden;
      }

      /* Animated grid BG inside intro */
      #page-intro-overlay::before {
        content: '';
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
        background-size: 52px 52px;
        animation: introGridPan 4s linear infinite;
      }

      @keyframes introGridPan {
        0%   { background-position: 0 0; }
        100% { background-position: 52px 52px; }
      }

      /* Radial glow orbs */
      #page-intro-overlay::after {
        content: '';
        position: absolute;
        inset: -20%;
        background:
          radial-gradient(circle at 25% 35%, rgba(0,212,255,0.12) 0%, transparent 45%),
          radial-gradient(circle at 75% 65%, rgba(139,92,246,0.1) 0%, transparent 45%);
        animation: introOrbPulse 3s ease-in-out infinite alternate;
      }

      @keyframes introOrbPulse {
        0%   { opacity: 0.6; transform: scale(1); }
        100% { opacity: 1;   transform: scale(1.05); }
      }

      /* Center logo container */
      .intro-center {
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
        opacity: 0;
        animation: introCenterIn 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.3s forwards;
      }

      @keyframes introCenterIn {
        from { opacity: 0; transform: translateY(30px) scale(0.9); }
        to   { opacity: 1; transform: translateY(0)   scale(1);   }
      }

      /* Logo ring */
      .intro-logo-ring {
        width: 88px;
        height: 88px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(0,212,255,0.12), rgba(139,92,246,0.12));
        border: 1px solid rgba(0,212,255,0.25);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        box-shadow:
          0 0 30px rgba(0,212,255,0.15),
          0 0 80px rgba(0,212,255,0.08),
          inset 0 1px 0 rgba(255,255,255,0.1);
        animation: introRingRotate 4s linear infinite;
      }

      @keyframes introRingRotate {
        from { box-shadow: 0 0 30px rgba(0,212,255,0.15), 0 0 80px rgba(0,212,255,0.08); }
        50%  { box-shadow: 0 0 40px rgba(139,92,246,0.25), 0 0 100px rgba(139,92,246,0.1); }
        to   { box-shadow: 0 0 30px rgba(0,212,255,0.15), 0 0 80px rgba(0,212,255,0.08); }
      }

      /* Spinning conic border */
      .intro-logo-ring::before {
        content: '';
        position: absolute;
        inset: -3px;
        border-radius: 50%;
        background: conic-gradient(
          rgba(0,212,255,0.8) 0deg,
          rgba(139,92,246,0.6) 120deg,
          rgba(244,63,94,0.4) 200deg,
          transparent 240deg,
          rgba(0,212,255,0.8) 360deg
        );
        animation: introSpinBorder 2s linear infinite;
        z-index: -1;
      }

      @keyframes introSpinBorder {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }

      /* Inner glow dot */
      .intro-logo-ring::after {
        content: '';
        position: absolute;
        inset: 3px;
        border-radius: 50%;
        background: #060b16;
        z-index: 0;
      }

      .intro-logo-icon {
        position: relative;
        z-index: 1;
        font-family: 'Sora', sans-serif;
        font-size: 1.5rem;
        font-weight: 900;
        background: linear-gradient(135deg, #00d4ff, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        letter-spacing: -0.04em;
      }

      /* Name text */
      .intro-name {
        font-family: 'Sora', sans-serif;
        font-size: clamp(1.4rem, 4vw, 2rem);
        font-weight: 900;
        letter-spacing: -0.03em;
        color: #fff;
        text-align: center;
        line-height: 1.1;
      }

      .intro-name span {
        background: linear-gradient(120deg, #00d4ff 0%, #8b5cf6 60%, #fb7185 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .intro-tagline {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.72rem;
        color: rgba(0,212,255,0.6);
        letter-spacing: 0.2em;
        text-transform: uppercase;
        text-align: center;
      }

      /* Loading bar */
      .intro-bar-wrap {
        width: 200px;
        height: 2px;
        background: rgba(255,255,255,0.06);
        border-radius: 99px;
        overflow: hidden;
        position: relative;
      }

      .intro-bar-fill {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #00d4ff, #8b5cf6, #00d4ff);
        background-size: 200% 100%;
        border-radius: 99px;
        box-shadow: 0 0 10px rgba(0,212,255,0.5);
        animation: introBarLoad 4.5s cubic-bezier(0.4,0,0.2,1) 0.5s forwards,
                   introBarShimmer 1.5s linear 0.5s infinite;
      }

      @keyframes introBarLoad {
        from { width: 0%; }
        to   { width: 100%; }
      }

      @keyframes introBarShimmer {
        0%   { background-position: 0% 0; }
        100% { background-position: 200% 0; }
      }

      /* Pct text */
      .intro-pct {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.65rem;
        color: rgba(255,255,255,0.3);
        letter-spacing: 0.08em;
        margin-top: -0.5rem;
        min-width: 40px;
        text-align: center;
      }

      /* Backdrop corner dots */
      .intro-corner-dot {
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: rgba(0,212,255,0.4);
        animation: introCornerGlow 2s ease-in-out infinite alternate;
      }
      .intro-corner-dot:nth-child(1) { top: 2rem; left: 2rem; animation-delay: 0s; }
      .intro-corner-dot:nth-child(2) { top: 2rem; right: 2rem; animation-delay: 0.5s; background: rgba(139,92,246,0.5); }
      .intro-corner-dot:nth-child(3) { bottom: 2rem; left: 2rem; animation-delay: 1s; background: rgba(244,63,94,0.4); }
      .intro-corner-dot:nth-child(4) { bottom: 2rem; right: 2rem; animation-delay: 1.5s; }

      @keyframes introCornerGlow {
        from { opacity: 0.3; transform: scale(1); }
        to   { opacity: 1;   transform: scale(1.6); box-shadow: 0 0 12px currentColor; }
      }

      /* Horizontal scan line */
      .intro-scan {
        position: absolute;
        left: 0; right: 0;
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
        animation: introScan 3s linear infinite;
        z-index: 1;
      }

      @keyframes introScan {
        0%   { top: -2px; opacity: 0; }
        5%   { opacity: 1; }
        95%  { opacity: 1; }
        100% { top: 100%; opacity: 0; }
      }

      /* Modern Enter Button */
      .intro-enter-btn {
        position: relative;
        background: rgba(8, 13, 26, 0.6);
        border: 1px solid rgba(0, 212, 255, 0.3);
        border-radius: 8px;
        padding: 0.8rem 2.5rem;
        color: #fff;
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.9rem;
        font-weight: 700;
        letter-spacing: 0.25em;
        cursor: pointer;
        outline: none;
        overflow: hidden;
        margin-top: 2.5rem;
        opacity: 0;
        transform: translateY(20px) scale(0.9);
        transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        backdrop-filter: blur(12px);
        box-shadow: 0 0 20px rgba(0, 212, 255, 0.1), inset 0 0 15px rgba(0, 212, 255, 0.05);
        display: none;
        align-items: center;
        justify-content: center;
        gap: 12px;
        text-transform: uppercase;
        z-index: 10;
      }
      .intro-enter-btn.show {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      .intro-enter-btn::before {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 100%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent);
        transition: left 0.5s ease;
      }
      .intro-enter-btn:hover {
        background: rgba(0, 212, 255, 0.15);
        border-color: rgba(0, 212, 255, 0.8);
        box-shadow: 0 0 40px rgba(0, 212, 255, 0.5), inset 0 0 20px rgba(0, 212, 255, 0.3);
        transform: scale(1.05);
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
      }
      .intro-enter-btn:hover::before {
        left: 100%;
        transition: left 0.6s ease;
      }
      .intro-enter-btn.clicked {
        transform: scale(0.95);
        opacity: 0;
        filter: blur(4px);
      }
      /* Frame corners for button */
      .intro-enter-btn::after {
        content: '';
        position: absolute; inset: 0;
        border: 2px solid transparent;
        background: linear-gradient(45deg, #00d4ff, transparent 40%, transparent 60%, #8b5cf6) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        opacity: 0.6;
        transition: opacity 0.3s;
      }
      .intro-enter-btn:hover::after {
        opacity: 1;
        background: linear-gradient(45deg, #8b5cf6, transparent 20%, transparent 80%, #00d4ff) border-box;
      }

      /* ── Overlay EXIT animation ── */
      #page-intro-overlay.intro-exit {
        animation: introSlideUp 0.8s cubic-bezier(0.76,0,0.24,1) forwards;
      }

      @keyframes introSlideUp {
        0%   { transform: translateY(0);     opacity: 1; }
        100% { transform: translateY(-100%); opacity: 0; }
      }
    `;
    document.head.appendChild(introStyle);

    /* ── Build overlay HTML ── */
    const overlay = document.createElement('div');
    overlay.id = 'page-intro-overlay';
    overlay.setAttribute('role', 'status');
    overlay.setAttribute('aria-label', 'Loading portfolio');
    overlay.innerHTML = `
      <div class="intro-corner-dot"></div>
      <div class="intro-corner-dot"></div>
      <div class="intro-corner-dot"></div>
      <div class="intro-corner-dot"></div>
      <div class="intro-scan"></div>

      <div class="intro-center">
        <div class="intro-logo-ring">
          <div class="intro-logo-icon">&lt;Y/&gt;</div>
        </div>
        <div>
          <div class="intro-name">Muchamad <span>Yazid</span> Ardani</div>
          <div class="intro-tagline" style="margin-top:0.4rem;">// Informatika · Full-Stack · Tech Enthusiast</div>
        </div>
        <div class="intro-bar-wrap" id="intro-wrap-div" style="transition: opacity 0.4s ease;">
          <div class="intro-bar-fill" id="intro-fill"></div>
        </div>
        <div class="intro-pct" id="intro-pct" style="transition: opacity 0.4s ease;">0%</div>
        <button id="intro-enter-btn" class="intro-enter-btn">
          ENTER PORTFOLIO
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    `;

    document.body.style.overflow = 'hidden';
    document.body.insertBefore(overlay, document.body.firstChild);

    // Animate percentage counter ~ 4.5 seconds
    let pct = 0;
    const pctEl = document.getElementById('intro-pct');
    const pctWrapRow = document.getElementById('intro-wrap-div');
    const enterBtn = document.getElementById('intro-enter-btn');

    // If reduced motion is preferred, jump to 100% fast
    const intervalTime = prefersReduced ? 10 : 40; 
    const randomAdd = prefersReduced ? 20 : 3;

    const pctTimer = setInterval(() => {
      // average 2% per 40ms = ~2 seconds
      pct = Math.min(pct + Math.ceil(Math.random() * randomAdd), 100);
      if (pctEl) pctEl.textContent = pct + '%';
      
      if (pct >= 100) {
        clearInterval(pctTimer);
        
        // Wait a slight moment after 100% to transition to button
        setTimeout(() => {
          if (pctWrapRow) pctWrapRow.style.opacity = '0';
          if (pctEl) pctEl.style.opacity = '0';
          
          setTimeout(() => {
            if (pctWrapRow) pctWrapRow.style.display = 'none';
            if (pctEl) pctEl.style.display = 'none';
            
            // Show Button
            if (enterBtn) {
              enterBtn.style.display = 'flex';
              requestAnimationFrame(() => {
                enterBtn.classList.add('show');
              });
            }
          }, 400); // Wait for opacity fade
        }, prefersReduced ? 50 : 400); // Hold at 100% briefly
      }
    }, intervalTime);

    // Button click event to enter portfolio
    if (enterBtn) {
      enterBtn.addEventListener('click', () => {
        enterBtn.classList.add('clicked');
        
        // Trigger exit animation
        setTimeout(() => {
          overlay.classList.add('intro-exit');
          document.body.style.overflow = '';
          document.documentElement.classList.remove('intro-loading');
          document.documentElement.classList.add('intro-finished');
          document.dispatchEvent(new CustomEvent('introFinished'));
          sessionStorage.setItem('introPlayed', '1');
          setTimeout(() => overlay.remove(), 800);
        }, 300);
      });
    }

    // ── Safety timeout: jika intro tidak selesai dalam 8 detik, lewati otomatis ──
    const safetyTimeout = setTimeout(() => {
      if (document.getElementById('page-intro-overlay')) {
        overlay.classList.add('intro-exit');
        document.body.style.overflow = '';
        document.documentElement.classList.remove('intro-loading');
        document.documentElement.classList.add('intro-finished');
        document.dispatchEvent(new CustomEvent('introFinished'));
        sessionStorage.setItem('introPlayed', '1');
        setTimeout(() => overlay.remove(), 800);
      }
    }, 8000);

    // Batalkan safety timeout jika pengguna klik Enter lebih awal
    if (enterBtn) {
      enterBtn.addEventListener('click', () => clearTimeout(safetyTimeout), { once: true });
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     2. ENHANCED SCROLL REVEAL 4D
     ═══════════════════════════════════════════════════════════════ */
  function initScrollReveal4D() {
    if (prefersReduced) return;

    /* Inject keyframes dan class CSS */
    const revealStyle = document.createElement('style');
    revealStyle.textContent = `
      /* ── Scroll Reveal 4D Variants ── */

      /* From bottom + scale up (default) */
      .sr4d {
        opacity: 0;
        transform: translateY(40px) scale(0.94);
        transition:
          opacity 0.7s cubic-bezier(0.4,0,0.2,1),
          transform 0.7s cubic-bezier(0.34,1.56,0.64,1);
      }
      .sr4d.sr-visible {
        opacity: 1;
        transform: translateY(0) scale(1);
      }

      /* From left */
      .sr4d-left {
        opacity: 0;
        transform: translateX(-50px) scale(0.96);
        transition:
          opacity 0.7s cubic-bezier(0.4,0,0.2,1),
          transform 0.7s cubic-bezier(0.34,1.56,0.64,1);
      }
      .sr4d-left.sr-visible {
        opacity: 1;
        transform: translateX(0) scale(1);
      }

      /* From right */
      .sr4d-right {
        opacity: 0;
        transform: translateX(50px) scale(0.96);
        transition:
          opacity 0.7s cubic-bezier(0.4,0,0.2,1),
          transform 0.7s cubic-bezier(0.34,1.56,0.64,1);
      }
      .sr4d-right.sr-visible {
        opacity: 1;
        transform: translateX(0) scale(1);
      }

      /* Scale from large (zoom-out-in) */
      .sr4d-zoom {
        opacity: 0;
        transform: scale(1.1);
        transition:
          opacity 0.6s cubic-bezier(0.4,0,0.2,1),
          transform 0.6s cubic-bezier(0.4,0,0.2,1);
      }
      .sr4d-zoom.sr-visible {
        opacity: 1;
        transform: scale(1);
      }

      /* Stagger delay helpers */
      .sr4d[data-delay="1"], .sr4d-left[data-delay="1"], .sr4d-right[data-delay="1"], .sr4d-zoom[data-delay="1"] { transition-delay: 0.1s; }
      .sr4d[data-delay="2"], .sr4d-left[data-delay="2"], .sr4d-right[data-delay="2"], .sr4d-zoom[data-delay="2"] { transition-delay: 0.2s; }
      .sr4d[data-delay="3"], .sr4d-left[data-delay="3"], .sr4d-right[data-delay="3"], .sr4d-zoom[data-delay="3"] { transition-delay: 0.3s; }
      .sr4d[data-delay="4"], .sr4d-left[data-delay="4"], .sr4d-right[data-delay="4"], .sr4d-zoom[data-delay="4"] { transition-delay: 0.4s; }
      .sr4d[data-delay="5"], .sr4d-left[data-delay="5"], .sr4d-right[data-delay="5"], .sr4d-zoom[data-delay="5"] { transition-delay: 0.5s; }
    `;
    document.head.appendChild(revealStyle);

    /* Auto-assign classes to sections and cards not already handled */
    function tagElements() {
      // Target: section headings, cards, stat blocks
      const selectors = [
        { sel: 'section > .container > *:not(.gallery-nav-wrapper)',   cls: 'sr4d'       },
        { sel: '.glass-card',                                          cls: 'sr4d'       },
        { sel: '.about-stat-card',                                     cls: 'sr4d'       },
        { sel: '.org-card-premium',                                    cls: 'sr4d-left'  },
        { sel: '.timeline-item',                                       cls: 'sr4d-left'  },
      ];

      selectors.forEach(({ sel, cls }) => {
        document.querySelectorAll(sel).forEach((el, idx) => {
          // Skip if already has a reveal class (avoid double animation)
          if (el.classList.contains('reveal') ||
              el.classList.contains('sr4d') ||
              el.classList.contains('sr4d-left') ||
              el.classList.contains('sr4d-right') ||
              el.classList.contains('sr4d-zoom')) return;

          el.classList.add(cls);
          const delay = (idx % 5) + 1;
          el.setAttribute('data-delay', delay);
        });
      });
    }

    /* Observer */
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    function observeAll() {
      document.querySelectorAll('.sr4d, .sr4d-left, .sr4d-right, .sr4d-zoom')
        .forEach(el => observer.observe(el));
    }

    // Run after DOM is ready and after main.js has rendered dynamic content
    tagElements();
    observeAll();

    // Re-run after dynamic render (main.js renders highlights, projects, etc)
    setTimeout(() => {
      tagElements();
      observeAll();
    }, 800);
  }

  /* ═══════════════════════════════════════════════════════════════
     INIT — run immediately on DOM ready
     ═══════════════════════════════════════════════════════════════ */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', run);
    } else {
      run();
    }
  }

  function run() {
    initPageIntro();
    initScrollReveal4D();
  }

  init();

})();
