
template: module-title
layout: false

# Props
## Props

---

layout: true
template: module
name: props-section

# Props

---

## Component Inputs

(triangle drawing)

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

--

```jsx
function Friend(props) {
  if (props.isLoading) {
    return null;
  }
  return <div>{props.name}</div>
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
*   const { isLoading, name } = props;
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
class FriendImage extends React.Component {
  render() {
    const { name, url } = this.props;

    return <img alt={name} src={url} />
  }
}

*FriendImage.defaultProps = {
* url: 'http://placekitten.com/200'
*}
```

???

class, set afterward

---

## Default Props

```jsx
class FriendImage extends React.Component {
  render() {
    const { name, url } = this.props;
    
    return <img alt={name} src={url} />
  }

* static defaultProps = {
*   url: 'http://placekitten.com/200'
* }
}
```

???

class, static method

---
## Default Props

```jsx
function FriendImage({ name, url }) {
  return <img alt={name} src={url} />
}

*FriendImage.defaultProps = {
* url: 'http://placekitten.com/200'
*}
```

???

stateless function

---
## Default Props

```jsx
function FriendImage(
  { 
    name, 
*   url = 'http://placekitten.com/200' 
  }
) {
  return <img alt={name} src={url} />
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
<Title>Welcome to listy!</Title>
```

--

```jsx
function Title({ children }) {
  return (
    <div id="title">{children}</div>
  );
}
```

--
```html
<div id="title">
  Welcome to listy!
</div>
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

...

TODO - why is this valuable, and how do I see the value?

---
template: exercise
layout: false

# Exercise 8
## Composition & props.children

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
function FriendImage({ name, url }) {
  return <img alt={name} src={url} />;
}

*FriendImage.propTypes = {
* name: propTypes.string.isRequired,
* age: propTypes.number.isRequired,
*}
```

???

stateless functional

---

```jsx
class FriendImage extends React.Component {
  render() {
    const { name, url } = this.props;

    return <img alt={name} src={url} />
  }
}

*FriendImage.propTypes = {
* name: propTypes.string.isRequired,
* age: propTypes.number.isRequired,
*}
```

???

class + set after

---

```jsx
class FriendImage extends React.Component {
  render() {
    const { name, url } = this.props;

    return <img alt={name} src={url} />
  }

* static propTypes = {
*   name: propTypes.string.isRequired,
*   age: propTypes.number.isRequired,`
* }
}
```

???

class + static method


---
template: exercise
layout: false

# Exercise 9
## Defining PropTypes

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
*interface IFriendImageProps {
* name: string;
* age: number;
*}

*class FriendImage extends React.Component<IFriendImageProps, {}> {
  render() {
    const { name, url } = this.props;

    return <img alt={name} src={url} />
  }
}
```

???

will give you a compile-time error if it doesn't get those types

class

---

### TypeScript

```jsx
*interface IFriendImageProps {
* name: string;
* age: number;
*}

*function FriendImage(props: IFriendImageProps) {
  const { name, url } = props;

  return <img alt={name} src={url} />;
}
```

???

stateless functional


---

### Flow

```jsx
*type FriendImageProps = {
* name: string;
* age: number;
*};

*class FriendImage extends React.Component<FriendImageProps> {
  render() {
    const { name, url } = this.props;

    return <img alt={name} src={url} />
  }
}
```

???

class

---
### Flow

```jsx
*type FriendImageProps = {
* name: string;
* age: number;
*}

*function FriendImage(props: FriendImageProps) {
  const { name, url } = props;

  return <img alt={name} src={url} />;
}
```

???

stateless function

better tooling from typescript

---
