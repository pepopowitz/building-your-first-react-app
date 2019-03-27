template: module-title
layout: false

# Components

---

layout: true
template: module
name: components-section

# Components

---

## The "Component" Mindset

???

Components are React's biggest contribution to web dev

It's a mindset shift

When we were doing MVC/MVVM,

we used to think in terms of "controllers" and "views"

We did this because of the principle of "separation of concerns"

But React says controllers & views are the same concern - a component.

---

template: module-section
layout: true

# Components

## The "Component" Mindset

---

class: bg-contain, hide-footer
background-image: url('images/drawings/twitter-1.jpg')

???

so instead of this page having a controller & a view,

---

class: bg-contain, hide-footer
background-image: url('images/drawings/twitter-2.jpg')

???

it really has a handful of components

building blocks

and each of those components is a concern

---

class: bg-contain, hide-footer
background-image: url('images/drawings/twitter-3.jpg')

???

and it goes further than that -

each of those components is composed...

---

class: bg-contain, hide-footer
background-image: url('images/drawings/twitter-4.jpg')

???

of more components

---

template: exercise
layout: false

# Exercise 2

## Identifying Components

---

template: level-3
layout: true

# Components

## Exercise 2

### Identify Components

---

#### Draw the boundaries of individual components on each page

---

template: exercise
class: bg-contain, no-footer
background-image: url('images/drawings/component-exercise-1.jpg')

---

template: exercise
class: bg-contain, no-footer
background-image: url('images/drawings/component-exercise-2.jpg')

---

template: components-section

## Suggestions

---

template: module-section
layout: true

# Components

## Suggestions

---

### Favor small components

???

The **deconstruction** of UI's into small components is crucial to successful React development.

---

### Components are more about isolation than reuse

???

It's easy to think we are doing this to make reuse easier

But it's really more about isolation

---

class: bg-contain
background-image: url('images/drawings/building-blocks.jpg')

???

Components are like building blocks.

Smaller ones that do fewer things are easier to understand

And easier to assemble (so they aid reuse).

---
