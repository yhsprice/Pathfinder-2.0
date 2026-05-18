let currentDifficulty = "easy";

let score = 0;
let traits = {
  systemsThinking: 0
};
let totalQuestions = 0;
let maxQuestions = 10;

let usedQuestions = [];

let currentQuestion = null;
let currentQuestionIndex = null;
let currentShuffledOptions = [];
let answered = false;

function showSectionIntro(sectionId) {

  const section = pathfinderSections.find(
    item => item.id === sectionId
  );

  const container = document.querySelector(".home-screen");

  container.innerHTML = `

    <div class="results-card">

      <h1>${section.title}</h1>

      <p>
        Pathfinder is about to analyze this cognitive area.
      </p>

      <p>
        There are no trick questions.
        Focus on the strongest overall answer,
        not just a possible answer.
      </p>

      <button onclick="showQuestion()">
        Begin Section
      </button>

    </div>

  `;
}

function getRandomQuestion() {
  let pool = questions[currentDifficulty].filter(
    question =>
      question.sectionId === activeSection &&
      !usedQuestions.includes(question.question)
  );

  if (pool.length === 0) {
    pool = ["easy", "medium", "hard"]
      .flatMap(level => questions[level])
      .filter(
        question =>
          question.sectionId === activeSection &&
          !usedQuestions.includes(question.question)
      );
  }

  if (pool.length === 0) {
    showResults();
    return null;
  }

  const randomIndex = Math.floor(Math.random() * pool.length);
  const selectedQuestion = pool[randomIndex];

  usedQuestions.push(selectedQuestion.question);

  return selectedQuestion;
}

function showQuestion() {
  answered = false;

  if (totalQuestions >= maxQuestions) {
    showResults();
    return;
  }

  currentQuestion = getRandomQuestion();

if (!currentQuestion) return;

currentShuffledOptions = shuffleOptions(currentQuestion);

  const progressPercent = Math.round((totalQuestions / maxQuestions) * 100);
  const container = document.querySelector(".home-screen");

  container.innerHTML = `
    <div class="quiz-container">
      <div class="question-card">

        <div class="progress-text">
          Question ${totalQuestions + 1} of ${maxQuestions} | Difficulty: ${currentDifficulty.toUpperCase()}
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${progressPercent}%"></div>
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

  const buttons = document.querySelectorAll(".answer-btn");
  const feedbackBox = document.getElementById("feedbackBox");
  const selectedOption = currentShuffledOptions[selectedIndex];

  const correct = selectedOption.originalIndex === currentQuestion.answer;

  buttons.forEach((button, index) => {
    button.classList.add("disabled");

    if (currentShuffledOptions[index].originalIndex === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (correct) {

  score++;

  traits[currentQuestion.trait]++;
    buttons[selectedIndex].classList.add("correct");

    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Correct. Pathfinder increased the challenge.
      </div>
    `;

    moveDifficultyUp();
  } else {
    buttons[selectedIndex].classList.add("incorrect");

    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Not quite. Pathfinder adjusted the difficulty.
      </div>
    `;

    moveDifficultyDown();
  }

  totalQuestions++;

  setTimeout(() => {
    showQuestion();
  }, 1400);
}

function moveDifficultyUp() {
  if (currentDifficulty === "easy") {
    currentDifficulty = "medium";
  } else if (currentDifficulty === "medium") {
    currentDifficulty = "hard";
  }
}

function moveDifficultyDown() {
  if (currentDifficulty === "hard") {
    currentDifficulty = "medium";
  } else if (currentDifficulty === "medium") {
    currentDifficulty = "easy";
  }
}

function showResults() {
  const container = document.querySelector(".home-screen");
  const percent = Math.round((score / maxQuestions) * 100);

  let message = "";

  if (percent >= 90) {
    message = "Exceptional systems thinking.";
  } else if (percent >= 70) {
    message = "Strong analytical reasoning.";
  } else if (percent >= 50) {
    message = "Developing pattern analysis skills.";
  } else {
    message = "You may learn better through hands-on examples and real-world practice.";
  }

  container.innerHTML = `
    <div class="results-card">

      <h1>Pattern Recognition Results</h1>

      <div class="score-circle">
        ${percent}%
      </div>

      <h2>${message}</h2>

      <p>
  Systems Thinking Score:
  ${traits.systemsThinking}
</p>

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
  location.reload();
}

let activeSection = null;

function startSection(sectionId) {

  activeSection = sectionId;

  currentDifficulty = "easy";

  score = 0;
  totalQuestions = 0;

  usedQuestions = [];

 const hasQuestions = ["easy", "medium", "hard"].some(level =>
  questions[level].some(question => question.sectionId === activeSection)
);

if (!hasQuestions) {
  showComingSoon(sectionId);
  return;
}

showSectionIntro(sectionId);
}

function showComingSoon(sectionId) {
  const section = pathfinderSections.find(item => item.id === sectionId);
  const title = section ? section.title : "This Section";

  const container = document.querySelector(".home-screen");

  container.innerHTML = `
    <div class="results-card">
      <h1>${title}</h1>

      <h2>Coming Soon</h2>

      <p>
        This section is part of the Pathfinder 2.0 framework, but the question bank has not been added yet.
      </p>

      <button onclick="location.reload()">
        Back to Home
      </button>
    </div>
  `;
}
