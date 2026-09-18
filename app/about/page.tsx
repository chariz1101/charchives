import type { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/section";
import {
  awards,
  education,
  links,
  organisations,
  profile,
  skills,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about[0],
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pt-14 sm:px-8 sm:pt-20">
      <header className="grid gap-8 pb-14 sm:grid-cols-[1fr_13rem] sm:items-start sm:gap-12">
        <div>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-5xl">About</h1>
          <div className="mt-6 max-w-[62ch] space-y-5">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[1.0625rem] leading-relaxed text-ink-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-7">
            <a
              href={`mailto:${links.email}`}
              className="text-[0.95rem] text-ink underline decoration-accent underline-offset-4 hover:text-accent"
            >
              {links.email}
            </a>
          </p>
        </div>

        <div className="order-first sm:order-none">
          <Image
            src="/mine.jpg"
            alt={profile.name}
            width={416}
            height={416}
            sizes="(min-width: 640px) 208px, 100vw"
            className="w-40 border border-rule object-cover sm:w-full"
          />
          <p className="label mt-3 text-ink-faint">{profile.location}</p>
        </div>
      </header>

      <Section title="Education">
        <ul className="border-t border-rule">
          {education.map((entry) => (
            <li
              key={entry.school}
              className="flex flex-col gap-2 border-b border-rule py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <h3 className="font-serif text-xl text-ink">{entry.school}</h3>
                <p className="mt-1 text-[0.95rem] text-ink-muted">
                  {entry.detail}
                </p>
                <p className="mt-1 text-[0.95rem] text-accent">{entry.note}</p>
              </div>
              <div className="shrink-0 sm:text-right">
                <p className="label text-ink-faint">{entry.date}</p>
                <p className="label mt-1 text-ink-faint">{entry.location}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="What I work with">
        <dl className="border-t border-rule">
          {skills.map((group) => (
            <div
              key={group.group}
              className="grid gap-x-8 gap-y-2 border-b border-rule py-6 sm:grid-cols-[10rem_1fr]"
            >
              <dt className="label pt-1 text-ink-faint">{group.group}</dt>
              <dd className="font-mono text-[0.8rem] leading-[2] text-ink-muted">
                {group.items.join("  ·  ")}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Leadership" meta={`${organisations.length} roles`}>
        <ul className="border-t border-rule">
          {organisations.map((entry) => (
            <li
              key={`${entry.role}-${entry.org}`}
              className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <h3 className="font-sans text-[1rem] font-medium text-ink">
                  {entry.role}
                </h3>
                <p className="mt-0.5 max-w-[60ch] text-[0.95rem] text-ink-muted">
                  {entry.org}
                </p>
              </div>
              <p className="label shrink-0 text-ink-faint sm:text-right">
                {entry.date}
              </p>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Recognition">
        <ul className="border-t border-rule">
          {awards.map((award) => (
            <li
              key={award.title}
              className="flex flex-col gap-1 border-b border-rule py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
            >
              <div>
                <h3 className="max-w-[56ch] font-sans text-[1rem] font-medium text-ink">
                  {award.title}
                </h3>
                <p className="mt-0.5 text-[0.95rem] text-ink-muted">
                  {award.event}
                </p>
              </div>
              <p className="label shrink-0 text-ink-faint sm:text-right">
                {award.year}
              </p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
