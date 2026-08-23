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
    idx_proj_btn: { id: "Lihat Semua", en: "View All" },
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
    idx_about_btn: { id: "Baca Selengkapnya", en: "Read More" },
    idx_stat_sem: { id: "Semester Aktif", en: "Active Semester" },
    idx_stat_sem_sub: { id: "Mahasiswa Aktif", en: "Active Student" },
    idx_stat_proj: { id: "Proyek Latihan", en: "Practice Projects" },
    idx_stat_proj_sub: { id: "Terus Bertambah", en: "Keep Growing" },
    idx_stat_cert: { id: "Sertifikat", en: "Certificates" },
    idx_stat_cert_sub: { id: "Tervalidasi Resmi", en: "Officially Validated" },
    idx_stat_org: { id: "Organisasi", en: "Organization" },
    idx_stat_org_sub: { id: "Aktif Berpartisipasi", en: "Active Participation" },
    idx_stat_train: { id: "Pelatihan yang Diikuti", en: "Attended Training" },
    idx_stat_train_sub: { id: "PELATIHAN & KURSUS", en: "TRAINING & COURSES" },

    // ==========================================
    // ABOUT PAGE
    // ==========================================
    abt_title1: { id: "Lebih Dekat", en: "Closer" },
    abt_title2: { id: "dengan Saya", en: "with Me" },
    abt_subtitle: { id: "// cerita di balik barisan kode", en: "// the story behind the lines of code" },
    abt_header: { id: "Membangun Solusi lewat", en: "Building Solutions through" },
    abt_header_hl: { id: "Eksplorasi & Logika", en: "Exploration & Logic" },
    abt_p1: { 
      id: "Halo! Saya Yazid, seorang tech-enthusiast yang memulai perjalanan dari dunia mekanik otomotif sebelum akhirnya jatuh cinta pada rekayasa perangkat lunak. Bagi saya, memecahkan *bug* pada kode memiliki kepuasan yang sama dengan merakit kembali komponen mesin—keduanya membutuhkan ketelitian, logika terstruktur, dan kesabaran.",
      en: "Hello! I'm Yazid, a tech-enthusiast who started the journey from the automotive mechanics world before falling in love with software engineering. For me, solving a *bug* in code gives the same satisfaction as reassembling engine components—both require precision, structured logic, and patience."
    },
    abt_p2: {
      id: "Sebagai Mahasiswa Informatika Semester 5, saya berfokus pada pengembangan *Web* (Frontend & Backend), perancangan *UI/UX*, hingga mengeksplorasi *DevOps* (Docker). Di luar kelas, saya menghabiskan waktu bereksplorasi membangun proyek nyata, mengikuti bootcamp, dan mengelola komunitas.",
      en: "As a 5th-semester Informatics Student, I focus on *Web* development (Frontend & Backend), *UI/UX* design, and exploring *DevOps* (Docker). Outside of class, I spend my time exploring by building real projects, joining bootcamps, and managing communities."
    },
    abt_p3: {
      id: "Satu hal yang membedakan alur kerja saya adalah integrasi mendalam dengan <strong style=\"color:var(--accent);\">Kecerdasan Buatan (AI)</strong>. Saya memposisikan AI sebagai asisten *pair-programming* harian untuk mempercepat riset, menulis dokumentasi, dan men-debug aplikasi, sehingga saya dapat berfokus pada arsitektur dan inovasi.",
      en: "One thing that distinguishes my workflow is the deep integration with <strong style=\"color:var(--accent);\">Artificial Intelligence (AI)</strong>. I position AI as a daily *pair-programming* assistant to accelerate research, write documentation, and debug applications, allowing me to focus on architecture and innovation."
    },
    abt_principle_title: { id: "Prinsip Kerja Saya", en: "My Work Principles" },
    abt_pr1_title: { id: "Pembelajar Cepat", en: "Fast Learner" },
    abt_pr1_desc: { id: "Teknologi bergerak cepat. Saya terbiasa membaca dokumentasi dan beradaptasi dengan *tools* baru dalam hitungan hari.", en: "Technology moves fast. I'm used to reading documentation and adapting to new *tools* in a matter of days." },
    abt_pr2_title: { id: "Kolaboratif", en: "Collaborative" },
    abt_pr2_desc: { id: "Kode yang baik adalah yang bisa dibaca tim. Saya mengedepankan komunikasi, *Git flow* yang rapi, dan empati dalam tim.", en: "Good code is readable by the team. I prioritize communication, neat *Git flow*, and empathy within the team." },
    abt_pr3_title: { id: "Berorientasi Detail", en: "Detail Oriented" },
    abt_pr3_desc: { id: "Mulai dari presisi *pixel* pada UI hingga penanganan *error* pada API, detail kecil menentukan kualitas produk.", en: "From *pixel* precision on the UI to *error* handling on the API, small details determine product quality." },
    abt_cta_title: { id: "Siap Memulai Sesuatu yang Besar?", en: "Ready to Start Something Big?" },
    abt_cta_desc: { id: "Mari diskusikan ide Anda dan ubah menjadi solusi digital yang nyata.", en: "Let's discuss your ideas and turn them into real digital solutions." },
    abt_cta_btn: { id: "Mari Berkolaborasi", en: "Let's Collaborate" },

    // ==========================================
    // PROJECTS PAGE
    // ==========================================
    prj_title1: { id: "Katalog", en: "Project" },
    prj_title2: { id: "Karya", en: "Catalog" },
    prj_subtitle: { id: "// eksplorasi, dedikasi, dan eksekusi", en: "// exploration, dedication, and execution" },
    prj_karya_label: { id: "Karya Saya", en: "My Work" },
    prj_filter_all: { id: "Semua", en: "All" },
    prj_filter_web: { id: "Web Dev", en: "Web Dev" },
    prj_filter_ui: { id: "UI/UX", en: "UI/UX" },
    prj_filter_ui_d: { id: "UI Design", en: "UI Design" },
    prj_filter_mini: { id: "Mini Apps", en: "Mini Apps" },
    prj_search: { id: "Cari proyek...", en: "Search projects..." },
    prj_modal_features: { id: "Fitur Utama", en: "Key Features" },
    prj_modal_tech: { id: "Tech Stack", en: "Tech Stack" },
    prj_coming_soon: { id: "Lebih Banyak Project Coming Soon", en: "More Projects Coming Soon" },
    prj_view_github: { id: "Lihat GitHub Repository", en: "View GitHub Repository" },

    // ==========================================
    // RESUME PAGE
    // ==========================================
    res_title1: { id: "Perjalanan", en: "Career" },
    res_title2: { id: "Karir", en: "Journey" },
    res_subtitle: { id: "// jejak langkah dan pencapaian", en: "// footsteps and achievements" },
    res_prof_label: { id: "Profil Profesional", en: "Professional Profile" },
    res_prof_title: { id: "Ringkasan Profil", en: "Profile Summary" },
    res_prof_p1: { 
      id: `Seorang <strong style="color:var(--text);font-weight:700;">Tech Enthusiast</strong> dan pembelajar cepat yang aktif mengeksplorasi ekosistem <strong style="color:var(--accent);font-weight:600;">Web Development</strong>, perancangan <strong style="color:var(--accent);font-weight:600;">API & Database</strong>, hingga desain <strong style="color:var(--accent);font-weight:600;">UI/UX</strong>. Saya juga terus memperluas wawasan ke ranah <em>DevOps</em> dasar melalui penggunaan <strong>Docker</strong>. Berbekal mentalitas tangguh dari latar belakang mekanik lapangan, saya memiliki daya adaptasi dan <em>problem-solving</em> yang kuat, didukung oleh kecakapan manajerial dan pelaporan data yang rapi. Selain itu, saya menjadikan teknologi <strong style="color:var(--accent);font-weight:600;">Kecerdasan Buatan (AI)</strong> sebagai instrumen untuk mendongkrak produktivitas harian—mulai dari tahap riset, perencanaan alur kerja, hingga penyelesaian kendala teknis dan <em>debugging</em>.`, 
      en: `A <strong style="color:var(--text);font-weight:700;">Tech Enthusiast</strong> and fast learner actively exploring the <strong style="color:var(--accent);font-weight:600;">Web Development</strong> ecosystem, <strong style="color:var(--accent);font-weight:600;">API & Database</strong> design, and <strong style="color:var(--accent);font-weight:600;">UI/UX</strong> design. I also continue to expand my knowledge into basic <em>DevOps</em> through the use of <strong>Docker</strong>. Armed with a resilient mentality from a field mechanic background, I have strong adaptability and <em>problem-solving</em> skills, supported by neat managerial and data reporting abilities. Additionally, I utilize <strong style="color:var(--accent);font-weight:600;">Artificial Intelligence (AI)</strong> technology as an instrument to boost daily productivity—from the research phase, workflow planning, to solving technical constraints and <em>debugging</em>.`
    },
    res_prof_p2: { 
      id: `Saya siap menghadapi tantangan teknis, berkolaborasi dalam tim pengembangan yang dinamis (<em>Agile</em>), dan berdedikasi penuh terhadap kualitas sistem. Fokus utama saya adalah <strong style="color:var(--text);font-weight:700;">memberikan solusi digital yang komprehensif</strong> bagi perusahaan, sembari terus bertumbuh menjadi talenta teknologi andal melalui praktik industri nyata.`,
      en: `I am ready to face technical challenges, collaborate in dynamic development teams (<em>Agile</em>), and am fully dedicated to system quality. My main focus is to <strong style="color:var(--text);font-weight:700;">provide comprehensive digital solutions</strong> for companies, while continuing to grow into a reliable tech talent through real industry practices.`
    },
    res_prof_stat1: { id: "Proyek Selesai", en: "Completed Projects" },
    res_prof_stat2: { id: "Sertifikat", en: "Certificates" },
    res_prof_stat3: { id: "Pengalaman Kerja", en: "Work Experience" },
    res_sec_kemampuan: { id: "Kemampuan", en: "Skills" },
    res_sec_belajar: { id: "Pengalaman Belajar", en: "Learning Experience" },
    res_sec_pencapaian: { id: "Pencapaian", en: "Achievements" },
    res_sec_akademik: { id: "Akademik", en: "Academic" },
    res_title_pendidikan: { id: "Pendidikan", en: "Education" },
    res_btn_more: { id: "Tampilkan Lebih Banyak", en: "Show More" },
    res_btn_less: { id: "Tampilkan Sedikit", en: "Show Less" },
    res_btn_cv: { id: "Download CV Utama (ATS)", en: "Download Main CV (ATS)" },
    res_btn_cv_btn: { id: "Download CV Lengkap", en: "Download Full CV" },
    res_stat_proj: { id: "Proyek", en: "Projects" },
    res_stat_cert: { id: "Sertifikasi", en: "Certifications" },
    res_stat_exp: { id: "Pengalaman", en: "Experience" },
    res_tab_edu: { id: "Pendidikan & Organisasi", en: "Education & Organization" },
    res_tab_exp: { id: "Pengalaman & Keahlian", en: "Experience & Skills" },
    res_tab_cert: { id: "Sertifikasi & Pelatihan", en: "Certifications & Training" },
    res_sect_edu: { id: "Riwayat Pendidikan", en: "Education History" },
    res_sect_org: { id: "Pengalaman Organisasi", en: "Organization Experience" },
    res_sect_exp: { id: "Pengalaman Profesional", en: "Professional Experience" },
    res_sect_skill: { id: "Distribusi Keahlian", en: "Skills Distribution" },
    res_sect_lang: { id: "Bahasa", en: "Languages" },
    res_sect_cert: { id: "Sertifikasi Profesional", en: "Professional Certifications" },
    res_sect_train: { id: "Pelatihan & Bootcamp", en: "Training & Bootcamp" },

    // ==========================================
    // CONTACT PAGE
    // ==========================================
    con_title1: { id: "Mari", en: "Let's" },
    con_title2: { id: "Berdiskusi", en: "Discuss" },
    con_subtitle: { id: "// punya ide gila? mari kita wujudkan", en: "// have a crazy idea? let's make it happen" },
    con_card_email: { id: "Email Saya", en: "My Email" },
    con_card_phone: { id: "Telepon / WA", en: "Phone / WA" },
    con_card_loc: { id: "Lokasi", en: "Location" },
    con_form_title: { id: "Kirim Pesan Langsung", en: "Send Direct Message" },
    con_form_name: { id: "Nama Lengkap", en: "Full Name" },
    con_form_email: { id: "Alamat Email", en: "Email Address" },
    con_form_subject: { id: "Topik Pembicaraan (Opsional)", en: "Topic (Optional)" },
    con_form_msg: { id: "Tulis pesan Anda di sini...", en: "Write your message here..." },
    con_form_btn: { id: "Kirim Pesan Sekarang", en: "Send Message Now" }
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
