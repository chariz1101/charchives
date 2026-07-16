import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

interface Project {
  emoji: string;
  name: string;
  tag: string | null;
  desc: string;
  stack: string[];
  link: string;
}

interface ProjectsTileProps {
  projects: Project[];
}

export default function ProjectsTile({ projects }: ProjectsTileProps) {
  return (
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
            className="group flex flex-col gap-3 p-5 rounded-2xl border border-zinc-200 bg-white hover:border-emerald-300 hover:shadow-[0_2px_12px_rgba(16,185,129,0.08)] transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xl">{p.emoji}</span>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[15px] font-semibold text-zinc-900 hover:text-emerald-700 underline decoration-zinc-300 hover:decoration-emerald-400 underline-offset-4 transition-colors duration-200"
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
                <span className="text-[11px] font-medium px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200 whitespace-nowrap">
                  {p.tag}
                </span>
              )}
            </div>

            <p className="text-[13.5px] text-zinc-500 leading-relaxed flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 mt-auto">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}