import Link from "next/link";
import MediaFrame from "@/components/media-frame";
import StackList from "@/components/stack-list";
import type { Activity } from "@/content/organising";

/** Organising entries as a vertical timeline of field operations. */
export default function ActivityIndex({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-signal via-rule-strong to-transparent"
      />
      {activities.map((activity, i) => (
        <li
          key={activity.slug}
          className="relative pb-10 pl-10 last:pb-0"
          data-reveal="flip"
          style={{ "--i": i % 3 } as React.CSSProperties}
        >
          <span
            aria-hidden="true"
            className="absolute top-6 left-[5px] h-[13px] w-[13px] rotate-45 border-2 border-signal bg-bg"
          />
          <Link
            href={`/organising/${activity.slug}`}
            className="card-3d panel group block rounded-sm p-5 hover:border-signal-line sm:p-6"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
              <p className="label text-signal">
                OP_{String(i + 1).padStart(2, "0")} · {activity.kind}
              </p>
              <p className="label text-ink-faint">{activity.date}</p>
            </div>
            <h3 className="mt-3 text-xl font-bold text-ink transition-colors group-hover:text-signal sm:text-2xl">
              {activity.name}
            </h3>
            <p className="mt-1 text-[0.85rem] text-ink-faint">
              {activity.role}, {activity.org}
            </p>
            <p className="mt-3 max-w-[64ch] text-[0.93rem] leading-relaxed text-ink-muted">
              {activity.summary}
            </p>

            {activity.image ? (
              <div className="mt-5">
                <MediaFrame
                  image={activity.image}
                  alt={`${activity.name} photo`}
                  label={activity.name}
                  sizes="(min-width: 1152px) 900px, 100vw"
                />
              </div>
            ) : null}

            {activity.tags?.length ? (
              <div className="mt-5">
                <StackList stack={activity.tags} tone="signal" />
              </div>
            ) : null}
          </Link>
        </li>
      ))}
    </ol>
  );
}
