let activeSection = null;
let currentDifficulty = "easy";

let score = 0;
let totalQuestions = 0;
let maxQuestions = 10;

let traits = {
  systemsThinking: 0,
  solutionThinking: 0
};

let usedQuestions = [];
let currentQuestion = null;
let currentShuffledOptions = [];
let answered = false;

function startSection(sectionId) {
  activeSection = sectionId;
  currentDifficulty = "easy";

  score = 0;
  totalQuestions = 0;
  usedQuestions = [];
  answered = false;

  traits = {
    systemsThinking: 0,
    solutionThinking: 0
  };

  const hasQuestions = ["easy", "medium", "hard"].some(level =>
    questions[level].some(question => question.sectionId === activeSection)
  );

  if (!hasQuestions) {
    showComingSoon(sectionId);
    return;
  }

  showSectionIntro(sectionId);
}

function showSectionIntro(sectionId) {
  const section = pathfinderSections.find(item => item.id === sectionId);
  const title = section ? section.title : "Pathfinder Section";
  const intro = section ? section.intro : "This section analyzes your skills and thinking patterns.";

  const container = document.querySelector(".home-screen");

  container.innerHTML = `
    <div class="results-card">
      <h1>${title}</h1>

      <p>${intro}</p>

      <p>
        There are no trick questions. Choose the strongest overall answer,
        not just an answer that could possibly work.
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

  if (!currentQuestion) {
    showResults();
    return;
  }

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

    if (!traits[currentQuestion.trait]) {
      traits[currentQuestion.trait] = 0;
    }

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

  const section = pathfinderSections.find(item => item.id === activeSection);
  const sectionTitle = section ? section.title : "Pathfinder";

  let message = "";

  if (percent >= 90) {
    message = "Exceptional performance in this section.";
  } else if (percent >= 70) {
    message = "Strong performance in this section.";
  } else if (percent >= 50) {
    message = "Developing skill area.";
  } else {
    message = "This may be an area where more practice or a different learning style helps.";
  }

  const traitResults = Object.entries(traits)
    .filter(([trait, value]) => value > 0)
    .map(([trait, value]) => `
      <p><strong>${formatTraitName(trait)}:</strong> ${value}</p>
    `)
    .join("");

  container.innerHTML = `
    <div class="results-card">

      <h1>${sectionTitle} Results</h1>

      <div class="score-circle">
        ${percent}%
      </div>

      <h2>${message}</h2>

      <p>
        Pathfinder tracked your answers, difficulty level, and skill patterns in this section.
      </p>

      <div class="trait-results">
        ${traitResults || "<p>No trait points earned yet.</p>"}
      </div>

      <button onclick="restartQuiz()">
        Back to Home
      </button>

    </div>
  `;
}

function formatTraitName(trait) {
  return trait
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, char => char.toUpperCase());
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

      <button onclick="restartQuiz()">
        Back to Home
      </button>
    </div>
  `;
}

function restartQuiz() {
  location.reload();
}
