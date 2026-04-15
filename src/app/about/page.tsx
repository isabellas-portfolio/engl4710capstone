import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "About",
  description: "Methodological notes on description, data ethics, and interpretive restraint.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
      <PageIntro
        eyebrow="Methodology"
        title="About this project"
        lede="The site models a modest digital humanities workflow: stable identifiers, human-readable description, and transparency about what cannot be known from the digital surrogate alone."
      />

      <div className="prose-room space-y-10 text-[var(--ink-soft)]">
        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Description as argument
          </h2>
          <p className="mt-4">
            Catalog entries treat material facts—support, ink behavior, binding
            residue—as interpretive prompts. The goal is not to exhaust the
            object but to show how careful language can hold uncertainty without
            dissolving it into spectacle.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Data and ethics
          </h2>
          <p className="mt-4">
            Replace placeholder provenance with institutional permissions,
            community consultation where appropriate, and a clear statement of
            how derivatives may be reused. Minimal sites age better when ethics
            are visible in the interface—not only in a PDF appendix.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Technical shape
          </h2>
          <p className="mt-4">
            Built with Next.js, TypeScript, and Tailwind CSS, the project keeps
            routing simple and content portable. Entries live as structured data
            so you can export to TEI, JSON-LD, or a static site generator without
            rewriting prose.
          </p>
        </section>
      </div>
    </div>
  );
}
