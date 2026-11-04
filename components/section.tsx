/**
 * Every section opens with a module header: index, title, a circuit trace
 * that draws itself in, and a meta readout.
 */
export default function Section({
  id,
  index,
  code,
  title,
  meta,
  children,
}: {
  id?: string;
  /** Module number shown before the title. */
  index?: number;
  /** A short system-style tag shown above the title. */
  code?: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="relative mt-28 scroll-mt-24 sm:mt-36">
      <header className="mb-10" data-reveal="left">
        <p className="label flex items-center gap-2 text-signal">
          {index !== undefined ? (
            <span className="text-accent">
              MOD_{String(index).padStart(2, "0")}
            </span>
          ) : null}
          {code ? <span>{`// ${code}`}</span> : null}
        </p>
        <div className="mt-3 flex items-center gap-4">
          <h2 className="text-[2rem] leading-none font-bold whitespace-nowrap text-ink sm:text-[2.6rem]">
            {title}
          </h2>
          <svg
            className="trace h-4 min-w-8 flex-1 text-signal-line"
            viewBox="0 0 400 16"
            preserveAspectRatio="none"
            data-reveal="fade"
            aria-hidden="true"
          >
            <path
              d="M0 8 H150 L160 2 H260 L270 14 H390"
              pathLength={1}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          {meta ? (
            <span className="label shrink-0 text-ink-faint">{meta}</span>
          ) : null}
        </div>
      </header>
      {children}
    </section>
  );
}
