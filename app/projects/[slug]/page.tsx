import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseFile from "@/components/case-file";
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

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <CaseFile
      back={{ href: "/projects", label: "Work" }}
      code={`UNIT ${String(index + 1).padStart(2, "0")}`}
      kind={project.kind}
      name={project.name}
      summary={project.summary}
      image={project.image}
      imageAlt={`${project.name} screenshot`}
      blocks={[
        { title: "Brief", text: project.brief },
        { title: "What I built", list: project.work },
        ...(project.outcome ? [{ title: "Outcome", text: project.outcome }] : []),
      ]}
      specs={[
        { label: "Type", value: project.kind },
        { label: "Components", value: `${project.stack.length} in the stack` },
      ]}
      chips={project.stack}
      chipsTitle="Built with"
      links={[
        ...(project.live ? [{ label: "Visit site", href: project.live }] : []),
        ...(project.repo ? [{ label: "Source on GitHub", href: project.repo }] : []),
      ]}
      next={{ href: `/projects/${next.slug}`, label: "Next project", name: next.name }}
    />
  );
}
