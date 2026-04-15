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
        lede="A short synthesis suited to capstone review: what the reading room model clarifies, where it strains, and how you might scale it."
      />

      <div className="prose-room border-l-2 border-[var(--accent-soft)] pl-8 text-[var(--ink-soft)]">
        <p>
          Taken together, the entries suggest that circulation leaves durable
          traces—marginalia, administrative lists, corrected impressions—that
          can be read as social texts when description stays close to the
          object.
        </p>
        <p>
          The limitation is familiar: digitization selects for legibility and
          can flatten depth. Future work might pair these entries with full
          diplomatic editions, IIIF manifests for comparative viewing, or oral
          histories where institutional memory survives outside the catalog.
        </p>
        <p>
          If this archive is a room, it is one with doors. The next step is not
          more decoration but a clearer account of whose labor built the
          collections you cite—and how readers will be invited into the
          conversation on fair terms.
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
