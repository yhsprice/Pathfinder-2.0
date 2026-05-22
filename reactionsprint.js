function startReactionSprint() {

  const container = document.querySelector(".home-screen");

  let reactionQuestions = generateReactionQuestions(20);

  let currentIndex = 0;
  let score = 0;
  let streak = 0;
  let timeLeft = 45;
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

          ${getStreakMessage()}

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
  streak++;
} else {
  streak = 0;
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
  This mode measures how quickly you process information, recognize patterns,
  compare choices, and make decisions under light time pressure.
</p>

<div class="reaction-meaning">
  <h2>What this may suggest</h2>
  <p>
    A higher score may show strong quick-thinking, visual scanning,
    mental math, attention, and fast decision-making. A lower score does not
    mean low ability — it may mean you work better with time to think,
    fewer distractions, or less pressure.
  </p>
</div>

        <button onclick="restartQuiz()">
          Back to Home
        </button>

      </div>
    `;
  }
}

function getStreakMessage() {

  if (streak >= 8) {
    return `
      <div class="streak-message elite">
        🧠 ELITE REACTION SPEED
      </div>
    `;
  }

  if (streak >= 5) {
    return `
      <div class="streak-message fire">
        🔥 BRAIN ON FIRE
      </div>
    `;
  }

  if (streak >= 3) {
    return `
      <div class="streak-message quick">
        ⚡ QUICK STREAK
      </div>
    `;
  }

  return "";
}

function generateReactionQuestions(count) {
  const questions = [];

  const templates = [
    {
      name: "largerNumber",
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
      name: "differentShape",
      generate: () => ({
        question: "Which shape is different?",
        options: ["🔺", "🔺", "🔵", "🔺"],
        answer: 2
      })
    },
    {
      name: "betterDeal",
      generate: () => ({
        question: "Which is the better deal?",
        options: ["1 for $5", "2 for $8"],
        answer: 1
      })
    },
    {
      name: "pattern",
      generate: () => ({
        visual: "⬜ 🟦 ⬜ 🟦 ⬜ ?",
        question: "Which comes next?",
        options: ["⬜", "🟦", "⬛", "🟥"],
        answer: 1
      })
    },
    {
      name: "closestAnswer",
      generate: () => {
        const a = randomNumber(20, 80);
        const b = randomNumber(20, 80);
        const total = a + b;
        return {
          question: `${a} + ${b} is closest to:`,
          options: [total - 10, total, total + 10, total + 20],
          answer: 1
        };
      }
    },
    {
      name: "tool",
      generate: () => ({
        question: "Which tool tightens a bolt?",
        options: ["Wrench", "Paintbrush", "Ruler", "Sponge"],
        answer: 0
      })
    },
    {
      name: "spelling",
      generate: () => ({
        question: "Which word is spelled correctly?",
        options: ["Recieve", "Receive", "Receeve", "Receve"],
        answer: 1
      })
    },
    {
      name: "oddOneOut",
      generate: () => ({
        question: "Which does NOT belong?",
        options: ["Hammer", "Drill", "Wrench", "Banana"],
        answer: 3
      })
    },
    {
      name: "speed",
      generate: () => ({
        question: "Which is faster?",
        options: ["60 mph", "45 mph", "30 mph", "15 mph"],
        answer: 0
      })
    }
  ];

  let lastTemplateName = "";

  while (questions.length < count) {
  let availableTemplates = templates.filter(
    template => template.name !== lastTemplateName
  );

  const template =
    availableTemplates[Math.floor(Math.random() * availableTemplates.length)];

  questions.push(template.generate());
  lastTemplateName = template.name;
}

return questions;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
