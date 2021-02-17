const javaScriptQuestions = [{
  question: 'In JavaScript what is the difference between null and undefined?',
  answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
  hint: 'One is automatically applied when something is forgotten, the other is intentional.',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['https://www.youtube.com/watch?v=QVt0XfnU2Hw', 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript']
}, {
  question: 'In JavaScript what is the difference between == and ===?',
  answer: '== compares values and disregards type, and === checks type as well as value. A string of 2 == the number 2, but a string of 2 does not === the number 2, and Null == undefined. Always use === unless there is a good reason not to to avoid unexpected edge cases',
  hint: 'What are cases where they behave the same and different?',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['https://www.youtube.com/watch?v=kVOmc7NK1M0', 'https://www.youtube.com/watch?v=C5ZVC4HHgIg', 'https://codeburst.io/javascript-double-equals-vs-triple-equals-61d4ce5a121a']
}, {
  question: 'What is a prototype on a function in JavaScript?',
  answer: 'The object instance that will become the prototype for all objects created using this function as a constructor.',
  hint: 'Hint Here',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['https://www.w3schools.com/js/js_object_prototypes.asp', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function', 'https://www.youtube.com/watch?v=4jb4AYEyhRc']
}, {
  question: 'What does "this" keyword refer to in JavaScript?',
  answer: 'In a method this refers to the owner object. Alone or in a function this refers to the global object. In a function in strict mode this is undefined. In an event this refers to the element that received the event. methods like call() and apply() can refer this to any object.',
  hint: 'It refers to different things depending on where it is.',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['https://www.youtube.com/watch?v=gvicrj31JOM', 'https://www.w3schools.com/js/js_this.asp', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this']
}, {
  question: 'What is a prototype on an object in JavaScript?',
  answer: 'The object instance from which the object is inherited.',
  hint: 'Hint Here',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['https://www.youtube.com/watch?v=hS_WqkyUah8', 'https://www.w3schools.com/js/js_object_prototypes.asp', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object']
}, {
  question: 'Question here?',
  answer: 'Answer Here.',
  hint: 'Hint Here',
  category: 'tech',
  tags: ['JavaScript', 'Frontend', 'Backend'],
  links: ['']
}];

module.exports = javaScriptQuestions;
