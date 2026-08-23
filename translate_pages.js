const fs = require('fs');

let about = fs.readFileSync('about.html', 'utf8');
const aboutReplacements = [
  ['<span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent);letter-spacing:0.1em;text-transform:uppercase;font-weight:600;">mengenal saya</span>', '<span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--accent);letter-spacing:0.1em;text-transform:uppercase;font-weight:600;" data-i18n="abt_badge">mengenal saya</span>'],
  ['<span style="display:block;color:var(--text);">Tentang</span>', '<span style="display:block;color:var(--text);" data-i18n="abt_h1">Tentang</span>'],
  ['<span class="about-hero-stat-label">Informatika</span>', '<span class="about-hero-stat-label" data-i18n="abt_stat1_lbl">Informatika</span>'],
  ['<span class="about-hero-stat-label">Bidang Keahlian</span>', '<span class="about-hero-stat-label" data-i18n="abt_stat2_lbl">Bidang Keahlian</span>'],
  ['<span class="about-hero-stat-label">Tahun Belajar</span>', '<span class="about-hero-stat-label" data-i18n="abt_stat3_lbl">Tahun Belajar</span>'],
  ['Hubungi Saya', '<span data-i18n="abt_contact">Hubungi Saya</span>'],
  ['<p class="section-label">Prinsip Saya</p>', '<p class="section-label" data-i18n="abt_prin_lbl">Prinsip Saya</p>'],
  ['<h2 class="section-title">Nilai yang Saya Pegang</h2>', '<h2 class="section-title" data-i18n="abt_prin_h2">Nilai yang Saya Pegang</h2>'],
  ['<p class="section-label">Latar Belakang</p>', '<p class="section-label" data-i18n="abt_edu_lbl">Latar Belakang</p>'],
  ['<h2 class="section-title">Riwayat Pendidikan</h2>', '<h2 class="section-title" data-i18n="abt_edu_h2">Riwayat Pendidikan</h2>'],
  ['<p class="section-label" style="justify-content:center;">Kepemimpinan</p>', '<p class="section-label" style="justify-content:center;" data-i18n="abt_org_lbl">Kepemimpinan</p>'],
  ['<h2 class="section-title">Pengalaman Organisasi</h2>', '<h2 class="section-title" data-i18n="abt_org_h2">Pengalaman Organisasi</h2>'],
  ['<h2 class="cta-title">Tertarik Berkolaborasi?</h2>', '<h2 class="cta-title" data-i18n="abt_cta_h2">Tertarik Berkolaborasi?</h2>'],
  ['<p class="cta-desc">Saya terbuka untuk proyek pengembangan perangkat lunak, eksplorasi teknologi masa depan, diskusi ide inovatif, serta peluang profesional tingkat lanjut.</p>', '<p class="cta-desc" data-i18n="abt_cta_p">Saya terbuka untuk proyek pengembangan perangkat lunak, eksplorasi teknologi masa depan, diskusi ide inovatif, serta peluang profesional tingkat lanjut.</p>'],
  ['<span>Lihat Resume Resmi</span>', '<span data-i18n="abt_cta_btn2">Lihat Resume Resmi</span>']
];

for (let r of aboutReplacements) {
  about = about.replace(r[0], r[1]);
}
fs.writeFileSync('about.html', about);

let proj = fs.readFileSync('projects.html', 'utf8');
const projReplacements = [
  ['>Semua<', ' data-i18n="prj_filter_all">Semua<'],
  ['>Web Dev<', ' data-i18n="prj_filter_web">Web Dev<'],
  ['>UI/UX<', ' data-i18n="prj_filter_ui">UI/UX<'],
  ['>Mini Apps<', ' data-i18n="prj_filter_mini">Mini Apps<'],
  ['placeholder="Cari proyek berdasarkan nama atau teknologi..."', 'placeholder="Cari proyek berdasarkan nama atau teknologi..." data-i18n="prj_search"'],
  ['>Katalog<', ' data-i18n="prj_title1">Katalog<'],
  ['>Karya<', ' data-i18n="prj_title2">Karya<']
];
for (let r of projReplacements) {
  proj = proj.replace(r[0], r[1]);
}
fs.writeFileSync('projects.html', proj);

let res = fs.readFileSync('resume.html', 'utf8');
const resReplacements = [
  ['>Perjalanan<', ' data-i18n="res_title1">Perjalanan<'],
  ['>Karir<', ' data-i18n="res_title2">Karir<'],
  ['>Download CV Utama (ATS)<', ' data-i18n="res_btn_cv">Download CV Utama (ATS)<'],
  ['>Download CV Lengkap<', ' data-i18n="res_btn_cv_btn">Download CV Lengkap<'],
  ['>Proyek<', ' data-i18n="res_stat_proj">Proyek<'],
  ['>Sertifikasi<', ' data-i18n="res_stat_cert">Sertifikasi<'],
  ['>Pengalaman<', ' data-i18n="res_stat_exp">Pengalaman<'],
  ['>Pendidikan & Organisasi<', ' data-i18n="res_tab_edu">Pendidikan & Organisasi<'],
  ['>Pengalaman & Keahlian<', ' data-i18n="res_tab_exp">Pengalaman & Keahlian<'],
  ['>Sertifikasi & Pelatihan<', ' data-i18n="res_tab_cert">Sertifikasi & Pelatihan<']
];
for (let r of resReplacements) {
  res = res.replace(r[0], r[1]);
}
fs.writeFileSync('resume.html', res);

let con = fs.readFileSync('contact.html', 'utf8');
const conReplacements = [
  ['>Mari<', ' data-i18n="con_title1">Mari<'],
  ['>Berdiskusi<', ' data-i18n="con_title2">Berdiskusi<'],
  ['>Email Saya<', ' data-i18n="con_card_email">Email Saya<'],
  ['>Telepon / WA<', ' data-i18n="con_card_phone">Telepon / WA<'],
  ['>Lokasi<', ' data-i18n="con_card_loc">Lokasi<'],
  ['>Kirim Pesan Langsung<', ' data-i18n="con_form_title">Kirim Pesan Langsung<'],
  ['>Nama Lengkap<', ' data-i18n="con_form_name">Nama Lengkap<'],
  ['>Alamat Email<', ' data-i18n="con_form_email">Alamat Email<'],
  ['>Topik Pembicaraan (Opsional)<', ' data-i18n="con_form_subject">Topik Pembicaraan (Opsional)<'],
  ['>Tulis pesan Anda di sini...<', ' data-i18n="con_form_msg">Tulis pesan Anda di sini...<'],
  ['>Kirim Pesan Sekarang<', ' data-i18n="con_form_btn">Kirim Pesan Sekarang<']
];
for (let r of conReplacements) {
  con = con.replace(r[0], r[1]);
}
fs.writeFileSync('contact.html', con);

console.log("Replacements done");
