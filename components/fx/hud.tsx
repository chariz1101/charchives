/**
 * The fixed telemetry rail on wide screens: a Z-axis scroll gauge whose fill
 * and readout come from --scroll and [data-readout] (see scroll-fx).
 */
export default function Hud() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed top-1/2 right-5 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
    >
      <span className="label text-[10px] text-ink-faint [writing-mode:vertical-rl]">
        z-axis
      </span>
      <div className="relative h-44 w-[3px] overflow-hidden rounded-full bg-rule">
        <div
          className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-signal to-accent"
          style={{ transform: "scaleY(var(--scroll))" }}
        />
      </div>
      <span className="font-label text-[11px] text-signal tabular-nums">
        <span data-readout>000</span>
      </span>
    </div>
  );
}
