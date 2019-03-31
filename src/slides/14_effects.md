template: module-title
layout: false

# Side Effects

???

Side effect = interacting with anything outside of React & your React components.

- Data fetching
- Subscribing to a websocket
- and manually changing the DOM

---

layout: true
template: module
name: effects-section

# Side Effects

---

## `useEffect`

---

template: module-section
layout: true
name: use-effect-section

# Side Effects

## `useEffect`

---

```jsx
function Component(props) {
  useEffect(

    // arg 1: a function
    () => {
*     A; // what to do when effect fires
      return () => {
*       B; // what to do to clean up effect
      }
    },

    // arg 2: an array
*   [ C ] // variables which should prompt effect to re-fire when changed
  );

  return ...
}
```

???

2 args, but 3 important things specified

- nothing returned
- A
- B
- C

Examples:

---

template: level-3
layout: true

# Side Effects

## `useEffect`

---

### Loading Data

```jsx
import callApi from './callApi';

function DetailItem(props) {
  const [item, setItem] = useState({});

  useEffect(async () => {

    const item = await callApi(props.id);
    setItem(item);

  }, []);

  return ( ... )
}
```

???

Loading data from an external source

- callApi - an api client
- useState - often, but not always associated with useEffect
- async/await
- first arg = what happens when the component mounts or the props change
- no cleanup!
- no props will cause it to re-fire - only fires once.

---

### Charting

```jsx
function FriendsChart(props) {

  useEffect(() => {

    const graph = graphingLibrary.init(props.data);

    return () => {
      graph.destroy();
    };

  }, []);

  return ( ... )
}
```

???

Integrating with a charting library

- init based on props
- store graph
- return function - destroy graph
- no props should cause re-fire

---

### WebSockets

```jsx
function Chat(props) {

  useEffect(() => {
    socket.emit('join', { id: props.friendId });

    return () => {
      socket.emit('leave', { id: props.friendId });
    }

  }, [ props.friendId ])

  return ( ... )
}
```

???

Integrating with websockets

- join a socket when effect fires
- leave that socket to clean up the effect
- re-run the effect when props.friendId changes

---

template: exercise
layout: false

# Exercise 10

## Loading Data

???

from an api

& rendering components based on the results

---

template: effects-section

## Suggestions

---

template: level-2
layout: false

# Side Effects

## Suggestions

### You Can Run Multiple Effects

---

template: level-3
layout: false

# Side Effects

## Suggestions

### Multiple Effects

```jsx
function Component() {
  useEffect(() => {
    // Load Data
  });

  useEffect(() => {
    // Charting
  });

  useEffect(() => {
    // Websockets
  });
}
```

???

If you have multiple things happening in an effect,

break them up into separate calls

No reason you can't do that

Each one will be run.

Advantage: easier to follow code

---
