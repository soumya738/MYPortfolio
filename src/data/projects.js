export const projects = [
  {
    number: "01",
    name: "CorpCart",
    kind: "E-commerce frontend",
    status: "LIVE PROJECT",
    description:
      "A corporate merchandise storefront for browsing products and moving through a practical shopping flow.",
    technologies: [
      "React",
      "Vite",
      "JavaScript",
      "React Router",
      "Context API",
      "CSS",
    ],
    live: "https://soumyas.vercel.app/",
    repository: "https://github.com/soumya738/CorpCart",
    visual: "corpcart",
    previewLabel: "THE COMPANY STORE",
    caseStudy: {
      overview:
        "A React/Vite storefront for discovering merchandise and using a client-side shopping flow.",
      problem:
        "The project explores how a familiar merchandise catalog can make product discovery and shopping actions easy to follow.",
      approach:
        "The repository documents catalog search and filters, product galleries, cart and wishlist state, local sign-in, and checkout confirmation.",
      decisions:
        "React and Vite structure the frontend; React Router and Context API are included in the documented stack.",
      challenges:
        "Add a verified implementation challenge here before publishing a specific story.",
      outcome:
        "The project README describes a working catalog, cart, wishlist, local sign-in, and local checkout confirmation. Sign-in and checkout are demonstrations, not server-backed services.",
    },
  },
  {
    number: "02",
    name: "ResumeIQ",
    kind: "AI-assisted résumé analysis",
    status: "LIVE PROJECT",
    description:
      "An AI-assisted experience for exploring how a résumé aligns with a job description, powered by Gemini API integration.",
    technologies: ["Gemini API", "AI integration", "Web application"],
    live: "https://resumeiq-tau-eight.vercel.app/",
    visual: "resumeiq",
    previewLabel: "ROLE ALIGNMENT / 01",
    caseStudy: {
      overview:
        "A web application centered on comparing résumé information with a job description using Gemini API integration.",
      problem:
        "Job seekers need a clearer way to reflect on the fit between their experience and a role description.",
      approach:
        "The application brings résumé and job-description content into an AI-assisted review workflow.",
      decisions:
        "Gemini API integration is the verified technology detail provided for this project.",
      challenges:
        "Add a verified implementation challenge here before publishing a specific story.",
      outcome:
        "A live demo is available. Add specific analysis outputs or results only after verifying them in the application.",
    },
  },
  {
    number: "03",
    name: "RepoMind AI",
    kind: "Repository assistant · In progress",
    status: "IN PROGRESS",
    description:
      "An in-progress developer tool for importing a GitHub repository and processing repository information through a web application.",
    technologies: ["React", "Vite", "Node.js", "Express.js"],
    repository: "https://github.com/soumya738/repo-mind-ai",
    visual: "repomind",
    previewLabel: "REPOSITORY / INSPECT",
    caseStudy: {
      overview:
        "An in-progress repository assistant with a web client and backend repository-processing API.",
      problem:
        "Understanding an unfamiliar codebase takes time; the project explores ways to make repository information easier to inspect.",
      approach:
        "The repository README lists GitHub repository import, automatic cloning, and a backend API for repository processing as current features.",
      decisions:
        "The project is organized as a React/Vite client and a Node.js/Express backend. More advanced AI analysis is documented as planned work.",
      challenges:
        "Add verified implementation details as the project develops.",
      outcome:
        "The project is in progress. AI chat, architecture visualization, documentation generation, and code analysis are planned, not presented here as completed features.",
    },
  },
];
