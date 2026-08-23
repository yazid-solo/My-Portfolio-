const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const dom = new JSDOM('<html lang="id"><body></body></html>', { runScripts: 'dangerously' });
global.window = dom.window;
global.document = dom.window.document;
global.localStorage = { getItem: () => 'id' };
try {
  dom.window.eval(fs.readFileSync('js/i18n.js', 'utf8'));
} catch(e) {
  console.error('ERROR:', e.stack || e);
}
