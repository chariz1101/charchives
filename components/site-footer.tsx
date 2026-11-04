import { links, profile } from "@/content/profile";

const elsewhere = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Résumé", href: links.resume },
];

export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-rule bg-bg/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="label flex items-center gap-2 text-signal">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" />
            End of transmission
          </p>
          <p className="mt-2 text-[13px] text-ink-faint">
            {profile.name} · {profile.location}
          </p>
        </div>
        <nav className="flex flex-wrap gap-5">
          <a
            href={`mailto:${links.email}`}
            className="font-label text-[12px] tracking-wide text-ink-muted uppercase hover:text-accent"
          >
            Email
          </a>
          {elsewhere.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="font-label text-[12px] tracking-wide text-ink-muted uppercase hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
