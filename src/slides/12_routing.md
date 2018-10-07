
template: module-title
layout: false

# Routing

---

layout: true
template: module
name: routing-section

# Routing

---

## React Router

### https://reacttraining.com/react-router/

???

...some things about react router:

---
layout: true
template: module-section
name: react-router-section

# Routing
## React Router

---

### Declarative

--

```jsx
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
*   <BrowserRouter>
      <div className="App">
*       <Route exact path="/" component={FriendsList} />
*       <Route path="/lists/:id" component={ListDetail} />
*       <Route path="/friends/:id" component={FriendDetail} />
      </div>
*   </BrowserRouter>
  );
}
```

---

### Routes Are Components

???

Almost everything in react router is a component

--

```jsx
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
*       <Route exact path="/" component={FriendsList} />
*       <Route path="/lists/:id" component={ListDetail} />
*       <Route path="/friends/:id" component={FriendDetail} />
      </div>
    </BrowserRouter>
  );
}
```
---

### Routes Are Rendered Dynamically

???

in most SPA frameworks, you define routes up front

with React Router, routes are part of the component tree

so the routing happens as things are rendering

--

```jsx
import { BrowserRouter, Route } from 'react-router-dom';

*function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={FriendsList} />
        <Route path="/lists/:id" component={ListDetail} />
        <Route path="/friends/:id" component={FriendDetail} />
      </div>
    </BrowserRouter>
  );
}
```

???

look - the router/route components are in the "render" method

It's a subtle difference

But it allows you to write declarative routing 

which is pretty easy to follow.

---

### &amp;lt;BrowserRouter&ampgt;

```jsx
*import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
*   <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={FriendsList} />
        <Route path="/lists/:id" component={ListDetail} />
        <Route path="/friends/:id" component={FriendDetail} />
      </div>
*   </BrowserRouter>
  );
}
```

???

A Router that targets the browser

uses the HTML5 history API to keep your UI in sync with the URL.

you'll generally put this at the top of your app


---

### &amp;lt;Route&ampgt;

```jsx
*import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
*       <Route exact path="/" component={FriendsList} />
*       <Route path="/lists/:id" component={ListDetail} />
*       <Route path="/friends/:id" component={FriendDetail} />
      </div>
    </BrowserRouter>
  );
}
```

???

a few key arguments to a Route component

---
template: level-3
layout: true
# Routing
## React Router
### &amp;lt;Route&ampgt;

---

#### path

```jsx
<Route 
* path="/"
  component={FriendsList}
  exact
  />
```

--

```jsx
<Route 
* path="/lists/:id"
  component={ListDetail}
  />
```

---

#### component

```jsx
<Route 
  path="/lists/:id"
* component={ListDetail}
  />
```

---

#### exact

```jsx
<Route 
  path="/"
  component={FriendsList}
* exact
  />
```

???

...

That's all it takes to define your routes!

The other components you'll use from React-Router are for navigating

---
template: react-router-section

### &amp;lt;Link&amp;gt;

```jsx
import { Link } from 'react-router-dom';

function FriendInList({ friend }) {
  return (
    <Link to={'/friends/' + friend.id}>
      {friend.name}
    </Link>
  );
}
```

---
template: react-router-section

### &amp;lt;NavLink&amp;gt;

```jsx
import { NavLink } from 'react-router-dom';

function FriendInList({ friend }) {
  return (
    <header>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/friends'}>Friends</NavLink>
      <NavLink to={'/lists'}>Lists</NavLink>
    </header>
  );
}
```

???

like a link, but it also sets an "active" class when it is selected.

---
template: exercise
layout: false

# Exercise 12
## React Router

---
template: routing-section

## Suggestions

---
template: module-section
class: no-footer

# Routing
## Suggestions

> To get your intuition in line with React Router’s, think about components, not static routes. Think about how to solve the problem with React’s declarative composability because nearly every “React Router question” is probably a “React question”.

.footnote[
https://reacttraining.com/react-router/web/guides/philosophy
]

---
template: routing-section
## Deeper Learning

---
template: module-section
layout: true

# Routing
## Deeper Learning

---

### Transitions

???

blocking navigation;

animated transitions with react-transition-group

---

### Reach Router

#### https://reach.tech/router

???

accessibility

---
