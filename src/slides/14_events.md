
template: module-title
layout: false

# Events
## Events

---

layout: true
template: module
name: events-section

# Handling Events

---

triangle

???

how do we make the state change, based on user actions?

---

## In React.Components

```jsx
class MyCheckBox extends React.Component {
  state = {
    checked: false
  }

  handleChanged = (e) => {
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input type="checkbox" onChanged={this.handleChanged} />
  }
}
```

???

synthetic events

---

## In Containers

```jsx
class MyCheckBoxContainer extends React.Component {
  state = {
    checked: false
  }

  handleChanged = (e) => {
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <MyCheckBox onValueChanged={this.handleChanged} />
  }
}
```

---
## In Stateless Function Components

```jsx
export default function MyCheckBox({onValueChanged}) {
  return <input type="checkbox" onChanged={onValueChanged} />
}
```

---

## Binding Events

---
template: module-section
layout: true
# Handling Events
## Binding

---

### Why?

???

You usually want access to this.state and/or this.props in your event handlers

--

```jsx
class MyCheckBox extends React.Component {
  handleChanged = (e) => {
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input type="checkbox" onChanged={this.handleChanged} />
  }
}
```

???

So you need to make sure that a handler passed into an event is bound to the correct scope

Because by nature, it's not.

---
class: no-footer
### Constructor Binding

```javascript
class MyCheckBox extends Component {
  constructor(props) {
    super(props);
*   this.handleChanged = this.handleChanged.bind(this);
  }

  handleChanged() {
    this.setState(...);
  }
  
  render() {
*   return <input type="checkbox" onChanged={this.handleClick} />;
  }
}
```
---

### Render Binding

```javascript
class MyCheckBox extends Component {
* handleChanged() {
    this.setState(...);
  }

  render() {
    return <input 
      type="checkbox" 
*     onChanged={this.handleChanged.bind(this)} />;
  }
}
```

???

caution: might cause performance problems, if you render this component a lot

---

### Render Binding (Arrow)

```javascript
class MyCheckBox extends Component {
* handleChanged() {
    this.setState(...);
  }

  render() {
    return <input 
      type="checkbox" 
*     onChanged={() => this.handleChanged()} />;
  }
}
```

???

caution: might cause performance problems, if you render this component a lot

---

### Class Fields

```javascript
class MyCheckBox extends React.Component {
* handleChanged = (e) => {
    this.setState(...)  
  }

  render() {
    return <input 
      type="checkbox" 
*     onChanged={this.handleChanged} />
  }
}
```

???

this works because the fat arrow is binding to 'this' at the time of declaration

which is what we want it to bind to

---
template: events-section
layout: true
---
class: no-footer

## state

```javascript
class MyCheckBox extends React.Component {
*  state = {
*    checked: false
*  }

  handleChanged = (e) => {
*   this.setState({checked: e.target.checked})  
  }

  render() {
    return <input 
      type="checkbox" 
*     checked={this.state.checked} 
      onChanged={this.handleChanged} />
  }
}
```

???

usually, your events are tied to state somehow

the triangle is all here:

render = render (& checked={this.state.checked})

event = this.handleChanged

state = this.setState

---
class: no-footer

## Async/Await


```javascript
class MyCheckBox extends React.Component {
  state = {
    checked: false
  }

* handleChanged = async (e) => {
*   await callApi();
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input 
      type="checkbox" 
      checked={this.state.checked} 
      onChanged={this.handleChanged} />
  }
}
```

???

sometimes you'll hvae to wait for something to happen asynchronously

you can just mark the event handlers as async!

---
template: exercise
layout: false

# Exercise 17
## Handling Events

---

