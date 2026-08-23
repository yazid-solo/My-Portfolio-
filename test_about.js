const fs = require('fs');
const jsdom = require('jsdom');
const { JSDOM, VirtualConsole } = jsdom;

const virtualConsole = new VirtualConsole();
virtualConsole.on("error", (e) => {
  console.error("VIRTUAL CONSOLE ERROR:", e);
});
virtualConsole.on("log", (l) => {
  console.log("VIRTUAL CONSOLE LOG:", l);
});

const html = fs.readFileSync('about.html', 'utf8');

const dom = new JSDOM(html, {
  runScripts: 'dangerously',
  resources: 'usable',
  virtualConsole
});

dom.window.addEventListener('load', () => {
  console.log('Load event fired.');
});

setTimeout(() => {
  console.log('Timeout finished.');
}, 2000);
