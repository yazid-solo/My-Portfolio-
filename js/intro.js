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
     1. SEAMLESS PAGE ENTRANCE (Instant & Responsive)
     ═══════════════════════════════════════════════════════════════ */
  function initPageIntro() {
    // Pastikan scroll normal dan class status terpasang seketika
    document.body.style.overflow = '';
    document.documentElement.classList.remove('intro-loading');
    document.documentElement.classList.add('intro-finished');

    // Tandai session bahwa intro sudah aktif
    sessionStorage.setItem('introPlayed', '1');

    // Dispatch event seketika agar animasi hero & komponen langsung jalan
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        document.dispatchEvent(new CustomEvent('introFinished'));
      }, { once: true });
    } else {
      document.dispatchEvent(new CustomEvent('introFinished'));
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
        .forEach(el => {
          // Jika elemen sudah di viewport, langsung tampilkan
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('sr-visible');
          } else {
            observer.observe(el);
          }
        });
    }

    // Run after DOM is ready and after main.js has rendered dynamic content
    tagElements();
    observeAll();

    // Re-run after dynamic render (main.js renders highlights, projects, etc)
    setTimeout(() => {
      tagElements();
      observeAll();
    }, 400);

    // Safety fallback: pastikan setelah 1.5 detik semua elemen yang sudah di viewport terlihat sempurna
    setTimeout(() => {
      document.querySelectorAll('.sr4d:not(.sr-visible), .sr4d-left:not(.sr-visible), .sr4d-right:not(.sr-visible)').forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 100) {
          el.classList.add('sr-visible');
        }
      });
    }, 1200);
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
