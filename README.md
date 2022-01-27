# typewriter
# What is typewriter
Typewriter allows you to animate HTML elements that contain text.
[Preview](https://nicesapien.github.io/typewriter.js/preview.html)
# Implemention
#### Super-easy!
Include a script tag inside the head tag:
```html
<script src="https://cdn.jsdelivr.net/gh/NiceSapien/typewriter.js@dfe6594cead43fa0a9351108c5bd94208955d846/typewriter.js"></script>
```
Now, add a div element before the element you want to animate and set classes for both of them, make sure the class of first div is `typewriter-effect` and second div is `text`. You alsoe have to set id of second div to `typewriter-text`.
```html
<div class="typewriter-effect">
<div id="typewriter-text" class="text"></div>
</div>
```
And now the final, add another script tag and insert a line of code in it.
```html
<script>
  typewriter("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut purus vitae ex condimentum rutrum id ut velit. Suspendisse potenti. Integer vel placerat mi. Praesent neque justo, egestas nec lacus nec, laoreet venenatis tellus. Mauris bibendum mauris pulvinar velit ornare pellentesque. Duis tempus, erat quis interdum eleifend, urna nisi maximus augue, ac pulvinar mi tortor ac erat. Donec viverra erat in interdum dapibus. Quisque mi lectus, bibendum id tortor a, eleifend congue dolor. Proin viverra eu odio id imperdiet. Nulla suscipit faucibus purus, in molestie ipsum lobortis vitae.");
</script>
```
And yeah, you're done! Make sure to add this line after the div elements.
