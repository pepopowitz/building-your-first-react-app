titles:

Introduction
About
History
React
JavaScript
Components
Components + React
Components + React + JSX
Props
CSS
Routing
State
Events
Testing
Best Practices

Title

Setup

About
  Me
  This Workshop
    Project Structure
    The App
    Schedule
    Collaborative
    Feedback(?)
  You

History
  Plain JavaScript
  jQuery
  MVC/MVVM
  React

React
  Is
    Simplicity + Scalability
    A JavaScript library for building user interfaces
    The V in MVC
    Declarative
    Component-Based

JavaScript
  Tools
    npm
    webpack
    es-modern
  Features
    Exercise 1 - Modern JS: Modules

Components
  Component Mindset
  Exercise 2 - Component worksheet
  Suggestions

Components In React
  Components are functions TODO

    pure functions
    inputs
      props
    output
      React.createElement
    React.createElement
      arguments
      examples
      nested
      barfy
    JSX
      Why?
      Optional
      Separation Of Concerns
      Browsers Just Don't Understand
      Exercise 3(was 4) - Modern JS - transforming vars
      Exercise 4(5) - JSX fundamentals

React Components In JSX
  What can a component render?
    Arrays
    Fragments
    Portals
    Strings/numbers
    null
    Exercise 5(6) - implement different render results
    Common Errors

Props
  --
  Destructuring
  Default Props
  Children
    Composition vs Inheritance
  Exercise 6(8) - create a component that wraps children

  Deeper Learning
    Prop Validation

CSS
  CSS Imports
  CSS Modules
    Problem Solved
  CSS-in-JS
    Styled Components
  Exercise 7(10) - 3 ways to style
  Deeper Learning
    CSS in JS
  Suggestions
    Separation Of Concern
  
Routing
  React Router
    Declarative
    Routes Are Components
    <Router>
    <Route>
      path
      component
      exact
    <Link>
    <NavLink>
  Exercise 8(11) - React Router
  Suggestions
  Deeper Learning
    Transitions
    Reach Router

State
  State vs Props
  state becomes props of children
  useState (TODO)
  Exercise 9(12) - Managing Component State
  Suggestions

Events TODO - rewrite w/ hooks
  Handling Events
  Binding Event Handlers

Lifecycle
  useEffect
  Exercise 10(14): Loading Data

Application State
  Prop Drilling
  Context
    createContext
    Provider
    Consumer
  Exercise 11(15): React Context
  Deeper Learning
  Suggestions

Legacy
  Exercise 12(3) - Modern JS - class syntax
  
  Functional Vs React.Component
    Why?
    render()
    Exercise 13(7) - convert a react.Component to a stateless functional

  Component state management
    replacements for useState

    setState
      opposite of improvements
      Unidirectional Flow
        Vs Two-way binding
      State is merged
      Batching
      ({})
        Asynchronous
      (prevState => {})

      Initialization
      Handling events


  Lifecycle
    replacements for useEffect
      opposite of improvements
    Initialization
    componentDidMount
    componentDidUpdate
    componentWillUnmount

  Application state management
    replacements for useContext
      opposite of improvements
    TODO: details?    

  Exercise 14(new) - Legacy State Management
  Exercise 15(new) - Legacy Side Effects

Testing
  Jest
  Matchers
  react-testing-library
    1. Render Components
    2. Find elements
      Exercise 16: Testing Component Render
    3. Fire events
      Exercise 17: Testing Component Interactions
  Deeper Learning
  Suggestions

Good Practices
  create-react-app
  Thinking In React
  Isolate Complexity
  Break Into Pieces
  Strive For Immutability & Pure Functions

Feedback

Thank you!



Cut list

  Exercise 9 - define proptypes for components
