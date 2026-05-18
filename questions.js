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
    },
    
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "What is 15% of 200?",
  options: ["15", "20", "30", "45"],
  answer: 2,
  trait: "mathReasoning"
},
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "If something costs $40 and is 25% off, what is the sale price?",
  options: ["$10", "$20", "$30", "$35"],
  answer: 2,
  trait: "numberSense"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Which word is spelled incorrectly?",
  options: [
    "Necessary",
    "Definately",
    "Separate",
    "Calendar"
  ],
  answer: 1,
  trait: "attentionToDetail"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Which number appears twice?",
  options: [
    "4, 7, 9, 2, 6, 7, 1",
    "5, 3, 8, 1, 4, 9, 2",
    "6, 1, 3, 8, 5, 2, 4",
    "9, 2, 7, 5, 1, 6, 3"
  ],
  answer: 0,
  trait: "errorDetection"
}
    ,
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which word is spelled correctly?",
  options: ["Recieve", "Receive", "Receeve", "Receve"],
  answer: 1,
  trait: "spelling"
},
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which sentence is written correctly?",
  options: [
    "She don't like math.",
    "She doesn't like math.",
    "She doesn't likes math.",
    "She don't likes math."
  ],
  answer: 1,
  trait: "grammar"
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
    ,
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "A worker earns $18 per hour and works 7.5 hours. How much do they earn before taxes?",
  options: ["$120", "$125", "$135", "$150"],
  answer: 2,
  trait: "mathReasoning"
},
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "Which is larger?",
  options: ["3/8", "0.40", "35%", "0.33"],
  answer: 1,
  trait: "numberSense"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Which sentence contains a punctuation error?",
  options: [
    "After lunch, we returned to class.",
    "The dog barked loudly at the mailman.",
    "Before leaving she grabbed her keys.",
    "My favorite subjects are math and science."
  ],
  answer: 2,
  trait: "attentionToDetail"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Which color word is spelled incorrectly?",
  options: [
    "Blue",
    "Green",
    "Orenge",
    "Yellow"
  ],
  answer: 2,
  trait: "errorDetection"
},
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which sentence uses the correct form of their/there/they're?",
  options: [
    "Their going to the meeting.",
    "There going to the meeting.",
    "They're going to the meeting.",
    "Theyre going to the meeting."
  ],
  answer: 2,
  trait: "grammar"
},
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which sentence has the clearest structure?",
  options: [
    "Running late, the keys were forgotten.",
    "Because I was running late, I forgot my keys.",
    "The keys running late were forgotten.",
    "Forgot my keys because running late."
  ],
  answer: 1,
  trait: "writtenCommunication"
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
      question: "You rearrange the letters 'AANADC'. What country do they spell?",
      options: ["Denmark", "France", "Canada", "Japan"],
      answer: 2,
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
  ,
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "A $60 item is marked up by 20%, then discounted by 10%. What is the final price?",
  options: ["$64.80", "$66.00", "$68.00", "$72.00"],
  answer: 0,
  trait: "mathReasoning"
},
{
  sectionId: "mathNumberSense",
  section: "Math & Number Sense",
  question: "If 4 people complete a job in 6 hours, how long would 8 people take at the same rate?",
  options: ["2 hours", "3 hours", "4 hours", "12 hours"],
  answer: 1,
  trait: "numberSense"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Which sentence is grammatically incorrect?",
  options: ["Neither of the students was prepared.",
    "Everyone in the group has finished.",
    "The list of items are on the desk.",
    "Each employee received a schedule."],
  answer: 2,
  trait: "attentionToDetail"
},
{
  sectionId: "focusDetail",
  section: "Focus, Detail & Error Detection",
  question: "Find the subtle difference:",
  options: ["85439217",
    "85439271",
    "85439217",
    "85439217"],
 answer: 1,
  trait: "errorDetection"
},
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which sentence is grammatically correct?",
  options: [
    "Neither the coach nor the players was ready.",
    "Neither the coach nor the players were ready.",
    "Neither the coach or the players were ready.",
    "Neither the coach or the players was ready."
  ],
  answer: 1,
  trait: "grammar"
},
{
  sectionId: "spellingGrammar",
  section: "Spelling, Grammar & Sentence Structure",
  question: "Which sentence is most concise and professional?",
  options: [
    "Due to the fact that we were late, we missed it.",
    "Because we were late, we missed it.",
    "We missed it due to being late because of time.",
    "The reason we missed it was due to lateness."
  ],
  answer: 1,
  trait: "writtenCommunication"
}

  ]
};
