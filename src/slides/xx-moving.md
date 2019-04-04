---
## Class Syntax

???

React Components are usually written with ES2015 class syntax.
---

template: exercise
layout: false

# Exercise 12

## Modern JavaScript: Class Syntax

???

instructor-led, follow along

---

## React.Component

???

every component in react is a class that extends React.Component.

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

template: components-react-jsx-section
layout: false

## Do We Need Class Syntax?

--

```jsx
*class Friend extends React.Component {
* render() {
    if (this.props.isLoading) {
      return null;
    }
    return <div>{this.props.name}</div>
* }
*}
```
