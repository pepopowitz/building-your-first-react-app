template: module-title
layout: false

# State

???

Who has heard things about managing state in react?

...

state mgmt in react is a controversial topic.

but it has gotten less controversial with more recent releases

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
background-image: url('')

???

TODO: replace this image (component as f(props))

this is where we were

a component is a function of the props passed into it

---

class: bg-contain
background-image: url('')

???

TODO: replace this image (component as f(props, state))

but that's not the only input to a component

a component is a function of props & state

---

class: bg-contain
background-image: url('')

???

TODO: replace this image (props AND state, with state looping, & component boundary)

props are passed into a component

state is contained within a component

Think about it from a responsibility viewpoint

Who should be the source of truth for this data?

This component? It's state.

Someone else? It's props passed in.

---

## State Is Passed Into Child Components As Props

---

class: bg-contain
background-image: url('images/drawings/state-turns-into-props.jpg')

???

- top level manages state;
- each component down the line passes it to the next

---

## Hooks

???

To manage state, we'll use a new React feature named hooks

- v16.8
- new as of ~Feb 2019

---

template: module-section
layout: true

# State

## Hooks

---

> Hooks are functions you can use in a Component to perform **impure actions** from a **pure function**.

???

Remember we said our components are pure functions,

and pure functions shouldn't have side-effects, or change state

Hooks allow us to do that safely,

and in a way that allows React to re-render components when it needs to

---

### `useState`

### `useEffect`

### `useReducer`

### `useMemo`

### ...

???

Examples

- manage state
- perform side-effects
- manage complicated state
- memoize some data (another type of state)

All begin with "use" - allows React to identify hooks that you create

---

template: state-section

## `useState`

???

our focus for state mgmt

---

template: module-section
layout: true

## `useState`

---

```jsx
function FriendCounter() {
* const state = useState(99);

* const count = state[0];
* const setCount = state[1];

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```

???

- useState
- initial value (99)
- get an array back
- first item in array = value
- second item in array = state modifier

...

Why do we get back an array?

So we can do this:

---

```jsx
function FriendCounter() {
* const [count, setCount] = useState(99);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
```

???

- array destructuring
- an array so that we can name them whatever we want

---

```jsx
function FriendCounter() {
* const [count, setCount] = useState(99);

  return (
    <div>
      <h1>{count}</h1>
*     <button onClick={() => setCount(count + 1)} />
    </div>
  );
}
```

???

To use the state modifier,

We might add an onClick handler

- when executed, calls setCount with the new value
- fat-arrow because we pass onClick a _function_ to execute
- if we just called setCount() directly, that would happen at render instead of click

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
layout: true
name: state-suggestions

## Suggestions

---

### Only call hooks at the top level

???

That means never in a conditional or loop

- Order of calls to `useState` matters
- Hooks relies on order to keep track of each state prop - there's some magic

---

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

I can elevate it to the nearest common ancestor

and manage the state there

---

template: state-suggestions

### Managing Many State Properties

???

You can call `useState` more than once

---

template: level-3
layout: true

# State

## Suggestions

### Many State Properties

---

```jsx
function FriendForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // ...
}
```

???

Example: two state props, one for each name

---

```jsx
function FriendForm() {
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddleInitial] = useState('');
  const [lastName, setLastName] = useState('');
  const [nickname, setNickname] = useState('');
  const [age, setAge] = useState(0);

  // ...
}
```

???

But you can see how this can get out of hand, if you have a lot of form data

Here's 5 fields, maybe you even have more

...

There are a few ways to address this

---

#### Custom Hook

```jsx
function useFriendForm() {
  const [firstName, setFirstName] = useState('');
  // ...

  return { firstName, middleInitial, ... }
}

function FriendForm() {
  const form = useFriendForm();

  // ...
}
```

???

- Extract state mgmt to a custom hook
- Return whatever would be useful to original component
- Original component now uses custom hook

---

class: small, no-footer

#### `useReducer`

```jsx
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function FriendCounter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
```

???

- NOT Redux
- But a reducer is a concept used by redux
- good when state is complex

---

#### External Library

##### Formik

???

Or sometimes, using an external library might be an answer.

The one we use for managing form data is called Formik.

---
