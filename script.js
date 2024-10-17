
const questions = [
  { quadratic: 'x^2 + 5x + 6', correctAnswer: '(x + 2)(x + 3)', incorrectAnswers: ['(x + 1)(x + 6)', '(x + 2)(x + 4)', '(x - 2)(x - 3)', '\\text{Cannot be factored}', '(x + 3)(x + 5)'] },
  { quadratic: '2y^2 + 7y + 3', correctAnswer: '(2y + 1)(y + 3)', incorrectAnswers: ['(2y + 3)(y + 1)', '(y + 2)(2y + 1)', '(y - 3)(2y + 1)', '\\text{Cannot be factored}', '(y + 3)(y + 5)'] },
  { quadratic: 'z^2 + 4z', correctAnswer: 'z(z + 4)', incorrectAnswers: ['(z + 2)(z + 2)', '(z + 1)(z + 3)', 'z(z - 4)', '\\text{Cannot be factored}', 'z^2 + 4'] },
  { quadratic: '3x^2 + 9x', correctAnswer: '3x(x + 3)', incorrectAnswers: ['x(3x + 9)', '(x + 3)(x + 1)', 'x(3x + 1)', '\\text{Cannot be factored}', '(3x + 3)(x + 9)'] },
  { quadratic: 'p^2 + 2p + 1', correctAnswer: '(p + 1)^2', incorrectAnswers: ['(p + 1)(p + 2)', '(p - 1)(p - 1)', 'p^2 + 2p', '\\text{Cannot be factored}', '(p - 1)(p + 1)'] },
  { quadratic: 'x^2 + 1', correctAnswer: '\\text{Cannot be factored}', incorrectAnswers: ['(x + 1)(x - 1)', 'x(x + 1)', '(x + 2)(x - 2)', '(x - 1)(x - 1)', '(x + 1)(x + 1)'] },
  { quadratic: '4a^2 + 4a + 1', correctAnswer: '(2a + 1)^2', incorrectAnswers: ['(4a + 1)(a + 1)', '\\text{Cannot be factored}', '(a + 2)(2a + 2)', '2a(a + 1)', '(2a + 1)(a + 4)'] },
  { quadratic: 'b^2 - 9', correctAnswer: '(b + 3)(b - 3)', incorrectAnswers: ['(b + 1)(b - 1)', '(b + 9)(b - 9)', '\\text{Cannot be factored}', '(b + 2)(b - 2)', '(b - 9)(b + 3)'] },
  { quadratic: 'm^2 + 2m + 5', correctAnswer: '\\text{Cannot be factored}', incorrectAnswers: ['(m + 1)(m + 5)', '(m + 2)(m - 5)', '(m + 3)(m - 1)', '(m + 2)(m + 2)', '(m + 1)(m + 2)'] },
  { quadratic: '2z^2 - 8z + 8', correctAnswer: '2(z - 2)^2', incorrectAnswers: ['(2z + 2)(z + 4)', '(z - 2)(z - 4)', '\\text{Cannot be factored}', '2(z - 4)(z + 4)', '(z + 2)(z - 4)'] },
  
  { quadratic: 'x^2 - 16', correctAnswer: '(x + 4)(x - 4)', incorrectAnswers: ['(x + 2)(x - 2)', '(x + 8)(x - 8)', '\\text{Cannot be factored}', '(x + 5)(x - 5)', '(x + 4)(x + 4)'] },
  { quadratic: '9y^2 - 25', correctAnswer: '(3y + 5)(3y - 5)', incorrectAnswers: ['(y + 5)(y - 5)', '(9y + 25)(y - 1)', '\\text{Cannot be factored}', '(3y + 2)(3y - 2)', '(y + 9)(y - 5)'] },
  { quadratic: '4x^2 + 12x + 9', correctAnswer: '(2x + 3)^2', incorrectAnswers: ['(4x + 9)(x + 3)', '(x + 2)(2x + 4)', '\\text{Cannot be factored}', '(x + 3)(2x + 3)', '(2x + 4)(x + 2)'] },
  { quadratic: 'x^2 - 10x + 25', correctAnswer: '(x - 5)^2', incorrectAnswers: ['(x - 5)(x + 5)', '(x - 6)(x + 6)', '\\text{Cannot be factored}', '(x - 2)(x + 2)', '(x - 5)(x - 1)'] },
  { quadratic: '2p^2 + 4p', correctAnswer: '2p(p + 2)', incorrectAnswers: ['(2p + 4)(p + 1)', '(p + 2)^2', 'p(p + 4)', '\\text{Cannot be factored}', '(p + 1)(2p + 1)'] },
  
  { quadratic: '3x^2 - 27', correctAnswer: '3(x + 3)(x - 3)', incorrectAnswers: ['(x + 3)(x - 3)', '3(x + 9)(x - 9)', '\\text{Cannot be factored}', 'x(x + 3)(x - 3)', '(x + 9)(x - 9)'] },
  { quadratic: '6z^2 + 13z + 6', correctAnswer: '(3z + 2)(2z + 3)', incorrectAnswers: ['(2z + 1)(3z + 2)', '\\text{Cannot be factored}', '(z + 2)(6z + 3)', '(3z + 6)(2z + 1)', '(3z + 1)(z + 6)'] },
  { quadratic: 'x^2 - 8x + 12', correctAnswer: '(x - 6)(x - 2)', incorrectAnswers: ['(x + 6)(x - 2)', '(x + 3)(x - 4)', '\\text{Cannot be factored}', '(x + 2)(x - 6)', '(x + 1)(x - 6)'] },
  { quadratic: '5x^2 - 20', correctAnswer: '5(x + 2)(x - 2)', incorrectAnswers: ['(5x + 2)(x - 2)', '5(x + 4)(x - 4)', '\\text{Cannot be factored}', 'x(5x + 4)', '(5x + 4)(x - 2)'] },
  { quadratic: '2m^2 - 98', correctAnswer: '2(m + 7)(m - 7)', incorrectAnswers: ['(m + 7)(m - 14)', '\\text{Cannot be factored}', '2(m + 49)(m - 49)', '(m + 2)(m - 49)', '(2m + 2)(m - 7)'] },
  
  { quadratic: 'x^2 - 2x + 1', correctAnswer: '(x - 1)^2', incorrectAnswers: ['(x + 1)(x - 1)', '(x - 2)(x + 1)', '\\text{Cannot be factored}', '(x - 1)(x + 2)', '(x + 1)(x + 1)'] },
  { quadratic: '6a^2 + 11a + 3', correctAnswer: '(3a + 1)(2a + 3)', incorrectAnswers: ['(2a + 3)(3a + 1)', '\\text{Cannot be factored}', '(a + 3)(6a + 1)', '(2a + 3)(2a + 3)', '(3a + 3)(a + 2)'] },
  { quadratic: '8x^2 + 12x + 4', correctAnswer: '4(2x + 1)^2', incorrectAnswers: ['(4x + 4)(x + 1)', '2(x + 1)(2x + 4)', '\\text{Cannot be factored}', '2(4x + 1)(2x + 4)', '(x + 2)(4x + 4)'] },
  { quadratic: '9y^2 + 30y + 25', correctAnswer: '(3y + 5)^2', incorrectAnswers: ['(9y + 25)(y + 1)', '(3y + 2)(3y + 5)', '\\text{Cannot be factored}', '(y + 5)(y - 5)', '(3y + 1)(y + 5)'] },
  { quadratic: '4p^2 - 12p + 9', correctAnswer: '(2p - 3)^2', incorrectAnswers: ['(2p + 3)(2p - 3)', '4(p + 3)(p - 3)', '\\text{Cannot be factored}', 'p(p - 3)(p + 3)', '(2p - 3)(p + 3)'] }
];




let score = 0;
let previousQuestion = null;
let answered = false;

function setupQuestion() {
  let currentQuestion;
  do {
    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
  } while (currentQuestion === previousQuestion);

  previousQuestion = currentQuestion;
  answered = false;

  document.getElementById('nextQuestionBtn').style.display = 'none';
  document.getElementById('questionText').textContent = `Factorize the quadratic: \\(${currentQuestion.quadratic}\\)`;

  generateOptions(currentQuestion);
  MathJax.typesetPromise();
}

function generateOptions(currentQuestion) {
  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  const options = [...currentQuestion.incorrectAnswers];
  options.push(currentQuestion.correctAnswer);
  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const button = document.createElement('button');
    button.innerHTML = `\\(${option}\\)`;
    button.onclick = () => checkAnswer(option, currentQuestion.correctAnswer, button);
    optionsContainer.appendChild(button);
  });

  MathJax.typesetPromise();
}

function checkAnswer(selectedOption, correctAnswer, button) {
  if (answered) return; // Prevent multiple answers
  answered = true;

  const scoreSheet = document.querySelector('#scoreSheet tbody');
  const row = document.createElement('tr');
  const answerCell = document.createElement('td');
  const changeCell = document.createElement('td');
  const scoreCell = document.createElement('td');

  answerCell.innerHTML = `\\(${correctAnswer}\\)`;

  if (selectedOption === correctAnswer) {
    score += 20;
    changeCell.textContent = '+20';
    changeCell.className = 'green';
    button.style.backgroundColor = '#4CAF50'; // Correct answer
  } else {
    score = Math.max(0, score - 5);
    changeCell.textContent = '-5';
    changeCell.className = 'red';
    button.style.backgroundColor = 'red'; // Incorrect answer
  }

  scoreCell.textContent = score;
  scoreCell.className = 'score';
  row.appendChild(answerCell);
  row.appendChild(changeCell);
  row.appendChild(scoreCell);
  scoreSheet.appendChild(row);

  // Typeset LaTeX for correct answer
  MathJax.typesetPromise([answerCell]);

  if (scoreSheet.rows.length > 8) scoreSheet.deleteRow(0); // Keep 8 rows
  document.getElementById('nextQuestionBtn').style.display = 'inline'; // Show "Next Question" button
}

document.getElementById('nextQuestionBtn').addEventListener('click', setupQuestion);

setupQuestion();
