const pool = require('../lib/utils/pool');
const fs = require('fs');
const Question = require('../lib/models/Question');

const apiData = require('./questionData/apiQuestions');
const cssData = require('./questionData/cssQuestions');
const databaseData = require('./questionData/databaseQuestions');
const javaScriptData = require('./questionData/javaScriptQuestions');
const miscData = require('./questionData/miscQuestions');
const nodeData = require('./questionData/nodeQuestions');
const reactData = require('./questionData/reactQuestions');
const reduxData = require('./questionData/reduxQuestions');
const starData = require('./questionData/starQuestions');
const codeChallengeData = require('./questionData/codeChallengeQuestions');

const blankQuestions = require('./questionData/blankQuestions');

const questionData = apiData.concat(blankQuestions, cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, starData, codeChallengeData);

const seed = async() => {
    await Promise.all(
      questionData.map(question => (
        Question.insert({
          question: question.question,
          answer: question.answer,
          hint: question.hint,
          category: question.category,
          tags: question.tags,
          links: question.links
        })
        .then(console.log(question.question))
    )));
};

seed();

module.exports = { seed };
