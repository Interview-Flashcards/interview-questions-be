const fs = require('fs');
const pool = require('./utils/pool');
const Question = require('./models/Question');

const apiData = require('./questionData/apiQuestions');
const cssData = require('./questionData/cssQuestions');
const databaseData = require('./questionData/databaseQuestions');
const javaScriptData = require('./questionData/javaScriptQuestions');
const miscData = require('./questionData/miscQuestions');
const nodeData = require('./questionData/nodeQuestions');
const reactData = require('./questionData/reactQuestions');
const reduxData = require('./questionData/reduxQuestions');
const databaseQuestions = require('./questionData/databaseQuestions');

const questionData = apiData.concat(cssData, databaseData, javaScriptData, miscData, nodeData, reactData, reduxData, databaseQuestions);

async function refreshData() {
  await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

  questionData.forEach(async(question) => {
    await Question.insert({
      question: question.question,
      answer: question.answer,
      hint: question.hint,
      category: question.category,
      tags: question.tags,
      links: question.links
    });
  });
}

refreshData();


console.log('done');
