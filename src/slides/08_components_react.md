
template: module-title
layout: false

# Components + React
## Components + React

---

layout: true
template: module
name: components-react-section

# Components + React

---

## Class Syntax

???

React Components are usually written with ES2015 class syntax.

---
template: exercise
layout: false

# Exercise 3
## Modern JavaScript: Class Syntax

---

## React.Component

???

every component in react is a class that extends  React.Component.

---
template: module-section
layout: false

# Components + React
## React.Component


```javascript
import React from 'react';

class FriendsList extends React.Component {

  // ...Details about this component

}
```

---

## render()

???

The only requirement for a react component

is that it implements a render() function

this tells React how to render this component to the browser

---
template: module-section
layout: true

# Components + React
## render()

---

```jsx
class FriendsList extends React.Component {
  render() {

    return ...what the component actually renders...

  }
}
```

???

Note: class instance methods!

---
class: no-footer

### Pure Functions

> The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

.footnote[
https://reactjs.org/docs/
]

???

one important thing to remember about render:

...

2 parts to "pure": 

1.doesn't modify state

2.returns same value with same args

...

let's look at some examples of pure & impure functions

to give you clarity on the difference

---
template: level-3
layout: true

# Components + React
## render()
### Pure Functions

---

```javascript
function add(a, b) {
  return a+b;
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
class Friend extends React.Component {
  render() {
    this.x = this.x - 1;
  }
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

drawing of triangle: 
props -> render -> ??? -> props

---

```jsx
class Friend extends React.Component {
  render() {
*    console.log(this.props.name, this.props.url);
  }
}
```

---
template: components-react-section
layout: false

## Output

???


How do we actually get something on the screen?

we know it goes in render()

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
class Friend extends React.Component {
  render() {
    return React.createElement('div');
  }
}
```

--

```html
<div />
```

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('button');
  }
}
```

```html
<button />
```

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', { id: 'friend-wrapper'});
  }
}
```

```html
<div id="friend-wrapper" />
```

???

can pass as many props as you want

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', { id: 'friend-wrapper'}, 'Hi!');
  }
}
```

```html
<div id="friend-wrapper">Hi!</div>
```

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement(
      'div', 
      { id: 'friend-wrapper'},
*     this.props.name
    );
  }
}
```

```html
<div id="friend-wrapper">Potatoes</div>
```

???

**Outputs are re-rendered as their inputs change**

React handles this for you!


---
template: level-3
layout: true
# Components + React
## Output
### render()

---

#### One-way Data Flow

drawing of triangle: 
props -> render -> ??? -> props

---

```jsx
class Friend extends React.Component {
  render() {
    if (this.props.name === 'Potatoes') {
      return React.createElement('div', null, 'We`re best friends!');
    }
    return React.createElement('div', null, 'We`re not best friends.');
  }
}
```

???

since our component is pure javascript

we can do things like conditional rendering

--

```html
<div>We`re best friends!</div>
```

--

```html
<div>We`re not best friends.</div>
```

???

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement('h1', null, 
        'Hello, ' + this.props.name
      )
    );
  }
}
```

```html
<div>
  <h1>Hello, Potatoes</h1>
</div>
```

???

we can also nest elements

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

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', { id: 'friend' },
      React.createElement('div', { id: 'title' },
        React.createElement('h1', null, this.props.name),
        React.createElement('h2', null, this.props.age)
      ),
      React.createElement('div', { id: 'photo' },
        React.createElement('a', { 
          href: '/friends/' + this.props.id },
          React.createElement('img', {
            src: this.props.profileImageUrl,
            alt: this.props.name,
          })
        )
      )
    )
  }
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
class Friend extends React.Component {
  render() {
    return React.createElement('div');
  }
}
```

???

An example from earlier.


--

```jsx
class Friend extends React.Component {
  render() {
    return <div />;
  }
}
```

???

Looks like the markup we want to render!

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', null,
      React.createElement('h1', null, 
        'Hello, ' + this.props.name
      )
    );
  }
}
```

???

another example - more complicated

---

```jsx
class Friend extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.name}
        </h1>
      </div>
    );
  }
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

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', { id: 'friend' },
      React.createElement('div', { id: 'title' },
        React.createElement('h1', null, this.props.name),
        React.createElement('h2', null, this.props.age)
      ),
      React.createElement('div', { id: 'photo' },
        React.createElement('a', { 
          href: '/friends/' + this.props.id },
          React.createElement('img', {
            src: this.props.profileImageUrl,
            alt: this.props.name,
          })
        )
      )
    )
  }
}
```

???

remember our most complicated createElement example ?

---

```jsx
class Friend extends React.Component {
  render() {
    return (
      <div id="friend">
        <div id="title">
          <h1>{this.props.name}</h1>
          <h2>{this.props.age}</h2>
        </div>
        <div id="photo">
          <a href={'/friends/' + this.props.id} >
            <img src={this.props.profileImageUrl} alt={this.props.name} />
          </a>
        </div>
      </div>
    );
  }
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

drawing of HTML separate from CSS from JS

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

And it takes HTML + JS to render them

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
class Friend extends React.Component {
  render() {
    return (
      <div id="friend">
        <div id="title">
          <h1>{this.props.name}</h1>
          <h2>{this.props.age}</h2>
        </div>
        <div id="photo">
          <a href={'/friends/' + this.props.id} >
            <img src={this.props.profileImageUrl} alt={this.props.name} />
          </a>
        </div>
      </div>
    );
  }
}
```

???

Does anyone want to guess what this transpiles to?

---

```jsx
class Friend extends React.Component {
  render() {
    return React.createElement('div', { id: 'friend' },
      React.createElement('div', { id: 'title' },
        React.createElement('h1', null, this.props.name),
        React.createElement('h2', null, this.props.age)
      ),
      React.createElement('div', { id: 'photo' },
        React.createElement('a', { 
          href: '/friends/' + this.props.id },
          React.createElement('img', {
            src: this.props.profileImageUrl,
            alt: this.props.name,
          })
        )
      )
    )
  }
}
```


---

template: exercise
layout: false

# Exercise 4
## Modern JavaScript: Working With Objects

---
template: exercise
layout: false

# Exercise 5
## JSX Fundamentals

---
