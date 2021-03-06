template: module-title
layout: false

# Good Practices

---

layout: true
template: module
name: good-practices-section

# Good Practices

---

## create-react-app

### [bit.ly/create-react-app](https://bit.ly/create-react-app)

???

problem solved: setting up webpack & react & other dependencies is difficult

---

layout: false
template: module-section
class: bg-contain, no-footer
background-image: url('images/drawings/create-react-app.jpg')

# Good Practices

## create-react-app

???

spins up an app for us

sensible defaults

hides complexity of webpack, etc from us

if I were starting an app, I would use create-react-app.

---

## Thinking In React

### [reactjs.org/docs/thinking-in-react.html](https://reactjs.org/docs/thinking-in-react.html)

???

---

template: module-section
layout: true

# Good Practices

## Thinking In React

---

#### **Step 1:** Break The UI Into A Component Hierarchy

--

#### **Step 2:** Build A Static Version in React

--

#### **Step 3:** Identify The Minimal (but complete) Representation Of UI State

--

#### **Step 4:** Identify Where Your State Should Live

--

#### **Step 5:** Add Inverse Data Flow

---

template: good-practices-section
layout: true

---

## Isolate Complexity

???

Try to make as many simple, dumb, functional components as possible

Push the complicated things & stateful things to the edges

This makes it easier to understand most of your app

---

## Break Into Pieces

???

In general, this is a good strategy for problem-solving

It also is in regards to React

But it is ALSO a good strategy to make sure your components are small & easy to maintain.

---

## Code That Changes Together Should Live Together

???

I mean this in a couple ways:

1. our new way of looking at separation of concerns

markup + js + css

but also,

2. when organizing code in your app

When grouped by file type, you have to bounce around to work on a feature

When grouped by feature, all you need is in one folder

---
