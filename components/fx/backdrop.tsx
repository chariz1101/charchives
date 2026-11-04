import Gear from "@/components/fx/gear";

/** The fixed blueprint grid and the gears that turn as the page scrolls. */
export default function Backdrop() {
  return (
    <div aria-hidden="true">
      <div className="blueprint" />
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <Gear
          teeth={24}
          turns={1.5}
          className="absolute -top-40 -left-40 h-[26rem] w-[26rem] text-signal opacity-[0.05]"
        />
        <Gear
          teeth={14}
          turns={-2.6}
          className="absolute top-[13.5rem] -left-16 h-56 w-56 text-accent opacity-[0.06]"
        />
        <Gear
          teeth={30}
          turns={-1}
          className="absolute -right-56 -bottom-56 h-[34rem] w-[34rem] text-signal opacity-[0.045]"
        />
      </div>
    </div>
  );
}
