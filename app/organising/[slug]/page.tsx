import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
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

  const next =
    activities[(activities.indexOf(activity) + 1) % activities.length];

  return (
    <article className="mx-auto w-full max-w-4xl px-5 pt-10 sm:px-8 sm:pt-12">
      <p className="pb-10">
        <Link
          href="/organising"
          className="label text-ink-faint hover:text-accent"
        >
          ← Organising
        </Link>
      </p>

      <header className="border-b border-rule pb-10">
        <p className="label text-ink-faint">{activity.kind}</p>
        <h1 className="mt-3 text-[2.25rem] leading-[1.1] font-bold sm:text-5xl">
          {activity.name}
        </h1>
        <p className="mt-5 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
          {activity.summary}
        </p>
      </header>

      {activity.image ? (
        <div className="mt-10 overflow-hidden rounded-2xl border border-rule bg-surface">
          <Image
            src={activity.image}
            alt={`${activity.name} photo`}
            width={1600}
            height={800}
            sizes="(min-width: 896px) 832px, 100vw"
            className="h-auto w-full object-cover"
            loading="eager"
          />
        </div>
      ) : null}

      <div className="grid gap-x-12 gap-y-10 py-12 sm:grid-cols-[1fr_13rem] sm:items-start">
        <div className="space-y-10">
          <section>
            <h2 className="label text-ink-faint">What it was</h2>
            <p className="mt-3 max-w-[62ch] text-[1rem] leading-relaxed text-ink">
              {activity.brief}
            </p>
          </section>

          <section>
            <h2 className="label text-ink-faint">What I did</h2>
            <ul className="mt-3 max-w-[62ch] space-y-2.5">
              {activity.work.map((item) => (
                <li
                  key={item}
                  className="border-l-2 border-accent-line pl-4 text-[0.95rem] leading-relaxed text-ink-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-8 sm:border-l sm:border-rule sm:pl-8">
          <div>
            <h2 className="label text-ink-faint">Role</h2>
            <p className="mt-3 text-[0.9rem] text-ink">{activity.role}</p>
            <p className="mt-1 text-[0.85rem] text-ink-muted">{activity.org}</p>
            <p className="mt-1 text-[0.85rem] text-ink-faint">{activity.date}</p>
          </div>

          {activity.tags?.length ? (
            <div>
              <h2 className="label text-ink-faint">Built with</h2>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {activity.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-accent-line bg-accent-soft px-2 py-0.5 text-[11px] text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {activity.link ? (
            <div>
              <h2 className="label text-ink-faint">More</h2>
              <p className="mt-3">
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[0.85rem] font-medium text-accent underline decoration-accent-line decoration-2 underline-offset-4 hover:decoration-accent"
                >
                  Visit ↗
                </a>
              </p>
            </div>
          ) : null}
        </aside>
      </div>

      {activities.length > 1 ? (
        <nav className="border-t border-rule pt-7">
          <Link href={`/organising/${next.slug}`} className="group block">
            <span className="label text-ink-faint">Next</span>
            <span className="mt-2 block text-2xl font-semibold text-ink underline decoration-transparent decoration-2 underline-offset-[6px] group-hover:decoration-accent-line">
              {next.name}
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
