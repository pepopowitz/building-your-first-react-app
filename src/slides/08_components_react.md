
template: module-title
layout: false

# Components + React
## Components + React

---

layout: true
template: module
name: components-react-section

# Components + React

---

## Class Syntax

---
template: exercise
layout: false

# Exercise 3
## Modern JavaScript: Class Syntax

---

## render()

---
## render() |

```
example of render
```

???

Note: class instance methods!

---
## render() |

### Pure Functions

> The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

.footnote[
https://reactjs.org/docs/
]
---
## render()
### Pure Functions |

```
add(1, 2);
```
.footnote[
Pure
]

```
new Date();
```
.footnote[
Impure
]

```
render() {
  this.x = this.x - 1;
}
```
.footnote[
Impure
]

---

## Inputs

--

> Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

.footnote[
  https://reactjs.org/docs/
]

---

### props

--
```
example of props
```

???

...

a second input: state

---

### state

--

```
example of state
```

???

We'll look more later

---

## Output

---

### React.createElement

--

```
example of React.createElement
```

---

## React.createElement

---

###  arguments

---

## render() |

### Outputs are re-rendered as their inputs change

???

React handles this for you!

---
## render() |

### One-way Data Flow

(drawing of one-way data flow)

---
## render() |
### Reconciliation

???

Updating the DOM is slow

Virtual DOM

--

(drawing of reconciliation)

---

## React.createElement

(examples)

???

---
## React.createElement

(nested examples)

---
## JSX

---

### Optional

---

### React.createElement Is Verbose

---

(example of React.createElement)

(example of corresponding JSX)

---


### Separation Of Concerns

(the slide)

---

### Separation Of Technologies

> Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called “components” that contain both.

.footnote[
https://reactjs.org/docs/
]
---

### Browsers Just Don't Understand


???

The rub...

So we have to transpile.

It has advantages - 

* "compile"-time checking

But it is an extra step between our code & the browser.

---

template: exercise
layout: false

# Exercise 4
## Modern JavaScript: Working With Objects

---
template: exercise
layout: false

# Exercise 5
## JSX Fundamentals

---
