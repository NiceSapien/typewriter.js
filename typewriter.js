// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/gh/NiceSapien/typewriter.js@e7e27456d4bf70b25197ab7e5f39df84f2e1fe1d/typewriter.css';

// Append link element to HTML head
head.appendChild(link);

function typewriter(text) {
const typeWriter = document.getElementById('typewriter-text');

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
}
