
template: module-title
layout: false

# JavaScript
## JavaScript

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

--

drawing of downloading a library?

???

oldest way (1): download a library & put it in a folder

--

drawing of bower

???

old way (2): bower

--

drawing of npm

???

new way (3): npm

...

we're going to use npm for a couple things

---

draw package dependencies

???

1. to collect & organize our dependencies

---

draw scripts

???

to use npm, you need a manifest to identify all your dependencies. 

this is the package.json.

A cool thing the package.json also allows you to do is define scripts 

so 2. we'll **run app & tests**, via npm scripts 

---

chart of npm growth

???

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

# JavaScript
## webpack

drawing of webpack turning dependencies into bundle

???

removes unused code

compresses & minifies our bundle

good development experience

---

## 3. create-react-app

???

problem solved: setting up webpack & react & other dependencies is difficult

---
layout: true
template: module-section

# JavaScript
## create-react-app
---

drawing of cra creating an app for us

???

spins up an app for us

sensible defaults

hides complexity of webpack, etc from us

---

drawing of ejected cra

???

we've **ejected**, so some complexity is back

if I were starting an app, I would use create-react-app.

---
layout: true
template: javascript-section
---

## 4. ES-modern
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

Follow along!

---
