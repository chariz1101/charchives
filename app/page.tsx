import Image from "next/image";
import Link from "next/link";
import ProjectIndex from "@/components/project-index";
import Section from "@/components/section";
import StackList from "@/components/stack-list";
import { events, links, profile } from "@/content/profile";
import { featuredProjects, projects } from "@/content/projects";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
      <section className="grid gap-8 pt-12 sm:grid-cols-[1fr_14rem] sm:items-start sm:gap-12 sm:pt-16">
        <div>
          <h1 className="text-[2.5rem] leading-[1.05] sm:text-[3.5rem]">
            {profile.name}
          </h1>
          <p className="label mt-3 text-ink-faint">
            {profile.role} · {profile.location}
          </p>

          <p className="mt-6 max-w-[60ch] text-[1.0625rem] leading-relaxed text-ink-muted">
            {profile.intro}
          </p>

          <p className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${links.email}`}
              className="text-[0.95rem] text-ink underline decoration-accent underline-offset-4 hover:text-accent"
            >
              {links.email}
            </a>
            <a
              href={links.resume}
              target="_blank"
              rel="noreferrer"
              className="text-[0.95rem] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
            >
              Résumé
            </a>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              className="text-[0.95rem] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
            >
              GitHub
            </a>
          </p>
        </div>

        <div className="order-first w-32 sm:order-none sm:w-full">
          <Image
            src="/mine.jpg"
            alt={profile.name}
            width={448}
            height={448}
            loading="eager"
            sizes="(min-width: 640px) 224px, 128px"
            className="w-full border border-rule object-cover"
          />
        </div>
      </section>

      <Section
        title="Selected work"
        meta={`${featuredProjects.length} of ${projects.length}`}
      >
        <ProjectIndex projects={featuredProjects} />
        <p className="pt-6">
          <Link
            href="/projects"
            className="text-[0.95rem] text-ink underline decoration-rule underline-offset-4 hover:decoration-accent"
          >
            {`All ${projects.length} projects →`}
          </Link>
        </p>
      </Section>

      <Section title="Organising" meta="MRSP Western Visayas">
        <ul className="border-t border-rule">
          {events.map((event) => (
            <li key={event.name} className="border-b border-rule py-7">
              <h3 className="font-serif text-xl text-ink sm:text-2xl">
                {event.name}
              </h3>
              <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-muted">
                {event.detail}
              </p>
              <div className="mt-4">
                <StackList stack={event.stack} />
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Get in touch" meta="Iloilo City, PH">
        <p className="max-w-[58ch] text-[0.95rem] leading-relaxed text-ink-muted">
          Email is the surest way to reach me.
        </p>
        <p className="mt-6">
          <a
            href={`mailto:${links.email}`}
            className="font-serif text-2xl text-ink underline decoration-accent decoration-1 underline-offset-[6px] hover:text-accent sm:text-4xl"
          >
            {links.email}
          </a>
        </p>
        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
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
                className="text-[0.95rem] text-ink-muted underline decoration-rule underline-offset-4 hover:text-ink hover:decoration-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
