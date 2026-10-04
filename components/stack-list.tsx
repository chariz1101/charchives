export default function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {stack.map((tool) => (
        <li
          key={tool}
          className="rounded-md border border-accent-line bg-accent-soft px-2 py-0.5 text-[11px] text-accent"
        >
          {tool}
        </li>
      ))}
    </ul>
  );
}
