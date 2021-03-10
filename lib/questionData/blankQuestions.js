const blankQuestions = [
  {
    question: 'no hint but has links',
    answer: 'test answer',
    hint: '',
    category: 'tech',
    tags: ['BlankQuestions'],
    links: ['https://www.youtube.com/watch?v=QVt0XfnU2Hw', 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript']
  }, {
    question: 'no links but has a hint',
    answer: 'test answer',
    hint: 'hint should be showing',
    category: 'tech',
    tags: ['BlankQuestions'],
    links: []
  },
  {
    question: 'no links and no hint',
    answer: 'answer',
    hint: '',
    category: 'tech',
    tags: ['BlankQuestions'],
    links: []
  }
];

module.exports = blankQuestions;
