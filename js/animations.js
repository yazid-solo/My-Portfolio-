/**
 * animations.js
 * Scroll reveal, 3D tilt card, parallax, skill bars.
 * Semua animasi menghormati prefers-reduced-motion.
 */

const Animations = (() => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /** Scroll Reveal via IntersectionObserver */
  function initScrollReveal() {
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  /** Scroll Progress Bar */
  function initScrollProgress() {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;
    
    let totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    window.addEventListener('resize', () => {
      totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    }, { passive: true });

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          bar.style.width = `${(scrolled / totalHeight) * 100}%`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /** Navbar scroll state */
  function initNavbarScroll() {
    const nav = document.getElementById('navbar');
    if (!nav) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /** 4D Tilt & Glare Effect Applied Universally to All Cards */
  function initTilt() {
    if (prefersReducedMotion) return;
    
    // Skip on touch devices — no mousemove events, only causes visual glitches
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;
    
    // Memberikan efek tilt 4D premium ke SEMUA jenis kartu, bukan cuma tilt-card
    const cards = document.querySelectorAll('.tilt-card, .glass-card, .project-card, .about-stat-card, .org-card-premium');

    cards.forEach(card => {
      // Inject glare elements dynamic
      let glareWrapper = card.querySelector('.glare-wrapper');
      let glareInner;

      if (!glareWrapper) {
        glareWrapper = document.createElement('div');
        glareWrapper.className = 'glare-wrapper';
        glareInner = document.createElement('div');
        glareInner.className = 'glare-inner';
        glareWrapper.appendChild(glareInner);
        card.appendChild(glareWrapper);

        // Required to ensure the wrapper clips the glare correctly
        const currentPos = window.getComputedStyle(card).position;
        if (currentPos === 'static') {
            card.style.position = 'relative';
        }
      } else {
        glareInner = glareWrapper.querySelector('.glare-inner');
      }

      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
        card.style.willChange = 'transform';
      });

      let ticking = false;
      card.addEventListener('mousemove', e => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            
            // Tilt math (Sangat Ringan, max rotasi dikurangi untuk hemat repaint)
            const rx = ((y - cy) / cy) * -4;
            const ry = ((x - cx) / cx) * 4;
            
            card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
            card.style.zIndex = '50';
            
            // Glare math
            if (glareInner) {
              glareInner.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
              glareInner.style.opacity = '0.6';
            }
            ticking = false;
          });
          ticking = true;
        }
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.5s ease-out';
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        card.style.zIndex = '';
        card.style.willChange = 'auto';
        if (glareInner) {
            glareInner.style.opacity = '0';
        }
      });
    });
  }

  /** Skill Bar Animation */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-bar-fill');
    if (!bars.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const pct = fill.dataset.pct || 0;
          setTimeout(() => { fill.style.width = `${pct}%`; }, 200);
          observer.unobserve(fill);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(bar => observer.observe(bar));
  }

  /** Parallax on hero section */
  function initParallax() {
    if (prefersReducedMotion) return;
    const el = document.querySelector('.hero-parallax');
    if (!el) return;
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          el.style.transform = `translateY(${window.scrollY * 0.3}px)`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /** Counter animation for stats */
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const suffix = el.dataset.suffix || '';
          let current = 0;
          const step = Math.ceil(target / 30);
          const interval = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = current + suffix;
            if (current >= target) clearInterval(interval);
          }, 40);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  }

  /** Auto-Scrolling Engine for Galleries (Scroll Sendiri) */
  function initAutoScrollGalleries() {
    // DINONAKTIFKAN: 
    // Logika auto-scroll ini bentrok dengan engine infinite scroll (modulo) 
    // yang baru dan lebih stabil di js/main.js untuk bagian #featured-projects.
    // Membiarkannya aktif akan menyebabkan bug ruang kosong dan scroll patah-patah.
    return;
  }

  function init() {
    initScrollProgress();
    initNavbarScroll();
    initScrollReveal();
    initTilt();
    initSkillBars();
    initParallax();
    initCounters();
    initAutoScrollGalleries();
  }

  return { init };
})();
