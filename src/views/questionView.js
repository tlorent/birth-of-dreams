import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';

/**
 * Create a full question element
 * @returns {Element}
 * @param {string} questionText
 */
export const createQuestionElement = (questionText) => {
  const element = document.createElement('div');


  element.innerHTML = String.raw`
 <h1>${questionText}</h1>

 <div id="${ANSWERS_LIST_ID}">
  </div> 

  
`;

  return element;
};

/* <button id="${NEXT_QUESTION_BUTTON_ID}">
    Next question
  </button> */