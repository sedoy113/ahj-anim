import Collapse from './Collapse';
import Callback from './Callback';
import Liker from './Liker';

// COLLAPSE
const collapseCSS = new Collapse(document.querySelector('section.collapseCSS'));
collapseCSS.onCSS();
const collapseJS = new Collapse(document.querySelector('section.collapseJS'));
collapseJS.onJS();

// CALLBACK
const callback = new Callback(document.querySelector('section.callback'));
callback.init();

// LIKER
const liker = new Liker(document.querySelector('section.liker'));
liker.init();
