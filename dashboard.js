function renderPathfinderDashboard() {

  const dashboard = document.getElementById("pathfinderDashboard");

  if (!dashboard) return;

  const topSkills = Object.entries(pathfinderState.skills)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const topInterests = Object.entries(pathfinderState.interests)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  const topCareers = Object.entries(pathfinderState.careerScores)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10);

  dashboard.innerHTML = `

    <div class="dashboard-section">

      <h2>🧠 Skill Signals</h2>

      <div class="dashboard-grid">
        ${topSkills.length
          ? topSkills.map(([skill, score]) => `
            <div class="dashboard-card">
              <h3>${formatDashboardName(skill)}</h3>
              <span>${score}</span>
            </div>
          `).join("")
          : `<p>No skill signals yet.</p>`
        }
      </div>

    </div>

    <div class="dashboard-section">

      <h2>🎯 Interest Signals</h2>

      <div class="dashboard-grid">
        ${topInterests.length
          ? topInterests.map(([interest, score]) => `
            <div class="dashboard-card">
              <h3>${formatDashboardName(interest)}</h3>
              <span>${score}</span>
            </div>
          `).join("")
          : `<p>No interests tracked yet.</p>`
        }
      </div>

    </div>

    <div class="dashboard-section">

      <h2>🚀 Career Matches So Far</h2>

      <div class="dashboard-grid">
        ${topCareers.length
          ? topCareers.map(([career, score]) => `
            <div class="dashboard-card career">
              <h3>${career}</h3>
              <span>${score}</span>
            </div>
          `).join("")
          : `<p>No career matches yet.</p>`
        }
      </div>

    </div>

  `;
}

function formatDashboardName(text) {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, char => char.toUpperCase());
}
