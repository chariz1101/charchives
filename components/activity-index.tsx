import Link from "next/link";
import MediaFrame from "@/components/media-frame";
import StackList from "@/components/stack-list";
import type { Activity } from "@/content/organising";

/** Organising entries as nodes on a vertical rail, with no boxes around them. */
export default function ActivityIndex({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[17px] w-px bg-gradient-to-b from-signal via-rule-strong to-transparent"
      />
      {activities.map((activity, i) => (
        <li
          key={activity.slug}
          className="relative pb-14 pl-14 last:pb-0"
          data-reveal="flip"
          style={{ "--i": i % 3 } as React.CSSProperties}
        >
          {/* A diamond node with its index, and a short tick out to the text. */}
          <span
            aria-hidden="true"
            className="absolute top-0.5 left-[5px] flex h-[25px] w-[25px] rotate-45 items-center justify-center border-2 border-signal bg-bg"
          >
            <span className="-rotate-45 font-label text-[9px] font-semibold text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
          </span>
          <span aria-hidden="true" className="absolute top-[14px] left-[36px] h-px w-3 bg-signal" />

          <Link href={`/organising/${activity.slug}`} className="group block">
            <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
              <p className="label text-signal">{activity.kind}</p>
              <p className="label text-ink-faint">{activity.date}</p>
            </div>
            <h3 className="mt-2 text-xl font-bold text-ink transition-colors group-hover:text-signal sm:text-2xl">
              {activity.name}
            </h3>
            <p className="mt-1 text-[0.85rem] text-ink-faint">
              {activity.role}, {activity.org}
            </p>
            <p className="mt-3 max-w-[64ch] text-[0.95rem] leading-relaxed text-ink-muted">
              {activity.summary}
            </p>

            {activity.image ? (
              <div className="lift mt-5 max-w-3xl">
                <MediaFrame
                  image={activity.image}
                  alt={`${activity.name} photo`}
                  label={activity.name}
                  sizes="(min-width: 1152px) 768px, 100vw"
                />
              </div>
            ) : null}

            {activity.tags?.length ? (
              <div className="mt-4">
                <StackList stack={activity.tags} tone="signal" />
              </div>
            ) : null}
          </Link>
        </li>
      ))}
    </ol>
  );
}
