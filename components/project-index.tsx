import Link from "next/link";
import StackList from "@/components/stack-list";
import type { Project } from "@/content/projects";

export default function ProjectIndex({ projects }: { projects: Project[] }) {
  return (
    <ol className="border-t border-rule">
      {projects.map((project, i) => (
        <li key={project.slug} className="border-b border-rule">
          <Link
            href={`/projects/${project.slug}`}
            className="group grid gap-x-8 gap-y-2 py-7 sm:grid-cols-[3rem_1fr]"
          >
            <span className="label pt-1.5 text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                <h3 className="font-serif text-2xl text-ink underline decoration-transparent decoration-1 underline-offset-[6px] group-hover:decoration-accent sm:text-[1.75rem]">
                  {project.name}
                </h3>
                <span className="label text-ink-faint">{project.kind}</span>
              </div>

              <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-muted">
                {project.summary}
              </p>

              <div className="mt-4">
                <StackList stack={project.stack} />
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
