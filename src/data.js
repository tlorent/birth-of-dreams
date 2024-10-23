/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

// export const quizData = {
//   currentQuestionIndex: 0,
//   // the questions in the quiz
//   questions: [
//     {
//       text: 'What are the different ways to declare a JS variable?',
//       answers: {
//         a: 'constant, let, variable',
//         b: 'var, const, let, function',
//         c: 'var, let, const',
//       },
//       correct: 'c',
//       selected: null,
//       links: [
//         {
//           text: 'javascript.info',
//           href: 'https://javascript.info/variables',
//         },
//         {
//           text: 'Tyler McGinnis',
//           href: 'https://ui.dev/var-let-const/',
//         },
//       ],
//     },
//     {
//       text: 'What does `typeof` do?',
//       answers: {
//         a: 'changes the type of a primitive value',
//         b: 'returns a string describing the type of a value',
//         c: 'determines if a value is primitive',
//         d: 'can tell the difference between arrays and objects',
//       },
//       correct: 'b',
//       selected: null,
//       links: [
//         {
//           text: 'javascript.info',
//           href: 'https://javascript.info/types#type-typeof',
//         },
//         {
//           text: 'MDN',
//           href:
//             'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof',
//         },
//       ],
//     },
//     // Add more questions here
//   ],
// };


// export const quizData = [
//   {
//   questionText: "What are the different ways to declare a JS variable?",
//   answers: [["constant, let, variable", false], ["var, const, let, function", false], ["var, let, const", true], ["var, function", false]]
//   },
//   {
//     questionText: "Wxfnfgfngfnzfgnzcgnzcgn?,hat are the different ways to declare a JS variablePxvhn",
//     answers: [["constant, let, variable", false], ["var, const, let, function", false], ["var, let, const", true], ["var, function", false]]
//     },
//   {
//       questionText: "What are the different ways to declare a JS variable  What are the different ways to declare a JS variable?",
//       answers: [["constant, let, variable", false], ["var, const, let, function", false], ["var, let, const", true], ["var, function", false]]
//       }
//   ]
  let currentQuestionIndex =  0 ;
  export const quizData = [
   
    {
      questionText: 'What is the capital of Spain?',
      answerText: [
        ['Berlin', false],
        ['Rome', false],
        ['Paris', false],
        ['Madrid', true],
      ],
    },
    {
      questionText: 'What is the largest ocean on earth?',
      answerText: [
        ['Indian Ocean', false],
        ['Pacific Ocean', true],
        ['Atlantic Ocean', false],
        ['Arctic Ocean', false],
      ],
    },
    {
      questionText: 'How many oceans do we have on earth?',
      answerText: [
        ['one', false],
        ['thee', false],
        ['two', false],
        ['five', true],
      ],
    },
    {
      questionText: 'In which continent is Brazil located?',
      answerText: [
        ['North America', false],
        ['Asia', false],
        ['South America', true],
        ['Africa', false],
      ],
    },
    {
      questionText: 'What is the official language of Syria?',
      answerText: [
        ['English', false],
        ['Arabic', true],
        ['Persian', false],
        ['Dutch', false],
      ],
    },
    {
      questionText: 'Which of these is the highest mountain in the world?',
      answerText: [
        ['Matterhorn', false],
        ['Denali', false],
        ['fuji', false],
        ['Everest', true],
      ],
    },
    {
      questionText: 'What is the official religion of Egypt?',
      answerText: [
        ['Buddhism', false],
        ['Christianity', false],
        ['Islam', true],
        ['hinduism', false],
      ],
    },
    {
      questionText: 'What is the biggest country in the world?',
      answerText: [
        ['Russia', true],
        ['Canada', false],
        ['China', false],
        ['India', false],
      ],
    },
    {
      questionText: 'What is the longest river in the world?',
      answerText: [
        ['Mississippi', false],
        ['Amazon', false],
        ['Danube', false],
        ['Nile', true],
      ],
    },
    {
      questionText: 'which country shares the eastern border of the Netherlands?',
      answerText: [
        ['France', false],
        ['Germany', true],
        ['Italy', false],
        ['Spain', false],
      ],
    },
  ];