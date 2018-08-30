
template: module-title
layout: false

# Events
## Events

---

layout: true
template: module
name: events-section

# Handling Events

triangle

???

how do we make the state change, based on user actions?

---

## In Containers/React.Components

```javascript
class Component extends React.Component {
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

## In Stateless Function Components

```javascript
class Container extends React.Component {
  state = {
    checked: false
  }

  handleChanged = (e) => {
    this.setState({checked: e.target.checked})  
  }

  render() {
    <Component onValueChanged={this.handleChanged} />
  }
}
```

--

```javascript
export default function Component({onValueChanged}) {
  return <input type="checkbox" onChanged={onValueChanged} />
}
```

---

## Binding Events

---

### Why?

???

You usually want access to this.state and/or this.props in your event handlers

So you need to make sure that a handler passed into an event is bound to the correct scope

Because by nature, it's not.

---

### Constructor Binding

TODO - unify these examples

```javascript
class Foo extends Component {
  constructor(props) {
    super(props);
*    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log('Click happened');
  }
  render() {
*    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```
---

### Render Binding

```javascript
class Foo extends Component {
*  handleClick() {
    console.log('Click happened');
  }
  render() {
*    return <button onClick={this.handleClick.bind(this)}>Click Me</button>;
  }
}
```

???

caution: might cause performance problems, if you render this component a lot

---

### Render Binding With Arrow Function

```javascript
class Foo extends Component {
  handleClick() {
    console.log('Click happened');
  }
  render() {
*    return <button onClick={() => this.handleClick()}>Click Me</button>;
  }
}
```

???

caution: might cause performance problems, if you render this component a lot

---

### Class Fields

```javascript
class Component extends React.Component {
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

---

## setState

```javascript
class Component extends React.Component {
*  state = {
*    checked: false
*  }

  handleChanged = (e) => {
*    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input type="checkbox" 
*                  checked={this.state.checked} 
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

## Async/Await


```javascript
class Component extends React.Component {
  state = {
    checked: false
  }

*  handleChanged = async (e) => {
*    await callApi();
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input type="checkbox" 
                  checked={this.state.checked} 
                  onChanged={this.handleChanged} />
  }
}
```

???

sometimes you'll hvae to wait for something to happen asynchronously

you can just mark the event handlers as async!

---

## Example

---
template: exercise
layout: false

# Exercise 17
## Handling Events

---

