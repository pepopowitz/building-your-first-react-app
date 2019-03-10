template: module-title
layout: false

# Lifecycle

???

things like load state from an api,

manage non-react dependencies,

---

layout: true
template: module
name: lifecycle-section

# Lifecycle

---

template: exercise
layout: false

# Exercise 10

## Modern JS: `async`/`await`

???

look at code samples together

(no need to start anything up)

---

## Initialization

```
class FriendFlipper extends React.Component {
* state = {
*   flipped: false
* }

  render() { ... }
}
```

???

lifecycle events are most often associated with managing state

---

class: hide-footer

## componentDidMount

```jsx
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

(uses on next slide...)

---

class: component-did-mount

## componentDidMount

- Load data from APIs

--

- Integrate with non-React APIs

???

integrating with non-react api's

---

class: no-footer

## componentDidUpdate

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

## componentDidUpdate

- React to changes to inputs

???

This is a good place to react to changes to your inputs that render can't handle

---

## componentWillUnmount

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

## componentWillUnmount

- Clean up integrations with non-React APIs

???

any subscriptions you set up in componentDidMount - cancel them here.

...

There are others, but they are rarely used. These are all you need to know for this workshop.

---

template: exercise
layout: false

# Exercise 11

## Loading Data

???

from an api

& rendering components based on the results

---
