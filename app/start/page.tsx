export default function StartPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <a href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </a>
      </nav>

      <section className="px-6 py-16 max-w-2xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          Step 1 of 3 · No card required
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Try one chapter free
        </h1>
        <p className="font-sans mb-10" style={{ color: "var(--text-secondary)" }}>
          Paste anything — scenes, notes, ideas, half-written chapters. One sentence or ten pages.
          We&apos;ll generate one full chapter from your material. You decide what happens next.
        </p>

        <form className="flex flex-col gap-6">
          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>
              Book title (optional)
            </label>
            <input
              type="text"
              placeholder="e.g. The Last Signal"
              className="w-full px-4 py-3 font-sans text-sm outline-none"
              style={{
                background: "var(--ink-soft)",
                border: "1px solid var(--ink-muted)",
                color: "var(--text-primary)",
                borderRadius: "2px",
              }}
            />
          </div>

          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>
              Genre
            </label>
            <select
              className="w-full px-4 py-3 font-sans text-sm outline-none"
              style={{
                background: "var(--ink-soft)",
                border: "1px solid var(--ink-muted)",
                color: "var(--text-secondary)",
                borderRadius: "2px",
              }}
            >
              <option value="">Select genre</option>
              <option>Literary fiction</option>
              <option>Thriller / Crime</option>
              <option>Romance</option>
              <option>Science fiction</option>
              <option>Fantasy</option>
              <option>Historical fiction</option>
              <option>Non-fiction / Memoir</option>
              <option>Self-help / Business</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>
              Your snippets
            </label>
            <textarea
              rows={12}
              placeholder="Paste your scenes, notes, ideas, dialogue — anything you have written or thought about for this book..."
              className="w-full px-4 py-3 font-sans text-sm outline-none resize-none"
              style={{
                background: "var(--ink-soft)",
                border: "1px solid var(--ink-muted)",
                color: "var(--text-primary)",
                borderRadius: "2px",
                lineHeight: "1.7",
              }}
            />
            <p className="text-xs mt-2 font-sans" style={{ color: "var(--text-dim)" }}>
              Minimum 200 words for a good chapter sample. More = better book.
            </p>
          </div>

          <button
            type="submit"
            className="px-8 py-4 font-sans font-semibold text-base transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Generate my free chapter →
          </button>
          <p className="text-xs text-center font-sans" style={{ color: "var(--text-dim)" }}>
            Free — no card required. Full book from £39.
          </p>
        </form>
      </section>
    </main>
  );
}
