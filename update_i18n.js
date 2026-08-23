const fs = require('fs');
let code = fs.readFileSync('index.html', 'utf8');

code = code.replace('<div class="about-stat-label">Semester Aktif</div>', '<div class="about-stat-label" data-i18n="idx_stat_sem">Semester Aktif</div>');
code = code.replace('display:inline-block;">Mahasiswa Aktif</div>', 'display:inline-block;" data-i18n="idx_stat_sem_sub">Mahasiswa Aktif</div>');

code = code.replace('<div class="about-stat-label">Proyek Latihan</div>', '<div class="about-stat-label" data-i18n="idx_stat_proj">Proyek Latihan</div>');
code = code.replace('display:inline-block;">Terus Bertambah</div>', 'display:inline-block;" data-i18n="idx_stat_proj_sub">Terus Bertambah</div>');

code = code.replace('<div class="about-stat-label">Sertifikat</div>', '<div class="about-stat-label" data-i18n="idx_stat_cert">Sertifikat</div>');
code = code.replace('display:inline-block;">Tervalidasi Resmi</div>', 'display:inline-block;" data-i18n="idx_stat_cert_sub">Tervalidasi Resmi</div>');

code = code.replace('<div class="about-stat-label">Organisasi</div>', '<div class="about-stat-label" data-i18n="idx_stat_org">Organisasi</div>');
code = code.replace('display:inline-block;">Aktif Berpartisipasi</div>', 'display:inline-block;" data-i18n="idx_stat_org_sub">Aktif Berpartisipasi</div>');

code = code.replace('<div class="about-stat-label">Pelatihan yang Diikuti</div>', '<div class="about-stat-label" data-i18n="idx_stat_train">Pelatihan yang Diikuti</div>');
code = code.replace('<span class="bottom-text">PELATIHAN & KURSUS</span>', '<span class="bottom-text" data-i18n="idx_stat_train_sub">PELATIHAN & KURSUS</span>');

fs.writeFileSync('index.html', code);
console.log('index.html updated successfully');
