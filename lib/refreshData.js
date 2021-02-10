const fs = require('fs');
const fetch = require('node-fetch');
const pool = require('./utils/pool');
const reformatData = require('./utils/setup-pool');

const URL = process.env.HEROKU_URL;

const apiData = require('./questionData/apiQuestions');
const cssData = require('./questionData/cssQuestions');
const databaseData = require('./questionData/databaseQuestions');
const javaScriptData = require('./questionData/javaScriptQuestions');
const miscData = require('./questionData/miscQuestions');
const nodeData = require('./questionData/nodeQuestions');
const reactData = require('./questionData/reactQuestions');
const reduxData = require('./questionData/reduxQuestions');
const databaseQuestions = require('./questionData/databaseQuestions');


reformatData();

//This code is not working.

// async function refreshData() {

//   const questionData = apiData.concat(cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, databaseQuestions);

//   try {
//     await Promise.all(
//       questionData.map(q => (
//         Question.insert(JSON.stringify({
//           question: q.question,
//           answer: q.answer,
//           hint: q.hint,
//           category: q.category,
//           tags: q.tags,
//           links: q.links
//         }))
//         .then(console.log(q.question))
//     )));

//   }
//   catch(err) {
//     console.log(err);
//   };
// };

async function refreshData() {

  const questionData = apiData.concat(cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, databaseQuestions);

  try {
    await Promise.all(
      questionData.map(question => (
        fetch(`${URL}/questions`, {
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
        })))
    );
  }
  catch(err) {
    console.log(err);
  };
};


refreshData();




