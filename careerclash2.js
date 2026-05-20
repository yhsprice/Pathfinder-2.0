const careerClashQuestions = [
  {
    question: "Which work life sounds more interesting?",

    left: {
      title: "Hands-On Problem Solver",
      positives: [
        "Active work",
        "Physical problem solving",
        "Visible results"
      ],
      negatives: [
        "Weather",
        "Physical demands",
        "Less desk time"
      ],
      careers: [
        "Electrician",
        "Utility Technician",
        "Construction Inspector",
        "Survey Technician"
      ],
      interest: "handsOn"
    },

    right: {
      title: "Systems & Data Thinker",
      positives: [
        "Organized work",
        "Problem solving with information",
        "Technology focused"
      ],
      negatives: [
        "More screen time",
        "Longer sitting",
        "Detail-heavy work"
      ],
      careers: [
        "Data Analyst",
        "Business Analyst",
        "Operations Coordinator",
        "Logistics Specialist"
      ],
      interest: "data"
    }
  },

  {
    question: "Which challenge sounds more rewarding?",

    left: {
      title: "Helping People Directly",
      positives: [
        "Human connection",
        "Meaningful impact",
        "Emotionally rewarding"
      ],
      negatives: [
        "Stressful situations",
        "Emotional exhaustion",
        "Unpredictable days"
      ],
      careers: [
        "Nurse",
        "Counselor",
        "Occupational Therapy Assistant",
        "Career Coach"
      ],
      interest: "helpingPeople"
    },

    right: {
      title: "Improving Systems",
      positives: [
        "Fix large-scale problems",
        "Long-term impact",
        "Strategic thinking"
      ],
      negatives: [
        "Less direct recognition",
        "Complex planning",
        "Long projects"
      ],
           careers: [
        "Systems Analyst",
        "Urban Planner",
        "Process Improvement Specialist",
        "Project Manager"
      ],
      interest: "systemsThinking"
    }
  },

  {
  question: "Which kind of work would feel more satisfying?",

  left: {
    title: "Creative Story Builder",
    description: "You create messages, visuals, videos, or designs that help people understand an idea.",
    positives: [
      "Creative freedom",
      "Visible finished work",
      "Ideas can influence people"
    ],
    negatives: [
      "Feedback can feel personal",
      "Deadlines can be tight",
      "Trends change quickly"
    ],
    careers: [
      "Graphic Designer",
      "Video Editor",
      "Marketing Specialist",
      "Content Creator"
    ],
    interest: "creative"
  },

  right: {
    title: "Careful Detail Checker",
    description: "You review information, find mistakes, and help make sure work is accurate.",
    positives: [
      "Clear expectations",
      "Important accuracy work",
      "Good fit for focused thinkers"
    ],
    negatives: [
      "Can feel repetitive",
      "Requires patience",
      "Small errors matter"
    ],
    careers: [
      "Quality Control Inspector",
      "Medical Coder",
      "Auditor",
      "Compliance Assistant"
    ],
    interest: "detail"
  }
},

{
  question: "Which work environment sounds better?",

  left: {
    title: "Outdoor Field Explorer",
    description: "You move around, inspect real places, collect information, and solve problems outside.",
    positives: [
      "Not stuck at a desk",
      "Different locations",
      "Hands-on observations"
    ],
    negatives: [
      "Weather matters",
      "Travel may be required",
      "Some days are physically tiring"
    ],
    careers: [
      "Survey Technician",
      "Environmental Technician",
      "Park Ranger",
      "Construction Inspector"
    ],
    interest: "outdoor"
  },

  right: {
    title: "Indoor Tech Specialist",
    description: "You work with computers, systems, or tools to solve technical problems indoors.",
    positives: [
      "Technology-focused",
      "Controlled environment",
      "Strong problem-solving work"
    ],
    negatives: [
      "More screen time",
      "Can involve sitting",
      "Problems may take patience"
    ],
    careers: [
      "IT Support Specialist",
      "Cybersecurity Analyst",
      "Software Tester",
      "Network Technician"
    ],
    interest: "technology"
  }
},

{
  question: "Which type of pressure would you rather handle?",

  left: {
    title: "Fast Emergency Helper",
    description: "You respond quickly, help people in urgent moments, and make decisions under pressure.",
    positives: [
      "Meaningful impact",
      "Active work",
      "Every day is different"
    ],
    negatives: [
      "High stress",
      "Emotional situations",
      "Unpredictable schedule"
    ],
    careers: [
      "EMT",
      "Firefighter",
      "Emergency Dispatcher",
      "Emergency Management Specialist"
    ],
    interest: "urgentHelping"
  },

  right: {
    title: "Steady Planning Thinker",
    description: "You organize plans, prevent problems, and keep work moving smoothly.",
    positives: [
      "Structured problem solving",
      "Planning ahead matters",
      "Helps teams succeed"
    ],
    negatives: [
      "Lots of coordination",
      "Can involve paperwork",
      "Problems may be slow to fix"
    ],
    careers: [
      "Project Coordinator",
      "Logistics Specialist",
      "Operations Manager",
      "Scheduler"
    ],
    interest: "planning"
  }
},

{
  question: "Which daily task sounds more interesting?",

  left: {
    title: "Health Science Helper",
    description: "You use science, care, and attention to help people understand or improve health.",
    positives: [
      "Helps people directly",
      "Science-based work",
      "Many career paths"
    ],
    negatives: [
      "Can involve stress",
      "Requires accuracy",
      "May require certifications"
    ],
    careers: [
      "Medical Assistant",
      "Lab Technician",
      "Radiology Technologist",
      "Dental Hygienist"
    ],
    interest: "healthcare"
  },

  right: {
    title: "Business Problem Solver",
    description: "You help organizations make better choices using planning, numbers, and communication.",
    positives: [
      "Useful in many industries",
      "Problem-solving focus",
      "Can grow into leadership"
    ],
    negatives: [
      "Meetings and details",
      "Deadlines matter",
      "May involve office work"
    ],
    careers: [
      "Business Analyst",
      "Operations Assistant",
      "Account Manager",
      "Entrepreneur"
    ],
    interest: "business"
  }
},

{
  question: "Which kind of building work sounds better?",

  left: {
    title: "Skilled Trades Builder",
    description: "You build, repair, install, or improve physical things people use every day.",
    positives: [
      "Hands-on results",
      "Useful practical skills",
      "Work can be active"
    ],
    negatives: [
      "Physical effort",
      "Safety matters",
      "Weather or job sites may vary"
    ],
    careers: [
      "Carpenter",
      "Electrician",
      "HVAC Technician",
      "Welder"
    ],
    interest: "trades"
  },

  right: {
    title: "Design & Planning Builder",
    description: "You plan spaces, solve design problems, and help projects work before anything is built.",
    positives: [
      "Creative and technical",
      "Big-picture planning",
      "Uses visual thinking"
    ],
    negatives: [
      "Details and revisions",
      "Computer-based work",
      "Plans must meet rules"
    ],
    careers: [
      "Architectural Drafter",
      "Civil Engineering Technician",
      "Interior Designer",
      "Urban Planner"
    ],
    interest: "designPlanning"
  }
}
];
