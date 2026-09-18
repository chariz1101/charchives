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
    <section id={id} className="mt-20 scroll-mt-20 border-t border-rule pt-6">
      <div className="flex items-baseline justify-between gap-4 pb-7">
        <h2 className="text-[1.6rem] sm:text-3xl">{title}</h2>
        {meta ? <span className="label text-ink-faint">{meta}</span> : null}
      </div>
      {children}
    </section>
  );
}
