import Link from "next/link";
import MediaFrame from "@/components/media-frame";
import StackList from "@/components/stack-list";

type Block =
  | { title: string; text: string }
  | { title: string; list: string[] };

/**
 * The detail page shared by projects and organising entries: a spec-sheet
 * header, the media tilting in 3D, numbered work steps that assemble one by
 * one, and a spec panel alongside.
 */
export default function CaseFile({
  back,
  code,
  kind,
  name,
  summary,
  image,
  imageAlt,
  blocks,
  specs,
  chips,
  chipsTitle,
  links,
  next,
}: {
  back: { href: string; label: string };
  code: string;
  kind: string;
  name: string;
  summary: string;
  image?: string;
  imageAlt: string;
  blocks: Block[];
  specs: { label: string; value: string }[];
  chips?: string[];
  chipsTitle: string;
  links: { label: string; href: string }[];
  next?: { href: string; label: string; name: string };
}) {
  return (
    <article className="mx-auto w-full max-w-6xl px-5 pt-10 sm:px-8 sm:pt-12">
      <p className="pb-10">
        <Link
          href={back.href}
          className="label inline-flex items-center gap-2 text-ink-faint transition hover:text-accent"
        >
          ← {back.label}
        </Link>
      </p>

      <header className="pb-12">
        <p className="label flex flex-wrap items-center gap-3 text-signal" data-reveal="fade">
          <span className="text-accent">{code}</span>
          <span className="h-px w-8 bg-rule-strong" />
          {kind}
        </p>
        <h1
          className="mt-4 text-[2.75rem] leading-[0.95] font-bold tracking-[-0.04em] sm:text-[4.5rem]"
          data-reveal
        >
          {name}
        </h1>
        <p
          className="mt-6 max-w-[60ch] text-[1.1rem] leading-relaxed text-ink-muted"
          data-reveal
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {summary}
        </p>
      </header>

      <div data-depth>
        <div data-reveal="zoom">
          <div className="tilt-media">
            <MediaFrame
              image={image}
              alt={imageAlt}
              label={name}
              code={code}
              width={1600}
              height={800}
              sizes="(min-width: 1152px) 1088px, 100vw"
              eager
            />
          </div>
        </div>
      </div>

      <div className="grid gap-x-14 gap-y-12 py-16 md:grid-cols-[1fr_17rem] md:items-start">
        <div className="space-y-14">
          {blocks.map((block) => (
            <section key={block.title}>
              <h2 className="label flex items-center gap-3 text-signal" data-reveal="left">
                <span className="h-1.5 w-1.5 rotate-45 bg-accent" />
                {block.title}
              </h2>
              {"text" in block ? (
                <p
                  className="mt-4 max-w-[64ch] text-[1.05rem] leading-relaxed text-ink"
                  data-reveal
                >
                  {block.text}
                </p>
              ) : (
                <ol className="mt-4 max-w-[66ch] space-y-3">
                  {block.list.map((item, i) => (
                    <li
                      key={item}
                      data-reveal="left"
                      style={{ "--i": i } as React.CSSProperties}
                      className="panel flex gap-4 rounded-sm p-4"
                    >
                      <span className="font-label text-sm font-semibold text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[0.96rem] leading-relaxed text-ink-muted">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ))}
        </div>

        <aside
          className="panel brackets space-y-7 rounded-sm p-5 md:sticky md:top-24"
          data-reveal="right"
        >
          <p className="label text-ink-faint">Spec sheet</p>
          <dl className="space-y-4">
            {specs.map((spec) => (
              <div key={spec.label}>
                <dt className="label text-signal">{spec.label}</dt>
                <dd className="mt-1 text-[0.92rem] text-ink">{spec.value}</dd>
              </div>
            ))}
          </dl>

          {chips?.length ? (
            <div>
              <h2 className="label text-signal">{chipsTitle}</h2>
              <div className="mt-3">
                <StackList stack={chips} />
              </div>
            </div>
          ) : null}

          {links.length ? (
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="label rounded-sm border border-accent-line bg-accent-soft px-3 py-2.5 text-center text-accent-strong transition hover:bg-accent hover:text-bg"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          ) : null}
        </aside>
      </div>

      {next ? (
        <nav className="border-t border-rule pt-8" data-reveal>
          <Link href={next.href} className="group block">
            <span className="label text-ink-faint">{next.label} →</span>
            <span className="mt-2 block text-3xl font-bold text-ink transition-colors group-hover:text-accent sm:text-4xl">
              {next.name}
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
