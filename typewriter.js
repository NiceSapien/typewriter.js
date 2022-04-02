// Get HTML head element
var head = document.getElementsByTagName('HEAD')[0];

// Create new link Element to insert typewriter CSS file.
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'https://cdn.jsdelivr.net/npm/@nicesapien0/typewriter.js/typewriter.js';

// Append link element to HTML head
head.appendChild(link);

// default typewriter configuration
var typewriterConfig = {
  text: "Text",
  center: true}
// main div
const tYpewriter = document.getElementsByClassName('typewriter-effect');
// text div
const typeWriter = document.getElementById('typewriter-text');

// execute typewriter
function typewriter() {
	// display text in center if specified
	if (typewriterConfig.center == true) {
		tYpewriter[tYpewriter.length - 1].style.setProperty('justify-content', 'center');
	}
	
	// set the text
	typeWriter.innerHTML = typewriterConfig.text;
	typeWriter.style.setProperty('--characters', typewriterConfig.text.length);
}