const nodeQuestions = [
  {
    question: 'What is Node.js? When might you use it?',
    answer: 'Node.js is an open-source, cross-platform JavaScript runtime environment and library to run web applications outside the client’s browser. It is used to create server-side web applications.\
    \
    Node.js is perfect for data-intensive applications as it uses an asynchronous, event-driven model.',
    hint: 'You have likely used Node.js in a backend project, can you remember why?',
    category: 'tech',
    tags: ['Node', 'JavaScript', 'Back-End'],
    links: [{
      linkName: 'Node.js Site: About',
      link: 'https://nodejs.org/en/about/'
    },
    {
      linkName: 'Medium: What is Node.js and Why You Need to Learn It',
      link: 'https://medium.com/@michaelhenderson/what-is-nodejs-and-why-you-need-to-learn-it-f0760ba9a76a'
    }]
  },
  {
    question: 'What is NPM?',
    answer: 'NPM stands for Node Package Manager, responsible for managing all the packages and modules for Node.js.\
    \
    Node Package Manager provides two main functionalities: 1. Provides online repositories for node.js packages/modules, which are searchable on search.nodejs.org\
    2. Provides command-line utility to install Node.js packages and also manages Node.js versions and dependencies',
    hint: 'Can you remember what the command "npm install/npm i" does?',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'NPM Docs: About',
      link: 'https://docs.npmjs.com/about-npm'
    }]
  },
  {
    question: 'What are modules in Node.js?',
    answer: 'Modules are like JavaScript libraries that can be used in a Node.js application to include a set of functions. To include a module in a Node.js application, use the require() function with the parentheses containing the module\'s name.',
    hint: 'An example of a built-in module import is "var http = require(\'http\');"',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'W3Schools: Node Modules',
      link: 'https://www.w3schools.com/nodejs/nodejs_modules.asp'
    }]
  },
  {
    question: 'Why is Node.js preferred over other backend technologies like Java and PHP?',
    answer: 'With Node.js you automatically get all of the pros of full stack JS development, such as:\
    1. better efficiency and overall developer productivity\
    2. code sharing and reuse\
    3. speed and performance\
    4. easy knowledge sharing within a team\
    5. a huge number of free tools',
    hint: '',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'Article: The Good and the Bad of Node App Development',
      link: 'https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/'
    }]
  },
  {
    question: 'What does event-driven programming mean?',
    answer: 'An event-driven programming approach uses events to trigger various functions. An event can be anything, such as typing a key or clicking a mouse button. A call-back function is already registered with the element executes whenever an event is triggered.',
    hint: 'You have likely used an event listener or handler on a button.',
    category: 'tech',
    tags: ['Node', 'JavaScript', 'Back-End'],
    links: [{
      linkName: 'Medium: Event Driven Programming',
      link: 'https://vsvaibhav2016.medium.com/introduction-to-event-driven-programming-28161b79c223'
    }]
  },
  {
    question: 'What is the package.json file in Node.js?',
    answer: 'The package.json file is the heart of a Node.js system. This file holds the metadata for a particular project. The package.json file is found in the root directory of any Node application or module.',
    hint: 'Your dependency list lives in this file.',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'NPM Docs: Configuring package.json',
      link: 'https://docs.npmjs.com/cli/v7/configuring-npm/package-json'
    },
    {
      linkName: 'Node.js Website: What is package.json file?',
      link: 'https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/'
    }]
  },
  {
    question: 'What is "callback hell"?',
    answer: 'Callback hell, also known as the pyramid of doom, is the result of intensively nested, unreadable, and unmanageable callbacks, which in turn makes the code harder to read and debug. It is caused by improper implementation of the asynchronous logic.',
    hint: '',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'FreeCodeCamp: How to Deal With Nested Callbacks',
      link: 'https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/'
    }]
  },
  {
    question: 'Explain the concept of middleware in Node.js.',
    answer: 'Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named "next".',
    hint: 'Express is an example of a popular middleware.',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'Medium: How Node.js Middleware Works',
      link: 'https://medium.com/@selvaganesh93/how-node-js-middleware-works-d8e02a936113'
    }]
  },
  {
    question: 'What is Express?',
    answer: 'Express is a popular Node web framework that allows you to write handlers for requests with different HTTP verbs at different URL paths (routes).\
    Express is easy to implement, minimal, and open source.',
    hint: 'An Express app might start a server and listen on a port for connections.',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'Medium: The Beginner\'s Guide to Express',
      link: 'https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1'
    },
    {
      linkName: 'MDN: Intro to Express',
      link: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction'
    },
    {
      linkName: 'Express.js.com: Hello World',
      link: 'https://expressjs.com/en/starter/hello-world.html'
    }]
  },
  {
    question: 'What is the difference between blocking and non-blocking in Node.js?',
    answer: 'Blocking refers to operations that block further execution until that operation finishes while non-blocking refers to code that doesn’t block execution. Or as Node.js docs puts it, blocking is when the execution of additional JavaScript in the Node.js process must wait until a non-JavaScript operation completes.\
    \
    Blocking methods execute synchronously while non-blocking methods execute asynchronously.',
    hint: '',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'FreeCodeCamp: Node.js',
      link: 'https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/'
    }]
  },
  {
    question: 'What is the difference between synchronous and asynchronous?',
    answer: 'Synchronous (or sync) execution usually refers to code executing in sequence. In sync programming, the program is executed line by line, one line at a time. Each time a function is called, the program execution waits until that function returns before continuing to the next line of code.\
    \
    Asynchronous (or async) execution refers to execution that doesn’t run in the sequence it appears in the code. In async programming the program doesn’t wait for the task to complete and can move on to the next task.',
    hint: '',
    category: 'tech',
    tags: ['Node', 'Back-End'],
    links: [{
      linkName: 'FreeCodeCamp: Node.js',
      link: 'https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/'
    }]
  },
  {
    question: 'What is a callback?',
    answer: 'A callback is a function passed as an argument into another function, which can then be invoked (called back) inside the outer function to complete some kind of action at a convenient time. The invocation may be immediate (sync callback) or it might happen at a later time (async callback).\
    \
    An async callback may be called when an event happens or when a task completes. It prevents blocking by allowing other code to be executed in the meantime.',
    hint: 'A good example is the callback functions executed inside a .then() block chained onto the end of a promise after that promise fulfills or rejects.',
    category: 'tech',
    tags: ['Node', 'JavaScript', 'Back-End'],
    links: [{
      linkName: 'FreeCodeCamp: Node.js Intro',
      link: 'https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2/'
    },
    {
      linkName: 'MDN: Callback Function',
      link: 'https://developer.mozilla.org/en-US/docs/Glossary/Callback_function'
    }]
  }
];

module.exports = nodeQuestions;
