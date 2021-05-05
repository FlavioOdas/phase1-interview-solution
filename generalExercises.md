#### 1. Assess your knowledge level on the following languages (1 = none; 5 = expert):

- Vanilla JS - 5
- jQuery - 5
- HTML/HTML5 - 5
- CSS/CSS3 - 5
- Ajax - 5
- AngularJS - 3
- Bootstrap - 5

---

#### 2. What is the width of a container with 100px of width and 5px of padding?

`110px` BUT if the container contains the CSS property `box-sizing: border-box` its size will remain at `100px`

---

#### 3. How to apply a click event to all paragraphs except for the last?

```js
const paragraphs = $("p:not(:last-child)");
paragraphs.click(() => ......)
```

---

#### 4. Why does the alert show "Jack" first and then undefined?

```js
function identity() {
  var name = 'Jack';
  alert(name);
  return;
  name;
}

var who = identity();
alert(who);
```

A: The first `alert()` comes right after the variable `name` is declared (which receives "Jack" as its content) inside the function, so it will always alert `Jack` correctly.
The second alert receives the returning value of the function `identity()`, the problem is right on the `return` statement, usually when we define a `return` the value must come right after it, and that's not what's happening there, so the function is returning nothing (or undefined) and the variable `name` will never be accessible.
