
template: module-title
layout: false

# State
## State

???

Who has heard things about managing state in react?

...

state mgmt in react is a controversial topic.

---

layout: true
template: module
name: state-section

# State

---

triangle (props only)


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

drawing of props vs state

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
        <img 
          alt={this.state.friend.name} 
          src={this.state.friend.url} />
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

(drawing of child component with props & state being passed in, both as props)

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

triangle with props & state

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

## Unidirectional Flow

(full triangle)

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
  name: 'Sneezy'
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
  name: 'Sneezy'
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
  theme: this.state.theme === 'light' 
    ? 'dark' 
    : 'light'
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
    theme: prevState.theme === 'light' 
      ? 'dark' 
      : 'light'
  }
});
```

???

this allows us to compare to previous state

---
template: exercise
layout: false

# Exercise 13
## Managing Component State

---
template: exercise
layout: false

# Exercise 14
## Modern JS: Async/Await

---
template: state-section

## Lifecycle Methods

???

so we can do things like load state from an api

---
layout: true
template: module-section
# State
## Lifecycle

---

### Initialization (Constructor)

```
class FriendDetail extends React.Component {
  constructor(props) {
    super(props);

*   this.state = {
*     friend: {}
*   }
  }

  render() { ... }
}
```

???

there are a couple ways we can initialize state

via constructor

super(props)

---

### Initialization (Class Property)

```
class FriendDetail extends React.Component {
* state = {
*   friend: {}
* }

  render() { ... }
}
```

---
class: hide-footer

### componentDidMount

```
import callApi from './callApi';

class FriendDetail extends React.Component {
  async componentDidMount() {
*   const friend = await callApi(this.props.friendId);
*
*   this.setState({
*     friend
*   });
  }

  state = { ... }

  render() { ... }
}
```

???

invoked immediately after a component is mounted (inserted into the tree)

---
class: component-did-mount

### componentDidMount

* Load data from APIs

--

* Integrate with non-React APIs

???

integrating with non-react api's

---
class: no-footer

### componentDidUpdate

```
import callApi from './callApi';

class FriendDetail extends React.Component {
  async componentDidUpdate(prevProps) {
*   if (this.props.friendId !== prevProps.friendId) {
*     const friend = await callApi(this.props.friendId);
*  
*     this.setState({
*       friend
*     });
*   }
  }

  // ...
}
```

???

invoked when a component is updated

happens more often than you probably need it to, so check the props

---

### componentDidUpdate

* React to changes to inputs

???

This is a good place to react to changes to your inputs that render can't handle

---

### componentWillUnmount

```
class FriendsChart extends React.Component {
  componentDidMount () {
    this.graph = this._initGraph();
  }

* componentWillUnmount () {
*   this.graph.destroy();
* }

  // ...
}
```

???

invoked immediately before a component is unmounted and destroyed.

---

### componentWillUnmount

* Clean up integrations with non-React APIs

???

any subscriptions you set up in componentDidMount - cancel them here.

...

There are others, but they are rarely used. These are all you need to know for this workshop.


---
template: exercise
layout: false

# Exercise 15
## Loading Data

---
template: state-section

## Suggestions

---
template: module-section

# State
## Suggestions
### Elevate State

--

drawing of tree with state

---
template: level-3
# State
## Suggestions
### Elevate State
#### Prop Drilling

(drawing of prop drilling)

???

there's a problem you can run into in a react app

...

elevating state & passing props down isn't inherently bad

and there's nothing really wrong with this

but sometimes your components can be really far apart

and all this prop drilling can feel like a burden, and noisy

and generally what it means is you're dealing with APP-level state
---
template: state-section

## Context

???

and for app-level state, there's a new api in react

new in React 16.2?


---
template: state-section

## Context

drawing - attach a provider at the top component, and consumers along the way down

???

how context solves prop drilling


sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.

---
template: module-section
layout: true

# State
## Context
---

### createContext()

```javascript
const {Provider, Consumer} = React.createContext();
```

???

the first thing you have to do is create a context

this doesn't happen inside of a component

it's something that executes alongside your components

you get a provider & a consumer

---

### Provider

```jsx
render() {
  <Provider value={this.state.user}>
    <yourComponentTree />
  </Provider>
}
```

???

the provider will get wrapped around your component tree

---

### Provider

```jsx
render() {
  <Provider value={{ 
      user: this.state.user, 
      onThemeChanged: this.handleThemeChanged }>
    <yourComponentTree />
  </Provider>
}
```

???

value can be an object, if there are multiple things you want to pass down

(including actions that will change the value)
---

### Consumer

```jsx
render() {
  <Consumer>
    {value => <div>{value.userName}</div>}
  </Consumer>
}
```

???

and then you have consumers

and they just want to know what the value of the context is

uses a pattern called render props

---

### Consumer

```jsx
render() {
  <Consumer>
    {value => (
      <div>
        Current User: {value.userName}
        <button onClick={value.onUserChanged}>Change User</button>
      </div>
    )}
  </Consumer>
}
```

???

for multiple things passed down via context...

---
template: exercise
layout: false

# Exercise 16
## React Context

---
template: state-section

## Deeper Learning

---
template: module-section
layout: true
# State
## Deeper Learning

---

### Redux

> Redux is a predictable state container for JavaScript apps.

.footnote[
https://redux.js.org/
]

???

one store to hold all the data

and you connect your components to that state,

so that when it changes, your component re-renders.

---

### Mobx

> Simple, scalable state management

.footnote[
https://mobx.js.org/
]

???

reactive, observables

updates get automatically applied

similar concept to rxjs 

---
template: state-section

## Suggestions

---
template: module-section
layout: true
# State
## Suggestions

---

### Use The Right Tool

???

Component state: use setState

Distant components: use context or Redux/mobx

---

