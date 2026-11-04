import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseFile from "@/components/case-file";
import { activities, findActivity } from "@/content/organising";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return activities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const activity = findActivity((await params).slug);
  if (!activity) return {};
  return { title: activity.name, description: activity.summary };
}

export default async function ActivityPage({ params }: Params) {
  const { slug } = await params;
  const activity = findActivity(slug);
  if (!activity) notFound();

  const index = activities.indexOf(activity);
  const next = activities[(index + 1) % activities.length];

  return (
    <CaseFile
      back={{ href: "/organising", label: "Organising" }}
      code={`OP_${String(index + 1).padStart(2, "0")}`}
      kind={activity.kind}
      name={activity.name}
      summary={activity.summary}
      image={activity.image}
      imageAlt={`${activity.name} photo`}
      blocks={[
        { title: "What it was", text: activity.brief },
        { title: "What I did", list: activity.work },
      ]}
      specs={[
        { label: "Role", value: activity.role },
        { label: "Organisation", value: activity.org },
        { label: "Date", value: activity.date },
      ]}
      chips={activity.tags}
      chipsTitle="Built with"
      links={activity.link ? [{ label: "Visit", href: activity.link }] : []}
      next={
        activities.length > 1
          ? { href: `/organising/${next.slug}`, label: "Next", name: next.name }
          : undefined
      }
    />
  );
}
