const https = require('https');
const fs = require('fs');
const path = require('path');

https.get('https://api.iconify.design/simple-icons:googlegemini.svg', res => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    // extract path
    const match = data.match(/d="([^"]+)"/);
    if(match) {
      const pathData = match[1];
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
  <defs>
    <linearGradient id="geminiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#4285f4" />
      <stop offset="33%" stop-color="#ea4335" />
      <stop offset="66%" stop-color="#fbbc04" />
      <stop offset="100%" stop-color="#34a853" />
    </linearGradient>
  </defs>
  <path d="${pathData}" fill="url(#geminiGradient)" />
</svg>`;
      fs.writeFileSync(path.join('assets', 'gemini.svg'), svg);
      console.log('Saved assets/gemini.svg');
    } else {
      console.log('Path not found');
    }
  });
});
