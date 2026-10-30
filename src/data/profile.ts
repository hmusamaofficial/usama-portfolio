// Public, user-confirmed facts. See docs/content-provenance.md for unresolved history.
export const profile = {
  name: "Muhammad Usama",
  role: "SQA / QA Engineer",
  company: "Texinnova",
  joined: "2025-06-07",
  joinedLabel: "June 2025",
  location: "Lahore, Pakistan",
  email: "hmusama2018@gmail.com",
  url: "https://hmusama.vercel.app",
  github: "https://github.com/hmusamaofficial",
  linkedin: "https://www.linkedin.com/in/hmusama/",
  summary:
    "SQA engineer focused on ERP software quality and practical automation with Playwright, Python, and pytest. Bringing the analytical discipline of chemistry to software testing, clear defect reporting, and repeatable business workflows.",
  responsibilities: [
    "Test ERP business workflows across inventory, finance, sales, purchasing, and HR, with attention to cross-module behavior and permissions.",
    "Develop and maintain automated checks using Playwright, Python, pytest, and related tooling alongside exploratory and regression testing.",
    "Document reproducible defects, investigate unexpected behavior, and collaborate with engineers to validate fixes.",
    "Work with Git, GitHub, Docker, VS Code, and Ubuntu/Linux in the development and testing workflow.",
  ],
};
export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Services", "/services"],
  ["Contact", "/contact"],
] as const;
export const education = [
  {
    degree: "MS Chemistry",
    school: "University of Education",
    detail:
      "Analytical thinking, research methodology, and systematic investigation.",
  },
  {
    degree: "BS Chemistry",
    school: "University of the Punjab",
    detail: "2019–2023 · Foundation in scientific methods and data analysis.",
  },
];
export const skills = [
  {
    title: "Quality engineering",
    items: [
      "ERP workflow testing",
      "Exploratory & regression testing",
      "Test case design",
      "Defect reporting",
      "Permissions & integration checks",
    ],
    detail:
      "Start with business risk, investigate edge cases, and make failures reproducible.",
  },
  {
    title: "Automation",
    items: [
      "Playwright",
      "Python",
      "pytest",
      "Browser automation",
      "Maintainable test workflows",
    ],
    detail:
      "Practical automation experience that complements manual investigation and domain knowledge.",
  },
  {
    title: "Engineering tools",
    items: ["Git & GitHub", "Docker", "VS Code", "Ubuntu / Linux", "Postman"],
    detail:
      "Version-controlled work, repeatable environments, and collaborative debugging.",
  },
  {
    title: "Supporting practice",
    items: [
      "API testing",
      "SQL fundamentals",
      "AI-assisted investigation",
      "Technical documentation",
    ],
    detail:
      "Use supporting tools with human review; verify outputs against actual application behavior.",
  },
];
export const projects = [
  {
    slug: "erp-quality",
    title: "ERP quality engineering",
    category: "Professional practice",
    stack: ["ERP testing", "Playwright", "Python", "pytest"],
    summary:
      "Testing the business workflows where one incorrect state can affect several modules.",
    context:
      "ERP software connects inventory, sales, purchasing, finance, and people operations. Checks need to cover both individual screens and the transitions between them.",
    work: "At Texinnova, my work combines manual investigation, reproducible defect reports, and automation using Playwright, Python, and pytest.",
    evidence:
      "This is a description of my professional practice, not a public code sample. Employer source code, screenshots, customer data, and measured outcomes are not published here.",
    takeaway:
      "The useful result of a test is a clear signal: what failed, how to reproduce it, and which business behavior is affected.",
    href: null,
  },
  {
    slug: "panda-snake",
    title: "Panda Snake",
    category: "Personal development",
    stack: ["JavaScript", "Canvas", "Input handling"],
    summary:
      "A browser game exploring state, collision rules, and keyboard and touch interactions.",
    context:
      "A small game is a practical way to work with state transitions and immediate visual feedback.",
    work: "The public implementation includes a canvas game loop, food and self-collision checks, wrapping and wall modes, keyboard controls, touch gestures, and adjustable speed.",
    evidence:
      "Implementation details are visible in the public index.html. This is a personal project, not a claim of production-scale engineering or exhaustive test coverage.",
    takeaway:
      "From a QA perspective, game rules make useful boundaries visible: restart, pause, direction changes, and collision behavior.",
    href: "https://github.com/hmusamaofficial/Panda-Snake-Game/blob/main/index.html",
  },
  {
    slug: "streak-stats",
    title: "GitHub streak stats fork",
    category: "Open-source exploration",
    stack: ["PHP", "GitHub", "SVG"],
    summary:
      "Exploring an existing open-source contribution visualization project.",
    context:
      "Reading an established codebase is part of learning how other developers structure software.",
    work: "I maintain a public fork of github-readme-streak-stats. The upstream project generates contribution streak graphics for GitHub profiles.",
    evidence:
      "GitHub identifies this repository as a fork. Original authorship and upstream functionality belong to the upstream maintainers; no unverified upstream contribution is claimed.",
    takeaway:
      "Clear attribution matters. A fork shows an area of interest, while specific contributions should be linked separately when available.",
    href: "https://github.com/hmusamaofficial/github-readme-streak-stats",
  },
];
export const services = [
  {
    title: "ERP & workflow testing",
    text: "Explore business processes, cross-module transitions, permissions, and edge cases. Deliver a scoped test plan and actionable findings.",
  },
  {
    title: "Browser test automation",
    text: "Build and maintain focused Playwright checks for important user journeys, with readable tests and useful failure evidence.",
  },
  {
    title: "Regression & release support",
    text: "Validate fixes, investigate regressions, and communicate the remaining risks before a release.",
  },
  {
    title: "QA documentation",
    text: "Create clear test scenarios and defect reports with expected behavior, reproduction steps, and supporting evidence.",
  },
];
