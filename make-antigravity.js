const fs = require('fs');
const path = require('path');

const svg = `<svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
  <title>Antigravity</title>
  <defs>
    <linearGradient id="antiGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ff7a00" />
      <stop offset="50%" stop-color="#3b82f6" />
      <stop offset="100%" stop-color="#00aaff" />
    </linearGradient>
  </defs>
  <path d="M21.751 22.607c1.34 1.005 3.35.335 1.508-1.508C17.73 15.74 18.904 1 12.037 1 5.17 1 6.342 15.74.815 21.1c-2.01 2.009.167 2.511 1.507 1.506 5.192-3.517 4.857-9.714 9.715-9.714 4.857 0 4.522 6.197 9.714 9.715z" fill="url(#antiGradient)" />
</svg>`;

fs.writeFileSync(path.join('assets', 'antigravity.svg'), svg);
console.log('Saved custom Antigravity SVG');
