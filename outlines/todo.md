# Hooks

- lead with hooks for useState
  Note: also talk about functional updater (setValue(c => c + 1))

  Dan Abramov: When setting a state variable depends on the current value of another state variable, you might want to try replacing them both with useReducer. https://overreacted.io/a-complete-guide-to-useeffect/

  Good example of useReducer: https://codesandbox.io/s/xzr480k0np

- Rewrite Events
  Make sure I mention that you can hook up an event like this:
  `onClick={value.onThemeChanged}`
- remove old hooks section
- hooks mentions in talk

  after useContext:
  "we've looked at three different hooks, ..."
  why?
  https://reactjs.org/docs/hooks-intro.html#motivation
  rules
  https://reactjs.org/docs/hooks-rules.html
  custom hooks

- rewrite legacy talk

# Talk

- fill in resources

- add agenda/schedule

- explain state better

- context is too big of a leap. remove context & useContext; mention context as another "future". This should give me enough time to get through state AND testing, and maybe even have space at the end for questions.

- Add "suitcase" conversation to drive home the putting code together that changes together. (or maybe as good practices?)

- Modern JS exercises need a "Welcome to JavaScript" slide at the end, where I put on a cowboy hat, say "welcome to javascript", show a slide with a wild wild west scene, and pretend to shoot a six-gun (with sound-effect!!!!)

- Modern JS: give guidance/recap after each exercise.
  - ex 1: "we'll use default in most cases, named when a file does/could do multiple things."
    - some people prefer always using named for refactoring/finding function names

* Redo npm growth graph

* stateless functional -> functional

* talk about async & waiting in testing interactions
  https://testing-library.com/docs/api-async#wait

# maybe

- Slide downloads? tweet if you do.

- Add time for 20 minutes? of questions at the end

# Exercises

- replace classes with functions

- write instrux for ex 1: modernjs: modules

- write instrux for ex 2: identifying components

- write instrux for ex 3: class syntax

- write instrux for ex 4: working with objects

- test windows subsystem for linux

- test fish shell

- Revisit all instructions. Add more detail & clarity.

- Modern JS #4 is way too fast. Slow down, talk more about what you're doing.

- All Modern JS exercises need to change. More instructions, so they can see the answers for what i'm doing? Let them do it on their own? Find a way to make it more hands-on for them, easier for them to get to the answers, and still not take a lot of time.

- Inconsistent names of functions - make sure I **always** name functions in examples/solutions!

- In instructor notes for import/export, make sure I talk more about named vs default more!

- Explain async stuff better

- Ex 11 - take a look at FriendFlipper in completed/SOLUTIONS. Something might be wrong with it.

- At least one place has the wrong name of prevState/prevProps. Check them!

- Many modern JS features can be removed from "big up-front" exercises! Object destructuring, array destructuring, implicit return can all be held back until they see code without them - and sprinkle them in when they come up (just mention them)! There are probably other features that could do the same!

---

Things I need before exercise 5:

X modules
X fat arrows

Array.map
ternary

things to introduce later:

implicit return - no, just avoid it until I _need_ it later

1: Modern JS: Modules & fat-arrow
2: Component worksheets
3: Modern JS: Transforming var's (was 4)
4: JSX Fundamentals (was 5)
5: What can a component render? (was 6)
6: Props.children (was 8)
7: CSS (was 10)
8: React Router (was 11)
9: Managing component state (was 12)
10: Loading data (was 14)
11: React Context (was 15)
12: Modern JS: Class syntax (was 3)
13: Converting Components (was 7)
15: Convert useState to setState (new)
16: Convert useEffect to lifecycles (new)
17: Testing component render
18: Testing component interactions

---

# Schedule

## ForwardJS

9:30-12:00 (2:30) + 1:00-4:30 (3:30)

skip app state, testing???

## Codemash

about -> 8:10
meet -> 8:12
history -> 8:12
ex 2 8:45 -> ?
...
ex 4 ? -> 9:35
break 9:35-9:45
9:45-10:05 ex 5
10:10-10:30 ex 6
10:35-10:55 (with choose-your-own-break built in) ex 7
11:10-11:25 ex 8
CSS talking: took me to lunch. Also took more like 15-20 minutes to talk about.
ex 10 1:10-1:10 (but they also worked on it over lunch, maybe)
s12 routing 1:10-1:25
ex11 router 1:25-1:45
s13 state 1:45-2:05
x12 state 2:05-2:25
break - 2:30
s14,x13,s15 2:30-2:55
x14 load data 2:55-3:15
we skipped context & testing exercises & just talked through & looked at code.
