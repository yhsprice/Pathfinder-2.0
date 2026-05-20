const careerClusters = {

  broad: [

    {
      id: "people_vs_systems",

      question:
        "Which kind of work sounds more satisfying?",

      left: {
        title: "Helping & Working With People",

        description:
          "You regularly interact with people, support them, guide them, teach them, or help solve human problems.",

        careers: [
          "Nurse",
          "Teacher",
          "Counselor",
          "Social Worker",
          "EMT",
          "Career Coach"
        ],

        next: "healthcare_vs_education",

        tags: [
          "people",
          "helping",
          "social"
        ]
      },

      right: {
        title: "Building, Organizing, or Solving Systems",

        description:
          "You focus more on systems, data, tools, logistics, technology, or operational problem solving.",

        careers: [
          "Data Analyst",
          "Electrician",
          "Software Developer",
          "Logistics Specialist",
          "Project Coordinator"
        ],

        next: "hands_on_vs_technology",

        tags: [
          "systems",
          "technical",
          "analytical"
        ]
      }
    }

  ],

  healthcare_vs_education: [

    {
      id: "direct_care_vs_guidance",

      question:
        "Which type of impact sounds more meaningful?",

      left: {
        title: "Direct Patient Care",

        description:
          "You physically or emotionally help people during medical or stressful situations.",

        careers: [
          "Registered Nurse",
          "Respiratory Therapist",
          "Occupational Therapy Assistant",
          "EMT",
          "Patient Care Technician"
        ],

        next: "fast_paced_healthcare",

        tags: [
          "healthcare",
          "directCare",
          "science"
        ]
      },

      right: {
        title: "Teaching, Advising, & Guiding",

        description:
          "You help people grow, learn, improve, or make decisions over time.",

        careers: [
          "Teacher",
          "Academic Advisor",
          "Career Counselor",
          "School Psychologist",
          "Social Worker"
        ],

        next: "education_vs_counseling",

        tags: [
          "education",
          "guidance",
          "communication"
        ]
      }
    }

  ],

  hands_on_vs_technology: [

    {
      id: "physical_vs_digital",

      question:
        "Which environment sounds more enjoyable?",

      left: {
        title: "Hands-On Physical Problem Solving",

        description:
          "You work with equipment, tools, physical systems, repairs, construction, or movement.",

        careers: [
          "Electrician",
          "HVAC Technician",
          "Construction Inspector",
          "Welder",
          "Survey Technician"
        ],

        next: "trades_vs_fieldwork",

        tags: [
          "handsOn",
          "movement",
          "physical"
        ]
      },

      right: {
        title: "Technology & Digital Systems",

        description:
          "You work with software, technology, cybersecurity, systems, or digital problem solving.",

        careers: [
          "Software Developer",
          "Cybersecurity Analyst",
          "Data Analyst",
          "IT Specialist",
          "UX Designer"
        ],

        next: "creative_vs_technical_tech",

        tags: [
          "technology",
          "systems",
          "digital"
        ]
      }
    }

  ]

};
