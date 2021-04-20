const reactQuestions = [
  {
    question: 'react question template',
    answer: '',
    hint: '',
    category: 'Tech',
    tags: [],
    links: []
  },
  {
    question: 'What are the advantages of using React?',
    answer: '1. React is easy to learn and easy to use, with great documentation and tutorials.\ 2. Reusable components - React uses component-based architecture for developing applications. Components are independent and reusable bits of code that can be shared across various applications having similar functionality. The re-use of components increases the pace of development.\
    3. Huge ecosystem of libraries to choose from - React provides you the freedom to choose the tools, libraries, and architecture for developing an application based on your requirement.\
    4. Great developer tools - React offers useful developer tools, which allow you to inspect components in the browser and even edit their state.\
    5. Faster rendering via the virtual DOM - This is a virtual representation of the DOM, which lives in memory and not on your screen. React determines the most efficient way to make changes to the real DOM, which guarantees a minimum update time and therefore better performance.\
    6. Better code stability - React follows downward data flow to ensure that the parent structure won\'t be affected by changes to children. Only that specific component will be updated.',
    hint: 'Have you enjoyed using React, and if so, why? Think about how React is different than other frameworks - for example, the virtual DOM.',
    category: 'Tech',
    tags: ['React', 'Front-End'],
    links: [
      {
        linkName: 'React Interview Questions (with Answers)',
        link: 'https://www.interviewbit.com/react-interview-questions/'
       },
       {
         linkName: 'Article: Top 5 Benefits of React',
         link: 'https://www.telerik.com/blogs/5-benefits-of-reactjs-to-brighten-a-cloudy-day'
       },
      {
        linkName: 'Article: Reasons to Choose React.js for Your Next Project',
        link: 'https://www.peerbits.com/blog/reasons-to-choose-reactjs-for-your-web-development-project.html'
      },
    {
      linkName: 'YouTube: What is React and Why is it So Popular?',
      link: 'https://www.youtube.com/watch?v=N3AkSS5hXMA'
    }]
  },
  {
    question: 'What is JSX?',
    answer: 'JSX stands for JavaScript XML. JSX allows you to write HTML inside JavaScript and place it in the DOM without using functions. It is technically syntactic sugar for the React.createElement function!\
    You can create react applications without using JSX.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [    
      {
      linkName: 'React Interview Questions (with Answers)',
      link: 'https://www.interviewbit.com/react-interview-questions/'
     },
    {
      linkName: 'React.js Docs: JSX',
      link: 'https://reactjs.org/docs/introducing-jsx.html'
    }]
  },
  {
      question: 'What are the differences between functional and class components?',
      answer: 'Before the introduction of Hooks in React, functional components were called stateless components and were behind class components on feature basis. After the introduction of Hooks, functional components became equivalent to class components.\
      Although functional components are the new trend, the react team insists on keeping class components in React. Therefore, it is important to know how these both components differ:\
      Functional components are JavaScript functions and incorporate state via Hooks. Any prop provided as an argument to this component can be directly used inside HTML elements.\
      Class components are declared using the ES6 class and handle props via the "this" keyword (this.props). In a class, state is handled via a constructor and the setState function.',
      hint: 'How have you handled props and state when using a React function vs class component?',
      category: 'Tech',
      tags: ['React'],
      links: [
        {
          linkName: 'React Interview Questions (with Answers)',
          link: 'https://www.interviewbit.com/react-interview-questions/'
         },
        {
          linkName: 'Article: Differences Between Functional Components and Class Components in React',
          link: 'https://www.https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/freecodecamp.org/news/functional-components-vs-class-components-in-react/'
        }]
  },
  {
        question: 'What are presentational and container components?',
        answer: '(Note: Using this pattern is a personal choice)\ Presentational components are mainly concerned with how things look (styling) and are stateless. Container components are concerned with how things work and are stateful. This provides a separation of concerns and can make your code easier to work with.',
        hint: 'How have you structured React apps in the past - which components have state?',
        category: 'Tech',
        tags: ['React'],
        links: [{
          linkName: 'Dan Abramov: Presentational and Container Components',
          link: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0'
        },
      {
        linkName: 'Is it true that components in a ReactJS app should be divided into container components and presentational components?',
        link: 'https://dev.to/sunflower/is-it-true-that-reactjs-app-should-be-divided-into-container-components-and-presentational-components-2fde'
      }]
  },
  {
    question: 'What is the virtual DOM? How does react use the virtual DOM to render the UI, and why is it useful?',
    answer: 'DOM stands for “Document Object Model”. The DOM in simple words represents the UI of your application. Everytime there is a change in the state of your application UI, the DOM gets updated to represent that change.\
    \
    React uses a virtual representation of the DOM. Everytime the state of the application changes, the virtual DOM gets updated instead of the real DOM.\
    \
    In React every UI piece is a component, and each component has a state. React follows the observable pattern and listens for state changes. When the state of a component changes, React updates the virtual DOM tree. Once the virtual DOM has been updated, React then compares the current version of the virtual DOM with the previous version of the virtual DOM. This process is called “diffing”.\
    \
    Once React knows which virtual DOM objects have changed, then React updates only those objects, in the real DOM. This makes the performance far better when compared to manipulating the real DOM directly. This makes React standout as a high performance JavaScript library.',
    hint: 'DOM stands for "Document Object Model" and is a representation of the UI.',
    category: 'Tech',
    tags: ['React', 'JavaScript'],
    links: [{
      linkName: 'Stack Overflow: What is the Virtual DOM?',
      link: 'https://stackoverflow.com/questions/21965738/what-is-virtual-dom'
    },
    {
      linkName: 'Article: Virtual DOM Explained',
      link: 'https://programmingwithmosh.com/react/react-virtual-dom-explained/'
    },
    {
      linkName: 'YouTube: React and the Virtual DOM',
      link: 'https://www.youtube.com/watch?v=BYbgopx44vo'
    }]
  },
  {
    question: 'What are React Hooks?',
    answer: 'Hooks allow us to use state locally in functional components, outside of a class.\
    The useState hook returns a pair: the current state value and a function that lets you update it. It is similar to this.setState in a class, expect it doesn\'t merge the old and new state together. The only argument to useState is the initial state.',
    hint: 'How do you manipulate state outside of a class component?',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Hooks',
      link: 'https://reactjs.org/docs/hooks-overview.html'
    },
    {
      linkName: 'React.js Docs: Rules of Hooks',
      link: 'https://reactjs.org/docs/hooks-rules.html'
    }]
  },
  {
    question: 'What are the different ways to style a React component?',
    answer: '1. Inline styling - You can directly style an element using inline style attributes. 2. JSS - JSS is an authoring tool that allows you to create a JavaScript object to call styles from, used in place of an inline style. 3. CSS Stylesheet - You can create a separate CSS file and use the className attribute to apply styles from that stylesheet within the component. 3. CSS Modules - Create a separate CSS module and import it inside the component.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'Article: Styling Components in React',
      link: 'https://www.smashingmagazine.com/2020/05/styling-components-react/ttps://www.interviewbit.com/react-interview-questions/#react-hooks'
    },{
      linkName: 'React.js Docs: Styling and CSS',
      link: 'https://reactjs.org/docs/faq-styling.html'
    },
    {
      linkName: 'JSS Website',
      link: 'https://cssinjs.org/?v=v10.6.0'
    }]
  },
  {
    question: 'What are keys in React?',
    answer: 'A key is a special string attribute that needs to be included when using lists of elements. Keys help react identify which elements were added, changed or removed. Keys should be given to array elements for providing a unique identity for each element.Without keys, React does not understand the order or uniqueness of each element.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Lists and Keys',
      link: 'https://reactjs.org/docs/lists-and-keys.html'
    }]
  },
  {
    question: 'How do you pass data between React parent and child components?',
    answer: 'Via props! React is organized by a tree-like structure of parent and child components. Parent components send props down to children components. Children send data to parent components via functions known as callbacks. A callback is declared in the parent component, and the callback itself is sent to the child as a prop. When the child uses the callback and is interacted with through an event, it sends data back to the parent.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'Article: How to Pass Data Between React Components',
      link: 'https://www.pluralsight.com/guides/how-to-pass-data-between-react-components'
    },
    {
      linkName: 'YouTube: React Basics - Passing Data Between Parent and Child Components',
      link: 'https://www.youtube.com/watch?v=5Xew--ycx0o'
    },
    {
      linkName: 'Article: Passing Data Between React Components',
      link: 'https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17'
    }]
  },
  {
    question: 'How would you pass data between sibling components?',
    answer: 'To pass data between siblings, you have to use the parent as an intermediary. First pass the data from the child to the parent, as an argument into a callback from the parent. Set this incoming parameter as a state on the parent component, then pass it as a prop to the other child. The sibling can then use the data as a prop.\
    You can also use Redux to manage state between components, or React\'s Context API, which saves you from prop drilling (passing down variables to subcomponents).',
    hint: 'Do the sibling components need to be passed props from their parent component?',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'Article: Passing Data Between React Components',
      link: 'https://medium.com/@ruthmpardee/passing-data-between-react-components-103ad82ebd17'
      },
      {
        linkName: 'YouTube: Passing Data Between Siblings',
        link: 'https://www.youtube.com/watch?v=Qf68sssXPtM'
      }]
  },
  {
    question: 'What is prop drilling and how might you avoid it?',
    answer: 'Prop Drilling is the process by which you pass data from one part of the React Component tree to another by going through other parts that do not need the data but only help in passing it around.\
    If we are passing data only between 2 or 3 levels, we are fine. It will be easy to trace the flow of data. But imagine, we are drilling 5 levels, or 10 levels, or 15.\
    One way to avoid this is Redux: You create a data store and access the store from any component.\
    React also has the Context API which is similar to Redux in that it creates a data store and any component in context can have access to the data store',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'Article: How to Avoid Prop Drilling in React Using Component Composition',
      link: 'https://javascript.plainenglish.io/how-to-avoid-prop-drilling-in-react-using-component-composition-c42adfcdde1b'
    }]
  },
  {
    question: 'What is the Context API and when is it useful?',
    answer: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.\
    \
    If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Context',
      link: 'https://reactjs.org/docs/context.html#before-you-use-context'
      },
      {
        linkName: 'YouTube: Context Tutorial',
        link: 'https://www.youtube.com/watch?v=35lXWvCuM8o'
      },
      {
        linkName: 'YouTube: Learn useContext in 13 Minutes',
        link: 'https://www.youtube.com/watch?v=5LrDIWkK_Bc'
    }]
  },
  {
    question: 'What is the React lifecycle?',
    answer: 'Every component in React goes through phases of events known as the lifecycle - mounting, updating, and unmounting. Mounting is when the component is first created. Updating is when the component is changed via state or props. Unmounting is when the component is removed from the DOM.\
    There are several lifecycle methods - some are being deprecated and now considered "unsafe", so it is best to check the docs for the most up-to-date methods.',
    hint: 'An example of a React lifecycle method is componentDidMount()',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React Lifecycle Method Cheatsheet',
      link: 'https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/'
    },
    {
      linkName: 'React.js Docs: Components',
      link: 'https://reactjs.org/docs/react-component.html'
    },
    {
      linkName: 'Article: React Lifecycle Methods',
      link: 'https://programmingwithmosh.com/javascript/react-lifecycle-methods/'
    },
    {
      linkName: 'Article: The (New) React Lifecycle Methods',
      link: 'https://blog.logrocket.com/the-new-react-lifecycle-methods-in-plain-approachable-language-61a2105859f3/'
    }]
  },
  {
    question: 'What is the difference between state and props?',
    answer: 'props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Component State',
      link: 'https://reactjs.org/docs/faq-state.html'
    },{
      linkName: 'Article: Props vs State',
      link: 'https://github.com/uberVU/react-guide/blob/master/props-vs-state.md'
    }]
  },
  {
    question: 'What are Higher-Order Components',
    answer: 'A higher-order component (HOC) is an advanced technique in React for reusing component logic. HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.\
    A higher-order component is a function that takes a component and returns a new component.',
    hint: '',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Higher-Order Components',
      link: 'https://reactjs.org/docs/higher-order-components.html'
    }]
  },
  {
    question: 'What are error boundaries?',
    answer: 'A JavaScript error in a part of the UI shouldn’t break the whole app. To solve this problem for React users, React 16 introduces a new concept of an “error boundary”.\
    \
    Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed. Error boundaries catch errors during rendering, in lifecycle methods, and in constructors of the whole tree below them.\
    \
    Error boundaries work like a JavaScript catch {} block, but for components. Only class components can be error boundaries.',
    hint: 'Where might you want to check for an errors in React?',
    category: 'Tech',
    tags: ['React'],
    links: [{
      linkName: 'React.js Docs: Error Boundaries',
      link: 'https://reactjs.org/docs/error-boundaries.html'
    }]
  },
  {
      question: 'What are PropTypes?',
      answer: 'As your app grows, you can catch a lot of bugs with typechecking. For some applications, you can use JavaScript extensions like Flow or TypeScript to typecheck your whole application. But even if you don’t use those, React has some built-in typechecking abilities. To run typechecking on the props for a component, you can assign the special propTypes property.\
      \ PropTypes exports a range of validators that can be used to make sure the data you receive is valid. When an invalid value is provided for a prop, a warning will be shown in the JavaScript console. For performance reasons, propTypes is only checked in development mode.',
      hint: '',
      category: 'Tech',
      tags: ['React'],
      links: [{
        linkName: 'React.js Docs: PropTypes',
        link: 'https://reactjs.org/docs/typechecking-with-proptypes.html'
      },
    {
      linkName: 'NPM: PropTypes (Recommended)',
      link: 'https://www.npmjs.com/package/prop-types'
    }]
  }
];

module.exports = reactQuestions;
