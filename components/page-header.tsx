import Gear from "@/components/fx/gear";

/** The opening block of every index page. */
export default function PageHeader({
  code,
  title,
  meta,
  children,
}: {
  code: string;
  title: string;
  meta?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative pb-14">
      <Gear
        teeth={20}
        turns={-3}
        className="pointer-events-none absolute -top-10 right-0 hidden h-44 w-44 text-accent opacity-[0.08] sm:block"
      />
      <div data-depth className="parallax" style={{ "--shift": -60 } as React.CSSProperties}>
        <p className="label text-signal" data-reveal="fade">
          <span className="text-accent">{"//"}</span> {code}
        </p>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
          <h1
            className="text-[3rem] leading-[0.95] font-bold tracking-[-0.04em] sm:text-[4.5rem]"
            data-reveal
          >
            {title}
            <span className="text-accent">.</span>
          </h1>
          {meta ? (
            <p className="label rounded-sm border border-rule-strong px-2.5 py-1 text-ink-faint" data-reveal="fade">
              {meta}
            </p>
          ) : null}
        </div>
        {children ? (
          <div
            className="mt-6 max-w-[60ch] text-[1.075rem] leading-relaxed text-ink-muted"
            data-reveal
            style={{ "--i": 1 } as React.CSSProperties}
          >
            {children}
          </div>
        ) : null}
      </div>
    </header>
  );
}
