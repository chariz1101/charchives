export default function Section({
  id,
  title,
  meta,
  children,
}: {
  id?: string;
  title: string;
  meta?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-20 scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-[1.75rem] font-bold whitespace-nowrap text-ink">
          {title}
        </h2>
        <div className="h-px flex-1 bg-rule" />
        {meta ? <span className="label text-ink-faint">{meta}</span> : null}
      </div>
      {children}
    </section>
  );
}
