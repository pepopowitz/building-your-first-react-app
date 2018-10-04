
template: module-title
layout: false

# React
## What Is React?

???

There are a bunch of things that react is...

the most significant one, for me, is...

---

layout: true
template: module
name: react-section

# React Is

---

## Simplicity
## +
## Scalability

???

React makes it easy to scale simple, understandable code to a large app.

simplicity: hope you can experience today

---
template: module-section
# React Is
## Scalable
### 30,000
--

#### The number of React components in Facebook's codebase

.footnote[
[Dan Abramov](https://medium.com/@dan_abramov/hey-thanks-for-feedback-bf9502689ca4)
]

???

scalability: 

number of components in Facebook's codebase

source: https://medium.com/@dan_abramov/hey-thanks-for-feedback-bf9502689ca4
  

---
layout: true
template: react-section

---

> A JavaScript library for building user interfaces

.footnote[
https://reactjs.org/
]
???

from their site

dumb - of course that's what it is

but there's meaning here - it is ONLY a UI framework

---

## The V in MVC

???

And nothing more

(maybe the C)

---
layout: true
template: module-section
name: react-is-v-in-mvc

# React Is
## The V in MVC
---

### Angular : monolith :: 
### React : microlibraries

---

> Choosing between Angular and React is like choosing between buying an off-the-shelf computer and building your own with off-the-shelf parts.

.footnote[
  [Cory House](https://medium.freecodecamp.com/angular-2-versus-react-there-will-be-blood-66595faafd51)
]

---
template: react-section
layout: true

---

## Declarative

???

What does that mean?

Well, it means we write code that says **WHAT** to display

**not HOW** to display it

---
layout: true
template: module-section
name: react-is-declarative

# React Is
## Declarative
---

### How do you get to my house?

--

**Imperative**: directions

???

imperative

--

**Declarative**: address

???

declarative - abstracts the imperative

Obviously some code, at some point,

has to be written on HOW to display

---

### Imperative code is abstracted
### so that we can call it declaratively

???

But we abstract the imperative code

So our app can call it declaratively.

---

```javascript
var kittensComingToMyParty = [];

for (var i = 0; i < kittens.length; i++) {
  var kitten = kittens[i];
  if (kitten.rsvp === true) {
    kittensComingToMyParty.push(kitten);
  }
}
```

???

if I wanted to know which kittens were coming to my party, I could write code like this

imperative

--

```javascript
var kittensComingToMyParty = kittens.filter(
  kitten => kitten.rsvp === true);
```

???

...

declarative

...

Why do we care about this?

---

> Declarative views make your code more predictable and easier to debug.

.footnote[
https://facebook.github.io/react/
]

???

When your code is less worried about HOW to do things, 

it's less cognitive load on the reader.

---
template: react-section
layout: true

---

## Component-Based

---
template: module-section

# React Is
## Component-Based

> Build encapsulated components that manage their own state, then compose them to make complex UIs.

.footnote[
https://facebook.github.io/react/
]

???

(read)

...

We'll talk more about components in a bit

...

but before we do, we need to take a step backwards from even React

Let's talk about JavaScript.

---
