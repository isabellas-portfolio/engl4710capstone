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
        lede="This site models a digital humanities workflow in which the reader navigates between a document and a literary text, with interpretation written in."
      />

      <div className="prose-room space-y-10 text-[var(--ink-soft)]">
        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Description as argument
          </h2>
          <div className="mt-4 space-y-4">
            <p>
              In this project, description is not a neutral wrapper around an
              object. How a record is titled, dated, sourced, and summarized
              already steers attention, toward what counts as fact, what counts as
              context, and what is left implicit. The site makes that layer
              visible, metadata and paraphrase sit beside facsimiles and
              transcriptions so that “what the document is” and “how it is
              framed for a reader” can be read together.
            </p>
            <p>
              Close reading extends that logic. When interpretation is written
              into the interface, alongside the document and the literary
              pairing, it becomes part of the same argumentative surface, not an
              afterthought appended at the end. The goal is to show that
              description, transcription, and analysis are continuous acts of
              selection through which an archive is made legible.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Data and ethics
          </h2>
          <div className="mt-4 space-y-4">
            <p>
              The materials here are treated as historical evidence, not as
              content to be mined casually. Names, legal language, and images
              that derive from coercion or surveillance are presented with
              restraint, excerpts are selective, facsimiles are used to support
              interpretation rather than spectacle, and the site does not pretend
              to reproduce an entire archive, only a curated set of fragments
              with clear provenance.
            </p>
            <p>
              Pairing documents with literary texts is an ethical choice as well
              as a methodological one. Literature can refuse the record’s
              grammar, name what was excluded, or re-embed documents in embodied
              experience; it can also risk overwriting the people the record
              reduces to lines. This project tries to hold both possibilities in
              view: the literary text as companion and intervention, and the
              obligation to read the archive without flattening the violence or
              the agency it contains.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-[var(--ink)]">
            Technical shape
          </h2>
          <p className="mt-4">
            Built with Next.js, TypeScript, and Tailwind CSS, the project keeps
            routing simple. Entries live as structured data.
          </p>
        </section>
      </div>
    </div>
  );
}
