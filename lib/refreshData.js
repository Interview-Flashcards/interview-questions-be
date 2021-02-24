const fs = require('fs');
const fetch = require('node-fetch');
const pool = require('./utils/pool');
require('dotenv').config();
const reformatData = require('./utils/setup-pool');

const URL = process.env.HEROKU_URL;
console.log(URL);

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

reformatData();


async function refreshData() {

  const questionData = apiData.concat(cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, starData, codeChallengeData);

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




