---
class: schedule

### Schedule

* .highlight[Module 0:] Intro & Setup .highlight[(1:00 - 1:15)]
* .highlight[Module 1:] Jest .highlight[(1:15 - 1:55)]
* .highlight[Module 2:] Intro to TDD .highlight[(1:55 - 2:30)]
* .highlight[Module 3:] Code Katas .highlight[(2:30 - 3:00)]
* Break .highlight[(3:00 - 3:15)]
* .highlight[Module 4:] Solving Problems Together .highlight[(3:15 - 4:10)]
* .highlight[Module 5:] Real-life TDD .highlight[(4:10 - 4:45)]
* .highlight[Wrapping Up:] Good Practices .highlight[(4:45 - 5:00)]

???

Now is your chance to break!






a second input: state

---
template: level-3
layout: true
# Components + React
## Inputs
### state

---

drawing of triangle: 
props & state -> render -> ??? -> props & state

---

```jsx
class Friend extends React.Component {
  render() {
*    console.log(this.state.name, this.state.url);
  }
}
```

---

#### Props Are Read-Only
#### State Is Read-Write

???

The difference

...

We'll look more later





---
#### Reconciliation

here

do I need to talk about this??????
???

Updating the DOM is slow

Virtual DOM

--

(drawing of reconciliation)
