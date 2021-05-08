const reduxQuestions = [
  {
    question: 'redux question template',
    answer: '',
    hint: '',
    category: 'Tech',
    tags: [],
    links: []
  },
  {
    question: 'What is Redux?',
    answer: 'Redux is a predictable state container and open source library for JavaScript apps based on the Flux design pattern. Redux can be used together with ReactJS, or with any other view library, such as Angular. It is tiny (about 2kB) and has no dependencies.\
    Redux contains all state in a centralized store that is globally accessible throughout the app! Application events are denoted as actions, which are dispatched to the reducer - a pure function that handles your logic and updates the store.',
    hint: 'Redux is very commonly used with React.',
    category: 'Tech',
    tags: ['Redux', 'React'],
    links: [{
      linkName: 'Redux Website',
      link: 'https://redux.js.org/'
    }, {
      linkName: 'React Redux Tutorial for Beginners',
      link: 'https://www.valentinog.com/blog/redux/'
    }]
  },
  {
    question: 'When is Redux most useful?',
    answer: '1. You have large amounts of application state that are needed in many places in the app \
    2. The app state is updated frequently \
    3. The logic to update that state may be complex \
    4. The app has a medium or large-sized codebase, and might be worked on by many people \
    5. You need to see how that state is being updated over time',
    hint: 'Would you use Redux for a small scale app? Why?',
    category: 'Tech',
    tags: ['Redux', 'React'],
    links: [{
      linkName: 'Redux Docs: FAQ',
      link: 'https://redux.js.org/faq/general'
    }, 
    {
      linkName: 'Article: When and When Not to Reach for Redux',
      link: 'https://changelog.com/posts/when-and-when-not-to-reach-for-redux'
    }]
  },
  {
    question: 'What is Flux?',
    answer: 'Redux is based on Flux - an application architecture designed for client-side apps and used in place of the more traditional Model View Controller pattern. It complements React\'s composable view components by utilizing a unidirectional data flow. It\'s more of a pattern rather than a formal framework, and you can start using Flux immediately without a lot of new code.\
    \
    In the Flux architecture, when a user clicks on something, the view creates actions. Actions can create new data and send it to the dispatcher. The dispatcher then sends the action result to the appropriate store. The store updates the state based on the result and sends an update to the view.',
    hint: 'Flux is a design pattern/application architecture - how might it differ from the traditional Model View Controller pattern?',
    category: 'Tech',
    tags: ['Redux', 'React'],
    links: [{
      linkName: 'MVC vs Flux vs Redux - The Real Differences',
      link: 'https://www.clariontech.com/blog/mvc-vs-flux-vs-redux-the-real-differences'
    },
    {
      linkName: 'Dan Abramov: The Case for Flux',
      link: 'https://medium.com/swlh/the-case-for-flux-379b7d1982c6'
    }]
  },
  {
    question: 'What are reducers in Redux?',
    answer: 'The reducer is a pure function that takes the previous state and an action - the logic to apply to that state - and returns the new state. You can think of a reducer as an event listener which handles events based on the received action (event) type.',
    hint: 'Reducers are named after the reduce method in JavaScript.',
    category: 'Tech',
    tags: ['Redux'],
    links: [{
      linkName: 'Article: Understanding Reducers',
      link: 'https://css-tricks.com/understanding-how-reducers-are-used-in-redux/#:~:text=A%20reducer%20is%20a%20function,receives%20to%20determine%20this%20change.&text=Redux%20relies%20heavily%20on%20reducer,to%20execute%20the%20next%20state.'
    },
    {
      linkName: 'Article: How Redux Reducers Work',
      link: 'https://www.smashingmagazine.com/2020/12/how-redux-reducers-work/'
    }]
  },
  {
    question: 'What are actions in Redux?',
    answer: 'An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.\
    The type field should be a string that gives this action a descriptive name, like "todos/todoAdded". We usually write that type string like "domain/eventName", where the first part is the feature or category that this action belongs to, and the second part is the specific thing that happened.\
    An action object can have other fields with additional information about what happened. By convention, we put that information in a field called "payload".',
    hint: '',
    category: 'Tech',
    tags: ['Redux'],
    links: [{
      linkName: 'Redux Docs: Concepts and Data Flow',
      link: 'https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow'
    },
    {
      linkName: 'Article: How Redux Reducers Work',
      link: 'https://www.smashingmagazine.com/2020/12/how-redux-reducers-work/'
    }]
  },
  {
    question: 'What are some major rules when using Redux - what should you not do?',
    answer: '1. Do not mutate state - this is the most common cause of bugs in Redux applications. Redux represents state as immutable objects.\  2. Reducers must not have side effects - reducers should only depend on their state and action arguments, and should only calculate new state value based on those arguments. They must not execute any kind of asynchronous logic, generate random values, modify variables outside the reducer or run other code that affects things outside the scope of the reducer function.\
    3. Do not put non-serializable values such as Promises, Symbols, Maps/Sets, functions, or class instances into the Redux store state or dispatched actions. This ensures that capabilities such as debugging via the Redux DevTools will work as expected. It also ensures that the UI will update as expected.\
    4. Only One Redux Store Per App - A standard Redux application should only have a single Redux store instance, which will be used by the whole application. It should typically be defined in a separate file such as store.js.',
    hint: '',
    category: 'Tech',
    tags: ['Redux'],
    links: [{
      linkName: 'Redux Docs: Style Guide',
      link: 'https://redux.js.org/style-guide/style-guide#put-as-much-logic-as-possible-in-reducers'
    }]
  },
  {
    question: 'What is Thunk middleware?',
    answer: 'As far as Redux is concerned, out of the box actions must be plain objects, and they must have a "type" property. Aside from that, they can contain whatever you want – anything you need to describe the action you want to perform.\
    \ Since reducers are supposed to be “pure” (as in, they don’t change anything outside their scope) we can’t do any API calls or dispatch actions from inside a reducer.\
    If you want an action to do something, that code needs to live inside a function. That function (the “thunk”) is a bundle of work to be done.\
    Redux-thunk is a middleware that looks at every action that passes through the system, and if it’s a function, it calls that function.',
    hint: '',
    category: 'Tech',
    tags: ['Redux'],
    links: [{
      linkName: 'Github: Redux-Thunk',
      link: 'https://github.com/reduxjs/redux-thunk'
    }, {
      linkName: 'Article: What the heck is a "thunk"?',
      link: 'https://daveceddia.com/what-is-a-thunk/'
    }]
  }
];

module.exports = reduxQuestions;
