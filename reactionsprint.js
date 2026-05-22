function startReactionSprint() {

  const container = document.querySelector(".home-screen");

  let reactionQuestions = generateReactionQuestions(40);

  let currentIndex = 0;
  let score = 0;
  let timeLeft = 90;
  let sprintTimer = null;

  showReactionQuestion();

  sprintTimer = setInterval(() => {

    timeLeft--;

    const timerDisplay = document.getElementById("reactionTimer");

    if (timerDisplay) {
      timerDisplay.textContent = `${timeLeft}s`;
    }

    if (timeLeft <= 0) {
      clearInterval(sprintTimer);
      showReactionResults();
    }

  }, 1000);

  function showReactionQuestion() {

    if (currentIndex >= reactionQuestions.length) {
      clearInterval(sprintTimer);
      showReactionResults();
      return;
    }

    const q = reactionQuestions[currentIndex];

    container.innerHTML = `
      <div class="reaction-page">

        <div class="reaction-topbar">
          <div class="reaction-score">
            Score: ${score}
          </div>

          <div class="reaction-timer" id="reactionTimer">
            ${timeLeft}s
          </div>
        </div>

        <div class="reaction-card">

          ${q.visual ? `
            <div class="reaction-visual">
              ${q.visual}
            </div>
          ` : ""}

          <h1>${q.question}</h1>

          <div class="reaction-options">

            ${q.options.map((option, index) => `
              <button
                class="reaction-btn"
                onclick="answerReactionQuestion(${index})"
              >
                ${option}
              </button>
            `).join("")}

          </div>

        </div>

      </div>
    `;

    window.answerReactionQuestion = function(index) {

      if (index === q.answer) {
        score++;
      }

      currentIndex++;

      showReactionQuestion();
    };
  }

  function showReactionResults() {

    container.innerHTML = `
      <div class="reaction-results">

        <h1>⚡ Reaction Sprint Complete</h1>

        <div class="reaction-final-score">
          ${score}
        </div>

        <p>
          This mode measures reaction speed,
          fast reasoning,
          instinctive decision making,
          and rapid pattern recognition.
        </p>

        <button onclick="restartQuiz()">
          Back to Home
        </button>

      </div>
    `;
  }
}

function generateReactionQuestions(count) {

  const questions = [];

  const templates = [

    {
      question: "Which number is larger?",
      generate: () => {
        const a = randomNumber(10, 99);
        const b = randomNumber(10, 99);

        return {
          question: "Which number is larger?",
          options: [a, b],
          answer: a > b ? 0 : 1
        };
      }
    },

    {
      question: "Which shape is different?",
      generate: () => ({
        question: "Which shape is different?",
        options: ["🔺", "🔺", "🔵", "🔺"],
        answer: 2
      })
    },

    {
      question: "Which is the better deal?",
      generate: () => ({
        question: "Which is the better deal?",
        options: [
          "1 for $5",
          "2 for $8"
        ],
        answer: 1
      })
    },

    {
      question: "Which finishes the pattern?",
      generate: () => ({
        visual: "⬜ 🟦 ⬜ 🟦 ⬜ ?",
        question: "Which comes next?",
        options: ["⬜", "🟦", "⬛", "🟥"],
        answer: 1
      })
    }

    {
  question: "Which answer is closest?",
  generate: () => {
    const a = randomNumber(20, 80);
    const b = randomNumber(20, 80);
    const total = a + b;

    return {
      question: `${a} + ${b} is closest to:`,
      options: [
        total - 10,
        total,
        total + 10,
        total + 20
      ],
      answer: 1
    };
  }
},

{
  question: "Which tool fits the job?",
  generate: () => ({
    question: "Which tool tightens a bolt?",
    options: ["Wrench", "Paintbrush", "Ruler", "Sponge"],
    answer: 0
  })
},

{
  question: "Which word is spelled correctly?",
  generate: () => ({
    question: "Which word is spelled correctly?",
    options: ["Recieve", "Receive", "Receeve", "Receve"],
    answer: 1
  })
},

{
  question: "Which does NOT belong?",
  generate: () => ({
    question: "Which does NOT belong?",
    options: ["Hammer", "Drill", "Wrench", "Banana"],
    answer: 3
  })
},

{
  question: "Which is faster?",
  generate: () => ({
    question: "Which is faster?",
    options: ["60 mph", "45 mph", "30 mph", "15 mph"],
    answer: 0
  })
}

  ];

  while (questions.length < count) {

    const template =
      templates[Math.floor(Math.random() * templates.length)];

    questions.push(template.generate());
  }

  return questions;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
