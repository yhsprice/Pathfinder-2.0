const questions = {

  easy: [

   {
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "What number comes next? 2, 4, 8, 16, ?",
  options: [
    "18",
    "24",
    "32",
    "30"
  ],
  answer: 2,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "Which shape comes next? ▲ ● ▲ ● ▲ ?",
  options: [
    "▲",
    "■",
    "●",
    "◆"
  ],
  answer: 2,
  trait: "patternRecognition"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "Which item does NOT belong?",
  options: [
    "Hammer",
    "Screwdriver",
    "Wrench",
    "Banana"
  ],
  answer: 3,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "What letter comes next? A, C, F, J, ?",
  options: [
    "N",
    "O",
    "P",
    "L"
  ],
  answer: 1,
  trait: "patternRecognition"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "A clock shows 3:15. What angle is closest between the hour and minute hands?",
  options: [
    "0°",
    "90°",
    "180°",
    "45°"
  ],
  answer: 1,
  trait: "logic"
},
     medium: [

    {
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "What number comes next? 3, 6, 12, 24, ?",
  options: [
    "30",
    "36",
    "48",
    "54"
  ],
  answer: 2,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "Which word does NOT fit?",
  options: [
    "Dog",
    "Cat",
    "Bird",
    "Carrot"
  ],
  answer: 3,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "If all BLOOPS are RAZZES, and some RAZZES are LUMS, which statement must be true?",
  options: [
    "All BLOOPS are LUMS",
    "Some BLOOPS may be LUMS",
    "No BLOOPS are LUMS",
    "All LUMS are BLOOPS"
  ],
  answer: 1,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "What comes next? ■ ▲ ▲ ■ ▲ ▲ ■ ?",
  options: [
    "■",
    "▲",
    "●",
    "◆"
  ],
  answer: 1,
  trait: "patternRecognition"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "A train travels 60 miles in 1 hour. At the same speed, how far will it travel in 3.5 hours?",
  options: [
    "180 miles",
    "200 miles",
    "210 miles",
    "240 miles"
  ],
  answer: 2,
  trait: "logic"
},

    hard: [

    {
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "What number comes next? 1, 1, 2, 3, 5, 8, ?",
  options: [
    "11",
    "12",
    "13",
    "14"
  ],
  answer: 2,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "If five machines make five parts in five minutes, how long would 100 machines take to make 100 parts?",
  options: [
    "5 minutes",
    "20 minutes",
    "100 minutes",
    "500 minutes"
  ],
  answer: 0,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "Which pattern comes next? AB, BC, CD, DE, ?",
  options: [
    "EF",
    "FG",
    "EG",
    "DF"
  ],
  answer: 0,
  trait: "patternRecognition"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "A farmer has 17 sheep. All but 9 run away. How many are left?",
  options: [
    "8",
    "9",
    "17",
    "0"
  ],
  answer: 1,
  trait: "logic"
},

{
  sectionId: "patternLogic",
  section: "Pattern & Logic Recognition",
  question:
    "You rearrange the letters 'CIFAIPC'. What country do they spell?",
  options: [
    "Pacific",
    "France",
    "Canada",
    "Japan"
  ],
  answer: 0,
  trait: "patternRecognition"
},

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "You are helping plan an event, but the speaker cancels the morning of the event. What should you do FIRST?",
      options: [
        "Cancel the entire event immediately",
        "Identify the most important missing piece and look for a backup option",
        "Ignore the problem and hope no one notices",
        "Blame the speaker publicly"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A printer stops working right before a meeting. What is the BEST first step?",
      options: [
        "Check simple issues like paper, connection, and power",
        "Buy a new printer immediately",
        "Cancel the meeting",
        "Assume someone broke it"
      ],
      answer: 0,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "Your group has too many tasks and not enough time. What is the smartest move?",
      options: [
        "Do the easiest tasks only",
        "Prioritize the most important tasks first",
        "Stop working because it feels overwhelming",
        "Let one person do everything"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A customer is upset because an order is wrong. What should happen first?",
      options: [
        "Tell them mistakes happen",
        "Listen, confirm the issue, and identify what can be fixed",
        "Argue that it was not your fault",
        "Avoid the customer"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "You are given instructions that are confusing. What is the BEST response?",
      options: [
        "Guess and hope it works",
        "Ask clarifying questions before starting",
        "Refuse to do the task",
        "Do the opposite of the instructions"
      ],
      answer: 1,
      trait: "solutionThinking"
    }

  ],

  medium: [

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A team works efficiently when roles are assigned clearly but struggles when everyone shares responsibility equally. What pattern is MOST likely true?",
      options: [
        "The projects are impossible",
        "The team performs better with specialization",
        "Shared responsibility always fails",
        "The team dislikes working"
      ],
      answer: 1,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A mechanic notices one machine breaks every Friday afternoon. What is the MOST intelligent first assumption?",
      options: [
        "Fridays are unlucky",
        "Replace the machine immediately",
        "Something changes in workload near the end of the week",
        "The mechanic is imagining patterns"
      ],
      answer: 2,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A company notices productivity increases after employees gain more control over schedules. What pattern is MOST likely occurring?",
      options: [
        "Autonomy increases motivation",
        "Employees work less",
        "Schedules do not matter",
        "Workers became afraid"
      ],
      answer: 0,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A student consistently misses easy questions but solves harder ones correctly. What pattern is MOST likely true?",
      options: [
        "The student performs poorly overall",
        "The student rushes simple tasks but focuses on difficult ones",
        "Hard questions are easier",
        "The grading system is broken"
      ],
      answer: 1,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A restaurant receives better reviews after reducing menu size. Why might this happen?",
      options: [
        "Smaller menus often improve consistency and decision-making",
        "Customers dislike choices",
        "Large menus are illegal",
        "Food quality never changes"
      ],
      answer: 0,
      trait: "systemsThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A school club keeps losing members because meetings feel unorganized. What is the BEST solution?",
      options: [
        "Create a clear agenda and assign roles before each meeting",
        "Tell members they are not committed enough",
        "Make meetings longer",
        "Stop allowing new members"
      ],
      answer: 0,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "Two coworkers disagree about how to finish a project. What is the strongest problem-solving approach?",
      options: [
        "Pick the louder person's idea",
        "Compare both ideas against the project goal and constraints",
        "Avoid the project",
        "Tell them both ideas are bad"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A process keeps causing small mistakes. What should you do?",
      options: [
        "Fix each mistake one at a time forever",
        "Look for the step in the process where mistakes keep starting",
        "Ignore small mistakes",
        "Replace everyone involved"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "You have limited money for a project. What is the BEST decision?",
      options: [
        "Spend it all on the most exciting idea",
        "Choose the option that solves the biggest need within the budget",
        "Wait until more money magically appears",
        "Buy the cheapest thing no matter what"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A team keeps missing deadlines. What should be checked first?",
      options: [
        "Whether tasks, owners, and due dates are clear",
        "Whether the team likes each other",
        "Whether the project is boring",
        "Whether the deadline should be ignored"
      ],
      answer: 0,
      trait: "solutionThinking"
    }

  ],

  hard: [

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A company rewards speed over accuracy. Customer complaints rise sharply after productivity bonuses are introduced. What hidden pattern is MOST likely responsible?",
      options: [
        "Customers complain regardless",
        "Fast workers are careless",
        "The wrong employees were hired",
        "Employees optimize behavior around rewards"
      ],
      answer: 3,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A school improves grades by making exams easier, but long-term student performance declines. What systemic pattern is MOST likely occurring?",
      options: [
        "Students dislike school",
        "Short-term metrics improved while real learning weakened",
        "Testing should be eliminated",
        "Grades never matter"
      ],
      answer: 1,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A business tracks employee hours carefully but ignores burnout and turnover. Profits rise briefly, then collapse. What hidden system failure is MOST likely responsible?",
      options: [
        "Burnout damaged long-term productivity and retention",
        "Employees became lazy suddenly",
        "Tracking hours always fails",
        "Profits naturally disappear"
      ],
      answer: 0,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "An organization rewards employees for individual performance only. Team collaboration steadily declines. Why?",
      options: [
        "People respond to incentives that prioritize individual success",
        "Collaboration is unnecessary",
        "Employees dislike teamwork naturally",
        "Managers caused confusion accidentally"
      ],
      answer: 0,
      trait: "systemsThinking"
    },

    {
      sectionId: "patternLogic",
      section: "Pattern Recognition",
      question:
        "A city adds more highway lanes to reduce traffic, but congestion returns within two years. What pattern is MOST likely happening?",
      options: [
        "Roads always fail",
        "More roads encourage more driving demand over time",
        "Traffic is random",
        "Cities should ban highways"
      ],
      answer: 1,
      trait: "systemsThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A company keeps solving urgent problems, but the same problems keep returning. What is the BEST higher-level solution?",
      options: [
        "Work faster during emergencies",
        "Find and fix the root cause instead of only treating symptoms",
        "Hire more people to handle chaos",
        "Accept that problems are unavoidable"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A nonprofit wants to help more people but has limited staff. What is the strongest solution?",
      options: [
        "Create repeatable systems that reduce manual work",
        "Ask staff to work unpaid overtime",
        "Stop helping new people",
        "Make the process more complicated"
      ],
      answer: 0,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A project has three possible solutions: one is fast but risky, one is slow but reliable, and one is cheap but weak. What should guide the decision?",
      options: [
        "Which option sounds most impressive",
        "The goal, risk level, timeline, and consequences",
        "Which option is easiest to explain",
        "A random vote"
      ],
      answer: 1,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A team keeps arguing because nobody agrees on what success looks like. What problem needs solving first?",
      options: [
        "The team needs a shared definition of the goal",
        "The loudest person should decide",
        "The project should be abandoned",
        "Everyone should work separately forever"
      ],
      answer: 0,
      trait: "solutionThinking"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving",
      question:
        "A student is overwhelmed by a large assignment. What is the strongest strategy?",
      options: [
        "Break the work into smaller steps with checkpoints",
        "Wait until the night before",
        "Only do the easiest part",
        "Assume it cannot be done"
      ],
      answer: 0,
      trait: "solutionThinking"
    }

  ]

};
