template: module-title
layout: false

# Legacy Components

???

Prior to v16.8

---

layout: true
template: module
name: legacy-section

# Legacy Components

---

template: exercise
layout: false

# Exercise 12

## Modern JavaScript: Class Syntax

???

Introduced recently

Used by legacy react components

---

## React.Component

???

legacy components are classes that extend React.Component.

---

template: module-section
layout: false

# Legacy Components

## React.Component

```javascript
import React from 'react';

class FriendDetail extends React.Component {
  // ...Details about this component
}
```

---

## render()

???

The only requirement for a react **class** component

is that it implements a render() function

- comparable to the return value of a functional component

---

template: module-section
layout: false

# Legacy Components

## render()

```jsx
class FriendDetail extends React.Component {
  render() {
    return <div>...</div>;
  }
}
```

???

Note: class instance methods!

---

## Props

???

Props are accessed differently

---

template: module-section
layout: false

# Legacy Components

## Props

```jsx
class FriendDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
```

???

props are accessed on "this"

- refers to the instance of the class that's being rendered

---

template: exercise
layout: false

# Exercise 13

## Converting Components

???

10 minutes

convert between a modern & legacy component

---

template: exercise
layout: false

# Exercises 14 & 15

## Legacy State Management & Side Effects

???

10 minutes

---

## Suggestions

---

template: module-section

# Legacy Components

## Suggestions

### Don't Rewrite Everything

---
