const https = require('https');
const fs = require('fs');
const path = require('path');

const fetchSVG = (url, filepath, color) => {
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      // Replace currentColor with actual color
      let svgContent = data.replace(/currentColor/g, color);
      fs.writeFileSync(filepath, svgContent);
      console.log('Saved ' + filepath);
    });
  });
};

fetchSVG('https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/antigravity.svg', path.join('assets', 'antigravity.svg'), '#8b5cf6');
fetchSVG('https://cdn.jsdelivr.net/npm/@lobehub/icons-static-svg@latest/icons/kiro.svg', path.join('assets', 'kiro.svg'), '#f59e0b');
