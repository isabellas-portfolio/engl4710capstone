"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import { ArchivalDocumentViewer } from "@/components/ArchivalDocumentViewer";
import type { Entry, LiteraryPairing } from "@/data/entries";
import {
  getArchivalTranscription,
  getLiteraryAnalysisTeaser,
  getLiteraryContextTeaser,
  getShortCloseReading,
} from "@/lib/entryReading";

export type ViewMode = "document" | "split" | "interpretation";

function LiteraryPairingBody({
  pairing,
  compact,
}: {
  pairing: LiteraryPairing;
  compact?: boolean;
}) {
  return (
    <>
      <p
        className={`font-serif text-[var(--ink)] ${compact ? "text-base leading-snug" : "text-lg"}`}
      >
        <cite className="font-semibold not-italic">{pairing.workTitle}</cite>
        <span className="text-[var(--muted)]"> · </span>
        <span className="text-[var(--ink-soft)]">{pairing.author}</span>
        {pairing.sourceNote ? (
          <span className="mt-1 block font-sans text-sm font-normal text-[var(--muted)]">
            {pairing.sourceNote}
          </span>
        ) : null}
      </p>
      {pairing.excerptIsParaphrase ? (
        <div className="mt-4 border-l-2 border-[var(--accent-soft)] pl-3 font-serif text-sm leading-relaxed text-[var(--ink-soft)]">
          <p>{pairing.quotedExcerpt}</p>
        </div>
      ) : (
        <blockquote className="mt-4 border-l-2 border-[var(--accent-soft)] pl-3 font-serif text-sm italic leading-relaxed text-[var(--ink-soft)]">
          <p>&ldquo;{pairing.quotedExcerpt}&rdquo;</p>
        </blockquote>
      )}
    </>
  );
}

function MetadataBlock({ entry }: { entry: Entry }) {
  const src = entry.archivalSource;
  return (
    <dl className="grid gap-3 border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_90%,#fff)] p-4 text-sm sm:grid-cols-2 sm:gap-4 sm:p-5">
      <div>
        <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Date
        </dt>
        <dd className="mt-0.5 text-[var(--ink-soft)]">{src.date}</dd>
      </div>
      <div>
        <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Medium
        </dt>
        <dd className="mt-0.5 text-[var(--ink-soft)]">{src.medium}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Collection
        </dt>
        <dd className="mt-0.5 text-[var(--ink-soft)]">{src.collection}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Catalog
        </dt>
        <dd className="mt-0.5 font-mono text-xs text-[var(--ink-soft)]">
          {src.catalogNumber}
        </dd>
      </div>
    </dl>
  );
}

const modeTabs: { id: ViewMode; label: string }[] = [
  { id: "document", label: "Document only" },
  { id: "split", label: "Side-by-side reading" },
  { id: "interpretation", label: "Interpretation" },
];

type ArchiveEntryReaderProps = {
  entry: Entry;
  children?: ReactNode;
};

export function ArchiveEntryReader({ entry, children }: ArchiveEntryReaderProps) {
  const [mode, setMode] = useState<ViewMode>("document");

  const shortClose = getShortCloseReading(entry);
  const litTeaser = getLiteraryContextTeaser(entry);
  const analysisTeaser = getLiteraryAnalysisTeaser(entry);
  const transcription = getArchivalTranscription(entry);
  const doc = entry.document;
  const hasFacsimile = Boolean(doc);

  return (
    <article className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <header className="border-b border-[var(--border)] pb-8">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
          {entry.archivalSource.catalogNumber}
        </p>
        <h1 className="mt-3 font-serif text-3xl tracking-tight text-[var(--ink)] sm:text-4xl lg:text-5xl">
          {entry.title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg">
          {entry.summary}
        </p>
      </header>

      <div
        className="mt-8 flex flex-wrap gap-2 border-b border-[var(--border)] pb-6"
        role="tablist"
        aria-label="Reading layout"
      >
        {modeTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={mode === tab.id}
            onClick={() => setMode(tab.id)}
            className={`rounded-sm border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.18em] transition ${
              mode === tab.id
                ? "border-[var(--border-strong)] bg-[var(--ink)] text-[var(--paper)]"
                : "border-[var(--border)] bg-transparent text-[var(--ink-soft)] hover:border-[var(--border-strong)] hover:text-[var(--ink)]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {mode === "document" && (
        <div className="mt-10 space-y-10">
          <div className="mx-auto max-w-3xl">
            <MetadataBlock entry={entry} />
          </div>

          {hasFacsimile && doc ? (
            <div className="mx-auto max-w-4xl space-y-3">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Archival document
              </p>
              <p className="font-serif text-xl text-[var(--ink)]">
                {doc.label ?? "Facsimile"}
              </p>
              <ArchivalDocumentViewer
                document={doc}
                stackTranscript={Boolean(doc.transcriptBlocks?.length)}
                embedded
              />
            </div>
          ) : (
            <div className="mx-auto max-w-3xl border border-[var(--border)] border-dashed bg-[color-mix(in_oklab,var(--paper)_95%,#fff)] p-6">
              <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
                Archival trace (text)
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                No digitized facsimile is attached for this entry. The excerpt
                below stands in for the documentary record in this interface.
              </p>
              {transcription ? (
                <p className="mt-4 whitespace-pre-wrap border-l-2 border-[var(--accent-soft)] pl-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {transcription}
                </p>
              ) : null}
            </div>
          )}

          {doc?.kind === "pdf" && transcription ? (
            <section className="mx-auto max-w-3xl">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Selected excerpt
              </p>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[var(--ink-soft)]">
                {transcription}
              </p>
            </section>
          ) : null}

          {hasFacsimile &&
          doc &&
          !doc.transcriptBlocks &&
          doc.kind === "image" &&
          transcription ? (
            <section className="mx-auto max-w-3xl">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
                Transcription / excerpt
              </p>
              <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-[var(--ink-soft)]">
                {transcription}
              </p>
            </section>
          ) : null}

          <section className="mx-auto max-w-3xl">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Close reading
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] sm:text-base">
              {shortClose}
            </p>
          </section>

          <div className="flex justify-center pt-2">
            <button
              type="button"
              onClick={() => setMode("split")}
              className="border border-[var(--border-strong)] bg-[var(--ink)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
            >
              Open literary pairing — side by side
            </button>
          </div>
        </div>
      )}

      {mode === "split" && (
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:items-start lg:gap-10">
          <section
            aria-label="Archival materials"
            className="flex min-h-0 flex-col gap-5 border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_94%,#fff)] p-4 sm:p-6"
          >
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
              Primary · Archive
            </p>
            <h2 className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
              Document &amp; record
            </h2>
            <div className="max-h-[min(78vh,52rem)] min-h-0 space-y-5 overflow-y-auto pr-1">
              <MetadataBlock entry={entry} />
              {hasFacsimile && doc ? (
                <div>
                  <p className="font-serif text-lg text-[var(--ink)]">
                    {doc.label ?? "Facsimile"}
                  </p>
                  <div className="mt-3">
                    <ArchivalDocumentViewer
                      document={doc}
                      stackTranscript={Boolean(doc.transcriptBlocks?.length)}
                      embedded
                    />
                  </div>
                </div>
              ) : (
                <div className="border border-[var(--border)] border-dashed p-4 text-sm text-[var(--ink-soft)]">
                  <p className="font-mono text-[0.6rem] uppercase text-[var(--muted)]">
                    Text excerpt
                  </p>
                  <p className="mt-2 whitespace-pre-wrap">{transcription}</p>
                </div>
              )}
              {doc?.kind === "pdf" && (
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Selected excerpt
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {entry.excerpt}
                  </p>
                </div>
              )}
              {!doc?.transcriptBlocks && doc?.kind === "image" && (
                <div>
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                    Transcription / excerpt
                  </p>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-[var(--ink-soft)]">
                    {transcription}
                  </p>
                </div>
              )}
              <div>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Close reading (focal)
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">
                  {shortClose}
                </p>
              </div>
            </div>
          </section>

          <section
            aria-label="Literary pairing"
            className="flex min-h-0 flex-col gap-4 border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper-deep)_35%,var(--paper))] p-4 sm:p-6"
          >
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]">
              Companion · Literature
            </p>
            <h2 className="font-serif text-xl text-[var(--ink)] sm:text-2xl">
              Literary text
            </h2>
            <div className="max-h-[min(78vh,52rem)] min-h-0 overflow-y-auto pr-1">
              <LiteraryPairingBody pairing={entry.literaryPairing} compact />
              <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Context
                </p>
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  {litTeaser}
                </p>
              </div>
              <div className="mt-6 space-y-3 border-t border-[var(--border)] pt-6">
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Literary analysis
                </p>
                <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
                  {analysisTeaser}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  Switch to Interpretation for the full close reading and
                  juxtaposition essay.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {mode === "interpretation" && (
        <div className="mx-auto mt-10 max-w-3xl space-y-12">
          <section>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Provenance
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
              Context
            </h2>
            <div className="prose-room mt-4 text-[var(--ink-soft)]">
              <p>{entry.context}</p>
            </div>
          </section>
          <section>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Analysis
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
              Close reading
            </h2>
            <div className="prose-room mt-4 text-[var(--ink-soft)]">
              {entry.closeReading.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
          <section>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Juxtaposition
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
              Literary connection
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
              {entry.literaryConnection}
            </p>
          </section>
          <section>
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              Stakes
            </p>
            <h2 className="mt-2 font-serif text-2xl text-[var(--ink)]">
              Significance
            </h2>
            <p className="mt-4 leading-relaxed text-[var(--ink-soft)]">
              {entry.significance}
            </p>
          </section>
        </div>
      )}

      {entry.synthesis && (
        <section
          className="mx-auto mt-16 max-w-4xl border-t border-[var(--border)] pt-12"
          aria-label="Synthesis"
        >
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
            Synthesis
          </p>
          <h2 className="mt-3 font-serif text-2xl text-[var(--ink)] sm:text-3xl">
            Why this pairing; what juxtaposition reveals
          </h2>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                Why this pairing
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {entry.synthesis.whyPairing}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                What juxtaposition reveals
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {entry.synthesis.juxtaposition}
              </p>
            </div>
            <div>
              <h3 className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                What the archive alone cannot show
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                {entry.synthesis.beyondArchive}
              </p>
            </div>
          </div>
        </section>
      )}

      {children}
    </article>
  );
}
