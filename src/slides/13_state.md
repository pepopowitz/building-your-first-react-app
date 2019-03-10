template: module-title
layout: false

# State

???

Who has heard things about managing state in react?

...

state mgmt in react is a controversial topic.

---

layout: true
template: module-section
name: state-module-section

# State

---

layout: true
template: module
name: state-section

# State

---

class: bg-contain
background-image: url('images/drawings/loop-2-state.jpg')

---

template: module-section
layout: true

# State

## Props vs. State

---

```jsx
class FriendDetail extends React.Component {
  render() {
    return <img
*     alt={this.props.name}
*     src={this.props.url} />
  }
}
```

.footnote[
props
]

???

syntactical differences

---

```jsx
class FriendDetail extends React.Component {
  render() {
    return <img
*     alt={this.state.name}
*     src={this.state.url} />
  }
}
```

.footnote[
state
]

???

but also, conceptual:

---

class: bg-contain
background-image: url('images/drawings/props-vs-state.jpg')

???

both are inputs to the component, but...

---

class: bg-contain
background-image: url('images/drawings/props-vs-state-2.jpg')

???

props are passed into a component

state is internal to a component

Think about it from a responsibility viewpoint

Who should be the source of truth for this data?

This component? It's state.

Someone else? It's props passed in.

---

template: state-section
layout: true

---

class: no-footer

## Stateful Components Must Extend React.Component

```jsx
class FriendDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.state.friend.name}</h1>
        <img alt={this.state.friend.name} src={this.state.friend.url} />
      </div>
    );
  }
}
```

???

we've been looking at a lot of stateless functions

but to have a component with state...it has to be a class component.

---

## State Is Passed Into Child Components As Props

---

class: bg-contain
background-image: url('images/drawings/state-turns-into-props.jpg')

---

class: no-footer

```jsx
class FriendDetail extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.state.friend.name}</h1>
*       <FriendImage friend={this.state.friend} />
      </div>
    );
  }
}
```

???

here, it's state.

we pass friend=this.state.friend

--

```jsx
class FriendImage extends React.Component {
  render() {
    return (<img
*     alt={this.props.friend.name}
*     src={this.props.friend.url} />
    );
  }
}
```

???

the child component gets that friend in its props

...

looking back at our triangle, we can fill in some more...

---

class: bg-contain
background-image: url('images/drawings/loop-3-setstate.jpg')

???

we can fill in our final gap, too -

the function that will update these inputs, or at least the state, is called...

---

## setState

--

```jsx
class ThemeSwitcher extends React.Component {
  render() {
    // ...
  }

  switchTheme() {
*   this.setState({
*     theme: 'light'
*   });
  }
}
```

???

simple api

tell it what to update

---

template: state-module-section
class: bg-contain
background-image: url('images/drawings/loop-3-setstate.jpg')

## Unidirectional Flow

???

in React, we call this a unidirectional flow of data

there's no two-way binding

things get passed into a component,

the data source gets edited,

and then new things get passed in, and react re-renders our component.

---

template: module-section
layout: true

# State

## setState

---

class: no-footer

### State Is Merged

```javascript
{
  name: 'Flower',
  colors: ['black', 'white']
}
```

???

before

--

```javascript
this.setState({
  name: 'Sneezy',
});
```

--

```javascript
{
* name: 'Sneezy',
  colors: ['black', 'white']
}
```

???
after

more things to know about setState:

---

### setState({ })

```javascript
this.setState({
  name: 'Sneezy',
});
```

???

the basic way to call

but you can't always use it.

---

### Asynchronous

???

because setState calls are asynchronous

and they might be batched, for performance reasons

what that means is that you can't modify your state based on the current state

because you don't necessarily know what that current state is when the state modification actually executes.

--

```javascript
this.setState({
  theme: this.state.theme === 'light' ? 'dark' : 'light',
});
```

???

in this case, if setstate got called a couple times very quickly,

we don't reliably know what this.state.theme is when it is called.

so it might set it to 'light' three times in a row

...

to avoid this weirdness, there's a second way to call setState.

---

### setState(prevState => { })

???

with a function as an argument

and that function has a parameter - the previous state.

--

```javascript
this.setState(prevState => {
  return {
    theme: prevState.theme === 'light' ? 'dark' : 'light',
  };
});
```

???

## this allows us to compare to previous state

template: state-section

## Initialization

???

there are a couple ways we can initialize state

---

template: state-module-section

## Initialization

### Constructor

```
class MyCheckBox extends React.Component {
  constructor(props) {
    super(props);

*   this.state = {
*     checked: false
*   }
  }

  render() { ... }
}
```

???

via constructor

super(props)

---

template: state-module-section

## Initialization

### Class Property

```
class MyCheckBox extends React.Component {
* state = {
*   checked: false
* }

  render() { ... }
}
```

---

template: state-section

## Handling Events

---

template: state-module-section
class: bg-contain
background-image: url('images/drawings/loop-4-complete.jpg')

## Handling Events

???

how do we make the state change, based on user actions?

notice: i filled in one more thing in the loop (event)

---

template: state-module-section

## Handling Events

```jsx
class MyCheckBox extends React.Component {
  state = {
    checked: false
  }

* handleChanged = (e) => {
    this.setState({checked: e.target.checked})
* }

  render() {
    return <input
      type="checkbox"
      checked={this.state.checked}
*     onChanged={this.handleChanged}
      />
  }
}
```

???

synthetic events

---

template: exercise
layout: false

# Exercise 9

## Managing Component State

???

build a component that uses state to manage which view is being shown

---

template: state-section

## Suggestions

---

template: state-module-section

## Suggestions

### Elevate State

---

template: level-3
layout: true

# State

## Suggestions

### Elevate State

---

class: bg-contain
background-image: url('images/drawings/state-tree-leaves.jpg')

???

if I've got components down here that need the same state...

---

class: bg-contain
background-image: url('images/drawings/state-tree-drilling.jpg')

???

I can elevate it to the lowest common ancestor

and manage the state there

---
