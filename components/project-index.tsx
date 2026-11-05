import Link from "next/link";
import MediaFrame from "@/components/media-frame";
import StackList from "@/components/stack-list";
import type { Project } from "@/content/projects";

const num = (i: number) => String(i + 1).padStart(2, "0");

/**
 * "feature" is the home page's alternating showcase; "grid" is the full
 * index. Both tilt their media in 3D as it passes through the viewport.
 */
export default function ProjectIndex({
  projects,
  layout = "grid",
}: {
  projects: Project[];
  layout?: "feature" | "grid";
}) {
  if (layout === "feature") {
    return (
      <ol className="space-y-24 sm:space-y-32">
        {projects.map((project, i) => {
          const flip = i % 2 === 1;
          return (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group grid items-center gap-8 md:grid-cols-[1.15fr_1fr] md:gap-12"
              >
                <div
                  data-depth
                  className={flip ? "md:order-2" : undefined}
                  style={{ "--dir": flip ? -1 : 1 } as React.CSSProperties}
                >
                  <div data-reveal={flip ? "right" : "left"}>
                    <div className="tilt-media">
                      <MediaFrame
                        image={project.image}
                        alt={`${project.name} screenshot`}
                        label={project.name}
                        code={`UNIT ${num(i)}`}
                        sizes="(min-width: 1152px) 600px, (min-width: 768px) 55vw, 100vw"
                      />
                    </div>
                  </div>
                </div>

                <div data-reveal style={{ "--i": 1 } as React.CSSProperties}>
                  <p className="label flex items-center gap-3 text-ink-faint">
                    <span className="font-label text-2xl font-semibold tracking-normal text-accent">
                      {num(i)}
                    </span>
                    <span className="h-px w-8 bg-rule-strong" />
                    {project.kind}
                  </p>
                  <h3 className="mt-4 text-3xl font-bold text-ink transition-colors group-hover:text-accent-strong sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-[48ch] text-[1rem] leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>
                  <div className="mt-5">
                    <StackList stack={project.stack} />
                  </div>
                  <p className="label mt-6 inline-flex items-center gap-3 text-signal">
                    <span className="cue-line" />
                    Open case file
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol className="grid gap-x-10 gap-y-16 md:grid-cols-2">
      {projects.map((project, i) => (
        <li
          key={project.slug}
          data-reveal={i % 2 === 0 ? "left" : "right"}
          style={{ "--i": i % 2 } as React.CSSProperties}
        >
          <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col">
            <div className="lift">
              <MediaFrame
                image={project.image}
                alt={`${project.name} screenshot`}
                label={project.name}
                sizes="(min-width: 1152px) 540px, (min-width: 768px) 45vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-center gap-3">
              <span className="font-label text-sm font-semibold text-accent">
                {num(i)}
              </span>
              <span className="h-px flex-1 bg-rule-strong" />
              <span className="label text-right text-ink-faint">{project.kind}</span>
            </div>
            <h3 className="mt-3 text-2xl font-bold text-ink transition-colors group-hover:text-accent-strong">
              {project.name}
            </h3>
            <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-ink-muted">
              {project.summary}
            </p>
            <div className="mt-5">
              <StackList stack={project.stack} />
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
