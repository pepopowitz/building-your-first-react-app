
template: module-title
layout: false

# Testing
## Testing

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
describe('A set of tests', () => {
  it('does a certain thing', () => {
    const result = aFunctionUnderTest();

    expect(result).toEqual('a value');
  });
});

```

---
template: module-section
# Testing
## Jest

### Assertions

```javascript
Examples of assertions
```

---

## react-testing-library

> Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.

.footnote[
http://airbnb.io/enzyme/
]

---

## Enzyme

drawing of component tree

???

scenario

---

### shallow

```javascript
const wrapper = shallow(<FriendsList friends={testFriends} />);
```

---

### shallow

drawing of shallow

---

### mount

```javascript
const wrapper = mount(<FriendsList friends={testFriends} />);
```

---

### mount

drawing of mount

---

### Finding Elements

```javascript
it('renders my friends', () => {
  const friends = [
    {...}, {...}, {...}, {...}, {...}
  ];

  const wrapper = mount(<Friends friends={testFriends} />);

  expect(
    wrapper.find('.friendProfile').length
  ).toEqual(5);
});

```

---
template: exercise
layout: false

# Exercise 17
## Testing Component Render

---

### fireEvent

```javascript
const wrapper = mount(<Friends friend={testFriend} />);

wrapper.find('.toggleCheckbox').simulate('click');

expect(wrapper.find('.added').length).toEqual(1);
```

---
template: exercise
layout: false

# Exercise 18
## Testing Component Interactions

---

## Deeper Learning

---
template: module-section
# Testing
## Deeper Learning

### Enzyme

.footnote[
http://airbnb.io/enzyme/
]

???

enzyme does a LOT of stuff;

react-testing-library tries to keep the possibilities to things that users care about

---

## Suggestions

---
template: module-section
layout: true

# Testing
## Suggestions

---

### Extract Complexity & Logic

???

testing logic outside of components is easier than testing logic inside of components

---

### Test What The User Experiences
#### Not Implementation

???

Avoid testing for presence of css classes, unless it's the only way to prove something is working

Prefer testing presence of text elements

react-testing-library forces you to do this

---

### Component Tests Don't Matter That Much

???

if you're looking at adding component tests and you don't have all your business logic covered, start there instead.

---

### Write Tests For Future You

drawing

???

You have all the context right now. You three months from now does not. Consider what they'll go through when they find a failing test! Make it easier for them to figure out.

---
