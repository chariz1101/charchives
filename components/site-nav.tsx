"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { label: "Work", href: "/projects" },
  { label: "Organising", href: "/organising" },
  { label: "About", href: "/about" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-emerald-100 bg-emerald-700">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-1.5 px-5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-8 sm:py-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-white hover:text-emerald-100"
        >
          charchives
        </Link>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1">
          {nav.map((item) => {
            const current = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`text-[13px] font-medium ${
                  current
                    ? "text-white underline decoration-emerald-300 decoration-2 underline-offset-[6px]"
                    : "text-emerald-100 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/#contact"
            className="text-[13px] font-medium text-emerald-100 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
