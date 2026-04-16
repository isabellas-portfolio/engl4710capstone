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
          coming soon...
        </p>
        <p>
          ...
        </p>
        <p>
          ...
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
