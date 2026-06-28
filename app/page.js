"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  // Simple animation settings we can reuse
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white text-zinc-800 selection:bg-zinc-200 selection:text-zinc-900 font-sans pb-20">
      
      {/* Floating Animated Navbar */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-sm">
          <a href="#about" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">About</a>
          <a href="#projects" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">Projects</a>
          <a href="#skills" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">Skills</a>
          <a href="#reach-me" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">Contact</a>
        </div>
      </motion.nav>

      <main className="mx-auto max-w-2xl px-6 pt-32">
        
        {/* Header Section */}
        <motion.header 
          initial="hidden" 
          animate="visible" 
          variants={fadeUp} 
          className="mb-16"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 mb-3">
            Chariz Dianne Falco
          </h1>
          <p className="text-zinc-600 font-medium mb-6 text-lg">
            Software Developer & AI Specialist · 🇵🇭 Roxas City, Philippines
          </p>
          <div className="flex gap-6 text-sm font-semibold">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
              LinkedIn
            </a>
          </div>
        </motion.header>

        {/* Who Am I Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          id="about" 
          className="mb-20 scroll-mt-32"
        >
          <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
            🤓 Who?
          </h2>
          <p className="text-zinc-700 leading-relaxed text-lg">
            Currently a Computer Science major at WVSU specializing in Artificial Intelligence. I love creating web apps, embedded systems, and doing machine learning! Professionally, I enjoy doing full-stack development, but I genuinely enjoy bridging the gap between hardware and software to solve real-world problems.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          id="projects" 
          className="mb-20 scroll-mt-32"
        >
          <h2 className="text-2xl font-bold text-zinc-900 mb-8 flex items-center gap-2">
            💻 Projects
          </h2>
          
          <div className="flex flex-col gap-10">
            
            {/* Project 1 */}
            <div className="group relative pl-4 border-l-2 border-zinc-200 hover:border-zinc-900 transition-colors">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-3">
                👓 SMARTSENSE 
                <span className="text-xs font-semibold px-2.5 py-0.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">Thesis</span>
              </h3>
              <p className="text-zinc-600 mt-2 mb-3 leading-relaxed">
                An application utilizing audio and video inputs for real-time transcription, displaying directly to augmented reality glasses.
              </p>
              <p className="text-xs font-mono font-medium text-zinc-400">Flutter • Python • Flask</p>
            </div>

            {/* Project 2 */}
            <div className="group relative pl-4 border-l-2 border-zinc-200 hover:border-zinc-900 transition-colors">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-3">
                🌾 FAMAS
              </h3>
              <p className="text-zinc-600 mt-2 mb-3 leading-relaxed">
                A multi-tenant farm management platform featuring timesheet tracking, task management, inventory, accounting, and role-based access control.
              </p>
              <p className="text-xs font-mono font-medium text-zinc-400">Next.js • TailwindCSS • Node.js • PostgreSQL</p>
            </div>

            {/* Project 3 */}
            <div className="group relative pl-4 border-l-2 border-zinc-200 hover:border-zinc-900 transition-colors">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-3">
                🏫 Cybsync Attendance System
              </h3>
              <p className="text-zinc-600 mt-2 mb-3 leading-relaxed">
                A comprehensive university-wide attendance system equipped with administrative, council, and student dashboards for transparent tracking.
              </p>
              <p className="text-xs font-mono font-medium text-zinc-400">React.js • Node.js • Express • MongoDB</p>
            </div>

            {/* Project 4 */}
            <div className="group relative pl-4 border-l-2 border-zinc-200 hover:border-zinc-900 transition-colors">
              <h3 className="text-lg font-bold text-zinc-900 flex items-center gap-3">
                🎮 TUON TA!
              </h3>
              <p className="text-zinc-600 mt-2 mb-3 leading-relaxed">
                An educational game conceptualized in collaboration with PLDT/Smart, featuring interactive Hiligaynon-based sub-games.
              </p>
              <p className="text-xs font-mono font-medium text-zinc-400">Unity • C#</p>
            </div>

          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          id="skills" 
          className="mb-20 scroll-mt-32"
        >
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            🛠️ Arsenal
          </h2>
          <ul className="text-base text-zinc-700 leading-loose space-y-2 list-inside list-disc marker:text-zinc-400 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
            <li><strong className="font-semibold text-zinc-900">Frontend:</strong> React, Next.js, Tailwind CSS, Flutter, HTML/CSS/JS.</li>
            <li><strong className="font-semibold text-zinc-900">Backend & DB:</strong> Node.js, Express, Python (Flask/FastAPI), PostgreSQL, MongoDB, Supabase.</li>
            <li><strong className="font-semibold text-zinc-900">Languages & Tools:</strong> C++ (Arduino), Java, C#, Unity, Figma, Git.</li>
          </ul>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeUp} 
          id="reach-me" 
          className="scroll-mt-32"
        >
          <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
            📫 Reach Me
          </h2>
          <ul className="text-lg text-zinc-700 space-y-4">
            <li className="flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <a href="mailto:charizdiannefalco@gmail.com" className="hover:text-zinc-900 font-medium underline decoration-zinc-300 hover:decoration-zinc-900 underline-offset-4 transition-all">
                charizdiannefalco@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-xl">📱</span>
              <span className="text-zinc-800 font-medium">09303443297</span>
            </li>
          </ul>
        </motion.section>

      </main>
    </div>
  );
}