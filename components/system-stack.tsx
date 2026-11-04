import StackList from "@/components/stack-list";
import { skills } from "@/content/profile";

/**
 * The skill groups as an isometric stack of circuit plates. The plates sit
 * flush when the section is off screen and pull apart in 3D as it reaches
 * the centre of the viewport (driven by --pv from scroll-fx).
 */
export default function SystemStack() {
  // Hardware at the bottom of the stack, the interface on top.
  const layers = [...skills].reverse();

  return (
    <div className="grid items-center gap-12 md:grid-cols-[minmax(0,22rem)_1fr] md:gap-16">
      <div
        data-depth
        className="stack-scene mx-auto flex aspect-square w-full max-w-[20rem] items-center justify-center"
        aria-hidden="true"
      >
        <div className="stack-rig h-[62%] w-[62%]">
          {layers.map((group, i) => {
            const accent = i % 2 === 0;
            return (
              <div
                key={group.group}
                className="stack-plate"
                style={{ "--layer": i } as React.CSSProperties}
              >
                <div
                  className={`relative h-full w-full rounded-md border-2 ${
                    accent
                      ? "border-accent/70 bg-accent/10 shadow-[0_0_40px_rgb(255_122_26/0.25)]"
                      : "border-signal/70 bg-signal/10 shadow-[0_0_40px_rgb(56_214_255/0.2)]"
                  }`}
                  style={{
                    backgroundImage:
                      "linear-gradient(rgb(255 255 255 / 0.06) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / 0.06) 1px, transparent 1px)",
                    backgroundSize: "14px 14px",
                  }}
                >
                  <span
                    className={`label absolute top-2 left-2.5 ${
                      accent ? "text-accent-strong" : "text-signal"
                    }`}
                  >
                    L{i} · {group.group}
                  </span>
                  <span className="absolute right-3 bottom-3 grid grid-cols-3 gap-1">
                    {Array.from({ length: 6 }).map((_, k) => (
                      <span
                        key={k}
                        className={`h-1.5 w-1.5 rounded-full ${
                          accent ? "bg-accent/70" : "bg-signal/70"
                        }`}
                      />
                    ))}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <dl className="space-y-3">
        {skills.map((group, i) => (
          <div
            key={group.group}
            data-reveal="right"
            style={{ "--i": i } as React.CSSProperties}
            className="panel rounded-sm p-4 sm:grid sm:grid-cols-[9.5rem_1fr] sm:gap-6"
          >
            <dt className="label mb-3 flex items-center gap-2 text-ink-faint sm:mb-0 sm:pt-1">
              <span className={i % 2 ? "text-accent" : "text-signal"}>
                L{skills.length - 1 - i}
              </span>
              {group.group}
            </dt>
            <dd>
              <StackList stack={group.items} tone={i % 2 ? "accent" : "signal"} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
