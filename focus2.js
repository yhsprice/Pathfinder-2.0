questions.easy.push(
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which row has a repeated letter?",
    options: ["A B C D E", "F G H I J", "K L M L N", "O P Q R S"],
    answer: 2,
    trait: "errorDetection"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which word is different?",
    options: ["Report", "Report", "Reprot", "Report"],
    answer: 2,
    trait: "attentionToDetail"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which number is missing from the sequence? 1, 2, 3, 5, 6",
    options: ["0", "4", "7", "8"],
    answer: 1,
    trait: "errorDetection"
  }
);

questions.medium.push(
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which code does NOT match the pattern?",
    options: ["TX-204", "TX-205", "TX-206", "XT-207"],
    answer: 3,
    trait: "errorDetection"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which line contains the typo?",
    options: [
      "Appointment confirmed",
      "Payment received",
      "Document attatched",
      "Schedule updated"
    ],
    answer: 2,
    trait: "attentionToDetail"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which item breaks alphabetical order?",
    options: ["Apple, Banana, Carrot, Date", "Dog, Elephant, Frog, Giraffe", "Lamp, Kite, Monkey, Nest", "Rain, Snow, Thunder, Wind"],
    answer: 2,
    trait: "errorDetection"
  }
);

questions.hard.push(
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    passage: "Compare carefully: Invoice #78429 | Invoice #78492",
    question: "What changed?",
    options: ["The 4 and 9 switched", "The 8 changed", "The 7 changed", "Nothing changed"],
    answer: 0,
    trait: "attentionToDetail"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    question: "Which entry is formatted differently?",
    options: ["AB-1024", "CD-2048", "EF 4096", "GH-8192"],
    answer: 2,
    trait: "errorDetection"
  },
  {
    sectionId: "focusDetail",
    section: "Focus, Detail & Error Detection",
    passage: "Instruction: Select the option that contains exactly two 7s.",
    question: "Which option follows the instruction?",
    options: ["172739", "771234", "123456", "707077"],
    answer: 1,
    trait: "attentionToDetail"
  }
);
