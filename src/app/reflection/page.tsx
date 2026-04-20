import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Reflection",
  description: "Synthesis of findings and directions for future research.",
};

export default function ReflectionPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <PageIntro
        eyebrow="Closing frame"
        title="Reflection"
        lede="A short synthesis about the capstone project."
      />

      <div className="prose-room border-l-2 border-[var(--accent-soft)] pl-8 text-[var(--ink-soft)]">
        <p>
          This project takes the form of a digital archive that pairs historical
          documents with literary texts and close readings. The materials I work
          with include archival objects we encountered throughout the semester,
          such as letters, government documents, and ship logs, as well as
          literary works by Anne Bradstreet, Layli Long Soldier, Audre Lorde,
          and Rebecca Hall. I chose these materials because they represent
          different relationships to the archive. Some are official records
          produced by institutions, while others are literary interventions that
          respond to, challenge, or expand those records.
        </p>
        <p>
          The method of this project is both analytical and design-based. I
          conduct close readings of archival documents, paying attention not only
          to what they say, but how they say it, through language, structure,
          and omission. I then place these documents in conversation with
          literary texts that reinterpret or resist their framing. The digital
          format allows me to present these pairings interactively, so that users
          move between document and interpretation rather than encountering a
          fixed argument. I chose a website as my medium because it reflects my
          central interest in how form shapes understanding. Unlike a
          traditional essay, the digital interface allows the archive to feel
          navigable, fragmented, and relational, mirroring the way meaning is
          constructed through engagement rather than simply contained within the
          text.
        </p>
      </div>

      <p className="mt-12 text-center">
        <Link
          href="/archive"
          className="inline-flex border border-[var(--border-strong)] bg-[var(--ink)] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--paper)] transition hover:bg-[var(--accent)]"
        >
          Back to the archive
        </Link>
      </p>
    </div>
  );
}
