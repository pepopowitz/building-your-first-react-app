React fundamentals
The 'Component' mindset
JSX, a strange-looking hybrid between JavaScript and HTML
Verifying component inputs
Styling React components
Routing
State management
Automated testing
Best practices


About
  about me
    skip it?
      just show art from kids?
    javascript engineer
  nm?
    skip it?
  About This Workshop
    Collaborative
      You + me
      You + your neighbor
        pair up on the exercises!
          raise your hand if you're interested in pairing
        teaching is one of the best ways to learn
          and pairing is a great way to teach AND learn
    Schedule
    Feedback
      Green = good
      Yellow = okay
      Red = bad
      Comments = :100:
    Meet your neighbors!
      name
  About You
    New to JS?
    New to JS UI frameworks?
    New to React?
    Developers?
    UX/Designers/????
  
History of JavaScript web apps
  plain JS
    hard to write
    didn't scale to an app
  jQuery
    easy to write
    didn't scale to an app
  Knockout/Backbone/AngularJS
    sometimes they scaled to an app, but were complex
    sometimes they were simple, but didn't scale to an app

  React
    good balance of simplicity and scaling to an app
    That's the problem React solves: scaling simple, understandable code to a large app.
      simplicity:
        hope you can experience today
      scalability:
        30000
          # of components in Facebook's codebase
          source: https://medium.com/@dan_abramov/hey-thanks-for-feedback-bf9502689ca4
            Dan Abramov




React Fundamentals

  What Is React?
    // from getting started with react
    A JavaScript library for building user interfaces
      from their site
      dumb - of course that's what it is
      but there's meaning here - it is ONLY a UI framework
    The V in MVC (maybe VC)
      And nothing more
      Angular: monolith :: React : microlibraries
      Unix principle
        "Choosing React is like building your own computer, vs buying one off the shelf"
    React Is Declarative
      Imperative code is abstracted
        example: driving directions vs address
      "Declarative views make your code more predictable and easier to debug."
    React Is Component-Based
      "Build encapsulated components that manage their own state, then compose them to make complex UIs."
    React Is ("Just") JavaScript
      Not totally true
      But it's closer to writing plain JS than probably any other JS UI framework
    
    JavaScript Tools
      npm
        Node Package manager
        Problem solved: reuse of code
      webpack
        Problem solved: large amounts of JavaScript sent over the wire
      create-react-app
        Problem solved: Setting up webpack is difficult
    JavaScript Features

2gether exercise (1): Modern JS fundamentals (lambdas & modules)

Components
  React Is Component-Based
    The 'Component' Mindset
      example

solo exercise (2): Components
  break listy into components (on paper)
  take-aways
    Components are about ISOLATION, more than they are about reuse
      So find the isolated pieces/seams & make them components
    Decompose your components


Components In React

2gether exercise (3): Modern JS fundamentals (class syntax)

  Components implement a render() method
    example
      React.createElement (single element)
      nested elements
      show what the examples translate to
    from docs: 
      The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser. If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead. Keeping render() pure makes components easier to think about.

    also from docs:
      https://reactjs.org/docs/components-and-props.html
      Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

  Components receive input data (props, state) describing the current state
  Components can be thought of as pure functions
  
  Components are re-rendered as their inputs change (props, state)
    one-way data flow
    Reconciliation
      Updating the DOM is slow
      Virtual DOM

  Components are a hierarchy of calls to React.createElement
    talk about details of createElement
    show examples of deeply nested


  Components can be written with JSX
    JSX is optional
    Problem it solves
      terser syntax?
      ????

    Separation of concerns
    Browsers don't understand it
          
2gether exercise (4): Modern JS fundamentals (transforming variables)

solo exercise (5): JSX fundamentals
  https://reactjs.org/docs/introducing-jsx.html
  className
  conditional rendering
    https://reactjs.org/docs/conditional-rendering.html
  rendering a list {list.map(item => {...})}
    key property
    https://reactjs.org/docs/lists-and-keys.html
  fragments, arrays
  handling events
    https://reactjs.org/docs/handling-events.html


React Components in JSX

  extends React.Component
    render()
      https://reactjs.org/docs/react-component.html#render
      When called, it should examine this.props and this.state and return one of the following types:
      React elements. Typically created via JSX. For example, <div /> and <MyComponent /> are React elements that instruct React to render a DOM node, or another user-defined component, respectively.
      Arrays and fragments. Let you return multiple elements from render. See the documentation on fragments for more details.
      Portals. Let you render children into a different DOM subtree. See the documentation on portals for more details.
      String and numbers. These are rendered as text nodes in the DOM.
      Booleans or null. Render nothing. (Mostly exists to support return test && <Child /> pattern, where test is boolean.)

2gether exercise (6): implement render several times, returning each of those things ^^^.

  stateless functional
    reasons to use stateless functional
    compare to React.Component
      this.props.X vs {X}
      no life-cycle events
    favor stateless functional

solo exercise (7): convert a react.component to a stateless functional

  common errors:
    Always start component names with a capital letter.
    
    Uncaught Error: Component(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
      forgot to return something from render
      return <...> on multiple lines needs to be wrapped with ()!
  

props
  can't be modified!
  passing strings, numbers, variables, etc  

  default props

  destructuring in ES6 (to pass props)

  children
    composition of components (versus inheritance)

solo exercise (8): create a component that wraps children

  type checking
    proptypes

2gether exercise (9): define proptypes for a component so that one call works and the other doesn't

    next: flow, typescript

    {}


css
  traditional
    className
    import './styles.css';

solo exercise (10): traditional styles

  css-in-js
    show "the slide"
    talk about suitcases

  mid-level: css-modules

2gether exercise: css-modules

  next: css-in-js
    styled components, etc

  conclusion
    you don't HAVE to do css-in-js
    the important thing is that you have component-based css
      via imported css, imported scss, css modules, css-in-js....
      The main takeaway is that styles are not a separate concern from the rest of the component.



Routing
  talk about organizing suitcases here?
  routes are just components

2gether exercise (12): build out router
  add links to our column headers & row headers, to take us to a "friend detail" or "list detail" page

solo exercise (13): build a header component, and have it displayed for all routes?


  next:
    authenticated routes




state
  state vs props
    state
      https://reactjs.org/docs/state-and-lifecycle.html
  lifecycle methods
    constructor
      initialize state
      bind event handlers to an instance?
    componentDidMount
      make API requests from here!
      subscribe to things here (and unsubscribe in componentWillUnmount)
      
    componentDidUpdate
      check to see if the props have changed, to avoid performance problems!
    componentWillUnmount

    high-level:
      shouldComponentUpdate
        PureComponent - basically does this check for you.
          PureComponent performs a *shallow* comparison of props and state, and reduces the chance that you’ll skip a necessary update.
      getDerivedStateFromProps
      getSnapshotBeforeUpdate
      componentDidCatch
        for defining Error Boundaries

  setState
    immutability
    setState({})
    setState(prevState => {})
    return only the state you want to update

2gether exercise (14): return only the state we want to update

2gether exercise (15): Modern JS - async/await

2gether exercise (16): load actual data into grid, from api

solo exercise: load list/friend (17) from api endpoint in detail pages

  maybe two parts - 1, load something from an api endpoint. 2, hook up events.

Context
  prop drilling
  how Context solves it

  Context
  Provider
  Consumer

2gether exercise (18): write context.provider & one context.consumer together

solo exercise (19): write other context.consumers on your own


  next: redux, mobx
  conclusion
    elevate State
    use setState for local state
    Context for "cross-cutting" state
    redux/mobx for app state with traceability


handling events????
  attaching event handlers in a Component
  attaching event handlers in a stateless functional
    passing event handlers to children
  binding to this
    .bind(this) in constructor
    fat arrow functions
    class fields
  is this better before state?

2gether exercise (20): addFriendToList
solo exercise (21): removeFriendFromList
  set them up with unit tests ahead of time


testing???
  jest
  extract logic from components & test in isolation
  enzyme

2gether exercise (22): write a test that renders a conditional component

2gether exercise (23): write a test that simulates an event?

  next: react-testing-library
  
  suggestions



best practices
  thinking in react
    https://reactjs.org/docs/thinking-in-react.html
    components
    building an app
      sketch out components
      build out components via stateless functional components
      add state
    this makes sense to talk about after doing the component, jsx, and state exercises!
      "The order of these exercises was intentional! this is a recommended approach to building a react app."

  compose, don't inherit
  
  break things into small pieces, by responsibility

  strive for immutability & pure functions








forms
  https://reactjs.org/docs/forms.html
  controlled components vs uncontrolled

debugging
  react dev tools
  hot module reloading

props as children???
  find a way to work this in.
  <SecondaryPage>

error boundaries?



potential exercises
  return loading message when friends haven't loaded yet
  bonus exercises: build out friend detail pages?
  
TODO - figure out when to introduce create-react-app, and how to cover it. Maybe a super early getting started slide, & just show what it looks like????
  if it gets a "next", that's ejecting & learning about webpack
