import type { Metadata } from "next";
import ProjectIndex from "@/components/project-index";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Web platforms, embedded systems, and games built by Chariz Dianne Falco.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pb-10">
        <div>
          <h1 className="text-[2.25rem] leading-[1.1] font-bold sm:text-5xl">Work</h1>
          <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            Everything worth showing, most substantial first. Each entry opens
            into what the project was and what I built.
          </p>
        </div>
        <p className="label text-ink-faint">{projects.length} projects</p>
      </header>

      <ProjectIndex projects={projects} />
    </div>
  );
}
