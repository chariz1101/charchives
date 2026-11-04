"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Gear from "@/components/fx/gear";

const nav = [
  { label: "Work", href: "/projects", code: "01" },
  { label: "Organising", href: "/organising", code: "02" },
  { label: "About", href: "/about", code: "03" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-bg/75 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 font-label text-sm font-semibold tracking-tight text-ink"
        >
          <Gear
            teeth={10}
            turns={4}
            spokes={false}
            className="h-5 w-5 text-accent transition-colors group-hover:text-signal"
          />
          <span>
            charchives<span className="text-accent">_</span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-1">
          {nav.map((item) => {
            const current = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`group font-label text-[12px] tracking-wide uppercase transition-colors ${
                  current ? "text-ink" : "text-ink-faint hover:text-ink"
                }`}
              >
                <span
                  className={`mr-1.5 ${current ? "text-accent" : "text-signal/60 group-hover:text-signal"}`}
                >
                  {item.code}.
                </span>
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="rounded-sm border border-accent-line bg-accent-soft px-3 py-1 font-label text-[12px] tracking-wide text-accent-strong uppercase transition-colors hover:border-accent hover:bg-accent hover:text-bg"
          >
            Contact
          </Link>
        </nav>
      </div>
      {/* Scroll progress, read straight from --scroll. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-signal via-accent to-accent"
        style={{ transform: "scaleX(var(--scroll))" }}
      />
    </header>
  );
}
