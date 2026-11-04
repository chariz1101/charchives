export default function StackList({
  stack,
  tone = "accent",
}: {
  stack: string[];
  tone?: "accent" | "signal";
}) {
  const colours =
    tone === "accent"
      ? "border-accent-line bg-accent-soft text-accent-strong"
      : "border-signal-line bg-signal-soft text-signal";
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((tool) => (
        <li
          key={tool}
          className={`rounded-sm border px-2 py-0.5 font-mono text-[11px] ${colours}`}
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
