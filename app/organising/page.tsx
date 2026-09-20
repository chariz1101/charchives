import type { Metadata } from "next";
import ActivityIndex from "@/components/activity-index";
import { activities } from "@/content/organising";

export const metadata: Metadata = {
  title: "Organising",
  description:
    "Events, workshops, and programmes organised by Chariz Dianne Falco.",
};

export default function OrganisingPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pb-10">
        <div>
          <h1 className="text-[2.25rem] leading-[1.1] font-bold sm:text-5xl">
            Organising
          </h1>
          <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            Events, workshops, and programmes I have run, across the
            organisations I am part of. Each entry opens into what it was and
            what I did.
          </p>
        </div>
        <p className="label text-ink-faint">
          {activities.length} {activities.length === 1 ? "entry" : "entries"}
        </p>
      </header>

      <ActivityIndex activities={activities} />
    </div>
  );
}
