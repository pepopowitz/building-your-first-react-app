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

- the top-most component will use the context as a "provider"

- bottom components as "consumers"

- anything under provider will have access to data from this context

- w/o having to have props passed in

- so props don't have to be drilled

---

template: module-section
layout: true

# Application State

## Context

---

### createContext()

```javascript
const UserContext = React.createContext();
```

???

the first thing you have to do is create a context

this doesn't happen inside of a component

it's something that executes alongside your components

you get a provider & a consumer

- like namespacing your context

---

### Provider

```jsx
import UserContext from './user-context.js';

function UserProvider({ children }) {
  const user = useUser(); // however you get the logged in user

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
```

???

-

the provider will get wrapped around your component tree

- value = the data you want to pass to consumers
- user = however you got the user - maybe via useEffect,...

---

### Provider

```jsx
import UserContext from "./user-context.js"

function UserProvider({children}) {
  const user = ... // however you get the logged in user
  const handleUserChanged = ... // however you change the logged in user

  return (
    <UserContext.Provider
      value={{
        user: user,
        onUserChanged: handleUserChanged,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
```

???

value can be an object, if there are multiple things you want to pass down

including **actions** that will change the value

---

### The Top Of Your Tree

```jsx
import UserProvider from './user-provider.jsx';

function App() {
  return (
    <UserProvider>
      <MyComponentTree />
    </UserProvider>
  );
}
```

???

Then this wrapped provider gets imported into App & rendered at the top of the tree

- mycomponenttree will be the children of UserProvider

---

### Consumer

```jsx
import React, { useContext } from 'react';

function UserName() {
  const value = useContext(UserContext);

  return <div>{value.user.name}</div>;
}
```

???

and then all the places in the subtree that you need access to the state, you have consumers

and they just want to know what the value of the context is

using a hook named useContext

---

### Consumer

```jsx
function CurrentUser() {
  const value = useContext(UserContext);

  return (
    <div>
      Current User: {value.userName}
      <button onClick={value.onUserChanged}>Change User</button>
    </div>
  );
}
```

???

for multiple things passed down via context...

- note: not using fat-arrow for onClick because onUserChanged _is_ a function already

---

template: exercise
layout: false

# Exercise 11

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

reactive programming, observables

updates get automatically applied

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

Component state: use useState

Distant components: use context or Redux/mobx

---

### Read The Hooks Docs

#### [reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)

???

we've looked at only three hooks; docs have:

- explanation of motivation
- rules of use
- a ton of other hooks
- custom hooks

---

### `react-use`

#### [streamich.github.io/react-use](http://streamich.github.io/react-use)

???

- a _ton_ of useful custom hooks

---
