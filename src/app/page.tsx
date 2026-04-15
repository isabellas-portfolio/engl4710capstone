import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section
        className="border-b border-[var(--border)] bg-[linear-gradient(165deg,color-mix(in_oklab,var(--highlight)_65%,#fff)_0%,var(--paper)_45%,var(--paper-deep)_100%)]"
        aria-labelledby="hero-title"
      >
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
            Welcome
          </p>
          <h1
            id="hero-title"
            className="mt-5 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight text-[var(--ink)] sm:text-6xl md:text-7xl"
          >
            Digitizing the Archive
          </h1>
          <p className="mt-6 max-w-2xl font-serif text-xl leading-relaxed text-[var(--ink)] sm:text-2xl">
            Archival documents paired with literary texts: an interactive
            reading room.
          </p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)] sm:text-xl">
            Welcome to my Capstone Project which pairs archival documents with
            literary texts inviting my readers to move between the material and
            the stories they complete.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/archive"
              className="inline-flex items-center justify-center border border-[var(--border-strong)] bg-[var(--ink)] px-8 py-3.5 font-mono text-xs uppercase tracking-[0.22em] text-[var(--paper)] shadow-[0_2px_0_rgba(28,25,20,0.08)] transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Enter the archive
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-2 py-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--ink-soft)] underline decoration-[var(--border-strong)] decoration-1 underline-offset-[6px] transition hover:text-[var(--ink)]"
            >
              How we work
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:items-start">
          <div>
            <h2 className="font-serif text-2xl text-[var(--ink)] sm:text-3xl">
              About the project
            </h2>
            <div className="prose-room mt-6 max-w-xl text-[var(--ink-soft)]">
              <p>
                This site stages a deliberately small collection of records and
                readings. Each entry connects an archival fragment to a literary
                piece from ENGL 4710 that helps frame what the document asks of
                a reader.
              </p>
              <p>
                The interface is designed as a reading room: you can linger on
                one object, follow a catalog number into the next, and return to
                the same passage with a different question.
              </p>
            </div>
          </div>

          <aside
            className="border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_88%,#fff)] p-8 shadow-[0_1px_0_rgba(28,25,20,0.06)]"
            aria-label="Using this archive"
          >
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.3em] text-[var(--muted)]">
              In this room
            </p>
            <ul className="mt-6 space-y-5 text-sm leading-relaxed text-[var(--ink-soft)]">
              <li className="border-l-2 border-[var(--accent-soft)] pl-4">
                Browse the gallery to move between paired documents and literary
                contexts.
              </li>
              <li className="border-l-2 border-[var(--border)] pl-4">
                Hover tiles to surface catalog numbers—the same quiet cue you
                might find on a physical case label.
              </li>
              <li className="border-l-2 border-[var(--border)] pl-4">
                Read the reflection for synthesis, limits, and next steps for a
                larger corpus.
              </li>
            </ul>
          </aside>
        </div>

        <section
          className="mt-20 border-t border-[var(--border)] pt-16"
          aria-labelledby="argument-heading"
        >
          <h2
            id="argument-heading"
            className="font-serif text-2xl text-[var(--ink)] sm:text-3xl"
          >
            Central argument
          </h2>
          <div className="prose-room mt-6 max-w-3xl text-lg leading-[1.75] text-[var(--ink-soft)]">
            <p>
              No archive speaks for itself. Records arrive partial, catalogued
              under habits and hierarchies that already decide what counts as
              worth keeping. To use an archive responsibly is to interpret, to
              notice absences, to read against the grain, and to refuse the
              fantasy of innocent description.
            </p>
            <p>
              Digital interfaces can either rush that work or support it. This
              project argues that thoughtful design, clear metadata, humane
              pacing, and room for literary juxtaposition can make archival
              fragments easier to approach without flattening them. The screen
              aids in understanding with documents and texts laid side by side
              for readers who may never enter the physical space they exist in
              but still deserve to engage with them.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-[var(--border)] pt-14">
          <h2 className="font-serif text-2xl text-[var(--ink)]">Explore</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-3">
            {[
              {
                href: "/archive",
                title: "Archive",
                text: "Browse catalogued objects and their paired contexts.",
              },
              {
                href: "/about",
                title: "About",
                text: "Methodology, description, and interpretive restraint.",
              },
              {
                href: "/reflection",
                title: "Reflection",
                text: "Synthesis and openings for future work.",
              },
            ].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group block h-full border border-[var(--border)] bg-[color-mix(in_oklab,var(--paper)_92%,#fff)] p-6 transition hover:border-[var(--border-strong)] hover:shadow-[0_12px_40px_-24px_rgba(28,25,20,0.35)]"
                >
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-[var(--muted)]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)] group-hover:text-[var(--ink)]">
                    {item.text}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
