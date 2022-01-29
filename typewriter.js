// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/npm/@nicesapien0/typewriter.js/typewriter.js';

// Append link element to HTML head
head.appendChild(link);

var typewriterConfig = ["Your Text", true];
const tYpewriter = document.getElementsByClassName('typewriter-effect');
function typewriter() {
  const typeWriter = document.getElementById('typewriter-text');
  if (typewriterConfig[1] == true) {
    tYpewriter[tYpewriter.length - 1].style.setProperty('justify-content', 'center');
  }
  typeWriter.innerHTML = typewriterConfig[0];
  typeWriter.style.setProperty('--characters', typewriterConfig[0].length);
}