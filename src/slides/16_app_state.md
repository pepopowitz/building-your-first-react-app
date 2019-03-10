template: module-title
layout: false

# Application State

---

layout: true
template: module
name: app-state-section

# Application State

---

class: bg-contain
background-image: url('images/drawings/state-tree-drilling.jpg')

???

app state is state that the entire app needs, or distant portions of it need.

...

if we're elevating state, this means we have to pass props basically through the entire app

this is called...

---

## Prop Drilling

???

all this prop drilling can feel like a burden, and noisy

---

## Context

???

and for app-level state, there's a fairly new api in react

new in React 16.3

---

template: module-section
class: bg-contain
background-image: url('images/drawings/state-tree-ctx.jpg')

# Application State

## Context

???

how context solves prop drilling

sometimes the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, theme, or a data cache.

---

template: module-section
layout: true

# Application State

## Context

---

### createContext()

```javascript
const { Provider, Consumer } = React.createContext();
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
      onThemeChanged: this.handleThemeChanged }}>
    <yourComponentTree />
  </Provider>
}
```

???

value can be an object, if there are multiple things you want to pass down

including **actions** that will change the value

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

and then all the places in the subtree that you need access to the state, you have consumers

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

# Exercise 12

## React Context

???

Poll: on your own?

Or have me show you the code?

---

template: app-state-section

## Deeper Learning

---

template: module-section
layout: true

# Application State

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

template: app-state-section

## Suggestions

---

template: module-section
layout: true

# Application State

## Suggestions

---

### Use The Right Tool

???

Component state: use setState

Distant components: use context or Redux/mobx

---
