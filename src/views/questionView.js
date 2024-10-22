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
 <div class="question-text"><h1>${questionText}</h1></div>

 <div id="${ANSWERS_LIST_ID}">
  </div> 

  <button id="${NEXT_QUESTION_BUTTON_ID}">
    Next question
  </button>
`;

  return element;
};
