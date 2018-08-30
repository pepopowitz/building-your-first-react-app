
template: module-title
layout: false

# State
## State

---

layout: true
template: module
name: state-section

# State

???

Who has heard things about managing state in react?

---

## Props Vs State

```
props
```

```
state
```

??? 

props are passed into a component

state is internal to a component

Think about it from a responsibility viewpoint

Who should be the source of truth for this data?

This component? It's state.

Someone else? It's props passed in.

---

state only exists on a "stateful" component / one that inherits from React.Component

---

somehow to show that state can be passed down to children as props

???

and this looks like...

---

## Unidirectional Flow

(drawing)

???

and the data that flows through one way gets updated by...

---

## setState

```
example
```

---

### State Is Merged

```
show how setState merges only the state we want to change
```

---

### setState({ })

```
example using regular call
```

---

### Asynchronous

```
incorrect example using this.state.value in setState
```

???

setState calls are asynchronous

and they might be batched, for performance reasons

to avoid weirdness, use ....

---

### setState(prevState => { })

```
example
```

???

this allows us to compare to previous state


---
template: exercise
layout: false

# Exercise 13
## Updating State

---
template: exercise
layout: false

# Exercise 14
## Modern JS: Async/Await

---

## Lifecycle Methods

???

so we can do things like load state from an api

---

### Initialization (Constructor)

```
constructor(props) {
  super(props);
  this.state = {
    isChecked: false
  }
}
```

???

via constructor

---

### Initialization (Class Property)

```
state = {
  isChecked: false
}
```

---

### componentDidMount

```
example
```

???

invoked immediately after a component is mounted (inserted into the tree)

---

### componentDidMount
#### Load Data From API
#### Subscribe To Things

---

### componentDidUpdate

```
componentDidUpdate(prevProps) {
  if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}
```

???

invoked when a component is updated

happens more often than you probably need it to, so check the props

This is a good place to react to changes to your inputs that render can't handle

---

### componentWillUnmount

```
example?
```

???

invoked immediately before a component is unmounted and destroyed.

any subscriptions you set up in componentDidMount - cancel them here.

...

There are others, but they are rarely used. These are all you need to know for this workshop.


---
template: exercise
layout: false

# Exercise 15
## Loading Data

---

## Problem: Prop Drilling

```
example
```

---

## Context

???

new in React 16.2?

---

### How Context Solves It

drawing - attach a provider at the top component, and consumers along the way down

???

sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.

---

### createContext()

```javascript
const {Provider, Consumer} = React.createContext(defaultValue);
```

---

### Provider

```javascript
<Provider value={this.state.user}>
```

---

### Provider

```javascript
<Provider value={{ theme: this.state.theme, onThemeChanged: this.handleThemeChanged }>
```

???

value can be an object, if there are multiple things you want to pass down

---

### Consumer

```javascript
<Consumer>
  {value => <div>{value.userName}</div>}
</Consumer>
```

???

render props

---

### Consumer

```javascript
<Consumer>
  {value => (
    <div>
      Theme: {value.userName}
      <button onClick={value.onThemeChanged}>Change Theme</button>
    </div>
  )}
</Consumer>
```

---
template: exercise
layout: false

# Exercise 16
## React Context

---

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

## Suggestions

---

### Elevate State

drawing of tree with state

---

### Use The Right Tool

???

Component state: use setState

Distant components: use context or Redux/mobx

---

