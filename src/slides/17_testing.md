template: module-title
layout: false

# Testing

---

layout: true
template: module
name: testing-section

# Testing

---

## Jest

> Complete and ready to set-up JavaScript testing solution. Works out of the box for any React project.

.footnote[
https://jestjs.io/
]

---

## Jest

```javascript
import aFunctionUnderTest from './a-function-under-test.js';

describe('A set of tests', () => {
  it('does a certain thing', () => {
    const result = aFunctionUnderTest();

    expect(result).toEqual('a value');
  });
});
```

???

describe

it

expect

---

template: module-section

# Testing

## Jest

### Matchers (Assertions)

```js
expect(a).toEqual(b);

expect(a).not.toEqual(b);

expect(a).toBeGreaterThan(b);

expect(a).toBeNull();

expect(a).toBeUndefined();
```

???

35 available, some are valid only against certain types

---

## react-testing-library

> Simple and complete React DOM testing utilities that encourage good testing practices.

.footnote[
https://github.com/kentcdodds/react-testing-library/
]

???

...

there are 3 things you're going to do in a test using react-testing-library:

---

template: module-section
layout: true
name: react-testing-library

# Testing

## react-testing-library

---

class: no-footer

### 1. Render Components

```jsx
*import { render } from 'react-testing-library';

import FriendDetail from './FriendDetail';

describe('FriendDetail', () => {
  it('renders something', () => {
    const friend = { ... };

*   const context = render(
      <FriendDetail friend={friend} />
*   );

    // ...
  });
});
```

???

you're going to render your component

---

### 2. Find Elements

???

find elements that were rendered

...

and find them the way a user would -

--

```jsx
    const context = render(<FriendDetail ... />);

*   const loadingText = context.queryByText('Loading...');
```

--

```jsx
    const context = render(<FriendDetail ... />);

*   const friendImage = context.queryByAlt('Mr. Cat The Mystery Cat');
```

--

```jsx
    const context = render(<FriendDetail ... />);

*   const loadingText = context.queryByTestId('friend-container');
```

???

you might make assertions against what was rendered & found

- like ex 1 exists
- there's 2 of ex 2
- ex 3 doesn't exist

---

template: exercise
layout: false

# Exercise 16

## Testing Component Render

---

### 3. Fire Events

```jsx
*import { render, fireEvent } from 'react-testing-library';

describe('...', () => {
  it('...', () => {
    const context = render(<FriendDetail ... />);

    const button = context.queryByText('Details >');

*   fireEvent.click(button);
  });
});
```

???

To test interactions of components,

you'll fire DOM events against the elements,

using fireEvent.

---

template: exercise
layout: false

# Exercise 17

## Testing Component Interactions

---

template: testing-section

## Deeper Learning

---

template: module-section

# Testing

## Deeper Learning

### Enzyme

#### http://airbnb.io/enzyme/

???

enzyme does a LOT of stuff;

react-testing-library tries to keep the possibilities to things that users care about

---

template: module-section

# Testing

## Deeper Learning

### Jest-DOM

#### https://github.com/gnapse/jest-dom

???

for more matchers that let you identify classes, attributes, things on DOM elements

---

template: testing-section

## Suggestions

---

template: module-section
layout: true

# Testing

## Suggestions

---

### Async Helpers

```jsx
  it('shows details after clicking button', async () => {
    const context = render(<FriendDetail />);

    const button = context.getByText('Details');

    fireEvent.click(button);

*   const details = await waitForElement(() =>
*     context.getByText('snuggles like a champion'));

    // ...
  });
```

???

specific to react-testing-library

async events are usually hard to test

but not with rtl

- A: render
- B: click a button
- C: wait for an element to appear
- D: make some assertion, ...

---

### Async Helpers

```jsx
  async wait

  async waitForElement

  async waitForDomChange
```

???

Async helpers available

- all wait 4500 ms by default

---

### Extract Complexity & Logic

???

more general suggestions:

testing logic outside of components is easier than testing logic inside of components

---

### Test What The User Experiences

#### Not Implementation

???

Avoid testing for presence of css classes, unless it's the only way to prove something is working

Prefer testing presence of text elements

react-testing-library forces you to do this

---

class: bg-contain
background-image: url('images/drawings/testing-pyramid.jpg')

### Write "Unigration" Tests

???

unit tests are small

& people can be overly dogmatic about what defines a "unit"

integration tests are too slow

& we can tell a lot from our app without pulling in db/api's

---

class: bg-contain
background-image: url('images/drawings/testing-pyramid-unigration.jpg')

### Write "Unigration" Tests

???

somewhere in the middle of those is the "unigration" zone

---

template: level-3
layout: false
class: bg-contain, no-footer
background-image: url('images/drawings/unigration-tree-1.jpg')

# Testing

## Suggestions

### Write "Unigration" Tests

???

if you're trying to test that component at the top of this subtree,

---

template: level-3
layout: false
class: bg-contain, no-footer
background-image: url('images/drawings/unigration-tree-2.jpg')

# Testing

## Suggestions

### Write "Unigration" Tests

???

test component tree with all helper functions included

mock things that are slow/we don't own (api's)

---

### Write Tests For Future You

???

You have all the context right now. You three months from now does not. Consider what they'll go through when they find a failing test! Make it easier for them to figure out.

---
