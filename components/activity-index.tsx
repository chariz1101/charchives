import Image from "next/image";
import Link from "next/link";
import StackList from "@/components/stack-list";
import type { Activity } from "@/content/organising";

export default function ActivityIndex({
  activities,
}: {
  activities: Activity[];
}) {
  return (
    <ol className="border-t border-rule">
      {activities.map((activity, i) => (
        <li key={activity.slug} className="border-b border-rule">
          <Link
            href={`/organising/${activity.slug}`}
            className="group grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[3rem_1fr]"
          >
            <span className="label pt-1.5 text-accent">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-5 gap-y-1">
                <h3 className="text-xl font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-accent-line">
                  {activity.name}
                </h3>
                <span className="label text-ink-faint">{activity.kind}</span>
              </div>

              <p className="mt-1 text-[0.85rem] text-ink-faint">
                {activity.role}, {activity.org} · {activity.date}
              </p>

              <p className="mt-2 max-w-[62ch] text-[0.9rem] leading-relaxed text-ink-muted">
                {activity.summary}
              </p>

              {activity.image ? (
                <div className="mt-4 overflow-hidden rounded-xl border border-rule bg-surface">
                  <Image
                    src={activity.image}
                    alt={`${activity.name} photo`}
                    width={1280}
                    height={640}
                    sizes="(min-width: 896px) 780px, 100vw"
                    className="h-auto w-full object-cover"
                  />
                </div>
              ) : null}

              {activity.tags?.length ? (
                <div className="mt-4">
                  <StackList stack={activity.tags} />
                </div>
              ) : null}
            </div>
          </Link>
        </li>
      ))}
    </ol>
  );
}
