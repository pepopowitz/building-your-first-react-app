template: module-title
layout: false

# Components + React + JSX

---

layout: true
template: module
name: components-react-jsx-section

# Components + React + JSX

---

## A component can `return` 5\* things

???

can return five things\*

(actually more but we're only going to talk about 5)

---

template: module-section
layout: true

# Components + React + JSX

## Can `return`

---

### 1. Element/React Component

--

```jsx
function Friend(props) {
  return (
*   <div>
*     {props.name}
*   </div>
  );
}
```

???

return a DOM node

---

### 1. Element/React Component

```jsx
function Friend(props) {
  return (
*   <FriendImage friend={props.friend} />
  );
}
```

???

return another user-defined component.

---

### 2. Array

--

```jsx
function Friend(props) {
* return [
*   <FriendImage friend={props.friendA} />,
*   <FriendImage friend={props.friendB} />,
* ]
}
```

???

Let you return multiple elements

it's more valuable than you think

this example is not something you'll do a lot of...

---

### 2. Array

```jsx
function Friend(props) {
* return props.friends.map(friend =>
*   <Friend name={friend.name} />
* );
}
```

???

but this is!

mapping from an array to an array of react components.

---

### 3. Fragment

--

```jsx
import React, { Fragment } from 'react';

function Friend(props) {
  return (
*   <Fragment>
*     <FriendImage friend={props.friendA} />
*     <FriendImage friend={props.friendB} />
*   </Fragment>
  );
}
```

???

Nicer syntax than returning an array,

if you have multiple items to return

Fragment does not render anything to the DOM

It used to be that you had to wrap things in a div, instead of a fragment (pollution)

---

---

### 3. Fragment

```jsx
import React from 'react';

function Friend(props) {
  return (
*   <>
*     <FriendImage friend={props.friendA} />
*     <FriendImage friend={props.friendB} />
*   </>
  );
}
```

???

Shortcut for rendering a fragment

- don't need to import Fragment
- "empty" tag

### 4. String/Number

--

```jsx
function Friend(props) {
* return props.name;
}
```

???

These are rendered as text nodes in the DOM.

---

### 5. null

--

```jsx
function Friend() {
* return null;
}
```

???

renders nothing.

you could do this, but you won't.

..

you WILL do this, though

---

### 5. null

```jsx
function Friend(props) {
* if (props.isLoading) {
*   return null;
* }
  return <div>{props.name}</div>
}
```

???

early-exit from a component

---

template: exercise
layout: false

# Exercise 5

## What can a component render?

???

the different types of things a component can render

---

template: components-react-jsx-section
layout: false

## Common Errors

---

template: module-section
layout: true

# Components + React + JSX

## Common Errors

---

### Component Names Must Be Capitalized

.error[

> The tag &lt; friendsList &gt; is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.`
> ]

---

### Components Must Return Something

.error[

> Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.`
> ]

---

### Components Must Return Something

```jsx
function Friend(props) {
  <div>{props.name}</div>;
}
```

???

you'll write components like this, many times

the problem?

---

### Components Must Return Something

```jsx
function Friend(props) {
  return <div>{props.name}</div>;
}
```

???

it's not actually RETURNING the jsx.

---

### Components Must Return Something

```jsx
export default function(props) {
  return
    <div>
      {props.name}
    </div>;
}
```

???

another thing you'll do plenty of times

what's wrong?

that return is returning!

---

### Components Must Return Something

```jsx
export default function(props) {
* return (
    <div>
      {props.name}
    </div>
* );
}
```

???

we need parens on the same line, to tell it not to just terminate that statement.

---
