template: module-title
layout: false

# Components + React

---

layout: true
template: module
name: components-react-section

# Components + React

---

## Components Are Functions

---

template: module-section
layout: false

# Components + React

## Component Functions

```javascript
import React from 'react';

function FriendsList {
  // ...Details about this component
}
```

???

- import react
- FriendsList component is a function

---

class: no-footer

### Pure Functions

> [a component function...] should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

.footnote[
https://reactjs.org/docs/
]

???

Ideally, these component functions should be pure

...

2 parts to "pure":

1.doesn't modify state

2.returns same value with same args

...

let's look at some examples of pure & impure functions

to give you clarity on the difference

---

template: level-2
layout: true

# Components + React

## Pure Functions

---

```javascript
function add(a, b) {
  return a + b;
}
```

--

##### Pure 😊

???

our example from earlier

pure

doesn't modify the state of anything

returns the same result each time

---

```javascript
function now() {
  return new Date();
}
```

--

##### Impure 😟

???

impure

it doesn't return the same result each time

---

```jsx
function Friend() {
  this.x = this.x - 1;
}
```

--

##### Impure 😟

???

impure

it modifies the state of the component

note: I used the worried face, not sad face

cuz impure functions cause you to worry about side-effects & unpredictability

---

template: components-react-section

## Inputs

---

template: module-section
layout: true

# Components + React

## Inputs

---

> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

.footnote[
https://reactjs.org/docs/
]

---

template: level-3
layout: true

# Components + React

## Inputs

### props

---

class: bg-contain
background-image: url('images/drawings/loop-1.jpg')

???

TODO: redraw props as inputs to function

---

```jsx
function Friend(props) {
*  console.log(props.name, props.url);
}
```

???

- taking in props

---

template: components-react-section
layout: false

## Output

???

How do we actually get something on the screen?

we know it goes in our function

but what actually renders markup?

---

template: module-section
layout: false

# Components + React

## Output

### React.createElement()

---

template: level-3
layout: true

# Components + React

## Output

### createElement()

---

```jsx
function Friend() {
  return React.createElement('div');
}
```

???

create a simple element

--

```html
<div />
```

???

emits a div

---

```jsx
function Friend() {
  return React.createElement('button');
}
```

```html
<button />
```

???

other element types

---

```jsx
function Friend() {
  return React.createElement('div', { id: 'friend-wrapper' });
}
```

```html
<div id="friend-wrapper" />
```

???

- 2nd argument (optional): "props"

- props to apply to rendered element

- pass as many props as you want

---

```jsx
function Friend() {
  return React.createElement('div', { id: 'friend-wrapper' }, 'Hi!');
}
```

```html
<div id="friend-wrapper">Hi!</div>
```

???

- 3rd arg (optional): children

- text node, in this example

---

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    { id: 'friend-wrapper'},
*   props.name
  );
}
```

```html
<div id="friend-wrapper">Potatoes</div>
```

???

- props as text node!

- **Outputs are re-rendered as their inputs change**

- React handles this for you!

---

```jsx
function Friend(props) {
  if (props.name === 'Potatoes') {
    return React.createElement('div', null, 'We`re best friends!');
  }
  return React.createElement('div', null, 'We`re not best friends.');
}
```

???

since our component is pure javascript

we can do things like conditional rendering

--

```html
<div>We`re best friends!</div>
```

???

- shows when name is Potatoes

--

```html
<div>We`re not best friends.</div>
```

???

- shows in other cases

---

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, ' + props.name)
  );
}
```

```html
<div>
  <h1>Hello, Potatoes</h1>
</div>
```

???

- nest calls to React.createElement

- emits nested elements

...

you can build an entire React app using React.createElement.

but here's the problem with react.createlement.

Most of the things we render to a webpage aren't 1 or 2 html elements.

---

```html
<div id="friend">
  <div id="title">
    <h1>Potatoes</h1>
    <h2>4 months</h2>
  </div>
  <div id="photo">
    <a href="/friends/potatoes">
      <img src="/friends/potatoes/image" alt="Potatoes" />
    </a>
  </div>
</div>
```

???

They're often more like this - and this is even on the small side.

(describe html)

...

here's what our createElement statement looks like for this -

---

class: no-footer, medium

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    { id: 'friend' },
    React.createElement(
      'div',
      { id: 'title' },
      React.createElement('h1', null, props.name),
      React.createElement('h2', null, props.age)
    ),
    React.createElement(
      'div',
      { id: 'photo' },
      React.createElement(
        'a',
        {
          href: '/friends/' + props.id,
        },
        React.createElement('img', {
          src: props.profileImageUrl,
          alt: props.name,
        })
      )
    )
  );
}
```

???

This is not that easy to read

I'd even describe it as "barfy"

...

this is where another library comes in

---

template: module-section
layout: false

# Components + React

## Output

### JSX

---

template: level-3
layout: true

# Components + React

## Output

### JSX

---

> JSX is an XML-like syntax extension to ECMAScript without any defined semantics.

.footnote[
https://facebook.github.io/jsx/
]

???

It's XML in Javascript

...

here's what it looks like

---

```jsx
function Friend() {
  return React.createElement('div');
}
```

???

as createElement: An example from earlier.

--

```jsx
function Friend() {
  return <div />;
}
```

???

as jsx: Looks like the markup we want to render!

---

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'Hello, ' + props.name)
  );
}
```

???

another example - more complicated

--

```jsx
function Friend(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
    </div>
  );
}
```

???

{} - you want to evaluate a js expression there

...

why would we do this to ourselves?

why put xml in javascript?

it's like a horror film from 2004.

---

#### React.createElement Is Verbose

---

class: no-footer, medium

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    { id: 'friend' },
    React.createElement(
      'div',
      { id: 'title' },
      React.createElement('h1', null, props.name),
      React.createElement('h2', null, props.age)
    ),
    React.createElement(
      'div',
      { id: 'photo' },
      React.createElement(
        'a',
        {
          href: '/friends/' + props.id,
        },
        React.createElement('img', {
          src: props.profileImageUrl,
          alt: props.name,
        })
      )
    )
  );
}
```

???

remember our most complicated createElement example ?

---

```jsx
function Friend(props) {
  return (
    <div id="friend">
      <div id="title">
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
      <div id="photo">
        <a href={'/friends/' + props.id}>
          <img src={props.profileImageUrl} alt={props.name} />
        </a>
      </div>
    </div>
  );
}
```

???

---

#### Optional

???

you can build an entire app with createElement

we'll use it today because it makes your code much more readable

...

who still doesn't like this idea?

(poll for separation of concerns)

REPEAT THEIR ANSWER!!!!

---

#### Separation Of Concerns

---

class: bg-contain
background-image: url('images/drawings/slicing-horizontal.jpg')

???

React components with JSX look like HTML + JS

the instinct is to separate them

---

class: no-footer

#### Separation Of Technologies

> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

.footnote[
https://reactjs.org/docs/
]

???

A component's concern is rendering

It's that friend

or that list of friends

---

class: bg-contain
background-image: url('images/drawings/slicing-vertical.jpg')

???

And it takes HTML + JS to render them

You can think of components changing the way we're slicing the app

...

The rub...

---

#### Browsers Just Don't Understand

???

So we have to transpile.

It is an extra step between our code & the browser.

But remember, we're already using webpack to minimize our dependencies from npm

---

```jsx
function Friend(props) {
  return (
    <div id="friend">
      <div id="title">
        <h1>{props.name}</h1>
        <h2>{props.age}</h2>
      </div>
      <div id="photo">
        <a href={'/friends/' + props.id}>
          <img src={props.profileImageUrl} alt={props.name} />
        </a>
      </div>
    </div>
  );
}
```

???

Does anyone want to guess what this transpiles to?

---

class: no-footer, medium

```jsx
function Friend(props) {
  return React.createElement(
    'div',
    { id: 'friend' },
    React.createElement(
      'div',
      { id: 'title' },
      React.createElement('h1', null, props.name),
      React.createElement('h2', null, props.age)
    ),
    React.createElement(
      'div',
      { id: 'photo' },
      React.createElement(
        'a',
        {
          href: '/friends/' + props.id,
        },
        React.createElement('img', {
          src: props.profileImageUrl,
          alt: props.name,
        })
      )
    )
  );
}
```

---

template: exercise
layout: false

# Exercise 3

## Modern JavaScript: Working With Variables

???

New features to make it easier to work with objects

---

template: exercise
layout: false

# Exercise 4

## JSX Fundamentals

???

different things you can do with jsx

---
