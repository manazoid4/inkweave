import Link from "next/link";

const checklist = [
  { item: "AI assistance disclosure (KDP requires)", status: "Auto-generated, KDP-compliant" },
  { item: "ISBN registration (UK Nielsen)", status: "Owned by you, transferable" },
  { item: "Manuscript file formats", status: "DOCX, PDF, EPUB — KDP & IngramSpark ready" },
  { item: "Paperback trim sizes", status: "5x8, 5.5x8.5, 6x9 — Amazon-validated" },
  { item: "Cover specs (spine width, bleed)", status: "Calculated per page count" },
  { item: "BISAC genre codes", status: "Auto-suggested per book" },
  { item: "Amazon category recommendations", status: "Per-genre, UK & US markets" },
  { item: "Hardcover edition (optional)", status: "KDP Hardcover or IngramSpark" },
  { item: "Distribution: 45,000+ retailers", status: "Via IngramSpark setup" },
];

const platforms = [
  { name: "Amazon KDP", what: "Largest market. Free to publish. 70% royalty on £2.99–£9.99 ebooks." },
  { name: "IngramSpark", what: "Reaches 45,000+ retailers, libraries, and bookshops. Wholesale + retail." },
  { name: "Waterstones", what: "UK high street. Sold via IngramSpark wholesale." },
  { name: "Apple Books · Kobo · Google Play", what: "Multi-platform ebook distribution via IngramSpark or direct." },
];

export default function PublishPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>InkWeave</Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>Try one chapter free</Link>
      </nav>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>UK Publishing</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">From manuscript to bookshelf.</h1>
        <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
          Most AI tools stop at the draft. InkWeave keeps going — ISBN, formatting,
          paperback, hardcover, global distribution. KDP-aware, IngramSpark-aware, retail-ready.
        </p>
      </section>

      <section className="px-6 py-12 max-w-4xl mx-auto">
        <div className="p-8" style={{ background: "var(--ink-soft)", borderLeft: "3px solid var(--amber)" }}>
          <h2 className="text-2xl font-bold mb-3">KDP requires disclosure. IngramSpark may reject. We handle both.</h2>
          <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
            Amazon KDP mandates an &quot;AI-generated content&quot; disclosure on every new title. IngramSpark
            warns that automated content may be rejected. Most authors get this wrong and lose listings.
            InkWeave generates the correct disclosure language, auto-fills the required fields,
            and certifies your manuscript as &quot;AI-assisted, author-reviewed&quot; — the language that stays
            inside platform rules.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">The full publish checklist — handled.</h2>
        <div className="space-y-3">
          {checklist.map(({ item, status }) => (
            <div key={item} className="flex items-start gap-4 p-4" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <span className="text-xl" style={{ color: "var(--amber)" }}>✓</span>
              <div className="flex-1">
                <p className="font-semibold text-sm">{item}</p>
                <p className="font-sans text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{status}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Where your book ends up.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platforms.map(({ name, what }) => (
            <div key={name} className="p-6" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <p className="font-semibold mb-2" style={{ color: "var(--amber)" }}>{name}</p>
              <p className="font-sans text-sm" style={{ color: "var(--text-secondary)" }}>{what}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">The Publish Bundle</h2>
        <p className="text-5xl font-bold mb-2" style={{ color: "var(--amber)" }}>£179</p>
        <p className="font-sans text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
          ISBN + Paperback + Hardcover + IngramSpark + AI disclosure — save £6 vs separate.
        </p>
        <Link
          href="/start?plan=publish-bundle"
          className="inline-block px-10 py-5 text-base font-sans font-semibold transition-all hover:opacity-90"
          style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
        >
          Publish your book
        </Link>
        <p className="mt-4 text-xs font-sans" style={{ color: "var(--text-dim)" }}>
          Or pick services individually from <Link href="/pricing" className="underline">pricing</Link>.
        </p>
      </section>
    </main>
  );
}
