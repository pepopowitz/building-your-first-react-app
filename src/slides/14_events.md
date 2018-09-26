
template: module-title
layout: false

# Events
## Events

---

layout: true
template: module
name: events-section

# Events

---
class: no-footer

## Handling Events

```jsx
class MyCheckBox extends React.Component {
  state = {
    checked: false
  }

  handleChanged = (e) => {
    this.setState({checked: e.target.checked})  
  }

  render() {
    return <input 
      type="checkbox" 
      checked={this.state.checked} 
      onChanged={this.handleChanged} 
      />
  }
}
```

???

as we've seen already...


---

## Binding Event Handlers

---
template: module-section
layout: true
# Events
## Binding Event Handlers

---

### Why?

???

You usually want access to this.state and/or this.props in your event handlers

--

```jsx
class MyCheckBox extends React.Component {
* handleChanged() {
*   this.setState(...)
    // ^^^ doesn't know what this.setState is.
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

* handleChanged() {
    this.setState(...);
  }
  
  render() {
*   return <input type="checkbox" onChanged={this.handleChanged} />;
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


