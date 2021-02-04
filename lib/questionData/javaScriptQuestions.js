const javaScriptQuestions = [{
  question: 'In JavaScript what is the difference between null and undefined?',
  answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
  hint: 'One is automatically applied when something is forgotten, the other is intentional.',
  category: 'tech',
  tags: ['JavaScript', 'FrontEndBackEnd'],
  links: ['https://www.youtube.com/watch?v=QVt0XfnU2Hw', 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript']
}, {
  question: 'In JavaScript what is the difference between == and ===?',
  answer: '== will compare value and === will compare type and value. 1 == \'1\' // true and \'\' == 0 // true.',
  hint: 'put hint here',
  category: 'tech',
  tags: ['JavaScript', 'FrontEndBackEnd'],
  links: []
}];

module.exports = javaScriptQuestions;
