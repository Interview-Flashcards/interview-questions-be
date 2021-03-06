const fs = require('fs');
const pool = require('../utils/pool');
const Question = require('./Question');

describe('Question model', () => {
  beforeEach(() => {
    return pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
  });

  it('Creates a new question and adds to the database and finds it by id', async() => {
    const createdQuestion = await Question.insert({
      question: 'In JavaScript what is the difference between null and undefined?',
      answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
      hint: 'One is automatically applied when something is forgotten, the other is intentional.',
      category: 'tech',
      tags: ['JavaScript', 'FrontEndBackEnd'],
      links: JSON.stringify([
        {
          linkName: 'Youtube', 
          link: 'https://www.youtube.com/watch?v=QVt0XfnU2Hw'
        }, 
        {
          linkName: 'Stack Overflow',
          link: 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript'
        }])
    });

    const foundQuestion = await Question.findById(createdQuestion.id);

    expect(foundQuestion).toEqual(createdQuestion);
  });

  it('Creates a question, updates it and finds the updated question', async() => {
    const createdQuestion = await Question.insert({
      question: 'In JavaScript what is the difference between null and undefined?',
      answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
      hint: 'One is automatically applied when something is forgotten, the other is intentional.',
      category: 'tech',
      tags: ['JavaScript', 'FrontEndBackEnd'],
      links: JSON.stringify([])
    });

    const updatedQuestion = await Question.updateById(createdQuestion.id, {
      question: 'In JavaScript what is the difference between null and undefined?',
      answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined //true. null === undefined //false',
      hint: 'One is automatically applied when something is forgotten, the other is intentional.',
      category: 'tech',
      tags: ['JavaScript', 'FrontEndBackEnd'],
      links: JSON.stringify([
        { 
          linkName: 'Youtube',
          link: 'https://www.youtube.com/watch?v=QVt0XfnU2Hw'
        },
        {
            linkName: 'Stack Overflow',
            link: 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript'
        }])
    });

    const foundQuestions = await Question.find();

    console.log(foundQuestions[0]);

    expect(foundQuestions[0]).toEqual(updatedQuestion);
  });

  it('Creates two questions and deletes one and finds only the remaining when searching all', async() => {
    const createdQuestion = await Question.insert({
      question: 'Why did the chicken cross the road?',
      answer: 'To learn how to code',
      hint: 'One is automatically applied when something is forgotten, the other is intentional.',
      category: 'tech',
      tags: ['JavaScript', 'FrontEndBackEnd'],
      links: JSON.stringify([])
    });

    const createdQuestion2 = await Question.insert({
      question: 'test question?',
      answer: 'null is an explicit nothing and has a typeof object, undefined has been declared and not yet assigned and has a typeof undefined. null == undefined true. null === undefinedfalse',
      hint: 'One is automatically applied when something is forgotten, the other is intentional.',
      category: 'tech',
      tags: ['JavaScript', 'FrontEndBackEnd'],
      links: JSON.stringify([
        { 
          linkName: 'Youtube',
          link: 'https://www.youtube.com/watch?v=QVt0XfnU2Hw', 
        },
        {
          linkName: 'Stack Overflow',
          link: 'https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript'
        }])
    });

    Question.deleteById(createdQuestion.id);

    const foundQuestions = await Question.find();

    expect(foundQuestions[0]).toEqual(createdQuestion2);
  });

  it('updates the database with the questions', async() => {
    const apiData = require('../questionData/apiQuestions');
    const cssData = require('../questionData/cssQuestions');
    const databaseData = require('../questionData/databaseQuestions');
    const javaScriptData = require('../questionData/javaScriptQuestions');
    const miscData = require('../questionData/miscQuestions');
    const nodeData = require('../questionData/nodeQuestions');
    const reactData = require('../questionData/reactQuestions');
    const reduxData = require('../questionData/reduxQuestions');
    const starData = require('../questionData/starQuestions');
    const codeChallengeData = require('../questionData/codeChallengeQuestions');

    const questionData = apiData.concat(cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, starData, codeChallengeData);

    await Promise.all(
      questionData.map(question => (
        Question.insert({
          question: question.question,
          answer: question.answer,
          hint: question.hint,
          category: question.category,
          tags: question.tags,
          links: JSON.stringify(question.links)
        })
        .then(console.log(question.question))
    )));
  }); 
});
