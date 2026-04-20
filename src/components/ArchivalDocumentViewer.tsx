import type { ArchivalDocument, TranscriptBlock } from "@/data/entries";

type ArchivalDocumentViewerProps = {
  document: ArchivalDocument;
  /** Tighter, no outer section heading (e.g. gallery preview) */
  compact?: boolean;
  /** Stack image then transcript vertically (reading-room default) */
  stackTranscript?: boolean;
  /** Hide outer Facsimile heading (nested in reading-room) */
  embedded?: boolean;
};

export function TranscriptBlocksContent({
  blocks,
  className = "",
}: {
  blocks: TranscriptBlock[];
  className?: string;
}) {
  return (
    <div className={`space-y-4 ${className}`}>
      {blocks.map((block, i) =>
        block.kind === "excerpt" ? (
          <p
            key={i}
            className="border-l-2 border-[var(--accent-soft)] pl-3 font-mono text-[0.8125rem] leading-relaxed text-[var(--ink-soft)] whitespace-pre-wrap"
          >
            {block.text}
          </p>
        ) : (
          <p
            key={i}
            className="text-sm leading-relaxed text-[var(--ink-soft)] sm:text-[0.9375rem]"
          >
            {block.text}
          </p>
        ),
      )}
    </div>
  );
}

function TranscriptColumn({ blocks }: { blocks: TranscriptBlock[] }) {
  return (
    <aside
      className="border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_92%,#fff)] p-5 sm:p-6"
      aria-label="Transcript"
    >
      <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
        Transcript
      </p>
      <div className="mt-4 max-h-[28rem] space-y-4 overflow-y-auto pr-1 sm:max-h-[32rem] lg:max-h-[min(75vh,44rem)]">
        <TranscriptBlocksContent blocks={blocks} />
      </div>
    </aside>
  );
}

export function ArchivalDocumentViewer({
  document: doc,
  compact = false,
  stackTranscript = false,
  embedded = false,
}: ArchivalDocumentViewerProps) {
  const title = doc.label ?? "Archival document";
  const alt = doc.alt ?? title;
  const hasImageTranscript =
    doc.kind === "image" && Boolean(doc.transcriptBlocks?.length);

  const imageFigure = (
    <figure className="overflow-hidden rounded border border-[var(--border)] bg-[var(--paper-deep)]">
      {/* eslint-disable-next-line @next/next/no-img-element -- local public assets; dimensions unknown */}
      <img
        src={doc.src}
        alt={alt}
        className="max-h-[min(50vh,22rem)] w-full object-contain object-top sm:max-h-[min(60vh,28rem)] lg:max-h-[min(75vh,44rem)]"
      />
    </figure>
  );

  const stackedImageTranscript =
    hasImageTranscript && stackTranscript && doc.transcriptBlocks ? (
      <div className="space-y-5">
        {imageFigure}
        <div className="border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_92%,#fff)] p-4 sm:p-5">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
            Transcript
          </p>
          <div className="mt-3 max-h-[min(70vh,36rem)] overflow-y-auto pr-1">
            <TranscriptBlocksContent blocks={doc.transcriptBlocks} />
          </div>
        </div>
      </div>
    ) : null;

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
    ) : hasImageTranscript && stackTranscript ? (
      stackedImageTranscript
    ) : hasImageTranscript ? (
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-start lg:gap-8">
        <div className="min-w-0">{imageFigure}</div>
        <TranscriptColumn blocks={doc.transcriptBlocks ?? []} />
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

  if (embedded) {
    return (
      <div className="w-full">
        <div className="mt-1">{inner}</div>
        {doc.caption ? (
          <p className="mt-3 text-xs leading-relaxed text-[var(--muted)] sm:text-sm">
            {doc.caption}
          </p>
        ) : null}
      </div>
    );
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
        <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
          {doc.caption}
        </p>
      ) : null}
    </section>
  );
}
