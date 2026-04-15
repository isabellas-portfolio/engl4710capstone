import type { Metadata } from "next";
import { ArchiveCard } from "@/components/ArchiveCard";
import { PageIntro } from "@/components/PageIntro";
import { entries } from "@/data/entries";

export const metadata: Metadata = {
  title: "Archive",
  description: "Gallery of catalogued objects with material description and interpretive notes.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <PageIntro
        eyebrow="Collection"
        title="Archive gallery"
        lede="Each tile pairs an archival record with a literary excerpt. Hover to surface the catalog number; open an entry for the full juxtaposition."
      />

      <ul className="grid gap-8 sm:grid-cols-2">
        {entries.map((entry) => (
          <li key={entry.slug}>
            <ArchiveCard entry={entry} />
          </li>
        ))}
      </ul>
    </div>
  );
}
