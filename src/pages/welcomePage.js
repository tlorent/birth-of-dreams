

import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID, NAME_INPUT_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from './questionPage.js';

export let userName = "";

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  const nameInput = document.getElementById(NAME_INPUT_ID);
  nameInput.type = "text";
  nameInput.placeholder = "Enter Your Name";

  document.getElementById(START_QUIZ_BUTTON_ID).addEventListener('click', () => {
    userName = nameInput.value;
    
    
    if (userName.trim() === '') {
      alert("Please enter your name.");
    } else {
      startQuiz(); 
    }
  });
};

const startQuiz = () => {
  initQuestionPage(); 
};
