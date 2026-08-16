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
  
  // Update resume specific stat cards
  const expCount = (PROFILE.experience && PROFILE.experience.length) ? PROFILE.experience.length : 0;
  setIfExist('stat-project-resume', projectCount);
  setIfExist('stat-cert-resume', certCount);
  setIfExist('stat-exp-resume', expCount);
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
    { label: "Proyek Personal", value: projectCount },
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
    position: absolute;
    top: calc(100% + 2.5rem);
    right: 0;
    overflow: hidden;
    z-index: 3;
    width: max-content;
    max-width: none;
    flex-wrap: nowrap;
  `;

  el.innerHTML = dynamicStats.map((s, i) => `
    <div style="flex:1; min-width:120px; padding:1.4rem 1.8rem; display:flex; flex-direction:column; align-items:center; justify-content:center; position:relative; transition:background 0.3s var(--ease);"
         onmouseover="this.style.background='rgba(255,255,255,0.03)'"
         onmouseout="this.style.background='transparent'">
      <!-- Divider vertical -->
      ${i > 0 ? '<div style="position:absolute;left:0;top:20%;bottom:20%;width:1px;background:linear-gradient(to bottom, transparent, rgba(255,255,255,0.1), transparent);"></div>' : ''}
      
      <div 
        class="stat-counter-target" 
        data-target="${s.value}"
        style="
          font-size:1.8rem; 
          font-weight:800; 
          font-family:var(--font-display); 
          color:var(--text); 
          text-shadow:0 0 15px rgba(255,255,255,0.3); 
          line-height:1; 
          margin-bottom:0.3rem;
        "
      >0</div>
      <span style="font-size:0.65rem; font-family:var(--font-mono); color:var(--text-dim); text-transform:uppercase; letter-spacing:0.1em; text-align:center;">${s.label}</span>
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

/* ── SVG icon map untuk highlights ── */
const HL_ICONS = {
  "Fokus Belajar": `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="brain-g" cx="40%" cy="35%" r="60%">
        <stop offset="0%" stop-color="#c4b5fd"/>
        <stop offset="100%" stop-color="#6d28d9"/>
      </radialGradient>
    </defs>
    <circle cx="16" cy="16" r="14" fill="url(#brain-g)" opacity="0.15"/>
    <path d="M10 13c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.2-1.2 4.1-3 5.2V21h-6v-2.8C11.2 17.1 10 15.2 10 13z" fill="#8b5cf6" opacity="0.9"/>
    <rect x="13" y="21" width="6" height="2" rx="1" fill="#a78bfa"/>
    <rect x="14" y="23" width="4" height="2" rx="1" fill="#7c3aed"/>
    <circle cx="13" cy="13" r="1" fill="white" opacity="0.8"/>
    <circle cx="19" cy="12" r="0.7" fill="white" opacity="0.6"/>
    <path d="M13 16l2 2 4-4" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`,
  "Web Dev Dasar": `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="monitor-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#67e8f9"/>
        <stop offset="100%" stop-color="#0891b2"/>
      </linearGradient>
      <linearGradient id="screen-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0a1628"/>
        <stop offset="100%" stop-color="#0e2847"/>
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="26" height="18" rx="3" fill="url(#monitor-g)" opacity="0.9"/>
    <rect x="5" y="7" width="22" height="14" rx="1.5" fill="url(#screen-g)"/>
    <rect x="11" y="23" width="10" height="2.5" rx="1" fill="#06b6d4" opacity="0.6"/>
    <path d="M9 13l3 3-3 3" stroke="#00d4ff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <line x1="15" y1="17" x2="21" y2="17" stroke="#5eead4" stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="22" cy="11" r="1" fill="#22d3ee" opacity="0.9"/>
    <circle cx="24" cy="11" r="1" fill="#f59e0b" opacity="0.9"/>
    <circle cx="20" cy="11" r="1" fill="#f87171" opacity="0.9"/>
  </svg>`,
  "UI yang Rapi": `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pen-g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#fda4af"/>
        <stop offset="100%" stop-color="#e11d48"/>
      </linearGradient>
    </defs>
    <rect x="3" y="4" width="26" height="24" rx="4" fill="rgba(251,113,133,0.1)" stroke="#fb7185" stroke-width="1.2"/>
    <rect x="6" y="8" width="10" height="6" rx="2" fill="#fb7185" opacity="0.7"/>
    <rect x="18" y="8" width="8" height="2.5" rx="1.2" fill="#fda4af" opacity="0.8"/>
    <rect x="18" y="12" width="5" height="2" rx="1" fill="#fda4af" opacity="0.5"/>
    <rect x="6" y="17" width="20" height="1.5" rx="0.75" fill="#fb7185" opacity="0.4"/>
    <rect x="6" y="20" width="15" height="1.5" rx="0.75" fill="#fb7185" opacity="0.3"/>
    <rect x="6" y="23" width="18" height="1.5" rx="0.75" fill="#fb7185" opacity="0.25"/>
    <circle cx="25" cy="25" r="4" fill="url(#pen-g)"/>
    <path d="M23.5 26.5l3-3" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
  "Problem Solving": `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bulb-g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#fde68a"/>
        <stop offset="60%" stop-color="#fbbf24"/>
        <stop offset="100%" stop-color="#d97706"/>
      </linearGradient>
    </defs>
    <circle cx="16" cy="16" r="13" fill="rgba(251,191,36,0.08)"/>
    <path d="M16 5c-4.97 0-9 4.03-9 9 0 3.25 1.73 6.1 4.33 7.67V24h9.34v-2.33C23.27 20.1 25 17.25 25 14c0-4.97-4.03-9-9-9z" fill="url(#bulb-g)" opacity="0.9"/>
    <rect x="13.5" y="24" width="5" height="1.5" rx="0.75" fill="#d97706" opacity="0.7"/>
    <rect x="14" y="25.5" width="4" height="1.5" rx="0.75" fill="#b45309" opacity="0.6"/>
    <path d="M13 14l2 2 4-4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="23" cy="7" r="1.5" fill="#fde68a" opacity="0.9"><animate attributeName="opacity" values="0.9;0.2;0.9" dur="2s" repeatCount="indefinite"/></circle>
    <circle cx="9" cy="8" r="1" fill="#fde68a" opacity="0.7"><animate attributeName="opacity" values="0.7;0.1;0.7" dur="1.7s" repeatCount="indefinite"/></circle>
  </svg>`,
  "Office & Produktivitas": `<svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="doc-g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#6ee7b7"/>
        <stop offset="100%" stop-color="#059669"/>
      </linearGradient>
      <linearGradient id="doc-g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#93c5fd"/>
        <stop offset="100%" stop-color="#2563eb"/>
      </linearGradient>
    </defs>
    <rect x="3" y="5" width="16" height="22" rx="3" fill="url(#doc-g1)" opacity="0.85"/>
    <path d="M14 5v6h5" stroke="#047857" stroke-width="1.2" fill="none" stroke-linejoin="round"/>
    <line x1="6" y1="14" x2="14" y2="14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="6" y1="17" x2="13" y2="17" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="6" y1="20" x2="15" y2="20" stroke="white" stroke-width="1.2" stroke-linecap="round"/>
    <rect x="14" y="14" width="15" height="14" rx="3" fill="url(#doc-g2)" opacity="0.9"/>
    <path d="M19 19l2 2 4-4" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
};

function renderHighlights() {
  const el = document.getElementById('highlights-grid');
  if (!el) return;

  el.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 1.5rem;
  `;

  // Inject CSS animations jika belum ada
  if (!document.getElementById('hl-card-styles')) {
    const style = document.createElement('style');
    style.id = 'hl-card-styles';
    style.textContent = `
      @keyframes hlCardIn {
        from { opacity:0; transform: translateY(40px) scale(0.94); filter:blur(6px); }
        to   { opacity:1; transform: translateY(0) scale(1); filter:blur(0); }
      }
      @keyframes hlShimmerSweep {
        0%   { transform: translateX(-100%) skewX(-12deg); }
        100% { transform: translateX(250%) skewX(-12deg); }
      }
      @keyframes hlParticleFloat {
        0%,100% { transform: translateY(0px) translateX(0px); opacity:0.6; }
        33%     { transform: translateY(-8px) translateX(4px); opacity:1; }
        66%     { transform: translateY(-4px) translateX(-4px); opacity:0.7; }
      }
      @keyframes hlIconPulse {
        0%,100% { box-shadow: 0 0 0 0 rgba(var(--hl-rgb,0,212,255),0.4); }
        50%     { box-shadow: 0 0 0 8px rgba(var(--hl-rgb,0,212,255),0); }
      }
      @keyframes hlBarFill {
        from { width: 0%; }
      }
      @keyframes hlGlowPulse {
        0%,100% { opacity: 0.12; transform: scale(1); }
        50%     { opacity: 0.22; transform: scale(1.1); }
      }
      .hl-card-new {
        animation: hlCardIn 0.65s cubic-bezier(0.34,1.56,0.64,1) both;
      }
      .hl-shimmer-line {
        position:absolute;top:0;left:0;width:40%;height:100%;
        background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.07) 50%,transparent 70%);
        pointer-events:none;z-index:8;opacity:0;transition:opacity 0.3s;
      }
      .hl-card-new:hover .hl-shimmer-line {
        opacity:1;
        animation: hlShimmerSweep 0.75s ease forwards;
      }
      .hl-particle {
        position:absolute;border-radius:50%;pointer-events:none;
        animation: hlParticleFloat linear infinite;
      }
      .hl-icon-new {
        animation: hlIconPulse 3s ease-in-out infinite;
        transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease !important;
      }
      .hl-card-new:hover .hl-icon-new {
        transform: rotate(-10deg) scale(1.15) !important;
      }
      .hl-bar-fill-new {
        animation: hlBarFill 1.2s cubic-bezier(0.4,0,0.2,1) both;
        animation-delay: 0.4s;
      }
      .hl-bg-glow-new {
        animation: hlGlowPulse 4s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }

  const levelLabels = ['','PEMULA','DASAR','MENENGAH','MAHIR','EXPERT'];
  const levelPct    = [0, 20, 40, 60, 80, 100];

  el.innerHTML = PROFILE.highlights.map((h, i) => {
    const accent = h.accentColor || '#00d4ff';
    const glowC  = h.glowColor   || 'rgba(0,212,255,0.3)';
    const borderH= h.borderHover || 'rgba(0,212,255,0.4)';
    const delay  = i * 130;
    const svgIcon= HL_ICONS[h.title] || h.icon;
    
    // Variasi dinamis 50% / 55% jika levelnya 3 (menengah), bisa di-override dengan h.progress
    const pct    = h.progress || (h.level === 3 ? (i % 2 === 0 ? 55 : 50) : levelPct[h.level]) || 60;

    // 3 floating particles per card
    const particles = [
      { size:4, top:'12%', left:'80%', dur:'3.2s', delay:'0s',   color: accent },
      { size:3, top:'70%', left:'88%', dur:'4.5s', delay:'1.1s', color: accent },
      { size:5, top:'40%', left:'92%', dur:'2.8s', delay:'0.5s', color: glowC }
    ].map(p => `
      <div class="hl-particle" style="
        width:${p.size}px;height:${p.size}px;
        top:${p.top};left:${p.left};
        background:${p.color};
        filter:blur(1px);
        animation-duration:${p.dur};
        animation-delay:${p.delay};
        opacity:0.5;
      "></div>
    `).join('');

    return `
    <div class="hl-card-new"
      style="
        position:relative; overflow:hidden; border-radius:24px;
        padding:1.8rem 1.65rem 1.6rem;
        background:linear-gradient(145deg,rgba(15,22,41,0.96) 0%,rgba(8,13,26,0.99) 100%);
        border:1px solid rgba(255,255,255,0.08);
        cursor:default;
        transition:transform 0.4s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.4s ease,border-color 0.35s ease;
        animation-delay:${delay}ms;
        box-shadow: 0 8px 32px rgba(0,0,0,0.35);
      "
      onmouseover="
        this.style.transform='translateY(-10px) scale(1.025)';
        this.style.boxShadow='0 30px 60px rgba(0,0,0,0.55),0 0 40px ${glowC.replace('0.3','0.18')}';
        this.style.borderColor='${borderH}';
        this.querySelector('.hl-bg-glow-new').style.opacity='0.4';
        this.querySelector('.hl-top-bar').style.opacity='1';
        this.querySelector('.hl-bottom-glow').style.opacity='1';
      "
      onmouseout="
        this.style.transform='translateY(0) scale(1)';
        this.style.boxShadow='0 8px 32px rgba(0,0,0,0.35)';
        this.style.borderColor='rgba(255,255,255,0.08)';
        this.querySelector('.hl-bg-glow-new').style.opacity='0.12';
        this.querySelector('.hl-top-bar').style.opacity='0.6';
        this.querySelector('.hl-bottom-glow').style.opacity='0';
      "
    >
      <!-- Shimmer sweep on hover -->
      <div class="hl-shimmer-line"></div>

      <!-- Floating particles -->
      ${particles}

      <!-- Top gradient bar -->
      <div class="hl-top-bar" style="
        position:absolute;top:0;left:0;right:0;height:2px;
        background:linear-gradient(90deg,transparent 0%,${accent} 40%,${accent} 60%,transparent 100%);
        opacity:0.6;transition:opacity 0.4s;
      "></div>

      <!-- Corner ambient glow -->
      <div class="hl-bg-glow-new" style="
        position:absolute;top:-50px;right:-50px;
        width:200px;height:200px;border-radius:50%;
        background:radial-gradient(circle,${glowC} 0%,transparent 70%);
        filter:blur(30px);opacity:0.12;
        pointer-events:none;transition:opacity 0.4s ease;
      "></div>

      <!-- Mesh grid overlay -->
      <div style="
        position:absolute;inset:0;
        background-image:linear-gradient(rgba(255,255,255,0.013) 1px,transparent 1px),
          linear-gradient(90deg,rgba(255,255,255,0.013) 1px,transparent 1px);
        background-size:28px 28px;
        pointer-events:none;border-radius:24px;
      "></div>

      <!-- Background photo -->
      ${h.image ? `
        <div style="position:absolute;inset:0;background-image:url('${h.image}');
          background-size:cover;background-position:center;opacity:0.3;
          z-index:0;border-radius:24px;transition:opacity 0.5s;"></div>
        <div style="position:absolute;inset:0;
          background:linear-gradient(150deg,rgba(8,13,26,0.82) 0%,rgba(8,13,26,0.55) 100%);
          z-index:0;border-radius:24px;"></div>
      ` : ''}

      <!-- Content -->
      <div style="position:relative;z-index:3;">

        <!-- Header row: icon + level badge -->
        <div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:1.3rem;">

          <!-- Icon with glow ring -->
          <div class="hl-icon-new" style="
            width:56px;height:56px;border-radius:18px;
            display:flex;align-items:center;justify-content:center;
            background:linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.02));
            border:1px solid rgba(255,255,255,0.12);
            box-shadow:0 8px 24px rgba(0,0,0,0.4),inset 0 1px 0 rgba(255,255,255,0.1),0 0 0 0 ${glowC};
            --hl-rgb:${h.accentColor ? h.accentColor.replace(/[^,\d]/g,'').split(',').slice(0,3).join(',') : '0,212,255'};
          ">${svgIcon}</div>

          <!-- Level pill -->
          ${h.level !== undefined ? `
          <div style="
            display:flex;align-items:center;gap:6px;
            padding:5px 11px;border-radius:99px;
            background:rgba(0,0,0,0.4);
            border:1px solid rgba(255,255,255,0.1);
            backdrop-filter:blur(8px);
          ">
            <div style="display:flex;gap:3px;">
              ${[1,2,3,4,5].map(n => `
                <div style="
                  width:5px;height:5px;border-radius:50%;
                  background:${n <= h.level ? accent : 'rgba(255,255,255,0.12)'};
                  box-shadow:${n <= h.level ? `0 0 5px ${glowC}` : 'none'};
                "></div>
              `).join('')}
            </div>
            <span style="
              font-family:var(--font-mono);font-size:0.6rem;font-weight:700;
              color:${accent};letter-spacing:0.1em;
            ">${levelLabels[h.level]||''}</span>
          </div>
          ` : ''}
        </div>

        <!-- Title -->
        <h3 style="
          font-size:1.1rem;font-weight:900;margin-bottom:0.55rem;
          letter-spacing:-0.025em;color:#ffffff;line-height:1.2;
          text-shadow:0 2px 8px rgba(0,0,0,0.7);
        ">${h.title}</h3>

        <!-- Description -->
        <p style="
          font-size:0.835rem;color:#94adc8;line-height:1.75;
          font-weight:400;margin-bottom:1.25rem;
        ">${h.desc}</p>

        <!-- Animated progress bar -->
        ${h.level !== undefined ? `
        <div style="margin-bottom:1rem;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <span style="font-family:var(--font-mono);font-size:0.6rem;color:rgba(255,255,255,0.35);letter-spacing:0.08em;">PROGRES</span>
            <span style="font-family:var(--font-mono);font-size:0.6rem;font-weight:700;color:${accent};">${pct}%</span>
          </div>
          <div style="
            height:4px;border-radius:99px;
            background:rgba(255,255,255,0.06);
            overflow:hidden;
            box-shadow:inset 0 1px 2px rgba(0,0,0,0.3);
          ">
            <div class="hl-bar-fill-new" style="
              height:100%;border-radius:99px;width:${pct}%;
              background:linear-gradient(90deg,${accent},${glowC});
              box-shadow:0 0 8px ${glowC};
            "></div>
          </div>
        </div>
        ` : ''}

        <!-- Tags -->
        ${h.tags ? `
        <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
          ${h.tags.map(tag => `
            <span style="
              font-family:var(--font-mono);font-size:0.6rem;font-weight:700;
              padding:4px 10px;border-radius:8px;
              background:rgba(255,255,255,0.04);
              border:1px solid rgba(255,255,255,0.1);
              color:rgba(255,255,255,0.7);
              letter-spacing:0.07em;text-transform:uppercase;
              transition:all 0.25s ease;
            "
            onmouseover="this.style.background='rgba(255,255,255,0.09)';this.style.color='#fff';this.style.borderColor='${borderH}';"
            onmouseout="this.style.background='rgba(255,255,255,0.04)';this.style.color='rgba(255,255,255,0.7)';this.style.borderColor='rgba(255,255,255,0.1)';"
            >${tag}</span>
          `).join('')}
        </div>
        ` : ''}
      </div>

      <!-- Bottom glow accent -->
      <div class="hl-bottom-glow" style="
        position:absolute;bottom:0;left:15%;right:15%;height:1px;
        background:linear-gradient(90deg,transparent,${accent},transparent);
        opacity:0;transition:opacity 0.4s;
      "></div>
    </div>
  `;
  }).join('');
}

function renderFeaturedProjects() {
  const el = document.getElementById('featured-projects');
  if (!el || typeof PROJECTS === 'undefined') return;

  // ── Outer container: clips overflow, sets 3D perspective ────────────────
  el.style.cssText = `
    position:relative;
    overflow:hidden;
    width:100%;
    height:550px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 2000px;
    cursor:grab;
    user-select:none;
  `;

  const glowColors = [
    'rgba(0,212,255,0.6)','rgba(139,92,246,0.6)','rgba(244,63,94,0.6)',
    'rgba(20,184,166,0.6)','rgba(245,158,11,0.6)','rgba(16,185,129,0.6)'
  ];
  const borderColors = [
    'rgba(0,212,255,0.3)','rgba(139,92,246,0.3)','rgba(244,63,94,0.3)',
    'rgba(20,184,166,0.3)','rgba(245,158,11,0.3)','rgba(16,185,129,0.3)'
  ];

  // ── Setup 3D Geometry ──────────────────────────────────────────────────
  // Perhitungan dinamis jumlah kartu & radius agar tidak saling bertabrakan (overlapping)
  let displayProjects = PROJECTS;
  
  // Gandakan kartu di desktop HANYA jika jumlah kartu sedikit (< 8) agar lingkaran tidak kosong
  if (window.innerWidth >= 1024 && displayProjects.length < 8) {
    displayProjects = [...PROJECTS, ...PROJECTS]; 
  }
  
  const numItems = displayProjects.length;
  const anglePerItem = 360 / numItems;
  
  // Lebar dasar kartu adalah 320px. Tambahkan margin/gap.
  const cardWidthWithGap = window.innerWidth < 768 ? 340 : 400; 
  
  // Rumus polygon r = (s/2) / tan(pi/n)
  let radius = Math.round((cardWidthWithGap / 2) / Math.tan(Math.PI / numItems));
  
  // Batas minimum radius agar tidak terlalu sempit
  if (radius < 380) radius = 380;

  const scroller = document.createElement('div');
  scroller.className = 'proj-scroller-3d';
  scroller.style.cssText = `
    position: relative;
    width: 320px;
    height: 420px;
    transform-style: preserve-3d;
    will-change: transform;
  `;

  // ── Generate HTML untuk setiap kartu ─────────────────────────────────────
  const itemsHTML = displayProjects.map((p, i) => {
    const glow   = glowColors[i % glowColors.length];
    const border = borderColors[i % borderColors.length];
    const num    = String(i + 1).padStart(2, '0');
    const itemAngle = i * anglePerItem;
    
    return `
      <div class="gallery-item-3d" data-angle="${itemAngle}" style="
        position: absolute;
        top: 0; left: 0;
        width: 100%; height: 100%;
        transform: rotateY(${itemAngle}deg) translateZ(${radius}px);
        transform-origin: center center;
        will-change: transform, opacity;
      ">
        <div class="proj-card-4d"
          style="width:100%; height:100%; cursor:pointer;
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
          
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,${glow},transparent);z-index:5;"></div>
          
          <div style="position:relative;height:200px;overflow:hidden;">
            <img src="${p.image}" alt="${p.title}" loading="lazy" class="proj-img-4d"
              style="width:100%;height:100%;object-fit:cover;
                transform:scale(1.04) translate(0,0);
                transition:transform 6s cubic-bezier(0.25,0.46,0.45,0.94);
                will-change:transform;">
            
            <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 30%,rgba(4,8,18,0.85) 75%,rgba(4,8,18,1) 100%);z-index:1;"></div>
            
            <div class="proj-num" style="position:absolute;top:12px;left:14px;z-index:3;
              font-family:var(--font-mono);font-size:0.65rem;font-weight:700;
              color:rgba(255,255,255,0.5);letter-spacing:0.1em;
              opacity:0;transition:opacity 0.3s ease;">
              ${num}
            </div>
            
            <div style="position:absolute;top:12px;right:12px;z-index:3;">
              <span class="status-badge ${p.status === 'Selesai' ? 'status-done' : 'status-wip'}"
                style="backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);font-size:0.65rem;">
                ${p.status}
              </span>
            </div>
            
            <div style="position:absolute;bottom:14px;left:14px;z-index:3;">
              <span style="font-family:var(--font-mono);font-size:0.6rem;font-weight:700;
                letter-spacing:0.1em;text-transform:uppercase;
                padding:3px 9px;border-radius:99px;
                background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.12);
                color:rgba(255,255,255,0.6);backdrop-filter:blur(8px);">
                ${p.category || 'web'}
              </span>
            </div>
            
            <div class="proj-shimmer" style="
              position:absolute;inset:0;z-index:4;pointer-events:none;
              background:linear-gradient(105deg,transparent 30%,rgba(255,255,255,0.08) 50%,transparent 70%);
              opacity:0;transition:opacity 0.4s ease;">
            </div>
          </div>
          
          <div style="padding:1.1rem 1.25rem 1.25rem;position:relative;z-index:2;">
            <div style="position:absolute;bottom:-20px;right:-20px;width:100px;height:100px;
              background:radial-gradient(circle,${glow.replace('0.6','0.12')},transparent 70%);
              pointer-events:none;border-radius:50%;"></div>
              
            <h3 style="font-size:1.1rem;font-weight:800;line-height:1.3;color:#fff;
              margin-bottom:0.5rem;letter-spacing:-0.01em;">${p.title}</h3>
              
            <p style="font-size:0.8rem;color:#5a7090;line-height:1.7;margin-bottom:0.9rem;">
              ${p.desc.substring(0, 90)}...
            </p>
            
            <div style="display:flex;flex-wrap:wrap;gap:5px;align-items:center;">
              ${p.tags.slice(0, 3).map(t => `
                <span style="font-family:var(--font-mono);font-size:0.62rem;font-weight:600;
                  padding:3px 8px;border-radius:6px;
                  background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);
                  color:rgba(255,255,255,0.4);letter-spacing:0.04em;text-transform:uppercase;">
                  ${t}
                </span>`).join('')}
              <span style="margin-left:auto;font-size:0.75rem;color:rgba(255,255,255,0.2);font-weight:700;">
                ${p.year || ''}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  scroller.innerHTML = itemsHTML;
  el.innerHTML = '';
  el.appendChild(scroller);

  // ── Engine Animasi 3D ──────────────────────────────────────────────────
  const items = Array.from(scroller.querySelectorAll('.gallery-item-3d'));
  let currentRotation = 0;
  let targetRotation = 0;
  let dragging = false;
  let dragStartX = 0;
  let dragStartRot = 0;
  let paused = false;
  let resumeTimer = null;
  const AUTO_ROT_SPEED = 0.2; // derajat per frame (kecepatan mutar otomatis)

  function updateCards() {
    // Translate Z -radius memundurkan titik tengah carousel agar kartu terdepan ukurannya normal
    scroller.style.transform = `translateZ(${-radius}px) rotateY(${currentRotation}deg)`;
    
    items.forEach(item => {
      const itemAngle = parseFloat(item.getAttribute('data-angle'));
      const relativeAngle = (itemAngle + currentRotation + 3600000) % 360;
      const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
      
      // Mengurangi opacity kartu yang berada di belakang
      const opacity = Math.max(0.1, 1 - (normalizedAngle / 150));
      item.style.opacity = opacity;
      
      // Mencegah interaksi pointer pada kartu di belakang
      const newPointer = opacity < 0.6 ? 'none' : 'auto';
      if (item.style.pointerEvents !== newPointer) {
        item.style.pointerEvents = newPointer;
      }
    });
  }

  function tick() {
    if (!paused && !dragging) {
      targetRotation -= AUTO_ROT_SPEED;
    }
    
    // Smooth interpolasi rotasi
    const diff = targetRotation - currentRotation;
    currentRotation += diff * 0.1;
    
    updateCards();
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);

  function pause() {
    paused = true;
    clearTimeout(resumeTimer);
  }
  function resume() {
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => { paused = false; }, 1200);
  }

  // ── Mouse Drag ───────────────────────────────────────────────────────
  el.addEventListener('mousedown', e => {
    dragging = true;
    dragStartX = e.clientX;
    dragStartRot = targetRotation;
    el.style.cursor = 'grabbing';
    pause();
  });
  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    const delta = e.clientX - dragStartX;
    targetRotation = dragStartRot + (delta * 0.3); // sensitivitas geser
  });
  document.addEventListener('mouseup', () => {
    if (!dragging) return;
    dragging = false;
    el.style.cursor = 'grab';
    resume();
  });
  el.addEventListener('mouseleave', () => {
    if (dragging) {
      dragging = false;
      el.style.cursor = 'grab';
      resume();
    }
  });

  // Dihapus: Hentikan putaran saat hover kartu (sesuai permintaan user agar tetap berputar)
  /* items.forEach(item => {
    item.addEventListener('mouseenter', pause);
    item.addEventListener('mouseleave', resume);
  }); */

  // ── Touch ────────────────────────────────────────────────────────────
  let touchStartX = 0, touchStartY = 0, touchStartRot = 0;
  let isScrolling = null;

  el.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchStartRot = targetRotation;
    isScrolling = null;
    pause();
  }, { passive: true });

  el.addEventListener('touchmove', e => {
    if (isScrolling === null) {
      const dx = Math.abs(e.touches[0].clientX - touchStartX);
      const dy = Math.abs(e.touches[0].clientY - touchStartY);
      if (dx > dy) isScrolling = false; // Geser horizontal -> Rotasi 3D
      else if (dy > dx) isScrolling = true; // Scroll vertikal halaman
    }
    
    if (isScrolling === false) {
      const delta = e.touches[0].clientX - touchStartX;
      targetRotation = touchStartRot + (delta * 0.4);
    }
  }, { passive: true });
  
  el.addEventListener('touchend', resume);
  
  // ── Arrow buttons (dengan easing rotasi) ─────────────────────────────
  const btnPrev = document.getElementById('btn-prev-projects');
  const btnNext = document.getElementById('btn-next-projects');

  if (btnPrev) btnPrev.addEventListener('click', () => { targetRotation += anglePerItem; });
  if (btnNext) btnNext.addEventListener('click', () => { targetRotation -= anglePerItem; });
}



function renderTools() {
  const wrapper = document.querySelector('.marquee-wrapper');
  const scroller1 = document.getElementById('tools-marquee-1');
  const scroller2 = document.getElementById('tools-marquee-2');
  if (!scroller1 || !scroller2 || !wrapper) return;

  const allTools = PROFILE.tools || [];
  const techStackNames = ['html5', 'css3', 'javascript', 'python', 'react', 'vite', 'nodejs', 'mysql', 'postgresql', 'supabase'];
  
  const row1 = allTools.filter(t => techStackNames.includes(t.name.toLowerCase()));
  const row2 = allTools.filter(t => !techStackNames.includes(t.name.toLowerCase()));

  const buildHTML = (arr) => arr.map(t => `
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

  // ── CSS-based marquee (dijalankan GPU, tidak memakai JS loop) ──────────
  // Inject CSS keyframes sekali saja
  if (!document.getElementById('marquee-css-anim')) {
    const style = document.createElement('style');
    style.id = 'marquee-css-anim';
    style.textContent = `
      @keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      @keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
      .marquee-track-left  { animation: marquee-left  80s linear infinite; will-change: transform; }
      .marquee-track-right { animation: marquee-right 80s linear infinite; will-change: transform; }
      /* Dihapus: efek hover pause, agar ikon terus bergerak saat disentuh */
    `;
    document.head.appendChild(style);
  }

  // Duplikasi 4x agar seamless di layar super lebar (1920px+). 
  // Translasi -50% akan menggeser tepat 2 set, menyisakan 2 set di kanan, sehingga tidak pernah kosong.
  const html1 = buildHTML(row1);
  const html2 = buildHTML(row2);
  scroller1.innerHTML = html1 + html1 + html1 + html1;
  scroller2.innerHTML = html2 + html2 + html2 + html2;

  scroller1.classList.add('marquee-track-left');
  scroller2.classList.add('marquee-track-right');
  scroller1.style.transform = '';
  scroller2.style.transform = '';
}

function initThreeHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Sesuaikan ukuran canvas dengan elemen parent
  function resize() {
    canvas.width  = canvas.offsetWidth  || window.innerWidth;
    canvas.height = canvas.offsetHeight || window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const getAccentColor = () =>
    getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#00d4ff';

  // Buat partikel ringan
  const PARTICLE_COUNT = 40;
  const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * (canvas.width  || window.innerWidth),
    y: Math.random() * (canvas.height || window.innerHeight),
    r: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    opacity: Math.random() * 0.4 + 0.1
  }));

  let mouseX = -999, mouseY = -999;
  window.addEventListener('mousemove', e => { mouseX = e.clientX; mouseY = e.clientY; }, { passive: true });

  // Pause saat hero tidak terlihat (IntersectionObserver)
  let visible = true;
  const io = new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
  }, { threshold: 0 });
  io.observe(canvas);

  let raf;
  function draw() {
    raf = requestAnimationFrame(draw);
    if (!visible) return;

    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0, 0, W, H);

    const accent = getAccentColor();

    particles.forEach(p => {
      // Gerak
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      // Gambar titik
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
    });

    // Gambar garis koneksi antar partikel yang berdekatan
    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = accent;
          ctx.globalAlpha = (1 - dist / 100) * 0.1;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1;
  }

  draw();
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
  // Override any grid styles from HTML
  el.style.display = 'block';
  el.style.position = 'relative';
  
  el.innerHTML = `
    <!-- Glowing Vertical Line -->
    <div style="position:absolute; top:2rem; bottom:0; left:16px; width:4px; background:linear-gradient(to bottom, var(--accent), rgba(var(--accent-rgb),0.1) 80%, transparent); border-radius:4px; box-shadow:0 0 20px rgba(var(--accent-rgb), 0.8); z-index:0;"></div>
    
    <div style="display:flex; flex-direction:column; gap:3rem;">
      ${PROFILE.education.map((edu, i) => `
        <div class="reveal reveal-delay-${i}" style="position:relative; padding-left:3.5rem;">
          <!-- Glowing Dot on Line -->
          <div style="position:absolute; top:2.5rem; left:8px; width:20px; height:20px; background:var(--bg); border:4px solid var(--accent); border-radius:50%; box-shadow:0 0 15px var(--accent), inset 0 0 5px var(--accent); z-index:2; animation:pulse-dot 3s infinite;"></div>
          <!-- Horizontal Connector -->
          <div style="position:absolute; top:3rem; left:28px; width:1.5rem; height:2px; background:linear-gradient(to right, var(--accent), transparent); opacity:0.6; z-index:1;"></div>
          
          <div class="glass-card tilt-card" style="display:flex; flex-wrap:wrap; overflow:hidden; background:var(--surface2); padding:0; border:1px solid rgba(255,255,255,0.08); box-shadow:0 15px 40px rgba(0,0,0,0.5);">
             <!-- Image side -->
             <div style="flex: 0 0 auto; width: 100%; max-width: 240px; position:relative; background:var(--bg3); min-height: 180px; cursor:pointer;" onclick="openImageModal('${edu.image}')" title="Klik untuk perbesar">
               <img src="${edu.image}" alt="${edu.institution}" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.8; transition:transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s;" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.08)'" onmouseout="this.style.opacity='0.8'; this.style.transform='scale(1)'">
               <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0; background:rgba(0,0,0,0.4); transition:opacity 0.3s ease; color:#fff;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
               </div>
             </div>
             
             <!-- Content side -->
             <div style="flex: 1 1 0%; padding:2.5rem 2rem; display:flex; flex-direction:column; justify-content:center; position:relative;">
                <!-- Decorative background number -->
                <div style="position:absolute; top:-10px; right:15px; font-size:7rem; font-weight:900; color:var(--text); opacity:0.02; z-index:0; pointer-events:none; font-family:var(--font-display);">${i+1}</div>
                
                <div style="position:relative; z-index:1;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                    <h3 style="font-size:1.4rem; font-weight:800; line-height:1.3; text-shadow:0 2px 4px rgba(0,0,0,0.6);">${edu.institution}</h3>
                    <span style="font-size:0.75rem; color:var(--accent); background:rgba(var(--accent-rgb),0.1); backdrop-filter:blur(6px); padding:5px 14px; border-radius:99px; border:1px solid rgba(var(--accent-rgb),0.3); white-space:nowrap; display:inline-flex; align-items:center; gap:6px; font-weight:700; box-shadow:0 0 15px rgba(var(--accent-rgb),0.15);">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      ${edu.period}
                    </span>
                  </div>
                  <p style="font-size:1rem; font-weight:700; color:var(--text-muted); margin-bottom:1rem; display:flex; align-items:center; gap:6px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    ${edu.degree}
                  </p>
                  <p style="font-size:0.925rem; color:var(--text-dim); line-height:1.75; margin-bottom:1.5rem;">${edu.desc}</p>
                  
                  <div style="display:flex; align-items:center; flex-wrap:wrap; gap:1rem;">
                    ${edu.current ? '<span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:#10b981;background:rgba(16,185,129,0.1);padding:6px 14px;border-radius:99px;font-weight:700;border:1px solid rgba(16,185,129,0.3);box-shadow:0 0 12px rgba(16,185,129,0.2);"><span style="width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 10px #10b981; animation:pulse-dot 2s infinite;"></span> Sedang Ditempuh</span>' : '<span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--text-dim);font-weight:600;padding:6px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:99px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Lulus / Selesai</span>'}
                    ${edu.mapUrl ? `<a href="${edu.mapUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--accent);border:1px solid var(--border-accent);padding:6px 14px;border-radius:99px;text-decoration:none;transition:all 0.3s;font-weight:600;" onmouseover="this.style.background='var(--accent-dim)'; this.style.boxShadow='0 0 12px rgba(var(--accent-rgb),0.3)';" onmouseout="this.style.background='transparent'; this.style.boxShadow='none';"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Lihat Lokasi</a>` : ''}
                  </div>
                </div>
             </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderValues() {
  const values = [
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>', 
      title: 'Terus Belajar', 
      desc: 'Dunia teknologi berkembang cepat — saya berkomitmen untuk selalu update skill dan pengetahuan tanpa henti.',
      bg: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
      color: '#00d4ff'
    },
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>', 
      title: 'Kerja Tim', 
      desc: 'Pernah memimpin organisasi, saya memahami pentingnya kolaborasi, empati, dan komunikasi efektif.',
      bg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
      color: '#a78bfa'
    },
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>', 
      title: 'Adaptif', 
      desc: 'Dari bengkel mesin ke kode program — saya terbiasa masuk ke lingkungan baru dan cepat menyesuaikan diri.',
      bg: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
      color: '#fbbf24'
    },
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>', 
      title: 'Sistematis & Terstruktur', 
      desc: 'Berbekal kecakapan administratif dan manajerial, saya memastikan setiap kode, dokumentasi, dan pelaporan data terkelola secara rapi dan profesional.',
      bg: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=600&q=80',
      color: '#10b981'
    },
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>', 
      title: 'Problem Solver', 
      desc: 'Berorientasi pada solusi. Saya melihat error sebagai tantangan menarik, bukan hambatan yang menghentikan.',
      bg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80',
      color: '#f43f5e'
    },
    { 
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>', 
      title: 'Pemikiran Analitis', 
      desc: 'Membongkar masalah sistem kompleks menjadi bagian kecil yang dapat dikelola, dan dieksekusi secara terstruktur.',
      bg: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80',
      color: '#3b82f6'
    },
    {
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>',
      title: 'Integrasi Efisien (AI)',
      desc: 'Memanfaatkan kapabilitas AI (Kecerdasan Buatan) secara komprehensif ke dalam alur kerja untuk memangkas waktu riset dan mengoptimalkan penulisan kode.',
      bg: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
      color: '#a855f7'
    },
    {
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
      title: 'Fokus Pengguna (UI/UX)',
      desc: 'Tidak sekadar berfungsi. Saya memastikan setiap antarmuka yang dibangun intuitif, responsif, dan memberikan pengalaman visual yang memanjakan mata.',
      bg: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
      color: '#f97316'
    },
    {
      icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>',
      title: 'Administrasi Office',
      desc: 'Terampil mengoperasikan Microsoft Office (Word, Excel, PowerPoint) untuk menyusun dokumentasi, pelaporan, dan pengelolaan data administratif secara efisien.',
      bg: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
      color: '#14b8a6'
    }
  ];
  
  const el = document.getElementById('values-grid');
  if (!el) return;
  el.innerHTML = values.map((v, i) => `
    <div class="glass-card tilt-card reveal reveal-delay-${i+1} value-card-${i}" style="padding:0; position:relative; overflow:hidden; border:1px solid rgba(255,255,255,0.06); border-top:3px solid ${v.color}; display:flex; flex-direction:column; height:100%; box-shadow:0 15px 35px rgba(0,0,0,0.4);">
      <!-- Background Image -->
      <div style="position:absolute; inset:0; background-image:url('${v.bg}'); background-size:cover; background-position:center; opacity:0.25; z-index:0; transition:all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);" class="value-bg-img"></div>
      
      <!-- Gradient Overlay -->
      <div style="position:absolute; inset:0; background:linear-gradient(160deg, rgba(8,12,20,0.5) 0%, rgba(8,12,20,0.85) 100%); z-index:1;"></div>
      
      <!-- Content -->
      <div style="position:relative; z-index:2; padding:2rem 1.8rem; display:flex; flex-direction:column; height:100%;">
        <div style="width:56px; height:56px; border-radius:14px; background:linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02)); border:1px solid rgba(255,255,255,0.15); display:flex; align-items:center; justify-content:center; margin-bottom:1.5rem; color:${v.color}; box-shadow:0 8px 20px rgba(0,0,0,0.3), inset 0 0 15px ${v.color}22; transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" class="value-icon-wrap">
          ${v.icon}
        </div>
        <h3 style="font-size:1.15rem; font-weight:800; color:#fff; margin-bottom:0.75rem; letter-spacing:-0.01em;">${v.title}</h3>
        <p style="font-size:0.875rem; color:var(--text-muted); line-height:1.75; margin:0; flex-grow:1;">${v.desc}</p>
      </div>
      
      <style>
        .value-card-${i}:hover .value-bg-img { opacity:0.45; transform:scale(1.08); }
        .value-card-${i}:hover .value-icon-wrap { transform:translateY(-6px) scale(1.1); box-shadow:0 12px 25px ${v.color}55, inset 0 0 25px ${v.color}66; border-color:${v.color}aa; }
      </style>
    </div>
  `).join('');
}

function renderOrgExperience() {
  const el = document.getElementById('org-list');
  if (!el) return;
  
  // Sort by year / status
  const sortedOrg = [...PROFILE.organization].sort((a, b) => {
    const getScore = (str) => {
      if (str.toLowerCase().includes('sekarang')) return 9999;
      const m = str.match(/\d{4}/g);
      return m ? Math.max(...m.map(Number)) : 0;
    };
    return getScore(b.period) - getScore(a.period);
  });

  // Set grid layout for org-list
  el.style.cssText = `
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 2rem;
    width: 100%;
  `;

  el.innerHTML = sortedOrg.map((o, i) => `
    <div class="org-card-premium reveal sr4d tilt-card" data-delay="${(i%5)+1}" style="position:relative; background:rgba(15,23,42,0.4); border-radius:24px; padding:2rem; overflow:hidden; border:1px solid rgba(var(--accent-rgb),0.2); box-shadow:0 15px 35px rgba(0,0,0,0.4), inset 0 0 20px rgba(var(--accent-rgb), 0.05); backdrop-filter:blur(15px); display:flex; flex-direction:column; justify-content:space-between; transition:all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); transform-style:preserve-3d; min-height: 280px;">
      
      <!-- Animated Background Glow -->
      <div style="position:absolute; inset:0; background:linear-gradient(135deg, rgba(var(--accent-rgb),0.2) 0%, transparent 60%); opacity:0; z-index:0; transition:opacity 0.6s ease;" class="org-hover-glow"></div>
      
      <!-- Background Image Layer -->
      <div style="position:absolute; inset:0; background-image:url('${o.image}'); background-size:cover; background-position:center; opacity:0.35; z-index:0; transition:all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); filter:grayscale(30%); mix-blend-mode: screen;" class="org-bg-img"></div>
      
      <!-- Gradient Overlay for readability -->
      <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(8,13,26,0.95) 10%, rgba(15,23,42,0.4) 100%); z-index:1; pointer-events:none; transition:all 0.6s ease;" class="org-gradient-overlay"></div>
      
      <!-- Content -->
      <div style="position:relative; z-index:2; display:flex; gap:1.5rem; align-items:flex-start; transform:translateZ(30px); transition:transform 0.5s ease;" class="org-content-wrap">
        <!-- Icon Wrapper -->
        <div style="flex-shrink:0;">
          <div style="width:64px; height:64px; border-radius:18px; background:linear-gradient(135deg, #0f172a, #080d1a); border:1px solid rgba(var(--accent-rgb),0.4); display:flex; align-items:center; justify-content:center; box-shadow:0 10px 20px rgba(0,0,0,0.5), inset 0 0 15px rgba(var(--accent-rgb),0.1); overflow:hidden; transition:all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);" class="org-icon-wrap">
            <img src="${o.icon}" alt="${o.org}" style="width:65%; height:65%; object-fit:contain; filter:drop-shadow(0 2px 5px rgba(0,212,255,0.8));" onerror="this.style.display='none'">
          </div>
        </div>
        
        <!-- Header text -->
        <div style="flex:1;">
          <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.5rem;">
            <div>
              <h3 style="font-size:1.15rem; font-weight:800; letter-spacing:0.5px; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.5); margin:0; transition:color 0.3s ease;" class="org-role-title">${o.role}</h3>
              <p style="font-size:0.85rem; font-weight:600; color:var(--accent); margin-top:0.3rem; font-family:var(--font-mono); letter-spacing:0.5px;">${o.org}</p>
            </div>
            <span style="font-size:0.7rem; font-family:var(--font-mono); font-weight:700; color:#fff; background:rgba(var(--accent-rgb),0.1); border:1px solid rgba(var(--accent-rgb),0.3); padding:0.4rem 0.85rem; border-radius:99px; box-shadow:0 0 10px rgba(var(--accent-rgb),0.1); white-space:nowrap; transition:all 0.3s ease;" class="org-badge">${o.period}</span>
          </div>
          
          <div style="width:35px; height:3px; background:linear-gradient(90deg, var(--accent), transparent); margin:1.2rem 0; border-radius:2px; transition:width 0.4s ease;" class="org-line"></div>
          
          <p style="font-size:0.85rem; line-height:1.7; color:var(--text-dim); text-align:justify; transition:color 0.3s ease;">
            ${o.desc}
          </p>
        </div>
      </div>
      
      <style>
        .org-card-premium:hover { 
          transform: translateY(-15px) scale(1.02); 
          box-shadow: 0 40px 80px rgba(0,0,0,0.7), 0 0 50px rgba(var(--accent-rgb),0.25); 
          border-color: rgba(var(--accent-rgb),0.8);
          background: rgba(15,23,42,0.5);
        }
        .org-card-premium:hover .org-bg-img { 
          opacity: 0.8; 
          filter: grayscale(0%) blur(0px); 
          transform: scale(1.12); 
        }
        .org-card-premium:hover .org-gradient-overlay {
          background: linear-gradient(to top, rgba(8,13,26,0.98) 20%, rgba(15,23,42,0.6) 100%);
        }
        .org-card-premium:hover .org-content-wrap {
          transform: translateZ(50px);
        }
        .org-card-premium:hover .org-icon-wrap { 
          transform: translateZ(20px) translateY(-8px) scale(1.2) rotate(8deg); 
          box-shadow: 0 20px 40px rgba(var(--accent-rgb),0.6), inset 0 0 30px rgba(var(--accent-rgb),0.8); 
          border-color: var(--accent); 
        }
        .org-card-premium:hover .org-hover-glow { 
          opacity: 1; 
        }
        .org-card-premium:hover .org-line {
          width: 60px;
          background: linear-gradient(90deg, #fff, var(--accent));
          box-shadow: 0 0 10px var(--accent);
        }
        .org-card-premium:hover .org-role-title {
          color: #fff;
          text-shadow: 0 0 15px rgba(var(--accent-rgb), 0.8);
        }
        .org-card-premium:hover .org-badge {
          background: rgba(var(--accent-rgb),0.3);
          border-color: var(--accent);
          box-shadow: 0 0 15px rgba(var(--accent-rgb),0.4);
        }
      </style>
    </div>
  `).join('');
}

function renderLanguages() {
  const el = document.getElementById('lang-list');
  if (!el) return;
  el.innerHTML = `<div style="display:flex; flex-direction:column; gap:0.85rem;">` + PROFILE.languages.map(l => {
    let pct = 40;
    let color = "var(--accent)";
    let rgb = "var(--accent-rgb)"; // Ensure var works or use default hex
    
    const lvl = l.level.toLowerCase();
    if (lvl.includes("native") || lvl.includes("fasih")) {
      pct = 100; color = "#10b981"; rgb = "16,185,129"; // Green
    } else if (lvl.includes("menengah") || lvl.includes("intermediate")) {
      pct = 70; color = "#3b82f6"; rgb = "59,130,246"; // Blue
    } else {
      pct = 35; color = "#f59e0b"; rgb = "245,158,11"; // Orange
    }

    return `
      <div style="position:relative; overflow:hidden; padding:1rem 1.15rem; border-radius:14px; background:linear-gradient(145deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2)); border:1px solid rgba(255,255,255,0.08); box-shadow: 4px 4px 10px rgba(0,0,0,0.3), -2px -2px 8px rgba(255,255,255,0.02), inset 1px 1px 2px rgba(255,255,255,0.1); transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);"
           onmouseover="this.style.transform='translateY(-3px) scale(1.01)'; this.style.boxShadow='6px 10px 20px rgba(0,0,0,0.4), -2px -2px 10px rgba(255,255,255,0.03), inset 1px 1px 3px rgba(255,255,255,0.2)'; this.style.borderColor='rgba(${rgb},0.4)'"
           onmouseout="this.style.transform='none'; this.style.boxShadow='4px 4px 10px rgba(0,0,0,0.3), -2px -2px 8px rgba(255,255,255,0.02), inset 1px 1px 2px rgba(255,255,255,0.1)'; this.style.borderColor='rgba(255,255,255,0.08)'">
        
        <!-- Decorative Glow -->
        <div style="position:absolute; top:-30%; right:-5%; width:90px; height:90px; background:radial-gradient(circle, rgba(${rgb},0.15), transparent 70%); border-radius:50%; pointer-events:none;"></div>
        
        <div style="display:flex; justify-content:space-between; align-items:center; position:relative; z-index:2;">
          <span style="font-size:0.95rem; font-weight:700; color:#fff; letter-spacing:0.3px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5);">${l.lang}</span>
          <span style="font-size:0.7rem; padding:0.25rem 0.6rem; border-radius:20px; background:rgba(${rgb},0.1); color:${color}; border:1px solid rgba(${rgb},0.3); font-family:var(--font-mono); font-weight:700; text-transform:uppercase; letter-spacing:1px; box-shadow: 0 0 10px rgba(${rgb},0.15);">${l.level}</span>
        </div>
      </div>
    `;
  }).join('') + `</div>`;
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
          <div style="display:flex;flex-direction:column;align-items:flex-start;gap:0.5rem;margin-bottom:0.5rem;">
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

  const isGitLab = hasGithub && p.github.includes('gitlab');
  const repoLabel = isGitLab ? 'Lihat GitLab' : 'Lihat GitHub';
  const repoIcon = isGitLab 
    ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.423-.73-.423-.867 0L16.418 9.45H7.582L4.918 1.263c-.137-.423-.73-.423-.867 0L1.387 9.452.045 13.587c-.121.38.016.795.344 1.033l11.611 8.442 11.611-8.442c.328-.238.465-.653.344-1.033z"/></svg>`
    : `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`;

  const githubBtnHTML = hasGithub
    ? `<a href="${p.github}" target="_blank" rel="noopener" class="btn-ghost" style="flex:1;justify-content:center;">
         ${repoIcon}
         ${repoLabel}
       </a>`
    : (p.category === 'ui' || p.embed) 
      ? '' 
      : `<button disabled title="Repositori ini bersifat privat" style="flex:1;justify-content:center;padding:0.6rem 1rem;border-radius:10px;border:1px dashed rgba(255,255,255,0.12);background:rgba(255,255,255,0.02);color:var(--text-dim);font-size:0.875rem;cursor:not-allowed;display:flex;align-items:center;gap:6px;font-family:inherit;">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
         Repositori Privat
       </button>`;

  // Update demoBtnHTML to hide for UI/embed if no demo exists
  const isDemoBtnHTML = hasDemo
    ? `<a href="${p.demo}" target="_blank" rel="noopener" class="btn-primary" style="flex:1;justify-content:center;">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
         Live Demo
       </a>`
    : (p.category === 'ui' || p.embed)
      ? ''
      : `<button disabled title="Demo belum tersedia untuk proyek ini" style="flex:1;justify-content:center;padding:0.6rem 1rem;border-radius:10px;border:1px dashed rgba(255,255,255,0.12);background:rgba(255,255,255,0.02);color:var(--text-dim);font-size:0.875rem;cursor:not-allowed;display:flex;align-items:center;gap:6px;font-family:inherit;">
         <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
         Demo Belum Tersedia
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
      
      ${p.embed ? `
      <div style="margin-bottom:1.25rem;">
        <h4 style="font-size:0.75rem;font-family:var(--font-mono);color:var(--accent);letter-spacing:0.1em;text-transform:uppercase;margin-bottom:0.75rem;">Interactive Preview</h4>
        <div style="position:relative;width:100%;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;border:1px solid rgba(255,255,255,0.12);background:#070b13;box-shadow:0 10px 30px rgba(0,0,0,0.55);">
          <iframe src="${p.embed}" style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;" allowfullscreen="true" loading="lazy"></iframe>
        </div>
      </div>
      ` : ''}
      
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
        ${isDemoBtnHTML}
        ${githubBtnHTML}
      </div>
      ${(!hasDemo && !hasGithub && !(p.category === 'ui' || p.embed)) ? `<p style="margin-top:0.75rem;font-size:0.72rem;color:var(--text-dim);text-align:center;font-style:italic;">Proyek ini belum dipublikasikan. Update segera hadir di GitHub.</p>` : ''}
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
  renderResumeStats();
}

function renderResumeStats() {
  const proyekEl = document.getElementById('resume-stat-proyek');
  if (proyekEl) proyekEl.innerText = PROJECTS.length || 0;

  const sertifikatEl = document.getElementById('resume-stat-sertifikat');
  if (sertifikatEl) sertifikatEl.innerText = (PROFILE.certificates && PROFILE.certificates.length) ? PROFILE.certificates.length : 0;

  const pengalamanEl = document.getElementById('resume-stat-pengalaman');
  if (pengalamanEl) pengalamanEl.innerText = (PROFILE.experience && PROFILE.experience.length) ? PROFILE.experience.length : 0;
}

function renderSkillBars() {
  // Map percentage to dot count (1-5)
  function pctToDots(pct) {
    if (pct >= 75) return 5;
    if (pct >= 60) return 4;
    if (pct >= 45) return 3;
    if (pct >= 30) return 2;
    return 1;
  }

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

    el.innerHTML = group.items.map(s => {
      const dots = pctToDots(s.pct);
      const dotsHTML = Array.from({length: 5}, (_, i) => {
        const filled = i < dots;
        return `<span style="width:10px;height:10px;border-radius:50%;display:inline-block;transition:all 0.3s ease ${i * 0.08}s;${filled 
          ? 'background:var(--accent);box-shadow:0 0 6px rgba(var(--accent-rgb),0.5);' 
          : 'background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.08);'
        }"></span>`;
      }).join('');

      return `
      <div style="margin-bottom:1.15rem;" class="reveal">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
          <div style="display:flex;align-items:center;gap:10px;">
            ${s.icon ? `<img src="${s.icon}" alt="${s.name}" style="width:22px;height:22px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.4));">` : ''}
            <span style="font-size:0.9rem;font-weight:700;color:#fff;text-shadow:0 1px 3px rgba(0,0,0,0.8);">${s.name}</span>
          </div>
          ${s.level ? `<span style="font-size:0.72rem;font-family:var(--font-mono);color:var(--accent);font-weight:600;background:rgba(var(--accent-rgb),0.08);padding:2px 8px;border-radius:6px;border:1px solid rgba(var(--accent-rgb),0.15);">${s.level}</span>` : ''}
        </div>
        ${s.pct ? `<div style="display:flex;gap:6px;align-items:center;">
          ${dotsHTML}
        </div>` : ''}
      </div>`;
    }).join('');
  });
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

let isTrainingExpanded = false;
function renderTraining() {
  const el = document.getElementById('training-list');
  if (!el || !PROFILE.training) return;
  
  const displayCount = 4;
  const dataToRender = isTrainingExpanded ? PROFILE.training : PROFILE.training.slice(0, displayCount);

  el.innerHTML = dataToRender.map((t, i) => `
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

  renderTrainingBtn(displayCount);
}

function renderTrainingBtn(displayCount) {
  const btnContainer = document.getElementById('training-btn-container');
  if (!btnContainer) return;
  
  if (PROFILE.training.length <= displayCount) {
    btnContainer.innerHTML = '';
    return;
  }

  if (isTrainingExpanded) {
    btnContainer.innerHTML = `
      <button onclick="toggleTraining()" class="btn-ghost" style="padding:10px 24px; font-weight:600; border-radius:99px; display:inline-flex; align-items:center; gap:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
        Tampilkan Lebih Sedikit
      </button>
    `;
  } else {
    btnContainer.innerHTML = `
      <button onclick="toggleTraining()" class="btn-ghost" style="padding:10px 24px; font-weight:600; border-radius:99px; display:inline-flex; align-items:center; gap:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        Lihat Semua (${PROFILE.training.length})
      </button>
    `;
  }
}

window.toggleTraining = function() {
  isTrainingExpanded = !isTrainingExpanded;
  renderTraining();
  // Optional: scroll back slightly if collapsing
  if (!isTrainingExpanded) {
    const section = document.getElementById('training-section');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

function renderEducationCards() {
  const el = document.getElementById('resume-education-list');
  if (!el) return;
  // Override any grid styles from HTML
  el.style.display = 'block';
  el.style.position = 'relative';
  
  el.innerHTML = `
    <!-- Glowing Vertical Line -->
    <div style="position:absolute; top:2rem; bottom:0; left:16px; width:4px; background:linear-gradient(to bottom, var(--accent), rgba(var(--accent-rgb),0.1) 80%, transparent); border-radius:4px; box-shadow:0 0 20px rgba(var(--accent-rgb), 0.8); z-index:0;"></div>
    
    <div style="display:flex; flex-direction:column; gap:3rem;">
      ${PROFILE.education.map((edu, i) => `
        <div class="reveal reveal-delay-${i}" style="position:relative; padding-left:3.5rem;">
          <!-- Glowing Dot on Line -->
          <div style="position:absolute; top:2.5rem; left:8px; width:20px; height:20px; background:var(--bg); border:4px solid var(--accent); border-radius:50%; box-shadow:0 0 15px var(--accent), inset 0 0 5px var(--accent); z-index:2; animation:pulse-dot 3s infinite;"></div>
          <!-- Horizontal Connector -->
          <div style="position:absolute; top:3rem; left:28px; width:1.5rem; height:2px; background:linear-gradient(to right, var(--accent), transparent); opacity:0.6; z-index:1;"></div>
          
          <div class="glass-card tilt-card" style="display:flex; flex-wrap:wrap; overflow:hidden; background:var(--surface2); padding:0; border:1px solid rgba(255,255,255,0.08); box-shadow:0 15px 40px rgba(0,0,0,0.5);">
             <!-- Image side -->
             <div style="flex: 0 0 auto; width: 100%; max-width: 240px; position:relative; background:var(--bg3); min-height: 180px; cursor:pointer;" onclick="openImageModal('${edu.image}')" title="Klik untuk perbesar">
               <img src="${edu.image}" alt="${edu.institution}" loading="lazy" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; opacity:0.8; transition:transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.6s;" onmouseover="this.style.opacity='1'; this.style.transform='scale(1.08)'" onmouseout="this.style.opacity='0.8'; this.style.transform='scale(1)'">
               <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; opacity:0; background:rgba(0,0,0,0.4); transition:opacity 0.3s ease; color:#fff;" onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
               </div>
             </div>
             
             <!-- Content side -->
             <div style="flex: 1 1 0%; padding:2.5rem 2rem; display:flex; flex-direction:column; justify-content:center; position:relative;">
                <!-- Decorative background number -->
                <div style="position:absolute; top:-10px; right:15px; font-size:7rem; font-weight:900; color:var(--text); opacity:0.02; z-index:0; pointer-events:none; font-family:var(--font-display);">${i+1}</div>
                
                <div style="position:relative; z-index:1;">
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.75rem;">
                    <h3 style="font-size:1.4rem; font-weight:800; line-height:1.3; text-shadow:0 2px 4px rgba(0,0,0,0.6);">${edu.institution}</h3>
                    <span style="font-size:0.75rem; color:var(--accent); background:rgba(var(--accent-rgb),0.1); backdrop-filter:blur(6px); padding:5px 14px; border-radius:99px; border:1px solid rgba(var(--accent-rgb),0.3); white-space:nowrap; display:inline-flex; align-items:center; gap:6px; font-weight:700; box-shadow:0 0 15px rgba(var(--accent-rgb),0.15);">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      ${edu.period}
                    </span>
                  </div>
                  <p style="font-size:1rem; font-weight:700; color:var(--text-muted); margin-bottom:1rem; display:flex; align-items:center; gap:6px;">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                    ${edu.degree}
                  </p>
                  <p style="font-size:0.925rem; color:var(--text-dim); line-height:1.75; margin-bottom:1.5rem;">${edu.desc}</p>
                  
                  <div style="display:flex; align-items:center; flex-wrap:wrap; gap:1rem;">
                    ${edu.current ? '<span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:#10b981;background:rgba(16,185,129,0.1);padding:6px 14px;border-radius:99px;font-weight:700;border:1px solid rgba(16,185,129,0.3);box-shadow:0 0 12px rgba(16,185,129,0.2);"><span style="width:8px;height:8px;border-radius:50%;background:#10b981;box-shadow:0 0 10px #10b981; animation:pulse-dot 2s infinite;"></span> Sedang Ditempuh</span>' : '<span style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--text-dim);font-weight:600;padding:6px 14px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.1);border-radius:99px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg> Lulus / Selesai</span>'}
                    ${edu.mapUrl ? `<a href="${edu.mapUrl}" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;font-size:0.75rem;color:var(--accent);border:1px solid var(--border-accent);padding:6px 14px;border-radius:99px;text-decoration:none;transition:all 0.3s;font-weight:600;" onmouseover="this.style.background='var(--accent-dim)'; this.style.boxShadow='0 0 12px rgba(var(--accent-rgb),0.3)';" onmouseout="this.style.background='transparent'; this.style.boxShadow='none';"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> Lihat Lokasi</a>` : ''}
                  </div>
                </div>
             </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

let isCertsExpanded = false;
function renderCertificates() {
  const el = document.getElementById('certs-list');
  if (!el) return;

  const displayCount = 4;
  const dataToRender = isCertsExpanded ? PROFILE.certificates : PROFILE.certificates.slice(0, displayCount);

  el.innerHTML = dataToRender.map(c => `
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

  renderCertsBtn(displayCount);
}

function renderCertsBtn(displayCount) {
  const btnContainer = document.getElementById('certs-btn-container');
  if (!btnContainer) return;
  
  if (PROFILE.certificates.length <= displayCount) {
    btnContainer.innerHTML = '';
    return;
  }

  if (isCertsExpanded) {
    btnContainer.innerHTML = `
      <button onclick="toggleCerts()" class="btn-ghost" style="padding:10px 24px; font-weight:600; border-radius:99px; display:inline-flex; align-items:center; gap:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>
        Tampilkan Lebih Sedikit
      </button>
    `;
  } else {
    btnContainer.innerHTML = `
      <button onclick="toggleCerts()" class="btn-ghost" style="padding:10px 24px; font-weight:600; border-radius:99px; display:inline-flex; align-items:center; gap:8px;">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
        Lihat Semua (${PROFILE.certificates.length})
      </button>
    `;
  }
}

window.toggleCerts = function() {
  isCertsExpanded = !isCertsExpanded;
  renderCertificates();
};

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

  // ── Email button (Formspree Integration) ──────────────────
  const btnEmail = document.getElementById('btn-send-email');
  if (btnEmail) {
    btnEmail.addEventListener('click', async () => {
      const data = validateForm();
      if (!data) return;

      // Ubah UI tombol menjadi loading
      const originalText = btnEmail.innerHTML;
      btnEmail.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Mengirim...`;
      btnEmail.disabled = true;

      try {
        // Ganti 'YOUR_FORM_ID' dengan ID dari formspree.io Anda
        const response = await fetch('https://formspree.io/f/mrpzznvj', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.msg
          })
        });

        if (response.ok) {
          showFormMsg('✅ Pesan berhasil dikirim. Saya akan segera membalasnya!', 'success');
          form.reset();
        } else {
          // Fallback ke mailto jika Formspree belum disetup
          throw new Error('Formspree belum dikonfigurasi');
        }
      } catch (error) {
        // Fallback jika fetch gagal (misal ID Formspree belum ada)
        const body = `Nama: ${data.name}\nEmail: ${data.email}\n\nPesan:\n${data.msg}`;
        const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent('Pesan dari ' + data.name + (data.subject !== '-' ? ' — ' + data.subject : ''))}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, '_blank');
        showFormMsg('✅ Membuka klien email Anda (Fallback). Formspree belum aktif.', 'success');
        form.reset();
      } finally {
        // Kembalikan tombol seperti semula
        btnEmail.innerHTML = originalText;
        btnEmail.disabled = false;
      }
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

// --- AUTO INJECT STAR ANIMATION TO BTN-PRIMARY ---
function injectButtonStars() {
  const starSVG = `<svg viewBox="0 0 784.11 815.53"><path class="fil0" d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"></path></svg>`;
  const starsHTML = `
    <div class="btn-star star-1">${starSVG}</div>
    <div class="btn-star star-2">${starSVG}</div>
    <div class="btn-star star-3">${starSVG}</div>
    <div class="btn-star star-4">${starSVG}</div>
    <div class="btn-star star-5">${starSVG}</div>
    <div class="btn-star star-6">${starSVG}</div>
  `;
  document.querySelectorAll('.btn-primary').forEach(btn => {
    if (!btn.querySelector('.btn-star')) {
      btn.insertAdjacentHTML('beforeend', starsHTML);
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectButtonStars();
  let starTimeout;
  const observer = new MutationObserver(() => {
    clearTimeout(starTimeout);
    starTimeout = setTimeout(injectButtonStars, 150);
  });
  observer.observe(document.body, { childList: true, subtree: true });
});
