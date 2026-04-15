type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede: string;
};

export function PageIntro({ eyebrow, title, lede }: PageIntroProps) {
  return (
    <div className="mb-12 border-b border-[var(--border)] pb-10">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.35em] text-[var(--muted)]">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-[var(--ink)] sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {lede}
      </p>
    </div>
  );
}
