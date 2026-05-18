const questions = {
  easy: [
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "What number comes next? 2, 4, 8, 16, ?",
      options: ["18", "24", "32", "30"],
      answer: 2,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "Which shape comes next? ▲ ● ▲ ● ▲ ?",
      options: ["▲", "■", "●", "◆"],
      answer: 2,
      trait: "patternRecognition"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "Which item does NOT belong?",
      options: ["Hammer", "Screwdriver", "Wrench", "Banana"],
      answer: 3,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "What letter comes next? A, C, F, J, ?",
      options: ["N", "O", "P", "L"],
      answer: 1,
      trait: "patternRecognition"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "A clock shows 3:15. What angle is closest between the hour and minute hands?",
      options: ["0°", "90°", "180°", "45°"],
      answer: 1,
      trait: "logic"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving & Common Sense",
      question: "You are helping plan an event, but the speaker cancels the morning of the event. What should you do FIRST?",
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
      section: "Problem Solving & Common Sense",
      question: "A printer stops working right before a meeting. What is the BEST first step?",
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
      section: "Problem Solving & Common Sense",
      question: "Your group has too many tasks and not enough time. What is the smartest move?",
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
      section: "Problem Solving & Common Sense",
      question: "A customer is upset because an order is wrong. What should happen first?",
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
      section: "Problem Solving & Common Sense",
      question: "You are given instructions that are confusing. What is the BEST response?",
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
      section: "Pattern & Logic Recognition",
      question: "What number comes next? 3, 6, 12, 24, ?",
      options: ["30", "36", "48", "54"],
      answer: 2,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "Which word does NOT fit?",
      options: ["Dog", "Cat", "Bird", "Carrot"],
      answer: 3,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "If all BLOOPS are RAZZES, and some RAZZES are LUMS, which statement must be true?",
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
      question: "What comes next? ■ ▲ ▲ ■ ▲ ▲ ■ ?",
      options: ["■", "▲", "●", "◆"],
      answer: 1,
      trait: "patternRecognition"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "A train travels 60 miles in 1 hour. At the same speed, how far will it travel in 3.5 hours?",
      options: ["180 miles", "200 miles", "210 miles", "240 miles"],
      answer: 2,
      trait: "logic"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving & Common Sense",
      question: "A school club keeps losing members because meetings feel unorganized. What is the BEST solution?",
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
      section: "Problem Solving & Common Sense",
      question: "Two coworkers disagree about how to finish a project. What is the strongest problem-solving approach?",
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
      section: "Problem Solving & Common Sense",
      question: "A process keeps causing small mistakes. What should you do?",
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
      section: "Problem Solving & Common Sense",
      question: "You have limited money for a project. What is the BEST decision?",
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
      section: "Problem Solving & Common Sense",
      question: "A team keeps missing deadlines. What should be checked first?",
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
      section: "Pattern & Logic Recognition",
      question: "What number comes next? 1, 1, 2, 3, 5, 8, ?",
      options: ["11", "12", "13", "14"],
      answer: 2,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "If five machines make five parts in five minutes, how long would 100 machines take to make 100 parts?",
      options: ["5 minutes", "20 minutes", "100 minutes", "500 minutes"],
      answer: 0,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "Which pattern comes next? AB, BC, CD, DE, ?",
      options: ["EF", "FG", "EG", "DF"],
      answer: 0,
      trait: "patternRecognition"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "A farmer has 17 sheep. All but 9 run away. How many are left?",
      options: ["8", "9", "17", "0"],
      answer: 1,
      trait: "logic"
    },
    {
      sectionId: "patternLogic",
      section: "Pattern & Logic Recognition",
      question: "You rearrange the letters 'CIFAIPC'. What country do they spell?",
      options: ["Pacific", "France", "Canada", "Japan"],
      answer: 0,
      trait: "patternRecognition"
    },

    {
      sectionId: "problemCommonSense",
      section: "Problem Solving & Common Sense",
      question: "A company keeps solving urgent problems, but the same problems keep returning. What is the BEST higher-level solution?",
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
      section: "Problem Solving & Common Sense",
      question: "A nonprofit wants to help more people but has limited staff. What is the strongest solution?",
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
      section: "Problem Solving & Common Sense",
      question: "A project has three possible solutions: one is fast but risky, one is slow but reliable, and one is cheap but weak. What should guide the decision?",
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
      section: "Problem Solving & Common Sense",
      question: "A team keeps arguing because nobody agrees on what success looks like. What problem needs solving first?",
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
      section: "Problem Solving & Common Sense",
      question: "A student is overwhelmed by a large assignment. What is the strongest strategy?",
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
