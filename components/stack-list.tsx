export default function StackList({ stack }: { stack: string[] }) {
  return (
    <p className="font-mono text-[0.7rem] tracking-wide text-ink-faint">
      {stack.join("  ·  ")}
    </p>
  );
}
