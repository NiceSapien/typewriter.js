> The `main` branch has the latest, alpha versions. For stable versions, use [npm](https://www.npmjs.com/package/@nicesapien0/typewriter.js) instead.
# typewriter
# What is typewriter
Typewriter allows you to animate HTML elements that contain text.
[Preview](https://nicesapien.github.io/typewriter.js/preview.html)
# Implemention
For better explanation, see the [implemention guide](https://github.com/NiceSapien/typewriter.js/wiki/Implementation)

Include a script tag inside the head tag:
```html
<script src="https://unpkg.com/@nicesapien0/typewriter.js/typewriter.js"></script>
```
Now, add a div element before the element you want to animate and set classes for both of them, make sure the class of first div is `typewriter-effect` and second div is `text`. You also have to set id of second div to `typewriter-text` and class to `text`.
```html
<div class="typewriter-effect">
<div id="typewriter-text" class="text"></div>
</div>
```
Please avoid adding css yourself to these elements.

Now the final, add another script tag and configure typewriter.
```html
<script>
typewriterConfig = ["Your Text", true]
  typewriter();
</script>
```
After doing this, make sure to replace `Your Text` with text you want to display. In the second Array, you can set `true` or `false` as a boolean. If the value of second array is set to `true`, then the text will display in center.
