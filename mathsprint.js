function startMathSprint() {
  const container = document.querySelector(".home-screen");
  let sprintProblems = generateMathSprintProblems(50);
  let timeLeft = 300; // 5 minutes
  let sprintTimer = null;

  container.innerHTML = `
    <div class="math-sprint-page">
      <h1>⚡ Math Sprint</h1>
      <p>Answer as many as you can before time runs out. Type your answers.</p>

      <div class="sprint-timer" id="sprintTimer">5:00</div>

      <div class="sprint-grid">
        ${sprintProblems.map((problem, index) => `
          <div class="sprint-problem">
            <label>${problem.text}</label>
            <input type="number" id="sprintAnswer${index}" />
          </div>
        `).join("")}
      </div>

 <p class="sprint-tip">
      Tip: Press Tab to move quickly to the next answer box.
      </p>
      
      <button onclick="submitMathSprint()">Submit Sprint</button>
    </div>
  `;

  window.submitMathSprint = function() {
    clearInterval(sprintTimer);

    let correct = 0;
    let attempted = 0;

    sprintProblems.forEach((problem, index) => {
      const input = document.getElementById(`sprintAnswer${index}`);
      const userAnswer = Number(input.value);

      if (input.value !== "") {
        attempted++;
      }

      if (userAnswer === problem.answer) {
        correct++;
        input.classList.add("sprint-correct");
      } else if (input.value !== "") {
        input.classList.add("sprint-wrong");
      }
    });

    const accuracy = attempted > 0 ? Math.round((correct / attempted) * 100) : 0;

    container.innerHTML = `
      <div class="math-sprint-results">
        <h1>Math Sprint Results</h1>

        <div class="sprint-score">${correct} / ${sprintProblems.length}</div>

        <p><strong>Attempted:</strong> ${attempted}</p>
        <p><strong>Accuracy:</strong> ${accuracy}%</p>

        <p>
          This measures number fluency, speed, accuracy, and comfort under time pressure.
        </p>

        <button onclick="restartQuiz()">Back to Home</button>
      </div>
    `;
  };

  sprintTimer = setInterval(() => {
    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("sprintTimer").textContent =
      `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (timeLeft <= 0) {
      submitMathSprint();
    }
  }, 1000);
}

function generateMathSprintProblems(count) {
  const problems = [];

  while (problems.length < count) {
    const type = Math.floor(Math.random() * 4);
    let a, b, text, answer;

    if (type === 0) {
      a = randomNumber(1, 25);
      b = randomNumber(1, 25);
      text = `${a} + ${b}`;
      answer = a + b;
    }

    if (type === 1) {
      a = randomNumber(10, 50);
      b = randomNumber(1, 20);
      text = `${a} - ${b}`;
      answer = a - b;
    }

    if (type === 2) {
      a = randomNumber(2, 12);
      b = randomNumber(2, 12);
      text = `${a} × ${b}`;
      answer = a * b;
    }

    if (type === 3) {
      b = randomNumber(2, 12);
      answer = randomNumber(2, 12);
      a = b * answer;
      text = `${a} ÷ ${b}`;
    }

    problems.push({ text, answer });
  }

  return problems;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
