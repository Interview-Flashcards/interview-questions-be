const fs = require('fs');
const fetch = require('node-fetch');
const pool = require('./utils/pool');
require('dotenv').config();
const reformatData = require('./utils/setup-pool');

const URL = process.env.HEROKU_URL; 
console.log(URL);

const apiData = require('../data/questionData/apiQuestions');
const cssData = require('../data/questionData/cssQuestions');
const databaseData = require('../data/questionData/databaseQuestions');
const javaScriptData = require('../data/questionData/javaScriptQuestions');
const miscData = require('../data/questionData/miscQuestions');
const nodeData = require('../data/questionData/nodeQuestions');
const reactData = require('../data/questionData/reactQuestions');
const reduxData = require('../data/questionData/reduxQuestions');
const starData = require('../data/questionData/starQuestions');
const codeChallengeData = require('../data/questionData/codeChallengeQuestions');

const blankQuestions = require('../data/questionData/blankQuestions');

reformatData();


async function refreshData() {

  const questionData = apiData.concat(blankQuestions, cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, starData, codeChallengeData);

  try {
    await Promise.all(
      questionData.map(question => (
        fetch(`${URL}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            question: question.question,
            answer: question.answer,
            hint: question.hint,
            category: question.category,
            tags: question.tags,
            links: question.links
          })
        })
      )
      ));
  }
  catch(err) {
    console.log(err);
  }
}


refreshData();




