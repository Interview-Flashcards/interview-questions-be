const javaScriptQuestions = [
  {
    question: 'What is scope in JavaScript? What is lexical scope? Global scope?',
    answer: 'The current context of execution. The context in which values and expressions are "visible" or can be referenced. If a variable or other expression is not "in the current scope," then it is unavailable for use. Scopes can also be layered in a hierarchy, so that child scopes have access to parent scopes, but not vice versa. In a programming environment, the global scope is the scope that contains, and is visible in, all other scopes. In client-side JavaScript, the global scope is generally the web page inside which all the code is being executed. Lexical scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions even if the parent function has returned.',
    hint: 'When are variables accessible?',
    category: 'tech',
    tags: ['JavaScript'],
    links: ['https://developer.mozilla.org/en-US/docs/Glossary/Scope', 'https://medium.com/better-programming/a-brief-introduction-to-closures-and-lexical-scoping-in-javascript-8a5866496232']
  },
  {
    question: 'Is JavaScript a pass-by-reference or pass-by-value language?',
    answer: 'From Stack Overflow: It\'s always pass by value, but for objects the value of the variable is a reference. Because of this, when you pass an object and change its members, those changes persist outside of the function. This makes it look like pass by reference. But if you actually change the value of the object variable you will see that the change does not persist, proving it\'s really pass by value.',
    hint: '',
    category: 'tech',
    tags: ['JavaScript'],
    links: ['']
  }
];

module.exports = javaScriptQuestions;
