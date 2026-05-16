let currentQuestion = 0;
let score = 0;

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {

  const homeScreen = document.querySelector(".home-screen");

  showQuestion(homeScreen);
}

function showQuestion(container) {

  const q = questions[currentQuestion];

  container.innerHTML = `

    <div class="quiz-container">

      <div class="question-card">

        <h2>${q.section}</h2>

        <div class="difficulty">
          Difficulty: ${q.difficulty.toUpperCase()}
        </div>

        <h3 class="question-text">
          ${q.question}
        </h3>

        <div class="answers">
          ${q.options.map((option, index) => `
            <button class="answer-btn" onclick="selectAnswer(${index})">
              ${option}
            </button>
          `).join("")}
        </div>

      </div>

    </div>

  `;
}

function selectAnswer(selected) {

  const q = questions[currentQuestion];

  if (selected === q.answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResults();
    return;
  }

  showQuestion(document.querySelector(".home-screen"));
}

function showResults() {

  const container = document.querySelector(".home-screen");

  const percent = Math.round((score / questions.length) * 100);

  let message = "";

  if (percent >= 90) {
    message = "Exceptional pattern recognition.";
  }
  else if (percent >= 70) {
    message = "Strong analytical thinking.";
  }
  else if (percent >= 50) {
    message = "Developing pattern recognition skills.";
  }
  else {
    message = "You may perform better with hands-on or experiential learning.";
  }

  container.innerHTML = `

    <div class="results-card">

      <h1>Your Results</h1>

      <div class="score-circle">
        ${percent}%
      </div>

      <h2>${message}</h2>

      <p>
        Pathfinder detected how you identify systems,
        relationships, and hidden causes behind problems.
      </p>

      <button onclick="restartQuiz()">
        Try Again
      </button>

    </div>

  `;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;

  location.reload();
}
