import { quizData } from './data.js';
import { initWelcomePage } from './pages/welcomePage.js';

const loadApp = () => {
  quizData.currentQuestionIndex = 0;

  initWelcomePage();
};

window.addEventListener('load', loadApp);

// to change the title
document.title = "Geography App";
// to make the favicon
const link = document.createElement("link");
link.rel = "icon";
link.href = "https://cdn-icons-png.flaticon.com/128/4523/4523524.png";
document.head.appendChild(link);
// to do the score counter


