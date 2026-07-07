"use client";
import { motion } from "framer-motion";
import { LayoutTextFlipDemo } from "@/components/layoutTextFlip";
import { GitHub, File } from "@deemlol/next-icons";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

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
    tag: null,
    desc: "A multi-tenant farm management platform featuring timesheet tracking, task management, inventory, accounting, and role-based access control.",
    stack: ["Next.js", "TailwindCSS", "Node.js", "PostgreSQL"],
    link: "https://famas-staging.springvalley.tech/",
  },
  {
    emoji: "📍",
    name: "Tuon.ILO",
    tag: null,
    desc: "A community-driven civic technology platform designed to help students, freelancers, and remote workers discover, filter, and review the best study spaces and cafes in Iloilo City.",
    stack: ["Next.js", "TailwindCSS", "Mapbox GL JS", "PostgreSQL", "Zod"],
    link: "https://tuon-ilo.vercel.app/",
  },
  {
    emoji: "🎮",
    name: "Tuon Ta!",
    tag: null,
    desc: "An educational game conceptualized in collaboration with PLDT/Smart, featuring interactive Hiligaynon-based sub-games.",
    stack: ["Unity", "C#"],
    link: "https://play.google.com/store/apps/details?id=com.wvsu.com.mobile2D&hl=en_NZ",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] pb-24">

      {/* Hero */}
      <div className="mx-auto max-w-[1000px] px-6 pt-36">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-start gap-16 mb-20"
        >

          {/* LEFT */}
          <div className="flex flex-col items-center sm:items-start gap-4 flex-shrink-0 w-52">
            <div className="w-60 h-60 rounded-2xl overflow-hidden border">
              <img
                src="/mine.jpg"
                alt="Chariz Dianne Falco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 flex flex-col gap-5 pt-2">
            <LayoutTextFlipDemo />
            <div className="flex items-center justify-center gap-5 text-[13px] font-semibold mt-1">
              <div className="flex gap-2">
                <Button variant="outline">
                  <GitHub data-icon="inline-start" />
                  <a href="https://github.com/chariz1101">GitHub</a>
                </Button>
                <Button variant="outline">
                  <File data-icon="inline-end" />
                  <a href="https://github.com/chariz1101">Resume</a>
                </Button>
              </div>
            </div>
          </div>

        </motion.header>
      </div>

      {/* Featured Projects */}
      <div className="mx-auto max-w-[1000px] px-6">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          id="projects"
          className="mb-20 scroll-mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[1.75rem] font-bold text-zinc-900 whitespace-nowrap">
              Featured Projects
            </h2>
            <div className="flex-1 h-px bg-zinc-200" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {projects.map((p) => (
              <div
                key={p.name}
                className="group flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-sm transition-all duration-200"
              >
                {/* Top row */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{p.emoji}</span>
                    {p.link ? (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[15px] font-semibold text-zinc-900 hover:text-emerald-700/80 underline decoration-zinc-300 hover:decoration-emerald-400 underline-offset-4 transition-colors duration-200"
                      >
                        {p.name}
                      </a>
                    ) : (
                      <span className="text-[15px] font-semibold text-zinc-900">
                        {p.name}
                      </span>
                    )}
                  </div>
                  {p.tag && (
                    <span className="text-[11px] font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700/80 rounded-full border border-emerald-100 whitespace-nowrap">
                      {p.tag}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-[13.5px] text-zinc-500 leading-relaxed flex-1">
                  {p.desc}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>

    </div>
  );
}