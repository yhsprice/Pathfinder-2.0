let activeSection = null;
let currentDifficulty = "easy";

let score = 0;
let totalQuestions = 0;
let baseQuestions = 10;
let maxQuestions = baseQuestions;
let wrongAnswers = 0;
let maxWrongAnswers = 7;
let rapidAnswers = 0;
let timeoutAnswers = 0;
let engagementScore = 100;

let questionStartTime = 0;

let traits = {};

let usedQuestions = [];
let currentQuestion = null;
let currentShuffledOptions = [];
let answered = false;

let timer = null;
let timeLeft = 20;
let maxTime = 20;

function startSection(sectionId) {
  activeSection = sectionId;
  currentDifficulty = "easy";

  score = 0;
  totalQuestions = 0;
  wrongAnswers = 0;
  rapidAnswers = 0;
  timeoutAnswers = 0;
  engagementScore = 100;
  maxQuestions = baseQuestions;
  usedQuestions = [];
  traits = {};
  answered = false;
  

  clearInterval(timer);

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

  clearInterval(timer);
  timeLeft = maxTime;

  if (engagementScore <= 70) {
  maxQuestions = 8;
}

if (engagementScore <= 55) {
  maxQuestions = 6;
}

if (engagementScore <= 40) {
  maxQuestions = 5;
}
   
  if (
  totalQuestions >= maxQuestions ||
  wrongAnswers >= maxWrongAnswers ||
  engagementScore <= 40
)
 
 {
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

  questionStartTime = Date.now();

  container.innerHTML = `
    <div class="quiz-container">
      <div class="question-card">

        <div class="progress-text">
          Question ${totalQuestions + 1} of ${maxQuestions} | Difficulty: ${formatDifficulty(currentDifficulty)}
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width:${progressPercent}%"></div>
        </div>

        <div class="timer-bar">
          <div class="timer-fill" id="timerFill"></div>
        </div>

        <h2>${currentQuestion.section}</h2>

         ${currentQuestion.passage ? `
        <div class="reading-passage">
        ${currentQuestion.passage}
        </div>
        ` : ""}

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

  startTimer();
}

function startTimer() {
  const timerFill = document.getElementById("timerFill");

  if (!timerFill) return;

  timerFill.style.width = "100%";

  timer = setInterval(() => {
    timeLeft--;

    const percent = (timeLeft / maxTime) * 100;
    timerFill.style.width = percent + "%";
    
      if (timeLeft <= 0) {
      clearInterval(timer);
        timeoutAnswers++;
        engagementScore -= 8;

      if (!answered) {
        answered = true;
        totalQuestions++;

        showTimeoutFeedback();

        moveDifficultyDown();

        setTimeout(() => {
          showQuestion();
        }, 900);
      }
    }
  }, 1000);
}

function showTimeoutFeedback() {
  const feedbackBox = document.getElementById("feedbackBox");

  if (feedbackBox) {
    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Time ran out. Pathfinder lowered the challenge level.
      </div>
    `;
  }
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
  clearInterval(timer);

  const answerTime = (Date.now() - questionStartTime) / 1000;

  if (answerTime < 2) {
    rapidAnswers++;
    engagementScore -= 5;
  }

  const buttons = document.querySelectorAll(".answer-btn");
  const feedbackBox = document.getElementById("feedbackBox");
  const selectedOption = currentShuffledOptions[selectedIndex];

  buttons.forEach(button => {
    button.classList.add("disabled");
  });

if (currentQuestion.type === "careerChoice") {
  const selectedCareers = currentQuestion.careerMap[selectedOption.originalIndex];
  const selectedInterest = currentQuestion.interestMap[selectedOption.originalIndex];

  if (!traits[selectedInterest]) {
    traits[selectedInterest] = 0;
  }

  traits[selectedInterest]++;

  selectedCareers.forEach(career => {
    const careerKey = "career_" + career;

    if (!traits[careerKey]) {
      traits[careerKey] = 0;
    }

    traits[careerKey]++;
  });

  totalQuestions++;

  feedbackBox.innerHTML = `
    <div class="feedback-box">
      Choice saved. Pathfinder is learning what kind of work sounds meaningful to you.
    </div>
  `;

  setTimeout(() => {
    showQuestion();
  }, 900);

  return;
}
  
  if (currentQuestion.type === "interest") {
    const selectedInterest =
      currentQuestion.interestMap[selectedOption.originalIndex];

    if (!traits[selectedInterest]) {
      traits[selectedInterest] = 0;
    }

    traits[selectedInterest]++;

    totalQuestions++;

    feedbackBox.innerHTML = `
      <div class="feedback-box">
        Interest noted. Pathfinder is building your career direction profile.
      </div>
    `;

    setTimeout(() => {
      showQuestion();
    }, 900);

    return;
  }

  const correct = selectedOption.originalIndex === currentQuestion.answer;

  buttons.forEach((button, index) => {
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
    wrongAnswers++;

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
  clearInterval(timer);

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

const skillTraits = [
  "logic",
  "patternRecognition",
  "mathReasoning",
  "numberSense",
  "readingComprehension",
  "grammar",
  "spelling",
  "writtenCommunication",
  "attentionToDetail",
  "errorDetection",
  "mechanicalReasoning",
  "spatialReasoning",
  "practicalThinking",
  "solutionThinking",
  "socialJudgment",
  "communication",
  "teamwork",
  "creativity",
  "ideaGeneration",
  "adaptability",
  "workStyle",
  "pressureResponse",
  "persistence",
  "careerAwareness",
  "interestFit",
  "realisticFit"
];

const interestTraits = [
  "handsOn",
  "helpingPeople",
  "creative",
  "data",
  "active",
  "independent",
  "teamBased",
  "technology"
];

const skillResults = Object.entries(traits)
  .filter(([trait, value]) => value > 0 && skillTraits.includes(trait))
  .map(([trait, value]) => `
    <p><strong>${formatTraitName(trait)}:</strong> ${value}</p>
  `)
  .join("");

const interestResults = Object.entries(traits)
  .filter(([trait, value]) => value > 0 && interestTraits.includes(trait))
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

      <p>
  Questions Missed: ${wrongAnswers}
</p>

      <h2>${message}</h2>

      <p>
  Pathfinder tracked your answers, difficulty level, timing, and skill patterns in this section.
</p>

<div class="insight-box">
  <h3>What this suggests</h3>
  <p>
    This section gives an early signal of where your abilities, problem-solving style,
    and interests may be strongest. It is not meant to label you — it helps point you
    toward career areas worth exploring.
  </p>
</div>

      <div class="trait-results">
  <h3>Skill Signals</h3>
  ${skillResults || "<p>No skill signals recorded yet.</p>"}

   <h3>Interest Signals</h3>
  ${interestResults || "<p>No interest signals recorded yet.</p>"}
</div>

${getNextSectionButton()}

   </div>
  `;
}

function formatTraitName(trait) {
  return trait
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, char => char.toUpperCase());
}

function formatDifficulty(difficulty) {
  if (difficulty === "easy") return "Beginner";
  if (difficulty === "medium") return "Skilled";
  if (difficulty === "hard") return "Advanced";

  return difficulty;
}

function showComingSoon(sectionId) {
  clearInterval(timer);

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

function getNextSectionButton() {
  const currentIndex = pathfinderSections.findIndex(
    section => section.id === activeSection
  );

  const nextSection = pathfinderSections[currentIndex + 1];

  if (nextSection) {
    return `
      <button onclick="startSection('${nextSection.id}')">
        Continue to ${nextSection.title}
      </button>

      <button onclick="restartQuiz()" class="secondary-btn">
        Back to Home
      </button>
    `;
  }

  return `
    <button onclick="restartQuiz()">
      Finish Pathfinder
    </button>
  `;
}

function startCareerClash() {
  let currentChampion = careerClashQuestions[0].left;
  let challengerIndex = 0;
  let clashRounds = 0;
  let maxClashRounds = 15;
  let clashResults = {};

  const challengers = [];

  careerClashQuestions.forEach(item => {
    challengers.push(item.left);
    challengers.push(item.right);
  });

  challengers.shift();

  function showClash() {
    const challenger = challengers[challengerIndex];
    const container = document.querySelector(".home-screen");

    if (!challenger || clashRounds >= maxClashRounds) {
      showCareerClashResults(container);
      return;
    }

    container.innerHTML = `
      <div class="clash-page">

        <h1 class="clash-title">CAREER CLASH</h1>

        <p class="clash-subtitle">
          Your chosen path stays. A new career style challenges it.
        </p>

        <div class="clash-card-grid">

          ${buildCareerCard(currentChampion, "champion")}
          ${buildCareerCard(challenger, "challenger")}

        </div>

        <div id="feedbackBox"></div>

      </div>
    `;
  }

  function buildCareerCard(choice, side) {
    return `
      <button class="career-clash-card ${side === "champion" ? "purple" : "blue"}"
        onclick="chooseCareerClash('${side}')">

        <div class="career-clash-icon">
          ${side === "champion" ? "🏆" : "⚡"}
        </div>

        <h2>${choice.title}</h2>

        <p class="career-clash-description">
          ${choice.description || "This work style may connect to careers you have not considered yet."}
        </p>

        <h3 class="good-heading">The Good Parts</h3>
        <ul>
          ${choice.positives.map(item => `<li>✅ ${item}</li>`).join("")}
        </ul>

        <h3 class="trade-heading">The Tradeoffs</h3>
        <ul>
          ${choice.negatives.map(item => `<li>⚠️ ${item}</li>`).join("")}
        </ul>

        <div class="choose-button">
          ${side === "champion"
          ? "✔ Do You Want To Do This?"
          : "⭐ Or Do You Like This Better?"}
        </div>

      </button>
    `;
  }

  window.chooseCareerClash = function(side) {
    const challenger = challengers[challengerIndex];

    const chosen = side === "champion" ? currentChampion : challenger;
    const notChosen = side === "champion" ? challenger : currentChampion;

    chosen.careers.forEach(career => {
      clashResults[career] = (clashResults[career] || 0) + 1;
    });

    clashResults[chosen.title] = (clashResults[chosen.title] || 0) + 1;

    document.getElementById("feedbackBox").innerHTML = `
  <div class="clash-feedback">
    You chose <strong>${chosen.title}</strong>
    over <strong>${notChosen.title}</strong>.
  </div>
`;

    currentChampion = chosen;
    
     setTimeout(() => {
  nextCareerClash();
}, 1400);
    
  };

   window.nextCareerClash = function() {
    clashRounds++;
    challengerIndex++;
    showClash();
  };

  function showCareerClashResults(container) {
    const topResults = Object.entries(clashResults)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10)
      .map(([career, score], index) => `
        <div class="career-result-card">
          <div class="career-rank">#${index + 1}</div>
          <h2>${career}</h2>
          <span class="career-score-text">Match Strength: ${score}</span>
        </div>
      `)
      .join("");

    container.innerHTML = `
      <div class="clash-page">
        <div class="clash-results-card">
          <h1>Career Clash Results</h1>

          <p class="career-results-intro">
            Based on your choices, these are the career paths and work styles you kept choosing.
          </p>

          ${topResults || "<p>No choices recorded.</p>"}

          <button onclick="restartQuiz()">Back to Home</button>
        </div>
      </div>
    `;
  }

  showClash();
}

 function restartQuiz() {
  clearInterval(timer);
  location.reload();
}
