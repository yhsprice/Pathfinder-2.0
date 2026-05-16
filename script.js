let currentQuestion = 0;
let score = 0;
let currentShuffledOptions = [];
let answered = false;

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  showQuestion(document.querySelector(".home-screen"));
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

function showQuestion(container) {
  answered = false;

  const q = questions[currentQuestion];
  const progressPercent = Math.round((currentQuestion / questions.length) * 100);

  currentShuffledOptions = shuffleOptions(q);

  container.innerHTML = `
    <div class="quiz-container">
      <div class="question-card">

        <div class="progress-text">
          Question ${currentQuestion + 1} of ${questions.length}
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${progressPercent}%"></div>
        </div>

        <h2>${q.section}</h2>

        <div class="difficulty">
          Difficulty: ${q.difficulty.toUpperCase()}
        </div>

        <h3 class="question-text">
          ${q.question}
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

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const selectedOption = currentShuffledOptions[selectedIndex];
  const buttons = document.querySelectorAll(".answer-btn");
  const feedbackBox = document.getElementById("feedbackBox");

  buttons.forEach((button, index) => {
    button.classList.add("disabled");

    if (currentShuffledOptions[index].originalIndex === q.answer) {
      button.classList.add("correct");
    }
  });

  if (selectedOption.originalIndex === q.answer) {
    score++;
    buttons[selectedIndex].classList.add("correct");
    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Correct. You spotted the pattern.
      </div>
    `;
  } else {
    buttons[selectedIndex].classList.add("incorrect");
    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Not quite. Pathfinder is looking for the most likely hidden pattern, not just a possible explanation.
      </div>
    `;
  }

  setTimeout(() => {
    currentQuestion++;

    if (currentQuestion >= questions.length) {
      showResults();
    } else {
      showQuestion(document.querySelector(".home-screen"));
    }
  }, 1300);
}

function showResults() {
  const container = document.querySelector(".home-screen");
  const percent = Math.round((score / questions.length) * 100);

  let message = "";

  if (percent >= 90) {
    message = "Exceptional pattern recognition.";
  } else if (percent >= 70) {
    message = "Strong analytical thinking.";
  } else if (percent >= 50) {
    message = "Developing pattern recognition skills.";
  } else {
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
