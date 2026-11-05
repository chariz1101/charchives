import Image from "next/image";
import Gear from "@/components/fx/gear";

/**
 * A screenshot on a chamfered plate, or, when there is no screenshot yet, a
 * schematic with the project's initials so every entry has a visual.
 */
export default function MediaFrame({
  image,
  alt,
  label,
  code,
  sizes,
  eager,
  width = 1280,
  height = 640,
}: {
  image?: string;
  alt: string;
  /** Shown on the schematic plate when there is no image. */
  label: string;
  /** A short readout in the frame corner, e.g. the index number. */
  code?: string;
  sizes: string;
  eager?: boolean;
  width?: number;
  height?: number;
}) {
  const initials = label
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className="group/media relative">
      {/* The outline is a 1px gradient plate showing behind a chamfered one. */}
      <div className="chamfer bg-gradient-to-br from-accent/70 via-rule-strong to-signal/50 p-px">
        <div className="chamfer relative overflow-hidden bg-bg [--cut:17px]">
          {image ? (
            <Image
              src={image}
              alt={alt}
              width={width}
              height={height}
              sizes={sizes}
              loading={eager ? "eager" : undefined}
              className="block h-auto w-full object-cover opacity-90 transition-opacity duration-500 group-hover/media:opacity-100"
            />
          ) : (
            <div
              role="img"
              aria-label={alt}
              className="relative flex aspect-[2/1] w-full items-center justify-center overflow-hidden bg-panel-2"
              style={{
                backgroundImage:
                  "linear-gradient(rgb(56 214 255 / 0.08) 1px, transparent 1px), linear-gradient(90deg, rgb(56 214 255 / 0.08) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            >
              <Gear
                teeth={18}
                turns={2}
                className="absolute -right-10 -bottom-12 h-48 w-48 text-signal opacity-15"
              />
              <Gear
                teeth={11}
                turns={-3.3}
                className="absolute right-[6.6rem] -bottom-6 h-24 w-24 text-accent opacity-25"
              />
              <span className="font-label text-6xl font-semibold tracking-tighter text-ink/90 sm:text-7xl">
                {initials}
              </span>
              <span className="label absolute top-4 left-7 text-signal">
                schematic · no capture
              </span>
            </div>
          )}
          <div className="scanline opacity-0 transition-opacity group-hover/media:opacity-100" />
        </div>
      </div>
      {code ? (
        <span className="label absolute right-7 bottom-2.5 bg-bg/80 px-1.5 py-0.5 text-accent">
          {code}
        </span>
      ) : null}
    </div>
  );
}
