# Typewriter
# What is typewriter
Typewriter allows you to animate HTML elements that contain text.
Preview: ...
# Implemention
#### Super-easy!
Include a script tag inside the head tag:
```html
<script src="https://cdn.jsdelivr.net/gh/NiceSapien/typewriter.js@dfe6594cead43fa0a9351108c5bd94208955d846/typewriter.js"></script>
```
Now, add a div element before the element you want to animate and set classes for both of them, make sure the class of first div is `typewriter-effect` and second div is `text`. You alsoe have to set id of second div to `typewriter-text`.
```html
<div class="typewriter-effect">
<div id="typewriter-text" class="text">Lorem Ipsum</div>
</div>
```
And now the final, add another script tag and insert a line of code in it.
```html
<script>
  typewriter("YOUR_TEXT");
</script>
```
And yeah, you're done! Make sure to add this line after the div elements.
