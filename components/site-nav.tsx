"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-4xl items-baseline justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-ink hover:text-accent"
        >
          charchives<span className="text-accent">.</span>
        </Link>

        <nav className="flex items-baseline gap-6">
          {nav.map((item) => {
            const current = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`label ${
                  current ? "text-accent" : "text-ink-faint hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="label text-ink-faint hover:text-ink"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
