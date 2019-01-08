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

Our Component Inputs

---

## Should Never Be Modified

--

```jsx
function Friend(props) {
* props.name = 'Mr. Cat The Mystery Cat';

  if (props.isLoading) {
    return null;
  }
  return <div>{props.name}</div>
}
```

???

If a prop needs to be changed...

it's probably state (not a prop)

---

## Syntax

???

Depends on how you've implemented your component.

--

```jsx
function Friend(props) {
  if (props.isLoading) {
    return null;
  }
  return <div>{props.name}</div>;
}
```

???

stateless function

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

## Syntax

```jsx
class Friend extends React.Component {
  render() {
*   const { isLoading, name } = this.props;
    if (isLoading) {
      return null;
    }
    return <div>{name}</div>
  }
}
```

???

class syntax + destructuring

---

## Default Props

???

specify defaults for props

--

```jsx
class FriendProfile extends React.Component {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }
}

*FriendProfile.defaultProps = {
* image: 'http://placekitten.com/200'
*}
```

???

class, set afterward

---

## Default Props

```jsx
class FriendProfile extends React.Component {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }

* static defaultProps = {
*   image: 'http://placekitten.com/200'
* }
}
```

???

class, static method

---

## Default Props

```jsx
function FriendProfile({ name, image }) {
  return <img alt={name} src={image} />
}

*FriendProfile.defaultProps = {
* image: 'http://placekitten.com/200'
*}
```

???

stateless function

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

stateless function & destructuring - default arguments

---

## Children

???

Every component gets a special prop

--

```jsx
<Title>Hello, friends!</Title>
```

--

```jsx
function Title({ children }) {
  return <div id="title">{children}</div>;
}
```

--

```html
<div id="title">Hello, friends!</div>
```

???

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

# Exercise 8

## Composition & props.children

???

building components that aid composability

---

template: props-section
layout: true

---

## How do we validate props?

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

---

```
npm install --save prop-types
```

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

stateless functional

---

```jsx
import propTypes from 'prop-types';

class FriendProfile extends React.Component {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }
}

*FriendProfile.propTypes = {
* name: propTypes.string.isRequired,
* image: propTypes.string.isRequired,
*}
```

???

class + set after

---

```jsx
import propTypes from 'prop-types';

class FriendProfile extends React.Component {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }

* static propTypes = {
*   name: propTypes.string.isRequired,
*   image: propTypes.string.isRequired,
* }
}
```

???

class + static method

---

```javascript
static propTypes = {
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

---

template: exercise
layout: false

# Exercise 9

## Defining PropTypes

???

Skip for now!

This is optional - finish this on your own, when you have time.

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

*class FriendProfile extends React.Component<FriendProfileProps, {}> {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }
}
```

???

will give you a compile-time error if it doesn't get those types

class

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

stateless functional

---

### Flow

```jsx
*type FriendProfileProps = {
* name: string;
* image: string;
*};

*class FriendProfile extends React.Component<FriendProfileProps> {
  render() {
    const { name, image } = this.props;

    return <img alt={name} src={image} />
  }
}
```

???

class

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

stateless function

better tooling from typescript

...

If I were starting a new project, I would use TypeScript.

---
