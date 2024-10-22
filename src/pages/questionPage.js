
import {
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import { quizData } from '../data.js';


export const initQuestionPage = () => {
  let currentQuestionIndex = 0;

  const initQuestion = () => {
    const userInterface = document.getElementById(USER_INTERFACE_ID);
    userInterface.innerHTML = '';
    
    
    const currentQuestion = quizData[currentQuestionIndex];
  
    const questionElement = createQuestionElement(currentQuestion.questionText);
   
   
    userInterface.appendChild(questionElement);
  
    const answersListElement = document.getElementById(ANSWERS_LIST_ID);
    answersListElement.innerHTML = "";
  
    currentQuestion.answers.forEach(([answerText, isCorrect]) => {
      const answerElement = createAnswerElement(answerText);
      answerElement.classList.add('answer-btn');
      answersListElement.appendChild(answerElement);
    });
  
   
  
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  };

  const nextQuestion = () => {
    currentQuestionIndex = currentQuestionIndex + 1;
    

    if (currentQuestionIndex < quizData.length) {
      initQuestion();
    } else {
      alert('Quiz finished');
    }
  };

  initQuestion();
};

initQuestionPage();

