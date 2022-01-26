// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';
console.log
link.href = 'https://nicesapien.github.io/typewriter.js/typewriter.js';
console.log("hmm");

// Append link element to HTML head
head.appendChild(link);

function typewriter(text) {
const typeWriter = document.getElementById('typewriter-text');

typeWriter.innerHTML = text;
typeWriter.style.setProperty('--characters', text.length);
}