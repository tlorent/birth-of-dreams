/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  
  questions: [
    {
      text: 'What is the capital of Spain?',
      answers: {
        a: 'Berlin',
        b: 'Rome',
        c: 'Paris',
        d: 'Madrid'
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'What is the largest ocean on earth?',
      answers: {
        a: 'Indian Ocean',
        b: 'Pacific Ocean',
        c: 'Atlantic Ocean',
        d: 'Arctic Ocean',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href:
            'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'How many oceans do we have on earth?',
      answers: {
        a: 'two',
        b: 'three',
        c: 'one',
        d: 'five'
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'In which continent is Brazil located?',
      answers: {
        a: 'North America',
        b: 'Africa',
        c: 'South America',
        d: 'Asia'
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'What is the official language of Syria?',
      answers: {
        a: 'Arabic',
        b: 'English',
        c: 'French',
        d: 'Dutch'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'Which of these is the highest mountain in the world?',
      answers: {
        a: 'Denali',
        b: 'Matterhorn',
        c: 'Everest',
        d: 'fuji'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'What is the official religion of Egypt ?',
      answers: {
        a: 'Islam',
        b: 'Christianity',
        c: 'buddhism',
        d: 'hinduism'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'What is the biggest country in the world?',
      answers: {
        a: 'Brazil',
        b: 'Russia',
        c: 'Canada',
        d: 'china'
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'What is the longest river in the world?',
      answers: {
        a: 'Nile',
        b: 'Amazon',
        c: 'Mississippi',
        d: 'Danube'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    {
      text: 'which country shares the eastern border of the Netherlands?',
      answers: {
        a: 'Germany',
        b: 'Spain',
        c: 'Italy',
        d: 'France'
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
        {
          text: 'Geography',
          href: 'https://www.wikipedia.org/',
        },
      ],
    },
    
  ],
};
