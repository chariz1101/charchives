"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const }
  },
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
    <section id="projects" className="scroll-mt-32">
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold text-zinc-900 tracking-tight whitespace-nowrap">
          Projects
        </h2>
        <div className="flex-1 h-px bg-zinc-200" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {projects.map((p) => (
          <motion.div
            key={p.name}
            variants={cardVariants}
            whileHover={{ y: -4 }} // Slight lift on hover
            className="group relative flex flex-col p-6 rounded-3xl border border-zinc-200/80 bg-white hover:border-emerald-400 hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle background glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header: Emoji & Tag */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-zinc-100/80 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-zinc-200 transition-all duration-300">
                  <span className="text-2xl">{p.emoji}</span>
                </div>
                {p.tag && (
                  <span className="text-xs font-semibold tracking-wide px-3 py-1 bg-zinc-100 text-zinc-600 rounded-full border border-zinc-200/80 group-hover:bg-emerald-50 group-hover:text-emerald-700 group-hover:border-emerald-200 transition-colors duration-300">
                    {p.tag}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div className="mb-6 flex-1">
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 mb-2 w-fit"
                  >
                    <h3 className="text-xl font-bold text-zinc-900 group-hover/link:text-emerald-600 transition-colors duration-200">
                      {p.name}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover/link:text-emerald-500 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-all duration-200" />
                  </a>
                ) : (
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">
                    {p.name}
                  </h3>
                )}
                <p className="text-sm text-zinc-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-zinc-100">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-zinc-50 text-zinc-600 border border-zinc-200 group-hover:bg-emerald-50/50 group-hover:border-emerald-100 group-hover:text-emerald-700 transition-colors duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}