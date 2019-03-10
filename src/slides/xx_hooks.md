template: module-title
layout: false

# Hooks

---

layout: true
template: module
name: hooks-section

# Hooks

---

class: hooks

## A Better Future

--

- Class Syntax Is A Burden

???

1 - We're using a language feature that is mostly unnecessary, as the only way to manage state & lifecycle events

--

- Context Is Confusing

???

2 - Among other reasons, it introduces a complex pattern (render props) that takes getting used to

--

- State Management Leads To Large Components

???

3 - It's hard to extract state management details & reuse them...so they become large & difficult to maintain.

---

> Hooks provide a more direct API to the React concepts you already know

.footnote[
https://reactjs.org/
]

???

recently announced & demonstrated at React Conf in October

Not officially released yet

---

## Improvements

- State Management
- Lifecycle Events
- Context

???

Many things that hooks can do

And you can even write custom hooks

But, 3 complexities we've seen are helped a lot by hooks

---

template: hooks-section

## State Management

---

layout: true
template: module-section

# Hooks

## State Management

---

```jsx
class MyCheckBox extends React.Component {
  state = {
    checked: false,
  };

  handleChanged = e => {
    this.setState({ checked: e.target.checked });
  };

  render() {
    return (
      <input
        type="checkbox"
        checked={this.state.checked}
        onChanged={this.handleChanged}
      />
    );
  }
}
```

---

```
import React, { useState } from 'react';

function MyCheckBox() {

  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      checked={checked}
      onChanged={() => setChecked(!checked)}
    />
  );
}
```

???

1 - import named

2 - functional

3 - useState

---

template: hooks-section

## Lifecycle Events

---

layout: true
template: module-section

# Hooks

## Lifecycle Events

---

```jsx
class Chat extends React.Component {
  componentDidMount () {
    socket.emit('join', { id: this.props.friendId });
  }

  componentDidUpdate(nextProps) {
    if (nextProps.friendId !== this.props.friendId) {
      socket.emit('leave', { id: this.props.friendId });
      socket.emit('join', { id: nextProps.friendId });
    }
  }

  componentWillUnmount () {
    socket.emit('leave', { id: this.props.friendId });
  }

  render() { ... }
}
```

---

```jsx
import React, { useEffect } from 'react';

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

1 - import named

2 - functional

3 - useEffect

4 - return cleanup

5 - second arg = "when to re-run the effect?"

---

class: no-footer

```
import React, { useState, useEffect } from 'react';

import getFriendsFromApi from './get-friends-from-api';
import Friends from './Friends';

export default function Friends() {

  const [friends, setFriends] = useState([]);

  useEffect(async () => {

    const apiFriends = await getFriendsFromApi();

    setFriends(apiFriends);

  }, []);

  return <Friends friends={friends} />;
}
```

???

Can combine useEffect with useState!

---

template: hooks-section

## Context

---

layout: true
template: module-section

# Hooks

## Context

---

```jsx
import ThemeContext from './context';

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ onThemeChanged }) => (
        <button className={styles.switcher} onClick={onThemeChanged}>
          Change Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}
```

---

```
import React, { useContext } from 'react';
import ThemeContext from './context';

export default function ThemeSwitcher() {

  const { onThemeChanged } = useContext(ThemeContext);

  return (
    <button className={styles.switcher} onClick={onThemeChanged}>
      Change Theme
    </button>
  );
}
```

???

1 - import named

2 - still need ThemeContext

3 - useContext

4 - no render props!

---

template: exercise
layout: false

# Exercise 16

## Hooks

---

template: hooks-section

## Deeper Learning

---

template: module-section
layout: true

# Hooks

## Deeper Learning

---

### "Making Sense of React Hooks"

#### Dan Abramov

#### https://bit.ly/2Q8WthV

---
