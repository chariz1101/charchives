import type { Metadata } from "next";
import Image from "next/image";
import Gear from "@/components/fx/gear";
import Section from "@/components/section";
import SystemStack from "@/components/system-stack";
import {
  awards,
  education,
  experience,
  links,
  organisations,
  profile,
} from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: profile.about[0],
};

/** One row of a vertical timeline: a node on the rail and a panel beside it. */
function TimelineItem({
  i,
  title,
  sub,
  date,
  note,
  extra,
}: {
  i: number;
  title: string;
  sub: string;
  date: string;
  note?: string;
  extra?: string;
}) {
  return (
    <li
      className="relative pb-5 pl-10 last:pb-0"
      data-reveal="left"
      style={{ "--i": i % 4 } as React.CSSProperties}
    >
      <span
        aria-hidden="true"
        className="absolute top-6 left-[5px] h-[13px] w-[13px] rotate-45 border-2 border-accent bg-bg"
      />
      <div className="panel flex flex-col gap-2 rounded-sm p-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-1 max-w-[60ch] text-[0.95rem] text-ink-muted">{sub}</p>
          {note ? (
            <span className="mt-3 inline-block rounded-sm border border-signal-line bg-signal-soft px-2 py-0.5 font-label text-[11px] text-signal">
              {note}
            </span>
          ) : null}
        </div>
        <div className="shrink-0 sm:text-right">
          <p className="label text-ink-faint">{date}</p>
          {extra ? <p className="label mt-1 text-ink-faint">{extra}</p> : null}
        </div>
      </div>
    </li>
  );
}

function Rail({ children }: { children: React.ReactNode }) {
  return (
    <ol className="relative">
      <span
        aria-hidden="true"
        className="absolute top-2 bottom-2 left-[11px] w-px bg-gradient-to-b from-accent via-rule-strong to-transparent"
      />
      {children}
    </ol>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-5 pt-16 sm:px-8 sm:pt-24">
      <header className="grid gap-12 pb-6 md:grid-cols-[1fr_17rem] md:items-start">
        <div>
          <p className="label text-signal" data-reveal="fade">
            <span className="text-accent">{"//"}</span> operator profile
          </p>
          <h1
            className="mt-4 text-[3rem] leading-[0.95] font-bold tracking-[-0.04em] sm:text-[4.5rem]"
            data-reveal
          >
            About<span className="text-accent">.</span>
          </h1>
          <div className="mt-8 max-w-[62ch] space-y-5">
            {profile.about.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-[1.075rem] leading-relaxed text-ink-muted"
                data-reveal
                style={{ "--i": i + 1 } as React.CSSProperties}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-8" data-reveal>
            <a
              href={`mailto:${links.email}`}
              className="font-label text-[0.95rem] text-accent underline decoration-accent-line underline-offset-4 hover:decoration-accent"
            >
              {links.email}
            </a>
          </p>
        </div>

        <div className="order-first md:order-none" data-depth>
          <div data-reveal="right">
            <div className="tilt-media relative mx-auto w-48 md:w-full">
              <Gear
                teeth={16}
                turns={3}
                className="absolute -top-8 -right-8 h-24 w-24 text-accent opacity-40"
              />
              <div className="panel brackets relative overflow-hidden rounded-sm p-2">
                <Image
                  src="/mine.jpg"
                  alt={profile.name}
                  width={544}
                  height={544}
                  sizes="(min-width: 768px) 272px, 192px"
                  loading="eager"
                  className="w-full rounded-[2px] object-cover"
                />
                <div className="scanline" />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <p className="label text-ink-faint">{profile.location}</p>
                <p className="label flex items-center gap-1.5 text-signal">
                  <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
                  online
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section index={1} code="current assignment" title="Experience">
        <Rail>
          {experience.map((entry, i) => (
            <TimelineItem
              key={`${entry.role}-${entry.org}`}
              i={i}
              title={entry.role}
              sub={entry.org}
              note={entry.note}
              date={entry.date}
            />
          ))}
        </Rail>
      </Section>

      <Section index={2} code="training" title="Education">
        <Rail>
          {education.map((entry, i) => (
            <TimelineItem
              key={entry.school}
              i={i}
              title={entry.school}
              sub={entry.detail}
              note={entry.note}
              date={entry.date}
              extra={entry.location}
            />
          ))}
        </Rail>
      </Section>

      <Section index={3} code="capabilities" title="What I work with">
        <SystemStack />
      </Section>

      <Section
        index={4}
        code="chain of command"
        title="Leadership"
        meta={`${organisations.length} roles`}
      >
        <Rail>
          {organisations.map((entry, i) => (
            <TimelineItem
              key={`${entry.role}-${entry.org}`}
              i={i}
              title={entry.role}
              sub={entry.org}
              date={entry.date}
            />
          ))}
        </Rail>
      </Section>

      <Section index={5} code="commendations" title="Recognition" meta={`${awards.length} flags`}>
        <ul className="grid gap-4 sm:grid-cols-2">
          {awards.map((award, i) => (
            <li
              key={award.title}
              data-reveal="flip"
              style={{ "--i": i % 2 } as React.CSSProperties}
              className="card-3d panel brackets flex h-full flex-col rounded-sm p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-label text-sm font-semibold text-accent">
                  #{String(i + 1).padStart(2, "0")}
                </span>
                <span className="label text-ink-faint">{award.year}</span>
              </div>
              <h3 className="mt-3 text-[1.05rem] leading-snug font-semibold text-ink">
                {award.title}
              </h3>
              <p className="mt-2 text-[0.92rem] text-ink-muted">{award.event}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
