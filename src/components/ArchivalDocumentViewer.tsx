import type { ArchivalDocument } from "@/data/entries";

type ArchivalDocumentViewerProps = {
  document: ArchivalDocument;
  /** Tighter, no outer section heading (e.g. gallery preview) */
  compact?: boolean;
};

export function ArchivalDocumentViewer({
  document: doc,
  compact = false,
}: ArchivalDocumentViewerProps) {
  const title = doc.label ?? "Archival document";
  const alt = doc.alt ?? title;

  const inner =
    doc.kind === "pdf" ? (
      <div className="overflow-hidden rounded border border-[var(--border)] bg-[var(--paper-deep)] shadow-[inset_0_1px_0_rgba(28,25,20,0.04)]">
        <iframe
          title={title}
          src={doc.src}
          className="h-[min(75vh,36rem)] w-full bg-[var(--paper)]"
        />
        <p className="border-t border-[var(--border)] px-4 py-3 font-mono text-[0.65rem] text-[var(--muted)]">
          <a
            href={doc.src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4 hover:text-[var(--ink)]"
          >
            Open PDF in a new tab
          </a>
          <span className="text-[var(--muted)]"> · </span>
          <span>Some browsers may not render PDFs inline; use the link if the viewer is blank.</span>
        </p>
      </div>
    ) : (
      <figure className="relative overflow-hidden rounded border border-[var(--border)] bg-[var(--paper-deep)]">
        {/* eslint-disable-next-line @next/next/no-img-element -- local public assets; dimensions unknown */}
        <img
          src={doc.src}
          alt={alt}
          className="max-h-[min(75vh,40rem)] w-full object-contain object-top"
        />
      </figure>
    );

  if (compact) {
    return <div className="w-full">{inner}</div>;
  }

  return (
    <section className="mt-10" aria-labelledby="document-viewer-heading">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
        Facsimile
      </p>
      <h2
        id="document-viewer-heading"
        className="mt-2 font-serif text-2xl tracking-tight text-[var(--ink)]"
      >
        {title}
      </h2>
      <div className="mt-4">{inner}</div>
      {doc.caption ? (
        <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
          {doc.caption}
        </p>
      ) : null}
    </section>
  );
}
