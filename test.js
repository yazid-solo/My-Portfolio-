const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<html lang="id"><body></body></html>', { runScripts: 'dangerously' });
global.window = dom.window;
global.document = dom.window.document;
try {
  dom.window.eval(fs.readFileSync('data/profile.js', 'utf8'));
  console.log('profile.js loaded');
  dom.window.eval(fs.readFileSync('js/i18n.js', 'utf8'));
  console.log('i18n loaded');
  dom.window.eval(fs.readFileSync('js/main.js', 'utf8'));
  console.log('main loaded');
} catch (e) {
  console.error('ERROR:', e);
}
