/**
 * DATA UTAMA PORTOFOLIO
 * =====================
 * Edit file ini untuk memperbarui semua konten situs.
 * Tidak perlu menyentuh file HTML sama sekali.
 */

const PROFILE = {
  name: "Muchamad Yazid Ardani",
  nickname: "Yazid",
  tagline: {
    id: "Mahasiswa Informatika • Calon Web Dev • Antusias Teknologi",
    en: "Informatics Student • Aspiring Web Dev • Tech Enthusiast"
  },
  taglineSub: {
    id: "Mahasiswa Semester 5 yang sedang membangun fondasi di dunia teknologi — satu baris kode dalam satu waktu.",
    en: "5th Semester Student building a foundation in the tech world — one line of code at a time."
  },
  email: "muhzee16@gmail.com",
  phone: "+62819 1568 0315",
  location: "Yogyakarta, Indonesia",
  github: "https://github.com/yazid-solo",
  linkedin: "https://www.linkedin.com/in/muhammad-yazid-ardani-127a19343/",
  instagram: "https://www.instagram.com/muhzee17/",
  whatsapp: "https://wa.me/6281915680315",
  university: "Universitas Nahdlatul Ulama Yogyakarta",
  semester: 5,
  faculty: "Fakultas Teknologi Informasi",
  major: "Teknik Informatika",
  bio: {
    id: `Saya adalah mahasiswa aktif Semester 5 Prodi Informatika yang disiplin, cepat belajar, dan memiliki minat besar di bidang teknologi — khususnya web development dan desain UI. Saat ini saya fokus membangun keahlian nyata melalui eksplorasi kode dan proyek-proyek personal yang menantang. Dalam alur kerja, saya terbiasa memanfaatkan kapabilitas AI (seperti ChatGPT, Claude, dan Copilot) secara komprehensif sebagai asisten produktivitas—tidak hanya untuk problem-solving, tetapi juga untuk perencanaan proyek, riset, manajemen waktu, dan optimalisasi alur kerja harian.`,
    en: `I am a disciplined and fast-learning 5th-semester Informatics student with a strong passion for technology—especially web development and UI design. I currently focus on building practical skills through code exploration and challenging personal projects. In my workflow, I regularly leverage AI capabilities (like ChatGPT, Claude, and Copilot) comprehensively as productivity assistants—not just for problem-solving, but also for project planning, research, time management, and optimizing daily workflows.`
  },
  about: {
    id: `Dengan latar belakang yang beragam — dari teknik otomotif, magang lapangan, hingga affiliate marketing — saya terbiasa melakukan troubleshooting dan beradaptasi dengan cepat. Saya percaya bahwa problem-solving di dunia nyata sama pentingnya dengan logika kode. Saat ini saya mendalami web development dan UI/UX, sembari mengasah kemampuan kolaborasi tim dan pelaporan data yang terstruktur. Saya juga secara aktif mengintegrasikan berbagai alat Kecerdasan Buatan (AI) ke dalam workflow harian guna memaksimalkan produktivitas secara menyeluruh—mulai dari riset, analisis data, hingga penyelesaian kendala teknis secara presisi dan terukur.`,
    en: `With a diverse background—from automotive engineering and field internships to affiliate marketing—I am accustomed to troubleshooting and adapting quickly. I believe real-world problem-solving is just as crucial as code logic. I am currently deepening my knowledge in web development and UI/UX while honing my team collaboration and structured data reporting skills. I also actively integrate various Artificial Intelligence (AI) tools into my daily workflow to maximize overall productivity—from research and data analysis to precise and measurable technical issue resolution.`
  },

  highlights: [
    {
      icon: "🎯",
      title: { id: "Fokus Belajar", en: "Focus on Learning" },
      desc: "Belajar konsisten tiap hari — dari dokumentasi resmi, video tutorial, hingga proyek latihan mandiri yang nyata.",
      color: "rgba(99,102,241,0.2)",
      accentColor: "#818cf8",
      glowColor: "rgba(99,102,241,0.3)",
      borderHover: "rgba(99,102,241,0.4)",
      level: 3,
      tags: ["Self-learning", "Dokumentasi", "Praktik"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
    },
    {
      icon: "💻",
      title: { id: "Web Dev Dasar", en: "Basic Web Dev" },
      desc: "Membangun antarmuka dengan HTML, CSS, dan JavaScript — sedang aktif menuju level menengah dengan proyek nyata.",
      color: "rgba(20,184,166,0.2)",
      accentColor: "#2dd4bf",
      glowColor: "rgba(20,184,166,0.3)",
      borderHover: "rgba(20,184,166,0.4)",
      level: 3,
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"
    },
    {
      icon: "🎨",
      title: { id: "UI yang Rapi", en: "Neat UI Design" },
      desc: "Merancang antarmuka yang bersih dan intuitif menggunakan Figma — dari wireframe hingga prototype interaktif.",
      color: "rgba(244,63,94,0.2)",
      accentColor: "#fb7185",
      glowColor: "rgba(244,63,94,0.3)",
      borderHover: "rgba(244,63,94,0.4)",
      level: 3,
      tags: ["Figma", "Prototyping", "UI Design"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80"
    },
    {
      icon: "🧩",
      title: { id: "Problem Solving", en: "Problem Solving" },
      desc: { id: "Senang memecah masalah kompleks menjadi langkah-langkah kecil yang terstruktur dan dapat diselesaikan satu per satu.", en: "Enjoy breaking down complex problems into small, structured steps that can be solved one by one." },
      color: "rgba(245,158,11,0.2)",
      accentColor: "#fbbf24",
      glowColor: "rgba(245,158,11,0.3)",
      borderHover: "rgba(245,158,11,0.4)",
      level: 3,
      tags: ["Analitis", "Logika", "Adaptif"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
    },
    {
      icon: "📄",
      title: { id: "Office & Produktivitas", en: "Office & Productivity" },
      desc: "Mahir menggunakan Microsoft Office (Word, Excel, PowerPoint) & Google Workspace — diasah intensif lewat tugas akademik dan pelaporan data profesional.",
      color: "rgba(16,185,129,0.2)",
      accentColor: "#34d399",
      glowColor: "rgba(16,185,129,0.3)",
      borderHover: "rgba(16,185,129,0.4)",
      level: 3,
      tags: ["Ms. Word", "Ms. Excel", "Google Docs", "Sheets"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80"
    },
    {
      icon: "⚙️",
      title: { id: "Backend & Database", en: "Backend & Database" },
      desc: { id: "Membangun sistem backend dan RESTful API menggunakan Node.js dan FastAPI, serta manajemen basis data dengan PostgreSQL dan Supabase.", en: "Building backend systems and RESTful APIs using Node.js and FastAPI, along with database management using PostgreSQL and Supabase." },
      color: "rgba(59,130,246,0.2)",
      accentColor: "#3b82f6",
      glowColor: "rgba(59,130,246,0.3)",
      borderHover: "rgba(59,130,246,0.4)",
      level: 3,
      tags: ["FastAPI", "Node.js", "Supabase", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80"
    },
    {
      icon: "🚀",
      title: { id: "Modern Frontend", en: "Modern Frontend" },
      desc: { id: "Mengembangkan antarmuka web dinamis berskala menengah menggunakan framework modern seperti React dan Vite, dipadukan dengan Tailwind CSS.", en: "Developing medium-scale dynamic web interfaces using modern frameworks like React and Vite, combined with Tailwind CSS." },
      color: "rgba(168,85,247,0.2)",
      accentColor: "#a855f7",
      glowColor: "rgba(168,85,247,0.3)",
      borderHover: "rgba(168,85,247,0.4)",
      level: 3,
      tags: ["React", "Vite", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80"
    },
    {
      icon: "🐳",
      title: { id: "Eksplorasi DevOps", en: "DevOps Exploration" },
      desc: { id: "Mempelajari dan mempraktikkan kontainerisasi menggunakan Docker untuk menciptakan lingkungan pengembangan yang konsisten dan terisolasi.", en: "Learning and practicing containerization using Docker to create consistent and isolated development environments." },
      color: "rgba(14,165,233,0.2)",
      accentColor: "#0ea5e9",
      glowColor: "rgba(14,165,233,0.3)",
      borderHover: "rgba(14,165,233,0.4)",
      level: 3,
      tags: ["Docker", "Container", "Learning"],
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&q=80"
    },
    {
      icon: "⚡",
      title: "Integrasi AI",
      desc: "Memanfaatkan AI (ChatGPT, Claude, Copilot) untuk meningkatkan produktivitas—mulai dari manajemen tugas, riset, problem-solving, hingga penyelesaian proyek secara efisien dan profesional.",
      color: "rgba(168,85,247,0.2)",
      accentColor: "#a855f7",
      glowColor: "rgba(168,85,247,0.3)",
      borderHover: "rgba(168,85,247,0.4)",
      level: 3,
      tags: ["AI Tools", "Debugging", "Efisiensi"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80"
    }
  ],

  stats: [
    { label: "Semester Aktif", value: "4" },
    { label: "Proyek Personal", value: "5+" },
    { label: "Sertifikat", value: "5" },
    { label: "Organisasi", value: "3" }
  ],

  tools: [
    { name: "html5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", color: "#e34f26" },
    { name: "css3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", color: "#1572b6" },
    { name: "javascript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", color: "#f7df1e" },
    { name: "python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776ab" },
    { name: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61dafb" },
    { name: "vite", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg", color: "#646CFF" },
    { name: "nodejs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "#f24e1e" },
    { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#f05032" },
    { name: "github", icon: "https://cdn.simpleicons.org/github/white", color: "#ffffff" },
    { name: "vercel", icon: "https://cdn.simpleicons.org/vercel/white", style: "width: 20px; height: 20px;", color: "#ffffff" },
    { name: "postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#ff6c37" },
    { name: "mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479a1" },
    { name: "postgresql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", color: "#3ecf8e" },
    { name: "canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg", style: "width: 28px; height: 28px;", color: "#00c4cc" },
    { name: "photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", color: "#31a8ff" },
    { name: "ms excel", icon: "https://api.iconify.design/vscode-icons/file-type-excel.svg", style: "width: 24px; height: 24px;", color: "#107c41" },
    { name: "ms word", icon: "https://api.iconify.design/vscode-icons/file-type-word.svg", style: "width: 24px; height: 24px;", color: "#2b579a" },
    { name: "docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "#2496ed" },
    { name: "stitch", icon: "assets/stitch.svg", style: "width: 28px; height: 28px;", color: "#FFA1E0" },
    { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons:openai.svg?color=white", color: "#10a37f" },
    { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg?color=white", color: "#ffffff" },
    { name: "Claude AI", icon: "assets/claude.svg", color: "#d97757" },
    { name: "Google Gemini", icon: "assets/gemini.svg", color: "#1a73e8" },
    { name: "Antigravity IDE", icon: "assets/antigravity.svg", color: "#ff00ff" },
    { name: "Kiro", icon: "assets/kiro.svg", color: "#ffff00" }
  ],

  skills: [
    {
      category: "Programming",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      items: [
        { name: "HTML", level: "Dasar", pct: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", level: "Dasar", pct: 55, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: "Dasar", pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Python", level: "Dasar", pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "React", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vite", level: "Mempelajari", pct: 25, icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
        { name: "Node.js", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
      ]
    },
    {
      category: "Tools & Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      items: [
        { name: "Figma UI/UX", level: "Dasar", pct: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Canva", level: "Dasar-Menengah", pct: 65, icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
        { name: "Adobe Photoshop", level: "Dasar", pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Git / GitHub", level: "Dasar", pct: 45, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Docker", level: "Mempelajari", pct: 25, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
      ]
    },
    {
      category: "AI Assistants",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      items: [
        { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons:openai.svg?color=white" },
        { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg?color=white" },
        { name: "Claude AI", icon: "assets/claude.svg" },
        { name: "Google Gemini", icon: "assets/gemini.svg" },
        { name: "Antigravity IDE", icon: "assets/antigravity.svg" },
        { name: "Kiro", icon: "assets/kiro.svg" },
        { name: "Stitch", icon: "assets/stitch.svg" }
      ]
    },
    {
      category: "Database & API",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      items: [
        { name: "MySQL", level: "Dasar", pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", level: "Dasar", pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", level: "Dasar", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "Postman", level: "Dasar", pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
    },
    {
      category: "Produktivitas & Office",
      image: "https://images.unsplash.com/photo-1554415707-6e8cfc938c23?w=600&q=80",
      items: [
        { name: "Ms. Excel / Sheets", level: "Dasar-Menengah", pct: 60, icon: "https://api.iconify.design/vscode-icons/file-type-excel.svg" },
        { name: "Ms. Word / Docs", level: "Menengah", pct: 75, icon: "https://api.iconify.design/vscode-icons/file-type-word.svg" }
      ]
    }
  ],

  education: [
    {
      institution: { id: "Universitas Nahdlatul Ulama Yogyakarta", en: "Nahdlatul Ulama University of Yogyakarta" },
      degree: { id: "S1 Teknik Informatika", en: "Bachelor's Degree in Informatics" },
      period: "2024 – Sekarang",
      desc: { id: "Berfokus pada pengembangan perangkat lunak, struktur data, dan sistem informasi. Aktif bereksplorasi dengan teknologi web masa kini melalui proyek latihan mandiri.", en: "Focusing on software development, data structures, and information systems. Actively exploring modern web technologies through self-taught practice projects." },
      current: true,
      image: "assets/UNU JOGJA.png",
      bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/nGRUfRuPUjgTZYW89"
    },
    {
      institution: { id: "SMK Al-Munawwir Yogyakarta", en: "Al-Munawwir Vocational High School Yogyakarta" },
      degree: { id: "Teknik Kendaraan Ringan Otomotif (TKRO)", en: "Light Vehicle Automotive Engineering" },
      period: "2021 – 2024",
      desc: { id: "Menyelesaikan pendidikan vokasi teknis dan praktik lapangan, ditunjang dengan pembentukan karakter kedisiplinan dan integritas di lingkungan pesantren terpadu.", en: "Completed technical vocational education and field practice, supported by character building in discipline and integrity within an integrated boarding school environment." },
      current: false,
      image: "assets/SMK Almunawwir.png",
      bgImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/Yaf47HziSARyHBvZ6"
    },
    {
      institution: { id: "MTS Riyadlus Sholihin, Probolinggo", en: "MTS Riyadlus Sholihin, Probolinggo" },
      degree: { id: "Madrasah Tsanawiyah", en: "Junior High School" },
      period: "2016 – 2019",
      desc: { id: "Membangun fondasi karakter, wawasan kebangsaan, dan tata krama yang kuat melalui pendidikan menengah berbasis nilai-nilai luhur pesantren.", en: "Building a strong foundation of character, national insight, and good manners through secondary education based on noble Islamic boarding school values." },
      current: false,
      image: "assets/MTS Riyadlus Sholihin.png",
      bgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/iSbbo94fYh9jnSop8"
    }
  ],

  experience: [
    {
      role: { id: "Affiliate Marketer & Sales", en: "Affiliate Marketer & Sales" },
      company: { id: "Binco Ran Nusantara", en: "Binco Ran Nusantara" },
      period: { id: "Juli - Agustus 2024", en: "July - August 2024" },
      type: "Freelance",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/XStrV8xPTqCzMZFT7",
      tasks: [
        { id: "Memasarkan produk secara langsung ke konsumen melalui pameran UMKM dan pasar lokal.", en: "Marketed products directly to consumers through MSME exhibitions and local markets." },
        { id: "Membangun relasi dan mengedukasi calon konsumen mengenai keunggulan produk ramah lingkungan.", en: "Built relationships and educated prospective consumers on the benefits of eco-friendly products." },
        { id: "Mengelola promosi digital melalui media sosial (Instagram, TikTok, WhatsApp) untuk memperluas jangkauan.", en: "Managed digital promotions via social media (Instagram, TikTok, WhatsApp) to expand reach." }
      ]
    },
    {
      role: { id: "Mekanik Lapangan (Magang)", en: "Field Mechanic (Intern)" },
      company: { id: "JASATEC Yogyakarta", en: "JASATEC Yogyakarta" },
      period: { id: "April - Juni 2024", en: "April - June 2024" },
      type: "Praktik Kerja Lapangan (PKL)",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/TATmJDyaN5MEzLCB6",
      tasks: [
        "Melakukan perbaikan dan perawatan berat mesin secara langsung (hands-on) di bawah supervisi teknisi.",
        "Mendiagnosis dan melakukan troubleshooting pada masalah suspensi dan sistem kendaraan lainnya.",
        "Pengalaman ini sangat melatih pola pikir yang sistematis dalam mencari sumber masalah, yang kini berguna dalam debugging kode."
      ]
    },
    {
      role: { id: "Teknisi Pemeliharaan (Magang)", en: "Maintenance Technician (Intern)" },
      company: { id: "Band Motor Yogyakarta", en: "Band Motor Yogyakarta" },
      type: "Praktik Kerja Lapangan (PKL)",
      period: { id: "Desember 2023 - Maret 2024", en: "December 2023 - March 2024" },
      image: "https://png.pngtree.com/background/20230912/original/pngtree-mechanics-in-auto-repair-shop-apprentice-honest-uniform-photo-picture-image_5052771.jpg",
      mapUrl: "https://maps.app.goo.gl/eyYpXecH4JVaXpVh8",
      tasks: [
        { id: "Mempraktikkan perawatan berkala kendaraan bermotor, termasuk proses tune-up dan penggantian pelumas.", en: "Performed periodic maintenance on motor vehicles, including tune-up processes and oil changes." },
        { id: "Menangani kelistrikan dasar seperti inspeksi dan substitusi AKI kendaraan.", en: "Handled basic electrical issues such as vehicle battery inspection and substitution." },
        { id: "Berkontribusi pada operasional harian bengkel sambil melatih ketanggapan dan keandalan teknis.", en: "Contributed to daily workshop operations while training responsiveness and technical reliability." }
      ]
    }
  ],

  training: [
    {
      title: "Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative Academy",
      organizer: "Stechoq Academy x Innovative Academy",
      period: "2026",
      desc: "Bootcamp intensif berstandar industri. Bekerja secara tim (kolaboratif) dalam membangun proyek final Warehouse Management System, dengan fokus pada simulasi lingkungan kerja profesional, version control (Git), dan praktik full-stack web development.",
      image: "assets/Foto-Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.png",
      url: "assets/Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.pdf"
    },
    {
      title: "Coding Camp – Intro to Software Engineering",
      organizer: "RevoU",
      period: "2026",
      desc: "Pelatihan rekayasa perangkat lunak (Software Engineering) program 1 minggu bersertifikat dari RevoU. Mencakup metodologi pengembangan, penerapan logika dasar pemrograman, hingga pengenalan praktik pembuatan aplikasi web.",
      image: "assets/Foto-Sertifikat/Sertifikat Dicoding.png",
      url: "assets/Sertifikat/CCSE.pdf"
    },
    {
      title: "Samsung Innovation Campus Batch 7",
      organizer: "Samsung / Dibimbing.id",
      period: "2025/2026",
      desc: "Pelatihan intensif dengan kurikulum berstandar industri. Fokus pada penguatan logika pemrograman Python, struktur data lanjutan, dan implementasi Object-Oriented Programming (OOP) melalui evaluasi proyek komprehensif.",
      image: "assets/Foto-Sertifikat/Sertifikat Samsung Innovation Campus.png",
      url: "assets/Sertifikat/Sertifikat Samsung Innovation Campus.pdf"
    },
    {
      title: "Integrating AI in Penetration Testing - Best Practices",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan spesialisasi keamanan siber yang membahas praktik terbaik (best practices) integrasi Kecerdasan Buatan (AI) dalam simulasi penetrasi sistem (Penetration Testing) dan evaluasi kerentanan IT.",
      image: "assets/Foto-Sertifikat/Sertifikat Codelamp .png",
      url: "assets/Sertifikat/Sertifikat CodeLamp Integration AI in penetration Testing.pdf"
    },
    {
      title: "Praktek Kerja Lapangan – Band Motor",
      organizer: "Band Motor Yogyakarta",
      period: "2024",
      desc: "Pelatihan teknis lapangan (Hands-on) di bidang mekanik otomotif. Melibatkan penanganan perawatan mesin berkala, proses overhaul (turun mesin), hingga diagnosis dan perbaikan (troubleshooting) sistem kelistrikan kendaraan.",
      image: "assets/Foto-Sertifikat/Sertifikat Kerja Lapangan.png",
      url: "assets/Sertifikat/Sertifikat Praktik Kerja Lapangan.pdf"
    },
    {
      title: "AI Praktis untuk Produktivitas",
      organizer: "Dicoding",
      period: "2026",
      desc: "Program pelatihan terapan mengenai pemanfaatan ragam instrumen Artificial Intelligence (AI) untuk mengotomatisasi tugas repetitif, memecahkan masalah komputasional, dan mengoptimalkan efisiensi alur kerja profesional.",
      image: "assets/Foto-Sertifikat/Sertifikat AI Praktis untuk Produktivitas.png",
      url: "assets/Sertifikat/AI Praktis untuk Produktivitas.pdf"
    },
    {
      title: "AI Productivity and AI API Integration for Developers",
      organizer: "Hacktiv8",
      period: "2026",
      desc: "Pelatihan tingkat lanjut bagi software developer mengenai arsitektur dan integrasi Application Programming Interface (API) berbasis Machine Learning/AI ke dalam sistem perangkat lunak modern.",
      image: "assets/Foto-Sertifikat/Sertifikat AI Productivity and AI API Integration for Developers.png",
      url: "assets/Sertifikat/AI Productivity and AI API Integration for Developers.pdf"
    },
    {
      title: "AI-Powered Software Engineering: Practical AI Skills for Beginner",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan penerapan AI dalam proses rekayasa perangkat lunak. Mencakup penggunaan AI tools untuk mendukung siklus pengembangan software — mulai dari perencanaan, penulisan kode, debugging, hingga dokumentasi yang lebih efisien.",
      image: "assets/Foto-Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.png",
      url: "assets/Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.pdf"
    },
    {
      title: "One API, Many AI Models: OpenRouter for Beginner Developers",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan penggunaan OpenRouter API untuk mengakses dan mengintegrasikan berbagai model AI (LLM) ke dalam aplikasi dengan satu antarmuka. Topik mencakup manajemen API key, pemilihan model, dan implementasi dasar di proyek nyata.",
      image: "assets/Foto-Sertifikat/Sertifikat OpenRouter for Beginner Developers.png",
      url: "assets/Sertifikat/Sertifikat OpenRouter for Beginner Developers.pdf"
    },
    {
      title: "Pengenalan Web & Persiapan Lingkungan Kerja",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan dasar untuk calon web developer. Memperkenalkan cara kerja internet dan web, instalasi tools pengembangan (VS Code, browser DevTools, Node.js), serta konfigurasi lingkungan kerja yang profesional sebelum mulai coding.",
      image: "assets/Foto-Sertifikat/Sertifikat Pengenalan Web & Persiapan Lingkungan Kerja.png",
      url: "assets/Sertifikat/Pengenalan Web & Persiapan Lingkungan Kerja.pdf"
    },
    {
      title: "Introduction to JavaScript and Development Environment Setup",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan pengenalan JavaScript sebagai bahasa pemrograman web. Mencakup sintaks dasar, tipe data, fungsi, event handling, serta konfigurasi environment pengembangan untuk memulai proyek JavaScript secara mandiri.",
      image: "assets/Foto-Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.png",
      url: "assets/Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.pdf"
    },
    {
      title: "Introduction to Version Control & Git Installation",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: "Pelatihan dasar sistem version control menggunakan Git. Meliputi konsep repository, commit, branching, merge, serta konfigurasi awal Git dan koneksi ke GitHub sebagai platform kolaborasi kode.",
      image: "assets/Foto-Sertifikat/Sertifikat Introduction to Version Control & Git Installation.png",
      url: "assets/Sertifikat/Sertifikat Introduction to Version Control & Git Installation.pdf"
    }
  ],

  organization: [
    {
      role: "Ketua UKM Badminton",
      org: "UNU Yogyakarta",
      period: "2025 – 2026",
      desc: { id: "Mengatur jadwal, sarana, perlengkapan olahraga, dan mengkoordinasi semua anggota UKM.", en: "Managed schedules, facilities, sports equipment, and coordinated all UKM members." },
      icon: "assets/Foto_Logo/Logo Ukm Badminton UNUYO.svg",
      image: "https://awsimages.detik.net.id/community/media/visual/2022/10/18/ilustrasi-badminton-4.jpeg?w=1200"
    },
    {
      role: { id: "Dep. Organisasi", en: "Organization Department" },
      org: "PAC IPNU Mantrijeron",
      period: { id: "2026 - Sekarang", en: "2026 - Present" },
      desc: { id: "Bertanggung jawab atas administrasi, keanggotaan, dan pengembangan struktur organisasi PAC IPNU Mantrijeron.", en: "Responsible for administration, membership, and developing the organizational structure of PAC IPNU Mantrijeron." },
      icon: "assets/Foto_Logo/Logo IPNU Mantrijeron.svg",
      image: "https://pbs.twimg.com/profile_images/1437565816036229121/NrGG35Q-_400x400.jpg"
    },
    {
      role: { id: "Media JQH Kaligrafi", en: "JQH Calligraphy Media" },
      org: "UNU Yogyakarta",
      period: { id: "2025 - Sekarang", en: "2025 - Present" },
      desc: { id: "Mengelola media sosial JQH Kaligrafi Universitas Nahdlatul Ulama Yogyakarta, mempublikasikan karya kaligrafi dan informasi seputar kegiatan JQH Kaligrafi.", en: "Managed social media for JQH Calligraphy at Nahdlatul Ulama University of Yogyakarta, publishing calligraphy artworks and information regarding JQH activities." },
      icon: "assets/Foto_Logo/Logo JQH Kaligrafi UNUYO.svg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg0P5XRZsapBUYv9eowWhhSTZPT7gMQ0mvA&s"
    },
    {
      role: { id: "Ketua Irmas Darussalam", en: "Head of Irmas Darussalam" },
      org: "Irmas Darussalam",
      period: "2024 – 2025",
      desc: { id: "Memimpin organisasi remaja masjid, menghimpun pemuda dan membuat perencanaan program keberlanjutan.", en: "Led the mosque youth organization, gathered youth, and planned sustainable programs." },
      icon: "https://img.icons8.com/fluency/96/mosque.png",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQg0P5XRZsapBUYv9eowWhhSTZPT7gMQ0mvA&s"
    },
    {
      role: "Dep. Dakwah",
      org: "PAC IPNU Mantrijeron",
      period: "2023 – 2024",
      desc: "Mengkoordinasikan kegiatan dakwah internal maupun eksternal serta syiar keislaman.",
      icon: "assets/Foto_Logo/Logo IPNU Mantrijeron.svg",
      image: "https://pbs.twimg.com/profile_images/1437565816036229121/NrGG35Q-_400x400.jpg"
    }
  ],

  certificates: [
    // ── BOOTCAMP & PELATIHAN UTAMA ──
    { name: "Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative Academy", issuer: "Stechoq Academy x Innovative Academy", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.png", pdfUrl: "assets/Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.pdf" },
    { name: "Samsung Innovation Campus Batch 7", issuer: "Samsung / Dibimbing.id", year: "2025/2026", image: "assets/Foto-Sertifikat/Sertifikat Samsung Innovation Campus.png", pdfUrl: "assets/Sertifikat/Sertifikat Samsung Innovation Campus.pdf" },
    { name: "Coding Camp – Intro to Software Engineering", issuer: "RevoU", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Dicoding.png", pdfUrl: "assets/Sertifikat/CCSE.pdf" },
    // ── KURSUS AI & DEVELOPER ──
    { name: "AI Productivity and AI API Integration for Developers", issuer: "Hacktiv8", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat AI Productivity and AI API Integration for Developers.png", pdfUrl: "assets/Sertifikat/AI Productivity and AI API Integration for Developers.pdf" },
    { name: "AI Praktis untuk Produktivitas", issuer: "Dicoding", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat AI Praktis untuk Produktivitas.png", pdfUrl: "assets/Sertifikat/AI Praktis untuk Produktivitas.pdf" },
    { name: "AI-Powered Software Engineering Practical AI Skills for Beginner", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.png", pdfUrl: "assets/Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.pdf" },
    { name: "One API, Many AI Models: OpenRouter for Beginner Developers", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat OpenRouter for Beginner Developers.png", pdfUrl: "assets/Sertifikat/Sertifikat OpenRouter for Beginner Developers.pdf" },
    // ── KURSUS KEAMANAN SIBER ──
    { name: "Integrating AI in Penetration Testing - Best Practices", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Codelamp .png", pdfUrl: "assets/Sertifikat/Sertifikat CodeLamp Integration AI in penetration Testing.pdf" },
    { name: "Think Like a Pentester: Web Penetration Testing Fundamentals", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Think Like a Pentester Web Penetration Testing Fundamentals.png", pdfUrl: "assets/Sertifikat/Sertifikat Think Like a Pentester Web Penetration Testing Fundamentals.pdf" },
    { name: "Breaking the Pocket: Intro to Mobile App Penetration Testing", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Breaking the Pocket Intro to Mobile App Penetration Testing.png", pdfUrl: "assets/Sertifikat/Sertifikat Intro to Mobile App Penetration Testing.pdf" },
    { name: "IT Audit Fundamentals & Professional Standards", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat IT Audit Fundamentals & Professional Standards.png", pdfUrl: "assets/Sertifikat/Sertifikat IT Audit Fundamentals & Professional Standards.pdf" },
    { name: "Third-Party Risk Management for Vendors", issuer: "CodeLamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Third-Party Risk Management for Vendors.png", pdfUrl: "assets/Sertifikat/Sertifikat Third-Party Risk Management for Vendors.pdf" },
    // ── KURSUS WEB & PROGRAMMING DASAR ──
    { name: "Introduction to JavaScript and Development Environment Setup", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.png", pdfUrl: "assets/Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.pdf" },
    { name: "Introduction to Version Control & Git Installation", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Introduction to Version Control & Git Installation.png", pdfUrl: "assets/Sertifikat/Sertifikat Introduction to Version Control & Git Installation.pdf" },
    { name: "Pengenalan Web & Persiapan Lingkungan Kerja", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Pengenalan Web & Persiapan Lingkungan Kerja.png", pdfUrl: "assets/Sertifikat/Pengenalan Web & Persiapan Lingkungan Kerja.pdf" },
    { name: "Stop Designing Without Structure", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Stop Designing Without Structure.png", pdfUrl: "assets/Sertifikat/Sertifikat Stop Designing Without Structure.pdf" },
    { name: "Kenapa Game Roblox Kamu Gampang Di-Hack?", issuer: "Codelamp Indonesia", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Kenapa Game Roblox Kamu Gampang DiHack.png", pdfUrl: "assets/Sertifikat/Sertifikat Kenapa Game Roblox Kamu Gampang DiHack.pdf" },
    { name: "Web 3 On Campus", issuer: "Kampus / UPbit Indonesia / IDNFT", year: "2025", image: "assets/Foto-Sertifikat/Sertifikat Web3.png", pdfUrl: "assets/Sertifikat/Sertifikat Web3.pdf " },
    // ── PENGHARGAAN & LAINNYA ──
    { name: "Ketua UKM Badminton Universitas Nahdlatul Ulama Yogyakarta", issuer: "UNU Yogyakarta", year: "2025/2026", image: "assets/Foto-Sertifikat/Sertifikat Ketua UKM Badminton UNUYO.png", pdfUrl: "assets/Sertifikat/Sertifikat UKM Ketua Badminton UNUYO.pdf" },
    { name: "International Conference: Indonesia-Russia Cooperation", issuer: "UNU Yogyakarta & Rusia", year: "2024", image: "assets/Foto-Sertifikat/Sertifikat International Conference.png", pdfUrl: "assets/Sertifikat/Sertifikat International Conference.pdf" },
    { name: "Praktek Kerja Lapangan – Band Motor", issuer: "Band Motor Yogyakarta / SMK Al-Munawwir Krapyak", year: "2024", image: "assets/Foto-Sertifikat/Sertifikat Kerja Lapangan.png", pdfUrl: "assets/Sertifikat/Sertifikat Praktik Kerja Lapangan.pdf" },
    { name: "Lomba Kaligrafi Al-Mizan Fest 1444 H", issuer: "Panitia Al-Mizan", year: "2023", image: "assets/Foto-Sertifikat/Sertifikat Lomba Kaligrafi.png", pdfUrl: "assets/Sertifikat/Sertifikat Lomba Kaligrafi.pdf" }
  ],

  languages: [
    { lang: "Indonesia", level: "Native" },
    { lang: "Arab", level: "Dasar" },
    { lang: "Inggris", level: "Dasar" }
  ]
};

/**
 * DATA PROYEK
 * ===========
 * Tambah objek baru di sini untuk menambahkan project.
 * Kategori: "web" | "ui" | "mini"
 */
const PROJECTS = [
  {
    id: 6,
    title: "CMS Sibuku",
    category: "web",
    tags: ["React", "FastAPI", "Supabase"],
    desc: { id: "Platform e-commerce spesialis literatur dengan fitur Content Management System (CMS) lengkap. Merupakan hasil tugas akademik perkuliahan yang dikerjakan secara kolaboratif (tim), menggunakan arsitektur React dan Supabase untuk mengelola transaksi jual-beli, inventaris buku, dan data pelanggan secara terpusat.", en: "E-commerce platform specializing in literature with a complete Content Management System (CMS). A collaborative academic project built with React and Supabase to centrally manage transactions, book inventory, and customer data." },
    features: [{ id: "Sistem Manajemen Konten (CMS)", en: "Content Management System (CMS)" }, { id: "Katalog Buku Dinamis", en: "Dynamic Book Catalog" }, { id: "Autentikasi Multi-Role (Admin/User)", en: "Multi-Role Authentication (Admin/User)" }, { id: "Keranjang Belanja (Cart System)", en: "Shopping Cart System" }, { id: "Integrasi RESTful API Backend", en: "RESTful API Backend Integration" }],
    demo: "https://si-buku-sigma.vercel.app/",
    github: "https://github.com/yazid-solo/SiBuku",
    image: "assets/Foto_Project/CMS_Sibuku.png",
    status: "Selesai",
    year: "2026"
  },
  {
    id: 5,
    title: "JogjaCourt",
    category: "web",
    tags: ["React", "Tailwind CSS", "FastAPI", "Supabase"],
    desc: { id: "Platform reservasi lapangan olahraga khusus area Yogyakarta. Memungkinkan admin mengelola jadwal dan pengguna melakukan booking secara mandiri. Dibangun menggunakan arsitektur modern React (Frontend) yang terintegrasi dengan FastAPI dan Supabase (Backend).", en: "Sports field reservation platform specifically for the Yogyakarta area. Allows admins to manage schedules and users to book independently. Built using modern React architecture integrated with FastAPI and Supabase." },
    features: [{ id: "Sistem Booking Real-time", en: "Real-time Booking System" }, { id: "Dashboard Admin & User", en: "Admin & User Dashboard" }, { id: "Sistem Autentikasi & Otorisasi", en: "Authentication & Authorization System" }, { id: "Manajemen Lapangan & Pembayaran", en: "Field & Payment Management" }, { id: "Desain UI/UX Modern & Responsif", en: "Modern & Responsive UI/UX Design" }],
    demo: "https://jogja-court.vercel.app/",
    github: "https://github.com/yazid-solo/Sistem-Boking-Lapangan-Badminton",
    image: "assets/Foto_Project/Sistem_boking_Lap.Badminton.png",
    status: "Selesai & dalam pengembangan",
    year: "2026"
  },
  {
    id: 3,
    title: "Warehouse-System",
    category: "web",
    tags: ["Vite", "Bootstrap", "Node.js", "PostgreSQL"],
    desc: { id: "Sistem Informasi Manajemen Gudang (WMS) kolaboratif. Dibangun bersama tim bootcamp Stechoq Academy x Innovative Academy menggunakan Vite dan Node.js Express, dengan basis data PostgreSQL untuk memfasilitasi pelacakan barang dan manajemen inventaris secara real-time.", en: "Collaborative Warehouse Management Information System (WMS). Built with the Stechoq Academy x Innovative Academy bootcamp team using Vite and Node.js Express, with a PostgreSQL database to facilitate real-time item tracking and inventory management." },
    features: [{ id: "Autentikasi User (JWT)", en: "User Authentication (JWT)" }, { id: "Manajemen Inventaris Gudang", en: "Warehouse Inventory Management" }, { id: "CRUD Data Master Barang", en: "CRUD Master Data Goods" }, { id: "Integrasi RESTful API", en: "RESTful API Integration" }, { id: "Desain Responsif Clean UI", en: "Responsive Clean UI Design" }],
    demo: "",
    github: "https://gitlab.com/bootcamp-stechoq/warehouse-system-cihuy",
    image: "assets/Foto_Project/Warehouse-system.png",
    status: "Selesai & dalam pengembangan",
    year: "2026"
  },
  {
    id: 11,
    title: "UI/UX Design: Vareway",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: "Desain antarmuka platform EduTech interaktif hasil kerja sama tim yang menyediakan alur belajar terstruktur (Learning Path). Tampilan ini dirancang secara kolaboratif untuk membimbing pengguna memilih kurikulum sesuai kebutuhan industri—seperti Front-End, Cyber Security, hingga Machine Learning—dengan gaya visual yang modern dan memotivasi pelajar.",
    features: ["Interactive Prototype", "Design System", "Auto Layout", "EduTech Platform", "Responsive Web"],
    demo: "",
    embed: "https://embed.figma.com/design/ixlEcoPHDG9k8gMxtuR4PZ/VAREWAY?node-id=3-2&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Vareway.jpeg",
    status: "Selesai & Butuh Pengembangan",
    year: "2026"
  },
  {
    id: 10,
    title: "UI/UX Design: Warehouse-System",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: "Rancangan dasbor web (B2B) hasil kolaborasi tim untuk manajemen sistem pergudangan yang komprehensif. Desain bersama ini mencakup modul pemantauan stok (Storage Bin), pendataan aset, hingga pengelolaan pemasok (Supplier). Antarmuka difokuskan pada penyajian ringkasan data yang padat namun tetap bersih dan mudah dibaca oleh operator.",
    features: ["Interactive Prototype", "Design System", "Auto Layout", "Dashboard UI", "B2B WebApp"],
    demo: "",
    embed: "https://embed.figma.com/design/nK44ZokkywTLLl932sC77Y/stechoq?node-id=109-219&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Warehouse-System.png",
    status: "Selesai & Butuh Pengembangan",
    year: "2026"
  },
  {
    id: 9,
    title: "UI/UX Design: Warmindo Delivery",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: "Desain antarmuka aplikasi mobile (Food Delivery) hasil kolaborasi tim yang dirancang khusus untuk memudahkan pemesanan menu Warmindo secara online. Fokus desain kami ada pada tata letak yang bersih, navigasi kategori makanan yang cepat, serta pengalaman pengguna yang intuitif agar proses pemesanan menjadi lebih praktis.",
    features: ["Interactive Prototype", "Design System", "Auto Layout", "Mobile App Design", "User Flow"],
    demo: "",
    embed: "https://embed.figma.com/design/8goiC7Nu277CYpj2Ns4no8/warmindo?node-id=0-1&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Warmindo Delivery.png",
    status: "Selesai & Butuh Pengembangan",
    year: "2026"
  },
  {
    id: 1,
    title: { id: "Portofolio Website", en: "Portfolio Website" },
    category: "web",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: { id: "Website portofolio personal interaktif bergaya modern minimalis (Glassmorphism & 3D tilt). Dibangun dari nol menggunakan Vanilla HTML, CSS, dan JavaScript murni tanpa framework, menampilkan performa animasi yang mulus dan sangat responsif.", en: "Interactive personal portfolio website with a modern minimalist style (Glassmorphism & 3D tilt). Built from scratch using Vanilla HTML, CSS, and pure JavaScript without frameworks, featuring smooth animation performance and highly responsive design." },
    features: [{ id: "Animasi 3D & Tilt Hover Native", en: "Native 3D Animation & Tilt Hover" }, { id: "Sistem Navigasi Dinamis via DOM", en: "Dynamic Navigation System via DOM" }, { id: "Render Konten Otomatis via JSON", en: "Automated Content Rendering via JSON" }, { id: "Performa Ringan (Tanpa Framework)", en: "Lightweight Performance (No Framework)" }, { id: "Desain Responsif Mobile-First", en: "Mobile-First Responsive Design" }],
    demo: "https://portfolio-yazid-ardani.vercel.app/",
    github: "https://github.com/yazid-solo/My-Portfolio-",
    image: "assets/Foto_Project/Portfolio.png",
    status: "Selesai & dalam pengembangan",
    year: "2025"
  },
  {
    id: 8,
    title: "CASHNOTE",
    category: "web",
    tags: ["React", "Vite", "FastAPI", "Supabase", "Tailwind CSS"],
    desc: "Sistem Pencatatan Keuangan Pribadi (Cash Note). Merupakan hasil tugas akademik perkuliahan yang dikerjakan secara tim (kolaboratif), dibangun menggunakan arsitektur modern untuk membantu pengguna memantau arus kas, pengeluaran, dan pemasukan secara komprehensif.",
    features: ["Aplikasi Web Responsif", "Autentikasi Pengguna Aman", "CRUD Transaksi Keuangan", { id: "Integrasi RESTful API Backend", en: "RESTful API Backend Integration" }, "Dashboard Analitik Visual"],
    demo: "",
    github: "https://github.com/shonyaballqis/cash-note-pbo.git",
    image: "assets/Foto_Project/CASHNOTE.jpeg",
    status: "Selesai",
    year: "2026"
  },
  {
    id: 4,
    title: "Warmindo App",
    category: "mini",
    tags: ["JavaScript", "HTML", "CSS", "FastAPI", "Supabase", "REST API"],
    desc: { id: "Aplikasi web pemesanan makanan dan sistem manajemen kasir ringan (POS). Mengintegrasikan FastAPI dan Supabase di sisi backend untuk pemrosesan pesanan yang cepat, serta Vanilla JS di sisi frontend untuk manajemen menu yang efisien.", en: "Food ordering web app and lightweight point-of-sale (POS) system. Integrates FastAPI and Supabase on the backend for fast order processing, and Vanilla JS on the frontend for efficient menu management." },
    features: [{ id: "Sistem Kasir (POS) Interaktif", en: "Interactive POS System" }, { id: "Manajemen Menu Makanan (CRUD)", en: "Food Menu Management (CRUD)" }, { id: "Integrasi Backend FastAPI", en: "FastAPI Backend Integration" }, { id: "Database Real-time Supabase", en: "Real-time Database with Supabase" }, { id: "Antarmuka Ramah Pengguna", en: "User-Friendly Interface" }],
    demo: "",
    github: "https://github.com/yazid-solo/Warmindo-App",
    image: "assets/Foto_Project/Warmindo_app.png",
    status: "Dalam Proses",
    year: "2026"
  },
  {
    id: 2,
    title: "UI Design: Warmindo UMKM",
    category: "ui",
    tags: ["Figma", "UI Design", "UMKM"],
    desc: { id: "Desain UI/UX landing page komersial untuk bisnis kuliner lokal (Warmindo). Mencakup 9 section responsif yang dirancang khusus untuk meningkatkan konversi dan daya tarik visual pelanggan.", en: "Commercial UI/UX landing page design for a local culinary business (Warmindo). Includes 9 responsive sections specifically designed to increase conversion and visual appeal to customers." },
    features: [{ id: "9 section lengkap", en: "9 complete sections" }, { id: "Mobile-first design", en: "Mobile-first design" }, { id: "Komponen reusable di Figma", en: "Reusable components in Figma" }, { id: "Palet warna kuliner yang hangat", en: "Warm culinary color palette" }],
    demo: "",
    embed: "",
    github: "",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
    status: "Dalam Pengerjaan",
    year: "2025"
  },
  {
    id: 7,
    title: { id: "Kalkulator Akademik IPK", en: "GPA Academic Calculator" },
    category: "mini",
    tags: ["HTML", "CSS", "JavaScript"],
    desc: "Tugas mata kuliah Dasar Pemrograman. Aplikasi berbasis web interaktif untuk menghitung Indeks Prestasi Kumulatif (IPK) mahasiswa secara presisi berdasarkan input nilai huruf dan bobot SKS.",
    features: ["Perhitungan IPK Instan", "Validasi Bobot SKS Dinamis", "Konversi Nilai Huruf ke Angka", "Antarmuka Minimalis yang Mudah Digunakan"],
    demo: "",
    github: "",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    status: "Selesai",
    year: "2024"
  }
];

// Export untuk digunakan di semua halaman
if (typeof module !== "undefined") {
  module.exports = { PROFILE, PROJECTS };
}







