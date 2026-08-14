const fs = require('fs');
let text = fs.readFileSync('d:\\Web dan Apk\\portfolio\\reconstructed.js', 'utf8');

const badChunk = `        { name: "Node.js", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }
        { name: "CSS", level: "Dasar", pct: 55, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "JavaScript", level: "Dasar", pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Python", level: "Dasar", pct: 40, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "React", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Vue.js", level: "Mempelajari", pct: 25, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
        { name: "Node.js", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }`;

text = text.replace(badChunk, '        { name: "Node.js", level: "Mempelajari", pct: 30, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" }');
fs.writeFileSync('d:\\Web dan Apk\\portfolio\\reconstructed.js', text);
