/**
 * i18n.js
 * Core engine for Bilingual (ID/EN) feature
 */

window.I18N = {
  lang: localStorage.getItem('portfolio_lang') || 'id',
  
  // Static dictionary for hardcoded HTML text
  dict: {
    // Navbar
    nav_home: { id: "Beranda", en: "Home" },
    nav_about: { id: "Tentang", en: "About" },
    nav_projects: { id: "Proyek", en: "Projects" },
    nav_resume: { id: "Resume", en: "Resume" },
    nav_open_to_work: { id: "OPEN TO WORK", en: "OPEN TO WORK" },

    // Footer
    footer_collab_title: { id: "Mulai Eksekusi Proyek", en: "Let's Start a Project" },
    footer_collab_desc: { id: "Memiliki ide visi tingkat tinggi atau sekadar mencari talenta rekayasa lunak elit? Mari rakit mahakarya bersama.", en: "Have a high-level vision or just looking for elite software engineering talent? Let's build a masterpiece together." },
    footer_collab_btn: { id: "Mulai Diskusi", en: "Start a Discussion" },
    footer_status: { id: "TERSEDIA UNTUK KERJA SAMA", en: "AVAILABLE FOR WORK" },
    footer_copyright: { id: "Hak Cipta & Kekayaan Intelektual Dilindungi.", en: "All Rights Reserved." },

    // Index (Hero section)
    hero_hello: { id: "Halo, saya Yazid 👋", en: "Hello, I'm Yazid 👋" },
    hero_explore: { id: "Jelajahi Portofolio", en: "Explore Portfolio" },
    hero_contact: { id: "Hubungi Saya", en: "Contact Me" },
    hero_open_to_work: { id: "Open to Work", en: "Open to Work" },
    hero_status_pill: { id: "Tersedia untuk Kolaborasi &amp; Belajar", en: "Available for Collaboration &amp; Learning" },
    hero_tagline: {
      id: `Mahasiswa Informatika <strong style="color:#fff;font-weight:700;">Semester 5</strong> di <strong style="color:var(--accent);font-weight:600;">UNU Yogyakarta</strong> yang sedang fokus mendalami dunia <em>Software Engineering</em>. Sejauh ini, saya banyak mengulik seputar pengembangan <em>Web</em>, merancang <span style="color:var(--accent);font-weight:700;">API & Database</span>, eksplorasi <span style="color:var(--accent);font-weight:700;">UI/UX</span>, sampai mencoba kontainerisasi dengan <em>Docker</em>. Walaupun masih berproses, saya terbiasa belajar mandiri maupun kolaborasi tim. Selain menulis kode, saya juga cukup luwes mengoperasikan tools <span style="color:var(--accent);font-weight:700;">Office & Manajemen Data</span>. Untuk mengakselerasi proses belajar dan pengerjaan tugas, saya rutin tandem dengan <strong style="color:var(--accent);font-weight:600;">AI Assistants</strong>—baik itu untuk riset ide, membaca dokumentasi, atau sekadar <em>debugging</em> error.`,
      en: `A <strong style="color:#fff;font-weight:700;">5th Semester</strong> Informatics Student at <strong style="color:var(--accent);font-weight:600;">UNU Yogyakarta</strong> focusing deeply on the world of <em>Software Engineering</em>. So far, I have extensively explored <em>Web</em> development, designing <span style="color:var(--accent);font-weight:700;">APIs & Databases</span>, exploring <span style="color:var(--accent);font-weight:700;">UI/UX</span>, and trying containerization with <em>Docker</em>. Although still a work in progress, I am used to independent learning as well as team collaboration. Beyond writing code, I am also quite fluent in operating <span style="color:var(--accent);font-weight:700;">Office & Data Management</span> tools. To accelerate learning and task completion, I routinely pair with <strong style="color:var(--accent);font-weight:600;">AI Assistants</strong>—whether for idea research, reading documentation, or simply <em>debugging</em> errors.`
    },
    hero_btn_projects: {
      id: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> Lihat Projects`,
      en: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> View Projects`
    },
    hero_btn_contact: {
      id: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> Hubungi Saya`,
      en: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> Contact Me`
    },

    // Index (Other Sections)
    idx_focus_desc: {
      id: "Masih dalam proses belajar secara intensif — inilah area yang saya tekuni sungguh-sungguh untuk memecahkan masalah lewat barisan kode.",
      en: "Still in an intensive learning process — this is the area I seriously pursue to solve problems through lines of code."
    },
    idx_proj_title1: { id: "Proyek ", en: "Featured " },
    idx_proj_title2: { id: "Pilihan", en: "Projects" },
    idx_proj_desc: { id: "// karya nyata dari proses belajar mandiri", en: "// real work from self-taught learning process" },
    idx_proj_btn: { id: "<span>Lihat Semua</span>", en: "<span>View All</span>" },
    idx_skills_label: { id: "SKILLS", en: "SKILLS" },
    idx_skills_title: { id: "Teknologi & Tools", en: "Technologies & Tools" },
    idx_about_label: { id: "Tentang Saya", en: "About Me" },
    idx_about_title: {
      id: `Satu Perjalanan,<br><span style="background:linear-gradient(135deg,var(--accent),rgba(var(--accent-rgb),0.5));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Banyak Pelajaran</span>`,
      en: `One Journey,<br><span style="background:linear-gradient(135deg,var(--accent),rgba(var(--accent-rgb),0.5));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Many Lessons</span>`
    },
    idx_about_desc: {
      id: `Mengawali perjalanan dari mekanik bengkel otomotif hingga kini mendalami rekayasa perangkat lunak telah membentuk saya menjadi <em>problem solver</em> yang tangguh dan mudah beradaptasi. Fokus keahlian saya mencakup ekosistem <strong style="color:#fff;">Web Development</strong>, <strong style="color:#fff;">API & Database</strong>, hingga <strong style="color:#fff;">UI/UX Design</strong>. Saya memadukan keterampilan teknis ini dengan praktik pengelolaan data (Office) yang rapi, kontrol versi via <strong style="color:#fff;">Git</strong>, dan dasar <em>deployment</em> (<strong style="color:#fff;">Docker</strong>). Di keseharian, saya mengintegrasikan asisten <strong>Kecerdasan Buatan (AI)</strong> ke dalam alur kerja untuk melipatgandakan produktivitas dan menghasilkan solusi digital yang jauh lebih efisien.`,
      en: `Starting my journey as an automotive mechanic to now diving deep into software engineering has shaped me into a resilient and adaptable <em>problem solver</em>. My expertise focuses on the <strong style="color:#fff;">Web Development</strong> ecosystem, <strong style="color:#fff;">API & Database</strong>, and <strong style="color:#fff;">UI/UX Design</strong>. I combine these technical skills with neat data management practices (Office), version control via <strong style="color:#fff;">Git</strong>, and deployment basics (<strong style="color:#fff;">Docker</strong>). In my daily life, I integrate <strong>Artificial Intelligence (AI)</strong> assistants into my workflow to multiply productivity and produce much more efficient digital solutions.`
    },
    idx_about_btn: { id: "Baca Selengkapnya", en: "Read More" }
  },

  /**
   * Helper function to extract correct string based on current language
   * @param {Object|String} content - Ex: { id: "Halo", en: "Hello" } or "Halo"
   * @returns {String}
   */
  t: function(content) {
    if (typeof content === 'object' && content !== null) {
      return content[this.lang] || content.id || "";
    }
    return content || "";
  },

  /**
   * Toggle language between 'id' and 'en'
   */
  toggleLang: function() {
    this.lang = this.lang === 'id' ? 'en' : 'id';
    localStorage.setItem('portfolio_lang', this.lang);
    document.documentElement.lang = this.lang;
    
    // Re-render HTML texts
    this.translateDOM();
    
    // Dispatch custom event so other scripts (components.js/main.js) can re-render dynamic content
    window.dispatchEvent(new Event('languageChanged'));
  },

  /**
   * Scan DOM for [data-i18n] and apply translation from static dictionary
   */
  translateDOM: function() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.dict[key] && this.dict[key][this.lang]) {
        // Preserve any HTML tags within the dictionary translation if needed
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = this.dict[key][this.lang];
        } else {
          el.innerHTML = this.dict[key][this.lang];
        }
      }
    });
  },

  /**
   * Initialize language settings on load
   */
  init: function() {
    document.documentElement.lang = this.lang;
    document.addEventListener('DOMContentLoaded', () => {
      this.translateDOM();
    });
  }
};

// Auto initialize on script load
window.I18N.init();

// Global shortcut for easy use in profile.js / components.js
window.t = function(content) {
  return window.I18N.t(content);
};
