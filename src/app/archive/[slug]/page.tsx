import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EntryLayout } from "@/components/EntryLayout";
import { entries, getEntryBySlug, type Entry } from "@/data/entries";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return entries.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) return {};
  return {
    title: entry.title,
    description: entry.summary,
  };
}

function PrevNext({ entry }: { entry: Entry }) {
  const i = entries.findIndex((e) => e.slug === entry.slug);
  const prev = i > 0 ? entries[i - 1] : undefined;
  const next = i < entries.length - 1 ? entries[i + 1] : undefined;

  return (
    <nav
      className="mt-14 flex flex-col gap-4 border-t border-[var(--border)] pt-10 sm:flex-row sm:justify-between"
      aria-label="Pagination"
    >
      {prev ? (
        <Link
          href={`/archive/${prev.slug}`}
          className="group max-w-sm font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]"
        >
          <span className="block text-[0.6rem]">Previous</span>
          <span className="mt-1 block font-serif text-base normal-case tracking-normal text-[var(--ink)] group-hover:text-[var(--accent)]">
            {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/archive/${next.slug}`}
          className="group max-w-sm text-right font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)] sm:ml-auto"
        >
          <span className="block text-[0.6rem]">Next</span>
          <span className="mt-1 block font-serif text-base normal-case tracking-normal text-[var(--ink)] group-hover:text-[var(--accent)]">
            {next.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
}

export default async function ArchiveEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);
  if (!entry) notFound();

  return (
    <EntryLayout entry={entry}>
      <PrevNext entry={entry} />
      <p className="mt-10 text-center">
        <Link
          href="/archive"
          className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] underline decoration-[var(--border)] underline-offset-[6px] hover:text-[var(--ink)]"
        >
          Return to gallery
        </Link>
      </p>
    </EntryLayout>
  );
}
