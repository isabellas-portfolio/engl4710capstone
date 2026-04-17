import type { ReactNode } from "react";
import { ArchivalDocumentViewer } from "@/components/ArchivalDocumentViewer";
import { LiteraryPairSection } from "@/components/LiteraryPairSection";
import type { Entry } from "@/data/entries";

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-12" aria-labelledby={id}>
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
        {kicker}
      </p>
      <h2
        id={id}
        className="mt-2 font-serif text-2xl tracking-tight text-[var(--ink)]"
      >
        {title}
      </h2>
      <div className="prose-room mt-4 text-base leading-[1.75] text-[var(--ink-soft)]">
        {children}
      </div>
    </section>
  );
}

type EntryLayoutProps = {
  entry: Entry;
  children?: ReactNode;
};

export function EntryLayout({ entry, children }: EntryLayoutProps) {
  const src = entry.archivalSource;

  return (
    <article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <header className="border-b border-[var(--border)] pb-10">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
          {src.catalogNumber}
        </p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
          {entry.title}
        </h1>
        <dl className="mt-8 grid gap-4 border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_88%,#fff)] p-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
              Date
            </dt>
            <dd className="mt-1 text-[var(--ink-soft)]">{src.date}</dd>
          </div>
          <div>
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
              Medium
            </dt>
            <dd className="mt-1 text-[var(--ink-soft)]">{src.medium}</dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
              Collection
            </dt>
            <dd className="mt-1 text-[var(--ink-soft)]">{src.collection}</dd>
          </div>
        </dl>
      </header>

      {entry.document ? (
        <ArchivalDocumentViewer document={entry.document} />
      ) : null}

      <Section id="summary-heading" kicker="Overview" title="Summary">
        <p>{entry.summary}</p>
      </Section>

      <Section id="context-heading" kicker="Provenance" title="Context">
        <p>{entry.context}</p>
      </Section>

      <Section id="excerpt-heading" kicker="Material" title="Excerpt">
        <p>{entry.excerpt}</p>
      </Section>

      <Section id="close-reading-heading" kicker="Analysis" title="Close reading">
        {entry.closeReading.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Section>

      <LiteraryPairSection pairing={entry.literaryPairing} variant="entry" />

      <Section
        id="literary-connection-heading"
        kicker="Juxtaposition"
        title="Literary connection"
      >
        <p>{entry.literaryConnection}</p>
      </Section>

      <Section id="significance-heading" kicker="Stakes" title="Significance">
        <p>{entry.significance}</p>
      </Section>

      {children}
    </article>
  );
}
