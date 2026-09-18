import { links, profile } from "@/content/profile";

const elsewhere = [
  { label: "GitHub", href: links.github },
  { label: "LinkedIn", href: links.linkedin },
  { label: "Résumé", href: links.resume },
];

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-5 py-8 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="label text-ink-faint">
          {profile.name} · {profile.location}
        </p>
        <nav className="flex flex-wrap gap-5">
          <a
            href={`mailto:${links.email}`}
            className="label text-ink-faint hover:text-accent"
          >
            Email
          </a>
          {elsewhere.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="label text-ink-faint hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
