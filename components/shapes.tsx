/**
 * Mechanical shapes used instead of boxed cards: dial gauges, hexagon
 * badges, a radar, and the orbit ring around a portrait.
 */

/** A circular gauge. The arc sweeps in when the dial is revealed. */
export function Dial({
  value,
  label,
  unit,
  i = 0,
}: {
  value: number;
  label: string;
  unit: string;
  i?: number;
}) {
  // Fill to the next ten: 18 reads as 18 of 20, 40 as a full ring.
  const frac = value / (Math.ceil(value / 10) * 10 || 10);
  const ticks = Array.from({ length: 36 });

  return (
    <div
      className="dial flex flex-col items-center text-center"
      data-reveal="zoom"
      style={{ "--i": i, "--frac": frac } as React.CSSProperties}
    >
      <div className="relative aspect-square w-full max-w-[9.5rem]">
        <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full" aria-hidden="true">
          {ticks.map((_, k) => {
            const a = (k / ticks.length) * Math.PI * 2;
            const long = k % 3 === 0;
            const r1 = long ? 53 : 55;
            return (
              <line
                key={k}
                x1={60 + Math.cos(a) * r1}
                y1={60 + Math.sin(a) * r1}
                x2={60 + Math.cos(a) * 58}
                y2={60 + Math.sin(a) * 58}
                stroke={long ? "var(--rule-strong)" : "var(--rule)"}
                strokeWidth="1.2"
              />
            );
          })}
          <circle cx="60" cy="60" r="46" fill="none" stroke="var(--rule)" strokeWidth="5" />
          <circle
            className="dial-arc"
            cx="60"
            cy="60"
            r="46"
            fill="none"
            stroke="url(#dial-grad)"
            strokeWidth="5"
            strokeLinecap="round"
            pathLength={1}
            transform="rotate(-90 60 60)"
          />
          <defs>
            <linearGradient id="dial-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--signal)" />
              <stop offset="1" stopColor="var(--accent)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="font-label text-[2.1rem] leading-none font-semibold text-ink tabular-nums"
            data-count={value}
          >
            {String(value).padStart(2, "0")}
          </span>
          <span className="label mt-1.5 text-signal">{unit}</span>
        </div>
      </div>
      <p className="label mt-3 text-ink-faint">{label}</p>
    </div>
  );
}

/** A flat-topped hexagon outline with content in the middle. */
export function Hexagon({
  children,
  className,
  tone = "accent",
}: {
  children?: React.ReactNode;
  className?: string;
  tone?: "accent" | "signal";
}) {
  const colour = tone === "accent" ? "var(--accent)" : "var(--signal)";
  return (
    <div className={`relative ${className ?? ""}`}>
      <svg viewBox="0 0 100 88" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <polygon
          points="25,2 75,2 98,44 75,86 25,86 2,44"
          fill={tone === "accent" ? "var(--accent-soft)" : "var(--signal-soft)"}
          stroke={colour}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
}

/** Concentric rings with a rotating sweep, for the contact section. */
export function Radar({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`} aria-hidden="true">
      <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
        {[96, 72, 48, 24].map((r) => (
          <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="var(--signal-line)" strokeWidth="1" />
        ))}
        <line x1="4" y1="100" x2="196" y2="100" stroke="var(--rule-strong)" strokeWidth="1" />
        <line x1="100" y1="4" x2="100" y2="196" stroke="var(--rule-strong)" strokeWidth="1" />
        <circle cx="138" cy="66" r="4" fill="var(--accent)" className="radar-blip" />
        <circle cx="62" cy="128" r="3" fill="var(--signal)" className="radar-blip [animation-delay:1.4s]" />
      </svg>
      <div className="radar-sweep absolute inset-[2%] rounded-full" />
    </div>
  );
}

/** A circular portrait with a slowly turning dashed ring around it. */
export function Orbit({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative aspect-square ${className ?? ""}`}>
      <svg viewBox="0 0 100 100" className="orbit-spin absolute inset-0 h-full w-full" aria-hidden="true">
        <circle cx="50" cy="50" r="48" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 6" />
        <circle cx="50" cy="2" r="2.5" fill="var(--signal)" />
      </svg>
      <div className="absolute inset-[12%] overflow-hidden rounded-full border border-rule-strong">
        {children}
      </div>
    </div>
  );
}
