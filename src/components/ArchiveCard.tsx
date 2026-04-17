import Link from "next/link";
import { LiteraryPairSection } from "@/components/LiteraryPairSection";
import type { Entry } from "@/data/entries";

type ArchiveCardProps = {
  entry: Entry;
};

export function ArchiveCard({ entry }: ArchiveCardProps) {
  const { archivalSource } = entry;

  return (
    <Link
      href={`/archive/${entry.slug}`}
      className="group relative flex flex-col overflow-hidden border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_90%,#fff)] transition duration-300 hover:border-[var(--border-strong)] hover:shadow-[0_16px_50px_-28px_rgba(28,25,20,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
    >
      <div className="relative aspect-[4/3] bg-[var(--paper-deep)] bg-[linear-gradient(145deg,var(--highlight),var(--paper-deep))]">
        {entry.document?.kind === "image" ? (
          // eslint-disable-next-line @next/next/no-img-element -- public paths from entry data
          <img
            src={entry.document.src}
            alt={entry.document.alt ?? entry.title}
            className="absolute inset-0 h-full w-full object-cover object-top"
          />
        ) : null}
        <div className="relative flex h-full flex-col justify-between p-6">
          <span className="inline-block max-w-[12rem] font-serif text-xl leading-snug text-[var(--ink)] transition group-hover:text-[var(--accent)]">
            {entry.title}
          </span>
          <div className="flex flex-wrap items-end justify-between gap-2">
            {entry.document ? (
              <span className="rounded border border-[var(--border)] bg-[var(--paper)]/90 px-2 py-1 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-[var(--muted)]">
                {entry.document.kind === "pdf" ? "PDF facsimile" : "Image"}
              </span>
            ) : null}
            <span className="ml-auto font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[var(--muted)] opacity-0 transition duration-300 group-hover:opacity-100">
              {archivalSource.catalogNumber}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-3 p-6 pb-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--muted)]">
          {archivalSource.date} · {archivalSource.medium}
        </p>
        <p className="text-sm leading-relaxed text-[var(--ink-soft)]">
          {entry.summary}
        </p>
      </div>
      <LiteraryPairSection pairing={entry.literaryPairing} variant="gallery" />
      <p className="p-6 pt-4 font-mono text-xs text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4">
        Open entry
      </p>
    </Link>
  );
}
