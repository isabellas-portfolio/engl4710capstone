import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
        404
      </p>
      <h1 className="mt-4 font-serif text-3xl text-[var(--ink)]">Not found</h1>
      <p className="mt-4 text-[var(--ink-soft)]">
        That catalog number does not resolve to an entry in this room.
      </p>
      <Link
        href="/archive"
        className="mt-8 inline-block font-mono text-xs uppercase tracking-[0.2em] text-[var(--accent)] underline decoration-[var(--border-strong)] underline-offset-4"
      >
        Return to the archive
      </Link>
    </div>
  );
}
