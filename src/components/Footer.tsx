export function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--paper-deep)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted)]">
          Compiled for scholarly circulation · 2026
        </p>
        <p className="max-w-md text-sm text-[var(--muted)]">
          Made by Isabella Iype, Spring 2026.
        </p>
      </div>
    </footer>
  );
}
