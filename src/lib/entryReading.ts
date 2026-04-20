import type { Entry } from "@/data/entries";

/** Plain transcription or surrogate text for the archival side */
export function getArchivalTranscription(entry: Entry): string | null {
  const blocks = entry.document?.transcriptBlocks;
  if (blocks?.length) {
    return blocks.map((b) => b.text).join("\n\n");
  }
  const t = entry.excerpt.trim();
  return t.length > 0 ? t : null;
}

/** First paragraph only — focal close reading beside the document */
export function getShortCloseReading(entry: Entry): string {
  return entry.closeReading[0] ?? "";
}

/** Short framing for the literary column (not the full provenance essay) */
export function getLiteraryContextTeaser(entry: Entry, maxLength = 380): string {
  const c = entry.context.trim();
  if (c.length <= maxLength) return c;
  const cut = c.slice(0, maxLength);
  const last = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf(" "));
  return (last > 80 ? cut.slice(0, last) : cut).trim() + "…";
}

/** Abbreviated analysis for dense split view; full text still in Interpretation mode */
export function getLiteraryAnalysisTeaser(entry: Entry, maxLength = 720): string {
  const c = entry.literaryConnection.trim();
  if (c.length <= maxLength) return c;
  const cut = c.slice(0, maxLength);
  const last = cut.lastIndexOf(" ");
  return (last > 60 ? cut.slice(0, last) : cut).trim() + "…";
}
