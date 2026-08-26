/**
 * i18n.js
 * Core engine for Bilingual (ID/EN) feature
 */

window.I18N = {
  lang: localStorage.getItem('portfolio_lang') || 'id',
  
  // Static dictionary for hardcoded HTML text
  dict: {
    // Level translations
    lvl_dasar: { id: "Dasar", en: "Basic" },
    lvl_mempelajari: { id: "Mempelajari", en: "Learning" },
    lvl_menengah: { id: "Dasar-Menengah", en: "Basic-Intermediate" },
    lvl_advanced: { id: "Lanjutan", en: "Advanced" },

    // Index Hero List Items
    idx_hero_li1: { id: "Adaptif — dari bengkel ke kode", en: "Adaptive — from workshop to code" },
    idx_hero_li2: { id: "Fokus pada Pengembangan Web, API, & Docker", en: "Focus on Web Development, API, & Docker" },
    idx_hero_li3: { id: "kemampuan administratif menggunakan Microsoft Office (Word, Excel) & Google Workspace", en: "Administrative skills using Microsoft Office (Word, Excel) & Google Workspace" },
    idx_hero_li4: { id: "Open to Work & Kolaborasi", en: "Open to Work & Collaboration" },
    idx_hero_btn: { id: "Baca Selengkapnya", en: "Read More" },
    idx_stat_detail: { id: "Lihat Detail", en: "View Details" },

    // Navbar
    nav_home: { id: "Beranda", en: "Home" },
    nav_about: { id: "Tentang", en: "About" },
    nav_projects: { id: "Proyek", en: "Projects" },
    nav_resume: { id: "Resume", en: "Resume" },
    nav_open_to_work: { id: "OPEN TO WORK", en: "OPEN TO WORK" },

    // Footer
    footer_bio: {
      id: `Mahasiswa Informatika Semester 5 dengan fokus pada Web Development dan UI/UX. Aktif membangun keahlian melalui proyek nyata dan memanfaatkan AI (ChatGPT, Claude, Copilot) untuk mengakselerasi produktivitas, riset, serta problem-solving.`,
      en: `5th-semester Informatics student focusing on Web Development and UI/UX. Actively building skills through real projects and leveraging AI (ChatGPT, Claude, Copilot) to accelerate productivity, research, and problem-solving.`
    },
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
    abt_badge: { id: "mengenal saya", en: "get to know me" },
    abt_h1: { id: "Tentang", en: "About" },
    abt_hero_p: {
      id: `Mahasiswa Informatika yang tengah membangun spesialisasi di ranah <strong style="color:#fff;font-weight:600;">Web Development</strong>. Mentransformasi etos kerja tangguh dari mekanik lapangan ke dunia digital, saya berkembang menjadi <strong style="color:var(--accent);font-weight:600;">problem solver</strong> adaptif yang menjunjung tinggi eksekusi sistem yang terstruktur.`,
      en: `Informatics student currently building a specialization in <strong style="color:#fff;font-weight:600;">Web Development</strong>. Transforming a resilient work ethic from field mechanics to the digital world, I am evolving into an adaptive <strong style="color:var(--accent);font-weight:600;">problem solver</strong> who upholds structured system execution.`
    },
    abt_stat1_lbl: { id: "Informatika", en: "Informatics" },
    abt_stat2_lbl: { id: "Bidang Keahlian", en: "Areas of Expertise" },
    abt_stat3_lbl: { id: "Tahun Belajar", en: "Years of Study" },
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
    abt_new_p1: {
      id: "Halo! Saya Muchamad Yazid Ardani, biasa dipanggil Yazid. Saat ini saya adalah mahasiswa <strong style=\"color:#fff;font-weight:700;\">Semester 5 Teknik Informatika</strong> di <strong style=\"color:var(--accent);font-weight:600;\">Universitas Nahdlatul Ulama Yogyakarta</strong>. Kalau ditarik mundur, perjalanan saya ke dunia IT sebenarnya lumayan melenceng. Waktu SMK, saya mengambil jurusan <strong style=\"color:#fff;font-weight:600;\">Teknik Kendaraan Ringan Otomotif</strong>. Dulu keseharian saya lebih akrab dengan mesin dan oli bengkel, jauh sebelum akhirnya saya memutuskan banting setir ke dunia pemrograman.",
      en: "Hello! I am Muchamad Yazid Ardani, usually called Yazid. Currently, I am a <strong style=\"color:#fff;font-weight:700;\">5th Semester Informatics Engineering</strong> student at <strong style=\"color:var(--accent);font-weight:600;\">Universitas Nahdlatul Ulama Yogyakarta</strong>. Looking back, my journey into IT was actually quite a detour. In vocational high school, I majored in <strong style=\"color:#fff;font-weight:600;\">Light Automotive Engineering</strong>. My daily life used to be more familiar with engines and workshop oil, long before I finally decided to pivot to the programming world."
    },
    abt_new_p2: {
      id: "Transisi dari <strong style=\"color:#fff;font-weight:600;\">bengkel mesin</strong>, kemudian sempat menjajal dunia <strong style=\"color:#fff;font-weight:600;\">affiliate marketing</strong>, mengajari saya satu hal penting: proses belajar itu tidak selamanya lurus, dan <strong style=\"color:#a78bfa;font-weight:700;\">kemampuan adaptasi adalah kuncinya</strong>. Mentalitas pantang menyerah ini yang sekarang saya pakai buat <em>debugging</em> kode error, merancang alur logika, dan mengejar ketertinggalan di dunia teknologi yang serba cepat.",
      en: "The transition from the <strong style=\"color:#fff;font-weight:600;\">machine shop</strong>, then venturing into the <strong style=\"color:#fff;font-weight:600;\">affiliate marketing</strong> world, taught me one important thing: the learning process is not always a straight line, and <strong style=\"color:#a78bfa;font-weight:700;\">adaptability is the key</strong>. This unyielding mentality is what I now use for <em>debugging</em> error codes, designing logic flows, and catching up in the fast-paced tech world."
    },
    abt_new_p3: {
      id: "Sekarang, fokus saya adalah memperkuat dasar-dasar <em>Software Engineering</em>. Saya sedang asyik mendalami <strong style=\"color:#10b981;font-weight:700;\">Web Development</strong>, menghubungkan <strong style=\"color:#fff;font-weight:600;\">API ke Database</strong>, dan bereksperimen merancang antarmuka lewat <strong style=\"color:#fff;font-weight:600;\">UI/UX Design</strong>. Saya sadar kalau kerja di industri pasti butuh kolaborasi, makanya saya biasakan pakai <em>version control</em> (<strong style=\"color:#fff;font-weight:600;\">Git/GitHub</strong>) dari sekarang, plus pelan-pelan berkenalan dengan <strong style=\"color:#10b981;font-weight:700;\">Docker</strong> untuk paham konsep <em>deployment</em>.",
      en: "Now, my focus is on strengthening the fundamentals of <em>Software Engineering</em>. I am immersed in <strong style=\"color:#10b981;font-weight:700;\">Web Development</strong>, connecting <strong style=\"color:#fff;font-weight:600;\">APIs to Databases</strong>, and experimenting with interface design through <strong style=\"color:#fff;font-weight:600;\">UI/UX Design</strong>. I realize that working in the industry requires collaboration, which is why I am accustomed to using <em>version control</em> (<strong style=\"color:#fff;font-weight:600;\">Git/GitHub</strong>) from now on, plus slowly getting familiar with <strong style=\"color:#10b981;font-weight:700;\">Docker</strong> to understand <em>deployment</em> concepts."
    },
    abt_new_p4: {
      id: "Selain ngoding, saya juga terbiasa dengan urusan administrasi dan data pakai <strong style=\"color:#fb923c;font-weight:700;\">Microsoft Office</strong>. Buat saya, efisiensi kerja itu nomor satu. Oleh karena itu, saya sering tandem bareng <strong style=\"color:#fb923c;font-weight:700;\">AI Assistants</strong>. Teknologi ini sangat membantu untuk menaikkan produktivitas harian—mulai dari mencari ide, membaca referensi kode, sampai beresin tugas-tugas repetitif agar saya bisa fokus ke logika utamanya.",
      en: "Besides coding, I am also accustomed to administrative and data tasks using <strong style=\"color:#fb923c;font-weight:700;\">Microsoft Office</strong>. For me, work efficiency is number one. Therefore, I often pair up with <strong style=\"color:#fb923c;font-weight:700;\">AI Assistants</strong>. This technology is incredibly helpful for boosting daily productivity—from brainstorming ideas and reading code references to completing repetitive tasks so I can focus on the core logic."
    },
    abt_lang_h3: { id: "Bahasa", en: "Language" },
    abt_principle_title: { id: "Prinsip Kerja Saya", en: "My Work Principles" },
    abt_pr1_title: { id: "Pembelajar Cepat", en: "Fast Learner" },
    abt_pr1_desc: { id: "Teknologi bergerak cepat. Saya terbiasa membaca dokumentasi dan beradaptasi dengan *tools* baru dalam hitungan hari.", en: "Technology moves fast. I'm used to reading documentation and adapting to new *tools* in a matter of days." },
    abt_pr2_title: { id: "Kolaboratif", en: "Collaborative" },
    abt_pr2_desc: { id: "Kode yang baik adalah yang bisa dibaca tim. Saya mengedepankan komunikasi, *Git flow* yang rapi, dan empati dalam tim.", en: "Good code is readable by the team. I prioritize communication, neat *Git flow*, and empathy within the team." },
    abt_pr3_title: { id: "Berorientasi Detail", en: "Detail Oriented" },
    abt_pr3_desc: { id: "Mulai dari presisi *pixel* pada UI hingga penanganan *error* pada API, detail kecil menentukan kualitas produk.", en: "From *pixel* precision on the UI to *error* handling on the API, small details determine product quality." },
    abt_prin_lbl: { id: "Prinsip Saya", en: "My Principles" },
    abt_prin_h2: { id: "Nilai yang Saya Pegang", en: "Values I Hold" },
    abt_edu_lbl: { id: "Latar Belakang", en: "Background" },
    abt_edu_h2: { id: "Riwayat Pendidikan", en: "Educational History" },
    abt_org_lbl: { id: "Kepemimpinan", en: "Leadership" },
    abt_org_h2: { id: "Pengalaman Organisasi", en: "Organizational Experience" },
    abt_cta_h2: { id: "Tertarik Berkolaborasi?", en: "Interested in Collaborating?" },
    abt_cta_p: { id: "Saya terbuka untuk proyek pengembangan perangkat lunak, eksplorasi teknologi masa depan, diskusi ide inovatif, serta peluang profesional tingkat lanjut.", en: "I am open to software development projects, exploring future technologies, discussing innovative ideas, and advanced professional opportunities." },
    abt_cta_btn2: { id: "Lihat Resume Resmi", en: "View Official Resume" },
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
    con_form_btn: { id: "Kirim Pesan Sekarang", en: "Send Message Now" },

    // Extra translations for index.html
    idx_skill_pre: { id: "Apa yang saya bawa", en: "What I bring" },
    idx_skill_h2_1: { id: "Keahlian &amp;", en: "Skills &amp;" },
    idx_skill_h2_2: { id: "Fokus Saya", en: "My Focus" },
    idx_skill_post: { id: "Portfolio", en: "Portfolio" },
    idx_skill_t2: { id: "Selalu Mengasah Skill", en: "Always Sharpening Skills" },

    // Extra translations for about.html
    abt_h2_org: { id: "Pengalaman Organisasi", en: "Organizational Experience" },
    abt_h2_edu: { id: "Riwayat Pendidikan", en: "Educational Background" },
    
    // Extra translations for projects.html
    prj_hero_desc: { id: "Kumpulan studi kasus, proyek personal, dan eksplorasi teknologi. Dibangun untuk memecahkan masalah nyata melalui desain dan barisan kode.", en: "A collection of case studies, personal projects, and tech explorations. Built to solve real problems through design and code." },
    prj_hero_repo: { id: "Saya terus belajar dan mengeksplorasi tantangan pengembangan perangkat lunak baru. Follow GitHub saya untuk update kode dan teknologi terbaru.", en: "I continuously learn and explore new software development challenges. Follow my GitHub for the latest code and technology updates." },

    // Extra translations for resume.html
    res_cv_label: { id: "📄 File CV", en: "📄 CV File" },
    res_cv_update: { id: "🗓️ Diperbarui 2026", en: "🗓️ Updated 2026" },
    res_cv_click: { id: "👁️ Klik untuk Lihat", en: "👁️ Click to View" },
    res_cv_download: { id: "Download CV", en: "Download CV" },
    res_chart_t1: { id: "Skill & Tools", en: "Skills & Tools" },
    res_chart_sub: { id: "// Level jujur berdasarkan pemahaman aktual, bukan klaim berlebihan.", en: "// Honest levels based on actual understanding, not exaggerated claims." },
    res_add_skills: { id: "Kemampuan Tambahan", en: "Additional Skills" },
    res_add_digital: { id: "Penggunaan Alat Digital", en: "Digital Tool Usage" },
    res_hist_work: { id: "Riwayat Kerja & Magang", en: "Work & Internship History" },
    res_hist_train: { id: "Pelatihan & Bootcamp", en: "Training & Bootcamps" },
    res_hist_cert: { id: "Sertifikat & Penghargaan", en: "Certificates & Awards" },

    // Extra translations for contact.html
    con_hero_desc: { id: "Terbuka untuk diskusi pengembangan teknologi, kolaborasi proyek, atau peluang magang yang menantang.", en: "Open to discussing tech development, project collaboration, or challenging internship opportunities." },
    con_status_avail: { id: "Tersedia", en: "Available" },
    con_status_desc: { id: "Terbuka untuk proyek kolaborasi, diskusi teknologi, serta peluang magang atau proyek freelance.", en: "Open for collaborative projects, tech discussions, internships, or freelance projects." },
    con_send_msg: { id: "Kirim Pesan", en: "Send Message" },
    con_send_desc: { id: "Silakan isi form di bawah ini untuk mengirim pesan via email atau WhatsApp secara langsung.", en: "Please fill out the form below to send a message via email or WhatsApp directly." },
    con_btn_wa: { id: "Kirim via WA", en: "Send via WA" },
    con_btn_em: { id: "Kirim Email", en: "Send Email" },
    con_lbl_msg: { id: "Pesan Anda", en: "Your Message" },
    con_lbl_sub: { id: "Subjek (Opsional)", en: "Subject (Optional)" },

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
