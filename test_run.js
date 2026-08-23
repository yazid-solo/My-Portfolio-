// Mock DOM fully
global.window = { addEventListener: () => {}, location: { pathname: '/index.html' }, innerWidth: 1024, scrollTo: () => {} };
global.localStorage = { getItem: () => 'id', setItem: () => {} };
global.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} };
global.requestAnimationFrame = () => {};

const createMockElement = (id) => {
  const el = {
    id,
    innerHTML: '',
    style: {},
    classList: { add:()=>{}, remove:()=>{} },
    setAttribute: () => {},
    removeAttribute: () => {},
    appendChild: () => {},
    querySelector: () => createMockElement(),
    querySelectorAll: () => [],
    addEventListener: () => {}
  };
  return el;
};

const listeners = [];
global.document = {
  documentElement: { style: { setProperty: () => {} } },
  addEventListener: (e, cb) => {
    if(e === 'DOMContentLoaded') listeners.push(cb);
  },
  getElementById: (id) => createMockElement(id),
  querySelector: () => createMockElement(),
  querySelectorAll: () => [],
  head: createMockElement('head'),
  createElement: () => createMockElement()
};

global.Components = { init: () => {} };
global.Theme = { init: () => {} };
global.initThreeHero = () => {};

// Load scripts
require('./js/i18n.js');
const fs = require('fs');
let prof = fs.readFileSync('data/profile.js', 'utf8');
prof = prof.replace('const PROFILE =', 'global.PROFILE =');
prof = prof.replace('const PROJECTS =', 'global.PROJECTS =');
eval(prof);

eval(fs.readFileSync('js/main.js', 'utf8'));

// Trigger DOMContentLoaded
listeners.forEach(cb => cb());

console.log('Testing render functions...');
try {
  if (typeof renderHighlights === 'function') renderHighlights();
  if (typeof renderEducation === 'function') renderEducation();
  if (typeof renderExperience === 'function') renderExperience();
  if (typeof renderFeaturedProjects === 'function') renderFeaturedProjects();
  if (typeof initResume === 'function') initResume();
  if (typeof initProjects === 'function') initProjects();
  console.log('ALL RENDERING SUCCESSFUL');
} catch (e) {
  console.error('RUNTIME ERROR:', e);
}
