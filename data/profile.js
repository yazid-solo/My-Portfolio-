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
    id: "Mahasiswa Informatika • Junior Web Developer • AI-Assisted Programmer",
    en: "Informatics Student • Junior Web Developer • AI-Assisted Programmer"
  },
  taglineSub: {
    id: "Mahasiswa Semester 5 Teknik Informatika yang aktif membangun proyek nyata di bidang Web Development dan UI/UX — bukan sekadar belajar dari tutorial.",
    en: "5th Semester Informatics student actively building real projects in Web Development and UI/UX — not just learning from tutorials."
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
    id: `Mahasiswa Informatika Semester 5 dengan spesialisasi di Web Development dan UI/UX. Berpengalaman membangun aplikasi web secara mandiri. Menguasai alur kerja modern dengan mengintegrasikan AI sebagai rekan pemrograman (Pair-Programming) untuk mempercepat siklus development, analisis bug, dan penulisan kode yang terstruktur.`,
    en: `5th-semester Informatics student specializing in Web Development and UI/UX. Experienced in building web applications independently. Mastering modern workflows by integrating AI as a pair-programming partner to accelerate development cycles, bug analysis, and structured code writing.`
  },
  about: {
    id: `Saya memiliki perjalanan karir yang unik. Latar belakang saya di teknik otomotif melatih saya untuk berpikir secara sistematis dalam melakukan troubleshooting—kemampuan yang ternyata sangat krusial saat melakukan debugging dalam penulisan kode. Selain itu, pengalaman di bidang Affiliate Marketing mengajarkan saya tentang analisis data dan perilaku pengguna.\n\nSaat ini, saya mendalami Web Development dan UI/UX. Saya tidak hanya menulis kode, tapi fokus memecahkan masalah (problem-solving). Kombinasi antara logika sistematis mesin, pemahaman data dari marketing, dan eksekusi teknis dari programming membuat saya mampu melihat sebuah proyek web secara utuh—baik dari sisi kode maupun dari sisi bisnis dan pengguna.`,
    en: `I have a unique career journey. My background in automotive engineering trained me to think systematically when troubleshooting—a skill that has proven crucial for debugging code. Furthermore, my experience in Affiliate Marketing taught me about data analysis and user behavior.\n\nCurrently, I am deepening my expertise in Web Development and UI/UX. I don't just write code; I focus on problem-solving. The combination of systematic machine logic, data understanding from marketing, and technical execution from programming allows me to see a web project in its entirety—both from the codebase and the business/user perspective.`
  },

  highlights: [
    {
      icon: "🎯",
      title: { id: "Fokus Belajar", en: "Focus on Learning" },
      desc: { id: "Belajar konsisten tiap hari — dari dokumentasi resmi, video tutorial, hingga proyek latihan mandiri yang nyata.", en: "Learning consistently every day — from official docs and video tutorials to real independent practice projects." },
      color: "rgba(99,102,241,0.2)",
      accentColor: "#818cf8",
      glowColor: "rgba(99,102,241,0.3)",
      borderHover: "rgba(99,102,241,0.4)",
      level: 3,
      tags: [{id: "Self-learning", en: "Self-learning"}, {id: "Dokumentasi", en: "Documentation"}, {id: "Praktik", en: "Practice"}],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&q=80"
    },
    {
      icon: "💻",
      title: { id: "Full-Stack Web Dev", en: "Full-Stack Web Dev" },
      desc: { id: "Membangun aplikasi web end-to-end — dari antarmuka React di sisi frontend hingga REST API Node.js/FastAPI dan manajemen database PostgreSQL/Supabase di sisi backend.", en: "Building end-to-end web applications — from React interfaces on the frontend to Node.js/FastAPI REST APIs and PostgreSQL/Supabase database management on the backend." },
      color: "rgba(20,184,166,0.2)",
      accentColor: "#2dd4bf",
      glowColor: "rgba(20,184,166,0.3)",
      borderHover: "rgba(20,184,166,0.4)",
      level: 3,
      tags: [{id: "React", en: "React"}, {id: "Node.js", en: "Node.js"}, {id: "FastAPI", en: "FastAPI"}],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80"
    },
    {
      icon: "🎨",
      title: { id: "UI yang Rapi", en: "Neat UI Design" },
      desc: { id: "Merancang antarmuka yang bersih dan intuitif menggunakan Figma — dari wireframe hingga prototype interaktif.", en: "Designing clean and intuitive interfaces using Figma — from wireframes to interactive prototypes." },
      color: "rgba(244,63,94,0.2)",
      accentColor: "#fb7185",
      glowColor: "rgba(244,63,94,0.3)",
      borderHover: "rgba(244,63,94,0.4)",
      level: 3,
      tags: [{id: "Figma", en: "Figma"}, {id: "Prototyping", en: "Prototyping"}, {id: "UI Design", en: "UI Design"}, {id: "Graphic Design", en: "Graphic Design"}],
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
      tags: [{id: "Analitis", en: "Analytical"}, {id: "Logika", en: "Logical"}, {id: "Adaptif", en: "Adaptive"}],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&q=80"
    },
    {
      icon: "📄",
      title: { id: "Office & Produktivitas", en: "Office & Productivity" },
      desc: { id: "Mahir menggunakan Microsoft Office (Word, Excel, PowerPoint) & Google Workspace — diasah intensif lewat tugas akademik dan pelaporan data profesional.", en: "Proficient in using Microsoft Office (Word, Excel, PowerPoint) & Google Workspace — intensively honed through academic assignments and professional data reporting." },
      color: "rgba(16,185,129,0.2)",
      accentColor: "#34d399",
      glowColor: "rgba(16,185,129,0.3)",
      borderHover: "rgba(16,185,129,0.4)",
      level: 3,
      tags: [{id: "Ms. Word", en: "Ms. Word"}, {id: "Ms. Excel", en: "Ms. Excel"}, {id: "Google Docs", en: "Google Docs"}, {id: "Sheets", en: "Sheets"}],
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
      icon: "🤖",
      title: { id: "AI Assistants", en: "AI Assistants" },
      desc: { id: "Memposisikan AI sebagai rekan kolaborasi (pair-programming) untuk riset, men-debug kode, dan menulis dokumentasi lebih cepat.", en: "Positioning AI as a collaborative partner (pair-programming) for faster research, debugging, and documentation writing." },
      color: "rgba(217,70,239,0.2)",
      accentColor: "#e879f9",
      glowColor: "rgba(217,70,239,0.3)",
      borderHover: "rgba(217,70,239,0.4)",
      level: 3,
      tags: [{id: "ChatGPT", en: "ChatGPT"}, {id: "Claude", en: "Claude"}, {id: "Copilot", en: "Copilot"}],
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
    { name: "typescript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg", color: "#3178c6" },
    { name: "python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", color: "#3776ab" },
    { name: "react", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "#61dafb" },
    { name: "vite", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg", color: "#646CFF" },
    { name: "nodejs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", color: "#339933" },
    { name: "figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", color: "#f24e1e" },
    { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", color: "#f05032" },
    { name: "github", icon: "https://cdn.simpleicons.org/github/white", color: "#ffffff" },
    { name: "vercel", icon: "https://cdn.simpleicons.org/vercel/white", style: "width: 20px; height: 20px;", color: "#ffffff" },
    { name: "netlify", icon: "https://api.iconify.design/logos:netlify-icon.svg", style: "width: 22px; height: 22px;", color: "#00C7B7" },
    { name: "postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", color: "#ff6c37" },
    { name: "mysql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", color: "#4479a1" },
    { name: "postgresql", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg", color: "#336791" },
    { name: "supabase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg", color: "#3ecf8e" },
    { name: "canva", icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg", style: "width: 28px; height: 28px;", color: "#00c4cc" },
    { name: "photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", color: "#31a8ff" },
    { name: "ms excel", icon: "https://api.iconify.design/vscode-icons/file-type-excel.svg", style: "width: 24px; height: 24px;", color: "#107c41" },
    { name: "ms word", icon: "https://api.iconify.design/vscode-icons/file-type-word.svg", style: "width: 24px; height: 24px;", color: "#2b579a" },
    { name: "docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", color: "#2496ed" },
    { name: "stitch", icon: "assets/Foto_Logo/stitch.svg", style: "width: 28px; height: 28px;", color: "#FFA1E0" },
    { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons:openai.svg?color=white", color: "#10a37f" },
    { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg?color=white", color: "#ffffff" },
    { name: "Claude AI", icon: "assets/Foto_Logo/claude.svg", color: "#d97757" },
    { name: "Google Gemini", icon: "assets/Foto_Logo/gemini.svg", color: "#1a73e8" },
    { name: "Antigravity IDE", icon: "assets/Foto_Logo/antigravity.svg", color: "#ff00ff" },
    { name: "Kiro", icon: "assets/Foto_Logo/kiro.svg", color: "#ffff00" }
  ],

  skills: [
    {
      category: "Programming",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
      items: [
        { name: "HTML", level: { id: "Dasar", en: "Basic" }, pct: 60, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS", level: { id: "Dasar", en: "Basic" }, pct: 55, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: { id: "Dasar", en: "Basic" }, pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", level: { id: "Mempelajari", en: "Learning" }, pct: 25, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
        { name: "Python", level: { id: "Dasar", en: "Basic" }, pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "React", level: { id: "Mempelajari", en: "Learning" }, pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vite", level: { id: "Mempelajari", en: "Learning" }, pct: 25, icon: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vitejs-logo.svg" },
        { name: "Node.js", level: { id: "Mempelajari", en: "Learning" }, pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "FastAPI", level: { id: "Mempelajari", en: "Learning" }, pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" }
      ]
    },
    {
      category: "Tools & Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
      items: [
        { name: "Figma UI/UX", level: { id: "Dasar", en: "Basic" }, pct: 50, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "Tailwind CSS", level: { id: "Dasar", en: "Basic" }, pct: 45, icon: "https://api.iconify.design/devicon/tailwindcss.svg" },
        { name: "Bootstrap", level: { id: "Dasar", en: "Basic" }, pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
        { name: "Canva", level: { id: "Dasar-Menengah", en: "Basic-Intermediate" }, pct: 65, icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg" },
        { name: "Adobe Photoshop", level: { id: "Dasar", en: "Basic" }, pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
        { name: "Git / GitHub", level: { id: "Dasar", en: "Basic" }, pct: 45, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "Vercel", level: { id: "Dasar", en: "Basic" }, pct: 50, icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48Y2lyY2xlIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIgZmlsbD0iYmxhY2siLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjgsIDEyOCkgc2NhbGUoLjUpIj48cG9seWdvbiBmaWxsPSJ3aGl0ZSIgcG9pbnRzPSIyNTYsNDggNDk2LDQ2NCAxNiw0NjQiLz48L2c+PC9zdmc+" },
        { name: "Netlify", level: { id: "Dasar", en: "Basic" }, pct: 45, icon: "https://api.iconify.design/logos:netlify-icon.svg" },
        { name: "Docker", level: { id: "Mempelajari", en: "Learning" }, pct: 25, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" }
      ]
    },
    {
      category: "AI Assistants",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
      items: [
        { name: "ChatGPT", icon: "https://api.iconify.design/simple-icons:openai.svg?color=white" },
        { name: "GitHub Copilot", icon: "https://api.iconify.design/simple-icons:githubcopilot.svg?color=white" },
        { name: "Claude AI", icon: "assets/Foto_Logo/claude.svg" },
        { name: "Google Gemini", icon: "assets/Foto_Logo/gemini.svg" },
        { name: "Antigravity IDE", icon: "assets/Foto_Logo/antigravity.svg" },
        { name: "Kiro", icon: "assets/Foto_Logo/kiro.svg" },
        { name: "Stitch", icon: "assets/Foto_Logo/stitch.svg" }
      ]
    },
    {
      category: "Database & API",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&q=80",
      items: [
        { name: "MySQL", level: { id: "Dasar", en: "Basic" }, pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
        { name: "PostgreSQL", level: { id: "Dasar", en: "Basic" }, pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
        { name: "Supabase", level: { id: "Dasar", en: "Basic" }, pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
        { name: "Postman", level: { id: "Dasar", en: "Basic" }, pct: 35, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" }
      ]
    },
    {
      category: "Produktivitas & Office",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      items: [
        { name: "Ms. Excel / Sheets", level: { id: "Dasar-Menengah", en: "Basic-Intermediate" }, pct: 60, icon: "https://api.iconify.design/vscode-icons/file-type-excel.svg" },
        { name: "Ms. Word / Docs", level: { id: "Menengah", en: "Intermediate" }, pct: 75, icon: "https://api.iconify.design/vscode-icons/file-type-word.svg" },
        { name: "Ms. PowerPoint", level: { id: "Menengah", en: "Intermediate" }, pct: 70, icon: "https://api.iconify.design/vscode-icons/file-type-powerpoint.svg" }
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
      image: "assets/Foto_Instansi/UNU JOGJA.png",
      bgImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/nGRUfRuPUjgTZYW89"
    },
    {
      institution: { id: "SMK Al-Munawwir Yogyakarta", en: "Al-Munawwir Vocational High School Yogyakarta" },
      degree: { id: "Teknik Kendaraan Ringan Otomotif (TKRO)", en: "Light Vehicle Automotive Engineering" },
      period: "2021 – 2024",
      desc: { id: "Menyelesaikan pendidikan vokasi teknis dan praktik lapangan, ditunjang dengan pembentukan karakter kedisiplinan dan integritas di lingkungan pesantren terpadu.", en: "Completed technical vocational education and field practice, supported by character building in discipline and integrity within an integrated boarding school environment." },
      current: false,
      image: "assets/Foto_Instansi/SMK Almunawwir.png",
      bgImage: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/Yaf47HziSARyHBvZ6"
    },
    {
      institution: { id: "MTS Riyadlus Sholihin, Probolinggo", en: "MTS Riyadlus Sholihin, Probolinggo" },
      degree: { id: "Madrasah Tsanawiyah", en: "Junior High School" },
      period: "2016 – 2019",
      desc: { id: "Membangun fondasi karakter, wawasan kebangsaan, dan tata krama yang kuat melalui pendidikan menengah berbasis nilai-nilai luhur pesantren.", en: "Building a strong foundation of character, national insight, and good manners through secondary education based on noble Islamic boarding school values." },
      current: false,
      image: "assets/Foto_Instansi/MTS Riyadlus Sholihin.png",
      bgImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/iSbbo94fYh9jnSop8"
    }
  ],

  experience: [
    {
      role: { id: "Affiliate Marketer & Sales", en: "Affiliate Marketer & Sales" },
      company: { id: "Binco Ran Nusantara", en: "Binco Ran Nusantara" },
      period: { id: "Juli - Agustus 2024", en: "July - August 2024" },
      type: { id: "Pekerja Lepas (Freelance)", en: "Freelance" },
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
      type: { id: "Praktik Kerja Lapangan (PKL)", en: "Field Work Practice (Internship)" },
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      mapUrl: "https://maps.app.goo.gl/TATmJDyaN5MEzLCB6",
      tasks: [
        { id: "Melakukan perbaikan dan perawatan berat mesin secara langsung (hands-on) di bawah supervisi teknisi.", en: "Performed hands-on heavy engine repairs and maintenance under technician supervision." },
        { id: "Mendiagnosis dan melakukan troubleshooting pada masalah suspensi dan sistem kendaraan lainnya.", en: "Diagnosed and troubleshot issues with suspension and other vehicle systems." },
        { id: "Pengalaman ini sangat melatih pola pikir yang sistematis dalam mencari sumber masalah, yang kini berguna dalam debugging kode.", en: "This experience trained a systematic mindset in finding the root cause of problems, which is now useful in code debugging." }
      ]
    },
    {
      role: { id: "Teknisi Pemeliharaan (Magang)", en: "Maintenance Technician (Intern)" },
      company: { id: "Band Motor Yogyakarta", en: "Band Motor Yogyakarta" },
      type: { id: "Praktik Kerja Lapangan (PKL)", en: "Field Work Practice (Internship)" },
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
      desc: { id: "Bootcamp intensif berstandar industri. Bekerja secara tim (kolaboratif) dalam membangun proyek final Warehouse Management System, dengan fokus pada simulasi lingkungan kerja profesional, version control (Git), dan praktik full-stack web development.", en: "Industry-standard intensive bootcamp. Collaborated in a team to build a final Warehouse Management System project, focusing on professional work environment simulation, version control (Git), and full-stack web development practices." },
      image: "assets/Foto-Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.png",
      url: "assets/Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.pdf"
    },
    {
      title: "Coding Camp – Intro to Software Engineering",
      organizer: "RevoU",
      period: "2026",
      desc: { id: "Pelatihan rekayasa perangkat lunak (Software Engineering) program 1 minggu bersertifikat dari RevoU. Mencakup metodologi pengembangan, penerapan logika dasar pemrograman, hingga pengenalan praktik pembuatan aplikasi web.", en: "1-week certified Software Engineering training program from RevoU. Covered development methodologies, basic programming logic, and introduction to web application development practices." },
      image: "assets/Foto-Sertifikat/Sertifikat Dicoding.png",
      url: "assets/Sertifikat/CCSE.pdf"
    },
    {
      title: "Samsung Innovation Campus Batch 7",
      organizer: "Samsung / Dibimbing.id",
      period: "2025/2026",
      desc: { id: "Pelatihan intensif dengan kurikulum berstandar industri. Fokus pada penguatan logika pemrograman Python, struktur data lanjutan, dan implementasi Object-Oriented Programming (OOP) melalui evaluasi proyek komprehensif.", en: "Intensive training with an industry-standard curriculum. Focused on strengthening Python programming logic, advanced data structures, and implementing Object-Oriented Programming (OOP) through comprehensive project evaluation." },
      image: "assets/Foto-Sertifikat/Sertifikat Samsung Innovation Campus.png",
      url: "assets/Sertifikat/Sertifikat Samsung Innovation Campus.pdf"
    },
    {
      title: "Bootcamp Sertifikasi Microsoft Office Specialist (Excel, Word, PowerPoint)",
      organizer: "KarirNex",
      period: "2026",
      desc: { id: "Program intensif sertifikasi penguasaan Microsoft Office. Fokus pada pemrosesan data di Excel, penulisan dokumen profesional di Word, dan desain presentasi efektif di PowerPoint untuk menunjang produktivitas kerja.", en: "Intensive certification program for Microsoft Office mastery. Focused on data processing in Excel, professional document writing in Word, and effective presentation design in PowerPoint to support work productivity." },
      image: "assets/Foto-Sertifikat/Sertifikat bootcamp sertifikasi microsoft office excel word powerpoint specialist.png",
      url: "assets/Sertifikat/Sertifikat_Bootcamp_Microsoft_Office.pdf"
    },
    {
      title: "Graphic Design & UI/UX Series",
      organizer: "Dibimbing.id",
      period: "2026",
      desc: { id: "Pelatihan desain grafis dan antarmuka pengguna (UI/UX). Mencakup prinsip-prinsip desain visual dasar, pembuatan wireframe, hingga pengembangan purwarupa (prototyping) aplikasi berbasis pengalaman pengguna.", en: "Graphic design and user interface (UI/UX) training. Covered basic visual design principles, wireframing, and the development of user experience-driven application prototypes." },
      image: "assets/Foto-Sertifikat/Sertifikat Graphic Design and UIUX Series.png",
      url: "assets/Sertifikat/Sertifikat_Graphic_Design_UIUX_Series.pdf"
    },
    {
      title: "Integrating AI in Penetration Testing - Best Practices",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan spesialisasi keamanan siber yang membahas praktik terbaik (best practices) integrasi Kecerdasan Buatan (AI) dalam simulasi penetrasi sistem (Penetration Testing) dan evaluasi kerentanan IT.", en: "Cybersecurity specialization training covering best practices of Artificial Intelligence (AI) integration in system Penetration Testing and IT vulnerability evaluation." },
      image: "assets/Foto-Sertifikat/Sertifikat Codelamp .png",
      url: "assets/Sertifikat/Sertifikat CodeLamp Integration AI in penetration Testing.pdf"
    },
    {
      title: { id: "Praktek Kerja Lapangan – Band Motor", en: "Field Work Practice - Band Motor" },
      organizer: "Band Motor Yogyakarta",
      period: "2024",
      desc: { id: "Pelatihan teknis lapangan (Hands-on) di bidang mekanik otomotif. Melibatkan penanganan perawatan mesin berkala, proses overhaul (turun mesin), hingga diagnosis dan perbaikan (troubleshooting) sistem kelistrikan kendaraan.", en: "Hands-on technical training in automotive mechanics. Involved periodic engine maintenance, overhaul processes, and diagnosis and repair (troubleshooting) of vehicle electrical systems." },
      image: "assets/Foto-Sertifikat/Sertifikat Kerja Lapangan.png",
      url: "assets/Sertifikat/Sertifikat Praktik Kerja Lapangan.pdf"
    },
    {
      title: "AI Praktis untuk Produktivitas",
      organizer: "Dicoding",
      period: "2026",
      desc: { id: "Program pelatihan terapan mengenai pemanfaatan ragam instrumen Artificial Intelligence (AI) untuk mengotomatisasi tugas repetitif, memecahkan masalah komputasional, dan mengoptimalkan efisiensi alur kerja profesional.", en: "Applied training program on utilizing various Artificial Intelligence (AI) instruments to automate repetitive tasks, solve computational problems, and optimize professional workflow efficiency." },
      image: "assets/Foto-Sertifikat/Sertifikat AI Praktis untuk Produktivitas.png",
      url: "assets/Sertifikat/AI Praktis untuk Produktivitas.pdf"
    },
    {
      title: "AI Productivity and AI API Integration for Developers",
      organizer: "Hacktiv8",
      period: "2026",
      desc: { id: "Pelatihan tingkat lanjut bagi software developer mengenai arsitektur dan integrasi Application Programming Interface (API) berbasis Machine Learning/AI ke dalam sistem perangkat lunak modern.", en: "Advanced training for software developers on the architecture and integration of Machine Learning/AI-based Application Programming Interfaces (APIs) into modern software systems." },
      image: "assets/Foto-Sertifikat/Sertifikat AI Productivity and AI API Integration for Developers.png",
      url: "assets/Sertifikat/AI Productivity and AI API Integration for Developers.pdf"
    },
    {
      title: "AI-Powered Software Engineering: Practical AI Skills for Beginner",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan penerapan AI dalam proses rekayasa perangkat lunak. Mencakup penggunaan AI tools untuk mendukung siklus pengembangan software — mulai dari perencanaan, penulisan kode, debugging, hingga dokumentasi yang lebih efisien.", en: "Training on the application of AI in the software engineering process. Covers the use of AI tools to support the software development lifecycle — from planning, coding, and debugging to more efficient documentation." },
      image: "assets/Foto-Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.png",
      url: "assets/Sertifikat/Sertifikat AI-Powered Software Engineering Practical AI Skills for Beginner.pdf"
    },
    {
      title: "One API, Many AI Models: OpenRouter for Beginner Developers",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan penggunaan OpenRouter API untuk mengakses dan mengintegrasikan berbagai model AI (LLM) ke dalam aplikasi dengan satu antarmuka. Topik mencakup manajemen API key, pemilihan model, dan implementasi dasar di proyek nyata.", en: "Training on using the OpenRouter API to access and integrate various AI models (LLMs) into applications using a single interface. Topics include API key management, model selection, and basic implementation in real-world projects." },
      image: "assets/Foto-Sertifikat/Sertifikat OpenRouter for Beginner Developers.png",
      url: "assets/Sertifikat/Sertifikat OpenRouter for Beginner Developers.pdf"
    },
    {
      title: "Pengenalan Web & Persiapan Lingkungan Kerja",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan dasar untuk calon web developer. Memperkenalkan cara kerja internet dan web, instalasi tools pengembangan (VS Code, browser DevTools, Node.js), serta konfigurasi lingkungan kerja yang profesional sebelum mulai coding.", en: "Basic training for aspiring web developers. Introduces how the internet and web work, installation of development tools (VS Code, browser DevTools, Node.js), and professional work environment configuration before starting to code." },
      image: "assets/Foto-Sertifikat/Sertifikat Pengenalan Web & Persiapan Lingkungan Kerja.png",
      url: "assets/Sertifikat/Pengenalan Web & Persiapan Lingkungan Kerja.pdf"
    },
    {
      title: "Introduction to JavaScript and Development Environment Setup",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan pengenalan JavaScript sebagai bahasa pemrograman web. Mencakup sintaks dasar, tipe data, fungsi, event handling, serta konfigurasi environment pengembangan untuk memulai proyek JavaScript secara mandiri.", en: "Introductory training on JavaScript as a web programming language. Covers basic syntax, data types, functions, event handling, and development environment configuration to start JavaScript projects independently." },
      image: "assets/Foto-Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.png",
      url: "assets/Sertifikat/Sertifikat Introduction to JavaScript and Development Environment Setup.pdf"
    },
    {
      title: "Introduction to Version Control & Git Installation",
      organizer: "Codelamp Indonesia",
      period: "2026",
      desc: { id: "Pelatihan dasar sistem version control menggunakan Git. Meliputi konsep repository, commit, branching, merge, serta konfigurasi awal Git dan koneksi ke GitHub sebagai platform kolaborasi kode.", en: "Basic training on version control systems using Git. Covers repository concepts, commits, branching, merging, as well as initial Git configuration and connection to GitHub as a code collaboration platform." },
      image: "assets/Foto-Sertifikat/Sertifikat Introduction to Version Control & Git Installation.png",
      url: "assets/Sertifikat/Sertifikat Introduction to Version Control & Git Installation.pdf"
    }
  ],

  organization: [
    {
      role: { id: "Ketua UKM Badminton", en: "Head of Badminton UKM" },
      org: "UNU Yogyakarta",
      period: "2025 – 2026",
      desc: { id: "Memimpin divisi dan anggota UKM. Bertanggung jawab dalam manajemen jadwal, alokasi anggaran operasional, dan merancang program kerja tahunan. Terbiasa memimpin rapat koordinasi dan mengambil keputusan strategis.", en: "Led the division and UKM members. Responsible for schedule management, operational budget allocation, and designing annual work programs. Accustomed to leading coordination meetings and making strategic decisions." },
      icon: "assets/Foto_Logo/Logo Ukm Badminton UNUYO.svg",
      image: "https://awsimages.detik.net.id/community/media/visual/2022/10/18/ilustrasi-badminton-4.jpeg?w=1200"
    },
    {
      role: { id: "Dep. Organisasi", en: "Organization Department" },
      org: "PAC IPNU Mantrijeron",
      period: { id: "2026 - Sekarang", en: "2026 - Present" },
      desc: { id: "Mengelola tata kelola administrasi dan pengarsipan data organisasi secara sistematis. Bertanggung jawab atas dokumentasi program kerja dan memastikan arus informasi berjalan lancar antar divisi.", en: "Managed administrative governance and systematic archiving of organizational data. Responsible for documenting work programs and ensuring smooth information flow across departments." },
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
      role: { id: "Dep. Dakwah", en: "Da'wah Department" },
      org: "PAC IPNU Mantrijeron",
      period: "2023 – 2024",
      desc: { id: "Mengkoordinasikan eksekusi acara skala komunitas, memimpin penjadwalan dan berkolaborasi dengan berbagai divisi untuk memastikan kelancaran program.", en: "Coordinated community-scale event executions, led scheduling, and collaborated with various divisions to ensure smooth program implementation." },
      icon: "assets/Foto_Logo/Logo IPNU Mantrijeron.svg",
      image: "https://pbs.twimg.com/profile_images/1437565816036229121/NrGG35Q-_400x400.jpg"
    }
  ],

  certificates: [
    // ── BOOTCAMP & PELATIHAN UTAMA ──
    { name: "Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative Academy", issuer: "Stechoq Academy x Innovative Academy", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.png", pdfUrl: "assets/Sertifikat/Sertifikat Professional Developer Bootcamp Program Batch 1 under Stechoq Academy x Innovative.pdf" },
    { name: "Samsung Innovation Campus Batch 7", issuer: "Samsung / Dibimbing.id", year: "2025/2026", image: "assets/Foto-Sertifikat/Sertifikat Samsung Innovation Campus.png", pdfUrl: "assets/Sertifikat/Sertifikat Samsung Innovation Campus.pdf" },
    { name: "Coding Camp – Intro to Software Engineering", issuer: "RevoU", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Dicoding.png", pdfUrl: "assets/Sertifikat/CCSE.pdf" },
    { name: "Bootcamp Sertifikasi Microsoft Office Specialist (Excel, Word, PowerPoint)", issuer: "KarirNex", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat bootcamp sertifikasi microsoft office excel word powerpoint specialist.png", pdfUrl: "assets/Sertifikat/Sertifikat_Bootcamp_Microsoft_Office.pdf" },
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
    // ── KURSUS DESAIN & UI/UX ──
    { name: "Graphic Design & UI/UX Series", issuer: "Dibimbing.id", year: "2026", image: "assets/Foto-Sertifikat/Sertifikat Graphic Design and UIUX Series.png", pdfUrl: "assets/Sertifikat/Sertifikat_Graphic_Design_UIUX_Series.pdf" },
    // ── PENGHARGAAN & LAINNYA ──
    { name: "Ketua UKM Badminton Universitas Nahdlatul Ulama Yogyakarta", issuer: "UNU Yogyakarta", year: "2025/2026", image: "assets/Foto-Sertifikat/Sertifikat Ketua UKM Badminton UNUYO.png", pdfUrl: "assets/Sertifikat/Sertifikat UKM Ketua Badminton UNUYO.pdf" },
    { name: "International Conference: Indonesia-Russia Cooperation", issuer: "UNU Yogyakarta & Rusia", year: "2024", image: "assets/Foto-Sertifikat/Sertifikat International Conference.png", pdfUrl: "assets/Sertifikat/Sertifikat International Conference.pdf" },
    { name: "Praktek Kerja Lapangan – Band Motor", issuer: "Band Motor Yogyakarta / SMK Al-Munawwir Krapyak", year: "2024", image: "assets/Foto-Sertifikat/Sertifikat Kerja Lapangan.png", pdfUrl: "assets/Sertifikat/Sertifikat Praktik Kerja Lapangan.pdf" },
    { name: "Lomba Kaligrafi Al-Mizan Fest 1444 H", issuer: "Panitia Al-Mizan", year: "2023", image: "assets/Foto-Sertifikat/Sertifikat Lomba Kaligrafi.png", pdfUrl: "assets/Sertifikat/Sertifikat Lomba Kaligrafi.pdf" }
  ],

  languages: [
    { lang: "Indonesia", level: "Native" },
    { lang: "Arab", level: { id: "Dasar", en: "Basic" } },
    { lang: "Inggris", level: { id: "Dasar", en: "Basic" } }
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
    desc: { id: "Membangun sistem inventarisasi dan e-commerce buku (CMS) untuk mengatasi kendala pencatatan manual. Dikembangkan secara kolaboratif menggunakan React dan Supabase. Sistem ini berhasil memusatkan data transaksi dan inventaris, serta meningkatkan efisiensi pelacakan data pelanggan secara real-time.", en: "Built a book inventory and e-commerce system (CMS) to overcome manual recording issues. Collaboratively developed using React and Supabase. The system successfully centralized transaction and inventory data, and increased the efficiency of real-time customer data tracking." },
    features: [{ id: "Sistem Manajemen Konten (CMS)", en: "Content Management System (CMS)" }, { id: "Katalog Buku Dinamis", en: "Dynamic Book Catalog" }, { id: "Autentikasi Multi-Role (Admin/User)", en: "Multi-Role Authentication (Admin/User)" }, { id: "Keranjang Belanja (Cart System)", en: "Shopping Cart System" }, { id: "Integrasi RESTful API Backend", en: "RESTful API Backend Integration" }],
    demo: "https://si-buku-sigma.vercel.app/",
    github: "https://github.com/yazid-solo/SiBuku",
    image: "assets/Foto_Project/CMS_Sibuku.png",
    status: { id: "Selesai", en: "Finished" },
    year: "2026"
  },
  {
    id: 5,
    title: "JogjaCourt",
    category: "web",
    tags: ["React", "Tailwind CSS", "FastAPI", "Supabase"],
    desc: { id: "Merespon tingginya tingkat bentrok jadwal lapangan olahraga di Yogyakarta dengan membangun platform reservasi terpusat. Menggunakan arsitektur React, FastAPI, dan Supabase untuk mengotomatisasi proses booking secara mandiri oleh pengguna, sehingga mengurangi beban kerja admin dan meminimalisir double-booking.", en: "Responded to the high rate of sports field schedule conflicts in Yogyakarta by building a centralized reservation platform. Used React, FastAPI, and Supabase architecture to automate the booking process independently by users, thereby reducing admin workload and minimizing double-booking." },
    features: [{ id: "Sistem Booking Real-time", en: "Real-time Booking System" }, { id: "Dashboard Admin & User", en: "Admin & User Dashboard" }, { id: "Sistem Autentikasi & Otorisasi", en: "Authentication & Authorization System" }, { id: "Manajemen Lapangan & Pembayaran", en: "Field & Payment Management" }, { id: "Desain UI/UX Modern & Responsif", en: "Modern & Responsive UI/UX Design" }],
    demo: "https://jogja-court.vercel.app/",
    github: "https://github.com/yazid-solo/Sistem-Boking-Lapangan-Badminton",
    image: "assets/Foto_Project/Sistem_boking_Lap.Badminton.png",
    status: { id: "Selesai & dalam pengembangan", en: "Finished & In Development" },
    year: "2026"
  },
  {
    id: 3,
    title: "Warehouse-System",
    category: "web",
    tags: ["Vite", "Bootstrap", "Node.js", "PostgreSQL"],
    desc: { id: "Menyelesaikan tantangan pelacakan aset gudang yang tidak akurat dengan mengembangkan Sistem Informasi Manajemen Gudang (WMS). Dibangun bersama tim bootcamp Stechoq menggunakan arsitektur Vite, Node.js Express, dan PostgreSQL. Sistem ini mengamankan rute dengan JWT Auth dan menstabilkan alur manajemen inventaris secara real-time.", en: "Solved the challenge of inaccurate warehouse asset tracking by developing a Warehouse Management Information System (WMS). Built with the Stechoq bootcamp team using Vite, Node.js Express, and PostgreSQL architecture. This system secures routes with JWT Auth and stabilizes the real-time inventory management flow." },
    features: [{ id: "Autentikasi User (JWT)", en: "User Authentication (JWT)" }, { id: "Manajemen Inventaris Gudang", en: "Warehouse Inventory Management" }, { id: "CRUD Data Master Barang", en: "CRUD Master Data Goods" }, { id: "Integrasi RESTful API", en: "RESTful API Integration" }, { id: "Desain Responsif Clean UI", en: "Responsive Clean UI Design" }],
    demo: "",
    github: "https://gitlab.com/bootcamp-stechoq/warehouse-system-cihuy",
    image: "assets/Foto_Project/Warehouse-system.png",
    status: { id: "Selesai & dalam pengembangan", en: "Finished & In Development" },
    year: "2026"
  },
  {
    id: 11,
    title: "UI/UX Design: Vareway",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: { id: "Desain antarmuka platform EduTech interaktif hasil kerja sama tim yang menyediakan alur belajar terstruktur (Learning Path). Tampilan ini dirancang secara kolaboratif untuk membimbing pengguna memilih kurikulum sesuai kebutuhan industri—seperti Front-End, Cyber Security, hingga Machine Learning—dengan gaya visual yang modern dan memotivasi pelajar.", en: "Interactive EduTech platform interface design resulting from teamwork that provides a structured learning flow (Learning Path). This display is collaboratively designed to guide users in choosing a curriculum according to industry needs—such as Front-End, Cyber Security, to Machine Learning—with a modern visual style that motivates students." },
    features: [{ id: "Interactive Prototype", en: "Interactive Prototype" }, { id: "Design System", en: "Design System" }, { id: "Auto Layout", en: "Auto Layout" }, { id: "EduTech Platform", en: "EduTech Platform" }, { id: "Responsive Web", en: "Responsive Web" }],
    demo: "",
    embed: "https://embed.figma.com/design/ixlEcoPHDG9k8gMxtuR4PZ/VAREWAY?node-id=3-2&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Vareway.jpeg",
    status: { id: "Selesai & Butuh Pengembangan", en: "Finished & Needs Development" },
    year: "2026"
  },
  {
    id: 10,
    title: "UI/UX Design: Warehouse-System",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: { id: "Rancangan dasbor web (B2B) hasil kolaborasi tim untuk manajemen sistem pergudangan yang komprehensif. Desain bersama ini mencakup modul pemantauan stok (Storage Bin), pendataan aset, hingga pengelolaan pemasok (Supplier). Antarmuka difokuskan pada penyajian ringkasan data yang padat namun tetap bersih dan mudah dibaca oleh operator.", en: "Team collaboration B2B web dashboard design for comprehensive warehouse system management. This joint design includes stock monitoring modules (Storage Bin), asset data collection, and supplier management (Supplier). The interface focuses on presenting a dense but still clean and easy-to-read data summary for operators." },
    features: [{ id: "Interactive Prototype", en: "Interactive Prototype" }, { id: "Design System", en: "Design System" }, { id: "Auto Layout", en: "Auto Layout" }, { id: "Dashboard UI", en: "Dashboard UI" }, { id: "B2B WebApp", en: "B2B WebApp" }],
    demo: "",
    embed: "https://embed.figma.com/design/nK44ZokkywTLLl932sC77Y/stechoq?node-id=109-219&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Warehouse-System.png",
    status: { id: "Selesai & Butuh Pengembangan", en: "Finished & Needs Development" },
    year: "2026"
  },
  {
    id: 9,
    title: "UI/UX Design: Warmindo Delivery",
    category: "ui",
    tags: ["Figma", "UI/UX", "Prototyping", "Team Collaboration"],
    desc: { id: "Desain antarmuka aplikasi mobile (Food Delivery) hasil kolaborasi tim yang dirancang khusus untuk memudahkan pemesanan menu Warmindo secara online. Fokus desain kami ada pada tata letak yang bersih, navigasi kategori makanan yang cepat, serta pengalaman pengguna yang intuitif agar proses pemesanan menjadi lebih praktis.", en: "Mobile application interface design (Food Delivery) resulting from teamwork specifically designed to facilitate online ordering of Warmindo menus. Our design focus is on a clean layout, fast food category navigation, and an intuitive user experience so that the ordering process becomes more practical." },
    features: [{ id: "Interactive Prototype", en: "Interactive Prototype" }, { id: "Design System", en: "Design System" }, { id: "Auto Layout", en: "Auto Layout" }, { id: "Mobile App Design", en: "Mobile App Design" }, { id: "User Flow", en: "User Flow" }],
    demo: "",
    embed: "https://embed.figma.com/design/8goiC7Nu277CYpj2Ns4no8/warmindo?node-id=0-1&embed-host=share",
    github: "",
    image: "assets/Foto_Project/Desain UI Warmindo Delivery.png",
    status: { id: "Selesai & Butuh Pengembangan", en: "Finished & Needs Development" },
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
    desc: { id: "Sistem Pencatatan Keuangan Pribadi (Cash Note). Merupakan hasil tugas akademik perkuliahan yang dikerjakan secara tim (kolaboratif), dibangun menggunakan arsitektur modern untuk membantu pengguna memantau arus kas, pengeluaran, dan pemasukan secara komprehensif.", en: "Personal Financial Recording System (Cash Note). An academic project done collaboratively by a team, built using modern architecture to help users monitor cash flows, expenses, and income comprehensively." },
    features: [{ id: "Aplikasi Web Responsif", en: "Responsive Web App" }, { id: "Autentikasi Pengguna Aman", en: "Secure User Authentication" }, { id: "CRUD Transaksi Keuangan", en: "Financial Transaction CRUD" }, { id: "Integrasi RESTful API Backend", en: "RESTful API Backend Integration" }, { id: "Dashboard Analitik Visual", en: "Visual Analytic Dashboard" }],
    demo: "https://cashnote-webapp.vercel.app",
    github: "https://github.com/yazid-solo/cash-note.git",
    image: "assets/Foto_Project/CASHNOTE.jpeg",
    status: { id: "Selesai", en: "Finished" },
    year: "2026"
  },
  {
    id: 4,
    title: "Warmindo App",
    category: "mini",
    tags: ["JavaScript", "HTML", "Tailwind CSS", "FastAPI", "Supabase", "REST API"],
    desc: { id: "Aplikasi web pemesanan makanan dan sistem manajemen kasir ringan (POS). Mengintegrasikan FastAPI dan Supabase di sisi backend untuk pemrosesan pesanan yang cepat, serta Vanilla JS dan Tailwind CSS di sisi frontend untuk manajemen menu yang efisien.", en: "Food ordering web app and lightweight point-of-sale (POS) system. Integrates FastAPI and Supabase on the backend for fast order processing, and Vanilla JS with Tailwind CSS on the frontend for efficient menu management." },
    features: [{ id: "Sistem Kasir (POS) Interaktif", en: "Interactive POS System" }, { id: "Manajemen Menu Makanan (CRUD)", en: "Food Menu Management (CRUD)" }, { id: "Integrasi Backend FastAPI", en: "FastAPI Backend Integration" }, { id: "Database Real-time Supabase", en: "Real-time Database with Supabase" }, { id: "Antarmuka Ramah Pengguna", en: "User-Friendly Interface" }],
    demo: "",
    github: "https://github.com/yazid-solo/Warmindo-App",
    image: "assets/Foto_Project/Warmindo_app.png",
    status: { id: "Dalam Proses", en: "In Progress" },
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
    status: { id: "Dalam Pengerjaan", en: "In Progress" },
    year: "2025"
  },
  {
    id: 7,
    title: { id: "Kalkulator Akademik IPK", en: "GPA Academic Calculator" },
    category: "mini",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    desc: { id: "Mengotomatisasi perhitungan Indeks Prestasi Kumulatif (IPK) manual yang rentan kesalahan dengan membangun Progressive Web App (PWA) kalkulator akademik interaktif. Dibangun dengan ekosistem modern menggunakan React 19, TypeScript, dan Tailwind CSS v4. Sistem ini memvalidasi bobot SKS secara dinamis, menyimpan data historis secara lokal (IndexedDB), dan menyajikan hasil komputasi secara instan dengan presisi tinggi.", en: "Automated the manual, error-prone process of calculating Grade Point Average (GPA) by building an interactive academic calculator Progressive Web App (PWA). Built with a modern ecosystem using React 19, TypeScript, and Tailwind CSS v4. The system dynamically validates credit weights, stores historical data locally (IndexedDB), and delivers high-precision instant computational results." },
    features: [{ id: "Perhitungan IPK Instan", en: "Instant GPA Calculation" }, { id: "Penyimpanan Lokal (IndexedDB)", en: "Local Storage (IndexedDB)" }, { id: "State Management dengan Zustand", en: "State Management with Zustand" }, { id: "Antarmuka Minimalis yang Mudah Digunakan", en: "Easy to Use Minimalist Interface" }],
    demo: "https://akademiq-app.netlify.app",
    github: "https://github.com/yazid-solo/AkademiQ.git",
    image: "assets/Foto_Project/AkademiQ.jpeg",
    status: { id: "Selesai", en: "Finished" },
    year: "2024"
  }
];

// Export untuk digunakan di semua halaman
if (typeof module !== "undefined") {
  module.exports = { PROFILE, PROJECTS };
}







