import ProjectsTile from "@/components/projectsTile";

const projects = [
  {
    emoji: "👓",
    name: "SmartSense",
    tag: "Thesis",
    desc: "An application utilizing audio and video inputs for real-time transcription, displaying directly to augmented reality glasses.",
    stack: ["Flutter", "Python", "Flask"],
    link: "",
  },
  {
    emoji: "🌾",
    name: "FAMAS",
    tag: "Platform",
    desc: "A multi-tenant farm management platform featuring timesheet tracking, task management, inventory, accounting, and role-based access control.",
    stack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    link: "https://famas-staging.springvalley.tech/",
  },
  {
    emoji: "📍",
    name: "Tuon.ILO",
    tag: "Web App",
    desc: "A community-driven civic technology platform designed to help students, freelancers, and remote workers discover, filter, and review the best study spaces and cafes in Iloilo City.",
    stack: ["Next.js", "TailwindCSS", "Mapbox GL JS", "PostgreSQL", "Zod"],
    link: "https://tuon-ilo.vercel.app/",
  },
  {
    emoji: "🎮",
    name: "Tuon Ta!",
    tag: "Game",
    desc: "An educational game conceptualized in collaboration with PLDT/Smart, featuring interactive Hiligaynon-based sub-games.",
    stack: ["Unity", "C#"],
    link: "https://play.google.com/store/apps/details?id=com.wvsu.com.mobile2D&hl=en_NZ",
  },
  {
    emoji: "🕵️",
    name: "Imposter",
    tag: "Game",
    desc: "A modern, neon-themed pass and play social deduction game.Players must determine who among them is the Imposter while the Imposter tries to blend in without knowing the secret word",
    stack: ["React.js", "Vite", "TailwindCSS"],
    link: "https://imposter-game-cyan.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto px-6 py-15">
      <ProjectsTile projects={projects} />
    </main>
  );
}