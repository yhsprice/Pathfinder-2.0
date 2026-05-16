alert("script loaded");

let currentDifficulty = "easy";
let currentQuestionIndex = 0;

let score = 0;
let totalQuestions = 0;

let currentQuestion = null;
let currentShuffledOptions = [];

let answered = false;

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  showQuestion();
}

function getQuestionPool() {
  return questions[currentDifficulty];
}

function showQuestion() {

  answered = false;

  const pool = getQuestionPool();

  if (currentQuestionIndex >= pool.length) {
    showResults();
    return;
  }

  currentQuestion = pool[currentQuestionIndex];

  currentShuffledOptions = shuffleOptions(currentQuestion);

  const container = document.querySelector(".home-screen");

  container.innerHTML = `

    <div class="quiz-container">

      <div class="question-card">

        <div class="progress-text">
          Difficulty Level: ${currentDifficulty.toUpperCase()}
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${(totalQuestions / 6) * 100}%"></div>
        </div>

        <h2>${currentQuestion.section}</h2>

        <h3 class="question-text">
          ${currentQuestion.question}
        </h3>

        <div class="answers">

          ${currentShuffledOptions.map((option, index) => `

            <button class="answer-btn" onclick="selectAnswer(${index})">

              ${option.text}

            </button>

          `).join("")}

        </div>

        <div id="feedbackBox"></div>

      </div>

    </div>

  `;
}

function shuffleOptions(question) {

  const optionsWithIndex = question.options.map((option, index) => ({
    text: option,
    originalIndex: index
  }));

  for (let i = optionsWithIndex.length - 1; i > 0; i--) {

    const randomIndex = Math.floor(Math.random() * (i + 1));

    [optionsWithIndex[i], optionsWithIndex[randomIndex]] =
      [optionsWithIndex[randomIndex], optionsWithIndex[i]];
  }

  return optionsWithIndex;
}

function selectAnswer(selectedIndex) {

  if (answered) return;

  answered = true;

  totalQuestions++;

  const buttons = document.querySelectorAll(".answer-btn");

  const feedbackBox = document.getElementById("feedbackBox");

  const selectedOption = currentShuffledOptions[selectedIndex];

  const correct =
    selectedOption.originalIndex === currentQuestion.answer;

  buttons.forEach((button, index) => {

    button.classList.add("disabled");

    if (
      currentShuffledOptions[index].originalIndex === currentQuestion.answer
    ) {
      button.classList.add("correct");
    }

  });

  if (correct) {

    score++;

    buttons[selectedIndex].classList.add("correct");

    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Correct. Pathfinder detected strong pattern recognition.
      </div>
    `;

    moveDifficultyUp();

  } else {

    buttons[selectedIndex].classList.add("incorrect");

    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Not quite. Pathfinder is looking for the hidden system behind the problem.
      </div>
    `;

    moveDifficultyDown();
  }

  currentQuestionIndex++;

  setTimeout(() => {

    showQuestion();

  }, 1400);
}

function moveDifficultyUp() {

  if (currentDifficulty === "easy") {
    currentDifficulty = "medium";
    currentQuestionIndex = 0;
  }

  else if (currentDifficulty === "medium") {
    currentDifficulty = "hard";
    currentQuestionIndex = 0;
  }
}

function moveDifficultyDown() {

  if (currentDifficulty === "hard") {
    currentDifficulty = "medium";
    currentQuestionIndex = 0;
  }

  else if (currentDifficulty === "medium") {
    currentDifficulty = "easy";
    currentQuestionIndex = 0;
  }
}

function showResults() {

  const container = document.querySelector(".home-screen");

  const percent = Math.round((score / totalQuestions) * 100);

  let message = "";

  if (percent >= 90) {
    message = "Exceptional systems thinking.";
  }

  else if (percent >= 70) {
    message = "Strong analytical reasoning.";
  }

  else if (percent >= 50) {
    message = "Developing pattern analysis skills.";
  }

  else {
    message = "You may learn better through experience and hands-on environments.";
  }

  container.innerHTML = `

    <div class="results-card">

      <h1>Pattern Recognition Results</h1>

      <div class="score-circle">

        ${percent}%

      </div>

      <h2>${message}</h2>

      <p>
        Pathfinder tracked how you recognized systems,
        causes, and hidden behavioral patterns.
      </p>

      <button onclick="restartQuiz()">

        Try Again

      </button>

    </div>

  `;
}

function restartQuiz() {

  currentDifficulty = "easy";
  currentQuestionIndex = 0;

  score = 0;
  totalQuestions = 0;

  location.reload();
}
