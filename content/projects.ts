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
  /** Numbers once they exist — users, adoption, time saved. The case study
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
      "My undergraduate thesis at West Visayas State University. SmartSense listens through the phone's microphone and camera, transcribes speech in real time, and sends the text to a pair of augmented-reality glasses, so the wearer reads a conversation in front of them rather than looking down at a screen.",
    work: [
      "Flutter app that captures the audio and video input and drives the text shown on the glasses.",
      "Python transcription pipeline, served to the app over a Flask API.",
    ],
    stack: ["Flutter", "Python", "Flask"],
    featured: true,
  },
  {
    slug: "famas",
    name: "FAMAS",
    kind: "Farm management platform",
    summary:
      "Multi-tenant platform for farm operations — timesheets, tasks, inventory, and accounting under one login.",
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
    slug: "tuon-ilo",
    name: "Tuon.ILO",
    kind: "Civic web app",
    summary:
      "A map of study spaces and cafés in Iloilo City, filtered and reviewed by the people who work in them.",
    brief:
      "A community-driven civic technology platform for students, freelancers, and remote workers in Iloilo City. It lets them discover, filter, and review the study spaces and cafés they actually work out of, so a good recommendation outlives the group chat it was made in.",
    work: [
      "Map-first browsing built on Mapbox GL JS.",
      "Filtering and community reviews, validated with Zod.",
      "Next.js front end on PostgreSQL.",
    ],
    stack: ["Next.js", "Tailwind CSS", "Mapbox GL JS", "PostgreSQL", "Zod"],
    live: "https://tuon-ilo.vercel.app/",
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
    slug: "dancing-nurses-association",
    name: "Dancing Nurses Association",
    kind: "Organisation website",
    summary:
      "The official site for the D.N.A. of Central Philippine University's College of Nursing.",
    brief:
      "The official web platform for the Dancing Nurses Association of Central Philippine University's College of Nursing — a digital hub for performances, the member directory, and the organisation's own information.",
    work: [
      "Performance archive and member directory backed by NeonDB.",
      "Next.js and Tailwind CSS.",
    ],
    stack: ["Next.js", "Tailwind CSS", "NeonDB"],
    live: "https://dna-official-page.vercel.app/",
  },
  {
    slug: "imposter",
    name: "Imposter",
    kind: "Party game",
    summary:
      "Pass-and-play social deduction: everyone gets the secret word except one person, who has to fake it.",
    brief:
      "A pass-and-play social deduction game for one phone shared around a table. Everybody is given the secret word except the Imposter, who has to blend in without knowing it while the others work out who is bluffing.",
    work: [
      "Round flow, role assignment, and voting on a single shared device.",
      "React and Vite, styled with Tailwind CSS.",
    ],
    stack: ["React", "Vite", "Tailwind CSS"],
    live: "https://imposter-game-cyan.vercel.app/",
  },
  {
    slug: "perfect-stack",
    name: "Perfect Stack",
    kind: "Browser game",
    summary: "A small stacking game in the browser — time the drop, keep the tower alive.",
    brief:
      "A simple stacking game built with React: blocks slide across the screen and you tap to drop them, and the overhang is trimmed away each time you miss.",
    work: ["Game loop and scoring in React, no engine."],
    stack: ["React"],
    live: "https://perfect-stack.vercel.app/",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function findProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
