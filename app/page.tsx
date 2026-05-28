import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>

      {/* NAV */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </span>
        <div className="flex items-center gap-6 font-sans text-sm" style={{ color: "var(--text-secondary)" }}>
          <Link href="/publish" className="hover:text-amber-400 transition-colors hidden md:inline">Publish</Link>
          <Link href="/showcase" className="hover:text-amber-400 transition-colors hidden md:inline">Showcase</Link>
          <Link href="/pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
          <Link
            href="/start"
            className="px-4 py-2 text-sm font-sans font-medium transition-colors"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Try free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-6" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          You steer. InkWeave weaves.
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ lineHeight: "1.05" }}>
          Finish the book<br />
          <span style={{ color: "var(--amber)" }}>you already started.</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
          Turn scattered notes, snippets, and half-written scenes into a coherent manuscript you still control.
          AI-assisted, author-owned, publish-ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/start"
            className="px-8 py-4 text-base font-sans font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Try one chapter free
          </Link>
          <Link
            href="#how-it-works"
            className="px-8 py-4 text-base font-sans transition-all hover:text-amber-400"
            style={{ border: "1px solid var(--ink-muted)", color: "var(--text-secondary)", borderRadius: "2px" }}
          >
            See how it works
          </Link>
        </div>
        <p className="mt-4 text-xs font-sans" style={{ color: "var(--text-dim)" }}>
          No card required. Your manuscript. Your rights. Never used for training.
        </p>
      </section>

      {/* BEFORE / AFTER */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3 text-center" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          The transformation
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Fragments in. Manuscript out.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 font-sans text-sm leading-relaxed" style={{ background: "var(--ink-soft)", borderRadius: "2px", color: "var(--text-secondary)" }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-dim)" }}>What you have</p>
            <div className="space-y-3 font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
              <p>&quot;She finds the key behind the painting...&quot;</p>
              <p>&quot;Maya — 32, paramedic, lost a brother in 2019&quot;</p>
              <p>&quot;CHAPTER 3 — confrontation at the harbour, weather should feel hostile&quot;</p>
              <p>&quot;What if the journal entries are out of order on purpose?&quot;</p>
              <p style={{ color: "var(--text-dim)" }}>+ 47 more notes</p>
            </div>
          </div>
          <div className="p-8 font-sans text-sm leading-relaxed" style={{ background: "var(--paper)", color: "var(--ink)", borderRadius: "2px" }}>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--amber)" }}>What you get</p>
            <p className="font-serif text-base mb-2" style={{ color: "var(--ink)" }}>Chapter Three — The Harbour</p>
            <p className="font-serif italic text-sm" style={{ color: "#444" }}>
              The wind off the water carried more than salt that morning. Maya pulled her collar higher and waited.
              Three years since she&apos;d stood on this same pier. Three years since she&apos;d told herself she&apos;d never come back...
            </p>
            <p className="mt-4 text-xs" style={{ color: "#666" }}>Full manuscript: 67,200 words • 18 chapters • DOCX + PDF</p>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 border-y" style={{ borderColor: "var(--ink-muted)" }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 font-sans text-sm" style={{ color: "var(--text-dim)" }}>
          <span>✦ Author-owned</span>
          <span>✦ Not used for training</span>
          <span>✦ AI-assisted, not AI-replacement</span>
          <span>✦ KDP-aware export</span>
          <span>✦ UK-built</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="px-6 py-24 max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3 text-center" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          The pipeline
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Four steps. One manuscript.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              step: "01",
              title: "Submit your snippets",
              body: "Paste scenes, notes, ideas, dialogue — anything you have. One sentence or ten pages. InkWeave reads all of it.",
            },
            {
              step: "02",
              title: "AI builds your outline",
              body: "The engine analyses your material, identifies your story, and creates a full chapter-by-chapter structure. You approve or adjust.",
            },
            {
              step: "03",
              title: "Chapters expand in real time",
              body: "Watch your book write itself. Steer the direction live — change tone, redirect a chapter, add detail. You stay in control.",
            },
            {
              step: "04",
              title: "Download your manuscript",
              body: "Full DOCX and PDF. Formatted, structured, ready to edit, publish, or share. Your name on the cover.",
            },
          ].map(({ step, title, body }) => (
            <div key={step} className="p-8" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <p className="font-sans text-xs mb-3" style={{ color: "var(--amber)" }}>{step}</p>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="font-sans text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REMOTE CONTROL — competitor gap */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <div className="p-10 md:p-14" style={{ background: "var(--ink-soft)", borderLeft: "3px solid var(--amber)" }}>
          <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
            Feature no competitor has
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Session remote control
          </h2>
          <p className="text-lg mb-6 max-w-2xl" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
            Most AI writing tools are black boxes. You submit. You wait. You get something you didn&apos;t ask for.
          </p>
          <p className="text-lg mb-8 max-w-2xl" style={{ color: "var(--text-primary)", lineHeight: "1.7" }}>
            InkWeave streams each chapter as it&apos;s written. Redirect in real time —
            change the tone, push a subplot forward, cut a character. The book adjusts. You stay the author.
          </p>
          <Link
            href="#pricing"
            className="inline-block px-6 py-3 font-sans text-sm font-medium transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            See remote control pricing
          </Link>
        </div>
      </section>

      {/* VS COMPETITORS */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Where InkWeave sits
        </h2>
        <p className="text-center font-sans mb-12 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Not &quot;AI helps you write&quot;. Not a marketplace of freelancers. The piece in between: turn fragments into a finished, author-led draft.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "ChatGPT · Sudowrite",
              pain: "Open-ended co-writing. You still drive every paragraph. No book structure memory. No publish-ready export.",
              verdict: "Co-pilot",
              highlight: false,
            },
            {
              label: "InkWeave",
              pain: "Snippet in, coherent manuscript out. Steered by you. Exports retail-ready for KDP and IngramSpark.",
              verdict: "Finish-the-draft engine",
              highlight: true,
            },
            {
              label: "Reedsy · Scrivener · AutoCrit",
              pain: "Organise, edit, or hire after the draft exists. Assume you already have a finished manuscript.",
              verdict: "Post-draft tooling",
              highlight: false,
            },
          ].map(({ label, pain, verdict, highlight }) => (
            <div
              key={label}
              className="p-6 flex flex-col gap-3"
              style={{
                background: highlight ? "var(--amber)" : "var(--ink-soft)",
                borderRadius: "2px",
              }}
            >
              <p className="font-sans text-xs uppercase tracking-widest"
                style={{ color: highlight ? "rgba(0,0,0,0.5)" : "var(--text-dim)" }}>
                {label}
              </p>
              <p className="text-sm font-sans leading-relaxed"
                style={{ color: highlight ? "var(--ink)" : "var(--text-secondary)" }}>
                {pain}
              </p>
              <p className="font-semibold text-sm font-sans mt-auto"
                style={{ color: highlight ? "var(--ink)" : "var(--text-dim)" }}>
                {verdict}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-6 py-24 max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3 text-center" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          Subscriptions
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Write books. Publish them. Sell them.
        </h2>
        <p className="text-center mb-16 font-sans max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
          Subscribe to write multiple books. Buy once if you only want one.
          UK publishing services bolt on to any plan.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Reader",
              price: "£9/mo",
              sub: "1 book/quarter · DOCX",
              features: ["4 books a year", "DOCX export", "Basic revisions", "Or £79/year (save £29)"],
              cta: "Start Reader",
              href: "/start?plan=reader",
              featured: false,
            },
            {
              name: "Author",
              price: "£19/mo",
              sub: "Most popular · 12 books/year",
              features: ["1 book per month", "DOCX + PDF + EPUB", "Full revision control", "UK publishing guide", "Or £179/year (save £49)"],
              cta: "Start Author",
              href: "/start?plan=author",
              featured: true,
            },
            {
              name: "Pro",
              price: "£49/mo",
              sub: "Unlimited + remote control",
              features: ["Unlimited books", "Live remote control", "Priority queue", "All formats", "Or £449/year (save £139)"],
              cta: "Start Pro",
              href: "/start?plan=pro",
              featured: false,
            },
          ].map(({ name, price, sub, features, cta, href, featured }) => (
            <div
              key={name}
              className="p-8 flex flex-col"
              style={{
                background: featured ? "var(--paper)" : "var(--ink-soft)",
                color: featured ? "var(--ink)" : "var(--text-primary)",
                borderRadius: "2px",
                border: featured ? "none" : "1px solid var(--ink-muted)",
              }}
            >
              <p className="font-sans text-xs uppercase tracking-widest mb-2"
                style={{ color: featured ? "var(--amber)" : "var(--text-dim)" }}>
                {name}
              </p>
              <p className="text-4xl font-bold mb-1">{price}</p>
              <p className="font-sans text-xs mb-6" style={{ color: featured ? "#666" : "var(--text-dim)" }}>{sub}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="font-sans text-sm flex gap-2"
                    style={{ color: featured ? "#333" : "var(--text-secondary)" }}>
                    <span style={{ color: "var(--amber)" }}>✦</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="block text-center px-6 py-3 font-sans text-sm font-semibold transition-all hover:opacity-90"
                style={{
                  background: featured ? "var(--ink)" : "var(--amber)",
                  color: featured ? "var(--paper)" : "var(--ink)",
                  borderRadius: "2px",
                }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
        {/* One-time */}
        <div className="mt-10 p-6 font-sans" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>One-time (no subscription)</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>✦ Single Book — £39 (DOCX manuscript)</span>
            <span>✦ Author Bundle — £89 (book + edit + cover + KDP)</span>
          </div>
        </div>

        {/* UK Publishing */}
        <div className="mt-6 p-6 font-sans" style={{ background: "var(--ink-soft)", borderRadius: "2px", borderLeft: "3px solid var(--amber)" }}>
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>UK Publishing services — bolt on to any plan</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs mb-3" style={{ color: "var(--text-secondary)" }}>
            <span>✦ UK ISBN — £29</span>
            <span>✦ Paperback + KDP — £39</span>
            <span>✦ Hardcover setup — £49</span>
            <span>✦ IngramSpark global — £59</span>
            <span>✦ AI disclosure — £9</span>
            <span style={{ color: "var(--amber)" }}>✦ The Publish Bundle — £179</span>
          </div>
          <Link href="/pricing" className="text-xs underline" style={{ color: "var(--text-dim)" }}>See full pricing &rarr;</Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The book has been in your head long enough.
        </h2>
        <p className="font-sans text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Submit your snippets. Get a chapter back. If it isn&apos;t good, walk away — no charge, no card.
        </p>
        <Link
          href="/start"
          className="inline-block px-10 py-5 text-base font-sans font-semibold transition-all hover:opacity-90"
          style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
        >
          Try one chapter free
        </Link>
        <p className="mt-6 text-xs font-sans" style={{ color: "var(--text-dim)" }}>
          Author-owned · Never used for training · AI-assisted, not AI-replacement
        </p>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 border-t font-sans" style={{ borderColor: "var(--ink-muted)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4 text-sm" style={{ color: "var(--text-dim)" }}>
          <span>InkWeave — Built in the UK</span>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-amber-400">Privacy</Link>
            <Link href="/terms" className="hover:text-amber-400">Terms</Link>
            <Link href="/contact" className="hover:text-amber-400">Contact</Link>
          </div>
        </div>
      </footer>

    </main>
  );
}
