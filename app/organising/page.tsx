import type { Metadata } from "next";
import ActivityIndex from "@/components/activity-index";
import PageHeader from "@/components/page-header";
import { activities } from "@/content/organising";

export const metadata: Metadata = {
  title: "Organising",
  description:
    "Events, workshops, and programmes organised by Chariz Dianne Falco.",
};

export default function OrganisingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pt-16 sm:px-8 sm:pt-24">
      <PageHeader
        code="field operations"
        title="Organising"
        meta={`${activities.length} ${activities.length === 1 ? "entry" : "entries"}`}
      >
        <p>
          Events, workshops, and programmes I have run, across the
          organisations I am part of. Each entry opens into what it was and
          what I did.
        </p>
      </PageHeader>

      <ActivityIndex activities={activities} />
    </div>
  );
}
