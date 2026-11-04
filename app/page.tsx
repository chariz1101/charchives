import Image from "next/image";
import Link from "next/link";
import ActivityIndex from "@/components/activity-index";
import RobotArm from "@/components/fx/robot-arm";
import ProjectIndex from "@/components/project-index";
import Section from "@/components/section";
import SystemStack from "@/components/system-stack";
import { activities, featuredActivities } from "@/content/organising";
import {
  awards,
  links,
  organisations,
  profile,
  skills,
} from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";

const telemetry = [
  { value: projects.length, label: "Projects shipped", unit: "units" },
  { value: activities.length, label: "Events run", unit: "ops" },
  { value: organisations.length, label: "Leadership roles", unit: "posts" },
  {
    value: skills.reduce((n, g) => n + g.items.length, 0),
    label: "Tools in the kit",
    unit: "modules",
  },
  { value: awards.length, label: "Recognitions", unit: "flags" },
];

const [first, ...rest] = profile.name.split(" ");
const last = rest.pop() ?? "";
const middle = rest.join(" ");

export default function HomePage() {
  return (
    <>
      <RobotArm />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* ------------------------------------------------------- hero */}
        <section className="relative flex min-h-[calc(100svh-4.5rem)] flex-col justify-center py-14">
          <div
            data-depth
            className="parallax max-w-[40rem]"
            style={{ "--shift": -120 } as React.CSSProperties}
          >
            <p className="label flex items-center gap-2.5 text-signal" data-reveal="fade">
              <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-signal" />
              System online · portfolio v3
            </p>

            <h1
              className="mt-6 text-[3rem] leading-[0.95] font-bold tracking-[-0.04em] sm:text-[5.25rem]"
              data-reveal
            >
              {first} {middle}
              <br />
              <span className="bg-gradient-to-r from-accent to-accent-strong bg-clip-text text-transparent">
                {last}
              </span>
              <span className="blink text-signal">_</span>
            </h1>

            <p
              className="mt-5 font-label text-[0.9rem] text-ink-muted"
              data-reveal
              style={{ "--i": 1 } as React.CSSProperties}
            >
              <span className="text-accent">&gt;</span> {profile.role.toLowerCase()}{" "}
              <span className="text-ink-faint">{"//"}</span> robotics & mechatronics{" "}
              <span className="text-ink-faint">{"//"}</span> {profile.location}
            </p>

            <p
              className="mt-6 max-w-[56ch] text-[1.075rem] leading-relaxed text-ink-muted"
              data-reveal
              style={{ "--i": 2 } as React.CSSProperties}
            >
              {profile.intro}
            </p>

            <div
              className="panel brackets mt-8 flex max-w-md items-center gap-4 rounded-sm p-3 pr-5"
              data-reveal
              style={{ "--i": 3 } as React.CSSProperties}
            >
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-sm">
                <Image
                  src="/mine.jpg"
                  alt={profile.name}
                  width={128}
                  height={128}
                  loading="eager"
                  sizes="64px"
                  className="h-full w-full object-cover"
                />
                <div className="scanline" />
              </div>
              <div className="min-w-0">
                <p className="label text-ink-faint">Operator status · active</p>
                <p className="mt-1 text-[0.9rem] leading-snug text-ink-muted">
                  {profile.current.arrangement}{" "}
                  <span className="font-semibold text-ink">{profile.current.role}</span>{" "}
                  at {profile.current.org}, since {profile.current.since}.
                </p>
              </div>
            </div>

            <div
              className="mt-8 flex flex-wrap gap-3"
              data-reveal
              style={{ "--i": 4 } as React.CSSProperties}
            >
              <a
                href={`mailto:${links.email}`}
                className="rounded-sm bg-accent px-5 py-2.5 font-label text-[13px] font-semibold tracking-wide text-bg uppercase transition hover:bg-accent-strong hover:shadow-[0_0_30px_rgb(255_122_26/0.45)]"
              >
                Send a signal
              </a>
              <Link
                href="/projects"
                className="rounded-sm border border-rule-strong bg-panel/70 px-5 py-2.5 font-label text-[13px] tracking-wide text-ink uppercase transition hover:border-signal hover:text-signal"
              >
                View work
              </Link>
              <a
                href={links.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-rule-strong bg-panel/70 px-5 py-2.5 font-label text-[13px] tracking-wide text-ink uppercase transition hover:border-signal hover:text-signal"
              >
                Résumé ↗
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-sm border border-rule-strong bg-panel/70 px-5 py-2.5 font-label text-[13px] tracking-wide text-ink uppercase transition hover:border-signal hover:text-signal"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="#telemetry"
            style={{ opacity: "calc(1 - var(--scroll) * 25)" }}
            className="label absolute bottom-6 left-0 flex items-center gap-3 text-ink-faint hover:text-signal"
          >
            <span className="relative block h-9 w-5 rounded-full border border-rule-strong">
              <span className="absolute top-1.5 left-1/2 h-2 w-0.5 -translate-x-1/2 animate-bounce rounded bg-accent" />
            </span>
            Scroll to actuate
          </a>
        </section>

        {/* -------------------------------------------------- telemetry */}
        <section id="telemetry" className="scroll-mt-24 pt-10">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {telemetry.map((item, i) => (
              <li
                key={item.label}
                data-reveal="zoom"
                style={{ "--i": i } as React.CSSProperties}
                className="panel brackets rounded-sm p-4 last:col-span-2 sm:last:col-span-1"
              >
                <p className="label text-ink-faint">{item.label}</p>
                <p className="mt-3 flex items-baseline gap-2">
                  <span
                    className="font-label text-4xl font-semibold text-ink tabular-nums"
                    data-count={item.value}
                  >
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="label text-signal">{item.unit}</span>
                </p>
              </li>
            ))}
          </ul>
        </section>

        <Section
          index={1}
          code="selected work"
          title="Builds"
          meta={`${featuredProjects.length} of ${projects.length}`}
        >
          <ProjectIndex projects={featuredProjects} layout="feature" />
          <p className="pt-16" data-reveal>
            <Link
              href="/projects"
              className="label inline-flex items-center gap-2 rounded-sm border border-signal-line px-4 py-2.5 text-signal transition hover:bg-signal hover:text-bg"
            >
              {`All ${projects.length} projects →`}
            </Link>
          </p>
        </Section>

        <Section
          index={2}
          code="capabilities"
          title="System stack"
          meta={`${skills.length} layers`}
        >
          <SystemStack />
        </Section>

        <Section
          index={3}
          code="organising"
          title="Field operations"
          meta={`${featuredActivities.length} of ${activities.length}`}
        >
          <ActivityIndex activities={featuredActivities} />
          <p className="pt-10" data-reveal>
            <Link
              href="/organising"
              className="label inline-flex items-center gap-2 rounded-sm border border-signal-line px-4 py-2.5 text-signal transition hover:bg-signal hover:text-bg"
            >
              {`All ${activities.length} organising ${
                activities.length === 1 ? "entry" : "entries"
              } →`}
            </Link>
          </p>
        </Section>

        <Section index={4} id="contact" code="open channel" title="Get in touch" meta={profile.location}>
          <div className="panel brackets relative overflow-hidden rounded-sm p-6 sm:p-10" data-reveal="zoom">
            <div className="scanline" />
            <p className="label text-signal">Transmit on</p>
            <p className="mt-2 max-w-[58ch] text-[0.98rem] leading-relaxed text-ink-muted">
              Email is the surest way to reach me.
            </p>
            <p className="mt-6">
              <a
                href={`mailto:${links.email}`}
                className="text-2xl font-bold break-all text-accent underline decoration-accent-line decoration-2 underline-offset-[8px] transition hover:text-accent-strong hover:decoration-accent sm:text-4xl"
              >
                {links.email}
              </a>
            </p>
            <ul className="mt-10 flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", href: links.linkedin },
                { label: "GitHub", href: links.github },
                { label: "Résumé", href: links.resume },
                { label: links.phone, href: links.phoneHref },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-block rounded-sm border border-rule-strong px-4 py-2 font-label text-[12px] tracking-wide text-ink-muted transition hover:border-signal hover:text-signal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </>
  );
}
