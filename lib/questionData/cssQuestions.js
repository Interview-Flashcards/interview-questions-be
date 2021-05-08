const cssQuestions = [
  {
    question: 'What is specificity in CSS?',
    answer: 'Specificity is the means by which browsers decide which CSS property values are the most relevant to an element and, therefore, will be applied. Specificity is based on the matching rules which are composed of different sorts of CSS selectors. ',
    hint: 'Which selector type is more specific to an element - an ID or class?',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'MDN: Specificity',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity'
    }]
  },
  {
    question: 'What are pseudo-elements in CSS?',
    answer: 'A CSS pseudo-element is a keyword added to a selector that lets you style a specific part of the selected element(s). They can be used for decoration (:first-line, :first-letter) or adding elements to the markup (combined with content: ...) without having to modify the markup (:before, :after).',
    hint: 'There are multiple uses for a pseudo-element.',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'MDN: Pseudo-elements',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements'
    }] 
  },
  {
    question: 'How would you target an h2 and h3 with the same styling?',
    answer: 'You can target multiple elements by separating the selectors with a comma',
    hint: '',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'Article: Comma in CSS Selectors',
      link: 'https://www.lifewire.com/comma-in-css-selectors-3467052'
    }] 
  },
  {
    question: 'What is the float property used for in CSS and what are the different uses?',
    answer: 'The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though it still remains a part of the flow (in contrast to absolute positioning). Uses are float: none, left, and right.',
    hint: '',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'MDN: Float',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float'
    }] 
  },
  {
    question: 'What are the different types of CSS selectors?',
    answer: 'Universal selector - selects all elements. Type selector - selects all elements that have the given node name. Class selector - selects all elements that have the given class name. ID selector - selects an element based on the value of its id. Attribute selector - selects all elements that have the given attribute.',
    hint: '',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'MDN: CSS Selectors',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors'
    }] 
  },
  {
    question: 'What is a pseudo-class (not to be confused with pseudo-element)?',
    answer: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s). For example, :hover can be used to change a button\'s color when the user\'s pointer hovers over it.',
    hint: '',
    category: 'Tech',
    tags: ['CSS', 'Front-End'],
    links: [{
      linkName: 'MDN: Pseudo Classes',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes'
    }] 
  },
  {
    question: 'css question template?',
    answer: 'answer',
    hint: '',
    category: 'Tech',
    tags: [],
    links: []
  }
];

module.exports = cssQuestions;
