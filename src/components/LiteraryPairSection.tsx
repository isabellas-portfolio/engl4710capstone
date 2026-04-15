import type { LiteraryPairing } from "@/data/entries";

type LiteraryPairSectionProps = {
  pairing: LiteraryPairing;
  /** Tighter layout inside gallery cards (avoids nested section inside links) */
  variant?: "gallery" | "entry";
};

export function LiteraryPairSection({
  pairing,
  variant = "entry",
}: LiteraryPairSectionProps) {
  const isGallery = variant === "gallery";

  const shellClass = isGallery
    ? "border-t border-[var(--border)] bg-[color-mix(in_oklab,var(--paper-deep)_55%,var(--paper))] px-6 py-5"
    : "mt-12 border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper-deep)_40%,var(--paper))] p-8";

  const labelClass = isGallery
    ? "font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[var(--muted)]"
    : "font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]";

  const content = (
    <>
      {isGallery ? (
        <p className={labelClass}>Literary pairing</p>
      ) : (
        <h2 id="literary-pair-heading" className={labelClass}>
          Literary pairing
        </h2>
      )}
      <p
        className={`mt-3 font-serif text-base text-[var(--ink)] ${isGallery ? "leading-snug" : "text-lg"}`}
      >
        <cite className="font-semibold not-italic">{pairing.workTitle}</cite>
        {pairing.author ? (
          <>
            <span className="text-[var(--muted)]"> · </span>
            <span className="text-[var(--ink-soft)]">{pairing.author}</span>
          </>
        ) : null}
        {pairing.sourceNote ? (
          <span className="mt-1 block font-sans text-sm font-normal text-[var(--muted)]">
            {pairing.sourceNote}
          </span>
        ) : null}
      </p>
      {pairing.excerptIsParaphrase ? (
        <div
          className={`mt-4 border-l-2 border-[var(--accent-soft)] pl-4 font-serif leading-relaxed text-[var(--ink-soft)] not-italic ${isGallery ? "line-clamp-5 text-sm" : "text-base"}`}
        >
          <p>{pairing.quotedExcerpt}</p>
        </div>
      ) : (
        <blockquote
          className={`mt-4 border-l-2 border-[var(--accent-soft)] pl-4 font-serif italic leading-relaxed text-[var(--ink-soft)] ${isGallery ? "line-clamp-5 text-sm" : "text-base"}`}
        >
          <p>&ldquo;{pairing.quotedExcerpt}&rdquo;</p>
        </blockquote>
      )}
    </>
  );

  if (isGallery) {
    return (
      <div className={shellClass} role="group" aria-label="Literary pairing">
        {content}
      </div>
    );
  }

  return (
    <section className={shellClass} aria-labelledby="literary-pair-heading">
      {content}
    </section>
  );
}
