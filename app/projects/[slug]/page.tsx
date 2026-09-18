import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findProject, projects } from "@/content/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = findProject((await params).slug);
  if (!project) return {};
  return { title: project.name, description: project.summary };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-4xl px-5 pt-10 sm:px-8 sm:pt-12">
      <p className="pb-10">
        <Link
          href="/projects"
          className="label text-ink-faint hover:text-accent"
        >
          ← Work
        </Link>
      </p>

      <header className="border-b border-rule pb-10">
        <p className="label text-ink-faint">{project.kind}</p>
        <h1 className="mt-3 text-[2.25rem] leading-[1.1] font-bold sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {project.summary}
        </p>
      </header>

      <div className="grid gap-x-12 gap-y-10 py-12 sm:grid-cols-[1fr_13rem] sm:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="label text-ink-faint">Brief</h2>
            <p className="mt-3 max-w-[62ch] text-[1rem] leading-relaxed text-ink">
              {project.brief}
            </p>
          </section>

          <section>
            <h2 className="label text-ink-faint">What I built</h2>
            <ul className="mt-3 max-w-[62ch] space-y-2.5">
              {project.work.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent-line pl-4 text-[0.95rem] leading-relaxed text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {project.outcome ? (
            <section>
              <h2 className="label text-ink-faint">Outcome</h2>
              <p className="mt-3 max-w-[62ch] text-[1rem] leading-relaxed text-ink">
                {project.outcome}
              </p>
            </section>
          ) : null}
        </div>

        <aside className="space-y-8 sm:border-l sm:border-rule sm:pl-8">
          <div>
            <h2 className="label text-ink-faint">Built with</h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tool) => (
                <li
                  key={tool}
                  className="rounded-md border border-accent-line bg-accent-soft px-2 py-0.5 text-[11px] text-accent"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {project.live ? (
            <div>
              <h2 className="label text-ink-faint">Live</h2>
              <p className="mt-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] font-medium text-accent underline decoration-accent-line decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  Visit site ↗
                </a>
              </p>
            </div>
          ) : null}

          {project.repo ? (
            <div>
              <h2 className="label text-ink-faint">Source</h2>
              <p className="mt-3">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] font-medium text-accent underline decoration-accent-line decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  GitHub ↗
                </a>
              </p>
            </div>
          ) : null}
        </aside>
      </div>

      <nav className="border-t border-rule pt-7">
        <Link href={`/projects/${next.slug}`} className="group block">
          <span className="label text-ink-faint">Next project</span>
          <span className="mt-2 block text-2xl font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-accent-line">
            {next.name}
          </span>
        </Link>
      </nav>
    </article>
  );
}
