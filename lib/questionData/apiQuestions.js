const apiQuestions = [
  {
    question: 'How do you interact with an API?',
    answer: 'Use a fetch request or REST. You will need to know the endpoints and the type of data returned.',
    hint: 'What type of request would you need to send? What would you need to make that request?',
    category: 'tech',
    tags: ['API', 'Front-End'],
    links: [
      {
        linkName: 'Article: How to Use An API',
        link: 'https://technologyadvice.com/blog/information-technology/how-to-use-an-api/'
      }, 
      {
        linkName: 'Youtube: How to Work With Any API',
        link: 'https://www.youtube.com/watch?v=3nwcNLM3KOU'
      }]
  }, {
    question: 'Why are http status codes important?',
    answer: 'They are a standard that the community uses making them universal. Makes responses more understandable.',
    hint: 'What would statuses look like if everyone explained them in their own way?',
    category: 'tech',
    tags: ['API', 'Front-End'],
    links: [
      {
        linkName: 'Youtube: Learn HTTP Status Codes in 10 Minutes',
        link: 'https://www.youtube.com/watch?v=wJa5CTIFj7U'
      }, 
      {
        linkName: 'Article: Why HTTP Status Codes Are Important',
        link: 'https://filecatalyst.com/rest-why-http-status-codes-are-important/'
      }]
  }, {
    question: 'How do you make a good API?',
    answer: 'Have good documentation, logging and error handling for known and unknown situations. Follow community standards',
    hint: 'What do you like or dislike about learning how to use a new API?',
    category: 'tech',
    tags: ['API', 'Back-End'],
    links: [
      {
        linkName: 'Stack Overflow: Best Practices for Rest API Design',
        link: 'https://stackoverflow.blog/2020/03/02/best-practices-for-rest-api-design/'
      },
      {
        linkName: 'Youtube: 10 Best Practices For Developing An API',
        link: 'https://www.youtube.com/watch?v=ER32ax96skk'
      }
    ]
  }, {
    question: 'What is REST?',
    answer: 'REpresentational State Transfer, follows http protocol, uses verbs like get, put, post, delete. Each request is independent and will have its own response.',
    hint: 'What does it stand for and explain what you know about it.',
    category: 'tech',
    tags: ['API', 'Front-End', 'Back-End'],
    links: [
      {
        linkName: 'Article: What is REST?',
        link: 'https://www.codecademy.com/articles/what-is-rest'
      },
      {
        linkName: 'Youtube: What is REST?',
        link: 'https://www.youtube.com/watch?v=6sUbt-Qp6Pg'
      }]
  }, {
    question: 'What is JSON?',
    answer: 'JavaScript Object Notation is a standard format for representation of data, transmitted by text for REST consisting of key value pairs. It can quickly become very large.',
    hint: 'What does JSON stand for, look like and what is it used for?',
    category: 'tech',
    tags: ['API', 'Front-End', 'Back-End', 'JavaScript', 'Node', 'React'],
    links: [
      {
        linkName: 'Youtube: What is JSON?',
        link: 'https://www.youtube.com/watch?v=JuFdz8f-cT4'
      },
      {
        linkName: 'Article: What is JSON?',
        link: 'https://www.w3schools.com/whatis/whatis_json.asp'
      }]
  }, {
    question: 'API Question template?',
    answer: 'Answer.',
    hint: 'Hint',
    category: 'tech',
    tags: [],
    links: [
      {
        linkName: 'Youtube: ',
        link: ''
      },
      {
        linkName: 'Article: ',
        link: ''
      }
    ]
  }
];

module.exports = apiQuestions;
