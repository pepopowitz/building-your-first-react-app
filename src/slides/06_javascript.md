template: module-title
layout: false

# JavaScript

???

There are some JS tools we're going to be using today

that you might have heard of

---

layout: true
template: module
name: javascript-section

# JavaScript

---

## 1. npm

### Node Package Manager

???

problem solved: makes it easier to **manage dependencies**

---

layout: true
template: module-section

# JavaScript

## npm

---

---

class: bg-contain
background-image: url('images/drawings/dependencies-old-school.jpg')

???

oldest way (1): download a library & put it in a folder

---

class: bg-contain
background-image: url('images/drawings/dependencies-bower.jpg')

???

old way (2): bower

---

class: bg-contain
background-image: url('images/drawings/dependencies-npm.jpg')

???

new way (3): npm

...

we're going to use npm for a couple things

---

class: bg-contain, hide-footer
background-image: url('images/drawings/npm-dependencies.jpg')

???

1. to collect & organize our dependencies

---

class: bg-contain, hide-footer
background-image: url('images/drawings/npm-scripts.jpg')

???

to use npm, you need a manifest to identify all your dependencies.

this is the package.json.

A cool thing the package.json also allows you to do is define scripts

so 2. we'll **run app & tests**, via npm scripts

---

class: bg-contain, hide-footer
background-image: url('images/drawings/npm-chart.jpg')

???

TODO: redraw npm chart

(rolling 28 day downloads - drawing is based on old chart, up to >25 million)

NPM usage is growing at a crazy rate

Tons of packages

That means the user might have to download a ton of different libraries to their browser to run our app.

so...

---

layout: true
template: javascript-section

---

## 2. webpack

???

problem solved: large javascript downloads

---

template: module-section
class: bg-contain, hide-footer
background-image: url('images/drawings/webpack.jpg')

# JavaScript

## webpack

???

removes unused code

compresses & minifies our bundle

good development experience

---

layout: true
template: javascript-section

---

## 3. ES-modern

### ES6+, ES2015+, ...

???

problem solved: JavaScript for the web didn't change at all between 1999 and 2009.

It changed very little from 1999 to 2015.

But we've learned a lot about programming languages since 1999.

Especially the importance of readability & developer experience.

We're now getting new versions of JavaScript via the EcmaScript specification

And it's bringing lots of developer-friendly changes.

...

Let's look at some of those changes, because there are some that impact the way we can write React code.

---

template: exercise
layout: false

# Exercise 1

## Modern JavaScript: Modules

???

git checkout master

git pull

npm run test-exercise-1

---
