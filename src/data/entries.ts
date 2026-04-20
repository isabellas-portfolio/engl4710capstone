import { blackPrinceTranscriptBlocks } from "@/data/blackPrinceTranscript";

export type ArchivalSource = {
  date: string;
  medium: string;
  collection: string;
  catalogNumber: string;
};

/** Paragraph or excerpt line for display beside a facsimile */
export type TranscriptBlock = {
  kind: "prose" | "excerpt";
  text: string;
};

/** Digitized facsimile served from `public/` (path begins with `/`) */
export type ArchivalDocument = {
  kind: "pdf" | "image";
  src: string;
  label?: string;
  alt?: string;
  caption?: string;
  /** Readable transcript shown with image (typically `kind: "image"`) */
  transcriptBlocks?: TranscriptBlock[];
};

/** The literary work and quoted passage paired with the record */
export type LiteraryPairing = {
  workTitle: string;
  author: string;
  sourceNote?: string;
  quotedExcerpt: string;
  /** When true, excerpt is shown as descriptive prose (no quotation marks) */
  excerptIsParaphrase?: boolean;
};

/** Optional three-part synthesis for the reading-room footer */
export type EntrySynthesis = {
  whyPairing: string;
  juxtaposition: string;
  beyondArchive: string;
};

export type Entry = {
  title: string;
  slug: string;
  archivalSource: ArchivalSource;
  /** Optional facsimile (PDF or image) for on-screen viewing */
  document?: ArchivalDocument;
  literaryPairing: LiteraryPairing;
  /** Short hook for gallery cards */
  summary: string;
  /** Provenance, material situation, how the record survives */
  context: string;
  /** Curatorial / material vignette of the object */
  excerpt: string;
  /** Sustained analysis of the archival text or image */
  closeReading: string[];
  /** How the literary passage reframes or answers the document */
  literaryConnection: string;
  /** Why the pairing matters for interpretation or public DH */
  significance: string;
  /** Synthesis prompts answered in the reading-room footer */
  synthesis?: EntrySynthesis;
};

export const entries: Entry[] = [
  {
    slug: "bradstreet-household-cluster-a",
    title: "Bradstreet Household, Cluster A",
    archivalSource: {
      date: "1662–1666",
      medium: "Manuscript poem; court record; legal archive",
      collection:
        "Massachusetts colonial archives; Essex County Quarterly Court Records",
      catalogNumber: "ESSEX-QUARTERLY-BRADSTREET-1660",
    },
    document: {
      kind: "image",
      src: "/archive/documents/bradstreet-court-record-page.png",
      label: "Essex County court record page (William Young entry highlighted)",
      alt: "Printed court records page showing references to William Young, with highlighted lines near the center of the page.",
      caption:
        "Digitized court-record page associated with the Bradstreet household context; includes highlighted references for readability.",
    },
    literaryPairing: {
      workTitle: "Here Follows Some Verses Upon the Burning of Our House",
      author: "Anne Bradstreet",
      sourceNote: "from The Tenth Muse Lately Sprung Up in America, 1678",
      quotedExcerpt:
        "And when I could no longer look, I blest His name that gave and took…",
    },
    summary:
      "Anne Bradstreet, ‘Here Follows Some Verses Upon the Burning of Our House’ — close reading in relation to court records of William Young, as discussed by Christy Pottroff. A domestic lyric of loss and spiritual reflection is read alongside a court record documenting the punishment and disappearance of an indentured servant in the Bradstreet household, revealing contrasting archival traces of desire, discipline, and power.",
    context:
      "Anne Bradstreet’s poem, copied from a loose paper after the burning of her home in 1666, reflects on material loss through a Puritan spiritual framework. The poem survives as part of a literary archive that preserves Bradstreet’s voice, interiority, and emotional life. At the same time, the Bradstreet household appears in legal archives through the Essex County court records, which document the case of William Young, an indentured servant accused of sexual misconduct. As analyzed by Christy Pottroff, these records reveal how systems of discipline and labor structured the lives of those within the same domestic space. These materials exist in separate archival forms, poetry and legal record, yet refer to overlapping histories that are rarely read together.",
    excerpt:
      "Bradstreet: “And when I could no longer look,\nI blest His name that gave and took…” Court record: “He may have been whipped once, but not twice… [he] ran away and forfeited his bond…”",
    closeReading: [
      "Bradstreet’s poem transforms the destruction of her home into a moment of spiritual reflection. The loss of material goods is reframed through religious submission, as she relinquishes attachment to earthly possessions in favor of divine order. The poem centers an interior experience, grief, acceptance, and faith, rendered through controlled, meditative language.",
      "In contrast, the court record of William Young offers a starkly different kind of archive. His presence is mediated entirely through legal language, accusation, punishment, disappearance. Where Bradstreet’s voice is preserved and elevated, Young’s is absent. His experience enters the archive only as a problem to be managed, his actions framed as deviance, his punishment recorded as procedure.",
      "Reading these documents together reveals the uneven distribution of voice within the archive. Desire, for Bradstreet, is sanctified within marriage and expressed through poetry; for Young, it is criminalized and recorded as transgression. The same household produces radically different archival traces depending on one’s position within it.",
      "This entry employs a method of diagonal reading, reading across archival forms and genres to uncover relationships that are not explicitly documented. Rather than treating the poem and the court record as separate, this approach places them in tension, allowing each to illuminate what the other obscures. Bradstreet’s poem does not mention Young, and the court record does not acknowledge her, yet both are shaped by the same domestic and social structures. Through diagonal reading, the archive expands beyond isolated documents into a network of partial, intersecting histories. What emerges is a recognition of the archive’s fragmentation and its embedded hierarchies of visibility.",
    ],
    literaryConnection:
      "Bradstreet’s poem elevates personal loss into spiritual meaning, preserving her voice within the literary canon. When read alongside the court record discussed by Christy Pottroff, however, the poem becomes part of a larger archival landscape shaped by power. The domestic space that the poem mourns is also a site of labor, discipline, and surveillance. While Bradstreet transforms her experience into language that endures, Young’s experience is reduced to a brief legal trace, ending in disappearance. The juxtaposition reveals how literary and legal archives operate differently, one preserves interiority, the other enforces order. Diagonal reading makes visible these asymmetries, suggesting that understanding the archive requires moving between forms, voices, and silences.",
    significance:
      "This entry demonstrates how archives do not simply record history, but structure whose experiences are visible and whose are erased. By pairing Bradstreet’s poem with legal records from the same household, the project highlights how literary expression and institutional documentation produce unequal forms of presence. In a digital interface, this pairing allows users to navigate between these materials, making visible the gaps and tensions that exist within the archive. The method of diagonal reading becomes a tool for uncovering hidden relationships and for questioning the completeness of any single document. Ultimately, this entry reinforces the project’s broader claim, that archives are fragmented and shaped by power, and that meaning emerges through the act of reading across their divisions.",
    synthesis: {
      whyPairing:
        "Placing Bradstreet’s poem beside the court record makes legible how the same household produced radically different traces—lyric interiority versus legal disappearance.",
      juxtaposition:
        "The juxtaposition exposes asymmetry: one voice is preserved and elevated in print; another is reduced to procedure and disappearance.",
      beyondArchive:
        "Neither document alone names the whole story; diagonal reading is required to perceive overlapping structures of domestic power the records do not explicitly link.",
    },
  },
  {
    slug: "letter-william-craft-theodore-parker",
    title: "Letter from William Craft to Theodore Parker, Cluster A",
    archivalSource: {
      date: "January 24, 1851",
      medium:
        "Ink on paper (handwritten letter; digitized microfilm scan)",
      collection:
        "Massachusetts Historical Society; digitized for public access",
      catalogNumber: "MHS-CRAFT-PARKER-1851",
    },
    document: {
      kind: "pdf",
      src: "/archive/documents/william-craft-1851.pdf",
      label: "Letter from William Craft to Theodore Parker (digitized scan)",
      caption:
        "Microfilm facsimile placed in the public site folder; open in a new tab if your browser does not show the embedded viewer.",
    },
    literaryPairing: {
      workTitle: "Running a Thousand Miles for Freedom",
      author: "William and Ellen Craft",
      sourceNote: "Published 1860",
      quotedExcerpt:
        "A slave is one who is in the power of a master to whom he belongs… he can do nothing, possess nothing, nor acquire anything but what must belong to his master.",
    },
    summary:
      "William Craft letter — close reading in relation to Running a Thousand Miles for Freedom. A private letter becomes a site of political argument: gratitude, refusal, and moral clarity converge as Craft thanks Theodore Parker while rejecting the purchase of his family’s freedom.",
    context:
      "This letter was written by William Craft while in exile following his escape from slavery. Addressed to abolitionist Theodore Parker, it participates in a network of antislavery correspondence, yet resists one of abolitionism’s common practices, raising funds to purchase enslaved individuals’ freedom. Though originally private, its preservation and digitization reposition it as a public historical document, inviting new forms of interpretation.",
    excerpt:
      "…we consider that they are doing us great injustice, by recognizing us as property, and being willing to pay our oppressors…",
    closeReading: [
      "The letter’s material fragility, faint ink, uneven cursive, and the visual grain of microfilm, mirrors the conceptual tension it carries. The handwriting requires slow, deliberate reading, showing the weight of the argument itself. Craft’s language moves carefully from gratitude (“great obligations”) to refusal, marking a shift from politeness to principle. The phrase “recognizing us as property” reframes the issue of slavery at a foundational level. The injustice lies in bondage and in the conceptual framework that allows a human being to be treated as exchangeable.",
      "Unlike the expansive narrative of Running a Thousand Miles for Freedom, the letter is compressed and immediate. It isolates a single ethical claim and insists upon it. The physical constraints of the letter, its limited space, its dense handwriting, intensify this effect, producing a text that feels intimate and uncompromising. Digitization preserves the document, blurring, ink bleed, and uneven contrast, which becomes part of its interpretive force, emphasizing the labor required to read and understand it.",
    ],
    literaryConnection:
      "The memoir expands what the letter condenses. Where the narrative traces the lived experience of being treated as “chattel,” the letter isolates and rejects the underlying logic of that condition. The legal language of ownership in the memoir, “belongs,” “possess nothing”, is given new urgency by the letter’s refusal to accept freedom through purchase. Together, they reveal a consistent argument: that the violence of slavery is inseparable from the idea that a person can be owned at all.",
    significance:
      "This entry demonstrates how archival documents can sharpen and even transform the interpretation of literary texts. The letter reframes Running a Thousand Miles for Freedom as not only a narrative of escape, but as a philosophical rejection of property itself. By presenting the letter alongside the memoir, the archive highlights how different forms, private correspondence and published narrative, participate in the same intellectual and political project. It also shows how digitization, by preserving material traces like handwriting and degradation, allows readers to encounter historical arguments as embodied, situated acts rather than abstract ideas.",
    synthesis: {
      whyPairing:
        "The private letter refuses purchase of freedom while the memoir names the logic of ownership—together they show continuity between intimate refusal and printed argument.",
      juxtaposition:
        "Side by side, bureaucratic coercion in the letter meets the memoir’s legal vocabulary of “belongs,” sharpening how property thinking shapes both forms.",
      beyondArchive:
        "The letter’s material constraints, grain and handwriting, carry argument the printed memoir cannot duplicate; the archive’s texture is part of meaning.",
    },
  },
  {
    slug: "apology-resolution-cluster-b",
    title: "Apology Resolution, Cluster B",
    archivalSource: {
      date: "2009",
      medium: "Printed Congressional resolution; legislative text",
      collection: "U.S. Congressional Record; digitized federal archive",
      catalogNumber: "USCR-APOLOGY-2009",
    },
    document: {
      kind: "pdf",
      src: "/archive/documents/congressional-apology-2009.pdf",
      label: "U.S. Congressional apology to Native peoples (digitized resolution)",
      caption:
        "Digitized facsimile of the joint resolution text; open in a new tab if the embedded viewer does not load.",
    },
    literaryPairing: {
      workTitle: "Whereas",
      author: "Layli Long Soldier",
      sourceNote: "Graywolf Press, 2017",
      quotedExcerpt:
        "I read a document / not to understand it / but to feel it / as language.",
    },
    summary:
      "United States Congressional Apology to Native Peoples — close reading in relation to Whereas. A formal apology unfolds through dense legal language, acknowledging “official depredations” while embedding disclaimers that limit accountability and foreclose reparative action.",
    context:
      "This joint resolution, passed by the U.S. Congress in 2009, was intended to formally apologize to Native American tribes for centuries of violence, displacement, and harmful federal policies. Yet the apology was not publicly announced by the president at the time of its passing, and it appears within a defense appropriations bill rather than as a standalone act. Its placement and phrasing complicate its function: it exists as both acknowledgment and evasion, recognition and containment.",
    excerpt:
      "“Whereas the United States, acting through the Congress… recognizes the special legal and political relationship Indian tribes have with the United States…” “…nothing in this Joint Resolution… authorizes or supports any claim against the United States…”",
    closeReading: [
      "The resolution is structured through a series of “Whereas” clauses, a form that accumulates acknowledgment without arriving at action. The repetition creates the illusion of movement, each clause layering harm upon harm, yet the document ultimately redirects this momentum into legal closure. Language such as “recognizes” and “acknowledges” gestures toward accountability while remaining non-performative. It names violence without materially addressing it.",
      "The final disclaimer operates as a quiet reversal. After cataloging centuries of dispossession, the text explicitly denies any legal consequence, foreclosing the possibility of restitution. In this way, the apology becomes self-contained: it absorbs critique while neutralizing its implications.",
      "The density and abstraction of the language further distance the reader from the lived realities it references. Harm is rendered as policy, violence as “depredations,” and responsibility as diffuse. What appears as an official record of remorse instead functions as a controlled narrative, one that manages how history is acknowledged and limits how it can be acted upon.",
    ],
    literaryConnection:
      "Long Soldier takes the language of the resolution as both material and subject, breaking apart its form to expose its limitations. Where the government document relies on continuity and control, her poetry introduces fragmentation, spacing, and interruption. She resists the passive flow of “Whereas” by isolating words, reordering phrases, and refusing the closure that the original text enforces. In doing so, she transforms the resolution from a fixed legal artifact into something unstable and contested. Her work reveals that meaning does not reside in the document itself, but emerges through how it is read, felt, and rearticulated. The poem does not simply respond to the archive, it actively reworks it, insisting on presence where the original text obscures it.",
    significance:
      "This entry demonstrates how official archives, particularly those produced by state power, can obscure as much as they reveal. By pairing the Congressional resolution with Long Soldier’s poetic intervention, the project highlights how literary form can expose the limits of bureaucratic language and reassert marginalized perspectives. In a digital interface, this pairing allows users to move between document and interpretation, making visible the gap between acknowledgment and accountability. The archive is no longer presented as neutral or complete, but as a site of negotiation, one that requires active reading to uncover its contradictions.",
    synthesis: {
      whyPairing:
        "Formal government “Whereas” prose and Long Soldier’s broken lines show the same text as both closure and raw material for resistance.",
      juxtaposition:
        "The side-by-side view makes form visible: continuous legislative syntax versus spacing, interruption, and feeling-as-language.",
      beyondArchive:
        "The state document cannot show what it costs to read it; the poem insists on embodied response where the record claims neutrality.",
    },
  },
  {
    slug: "black-prince-logbook-cluster-d",
    title: "Black Prince Logbook, Cluster C",
    archivalSource: {
      date: "1762–1763",
      medium: "Handwritten ship log; maritime record",
      collection:
        "Logbook of the Bristol slave ship Black Prince; transatlantic slave trade archives",
      catalogNumber: "BP-LOG-1762-63",
    },
    document: {
      kind: "image",
      src: "/archive/documents/black-prince-logbook-page.png",
      label: "Page from the Black Prince log (facsimile)",
      alt: "Handwritten logbook page: heading ‘Transactions on board the Black Prince lying in Annamaboe Road,’ with dates in a left column and dense cursive entries for each day.",
      caption:
        "Digitized facsimile of a log page (PNG). Source image may include rights markings from the holding institution. Transcript at right (or below on small screens) is editorial prose and quoted log matter for legibility, not a diplomatic edition of the manuscript.",
      transcriptBlocks: [...blackPrinceTranscriptBlocks],
    },
    literaryPairing: {
      workTitle: "Wake",
      author: "Rebecca Hall",
      sourceNote: "Simon & Schuster, 2021",
      quotedExcerpt:
        "Begins from archival fragments like the Black Prince logbook to imagine lives and resistance the official record cannot fully preserve.",
      excerptIsParaphrase: true,
    },
    summary:
      "Logbook of the Black Prince — close reading in relation to Wake. A ship captain’s log records the daily operations of a slave voyage, reducing violence, resistance, and death to routine entries within the language of trade and discipline.",
    context:
      "The Black Prince, a Bristol slave ship, departed in April 1762 for the West African coast, where enslaved people were purchased over several months before being transported to Antigua. The logbook, kept by Captain William Miller, documents the voyage in daily entries, recording transactions, punishments, illness, and uprisings. As with many maritime records of the transatlantic slave trade, the log prioritizes the concerns of the ship’s operators: cargo, discipline, and profit. Enslaved people are recorded as units of trade, and acts of resistance are framed as disruptions to be contained. The document remains intact as an archival artifact, preserving a continuous record of the voyage while offering only a partial account of the lives it documents.",
    excerpt:
      "“17 July … gave an impertinent answer… I put him in Irons… on Bread and Water…” “22 February … found the Slaves was intending to rise… got them quieted…” “7 March … Died the Ring Leader of the Insurrection…” “27 April … Many of the Slaves will not eat…” “7 May … arrived… with 394 of the original 438 slaves still alive…”",
    closeReading: [
      "The logbook’s structure produces a rhythm in which violence is normalized through repetition. Entries move quickly from trade to punishment to illness, flattening distinctions between them. Acts of resistance, “intending to rise,” “broke their irons”, are recorded in the same tone as weather conditions or cargo updates, reducing moments of collective struggle to operational disruptions.",
      "Language functions to control and contain meaning. Terms such as “correction,” “quieted,” and “order” frame punishment as necessary discipline, while death is recorded with minimal affect: “Died one girl,” “Died the Ring Leader.” The absence of names further erases individuality, transforming people into interchangeable figures within a system of extraction.",
      "At the same time, traces of resistance persist within the record. Repeated references to uprisings, refusal to eat, and attempts to escape suggest ongoing acts of defiance that exceed the log’s attempt at containment. These moments appear only as interruptions in the captain’s narrative, but their recurrence reveals a different story, one of sustained resistance rather than isolated incidents.",
      "The log preserves these events only insofar as they affect the voyage. What is missing are the perspectives, motivations, and experiences of the enslaved individuals themselves. The archive captures the outline of violence and resistance, but not its meaning.",
    ],
    literaryConnection:
      "Wake begins from archival fragments like the Black Prince logbook, records that acknowledge events such as uprisings but render them incomplete and impersonal. Hall takes these traces as points of departure, using narrative and visual form to imagine the lives and experiences that the archive cannot fully preserve. Where the logbook compresses resistance into brief entries, Wake expands it into sustained narrative, restoring depth, agency, and emotion. The graphic novel format is particularly significant: images allow Hall to depict what the archive leaves undescribed, creating presence where the record offers only absence. Rather than treating the archive as authoritative, Hall exposes its limitations. The logbook’s gaps, its lack of names, voices, and interiority, become spaces for interpretation. In this way, Wake does not simply supplement the archive but challenges its structure, demonstrating that historical understanding requires more than documentation; it requires imaginative reconstruction.",
    significance:
      "This entry highlights how archives of the transatlantic slave trade both preserve and distort history. The Black Prince logbook provides a continuous record of events, yet its language and structure minimize the human experiences it documents. By pairing this record with Wake, the project reveals how narrative and visual storytelling can recover dimensions of history that the archive suppresses. In a digital interface, this contrast can be made explicit: repetitive log entries give way to expanded narrative, allowing users to see how meaning emerges through interpretation. The entry reinforces a central claim of the project, that archives do not fully contain history, but instead offer fragments shaped by power, which must be actively read, questioned, and reimagined.",
    synthesis: {
      whyPairing:
        "Hall’s work begins where the log leaves off—with fragments that beg for reconstruction of lives the ledger refuses to name.",
      juxtaposition:
        "Compressed ship entries beside expanded narrative and image underscore what omission and genre do to the past.",
      beyondArchive:
        "The log cannot hold interior life or refusal as felt experience; Wake supplies presence and care the record structurally excludes.",
    },
  },
  {
    slug: "silence-and-survival-cluster-c",
    title: "Silence and Survival, Cluster D",
    archivalSource: {
      date: "1977",
      medium: "Essay; published speech",
      collection: "Sister Outsider; feminist and Black radical archive",
      catalogNumber: "SO-LORDE-1977",
    },
    literaryPairing: {
      workTitle: "Poetry Is Not a Luxury",
      author: "Audre Lorde",
      sourceNote: "from Sister Outsider, 1984",
      quotedExcerpt:
        "The quality of light by which we scrutinize our lives has direct bearing upon the product which we live…",
    },
    summary:
      "“Poetry Is Not a Luxury” — close reading in relation to archival absence and the limits of official record. Lorde reframes poetry as a vital mode of knowledge-making, arguing that language is necessary for survival, especially for those whose lives are not fully recorded in official archives.",
    context:
      "Originally delivered as a speech and later published in Sister Outsider, “Poetry Is Not a Luxury” emerges from Black feminist thought in the 1970s. Lorde writes against the idea that poetry is indulgent or secondary, instead positioning it as a primary tool for articulating experiences that dominant systems, political, medical, archival, fail to capture. Her work speaks from and to communities historically excluded from institutional records, where silence is not accidental but produced.",
    excerpt:
      "“For women, then, poetry is not a luxury. It is a vital necessity of our existence.” “…the transformation of silence into language and action…”",
    closeReading: [
      "Lorde’s insistence that poetry is “not a luxury” challenges a hierarchy that places official knowledge, documents, records, data, above expressive or emotional forms of writing. The term “luxury” suggests excess, something optional; by rejecting it, Lorde redefines poetry as foundational, a means of survival rather than embellishment.",
      "Her emphasis on “transformation” signals process rather than product. Silence is worked through, shaped into language that can be shared and acted upon. This framing complicates the idea of the archive as a passive repository. If certain lives and experiences are never recorded, then the absence is enforced. Poetry becomes a method of producing what the archive lacks.",
      "Unlike official documents, which often rely on abstraction and distance, Lorde’s language is intimate and embodied. It foregrounds feeling as a form of knowledge, insisting that what is deeply felt is also intellectually significant. In this way, her essay reorients what counts as evidence: not only written records, but lived experience, memory, and emotion.",
    ],
    literaryConnection:
      "If the archive is defined by what is preserved, Lorde asks us to consider what has been systematically left out, and how those absences can be addressed. Her essay provides a framework for reading documents and the silences surrounding them. Where institutional archives often fail to record marginalized lives, poetry becomes a parallel archive, one that captures interiority, emotion, and lived experience. Rather than filling gaps with objective data, Lorde proposes a different kind of intervention, one rooted in feeling, imagination, and self-definition. Her work suggests that meaning does not originate in the archive itself, but in the act of giving language to what has been excluded.",
    significance:
      "This entry reframes the archive by shifting attention from what is present to what is absent. Through Lorde’s argument, the project positions poetry as a necessary response to archival silence, one that challenges the authority of the archive. In the context of a digital interface, this raises questions about how absence can be represented and engaged. By incorporating gaps, fragmentation, or moments of intentional incompleteness, the site can reflect Lorde’s insight that not all histories are recoverable through documents alone. Instead, interpretation becomes an act of creation, transforming silence into something that can be seen, read, and felt.",
    synthesis: {
      whyPairing:
        "Lorde names poetry as survival beside the kinds of evidence institutions privilege—pairing makes the hierarchy of genres visible.",
      juxtaposition:
        "Putting lyrical insistence next to archival lacunae clarifies how silence is produced, not accidental.",
      beyondArchive:
        "Official records cannot register feeling as knowledge; Lorde’s essay supplies a method for reading what files leave out.",
    },
  },
];

export function getEntryBySlug(slug: string): Entry | undefined {
  return entries.find((e) => e.slug === slug);
}
