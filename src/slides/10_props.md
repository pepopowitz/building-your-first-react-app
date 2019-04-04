template: module-title
layout: false

# Props

---

layout: true
template: module
name: props-section

# Props

---

class: bg-contain
background-image: url('images/drawings/loop-1.jpg')

???
TODO: replace this image (props as inputs)

Our Component Inputs

---

## Should Never Be Modified

--

```jsx
function Friend(props) {
* props.name = 'Mr. Cat The Mystery Cat';

  return <div>{props.name}</div>
}
```

???

If a prop needs to be changed...

it's probably state (not a prop)

---

## Syntax

???

We've seen in some examples already

--

```jsx
*function Friend(props) {

  if (props.isLoading) {
    return null;
  }
  return <div>{props.name}</div>;
}
```

???

`props` arg is passed in

and it contains a property for each individual prop

---

## Syntax

```jsx
function Friend(props) {

* const { isLoading, name } = props;

  if (isLoading) {
    return null;
  }
  return <div>{name}</div>
}
```

???

object destructuring

---

## Syntax

```jsx
*function Friend({ isLoading, name }) {

  if (isLoading) {
    return null;
  }
  return <div>{name}</div>
}
```

???

argument destructuring

---

## Default Props

???

specify defaults for props

--

```jsx
function FriendProfile({ name, image }) {
  return <img alt={name} src={image} />
}

*FriendProfile.defaultProps = {
* image: 'http://placekitten.com/200'
*}
```

???

assign to the function afterward

---

## Default Props

```jsx
function FriendProfile(
  {
    name,
*   image = 'http://placekitten.com/200'
  }
) {
  return <img alt={name} src={image} />
}
```

???

with argument destructuring

---

## Children

???

Every component gets a special prop

--

```jsx
function Title({ children }) {
  return <h1 id="title">{children}</h1>;
}
```

???

...

example: a Title component

Title component gets children passed in

--

```jsx
<Title>Hello, friends!</Title>
```

???

...

the children are everything inside of the Title element

--

```html
<h1 id="title">Hello, friends!</h1>
```

???

...

this is what gets emitted to the DOM

note the children being wrapped inside the div

...

children prop is really powerful.

---

template: module-section
layout: true

# Props

## Children

---

### Composition

???

allows us to compose our components, instead of inherit them

easier to assemble building blocks

easier to refactor/change

(less brittle than inheritance)

---

template: exercise
layout: false

# Exercise 6

## Composition & `props.children`

???

building components that aid composition

---

template: props-section
layout: true

---

## Prop Validation

???

With so many components flying around, nested deeply inside each other...

how do we make sure our component is getting the data it needs?

---

## PropTypes

---

template: module-section
layout: true

# Props

## PropTypes

---

### Optional

???

You don't need them to build an app

---

```
npm install --save prop-types
```

???

Used to be part of React

Now an external library

---

```jsx
import propTypes from 'prop-types';

function FriendProfile({ name, image }) {
  return <img alt={name} src={image} />;
}

*FriendProfile.propTypes = {
* name: propTypes.string.isRequired,
* image: propTypes.string.isRequired,
*}
```

???

syntax: append after

---

```js
Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
```

???

arrays

shapes

isRequired

---

### Validate At Run-Time

???

You fire up a browser, view your component, & see an error in the console

---

```js
index.js:1446 Warning: Failed prop type: The prop `age` is
  marked as required in `FriendProfile`, but its value is `undefined`.
    in FriendProfile (at Exercise.js:10)
    in Friends (at Exercise.js:5)
    in Exercise (at App.js:13)
    in div (at App.js:12)
    in div (at App.js:7)
    in App (at exercise-6/index.js:6)
```

???

This is what the error looks like

---

template: props-section
layout: false

## Suggestions

---

template: module-section
layout: true

# Props

## Suggestions

---

### Turn off propType validation in production

???

propTypes are a development tool

---

template: props-section

## Deeper Learning

---

template: module-section
layout: true

# Props

## Deeper Learning

---

### TypeScript

```jsx
*interface FriendProfileProps {
* name: string;
* image: string;
*}

*function FriendProfile(props: FriendProfileProps) {
  const { name, image } = props;

  return <img alt={name} src={image} />;
}
```

???

- define interfaces of the required props
- ts compiler becomes part of build step
- will give you a **compile-time** error if it doesn't get those types
- can use for more than react components

---

### Flow

```jsx
*type FriendProfileProps = {
* name: string;
* image: string;
*}

*function FriendProfile(props: FriendProfileProps) {
  const { name, image } = props;

  return <img alt={name} src={image} />;
}
```

???

- looks similar to ts

- also compile-time

- better tooling from typescript

...

If I were starting a new project, I would use TypeScript.

---
