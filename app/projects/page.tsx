import type { Metadata } from "next";
import PageHeader from "@/components/page-header";
import ProjectIndex from "@/components/project-index";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Web platforms, embedded systems, and games built by Chariz Dianne Falco.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 pt-16 sm:px-8 sm:pt-24">
      <PageHeader code="build log" title="Work" meta={`${projects.length} projects`}>
        <p>
          Everything worth showing, most substantial first. Each entry opens
          into what the project was and what I built.
        </p>
      </PageHeader>

      <ProjectIndex projects={projects} />
    </div>
  );
}
