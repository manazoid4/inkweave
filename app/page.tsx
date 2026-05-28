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
          <Link href="#how-it-works" className="hover:text-amber-400 transition-colors">How it works</Link>
          <Link href="#pricing" className="hover:text-amber-400 transition-colors">Pricing</Link>
          <Link
            href="/start"
            className="px-4 py-2 text-sm font-sans font-medium transition-colors"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Start free
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-6 py-24 max-w-4xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-6" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>
          Built for writers who have ideas but not the time
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6" style={{ lineHeight: "1.05" }}>
          Your book.<br />
          <span style={{ color: "var(--amber)" }}>Finished.</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
          Drop your snippets — scenes, notes, ideas, half-written chapters.
          InkWeave structures them, expands them, and delivers a complete manuscript.
          No blank page. No stalling. One price.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/start"
            className="px-8 py-4 text-base font-sans font-semibold transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Weave your story — free chapter
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
          Free chapter sample — no card required
        </p>
      </section>

      {/* TRUST BAR */}
      <section className="py-6 border-y" style={{ borderColor: "var(--ink-muted)" }}>
        <div className="max-w-4xl mx-auto px-6 flex flex-wrap justify-center gap-8 font-sans text-sm" style={{ color: "var(--text-dim)" }}>
          <span>✦ 50,000–100,000 words</span>
          <span>✦ DOCX + PDF download</span>
          <span>✦ UK-built &amp; UK-priced</span>
          <span>✦ Session remote control</span>
          <span>✦ One price. Full book.</span>
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
        <h2 className="text-3xl font-bold text-center mb-12">
          Why not just use ChatGPT?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "ChatGPT / Claude.ai",
              pain: "You prompt-engineer every paragraph. No structure. No book-length output. No output file.",
              verdict: "Tool, not a product",
              highlight: false,
            },
            {
              label: "Sudowrite",
              pain: "Chapter-by-chapter assistant. You still write. It just helps. $29/mo before you have a word count.",
              verdict: "Co-pilot, not the driver",
              highlight: false,
            },
            {
              label: "InkWeave",
              pain: "Drop your snippets. Get a full manuscript. DOCX + PDF. One price. Your book, finished.",
              verdict: "Your book, finished.",
              highlight: true,
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
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          One price. Full book.
        </h2>
        <p className="text-center mb-16 font-sans" style={{ color: "var(--text-secondary)" }}>
          No per-word meters. No monthly traps. Pay for what you get.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sample",
              price: "Free",
              sub: "No card required",
              features: ["1 chapter from your snippets", "DOCX download", "See the quality before you pay"],
              cta: "Start free",
              href: "/start",
              featured: false,
            },
            {
              name: "Full Book",
              price: "£39",
              sub: "One-time per book",
              features: ["Full manuscript (50k–100k words)", "DOCX + PDF", "Chapter review & approval", "UK spelling & grammar"],
              cta: "Get your book",
              href: "/start?plan=book",
              featured: true,
            },
            {
              name: "Remote Control",
              price: "£79/mo",
              sub: "Unlimited books",
              features: ["Everything in Full Book", "Live generation stream", "Real-time steering", "Session save & resume", "Priority queue"],
              cta: "Take control",
              href: "/start?plan=remote",
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
        <div className="mt-10 p-6 font-sans" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Optional add-ons</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            <span>✦ AI edit pass — £15</span>
            <span>✦ Cover brief pack — £9</span>
            <span>✦ UK Publishing Guide — £9</span>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-6 py-24 text-center max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The book has been in your head long enough.
        </h2>
        <p className="font-sans text-lg mb-10" style={{ color: "var(--text-secondary)" }}>
          Submit your first snippets. Get a chapter back. If it&apos;s not good, walk away — no charge.
        </p>
        <Link
          href="/start"
          className="inline-block px-10 py-5 text-base font-sans font-semibold transition-all hover:opacity-90"
          style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
        >
          Weave your story — free to start
        </Link>
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
