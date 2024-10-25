

import {
  ANSWERS_LIST_ID,
  NAVIGATION_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';
import { userName } from './welcomePage.js';

export const initQuestionPage = () => {
  let currentQuestionIndex = 0;
  let score = 0; 

  const initQuestion = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = ''; 

    const currentQuestion = quizData[currentQuestionIndex];

    const scoreElement = document.createElement('h1');
    scoreElement.id = 'score-display';
    scoreElement.innerText = `Score: ${score}/${quizData.length }`;
    userInterface.appendChild(scoreElement);

    const questionElement = createQuestionElement(currentQuestion.questionText);
    userInterface.appendChild(questionElement);

    const answersListElement = document.createElement('div');
    answersListElement.id = ANSWERS_LIST_ID;
    answersListElement.innerHTML = '';

    const nextQuestionButton = document.createElement('button');
    nextQuestionButton.innerText = 'Next Question';
    nextQuestionButton.classList.add('next-question-button');
    nextQuestionButton.disabled = true;
    nextQuestionButton.addEventListener('click', nextQuestion);

    const skipQuestionButton = document.createElement('button');
    skipQuestionButton.innerText = 'Skip Question';
    skipQuestionButton.classList.add('next-question-button');
    skipQuestionButton.addEventListener('click', nextQuestion);

    currentQuestion.answerText.forEach(([answerText, isCorrect]) => {
      const answerElement = createAnswerElement(answerText);
      answerElement.classList.add('answer-btn');
      answersListElement.appendChild(answerElement);

      answerElement.addEventListener('click', () => {
        document.querySelectorAll('.answer-btn').forEach((btn) => {
          btn.disabled = true;
        });

        if (isCorrect) {
          answerElement.classList.add('correct-answer');
          score++; 
          scoreElement.innerText = `Score: ${score}/${quizData.length}`; 
        } else {
          answerElement.classList.add('incorrect-answer');
        }

        nextQuestionButton.disabled = false;
      });
    });

    userInterface.appendChild(answersListElement);

    const navigationContainer = document.createElement('div');
    navigationContainer.id = NAVIGATION_ID;
    navigationContainer.innerHTML = '';

    navigationContainer.appendChild(skipQuestionButton);
    navigationContainer.appendChild(nextQuestionButton);

    userInterface.appendChild(navigationContainer);
  };

  const nextQuestion = () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      initQuestion();
    } else {
      const userInterface = document.getElementById(USER_INTERFACE_ID);
      userInterface.innerHTML = ''; 

      const finalScoreElement = document.createElement('h1');
      finalScoreElement.innerText = `Quiz finished ${userName}! Your final score: ${score}/${quizData.length }`;
      userInterface.appendChild(finalScoreElement);
    }
  };

  initQuestion();
};

initQuestionPage();
