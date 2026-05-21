const logicCategories = {
  sequences: [],
  symbols: [],
  visualPatterns: [],
  elimination: [],
  quickLogic: [],
  oddOneOut: []
};

logicCategories.sequences.push(
  {
    question: "What comes next?",
    visual: "⬜ 🟦 ⬜ 🟦 ⬜ ?",
    options: ["⬜", "🟦", "⬛", "🟥"],
    answer: 1,
    trait: "patternRecognition"
  },

  {
    question: "Which number completes the pattern?",
    visual: "2 → 4 → 8 → 16 → ?",
    options: ["18", "24", "32", "30"],
    answer: 2,
    trait: "logic"
  }
);

logicCategories.oddOneOut.push(
  {
    question: "Which item does NOT belong?",
    options: [
      "Hammer",
      "Wrench",
      "Drill",
      "Banana"
    ],
    answer: 3,
    trait: "categorization"
  },

  {
    question: "Which does NOT fit the group?",
    options: [
      "Triangle",
      "Square",
      "Circle",
      "Banana"
    ],
    answer: 3,
    trait: "logic"
  }
);

logicCategories.quickLogic.push(
  {
    question: "A flashlight needs batteries to work. The flashlight does not turn on. What is MOST likely?",
    options: [
      "The batteries are dead",
      "The room is too bright",
      "Flashlights hate Tuesdays",
      "The batteries became sandwiches"
    ],
    answer: 0,
    trait: "solutionThinking"
  }
);

logicCategories.elimination.push(
  {
    question: "Three doors exist. One leads outside. One leads to a closet. One leads nowhere. You hear traffic behind Door B. Which is MOST likely correct?",
    options: [
      "Door B leads outside",
      "Door A leads outside",
      "Door C leads outside",
      "Traffic is illegal"
    ],
    answer: 0,
    trait: "logic"
  }
);

questions.easy.push(
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "What comes next? ◆ ◆ ● ◆ ◆ ● ◆ ◆ ?",
    options: ["●", "◆", "▲", "■"],
    answer: 0,
    trait: "patternRecognition"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which symbol appears only once?",
    options: ["▲ ▲ ● ▲", "■ ■ ■ ◆", "● ● ● ●", "◆ ◆ ▲ ◆"],
    answer: 1,
    trait: "patternRecognition"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Complete the pattern: 1, 3, 5, 7, ?",
    options: ["8", "9", "10", "11"],
    answer: 1,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which group is in the correct order from smallest to largest?",
    options: ["3, 7, 2, 9", "1, 4, 6, 8", "5, 2, 7, 9", "8, 6, 4, 2"],
    answer: 1,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "What comes next? A1, B2, C3, ?",
    options: ["D4", "C4", "D3", "E5"],
    answer: 0,
    trait: "patternRecognition"
  }
);

questions.medium.push(
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    passage: "Look at the shape pattern carefully.",
    question: "What comes next? ▲ ▲ ● ■ ▲ ▲ ● ■ ▲ ▲ ?",
    options: ["●", "■", "▲", "◆"],
    answer: 0,
    trait: "patternRecognition"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which code does NOT follow the pattern?",
    options: ["AB-12", "CD-34", "EF-56", "GH-79"],
    answer: 3,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Complete the number pattern: 4, 9, 14, 19, ?",
    options: ["21", "22", "24", "25"],
    answer: 2,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    passage: "Grid rule: numbers increase by 1 across and down.",
    question: "1 2 3 | 2 3 4 | 3 4 ?",
    options: ["4", "5", "6", "7"],
    answer: 1,
    trait: "patternRecognition"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which pair has the same relationship? Hand : Glove",
    options: ["Foot : Sock", "Book : Page", "Car : Road", "Chair : Table"],
    answer: 0,
    trait: "logic"
  }
);

questions.hard.push(
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    passage: "Each step adds one side: triangle = 3, square = 4, pentagon = 5.",
    question: "If ▲ = 3, ■ = 4, and ⬟ = 5, what is ▲ + ■ + ⬟?",
    options: ["10", "11", "12", "13"],
    answer: 2,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which sequence changes by +2, +4, +6?",
    options: ["2, 4, 8, 14", "1, 3, 5, 7", "3, 6, 9, 12", "5, 10, 20, 40"],
    answer: 0,
    trait: "logic"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    passage: "Pattern: first letter moves forward, second letter moves backward.",
    question: "AZ, BY, CX, DW, ?",
    options: ["EV", "EU", "FV", "EX"],
    answer: 0,
    trait: "patternRecognition"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    question: "Which item breaks the rule: two matching symbols followed by one different symbol?",
    options: ["▲ ▲ ●", "■ ■ ◆", "● ◆ ●", "◆ ◆ ▲"],
    answer: 2,
    trait: "errorDetection"
  },
  {
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    passage: "Only one option keeps both patterns: letters go forward and numbers double.",
    question: "A2, B4, C8, ?",
    options: ["D16", "D12", "E16", "C16"],
    answer: 0,
    trait: "patternRecognition"
  }
);

logicCategories.sequences.push(

{
  question: "What comes next?",
  visual: "🔺 🔵 🔺 🔵 🔺 ?",
  options: ["🔺", "🔵", "⬛", "⭐"],
  answer: 1,
  trait: "patternRecognition"
},

{
  question: "Which number belongs next?",
  visual: "5 → 10 → 15 → 20 → ?",
  options: ["21", "25", "30", "35"],
  answer: 1,
  trait: "logic"
},

{
  question: "What comes next?",
  visual: "🟩 🟨 🟩 🟨 🟩 ?",
  options: ["🟨", "🟩", "⬜", "⬛"],
  answer: 0,
  trait: "patternRecognition"
},

{
  question: "Find the missing number.",
  visual: "3 → 6 → 12 → 24 → ?",
  options: ["30", "36", "48", "60"],
  answer: 2,
  trait: "logic"
}

);

logicCategories.oddOneOut.push(

{
  question: "Which item does NOT belong?",
  options: [
    "Bus",
    "Train",
    "Airplane",
    "Potato"
  ],
  answer: 3,
  trait: "categorization"
},

{
  question: "Which item does NOT fit?",
  options: [
    "Keyboard",
    "Monitor",
    "Mouse",
    "Banana"
  ],
  answer: 3,
  trait: "logic"
},

{
  question: "Which item does NOT belong?",
  options: [
    "Doctor",
    "Nurse",
    "Thermometer",
    "Teacher"
  ],
  answer: 3,
  trait: "categorization"
},

{
  question: "Which does NOT fit the pattern?",
  options: [
    "🔵",
    "🟢",
    "🟡",
    "🚗"
  ],
  answer: 3,
  trait: "logic"
}

);

logicCategories.quickLogic.push(

{
  question: "A phone will not charge. What should be checked FIRST?",
  options: [
    "Charging cable",
    "The wallpaper",
    "The weather",
    "The apps"
  ],
  answer: 0,
  trait: "solutionThinking"
},

{
  question: "A classroom projector stopped working during a presentation. What is MOST reasonable first?",
  options: [
    "Check power connection",
    "Buy a new school",
    "Blame gravity",
    "Turn off the lights forever"
  ],
  answer: 0,
  trait: "practicalThinking"
},

{
  question: "You forgot your house key. What is the BEST next step?",
  options: [
    "Contact someone with access",
    "Break a window immediately",
    "Sleep outside forever",
    "Move away"
  ],
  answer: 0,
  trait: "judgment"
},

{
  question: "A recipe tastes too salty. What would MOST likely help?",
  options: [
    "Reduce salt next time",
    "Add batteries",
    "Freeze the spoon",
    "Turn off the lights"
  ],
  answer: 0,
  trait: "logic"
}

);

logicCategories.elimination.push(

{
  question: "A store closes at 9 PM. You arrive at 9:15 PM. What is MOST likely true?",
  options: [
    "The store is closed",
    "The store just opened",
    "The store became a zoo",
    "Time stopped"
  ],
  answer: 0,
  trait: "logic"
},

{
  question: "You hear thunder and see dark clouds. What is MOST likely?",
  options: [
    "Rain is coming",
    "Penguins are attacking",
    "The moon exploded",
    "The clouds are fake"
  ],
  answer: 0,
  trait: "reasoning"
},

{
  question: "A coworker is carrying many heavy boxes. What is MOST reasonable?",
  options: [
    "Offer help",
    "Hide from them",
    "Throw more boxes",
    "Pretend gravity stopped"
  ],
  answer: 0,
  trait: "socialJudgment"
},

{
  question: "A laptop suddenly becomes very hot and loud. What is MOST likely happening?",
  options: [
    "It is overworking",
    "It is happy",
    "It needs water",
    "The keyboard is scared"
  ],
  answer: 0,
  trait: "problemSolving"
}

);

questions.easy.push(
  ...logicCategories.sequences.map(q => ({
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    ...q
  })),

  ...logicCategories.oddOneOut.map(q => ({
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    ...q
  }))
);

questions.medium.push(
  ...logicCategories.quickLogic.map(q => ({
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    ...q
  }))
);

questions.hard.push(
  ...logicCategories.elimination.map(q => ({
    sectionId: "patternLogic",
    section: "Pattern & Logic Recognition",
    ...q
  }))
);

