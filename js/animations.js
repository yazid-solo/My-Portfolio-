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
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY;
          const total = document.documentElement.scrollHeight - window.innerHeight;
          bar.style.width = `${(scrolled / total) * 100}%`;
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

      let isHovering = false;

      card.addEventListener('mouseenter', () => {
        isHovering = true;
        // Biarkan efek transition CSS masuk dulu sesaat, lalu matikan transisi transform
        // agar mousemove sangat responsif dan tidak delay/jitter
        setTimeout(() => {
          if (isHovering) card.style.transition = 'transform 0s, box-shadow 0.45s, border-color 0.45s';
        }, 300);
      });

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        
        // Tilt math (Smooth 4D)
        const rx = ((y - cy) / cy) * -12; // intensitas 4D feel
        const ry = ((x - cx) / cx) * 12;
        
        card.style.setProperty('--rx', `${rx}deg`);
        card.style.setProperty('--ry', `${ry}deg`);
        
        // Sesuaikan transform dengan jenis kartu. about-stat-card diangkat lebih tinggi.
        if (card.classList.contains('about-stat-card')) {
          card.style.transform = `translateY(-8px) scale3d(1.03, 1.03, 1.03) perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        } else {
          card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.02, 1.02, 1.02)`;
        }
        
        card.style.zIndex = '50'; // supaya tidak tertutup elemen lain saat hover
        
        // Glare math (moves opposite to tilt)
        if (glareInner) {
          glareInner.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
          glareInner.style.opacity = '1';
        }
      });
      
      card.addEventListener('mouseleave', () => {
        isHovering = false;
        // Kembalikan transisi supaya bisa balik perlahan (smooth reset)
        card.style.transition = '';
        card.style.transform = ''; // Biarkan CSS mengatur transform resetnya
        card.style.zIndex = '';
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
    if (prefersReducedMotion) return;
    document.querySelectorAll('.auto-scroll-gallery').forEach(gallery => {
      let isHovered = false;
      let isDragging = false;
      let isVisible = false;
      let startX = 0;
      let scrollLeft = 0;
      
      const step = 0.5; // Kecepatan gerak

      // Intersection Observer to pause when off-screen
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          isVisible = entry.isIntersecting;
        });
      }, { threshold: 0 });
      observer.observe(gallery);

      // Auto scroll loop
      const autoScroll = () => {
        if (isVisible && !isHovered && !isDragging) {
          gallery.scrollLeft += step;
          // Kalau mentok ke ujung kanan, kembali ke kiri
          if (gallery.scrollLeft >= (gallery.scrollWidth - gallery.clientWidth - 1)) {
            gallery.scrollLeft = 0;
          }
        }
        requestAnimationFrame(autoScroll);
      };
      requestAnimationFrame(autoScroll);

      // Desktop drag listeners
      gallery.addEventListener('mouseenter', () => isHovered = true);
      gallery.addEventListener('mouseleave', () => { isHovered = false; isDragging = false; });
      gallery.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
      });
      gallery.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
      });
      gallery.addEventListener('mouseup', () => { isDragging = false; });

      // Touch events
      gallery.addEventListener('touchstart', () => isHovered = true, { passive: true });
      gallery.addEventListener('touchend', () => isHovered = false, { passive: true });

      // Navigation Buttons
      const wrapper = gallery.closest('.gallery-nav-wrapper');
      if (wrapper) {
        const btnLeft = wrapper.querySelector('.gallery-nav-btn.left');
        const btnRight = wrapper.querySelector('.gallery-nav-btn.right');
        
        if (btnLeft) {
          btnLeft.addEventListener('click', () => {
            gallery.scrollBy({ left: -350, behavior: 'smooth' });
            isHovered = true; 
            setTimeout(() => isHovered = false, 1000); // pause auto scroll momentarily
          });
        }
        if (btnRight) {
          btnRight.addEventListener('click', () => {
            gallery.scrollBy({ left: 350, behavior: 'smooth' });
            isHovered = true; 
            setTimeout(() => isHovered = false, 1000); // pause auto scroll momentarily
          });
        }
      }
    });
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
