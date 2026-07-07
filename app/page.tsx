"use client";
import { motion } from "framer-motion";
import { LayoutTextFlipDemo } from "@/components/layoutTextFlip";
import { GitHub,File } from "@deemlol/next-icons"
import { Button } from "@/components/ui/button"

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
    link: "",
  },
  {
    emoji: "📍",
    name: "Tuon.ILO",
    tag: null,
    desc: "A community-driven civic technology platform designed to help students, freelancers, and remote workers discover, filter, and review the best study spaces and cafes in Iloilo City",
    stack: ["Next.js", "TailwindCSS", "Mapbox GL JS", "PostgreSQL", "Zod"],
    link: "https://tuon-ilo.vercel.app/",
  },
  {
    emoji: "🎮",
    name: "Tuon Ta!",
    tag: null,
    desc: "An educational game conceptualized in collaboration with PLDT/Smart, featuring interactive Hiligaynon-based sub-games.",
    stack: ["Unity", "C#"],
    link: "",
  },
];

const skills = [
  { label: "Frontend", value: "React, Next.js, Tailwind CSS, Flutter, HTML/CSS/JS" },
  { label: "Backend & DB", value: "Node.js, Express, Python (Flask/FastAPI), PostgreSQL, MongoDB, Supabase" },
  { label: "Languages & Tools", value: "C++ (Arduino), Java, C#, Unity, Figma, Git" },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] text-zinc-800 selection:bg-amber-200 selection:text-zinc-900 pb-24">

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
              <div className="flex items-center justify-center flex gap-5 text-[13px] font-semibold mt-1">

                <div className="flex gap-2">
                  <Button variant="outline">
                    <GitHub data-icon="inline-start" /> 
                      <a
                        href="https://github.com/chariz1101"
                      >
                        GitHub
                      </a>
                  </Button>
                  <Button variant="outline">
                    <File data-icon="inline-end" />
                    <a
                        href="https://github.com/chariz1101"
                      >
                        Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

          </motion.header>
      </div>

    </div>

//     <div>
//       <main className="mx-auto max-w-[600px] px-6 pt-36">

//         {/* Header */}
//         <motion.header initial="hidden" animate="visible" variants={fadeUp} className="mb-20">
//           <p className="text-[13px] font-medium text-amber-700/80 tracking-wide uppercase mb-3">
//             Roxas City, Philippines
//           </p>
//           <h1 className="font-serif-display text-[2.6rem] leading-[1.1] font-bold tracking-tight text-zinc-900 mb-3">
//             Chariz Dianne Falco
//           </h1>
//           <p className="text-zinc-500 text-[17px] leading-relaxed mb-7">
//             Software developer & AI specialist, building at the intersection of hardware and intelligent systems.
//           </p>
//           <div className="flex gap-5 text-[13px] font-semibold">
//             <a
//               href="https://github.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-colors duration-200"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noreferrer"
//               className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-colors duration-200"
//             >
//               LinkedIn
//             </a>
//           </div>
//         </motion.header>

//         {/* About */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           id="about"
//           className="mb-20 scroll-mt-32"
//         >
//           <h2 className="font-serif-display text-[1.4rem] font-bold text-zinc-900 mb-4">
//             Who?
//           </h2>
//           <p className="text-zinc-600 leading-[1.75] text-[16px]">
//             Currently a Computer Science major at WVSU specializing in Artificial Intelligence.
//             I love creating web apps, embedded systems, and doing machine learning. Professionally,
//             I enjoy full-stack development — but what genuinely excites me is bridging the gap
//             between hardware and software to solve real-world problems.
//           </p>
//         </motion.section>

//         {/* Projects */}
// <motion.section
//   initial="hidden"
//   whileInView="visible"
//   viewport={{ once: true, margin: "-80px" }}
//   variants={fadeUp}
//   id="projects"
//   className="mb-20 scroll-mt-32"
// >
//   <h2 className="font-serif-display text-[1.4rem] font-bold text-zinc-900 mb-9">
//     Projects
//   </h2>
//   <div className="flex flex-col gap-9">
//     {projects.map((p) => (
//       <div
//         key={p.name}
//         className="group relative pl-5 border-l-2 border-zinc-200 hover:border-amber-400 transition-colors duration-300"
//       >
//         <h3 className="text-[15px] font-semibold text-zinc-900 flex items-center gap-2.5 mb-2">
//           <span className="text-base leading-none">{p.emoji}</span>
//           {p.link ? (
//             <a
//               href={p.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-amber-700 underline decoration-zinc-300 hover:decoration-amber-400 underline-offset-4 transition-colors duration-200"
//             >
//               {p.name}
//             </a>
//           ) : (
//             p.name
//           )}
//           {p.tag && (
//             <span className="text-[11px] font-medium px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
//               {p.tag}
//             </span>
//           )}
//         </h3>
//         <p className="text-zinc-500 text-[14.5px] leading-relaxed mb-3">
//           {p.desc}
//         </p>
//         <p className="text-[12px] font-mono text-zinc-400 tracking-tight">
//           {p.stack.join(" · ")}
//         </p>
//       </div>
//     ))}
//   </div>
// </motion.section>

//         {/* Skills */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           id="skills"
//           className="mb-20 scroll-mt-32"
//         >
//           <h2 className="font-serif-display text-[1.4rem] font-bold text-zinc-900 mb-6">
//             Arsenal
//           </h2>
//           <div className="flex flex-col gap-5 bg-white p-6 rounded-2xl border border-zinc-100 shadow-[0_1px_3px_rgba(0,0,0,0.03)]">
//             {skills.map((s) => (
//               <div key={s.label} className="grid grid-cols-[120px_1fr] gap-4 items-baseline">
//                 <span className="text-[12px] font-semibold text-zinc-900 uppercase tracking-wide">
//                   {s.label}
//                 </span>
//                 <span className="text-[14.5px] text-zinc-600 leading-relaxed">
//                   {s.value}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </motion.section>

//         {/* Contact */}
//         <motion.section
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-80px" }}
//           variants={fadeUp}
//           id="reach-me"
//           className="scroll-mt-32"
//         >
//           <h2 className="font-serif-display text-[1.4rem] font-bold text-zinc-900 mb-6">
//             Reach me
//           </h2>
//           <div className="flex flex-col gap-3">
//             <a
//               href="mailto:charizdiannefalco@gmail.com"
//               className="flex items-center gap-3 text-[15px] text-zinc-700 hover:text-zinc-900 font-medium transition-colors duration-200 group"
//             >
//               <span className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-50 text-amber-700 group-hover:bg-amber-100 transition-colors duration-200 text-[15px]">
//                 ✉
//               </span>
//               <span className="underline decoration-zinc-300 group-hover:decoration-zinc-900 underline-offset-4">
//                 charizdiannefalco@gmail.com
//               </span>
//             </a>
//             <div className="flex items-center gap-3 text-[15px] text-zinc-700 font-medium">
//               <span className="w-9 h-9 flex items-center justify-center rounded-full bg-amber-50 text-amber-700 text-[15px]">
//                 ✆
//               </span>
//               <span>0930 344 3297</span>
//             </div>
//           </div>
//         </motion.section>
//       </main>
//     </div>
  );
}
