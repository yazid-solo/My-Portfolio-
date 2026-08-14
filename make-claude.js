const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://api.iconify.design/simple-icons:claude.svg', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/d="([^"]+)"/);
    if(match) {
      const pathData = match[1];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" rx="8" fill="#d97757" />
  <g transform="translate(4, 4) scale(1)">
    <path d="${pathData}" fill="#ffffff" />
  </g>
</svg>`;
      fs.writeFileSync(path.join('assets', 'claude.svg'), svg);
      console.log('Saved assets/claude.svg');
    } else {
      console.log('Path not found');
    }
  });
});
