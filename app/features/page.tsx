import Link from "next/link";

const features = [
  {
    name: "Voice Match",
    tag: "Unique to InkWeave",
    why: "Stops your book sounding like every other AI book.",
    how: "Upload three samples of your real writing — old blog posts, emails, journal entries. We train a private voice profile only on YOUR text. Output reads like you wrote it on a good day.",
    note: "Voice profile is private. Never shared. Never used to train models. Deletable anytime.",
  },
  {
    name: "Memory Vault",
    tag: "Persistent across books",
    why: "Build a universe. Reuse characters, worlds, lore across multiple books without re-explaining.",
    how: "Save characters, locations, style decisions, and rules. The Vault travels with you between books. Book three can reference book one without you copy-pasting context.",
    note: "Ideal for series writers, fantasy/SF world-builders, and non-fiction authors with recurring frameworks.",
  },
  {
    name: "Author Mode",
    tag: "For writers who write",
    why: "You write the paragraphs. AI helps the next sentence. Reverses the AI dynamic.",
    how: "Type your prose. Press the assist key. Get suggestions in your voice. Accept, edit, or ignore. Use AI as a typist, not an author. Skip it entirely for chapters you want to write yourself.",
    note: "Built for the writer who doesn't want AI doing the work — just removing friction.",
  },
  {
    name: "Receipts Trail",
    tag: "Provenance, sentence by sentence",
    why: "Proves your story is yours. Useful for copyright, publishers, and your own peace of mind.",
    how: "Every paragraph in your manuscript links back to the snippet that seeded it. Hover any sentence. See exactly which of your notes it came from. Export the receipts log with the book.",
    note: "Defends against plagiarism accusations. Documents AI assistance clearly for publishers.",
  },
  {
    name: "Pre-commit Sanity Check",
    tag: "Last-mile safety",
    why: "Catches drift, hallucinations, and tone breaks before you ship.",
    how: "Before final export, the system flags chapters where the AI generated content without grounding in your snippets, broke character voice, or introduced unverified facts. You review only what's flagged.",
    note: "Saves hours of re-reading. Most books need 3–5 fixes before export.",
  },
  {
    name: "Editor-in-the-Loop",
    tag: "Real UK humans, on demand",
    why: "Some chapters need a human editor. We have one.",
    how: "Add £49 per book and a UK-based human editor reviews your manuscript for pacing, voice, and clarity. Returned within 7 days. Not AI. Real person.",
    note: "Optional. Most authors use it on book one only.",
  },
  {
    name: "Genre Style Guides",
    tag: "UK-specific publishing conventions",
    why: "Generic AI writes American thrillers. UK genres have different conventions.",
    how: "Internal style packs for UK Crime, UK Romance, UK Literary, UK Historical, UK Memoir. Vocabulary, structure, pacing, dialogue conventions adjusted per genre.",
    note: "Built from analysis of bestselling UK indie publishers and Amazon UK genre charts.",
  },
  {
    name: "KDP Disclosure Generator",
    tag: "Stay inside Amazon's rules",
    why: "Most authors get AI disclosure wrong on KDP. We do it for you.",
    how: "Auto-fills KDP's 'AI-generated content' form using the exact language Amazon accepts. Tracks edits and human-review percentage. Hands you the disclosure ready to paste.",
    note: "Works for IngramSpark too. Updated whenever Amazon's policy changes.",
  },
  {
    name: "Full Export ZIP",
    tag: "No lock-in",
    why: "Your data is yours. Always.",
    how: "One click. ZIP of every snippet, manuscript, voice profile, vault entry, receipt log, and export. Cancel and walk away with everything.",
    note: "Standard open formats. Readable without InkWeave.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>InkWeave</Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>Try one chapter free</Link>
      </nav>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>What InkWeave actually does</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Nine features no other tool combines.</h1>
        <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
          Every feature exists because we&apos;ve watched authors hit a real wall. Not bullet points to fill a page.
        </p>
      </section>

      <section className="px-6 pb-20 max-w-4xl mx-auto space-y-5">
        {features.map(({ name, tag, why, how, note }, i) => (
          <div key={name} className="p-8" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
            <div className="flex flex-wrap items-baseline gap-3 mb-4">
              <p className="font-sans text-xs uppercase tracking-widest" style={{ color: "var(--text-dim)" }}>{String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-2xl font-bold">{name}</h2>
              <span className="font-sans text-xs px-2 py-1" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>{tag}</span>
            </div>
            <p className="font-sans font-semibold mb-3" style={{ color: "var(--text-primary)" }}>{why}</p>
            <p className="font-sans leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{how}</p>
            <p className="font-sans text-xs italic" style={{ color: "var(--text-dim)" }}>{note}</p>
          </div>
        ))}
      </section>

      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Still skeptical?</h2>
        <p className="font-sans mb-3" style={{ color: "var(--text-secondary)" }}>
          Read every objection on the honest page. We answer all of them.
        </p>
        <Link href="/honest" className="inline-block font-sans text-sm underline mb-10" style={{ color: "var(--amber)" }}>
          The honest page &rarr;
        </Link>
        <div>
          <Link
            href="/start"
            className="inline-block px-10 py-5 text-base font-sans font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Try one chapter free
          </Link>
        </div>
      </section>
    </main>
  );
}
