import Link from "next/link";

const nav = [
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
  { href: "/reflection", label: "Reflection" },
] as const;

export function Navbar() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--paper)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
            Digital humanities · capstone
          </p>
          <Link
            href="/"
            className="mt-2 block font-serif text-2xl tracking-tight text-[var(--ink)] transition-colors hover:text-[var(--accent)] sm:text-3xl"
          >
            Digitizing the Archive
          </Link>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--muted)]">
            Archival documents paired with literary texts,  an interactive reading
            room.
          </p>
        </div>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.2em]">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-[var(--ink-soft)] underline decoration-[var(--border-strong)] decoration-1 underline-offset-4 transition hover:text-[var(--ink)] hover:decoration-[var(--accent)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
