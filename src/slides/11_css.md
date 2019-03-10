template: module-title
layout: false

# CSS

---

layout: true
template: module
name: css-section

# CSS

---

## Styles Go With Components

???

gone are the days of one massive stylesheet for an entire app

with react's focus on components, we want to put our styles with our components.

A few different approaches.

---

## Method 1: Component CSS Files

---

template: module-section
layout: false

# CSS

## Component CSS Files

```css
.friend {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
}
```

.footnote[
friend.css
]

```jsx
*import './friend.css';

function Friend({ name }) {
* return <div className="friend">{name}</div>
});
```

.footnote[
friend.jsx
]

???

**className**

Note that this works because we're using **webpack with style-loader**

(it effectively turns our css into a js object that we can import)

---

## Method 2: CSS Modules

### https://github.com/css-modules/css-modules

.css-modules[
![CSS Modules](images/css-modules-logo.png)
]

---

template: module-section
layout: true

# CSS

## CSS Modules

---

class: no-footer

### Why?

> - modular and reusable CSS!
> - No more conflicts.
> - Explicit dependencies.
> - No global scope.

.footnote[
[CSS Modules](https://github.com/css-modules/css-modules)
]

---

```css
.friend {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
}
```

.footnote[
friend.css
]

```jsx
*import styles from './friend.css';

function Friend({ name }) {
* return <div className={styles.friend}>{name}</div>
}
```

.footnote[
friend.jsx
]

???

what it looks like in your code

---

```css
.Friend__friend__31BtE {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
}
```

.footnote[
CSS
]

```html
<div class="Friend__friend__31BtE">Mr. Turtle</div>
```

.footnote[
HTML
]

???

what gets shipped to the browser

---

template: css-section

## Method 3: Styled Components

### [styled-components.com](https://www.styled-components.com/)

---

template: module-section
layout: true

# CSS

## Styled Components

---

```jsx
import styled from 'styled-components';

const brandColor = 'blueviolet';

const StyledFriend = styled.div`
  color: ${brandColor};
  border-bottom: 1px solid ${brandColor};
`;

function Friend({ name }) {
  return <StyledFriend>{name}</StyledFriend>;
}
```

???

styles are in the component!!!

tagged template literals

---

```css
.31bte {
  color: blueviolet;
  border-bottom: 1px solid blueviolet;
}
```

.footnote[
CSS
]

```html
<div class="31BtE">Mr. Turtle</div>
```

.footnote[
HTML
]

???

shipped to the browser

---

template: exercise
layout: false

# Exercise 7

## CSS: Three Ways To Style

---

template: css-section

## Deeper Learning

---

template: module-section
layout: true

# CSS

## Deeper Learning

---

class: no-footer

### CSS-in-JS

--

- [Styled Components](https://www.styled-components.com)
- [Radium](https://github.com/FormidableLabs/radium)
- [Emotion](https://github.com/emotion-js/emotion)
- [Glamor](https://github.com/threepointone/glamor)
- [Glamorous](https://github.com/paypal/glamorous)
- [JSS](https://github.com/cssinjs/jss)

---

template: css-section

## Suggestions

---

template: module-section
layout: true

# CSS

## Suggestions

---

> Find the way that works for you, and do it unapologetically

.footnote[
Scott Hanselman
]

???

People who use css-in-js REALLY like it

I've never felt like managing CSS scope was a problem

But it might depend on what you're building -

Component library probably warrants css-in-js

---

### Separation Of Concerns

---

template: level-3
layout: false
class: bg-contain
background-image: url('images/drawings/slicing-vertical.jpg')

# CSS

## Suggestions

### Separation Of Concerns

---

### Styling Belongs To Your Components

???

the important thing is that you have component-based css

via imported css, imported scss, css modules, css-in-js....

The main takeaway is that styles are not a separate concern from the rest of the component.

---
