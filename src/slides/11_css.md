
template: module-title
layout: false

# CSS
## CSS

---

layout: true
template: module
name: css-section

# CSS

---

## Method 1: CSS Imports

---

## CSS Imports |

```
example
```

???

Note that this works because we're using webpack with style-loader

(it effectively turns our css into a js object that we can import)


---
template: exercise
layout: false

# Exercise 10
## CSS Imports

---

## Method 2: CSS Modules

---

### Why?

> modular and reusable CSS!
> No more conflicts.
> Explicit dependencies.
> No global scope.

.footnote[
[CSS Modules](https://github.com/css-modules/css-modules)
]

---
## CSS Modules |

```
example
```

---
template: exercise
layout: false

# Exercise 11
## CSS Modules

---

## Deeper Learning

---

### CSS-in-JS

--

* list
* of 
* css
* in
* js
* options

---

### Styled Components

```
example
```

---

## Suggestions

---

> Find the way that works for you, and do it unapologetically

.footnote[
Scott Hanselman
]

???

People who use css-in-js REALLY like it

I've never felt like managing CSS scope was a problem

But it might depend on what you're building - 

Component library probably warrants css-in-js

---

### Separation Of Concerns

---

### Separation Of Concerns |

(the slide)

---

### Styling Belongs To Your Components

???

the important thing is that you have component-based css

via imported css, imported scss, css modules, css-in-js....

The main takeaway is that styles are not a separate concern from the rest of the component.

---
