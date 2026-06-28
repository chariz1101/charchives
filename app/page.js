"use client";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-800 selection:bg-zinc-200 selection:text-zinc-900 font-sans pb-20">
      
      {/* Floating Animated Navbar (Inspired by solid-layout-motion) */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-1 p-1 bg-white/80 backdrop-blur-md border border-zinc-200 rounded-full shadow-sm">
          <a href="#about" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">
            About
          </a>
          <a href="#projects" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">
            Projects
          </a>
          <a href="#skills" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">
            Skills
          </a>
          <a href="#reach-me" className="px-4 py-2 text-sm font-medium text-zinc-600 rounded-full hover:text-zinc-900 hover:bg-zinc-100 transition-all">
            Contact
          </a>
        </div>
      </nav>

      <main className="mx-auto max-w-2xl px-6 pt-32">
        
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 mb-2">
            Chariz Dianne Falco
          </h1>
          <p className="text-zinc-600 font-medium mb-4">
            Software Developer & AI Specialist · 🇵🇭 Iloilo, Philippines
          </p>
          <div className="flex gap-4 text-sm font-medium">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
              LinkedIn
            </a>
          </div>
        </header>

        {/* Who Am I Section */}
        <section id="about" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            🤓 Who?
          </h2>
          <p className="text-zinc-700 leading-relaxed">
            Currently a Computer Science major at WVSU specializing in Artificial Intelligence. I love creating web apps, embedded systems, and doing machine learning! Professionally, I enjoy doing full-stack development, but I genuinely enjoy bridging the gap between hardware and software to solve real-world problems.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-semibold text-zinc-900 mb-6 flex items-center gap-2">
            💻 Projects
          </h2>
          
          <div className="flex flex-col gap-6">
            
            <div className="group">
              <h3 className="text-base font-semibold text-zinc-900 flex items-center gap-2">
                👓 SMARTSENSE 
                <span className="text-xs font-normal px-2 py-0.5 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200">Thesis</span>
              </h3>
              <p className="text-sm text-zinc-600 mt-1 mb-2">
                An application utilizing audio and video inputs for real-time transcription, displaying directly to augmented reality glasses.
              </p>
              <p className="text-xs font-mono text-zinc-400">Flutter • Python • Flask</p>
            </div>

            <div className="group">
              <h3 className="text-base font-semibold text-zinc-900 flex items-center gap-2">
                🌾 FAMAS
              </h3>
              <p className="text-sm text-zinc-600 mt-1 mb-2">
                A multi-tenant farm management platform featuring timesheet tracking, task management, inventory, accounting, and role-based access control.
              </p>
              <p className="text-xs font-mono text-zinc-400">Next.js • TailwindCSS • Node.js • PostgreSQL</p>
            </div>

            <div className="group">
              <h3 className="text-base font-semibold text-zinc-900 flex items-center gap-2">
                🏫 Cybsync Attendance System
              </h3>
              <p className="text-sm text-zinc-600 mt-1 mb-2">
                A comprehensive university-wide attendance system equipped with administrative, council, and student dashboards for transparent tracking.
              </p>
              <p className="text-xs font-mono text-zinc-400">React.js • Node.js • Express • MongoDB</p>
            </div>

            <div className="group">
              <h3 className="text-base font-semibold text-zinc-900 flex items-center gap-2">
                🎮 TUON TA!
              </h3>
              <p className="text-sm text-zinc-600 mt-1 mb-2">
                An educational game conceptualized in collaboration with PLDT/Smart, featuring interactive Hiligaynon-based sub-games.
              </p>
              <p className="text-xs font-mono text-zinc-400">Unity • C#</p>
            </div>

          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16 scroll-mt-32">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            🛠️ Arsenal
          </h2>
          <ul className="text-sm text-zinc-700 leading-relaxed space-y-2 list-inside list-disc marker:text-zinc-400">
            <li><strong className="font-medium text-zinc-900">Frontend:</strong> React, Next.js, Tailwind CSS, Flutter, HTML/CSS/JS.</li>
            <li><strong className="font-medium text-zinc-900">Backend & DB:</strong> Node.js, Express, Python (Flask/FastAPI), PostgreSQL, MongoDB, Supabase.</li>
            <li><strong className="font-medium text-zinc-900">Languages & Tools:</strong> C++ (Arduino), Java, C#, Unity, Figma, Git.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="reach-me" className="scroll-mt-32">
          <h2 className="text-xl font-semibold text-zinc-900 mb-4 flex items-center gap-2">
            📫 Reach Me
          </h2>
          <ul className="text-sm text-zinc-700 space-y-3">
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:charizdiannefalco@gmail.com" className="hover:text-zinc-900 underline decoration-zinc-300 underline-offset-4 transition-colors">
                charizdiannefalco@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span>📱</span>
              <span className="text-zinc-600">09303443297</span>
            </li>
          </ul>
        </section>

      </main>
    </div>
  );
}