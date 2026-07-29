export const personalInfo = {
  name: "Aditya",
  role: "Full-Stack Developer & Software Engineer",
  tagline: "THERE IS 1 TALENTED DEVELOPER AMONG US",
  location: "Earth Sector (Open to Remote / Global Ops)",
  status: "READY FOR NEXT MISSION",
  bio: "Passionate Full-Stack Developer who builds scalable, high-performance web applications with clean architecture and delightful UI/UX. Experienced in modern JavaScript/TypeScript, React, Node.js, Python, and cloud infrastructure.",
  github: "https://github.com/adi0206-hue",
  linkedin: "https://linkedin.com/in/adi0206-hue",
  twitter: "https://twitter.com/adi0206_hue",
  email: "aditya.dev@example.com",
  resumeUrl: "#", // Link to PDF resume
  stats: {
    projectsCompleted: 18,
    codeCommits: "2,400+",
    coffeeConsumed: "850+ Cups",
    impostorsCaught: "100% Bugs Squashed"
  }
};

export const crewmateColors = [
  { id: "red", name: "Red", hex: "#c51111", darkHex: "#7a0808", visorHex: "#71d4ec" },
  { id: "cyan", name: "Cyan", hex: "#38fedc", darkHex: "#1ab098", visorHex: "#ffffff" },
  { id: "lime", name: "Lime", hex: "#50ef39", darkHex: "#2aa01d", visorHex: "#71d4ec" },
  { id: "purple", name: "Purple", hex: "#6b2fbb", darkHex: "#3e1973", visorHex: "#71d4ec" },
  { id: "pink", name: "Pink", hex: "#ed54ba", darkHex: "#ab2982", visorHex: "#71d4ec" },
  { id: "orange", name: "Orange", hex: "#f07d0d", darkHex: "#aa4e03", visorHex: "#71d4ec" },
  { id: "yellow", name: "Yellow", hex: "#f5f557", darkHex: "#c2c219", visorHex: "#71d4ec" },
  { id: "white", name: "White", hex: "#d6e0f0", darkHex: "#8394b3", visorHex: "#71d4ec" },
  { id: "black", name: "Black", hex: "#3f474e", darkHex: "#1e2328", visorHex: "#71d4ec" }
];

export const crewmateHats = [
  { id: "none", name: "No Hat", icon: "🧢" },
  { id: "dev", name: "Headphones", icon: "🎧" },
  { id: "wizard", name: "Wizard", icon: "🧙‍♂️" },
  { id: "crown", name: "Crown", icon: "👑" },
  { id: "brain", name: "Brain Slug", icon: "🧠" },
  { id: "party", name: "Party Hat", icon: "🥳" },
  { id: "cat", name: "Cat Ears", icon: "🐱" }
];

export const crewmatePets = [
  { id: "none", name: "No Pet" },
  { id: "mini", name: "Mini Crewmate", icon: "👶" },
  { id: "ufo", name: "Mini UFO", icon: "🛸" },
  { id: "dog", name: "Alien Dog", icon: "🐶" },
  { id: "robot", name: "Code Bot", icon: "🤖" }
];

export const skillsData = [
  {
    category: "Frontend Station",
    color: "#38fedc", // Cyan
    icon: "Layout",
    skills: [
      { name: "React / Next.js", level: 95, desc: "Component architecture, Server Components, State Management" },
      { name: "JavaScript / TypeScript", level: 92, desc: "ES6+, Async/Await, Strict Typing, DOM Manipulation" },
      { name: "HTML5 & CSS3 / Tailwind", level: 96, desc: "Responsive Design, CSS Grid/Flexbox, Animations, Glassmorphism" },
      { name: "Web Performance & SEO", level: 88, desc: "Lighthouse 95+, Core Web Vitals optimization, Meta strategies" }
    ]
  },
  {
    category: "Backend Engine",
    color: "#50ef39", // Lime
    icon: "Server",
    skills: [
      { name: "Node.js & Express", level: 90, desc: "RESTful APIs, Microservices, Middleware, WebSockets" },
      { name: "Python / FastAPI", level: 85, desc: "Data processing, REST Endpoints, Async Scripting" },
      { name: "Databases (SQL & NoSQL)", level: 87, desc: "PostgreSQL, MongoDB, Redis Caching, Prisma ORM" },
      { name: "GraphQL & WebSockets", level: 82, desc: "Subscriptions, Real-time event streaming" }
    ]
  },
  {
    category: "Navigation & Tools",
    color: "#ed54ba", // Pink
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub Workflow", level: 95, desc: "Branching strategies, PR Reviews, Actions CI/CD" },
      { name: "Docker & Containerization", level: 84, desc: "Container builds, Docker Compose, Microservices" },
      { name: "Cloud & Vercel / AWS", level: 86, desc: "Serverless functions, AWS S3, Lambda, Cloudflare" },
      { name: "Unit & Integration Testing", level: 83, desc: "Jest, React Testing Library, Cypress E2E" }
    ]
  }
];

export const projectsData = [
  {
    id: "skeld-analytics",
    title: "Skeld Metrics — Developer Analytics Dashboard",
    category: "Full Stack",
    difficulty: "CRITICAL TASK",
    room: "Admin Room",
    shortDesc: "Real-time metrics dashboard monitoring system health, API latency, and live user interactions with WebSocket streaming.",
    fullDesc: "Built a high-concurrency developer telemetry platform featuring live chart visualization, custom alert triggers, and dark mode UI inspired by space flight controls.",
    tags: ["React", "Node.js", "WebSockets", "TailwindCSS", "Recharts", "Redis"],
    github: "https://github.com/aditya/skeld-metrics-dashboard",
    demo: "https://example.com/demo-1",
    featured: true,
    wireColors: ["#c51111", "#38fedc", "#f5f557", "#50ef39"]
  },
  {
    id: "impostor-ai",
    title: "Code Impostor — AI Anomaly & Bug Detector",
    category: "AI / Machine Learning",
    difficulty: "ENGINEERING TASK",
    room: "Electrical",
    shortDesc: "AI-powered code auditing tool that identifies anti-patterns, security bugs, and memory leaks before deployment.",
    fullDesc: "Engineered an intelligent code scanner utilizing LLM APIs to review GitHub Pull Requests automatically, generating inline suggestion diffs and security scores.",
    tags: ["Python", "FastAPI", "OpenAI API", "React", "Docker", "GitHub API"],
    github: "https://github.com/aditya/code-impostor-ai",
    demo: "https://example.com/demo-2",
    featured: true,
    wireColors: ["#6b2fbb", "#ed54ba", "#f07d0d", "#38fedc"]
  },
  {
    id: "vortex-commerce",
    title: "Vortex — High-Speed E-Commerce Platform",
    category: "Web Apps",
    difficulty: "COMPLETED TASK",
    room: "Storage",
    shortDesc: "Modern e-commerce storefront with sub-second page loads, Stripe checkout integration, and instant search.",
    fullDesc: "Created a headless e-commerce store with server-side rendering, dynamic inventory caching, custom shopping cart drawers, and frictionless checkout flow.",
    tags: ["Next.js", "TypeScript", "Stripe API", "PostgreSQL", "Prisma", "TailwindCSS"],
    github: "https://github.com/aditya/vortex-commerce",
    demo: "https://example.com/demo-3",
    featured: true,
    wireColors: ["#f5f557", "#c51111", "#50ef39", "#ed54ba"]
  },
  {
    id: "pulse-chat",
    title: "Pulse Comms — Encrypted Real-Time Chat App",
    category: "Full Stack",
    difficulty: "SECURITY TASK",
    room: "Comms",
    shortDesc: "End-to-end encrypted messaging application with file sharing, voice notes, and customizable sound themes.",
    fullDesc: "Designed a lightweight messaging client with WebRTC peer-to-peer audio calls, persistent chat history in SQLite/IndexedDB, and custom themes.",
    tags: ["React", "WebRTC", "Socket.io", "Express", "TailwindCSS"],
    github: "https://github.com/aditya/pulse-chat",
    demo: "https://example.com/demo-4",
    featured: false,
    wireColors: ["#38fedc", "#6b2fbb", "#f07d0d", "#c51111"]
  }
];

export const experienceData = [
  {
    camera: "CAM 01",
    role: "Full-Stack Software Engineer",
    company: "Tech Nova Systems",
    period: "2024 — Present",
    location: "Remote",
    achievements: [
      "Architected and deployed microservices handling 500k+ daily API calls with 99.98% uptime.",
      "Reduced web application load times by 42% through React dynamic code splitting and asset optimization.",
      "Mentored junior developers and led weekly code reviews to enforce clean code architecture."
    ]
  },
  {
    camera: "CAM 02",
    role: "Frontend Developer Intern",
    company: "Starlight Digital Labs",
    period: "2023 — 2024",
    location: "Tech Hub",
    achievements: [
      "Built 15+ accessible, responsive UI components using React, CSS Modules, and TypeScript.",
      "Integrated GraphQL query endpoints for real-time customer analytics dashboards.",
      "Participated in agile sprints, daily standups, and UI design design system reviews."
    ]
  },
  {
    camera: "CAM 03",
    role: "Open Source Contributor & Lead Developer",
    company: "Community Tech Projects",
    period: "2022 — Present",
    location: "GitHub Open Source",
    achievements: [
      "Contributed bug fixes and performance enhancements to popular frontend open-source libraries.",
      "Won 1st Place in Regional University Hackathon for building an emergency response web app.",
      "Maintained custom developer tooling CLI with 1,500+ monthly npm downloads."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "State University of Technology",
    period: "2021 — 2025",
    details: "Specialized in Software Engineering, Algorithms & Data Structures, Database Management Systems, and Web Architecture. Graduated with Honors."
  }
];
