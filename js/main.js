/**
 * main.js
 * Entry point — inisialisasi semua modul.
 * Urutan penting: Components → Theme → Animations → Page-specific
 */

document.addEventListener('DOMContentLoaded', () => {
  Components.init();
  Theme.init();
  syncGlobalStats(); // <-- Global stats sync everywhere

  // Page-specific init
  const path = window.location.pathname.toLowerCase();
  
  if (path.includes('projects')) {
    initProjects();
  } else if (path.includes('resume')) {
    initResume();
  } else if (path.includes('about')) {
    initAbout();
  } else if (path.includes('contact')) {
    initContact();
  } else {
    initHome(); // Default to home for index.html, root '/', or custom path like '/portfolio'
  }

  // Initialize animations AFTER DOM is populated by page scripts
  Animations.init();
});

/* ===================== GLOBAL STATS SYNC ===================== */
function syncGlobalStats() {
  if (typeof PROFILE === 'undefined' || typeof PROJECTS === 'undefined') return;
  
  // Ambil total data langsung dari Array secara seakurat mungkin
  const semesterCount = PROFILE.semester || 4;
  const projectCount  = PROJECTS.length || 0;
  const certCount     = (PROFILE.certificates && PROFILE.certificates.length) ? PROFILE.certificates.length : 0;
  const orgCount      = (PROFILE.organization && PROFILE.organization.length) ? PROFILE.organization.length : 0;
  const trainingCount = (PROFILE.training && PROFILE.training.length) ? PROFILE.training.length : 0;

  // Sambungkan ke SEMUA elemen yang ditandai dengan ID tersebut di halaman APA SAJA
  const setIfExist = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setIfExist('stat-semester', semesterCount);
  setIfExist('stat-project', projectCount + "+");
  setIfExist('stat-cert', certCount);
  setIfExist('stat-org', orgCount);
  setIfExist('stat-training', trainingCount);
}


/* ===================== HOME ===================== */
function initHome() {
  renderHeroStats();
  renderHighlights();
  renderFeaturedProjects();
  renderTools();
  initThreeHero();
}

function renderHeroStats() {
  const el = document.getElementById('hero-stats');
  if (!el) return;

  // Hitung jumlah sebenarnya dari data
  const projectCount = PROJECTS.length || 0;
  const certCount = (PROFILE.certificates && PROFILE.certificates.length) ? PROFILE.certificates.length : 0;
  const orgCount = (PROFILE.organization && PROFILE.organization.length) ? PROFILE.organization.length : 0;
  const trainingCount = (PROFILE.training && PROFILE.training.length) ? PROFILE.training.length : 0;

  const dynamicStats = [
    { label: "Semester Aktif", value: PROFILE.semester || 4 },
    { label: "Proyek Latihan", value: projectCount },
    { label: "Pelatihan", value: trainingCount },
    { label: "Sertifikat", value: certCount }
  ];

  // Styling premium & gahar 4D untuk Container
  el.style.cssText = `
    display: flex;
    background: linear-gradient(145deg, rgba(15,22,41,0.95), rgba(8,13,26,0.98));
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0,0,0,0.3), 0 0 20px rgba(0,212,255,0.05);
    position: relative;
    overflow: hidden;
    margin-top: 3.5rem;
    z-index: 3;
    max-width: 100%;
    /* Flex nowrap default, let CSS handle overflow sideways on mobile */
    flex-wrap: nowrap;
  `;

  el.innerHTML = dynamicStats.map((s, i) => `
    <div style="
      text-align:center;
      padding:1.4rem 1.8rem;
      min-width: 130px;
      flex: 1;
      border-right: ${i < dynamicStats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'};
      position: relative;
      background: transparent;
      transition: background 0.35s ease, transform 0.3s ease;
    "
    onmouseover="this.style.background='linear-gradient(to bottom, rgba(0,212,255,0.05), transparent)'; this.style.transform='translateY(-2px)';"
    onmouseout="this.style.background='transparent'; this.style.transform='translateY(0)';"
    >
      <div 
        class="stat-counter-target" 
        data-target="${s.value}"
        style="
          font-family:var(--font-display);
          font-size: clamp(2rem, 5vw, 2.5rem);
          font-weight:900;
          color:#ffffff;
          line-height:1;
          margin-bottom:0.5rem;
          text-shadow: 0 0 25px rgba(var(--accent-rgb), 0.6), 0 0 10px rgba(255,255,255,0.3);
          letter-spacing:-0.05em;
        "
      >0</div>
      <div style="
        font-size:0.75rem; 
        color:var(--text-muted); 
        font-weight:600; 
        text-transform:uppercase; 
        letter-spacing:0.08em;
      ">${s.label}</div>
    </div>
  `).join('');

  // Animasi angka merangkak naik (Count Up Animation)
  const duration = 2500; // 2.5 detik
  const counters = el.querySelectorAll('.stat-counter-target');

  const startAnimation = () => {
    const start = performance.now();
    const updateCounters = (currentTime) => {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutExpo untuk perlambatan dramatis di akhir
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return;
        const currentVal = Math.floor(target * easeProgress);
        counter.textContent = currentVal;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      } else {
        // Capping terakhir angka pasti tepat
        counters.forEach(counter => {
          counter.textContent = counter.getAttribute('data-target');
        });
      }
    };
    requestAnimationFrame(updateCounters);
  };

  // Gunakan Observer agar animasi jalan saat elemen terlihat (misal di-scroll atau awal web buka)
  const observer = new IntersectionObserver((entries) => {
    if(entries[0].isIntersecting) {
      startAnimation();
      observer.disconnect();
    }
  }, { threshold: 0.1 });
  
  observer.observe(el);
}

function renderHighlights() {
  const el = document.getElementById('highlights-grid');
  if (!el) return;

  // Update grid style for bento layout
  el.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.25rem;
  `;

  el.innerHTML = PROFILE.highlights.map((h, i) => {
    const accent = h.accentColor || 'var(--accent)';
    const accentRgb = h.accentRgb || 'var(--accent-rgb)';
    const delay = i * 80;

    return `
    <div class="hl-card reveal reveal-delay-${i+1}"
      style="
        position:relative; overflow:hidden; border-radius:22px;
        padding:1.75rem 1.6rem 1.5rem;
        background:linear-gradient(145deg,rgba(15,22,41,0.95) 0%,rgba(8,13,26,0.98) 100%);
        border:1px solid rgba(255,255,255,0.07);
        cursor:default;
        transition:transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, border-color 0.35s ease;
        animation-delay:${delay}ms;
      "
      onmouseover="
        this.style.transform='translateY(-8px) scale(1.02)';
        this.style.boxShadow='0 24px 50px rgba(0,0,0,0.5), 0 0 30px ${h.glowColor || 'rgba(0,212,255,0.12)'}';
        this.style.borderColor='${h.borderHover || 'rgba(0,212,255,0.3)'}';
        this.querySelector('.hl-icon-ring').style.transform='rotate(-8deg) scale(1.1)';
        this.querySelector('.hl-bg-glow').style.opacity='0.35';
        const img = this.querySelector('.hl-bg-img'); if(img) img.style.transform='scale(1.1)';
      "
      onmouseout="
        this.style.transform='translateY(0) scale(1)';
        this.style.boxShadow='';
        this.style.borderColor='rgba(255,255,255,0.07)';
        this.querySelector('.hl-icon-ring').style.transform='rotate(0deg) scale(1)';
        this.querySelector('.hl-bg-glow').style.opacity='0.12';
        const img = this.querySelector('.hl-bg-img'); if(img) img.style.transform='scale(1)';
      "
    >
      <!-- Top accent line -->
      <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${accent},transparent);opacity:0.7;"></div>

      <!-- Corner glow -->
      <div class="hl-bg-glow" style="
        position:absolute;top:-40px;right:-40px;
        width:160px;height:160px;border-radius:50%;
        background:${h.color || 'rgba(0,212,255,0.15)'};
        filter:blur(50px);opacity:0.12;
        pointer-events:none;
        transition:opacity 0.4s ease;
      "></div>

      <!-- Background image layer (if any) -->
      ${h.image ? `
        <div class="hl-bg-img" style="position:absolute;inset:0;background-image:url('${h.image}');background-size:cover;background-position:center;opacity:0.45;z-index:0;border-radius:22px;transition:transform 0.5s var(--ease);"></div>
        <div style="position:absolute;inset:0;background:linear-gradient(145deg,rgba(8,13,26,0.75) 0%,rgba(8,13,26,0.15) 100%);z-index:0;border-radius:22px;"></div>
      ` : ''}

      <!-- Mesh grid pattern -->
      <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.015) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.015) 1px,transparent 1px);background-size:24px 24px;pointer-events:none;border-radius:22px;opacity:0.6;"></div>

      <!-- Content -->
      <div style="position:relative;z-index:2;">

        <!-- Icon badge -->
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1.25rem;">
          <div class="hl-icon-ring" style="
            width:52px;height:52px;border-radius:16px;
            display:flex;align-items:center;justify-content:center;
            font-size:1.6rem;
            background:linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02));
            border:1px solid rgba(255,255,255,0.1);
            box-shadow:0 8px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
            transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
          ">${h.icon}</div>

          <!-- Number badge -->
          ${h.number ? `
          <div style="
            font-family:var(--font-display);font-size:1.8rem;font-weight:900;
            color:${accent};letter-spacing:-0.04em;line-height:1;
            text-shadow:0 0 20px ${h.glowColor || 'rgba(0,212,255,0.4)'};
          ">${h.number}<span style="font-size:0.9rem;opacity:0.6;">${h.numberSuffix||''}</span></div>
          ` : ''}
        </div>

        <!-- Title -->
        <h3 style="
          font-size:1.05rem;font-weight:900;margin-bottom:0.5rem;
          letter-spacing:-0.02em;color:#ffffff;line-height:1.25;
          text-shadow:0 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.5);
        ">${h.title}</h3>

        <!-- Description -->
        <p style="
          font-size:0.845rem;color:#cbd5e1;line-height:1.7;
          font-weight:500;margin-bottom:1.1rem;
          text-shadow:0 1px 3px rgba(0,0,0,0.8);
        ">${h.desc}</p>

        <!-- Progress dots / skill level -->
        ${h.level !== undefined ? `
        <div style="display:flex;align-items:center;gap:0.4rem;margin-top:auto;">
          <div style="display:flex;gap:4px;">
            ${[1,2,3,4,5].map(n => `
              <div style="
                width:6px;height:6px;border-radius:50%;
                background:${n <= h.level ? accent : 'rgba(255,255,255,0.1)'};
                box-shadow:${n <= h.level ? `0 0 6px ${h.glowColor||'rgba(0,212,255,0.6)'}` : '0 1px 2px rgba(0,0,0,0.5)'};
                transition:all 0.3s ease;
              "></div>
            `).join('')}
          </div>
          <span style="font-family:var(--font-mono);font-size:0.68rem;color:rgba(255,255,255,0.6);letter-spacing:0.06em;font-weight:600;text-shadow:0 1px 2px rgba(0,0,0,0.8);">
            ${['','PEMULA','DASAR','MENENGAH','MAHIR','EXPERT'][h.level]||''}
          </span>
        </div>
        ` : ''}

        <!-- Tags -->
        ${h.tags ? `
        <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-top:0.85rem;">
          ${h.tags.map(tag => `
            <span style="
              font-family:var(--font-mono);font-size:0.62rem;font-weight:700;
              padding:4px 9px;border-radius:6px;
              background:rgba(0,0,0,0.35);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);
              border:1px solid rgba(255,255,255,0.15);
              color:rgba(255,255,255,0.85);
              letter-spacing:0.06em;text-transform:uppercase;
            ">${tag}</span>
          `).join('')}
        </div>
        ` : ''}
      </div>

      <!-- Bottom border glow on hover -->
      <div style="position:absolute;bottom:0;left:20%;right:20%;height:1px;background:linear-gradient(90deg,transparent,${accent},transparent);opacity:0;transition:opacity 0.4s;"></div>
    </div>
  `;
  }).join('');
}

function renderFeaturedProjects() {
  const el = document.getElementById('featured-projects');
  if (!el) return;

  // ── Outer container: clips overflow, stays static ──────────────────────
  el.style.cssText = `
    position:relative;
    overflow:hidden;
    width:100%;
    padding:1rem 0 1.5rem;
    cursor:grab;
    user-select:none;
  `;

  // ── Build card HTML — Premium 4D ──────────────────────────────────────
  const glowColors = [
    'rgba(0,212,255,0.6)','rgba(139,92,246,0.6)','rgba(244,63,94,0.6)',
    'rgba(20,184,166,0.6)','rgba(245,158,11,0.6)','rgba(16,185,129,0.6)'
  ];
  const borderColors = [
    'rgba(0,212,255,0.3)','rgba(139,92,246,0.3)','rgba(244,63,94,0.3)',
    'rgba(20,184,166,0.3)','rgba(245,158,11,0.3)','rgba(16,185,129,0.3)'
  ];

  const cardHTML = PROJECTS.map((p, i) => {
    const glow   = glowColors[i % glowColors.length];
    const border = borderColors[i % borderColors.length];
    const num    = String(i + 1).padStart(2, '0');
    return `
    <div class="proj-card-4d"
      style="flex:0 0 auto;width:300px;cursor:pointer;animation:none;
        position:relative;border-radius:20px;overflow:hidden;
        background:#0a101f;
        border:1px solid rgba(255,255,255,0.07);
        box-shadow:0 12px 36px rgba(0,0,0,0.4);
        transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.4s ease,border-color 0.4s ease;"
      onclick="window.location.href='projects.html'"
      onmouseover="
        this.style.transform='translateY(-10px) scale(1.02)';
        this.style.boxShadow='0 28px 60px rgba(0,0,0,0.6),0 0 30px ${glow.replace('0.6','0.2')}';
        this.style.borderColor='${border}';
        this.querySelector('.proj-img-4d').style.transform='scale(1.12) translate(-1%,1%)';
        this.querySelector('.proj-shimmer').style.opacity='1';
        this.querySelector('.proj-num').style.opacity='1';
      "
      onmouseout="
        this.style.transform='';this.style.boxShadow='0 12px 36px rgba(0,0,0,0.4)';
        this.style.borderColor='rgba(255,255,255,0.07)';
        this.querySelector('.proj-img-4d').style.transform='scale(1.04) translate(0,0)';
        this.querySelector('.proj-shimmer').style.opacity='0';
        this.querySelector('.proj-num').style.opacity='0';
      ">

      <!-- Top accent line -->
      <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${glow},transparent);z-index:5;"></div>

      <!-- Image with Ken Burns -->
      <div style="position:relative;height:200px;overflow:hidden;">
        <img src="${p.image}" alt="${p.title}" loading="lazy" class="proj-img-4d"
          style="width:100%;height:100%;object-fit:cover;
            transform:scale(1.04) translate(0,0);
            transition:transform 6s cubic-bezier(0.25,0.46,0.45,0.94);
            will-change:transform;">

        <!-- Gradient overlay — fades image into card body -->
        <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 30%,rgba(4,8,18,0.85) 75%,rgba(4,8,18,1) 100%);z-index:1;"></div>

        <!-- Top-left: project number -->
        <div class="proj-num" style="position:absolute;top:12px;left:14px;z-index:3;
          font-family:var(--font-mono);font-size:0.65rem;font-weight:700;
          color:rgba(255,255,255,0.5);letter-spacing:0.1em;
          opacity:0;transition:opacity 0.3s ease;">
          ${num}
        </div>

        <!-- Top-right: status badge -->
        <div style="position:absolute;top:12px;right:12px;z-index:3;">
          <span class="status-badge ${p.status === 'Selesai' ? 'status-done' : 'status-wip'}"
            style="backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:0.65rem;">
            ${p.status}
          </span>
        </div>

        <!-- Category chip bottom-left -->
        <div style="position:absolute;bottom:14px;left:14px;z-index:3;">
          <span style="font-family:var(--font-mono);font-size:0.6rem;font-weight:700;
            letter-spacing:0.1em;text-transform:uppercase;
            padding:3px 9px;border-radius:99px;
            background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);
            color:rgba(255,255,255,0.6);backdrop-filter:blur(8px);">
            ${p.category || 'web'}
          </span>
        </div>

        <!-- Shimmer diagonal sweep on hover -->
        <div class="proj-shimmer" style="
          position:absolute;inset:0;z-index:4;pointer-events:none;
          background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.08) 50%,transparent 70%);
          opacity:0;transition:opacity 0.4s ease;">
        </div>
      </div>

      <!-- Card body -->
      <div style="padding:1.1rem 1.25rem 1.25rem;position:relative;z-index:2;">

        <!-- Corner glow -->
        <div style="position:absolute;bottom:-20px;right:-20px;width:100px;height:100px;
          background:radial-gradient(circle,${glow.replace('0.6','0.12')},transparent 70%);
          pointer-events:none;border-radius:50%;"></div>

        <h3 style="font-size:0.95rem;font-weight:800;line-height:1.3;color:#fff;
          margin-bottom:0.5rem;letter-spacing:-0.01em;">${p.title}</h3>

        <p style="font-size:0.775rem;color:#5a7090;line-height:1.7;margin-bottom:0.9rem;">
          ${p.desc.substring(0, 90)}...
        </p>

        <!-- Tags -->
        <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center;">
          ${p.tags.slice(0, 3).map(t => `
            <span style="font-family:var(--font-mono);font-size:0.62rem;font-weight:600;
              padding:3px 8px;border-radius:6px;
              background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
              color:rgba(255,255,255,0.4);letter-spacing:0.04em;text-transform:uppercase;">
              ${t}
            </span>`).join('')}
          <span style="margin-left:auto;font-size:0.7rem;color:rgba(255,255,255,0.2);font-weight:700;">
            ${p.year || ''}
          </span>
        </div>
      </div>
    </div>`;
  }).join('');


  // ── Inner scroller: gets the transform, duplicated for seamless loop ──
  const scroller = document.createElement('div');
  scroller.className = 'proj-scroller';
  scroller.style.cssText = `
    display:flex;
    flex-wrap:nowrap;
    gap:1.25rem;
    width:max-content;
    will-change:transform;
  `;
  scroller.innerHTML = cardHTML + cardHTML;
  el.innerHTML = '';
  el.appendChild(scroller);

  // ── Auto-scroll engine (RAF) ───────────────────────────────────────────
  let currentX    = 0;
  let halfWidth   = 0;
  let paused      = false;
  let resumeTimer = null;
  const SPEED     = 0.65;

  // Measure after first paint
  setTimeout(() => { halfWidth = scroller.scrollWidth / 2; }, 150);

  function getDisplayX() {
    if (!halfWidth) return 0;
    // Modulo-wrap so it loops seamlessly
    return -((((-currentX) % halfWidth) + halfWidth) % halfWidth);
  }

  let targetX = null;
  function tick() {
    if (!paused && targetX === null) currentX -= SPEED;
    if (targetX !== null) {
      const diff = targetX - currentX;
      currentX += diff * 0.12;
      if (Math.abs(diff) < 0.5) { currentX = targetX; targetX = null; }
    }
    scroller.style.transform = `translateX(${getDisplayX()}px)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pause()  { paused = true; clearTimeout(resumeTimer); }
  function resume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, 1200);
  }

  // Hover pause/resume
  el.addEventListener('mouseenter', pause);
  el.addEventListener('mouseleave', resume);

  // Mouse drag
  let dragging = false, dragStartX = 0, dragOffsetX = 0;
  el.addEventListener('mousedown', e => {
    dragging = true; targetX = null;
    dragStartX = e.clientX; dragOffsetX = currentX;
    el.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    pause();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    currentX = dragOffsetX + (e.clientX - dragStartX);
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    el.style.cursor = 'grab';
    document.body.style.userSelect = '';
    resume();
  });

  // Touch swipe
  let touchStartX = 0, touchOffsetX = 0;
  el.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX; touchOffsetX = currentX; pause();
  }, { passive: true });
  el.addEventListener('touchmove', e => {
    currentX = touchOffsetX + (e.touches[0].clientX - touchStartX);
  }, { passive: true });
  el.addEventListener('touchend', resume);

  // Arrow buttons
  const btnPrev = document.getElementById('btn-prev-projects');
  const btnNext = document.getElementById('btn-next-projects');
  if (btnPrev) btnPrev.addEventListener('click', () => {
    targetX = (targetX !== null ? targetX : currentX) + 340; pause(); resume();
  });
  if (btnNext) btnNext.addEventListener('click', () => {
    targetX = (targetX !== null ? targetX : currentX) - 340; pause(); resume();
  });
}

function renderTools() {
  const wrapper = document.querySelector('.marquee-wrapper');
  const scroller = document.getElementById('tools-marquee');
  if (!scroller || !wrapper) return;

  const itemsHTML = PROFILE.tools.map(t => `
    <div class="tool-item" style="--tool-color: ${t.color || 'var(--accent)'};">
      <div class="tool-glow" style="background: ${t.color || 'var(--accent)'};"></div>
      <div class="tool-icon-ring">
        <div class="tool-icon-inner">
          <img src="${t.icon}" alt="${t.name}" loading="lazy" width="26" height="26" style="${t.style || ''}" onerror="this.style.display='none'">
        </div>
      </div>
      <span class="tool-name">${t.name}</span>
    </div>
  `).join('');

  scroller.innerHTML = itemsHTML + itemsHTML;

  // ── State ──────────────────────────────────────────────────────────────
  let currentX   = 0;
  let halfWidth  = 0;
  let userActive = false;
  let resumeTimer = null;
  const SPEED = 0.7; // px / frame

  // Measure after first paint
  setTimeout(() => { halfWidth = scroller.scrollWidth / 2; }, 100);

  // Map any currentX value to visual position using modulo — no jumps, infinite drag
  function displayX() {
    if (!halfWidth) return 0;
    const pos = -currentX;
    return -(((pos % halfWidth) + halfWidth) % halfWidth);
  }

  let targetX = null;

  // RAF: single source of truth for the transform
  function tick() {
    if (!userActive && targetX === null) {
      currentX -= SPEED;
    }
    
    // Smooth scroll tweening for buttons
    if (targetX !== null) {
      const diff = targetX - currentX;
      currentX += diff * 0.15; 
      if (Math.abs(diff) < 1) {
        currentX = targetX;
        targetX = null;
      }
    }
    
    scroller.style.transform = `translateX(${displayX()}px)`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pause() {
    userActive = true;
    clearTimeout(resumeTimer);
  }
  function resume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { userActive = false; }, 1500);
  }

  // ── Mouse Drag ─────────────────────────────────────────────────────────
  let dragging = false, startX = 0, startOffset = 0;

  wrapper.addEventListener('mousedown', e => {
    dragging     = true;
    targetX      = null; 
    startX       = e.clientX;
    startOffset  = currentX;
    wrapper.style.cursor = 'grabbing';
    document.body.style.userSelect = 'none';
    pause();
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    currentX = startOffset + (e.clientX - startX);
  });

  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    wrapper.style.cursor = 'grab';
    document.body.style.userSelect = '';
    resume();
  });

  // ── Mouse Wheel ────────────────────────────────────────────────────────
  wrapper.addEventListener('wheel', e => {
    e.preventDefault();
    currentX -= e.deltaY * 1.5;
    pause();
    resume();
  }, { passive: false });

  // ── Touch ──────────────────────────────────────────────────────────────
  let touchX = 0, touchOffset = 0;

  wrapper.addEventListener('touchstart', e => {
    touchX      = e.touches[0].clientX;
    touchOffset = currentX;
    pause();
  }, { passive: true });

  wrapper.addEventListener('touchmove', e => {
    currentX = touchOffset + (e.touches[0].clientX - touchX);
  }, { passive: true });

  wrapper.addEventListener('touchend', resume);

  // ── Navigation Buttons ────────────────────────────────────────────────
  const btnPrev = document.getElementById('btn-prev-tools');
  const btnNext = document.getElementById('btn-next-tools');
  if (btnPrev && btnNext) {
    btnPrev.addEventListener('click', () => {
      targetX = (targetX !== null ? targetX : currentX) + 350;
      pause(); resume();
    });
    btnNext.addEventListener('click', () => {
      targetX = (targetX !== null ? targetX : currentX) - 350;
      pause(); resume();
    });
  }
}

function initThreeHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas || typeof THREE === 'undefined') {
    initFallbackHero();
    return;
  }

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  const getAccent = () => getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00d4ff';

  // ── 4D Tesseract (Hypercube) ─────────────────────────────────────────
  // 16 vertices of a 4D hypercube projected into 3D
  const w4d = 7; // 4th dimension "width"
  const rawVerts4D = [];
  for (let x = -1; x <= 1; x += 2)
    for (let y = -1; y <= 1; y += 2)
      for (let z = -1; z <= 1; z += 2)
        for (let w = -1; w <= 1; w += 2)
          rawVerts4D.push([x * w4d, y * w4d, z * w4d, w * w4d]);

  // Edges: connect vertices that differ in exactly one coordinate
  const edges4D = [];
  for (let i = 0; i < rawVerts4D.length; i++)
    for (let j = i + 1; j < rawVerts4D.length; j++) {
      let diff = 0;
      for (let k = 0; k < 4; k++) if (rawVerts4D[i][k] !== rawVerts4D[j][k]) diff++;
      if (diff === 1) edges4D.push([i, j]);
    }

  // Project 4D → 3D (perspective projection on W axis)
  function project4Dto3D(v4, angleXW, angleYW, angleZW) {
    let [x, y, z, w] = v4;
    // Rotate in XW plane
    let x1 = x * Math.cos(angleXW) - w * Math.sin(angleXW);
    let w1 = x * Math.sin(angleXW) + w * Math.cos(angleXW);
    // Rotate in YW plane
    let y1 = y * Math.cos(angleYW) - w1 * Math.sin(angleYW);
    let w2 = y * Math.sin(angleYW) + w1 * Math.cos(angleYW);
    // Rotate in ZW plane
    let z1 = z * Math.cos(angleZW) - w2 * Math.sin(angleZW);
    let w3 = z * Math.sin(angleZW) + w2 * Math.cos(angleZW);
    // Perspective divide by W+dist
    const dist = 22;
    const scale = dist / (dist - w3 * 0.45);
    return new THREE.Vector3(x1 * scale, y1 * scale, z1 * scale);
  }

  // Build line segments geometry (each edge = 2 points)
  const linePositions = new Float32Array(edges4D.length * 2 * 3);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

  const lineMat = new THREE.LineBasicMaterial({
    color: getAccent(),
    transparent: true,
    opacity: 0.75,
    linewidth: 1
  });
  const tesseract = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(tesseract);

  // Vertex glow spheres
  const sphereGeo = new THREE.SphereGeometry(0.22, 8, 8);
  const sphereMat = new THREE.MeshBasicMaterial({ color: getAccent(), transparent: true, opacity: 0.95 });
  const vertSpheres = rawVerts4D.map(() => {
    const mesh = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(mesh);
    return mesh;
  });

  // ── Neural Particle Network ──────────────────────────────────────────
  const NODE_COUNT = 80;
  const SPREAD = 50;
  const nodePositions = Array.from({ length: NODE_COUNT }, () => ({
    pos: new THREE.Vector3(
      (Math.random() - 0.5) * SPREAD,
      (Math.random() - 0.5) * SPREAD * 0.65,
      (Math.random() - 0.5) * SPREAD
    ),
    vel: new THREE.Vector3(
      (Math.random() - 0.5) * 0.015,
      (Math.random() - 0.5) * 0.015,
      (Math.random() - 0.5) * 0.015
    )
  }));

  // Particle dots
  const dotPositions = new Float32Array(NODE_COUNT * 3);
  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute('position', new THREE.BufferAttribute(dotPositions, 3));
  const dotMat = new THREE.PointsMaterial({ color: getAccent(), size: 0.28, transparent: true, opacity: 0.65 });
  const dots = new THREE.Points(dotGeo, dotMat);
  scene.add(dots);

  // Connection lines (pre-allocate for max connections)
  const MAX_LINES = NODE_COUNT * (NODE_COUNT - 1) / 2;
  const connPositions = new Float32Array(MAX_LINES * 2 * 3);
  const connGeo = new THREE.BufferGeometry();
  connGeo.setAttribute('position', new THREE.BufferAttribute(connPositions, 3));
  const connMat = new THREE.LineBasicMaterial({ color: getAccent(), transparent: true, opacity: 0.12, vertexColors: false });
  const connLines = new THREE.LineSegments(connGeo, connMat);
  scene.add(connLines);

  // ── Starfield background ─────────────────────────────────────────────
  const starCount = 400;
  const starPos = new Float32Array(starCount * 3);
  for (let i = 0; i < starCount * 3; i++) starPos[i] = (Math.random() - 0.5) * 200;
  const starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.3 });
  scene.add(new THREE.Points(starGeo, starMat));

  camera.position.z = 38;

  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', e => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Optimize: Pause Three.js completely when hero is off-screen
  let isVisible = true;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      isVisible = entry.isIntersecting;
    });
  }, { threshold: 0 });
  observer.observe(canvas);

  let t = 0;
  const animate = () => {
    requestAnimationFrame(animate);
    
    // Stop all heavy calculations if the user scrolled past the hero section!
    if (!isVisible) return; 

    t += 0.008;

    // Animate 4D Tesseract angles over time
    const angleXW = t * 0.55;
    const angleYW = t * 0.38;
    const angleZW = t * 0.22;

    // Update tesseract vertices
    const posAttr = lineGeo.attributes.position;
    const projected = rawVerts4D.map(v => project4Dto3D(v, angleXW, angleYW, angleZW));

    edges4D.forEach(([a, b], i) => {
      const pa = projected[a], pb = projected[b];
      const base = i * 6;
      posAttr.array[base]     = pa.x; posAttr.array[base + 1] = pa.y; posAttr.array[base + 2] = pa.z;
      posAttr.array[base + 3] = pb.x; posAttr.array[base + 4] = pb.y; posAttr.array[base + 5] = pb.z;
    });
    posAttr.needsUpdate = true;

    // Update vertex spheres
    projected.forEach((p, i) => vertSpheres[i].position.copy(p));

    // Tesseract slow rotation in 3D space
    tesseract.rotation.y += 0.002;

    // Animate neural nodes
    nodePositions.forEach(n => {
      n.pos.addScaledVector(n.vel, 1);
      if (Math.abs(n.pos.x) > SPREAD / 2) n.vel.x *= -1;
      if (Math.abs(n.pos.y) > SPREAD * 0.325) n.vel.y *= -1;
      if (Math.abs(n.pos.z) > SPREAD / 2) n.vel.z *= -1;
    });

    // Update dot positions
    const dp = dotGeo.attributes.position;
    nodePositions.forEach((n, i) => {
      dp.array[i * 3] = n.pos.x;
      dp.array[i * 3 + 1] = n.pos.y;
      dp.array[i * 3 + 2] = n.pos.z;
    });
    dp.needsUpdate = true;

    // Update neural connections (connect close nodes)
    const cp = connGeo.attributes.position;
    let ci = 0;
    const CONN_DIST = 14;
    for (let i = 0; i < NODE_COUNT && ci < MAX_LINES; i++) {
      for (let j = i + 1; j < NODE_COUNT && ci < MAX_LINES; j++) {
        const d = nodePositions[i].pos.distanceTo(nodePositions[j].pos);
        if (d < CONN_DIST) {
          const base = ci * 6;
          cp.array[base]     = nodePositions[i].pos.x;
          cp.array[base + 1] = nodePositions[i].pos.y;
          cp.array[base + 2] = nodePositions[i].pos.z;
          cp.array[base + 3] = nodePositions[j].pos.x;
          cp.array[base + 4] = nodePositions[j].pos.y;
          cp.array[base + 5] = nodePositions[j].pos.z;
          ci++;
        }
      }
    }
    // Zero out unused slots
    for (let i = ci; i < MAX_LINES; i++) {
      cp.array[i * 6] = cp.array[i * 6 + 1] = cp.array[i * 6 + 2] = 0;
      cp.array[i * 6 + 3] = cp.array[i * 6 + 4] = cp.array[i * 6 + 5] = 0;
    }
    cp.needsUpdate = true;

    // Mouse parallax
    camera.position.x += (mouseX * 4 - camera.position.x) * 0.04;
    camera.position.y += (-mouseY * 2.5 - camera.position.y) * 0.04;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };
  animate();

  // Resize
  const handleResize = () => {
    const w = canvas.offsetWidth, h = canvas.offsetHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  };
  window.addEventListener('resize', handleResize);

  // Accent color reactivity
  const accentObserver = new MutationObserver(() => {
    const c = getAccent();
    lineMat.color.set(c);
    sphereMat.color.set(c);
    dotMat.color.set(c);
    connMat.color.set(c);
  });
  accentObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-accent'] });
}

/** CSS-only fallback if Three.js fails to load */
function initFallbackHero() {
  const section = document.getElementById('hero');
  if (!section) return;
  const el = document.createElement('div');
  el.id = 'hero-fallback-visual';
  el.style.cssText = `
    position:absolute;right:5%;top:50%;transform:translateY(-50%);
    width:340px;height:340px;z-index:1;pointer-events:none;
  `;
  el.innerHTML = `<canvas id="fallback-canvas" width="340" height="340" style="width:100%;height:100%;"></canvas>`;
  section.appendChild(el);

  const fc = document.getElementById('fallback-canvas');
  if (!fc) return;
  const ctx = fc.getContext('2d');
  const W = 340, H = 340, CX = W / 2, CY = H / 2;
  const accentStr = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00d4ff';

  let angle = 0;
  function drawFallback() {
    ctx.clearRect(0, 0, W, H);
    const r1 = 120, r2 = 70;
    ctx.strokeStyle = accentStr;
    ctx.lineWidth = 1.5;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.arc(CX, CY, r1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.globalAlpha = 0.35;
    ctx.beginPath();
    ctx.arc(CX, CY, r2, 0, Math.PI * 2);
    ctx.stroke();
    // rotating lines
    for (let i = 0; i < 8; i++) {
      const a = angle + (i * Math.PI * 2) / 8;
      ctx.globalAlpha = 0.2 + 0.1 * Math.sin(angle * 2 + i);
      ctx.beginPath();
      ctx.moveTo(CX + Math.cos(a) * r2, CY + Math.sin(a) * r2);
      ctx.lineTo(CX + Math.cos(a) * r1, CY + Math.sin(a) * r1);
      ctx.stroke();
    }
    angle += 0.012;
    requestAnimationFrame(drawFallback);
  }
  drawFallback();
}

/* ===================== ABOUT ===================== */
function initAbout() {
  renderTimeline();
  renderValues();
  renderOrgExperience();
  renderLanguages();
}

function renderTimeline() {
  const el = document.getElementById('education-timeline');
  if (!el) return;
  el.innerHTML = PROFILE.education.map(edu => `
    <div class="timeline-item reveal glass-card" style="margin-bottom:2.5rem; display:flex; gap:1.5rem; position:relative; padding:1.5rem; overflow:hidden; border-radius:18px; border:1px solid var(--border);">
      
      <!-- Background Image Layer -->
      <div style="position:absolute; inset:0; background-image:url('${edu.bgImage}'); background-size:cover; background-position:center; opacity:0.15; z-index:0; transition:all 0.5s ease;" class="card-bg"></div>
      
      <!-- Gradient Overlay for readability -->
      <div style="position:absolute; inset:0; background:linear-gradient(135deg, var(--bg) 40%, rgba(var(--accent-rgb), 0.05) 100%); z-index:0; pointer-events:none;"></div>
      
      <!-- Avatar/Logo Wrapper -->
      <div style="flex-shrink:0; width:68px; height:68px; border-radius:16px; overflow:hidden; background:var(--bg3); border:1px solid var(--border); box-shadow:0 8px 32px rgba(0,0,0,0.4); cursor:pointer; position:relative; z-index:2;" onclick="openImageModal('${edu.image}')" title="Klik untuk perbesar">
        <img src="${edu.image}" alt="${edu.institution}" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s var(--ease);" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'" loading="lazy" onerror="this.style.display='none'">
      </div>
      
      <div style="flex:1; position:relative; z-index:2;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
          <div>
            <h3 style="font-size:1.2rem; font-weight:800; color:var(--text); letter-spacing:-0.015em; line-height:1.2;">${edu.institution}</h3>
            <p style="font-size:0.95rem; font-weight:700; color:var(--accent); margin-top:0.25rem;">${edu.degree}</p>
          </div>
          <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--accent); font-weight:800; background:var(--accent-dim); padding:5px 14px; border-radius:99px; border:1px solid var(--border-accent); shadow:0 2px 10px rgba(var(--accent-rgb), 0.1);">${edu.period}</span>
        </div>
        
        <p style="font-size:0.925rem; color:rgba(255, 255, 255, 0.85); line-height:1.75; text-shadow:0 1px 3px rgba(0,0,0,0.4);">${edu.desc}</p>
        
        ${edu.current ? `
          <div style="display:inline-flex; align-items:center; gap:8px; margin-top:1.25rem; font-size:0.75rem; font-weight:700; color:#10b981; background:rgba(16,185,129,0.1); padding:5px 14px; border-radius:99px; border:1px solid rgba(16,185,129,0.2);">
            <span style="width:7px; height:7px; border-radius:50%; background:#10b981; box-shadow:0 0 10px #10b981; animation: pulse-dot 2s infinite;"></span>
            Aktif / Sedang Ditempuh
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

function renderValues() {
  const values = [
    { icon: '🧠', title: 'Terus Belajar', desc: 'Dunia teknologi berkembang cepat — saya berkomitmen untuk selalu update skill dan pengetahuan.' },
    { icon: '🤝', title: 'Kerja Tim', desc: 'Pernah memimpin organisasi mahasiswa, saya memahami pentingnya kolaborasi dan komunikasi.' },
    { icon: '⚡', title: 'Adaptif', desc: 'Dari bengkel mesin ke kode — saya terbiasa masuk ke lingkungan baru dan menyesuaikan diri.' },
    { icon: '💡', title: 'Jujur & Realistis', desc: 'Saya tidak overclaim skill. Lebih baik jujur tentang kemampuan dan fokus pada pertumbuhan nyata.' }
  ];
  const el = document.getElementById('values-grid');
  if (!el) return;
  el.innerHTML = values.map((v, i) => `
    <div class="glass-card reveal reveal-delay-${i+1}" style="padding:1.5rem;">
      <div style="font-size:1.75rem;margin-bottom:0.75rem;">${v.icon}</div>
      <h3 style="font-size:0.95rem;font-weight:700;margin-bottom:0.5rem;">${v.title}</h3>
      <p style="font-size:0.8rem;color:var(--text-muted);line-height:1.6;">${v.desc}</p>
    </div>
  `).join('');
}

function renderOrgExperience() {
  const el = document.getElementById('org-list');
  if (!el) return;
  el.innerHTML = PROFILE.organization.map((o, i) => `
    <div class="org-card-premium reveal reveal-delay-${i+1}" style="position:relative;">
      <!-- Background Image Layer -->
      <div style="position:absolute; inset:0; background-image:url('${o.image}'); background-size:cover; background-position:center; opacity:0.45; z-index:0; transition:all 0.5s ease;" class="card-bg"></div>
      
      <!-- Gradient Overlay for readability -->
      <div style="position:absolute; inset:0; background:linear-gradient(135deg, var(--bg2) 55%, rgba(15, 22, 41, 0.6) 100%); z-index:0; pointer-events:none;"></div>
      
      <!-- Decorative Elements -->
      <div class="card-mesh"></div>
      <div class="card-bg-pattern"></div>
      
      <div style="display:flex; gap:1.5rem; position:relative; z-index:2; align-items:flex-start;">
        <!-- Icon Wrapper -->
        <div class="org-icon-wrap">
          <div class="org-icon-inner" style="background:#000; border:1px solid rgba(var(--accent-rgb),0.3); overflow:hidden; padding:10px;">
            <img src="${o.icon}" alt="${o.org}" style="width:100%; height:100%; object-fit:contain; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5));" onerror="this.parentElement.innerText='🏆'">
          </div>
        </div>
        
        <!-- Content -->
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
            <div>
              <h3 class="org-role-text">${o.role}</h3>
              <p class="org-name-text">${o.org}</p>
            </div>
            <span class="org-badge-date">${o.period}</span>
          </div>
          
          <div class="accent-line" style="margin:0.75rem 0; width:30px; height:2px; opacity:0.6;"></div>
          
          <p class="org-desc-text">
            ${o.desc}
          </p>
        </div>
      </div>
    </div>
  `).join('');
}

function renderLanguages() {
  const el = document.getElementById('lang-list');
  if (!el) return;
  el.innerHTML = PROFILE.languages.map(l => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--border);">
      <span style="font-size:0.875rem;font-weight:500;">${l.lang}</span>
      <span style="font-size:0.75rem;color:var(--accent);font-family:var(--font-mono);">${l.level}</span>
    </div>
  `).join('');
}

/* ===================== PROJECTS ===================== */
function initProjects() {
  let currentFilter = 'all';
  let currentSearch = '';

  function render() {
    const el = document.getElementById('projects-grid');
    if (!el) return;
    const filtered = PROJECTS.filter(p => {
      const matchCat = currentFilter === 'all' || p.category === currentFilter;
      const matchSearch = p.title.toLowerCase().includes(currentSearch) ||
        p.tags.some(t => t.toLowerCase().includes(currentSearch));
      return matchCat && matchSearch;
    });

    if (!filtered.length) {
      el.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:3rem;color:var(--text-dim);">Tidak ada proyek yang ditemukan.</div>`;
      return;
    }

    el.innerHTML = filtered.map(p => `
      <div class="project-card tilt-card" onclick="openModal(${p.id})" tabindex="0" role="button" aria-label="Lihat detail ${p.title}" onkeypress="if(event.key==='Enter')openModal(${p.id})">
        <div style="overflow:hidden;height:200px;">
          <img src="${p.image}" alt="${p.title}" loading="lazy" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div style="padding:1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;">
            <h3 style="font-size:0.95rem;font-weight:700;">${p.title}</h3>
            <span class="status-badge ${p.status === 'Selesai' ? 'status-done' : 'status-wip'}">${p.status}</span>
          </div>
          <p style="font-size:0.8rem;color:var(--text-muted);line-height:1.6;margin-bottom:0.75rem;">${p.desc.substring(0,110)}...</p>
          <div style="display:flex;flex-wrap:wrap;gap:4px;">
            ${p.tags.slice(0,4).map(t => `<span class="project-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');
    Animations.init();
  }

  // Filter pills
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilter = pill.dataset.filter;
      render();
    });
  });

  // Search
  const searchInput = document.getElementById('project-search');
  searchInput?.addEventListener('input', e => {
    currentSearch = e.target.value.toLowerCase().trim();
    render();
  });

  render();
}

// Modal for project detail
function openModal(id) {
  const p = PROJECTS.find(pr => pr.id === id);
  if (!p) return;
  const modal = document.getElementById('project-modal');
  const box = document.getElementById('modal-box');
  if (!modal || !box) return;

  const hasDemo   = p.demo   && p.demo   !== '#';
  const hasGithub = p.github && p.github !== '#';

  const demoBtnHTML = hasDemo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-primary" style="flex:1;justify-content:center;">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : `<button disabled title="Demo belum tersedia untuk proyek ini" style="flex:1;justify-content:center;padding:0.6rem 1rem;border-radius:10px;border:1px dashed rgba(255,255,255,0.12);background:rgba(255,255,255,0.02);color:var(--text-dim);font-size:0.875rem;cursor:not-allowed;display:flex;align-items:center;gap:6px;font-family:inherit;">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
         Demo Belum Tersedia
       </button>`;

  const githubBtnHTML = hasGithub
    ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-ghost" style="flex:1;justify-content:center;">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
         Lihat GitHub
       </a>`
    : `<button disabled title="Repositori ini bersifat privat" style="flex:1;justify-content:center;padding:0.6rem 1rem;border-radius:10px;border:1px dashed rgba(255,255,255,0.12);background:rgba(255,255,255,0.02);color:var(--text-dim);font-size:0.875rem;cursor:not-allowed;display:flex;align-items:center;gap:6px;font-family:inherit;">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
         Repositori Privat
       </button>`;

  box.innerHTML = `
    <div style="position:relative;">
      <img src="${p.image}" alt="${p.title}" style="width:100%;height:240px;object-fit:cover;border-radius:20px 20px 0 0;" loading="lazy">
      <button onclick="closeModal()" style="position:absolute;top:1rem;right:1rem;width:36px;height:36px;border-radius:50%;background:rgba(0,0,0,0.6);border:1px solid rgba(255,255,255,0.2);color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;" aria-label="Tutup modal">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div style="padding:1.5rem;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;">
        <h2 style="font-size:1.25rem;font-weight:800;">${p.title}</h2>
        <span class="status-badge ${p.status === 'Selesai' ? 'status-done' : 'status-wip'}">${p.status}</span>
      </div>
      <p style="font-size:0.875rem;color:var(--text-muted);line-height:1.7;margin-bottom:1.25rem;">${p.desc}</p>
      
      <div style="margin-bottom:1.25rem;">
        <h4 style="font-size:0.75rem;font-family:var(--font-mono);color:var(--accent);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">Fitur</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:0.35rem;">
          ${p.features.map(f => `<li style="font-size:0.85rem;color:var(--text-muted);display:flex;gap:0.5rem;"><span style="color:var(--accent);">▸</span>${f}</li>`).join('')}
        </ul>
      </div>

      <div style="margin-bottom:1.5rem;">
        <h4 style="font-size:0.75rem;font-family:var(--font-mono);color:var(--accent);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.5rem;">Tech Stack</h4>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">
          ${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex;gap:0.75rem;flex-wrap:wrap;">
        ${demoBtnHTML}
        ${githubBtnHTML}
      </div>
      ${!hasDemo && !hasGithub ? `<p style="margin-top:0.75rem;font-size:0.72rem;color:var(--text-dim);text-align:center;font-style:italic;">Proyek ini belum dipublikasikan. Update segera hadir di GitHub.</p>` : ''}
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close modal on backdrop click or Escape
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('project-modal');
  modal?.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});

/* ===================== RESUME ===================== */
function initResume() {
  renderSkillBars();
  renderExperience();
  renderTraining();
  renderCertificates();
  renderEducationCards();
}

function renderSkillBars() {
  PROFILE.skills.forEach(group => {
    const el = document.getElementById(`skills-${group.category.toLowerCase().replace(/[^a-z]/g, '-')}`);
    if (!el) return;
    
    // Apply background image to the card wrapper
    const cardEl = el.parentElement;
    if (cardEl && group.image) {
      cardEl.style.backgroundImage = `linear-gradient(135deg, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0.8) 100%), url('${group.image}')`;
      cardEl.style.backgroundSize = 'cover';
      cardEl.style.backgroundPosition = 'center';
      cardEl.style.border = '1px solid rgba(255,255,255,0.1)';
      cardEl.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)';
    }

    el.innerHTML = group.items.map(s => `
      <div style="margin-bottom:1.15rem;" class="reveal">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${s.icon ? `<img src="${s.icon}" alt="${s.name}" style="width:22px;height:22px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));">` : ''}
            <span style="font-size:0.9rem;font-weight:700;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.8);">${s.name}</span>
          </div>
          <span style="font-size:0.75rem;font-family:var(--font-mono);color:var(--accent);font-weight:600;">${s.level}</span>
        </div>
        <div class="skill-bar-track" style="background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.05); box-shadow:inset 0 1px 3px rgba(0,0,0,0.5);">
          <div class="skill-bar-fill" data-pct="${s.pct}" style="background:linear-gradient(90deg, var(--accent-dim), var(--accent));"></div>
        </div>
      </div>
    `).join('');
  });
  // Re-init skill bar observers after rendering
  setTimeout(() => {
    document.querySelectorAll('.skill-bar-fill').forEach(bar => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            setTimeout(() => { bar.style.width = `${bar.dataset.pct}%`; }, 150);
            observer.unobserve(bar);
          }
        });
      }, { threshold: 0.3 });
      observer.observe(bar);
    });
  }, 100);
}

function renderExperience() {
  const el = document.getElementById('experience-list');
  if (!el) return;
  el.innerHTML = PROFILE.experience.map(exp => `
    <div class="glass-card tilt-card reveal" style="padding:0; margin-bottom:1.5rem; border-left:4px solid var(--accent); overflow:hidden; background:var(--surface2);">
      
      <!-- Header Section with Background Image -->
      <div style="padding:1.5rem 1.5rem 1.2rem; background-image: linear-gradient(135deg, rgba(8, 12, 20, 0.95) 0%, rgba(8, 12, 20, 0.7) 100%), url('${exp.image || ''}'); background-position: center; background-size: cover; border-bottom:1px solid var(--border);">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
          <h3 style="font-size:1.15rem; font-weight:800; color:#ffffff; line-height:1.3; text-shadow:0 2px 4px rgba(0,0,0,0.5);">${exp.role}</h3>
          <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--accent); background:rgba(0,0,0,0.6); backdrop-filter:blur(4px); padding:4px 12px; border-radius:99px; border:1px solid rgba(255,255,255,0.1); white-space:nowrap; display:inline-flex; align-items:center; gap:6px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
            ${exp.period}
          </span>
        </div>
        
        <div style="display:flex; align-items:center; flex-wrap:wrap; gap:0.75rem;">
          <p style="font-size:0.9rem; font-weight:700; color:var(--accent); display:flex; align-items:center; gap:6px; text-shadow:0 2px 4px rgba(0,0,0,0.5);">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            ${exp.company}
          </p>
          <span style="font-size:0.75rem; color:#e2e8f0; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); padding:2px 8px; border-radius:4px; font-weight:600; border:1px solid rgba(255,255,255,0.1);">${exp.type}</span>
          
          ${exp.mapUrl ? `<a href="${exp.mapUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;font-size:0.72rem;font-weight:600;color:var(--accent);border:1px solid rgba(255,255,255,0.15);padding:2px 10px;border-radius:99px;text-decoration:none;transition:all 0.2s;background:rgba(0,0,0,0.6);backdrop-filter:blur(4px);" onmouseover="this.style.background='rgba(0,0,0,0.9)'; this.style.borderColor='var(--accent)'" onmouseout="this.style.background='rgba(0,0,0,0.6)'; this.style.borderColor='rgba(255,255,255,0.15)'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Lihat Lokasi</a>` : ''}
        </div>
      </div>
      
      <!-- Content Section -->
      <div style="padding:1.5rem;">
        <ul style="list-style:none; display:flex; flex-direction:column; gap:0.75rem;">
          ${exp.tasks.map(t => `
            <li style="font-size:0.875rem; color:var(--text-muted); display:flex; gap:0.75rem; align-items:flex-start; line-height:1.65;">
              <span style="color:var(--accent); margin-top:3px; flex-shrink:0;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              </span>
              ${t}
            </li>
          `).join('')}
        </ul>
      </div>
      
    </div>
  `).join('');
}

function renderTraining() {
  const el = document.getElementById('training-list');
  if (!el || !PROFILE.training) return;
  el.innerHTML = PROFILE.training.map((t, i) => `
    <div class="glass-card tilt-card reveal reveal-delay-${i+1}" style="padding:0; position:relative; overflow:hidden; border:1px solid rgba(0,212,255,0.2); box-shadow:0 8px 32px rgba(0,0,0,0.3); border-radius:18px;">
      
      <!-- Background pattern -->
      <div style="position:absolute; inset:0; background-image: linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px); background-size: 20px 20px; z-index:0; pointer-events:none; opacity:0.6;"></div>
      
      <!-- Right Image/Glow Overlay -->
      <div style="position:absolute; top:0; right:0; bottom:0; width:40%; background-image:url('${t.image || ''}'); background-size:cover; background-position:center; opacity:0.1; z-index:0; mask-image: linear-gradient(to right, transparent, black 60%); -webkit-mask-image: linear-gradient(to right, transparent, black 60%);"></div>

      <div style="padding:1.75rem; position:relative; z-index:2; display:grid; grid-template-columns: 1fr auto; gap:1.5rem; align-items:center;">
        
        <div>
          <div style="display:flex; flex-wrap:wrap; align-items:center; gap:0.65rem; margin-bottom:0.75rem;">
            <span style="font-size:0.75rem; font-family:var(--font-mono); font-weight:700; color:var(--bg); background:var(--accent); padding:3px 10px; border-radius:6px; letter-spacing:0.02em; display:inline-flex; align-items:center;">
               PELATIHAN
            </span>
            <span style="font-size:0.75rem; font-family:var(--font-mono); color:var(--text-muted); display:inline-flex; align-items:center; gap:4px;">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              ${t.period}
            </span>
          </div>
          
          <h3 style="font-size:1.15rem; font-weight:800; color:var(--text); margin-bottom:0.4rem; line-height:1.3; text-shadow:0 1px 2px rgba(0,0,0,0.5);">${t.title}</h3>
          
          <p style="font-size:0.875rem; font-weight:700; color:var(--accent); display:flex; align-items:center; gap:6px; margin-bottom:1rem;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            ${t.organizer}
          </p>
          
          <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.7; max-width:600px;">
            ${t.desc}
          </p>
        </div>

        <!-- Buttons/Links -->
        <div style="display:flex; flex-direction:column; gap:0.65rem;">
          ${t.image ? `<button onclick="openImageModal('${t.image}')" class="btn-ghost" style="padding:8px 14px; font-size:0.75rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg> Lihat Sertifikat</button>` : ''}
          ${t.url ? `<a href="${t.url}" target="_blank" rel="noopener" class="btn-primary" style="padding:8px 14px; font-size:0.75rem;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg> PDF View</a>` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function renderEducationCards() {
  const el = document.getElementById('resume-education-list');
  if (!el) return;
  el.innerHTML = PROFILE.education.map(edu => `
    <div class="glass-card tilt-card reveal" style="display:flex; flex-direction:column; overflow:hidden; background:var(--surface2);">
      <div style="display:flex; flex-wrap:wrap; width:100%; height:100%;">
        <!-- Image side -->
        <div style="flex: 0 0 auto; width: 100%; max-width: 200px; position:relative; background:var(--bg3); min-height: 140px; cursor:pointer;" onclick="openImageModal('${edu.image}')" title="Klik untuk perbesar gambar">
          <img src="${edu.image}" alt="${edu.institution}" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.85; transition:transform 0.5s var(--ease), opacity 0.5s var(--ease);" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.05)'" onmouseout="this.style.opacity='0.85'; this.style.transform='scale(1)'">
          <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0; background:rgba(0,0,0,0.4); transition:opacity 0.3s ease; color:#fff;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
          </div>
        </div>
        
        <!-- Content side -->
        <div style="flex: 1 1 0%; padding:1.5rem; display:flex; flex-direction:column; justify-content:center;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.35rem;">
            <h3 style="font-size:1.1rem; font-weight:800; line-height:1.3;">${edu.institution}</h3>
            <span style="font-size:0.75rem; color:#fff; background:rgba(0,0,0,0.5); backdrop-filter:blur(4px); padding:4px 10px; border-radius:99px; border:1px solid rgba(255,255,255,0.1); white-space:nowrap; display:inline-flex; align-items:center; gap:4px;">
              <span style="color:var(--accent);">🎓</span> ${edu.period}
            </span>
          </div>
          <p style="font-size:0.875rem; font-weight:600; color:var(--text-muted); margin-bottom:0.75rem;">${edu.degree}</p>
          <p style="font-size:0.8rem; color:var(--text-dim); line-height:1.65; margin-bottom:0.85rem;">${edu.desc}</p>
          
          <div style="display:flex; align-items:center; flex-wrap:wrap; gap:0.75rem;">
            ${edu.current ? '<span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:#10b981;background:rgba(16,185,129,0.1);padding:4px 10px;border-radius:99px;font-weight:600;"><span style="width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 8px rgba(16,185,129,0.8);"></span> Sedang Berjalan</span>' : '<span style="display:inline-flex;align-items:center;font-size:0.75rem;color:var(--text-dim);font-weight:500;">✓ Lulus</span>'}
            ${edu.mapUrl ? `<a href="${edu.mapUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:4px;font-size:0.75rem;color:var(--accent);border:1px solid var(--border-accent);padding:4px 10px;border-radius:99px;text-decoration:none;transition:all 0.2s;" onmouseover="this.style.background='var(--accent-dim)'" onmouseout="this.style.background='transparent'"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Lihat Lokasi</a>` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertificates() {
  const el = document.getElementById('certs-list');
  if (!el) return;
  el.innerHTML = PROFILE.certificates.map(c => `
    <div class="project-card tilt-card reveal" style="background:var(--surface2); display:flex; flex-direction:column; height:100%;">
      <div style="flex:0 0 auto; overflow:hidden; height:180px; position:relative; background:var(--bg3); cursor:pointer;" onclick="openImageModal('${c.image}')" title="Klik untuk perbesar sertifikat">
        <!-- Certificate Image Thumbnail -->
        <img src="${c.image}" alt="${c.name}" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.85; transition:transform 0.4s var(--ease), opacity 0.4s var(--ease);" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.05)'" onmouseout="this.style.opacity='0.85'; this.style.transform='scale(1)'">
        
        <!-- Hover Overlay -->
        <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0; background:rgba(0,0,0,0.4); transition:opacity 0.3s ease; color:#fff;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </div>
        
        <!-- Year Badge -->
        <div style="position:absolute; top:12px; right:12px; background:rgba(0,0,0,0.6); padding:4px 10px; border-radius:99px; font-size:0.7rem; color:#fff; backdrop-filter:blur(4px); border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; gap:4px; pointer-events:none;">
          <span style="color:var(--accent);">★</span> ${c.year}
        </div>
      </div>
      <div style="flex:1 1 auto; padding:1.25rem; display:flex; flex-direction:column;">
        <h4 style="font-size:0.95rem; font-weight:700; margin-bottom:0.35rem; line-height:1.4;">${c.name}</h4>
        <p style="font-size:0.8rem; color:var(--text-muted); font-family:var(--font-mono); display:flex; align-items:center; gap:6px; margin-bottom:1rem; flex:1 1 auto;">
          <span style="color:var(--accent);">🏛</span> ${c.issuer}
        </p>
        
        ${c.pdfUrl ? `
        <div style="margin-top:auto;">
          <a href="${c.pdfUrl}" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; font-size:0.75rem; color:var(--accent); border:1px solid var(--border-accent); padding:6px 12px; border-radius:8px; text-decoration:none; transition:all 0.2s; font-weight:600;" onmouseover="this.style.background='var(--accent-dim)'" onmouseout="this.style.background='transparent'">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
            Buka PDF
          </a>
        </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

/* ===================== CONTACT ===================== */
function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Shared validation — returns data object or null on failure
  function validateForm() {
    const name    = document.getElementById('f-name')?.value.trim();
    const email   = document.getElementById('f-email')?.value.trim();
    const subject = document.getElementById('f-subject')?.value.trim() || '-';
    const msg     = document.getElementById('f-msg')?.value.trim();

    if (!name || !email || !msg) {
      showFormMsg('Semua field wajib diisi (kecuali Subjek)!', 'error');
      return null;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFormMsg('Format email tidak valid.', 'error');
      return null;
    }
    return { name, email, subject, msg };
  }

  // ── WhatsApp button ──────────────────────────────────
  const btnWA = document.getElementById('btn-send-wa');
  if (btnWA) {
    btnWA.addEventListener('click', () => {
      const data = validateForm();
      if (!data) return;

      const text = `Halo Yazid, saya ${data.name}.\nEmail saya: ${data.email}\nTopik: ${data.subject}\n\nPesan:\n${data.msg}`;
      window.open(`${PROFILE.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
      showFormMsg('✅ Mengalihkan ke WhatsApp. Terima kasih, ' + data.name + '!', 'success');
      form.reset();
    });
  }

  // ── Email button ─────────────────────────────────────
  const btnEmail = document.getElementById('btn-send-email');
  if (btnEmail) {
    btnEmail.addEventListener('click', () => {
      const data = validateForm();
      if (!data) return;

      const body = `Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.msg}`;
      const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Pesan dari ' + data.name + (data.subject !== '-' ? ' — ' + data.subject : ''))}&body=${encodeURIComponent(body)}`;
      // Buka di tab baru agar halaman tidak tertimpa
      window.open(mailtoLink, '_blank');
      showFormMsg('✅ Membuka klien email Anda. Terima kasih, ' + data.name + '!', 'success');
      form.reset();
    });
  }
}

function showFormMsg(msg, type) {
  const el = document.getElementById('form-msg');
  if (!el) return;
  el.textContent = msg;
  el.style.display = 'block';
  el.style.color = type === 'error' ? '#f87171' : '#34d399';
  setTimeout(() => { el.style.display = 'none'; }, 5000);
}

/* ===================== GLOBAL IMAGE MODAL ===================== */
function initImageModal() {
  let modal = document.getElementById('global-image-modal');
  if(!modal) {
    modal = document.createElement('div');
    modal.id = 'global-image-modal';
    modal.style.position = 'fixed';
    modal.style.inset = '0';
    modal.style.background = 'rgba(0,0,0,0.85)';
    modal.style.backdropFilter = 'blur(10px)';
    modal.style.zIndex = '99999';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.opacity = '0';
    modal.style.pointerEvents = 'none';
    modal.style.transition = 'opacity 0.3s ease';
    
    modal.innerHTML = `
      <div style="position:relative; max-width:95vw; max-height:95vh; padding:15px; display:flex; align-items:center; justify-content:center;">
        <img id="global-image-modal-img" src="" style="max-width:100%; max-height:90vh; border-radius:8px; box-shadow:0 10px 50px rgba(0,0,0,0.5); object-fit:contain; border: 1px solid rgba(255,255,255,0.1);">
        <button onclick="closeImageModal()" style="position:absolute; top:0; right:0; width:40px; height:40px; border-radius:50%; background:var(--surface); color:var(--text); border:1px solid var(--border); cursor:pointer; font-size:1.5rem; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 12px rgba(0,0,0,0.5); transition:all 0.2s;" onmouseover="this.style.color='var(--accent)'; this.style.borderColor='var(--accent)';" onmouseout="this.style.color='var(--text)'; this.style.borderColor='var(--border)';">&times;</button>
      </div>
    `;
    document.body.appendChild(modal);
    
    modal.addEventListener('click', e => { if (e.target === modal) closeImageModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeImageModal(); });
  }
}

window.openImageModal = function(imgSrc) {
  initImageModal();
  const modal = document.getElementById('global-image-modal');
  document.getElementById('global-image-modal-img').src = imgSrc;
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'all';
};

window.closeImageModal = function() {
  const modal = document.getElementById('global-image-modal');
  if(modal) { modal.style.opacity = '0'; modal.style.pointerEvents = 'none'; }
};
