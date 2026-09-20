export type Project = {
  slug: string;
  name: string;
  kind: string;
  /** One line, shown in the index. */
  summary: string;
  /** What the project is and who it is for. */
  brief: string;
  /** What I actually built. */
  work: string[];
  stack: string[];
  live?: string;
  repo?: string;
  /** Screenshot at public/projects/<slug>.png or .jpg. Drop a file in and set
   *  this; the index and the case study both render it only when it is set. */
  image?: string;
  /** Numbers once they exist: users, adoption, time saved. The case study
   *  renders this section only when a project has one, so an empty field is
   *  better than a vague claim. */
  outcome?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "smartsense",
    name: "SmartSense",
    kind: "Undergraduate thesis",
    summary:
      "Live transcription from audio and video, read on augmented-reality glasses instead of a phone screen.",
    brief:
      "My undergraduate thesis at West Visayas State University. SmartSense listens through the phone's microphone and camera, transcribes speech in real time, and sends the text to augmented-reality glasses, so the wearer reads a conversation in front of them rather than looking down at a screen.",
    work: [
      "Flutter app that captures the audio and video input and drives the text shown on the glasses.",
      "Python transcription pipeline, served to the app over a Flask API.",
      "Two display targets: Brilliant Labs Frame glasses and the Meta Quest 3.",
    ],
    stack: ["Flutter", "Dart", "Python", "Flask"],
    repo: "https://github.com/chariz1101/smartsense-quest3",
    featured: true,
  },
  {
    slug: "debunkr",
    name: "Debunkr",
    kind: "Machine learning",
    summary:
      "A Filipino fake news classifier that shows its reasoning, built ahead of the 2025 midterms.",
    brief:
      "A Pulse Asia survey found 86% of Filipinos see fake news as a major problem and 65% struggle to tell truth from falsehood. Debunkr is a fake news classifier for Filipino news content, built ahead of the May 2025 midterm elections, and it explains each verdict rather than just returning one.",
    work: [
      "Ensemble of machine learning models trained on two datasets: a Tagalog-language corpus and an English corpus of Philippine events.",
      "LIME for interpretability, so a user sees which words drove the classification instead of an unexplained label.",
      "SvelteKit and Tailwind CSS front end over a Python NLP backend.",
    ],
    stack: ["Python", "NLP", "LIME", "SvelteKit", "Tailwind CSS"],
    repo: "https://github.com/hydraadra112/Debunkr",
    featured: true,
  },
  {
    slug: "famas",
    name: "FAMAS",
    kind: "Farm management platform",
    summary:
      "Multi-tenant platform for farm operations: timesheets, tasks, inventory, and accounting under one login.",
    brief:
      "A multi-tenant farm management platform: several farms run from one deployment, each keeping its own workers, records, and books, with role-based access deciding what any given person can see.",
    work: [
      "Timesheet tracking, task management, inventory, and accounting modules.",
      "Multi-tenant data model with role-based access control.",
      "Next.js front end on a Node.js and PostgreSQL back end.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL"],
    live: "https://famas-staging.springvalley.tech/",
    featured: true,
  },
  {
    slug: "cyb-robotics",
    name: "Cyb Robotics",
    kind: "Organisation platform",
    summary:
      "The robotics org's website, members' portal, and admin dashboard: three audiences, one codebase.",
    brief:
      "The official site for Cyb Robotics, the robotics organisation under the College of Information and Communications Technology at West Visayas State University. It serves three audiences from one deployment: the public, members, and admins.",
    work: [
      "Public site covering club information, officers, members, alumni, projects, and events.",
      "An unlisted members' portal, reached by a secret slug with no login, holding event documentation, letter and programme templates, branding files, and beginner Arduino guides with sample code.",
      "A protected admin dashboard for managing officers, members, events, announcements, and the members' file directory.",
      "Supabase for Postgres, auth, and file storage.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Supabase", "PostgreSQL"],
    repo: "https://github.com/chariz1101/cyb-robotics-website",
    featured: true,
  },
  {
    slug: "tuon-ilo",
    name: "Tuon.ILO",
    kind: "Civic web app",
    summary:
      "A map of study spaces and cafés in Iloilo City, filtered by Wi-Fi, outlets, and noise.",
    brief:
      "A community-driven civic technology platform for students, freelancers, and remote workers in Iloilo City. It lets them discover, filter, and review the study spaces and cafés they actually work out of, built around fast geospatial querying.",
    work: [
      "Interactive map explorer over Mapbox GL JS, visualising approved study hubs.",
      "Filtering on the things that decide whether a place is workable: study hub or café, Wi-Fi, charging ports, ambient noise.",
      "Anonymous reviews tied to session IDs: low friction to leave one, still hard to spam.",
      "A moderation queue: user-submitted locations are verified before they reach the public map.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox GL JS",
      "Supabase",
      "Zod",
    ],
    live: "https://tuon-ilo.vercel.app/",
    repo: "https://github.com/chariz1101/tuon-ilo",
    featured: true,
  },
  {
    slug: "tuon-ta",
    name: "Tuon Ta!",
    kind: "Educational game",
    summary:
      "A Hiligaynon learning game for mobile, made with PLDT and Smart.",
    brief:
      "An educational game conceptualised in collaboration with PLDT and Smart, built around interactive sub-games that teach in Hiligaynon rather than translating away from it.",
    work: [
      "Several interactive sub-games, each teaching a different Hiligaynon concept.",
      "Built in Unity with C#, published for Android.",
    ],
    stack: ["Unity", "C#"],
    live: "https://apkpure.com/tuon-ta/com.wvsu.com.mobile2D",
    featured: true,
  },
  {
    slug: "synkapwa",
    name: "SynKapwa",
    kind: "Product experiment",
    summary:
      "Group project management as an RPG, where an AI breaks the syllabus into quests and the team levels up together.",
    brief:
      "A gamified group project platform for students tired of the lone-wolf dynamic in group work. It borrows the Filipino idea of kapwa, meaning shared identity, and puts RPG mechanics on top of academic work so the incentive is collective rather than individual.",
    work: [
      "A \"Quest Master\" service that parses pasted project requirements into actionable tasks, assigns difficulty tiers, and suggests XP rewards.",
      "Avatars that evolve visually as XP accrues, driven by Redux Toolkit and Framer Motion.",
      "Raid rooms: synchronised meeting timers that grant a synergy multiplier to everyone who stays active.",
      "A burnout meter that unlocks embedded mini-games for group-wide cosmetic rewards.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Redux Toolkit", "Zod", "LLM API"],
    repo: "https://github.com/chariz1101/synkapwa",
  },
  {
    slug: "hirewire",
    name: "HireWire",
    kind: "Web app",
    summary:
      "A job and OJT application tracker that reads your inbox so you know when to follow up.",
    brief:
      "Applying for jobs and OJT placements means losing track of who replied and who went quiet. HireWire syncs with the applicant's inbox, detects employer replies, and reminds them when an application has gone cold enough to warrant a follow-up.",
    work: [
      "Inbox sync that detects employer replies against tracked applications.",
      "Automatic follow-up reminders keyed to how long an application has been silent.",
      "Separate API service behind the client.",
    ],
    stack: ["Next.js", "TypeScript"],
    repo: "https://github.com/chariz1101/hirewire",
  },
  {
    slug: "ultraarm-vision",
    name: "UltraArm Vision",
    kind: "Robotics",
    summary:
      "Gesture recognition driving a robotic arm: the interactive booth from AI Fest 2026.",
    brief:
      "Vision-based gesture recognition and motion replication on the UltraArm P340. A camera reads a person's hand, and the arm mirrors it. This was the interactive piece at the robotics chapter's AI Fest 2026 booth.",
    work: [
      "Computer vision pipeline for hand gesture recognition.",
      "Motion mapping from recognised gestures to UltraArm P340 joint movement.",
    ],
    stack: ["Python", "Computer vision", "UltraArm P340"],
    repo: "https://github.com/chariz1101/ultraarm-vision",
  },
  {
    slug: "cubetimer",
    name: "CubeTimer",
    kind: "Progressive web app",
    summary:
      "An offline-first speedcubing timer with WCA-legal scrambles and a 3D cube preview.",
    brief:
      "A speedcubing timer for the browser, built to work with no connection. It generates WCA-legal scrambles, times solves through the spacebar flow any cuber already knows, and keeps every solve locally, with cloud sync as an option rather than a requirement.",
    work: [
      "Spacebar-driven inspection and timing flow, plus ao5, ao12, ao100, best, worst, and session history.",
      "WCA-legal scramble generation for 2x2 through 7x7 via cubing.js, with a 3D preview of the scrambled cube.",
      "Offline-first storage in IndexedDB through Dexie, so the app works with no network at all.",
      "Optional Supabase sign-in to back up and sync solve history across devices.",
      "Installable as a PWA.",
    ],
    stack: ["React", "Tailwind CSS", "Zustand", "cubing.js", "Dexie", "Supabase"],
    repo: "https://github.com/chariz1101/cube-timer",
  },
  {
    slug: "cybsync",
    name: "CybSync",
    kind: "Attendance system",
    summary:
      "Attendance tracking for Cyb Robotics events and meetings.",
    brief:
      "An attendance system for Cyb Robotics, replacing the sign-up sheets that circulate at organisation events and meetings.",
    work: ["Built on Next.js 15 and React 19 with TypeScript and Tailwind CSS 4."],
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    repo: "https://github.com/chariz1101/CybSync-Attendance-System",
  },
  {
    slug: "dancing-nurses-association",
    name: "Dancing Nurses Association",
    kind: "Organisation website",
    summary:
      "The official site for the D.N.A. of Central Philippine University's College of Nursing.",
    brief:
      "The official web platform for the Dancing Nurses Association of Central Philippine University's College of Nursing: a digital hub for performances, the member directory, and the organisation's own information.",
    work: [
      "Landing page carrying the organisation's latest performances and leadership.",
      "Searchable member directory, categorised by year and section, plus an officer and adviser showcase.",
      "Performance gallery built on video data.",
      "Vercel Postgres with Upstash Redis for caching.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Vercel Postgres",
      "Upstash Redis",
    ],
    live: "https://dna-official-page.vercel.app/",
    repo: "https://github.com/chariz1101/dna-page",
  },
  {
    slug: "imposter",
    name: "Imposter",
    kind: "Party game",
    summary:
      "Pass-and-play social deduction: everyone gets the secret word except one person, who has to fake it.",
    brief:
      "A social deduction game for one phone passed around a table. Everybody is given the secret word except the Imposter, who has to blend in without knowing it while the others work out who is bluffing.",
    work: [
      "Pass-the-device flow that shows each player their role privately, then starts a discussion timer.",
      "Category packs, plus custom categories saved on the device and mixed into the random pool.",
      "React and Vite, styled with Tailwind CSS.",
    ],
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://imposter-game-cyan.vercel.app/",
    repo: "https://github.com/chariz1101/imposter-game",
    image: "/projects/imposter.png",
  },
  {
    slug: "appa",
    name: "AppA",
    kind: "Mobile app",
    summary: "Sign language transcription with a built-in dictionary.",
    brief:
      "A mobile app that transcribes sign language, with a simple dictionary alongside it for looking up individual signs.",
    work: ["Built in Flutter."],
    stack: ["Flutter", "Dart"],
    repo: "https://github.com/chariz1101/AppA",
  },
  {
    slug: "perfect-stack",
    name: "Perfect Stack",
    kind: "Browser game",
    summary: "A small stacking game in the browser: time the drop, keep the tower alive.",
    brief:
      "A simple stacking game built with React: blocks slide across the screen and you tap to drop them, and the overhang is trimmed away each time you miss.",
    work: ["Game loop and scoring in React, no engine."],
    stack: ["React"],
    live: "https://perfect-stack.vercel.app/",
    repo: "https://github.com/chariz1101/perfect-stack",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function findProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
