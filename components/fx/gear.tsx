/** An SVG spur gear, generated rather than drawn so tooth count is a prop. */
function gearPath(teeth: number, outer: number, root: number, hole: number) {
  const step = (Math.PI * 2) / teeth;
  const pt = (a: number, r: number) =>
    `${(50 + Math.cos(a) * r).toFixed(2)} ${(50 + Math.sin(a) * r).toFixed(2)}`;
  let d = "";
  for (let i = 0; i < teeth; i++) {
    const a = i * step;
    d += `${i === 0 ? "M" : "L"}${pt(a, root)} L${pt(a + step * 0.12, outer)} L${pt(
      a + step * 0.38,
      outer,
    )} L${pt(a + step * 0.5, root)} `;
  }
  d += "Z ";
  // The bore, cut out with even-odd fill.
  d += `M${50 + hole} 50 A${hole} ${hole} 0 1 0 ${50 - hole} 50 A${hole} ${hole} 0 1 0 ${50 + hole} 50 Z`;
  return d;
}

export default function Gear({
  teeth = 16,
  className,
  turns = 1,
  spokes = true,
}: {
  teeth?: number;
  className?: string;
  /** Full rotations across the whole page scroll; negative turns backwards. */
  turns?: number;
  spokes?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={`gear-spin ${className ?? ""}`}
      style={{ "--turns": turns } as React.CSSProperties}
    >
      <path d={gearPath(teeth, 48, 41, 9)} fillRule="evenodd" fill="currentColor" />
      {spokes ? (
        <g fill="none" stroke="var(--bg)" strokeWidth="5" opacity="0.85">
          <circle cx="50" cy="50" r="27" />
        </g>
      ) : null}
    </svg>
  );
}
