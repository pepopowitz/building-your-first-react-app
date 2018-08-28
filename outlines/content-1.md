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

Setup

About
  Me
  This Workshop
    Project Structure
    Collaborative
    Schedule
    Feedback(?)
  You

History
  Plain JavaScript
  jQuery
  MVC/MVVM
  React

React
  Is
    A JavaScript library for building user interfaces
    The V in MVC
    Declarative
    Component-Based
    "Just" JavaScript

JavaScript
  Tools
    npm
    webpack
    create-react-app
  Features
    Exercise 1 - Modern JS - modules

Components
  Component Mindset
  Exercise 2 - Component worksheet
  Suggestions

Components In React
  JavaScript Features
    Exercise 3 - Modern JS - class syntax
  render()
    pure functions
    inputs
      props & state
    output
      React.createElement
    React.createElement
      arguments
      examples
      nested
    JSX
      Optional
      Problem Solved
        terser syntax; ???
      Separation Of Concerns
      Browsers Just Don't Understand
      Exercise 4 - Modern JS - transforming vars
      Exercise 5 - JSX fundamentals

React Components In JSX
  render()
    Arrays
    Fragments
    Portals
    Strings/numbers
    null
    Exercise 6 - implement different render results
  Stateless functional
    Vs React.Component
    Why?
    Exercise 7 - convert a react.Component to a stateless functional
    Common Errors

Props
  --
  Destructuring
  Default Props
  Children
    Composition vs Inheritance
  Exercise 8 - create a component that wraps children

  PropTypes
  Exercise 9 - define proptypes for components
  Deeper Learning

CSS
  CSS Imports
  Exercise 10 - traditional styles
  CSS Modules
    Problem Solved
  Exercise 11 - css-modules
  Deeper Learning
    CSS-in-JS
      Styled Components
  Suggestions
    Separation Of Concern
  
Routing
  React Router
    Declarative
    Routes Are Components
    <Router>
    <Route>
      exact
      path
      component
    <Link>
    <NavLink>
  Exercise 12 - build router
  Exercise 13 - header component
  Deeper Learning
    Transitions

State
  State vs Props
  Unidirectional Flow
    Vs Two-way binding
  setState
    Immutability
    Asynchronous
    Batching
    ({})
    (prevState => {})
  Exercise 14 - return only the state we want to update
  Exercise 15 - Modern JS - async/await

  Lifecycle Methods
    constructor
    componentDidMount
    componentDidUpdate
    componentWillUnmount
    Others

  Containers
    Problem Solved

  Exercise 16 - load data into grid, from api
  Exercise 17 - load list/friend from api endpoint in detail pages

  Context
    Prop Drilling
    How Context Solves It
    Context
    Provider
    Consumer
    Exercise 18 - Write context.provider/consumer together
    Exercise 19 - write context.provider/consumer on your own
  
  Deeper Learning
  Suggestions

Events
  Container/Component
  Stateless functional
  Binding
    Why?
    constructor
    Fat arrow handlers
    Class fields
  setState
    (you might want to do this from an event handler)
  async/await
    (often you need to do this before you can setState)
  Example
  Exercise 20 - addFriendToList
  Exercise 21 - removeFriendFromList

Testing
  Jest
  Extract Logic & Complexity
  Enzyme
    shallow
    render
    mount

  Exercise 22 - test a conditional component

    simulate
    
  Exercise 23 - simulate an event

  Deeper Learning
  Suggestions

Best Practices
  Thinking In React
  Composition Over Inheritance
  Isolate Complexity
  Break Into Pieces
  Strive For Immutability & Pure Functions
