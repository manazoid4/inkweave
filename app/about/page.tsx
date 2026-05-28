import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>
          Start free
        </Link>
      </nav>

      <section className="px-6 py-20 max-w-3xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>About</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-10">Built for the book that never got finished.</h1>

        <div className="space-y-6 font-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <p>
            Most people who want to write a book never finish it. Not because they lack ideas —
            they have plenty. Notes in their phone. Scenes scribbled in notebooks. Half-finished chapters abandoned when life got busy.
          </p>
          <p>
            Existing tools don&apos;t solve this. ChatGPT requires you to know how to prompt it.
            Sudowrite is a co-pilot — you still have to drive. None of them take what you already have
            and turn it into a complete book.
          </p>
          <p style={{ color: "var(--text-primary)" }}>
            InkWeave does one thing: it takes your snippets and returns a full manuscript.
          </p>
          <p>
            Built in the UK. Priced in GBP. Designed for first-time authors, experts with stories to tell,
            and anyone who has said &quot;I&apos;ve always wanted to write a book&quot; and meant it.
          </p>
        </div>

        <div className="mt-16 p-8" style={{ background: "var(--ink-soft)", borderLeft: "3px solid var(--amber)" }}>
          <h2 className="text-xl font-bold mb-3">The pipeline</h2>
          <p className="font-sans text-sm mb-4 tracking-wider" style={{ color: "var(--amber)" }}>
            INGEST → ANALYSE → OUTLINE → EXPAND → COMPILE → DELIVER
          </p>
          <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Your snippets go in. The engine reads them, finds the story, builds a chapter structure,
            expands every chapter, and compiles a complete DOCX + PDF. You review, redirect if needed, and download.
          </p>
        </div>

        <div className="mt-10">
          <Link
            href="/start"
            className="inline-block px-8 py-4 font-sans font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Start with a free chapter
          </Link>
        </div>
      </section>
    </main>
  );
}
