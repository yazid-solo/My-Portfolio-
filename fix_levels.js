const fs = require('fs');
let code = fs.readFileSync('data/profile.js', 'utf8');

code = code.replace(/level: "Dasar"/g, 'level: { id: "Dasar", en: "Basic" }');
code = code.replace(/level: "Mempelajari"/g, 'level: { id: "Mempelajari", en: "Learning" }');
code = code.replace(/level: "Dasar-Menengah"/g, 'level: { id: "Dasar-Menengah", en: "Basic-Intermediate" }');
code = code.replace(/level: "Menengah"/g, 'level: { id: "Menengah", en: "Intermediate" }');

fs.writeFileSync('data/profile.js', code);
console.log('profile.js levels translated');
