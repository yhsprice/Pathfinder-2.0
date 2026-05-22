const pathfinderState = {
  skills: {},
  interests: {},
  careerScores: {},
  completedSections: [],
  sectionSummaries: {}
};

function addSkillSignal(skill, amount = 1) {
  pathfinderState.skills[skill] =
    (pathfinderState.skills[skill] || 0) + amount;
}

function addInterestSignal(interest, amount = 1) {
  pathfinderState.interests[interest] =
    (pathfinderState.interests[interest] || 0) + amount;
}

function addCareerSignal(career, amount = 1) {
  pathfinderState.careerScores[career] =
    (pathfinderState.careerScores[career] || 0) + amount;
}

function markSectionComplete(sectionId, summary) {
  if (!pathfinderState.completedSections.includes(sectionId)) {
    pathfinderState.completedSections.push(sectionId);
  }

  pathfinderState.sectionSummaries[sectionId] = summary;
}
