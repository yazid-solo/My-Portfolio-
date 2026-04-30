# 🚀 Portofolio Muchamad Yazid Ardani — v5

Website portofolio personal multi-halaman yang modern, profesional, dan futuristik.  
Dibangun dengan HTML, CSS, JavaScript (vanilla) + Tailwind CSS CDN.

---

## 📁 Struktur File

```
portfolio/
├── index.html          ← Halaman Home
├── about.html          ← Halaman About
├── projects.html       ← Halaman Projects (filter, search, modal)
├── resume.html         ← Halaman Resume/CV
├── contact.html        ← Halaman Contact (form + social)
├── assets/
│   ├── img/            ← Gambar lokal (opsional, saat ini pakai Unsplash URL)
│   ├── icons/          ← Ikon SVG lokal
│   └── lottie/         ← Animasi Lottie (opsional)
├── css/
│   └── style.css       ← Custom styles + CSS variables tema
├── js/
│   ├── main.js         ← Entry point, logika per-halaman
│   ├── theme.js        ← Dark/light mode + accent color switcher
│   ├── animations.js   ← Scroll reveal, tilt 3D, skill bars, parallax
│   └── components.js   ← Navbar & footer dinamis, command palette, transisi
├── data/
│   └── profile.js      ← SEMUA DATA KONTEN (edit di sini)
├── README.md
└── CREDITS.md
```

---

## ▶️ Cara Menjalankan

### Opsi 1 — Buka Langsung
Buka file `index.html` di browser. **Catatan:** Three.js dan beberapa fitur CDN perlu koneksi internet.

### Opsi 2 — Live Server (Disarankan)
Gunakan ekstensi **Live Server** di VS Code:
1. Buka folder `portfolio/` di VS Code
2. Klik kanan `index.html` → **Open with Live Server**
3. Situs berjalan di `http://127.0.0.1:5500`

---

## ✏️ Cara Update Data & Konten

### Ubah Data Pribadi / Profil
Edit file **`data/profile.js`**:
```js
const PROFILE = {
  name: "Muchamad Yazid Ardani",
  email: "muhzee16@gmail.com",
  // ... semua data ada di sini
};
```

### Tambah Project Baru
Di file `data/profile.js`, tambahkan objek baru ke array `PROJECTS`:
```js
{
  id: 7,                          // ID unik (angka berbeda)
  title: "Nama Project",
  category: "web",               // "web" | "ui" | "mini" | "akademik"
  tags: ["React", "Tailwind"],
  desc: "Deskripsi project...",
  features: ["Fitur A", "Fitur B"],
  demo: "https://link-demo.com",
  github: "https://github.com/yazid-solo/nama-repo",
  image: "https://url-gambar.jpg",
  status: "Selesai",             // "Selesai" | "Dalam Pengerjaan"
  year: "2025"
}
```

### Tambah Kategori Filter Project
Di `projects.html`, tambahkan pill baru:
```html
<button class="filter-pill" data-filter="nama-kategori">Label</button>
```
Pastikan `data-filter` sama persis dengan `category` di data project.

---

## 🎨 Cara Ganti Tema & Warna

### Ganti Warna Aksen
Ada 3 pilihan aksen bawaan (klik ikon lingkaran di navbar):
- **Cyan** `#00d4ff` — default
- **Violet** `#8b5cf6`
- **Emerald** `#10b981`

Untuk menambah warna aksen baru, edit `css/style.css`:
```css
html[data-accent="merah"] { --accent: #ef4444; --accent-rgb: 239, 68, 68; }
```

Lalu tambahkan opsi di `js/components.js` (bagian `accent-dropdown`).

### Ganti Font
Di `css/style.css`, ganti URL Google Fonts dan variabel:
```css
@import url('https://fonts.googleapis.com/css2?family=FONT_BARU...');
:root {
  --font-display: 'FONT_BARU', sans-serif;
}
```

---

## 🖼️ Cara Ganti Gambar

### Foto Profil (About Page)
Di `about.html`, ganti URL di tag `<img>`:
```html
<img src="assets/img/foto-yazid.jpg" alt="Foto Yazid" ...>
```
Atau gunakan URL langsung dari Unsplash/Cloudinary.

### Gambar Project
Di `data/profile.js`, ganti field `image` setiap project:
```js
image: "assets/img/project-nama.jpg"
```

---

## ⌨️ Fitur Keyboard Shortcut

| Shortcut | Fungsi |
|---|---|
| `Ctrl+K` | Buka Command Palette |
| `↑ ↓` | Navigasi item command palette |
| `Enter` | Buka halaman yang dipilih |
| `Esc` | Tutup command palette / modal |

---

## 📦 Upgrade ke Tailwind CLI (Opsional)

Saat ini menggunakan Tailwind via CDN. Untuk produksi:

1. Install Node.js & npm
2. Inisialisasi project:
   ```bash
   npm init -y
   npm install -D tailwindcss
   npx tailwindcss init
   ```
3. Buat `input.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
4. Edit `tailwind.config.js`:
   ```js
   module.exports = {
     content: ["./*.html"],
     darkMode: 'class',
   }
   ```
5. Build:
   ```bash
   npx tailwindcss -i ./input.css -o ./css/tailwind.css --watch
   ```
6. Ganti CDN script di semua HTML dengan `<link rel="stylesheet" href="css/tailwind.css">`.

---

## 🔗 Dependencies (CDN)

| Library | Versi | Kegunaan |
|---|---|---|
| Tailwind CSS | Latest Play CDN | Utility classes |
| Three.js | r128 | Hero 3D background |
| Google Fonts | — | Sora + DM Sans + JetBrains Mono |
| SimpleIcons CDN | — | Ikon tools/stack |

---

## 📬 Sambungkan Form ke Backend (Opsional)

Saat ini form menggunakan `mailto:` handler.  
Untuk form yang benar-benar dikirim tanpa membuka email client:

**Opsi A — Formspree (gratis, mudah):**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Opsi B — EmailJS (JS-based):**
Lihat dokumentasi di https://www.emailjs.com/

**Opsi C — Backend sendiri (Express/Flask):**
Di `js/main.js`, ganti handler `submit` dengan `fetch` POST ke endpoint API.

---

*Dibuat oleh Muchamad Yazid Ardani · 2025*
