const fs = require('fs');
let code = fs.readFileSync('resume.html', 'utf8');

code = code.replace('<p class="section-label reveal">Profil Profesional</p>', '<p class="section-label reveal" data-i18n="res_prof_label">Profil Profesional</p>');
code = code.replace('>Ringkasan Profil</h2>', ' data-i18n="res_prof_title">Ringkasan Profil</h2>');
code = code.replace('Seorang <strong', '<span data-i18n="res_prof_p1">Seorang <strong');
code = code.replace('dan <em>debugging</em>.', 'dan <em>debugging</em>.</span>');
code = code.replace('Saya siap menghadapi', '<span data-i18n="res_prof_p2">Saya siap menghadapi');
code = code.replace('praktik industri nyata.', 'praktik industri nyata.</span>');
code = code.replace('>Proyek Selesai</div>', ' data-i18n="res_prof_stat1">Proyek Selesai</div>');
code = code.replace('>Sertifikat</div>', ' data-i18n="res_prof_stat2">Sertifikat</div>');
code = code.replace('>Pengalaman Kerja</div>', ' data-i18n="res_prof_stat3">Pengalaman Kerja</div>');
code = code.replace('<p class="section-label">Kemampuan</p>', '<p class="section-label" data-i18n="res_sec_kemampuan">Kemampuan</p>');
code = code.replace('<p class="section-label">Pengalaman Belajar</p>', '<p class="section-label" data-i18n="res_sec_belajar">Pengalaman Belajar</p>');
code = code.replace('<p class="section-label">Pencapaian</p>', '<p class="section-label" data-i18n="res_sec_pencapaian">Pencapaian</p>');
code = code.replace('<p class="section-label">Akademik</p>', '<p class="section-label" data-i18n="res_sec_akademik">Akademik</p>');
code = code.replace('<h2 class="section-title">Pendidikan</h2>', '<h2 class="section-title" data-i18n="res_title_pendidikan">Pendidikan</h2>');
code = code.replace('<button id="btn-more-cert"', '<button id="btn-more-cert" data-i18n="res_btn_more"');
code = code.replace('<button id="btn-less-cert"', '<button id="btn-less-cert" data-i18n="res_btn_less"');
code = code.replace('<button id="btn-more-training"', '<button id="btn-more-training" data-i18n="res_btn_more"');
code = code.replace('<button id="btn-less-training"', '<button id="btn-less-training" data-i18n="res_btn_less"');

fs.writeFileSync('resume.html', code);

let projCode = fs.readFileSync('projects.html', 'utf8');
projCode = projCode.replace('<p class="section-label reveal">Karya Saya</p>', '<p class="section-label reveal" data-i18n="prj_karya_label">Karya Saya</p>');
projCode = projCode.replace('<button class="filter-pill" data-filter="ui">UI Design</button>', '<button class="filter-pill" data-filter="ui" data-i18n="prj_filter_ui_d">UI Design</button>');
projCode = projCode.replace('>Lebih Banyak Project Coming Soon</h3>', ' data-i18n="prj_coming_soon">Lebih Banyak Project Coming Soon</h3>');
projCode = projCode.replace('<span>Lihat GitHub Repository</span>', '<span data-i18n="prj_view_github">Lihat GitHub Repository</span>');
fs.writeFileSync('projects.html', projCode);

let idxCode = fs.readFileSync('index.html', 'utf8');
idxCode = idxCode.replace('<span>Lihat Semua</span>', '<span data-i18n="idx_proj_btn">Lihat Semua</span>');
fs.writeFileSync('index.html', idxCode);

console.log('HTML files patched with data-i18n');
