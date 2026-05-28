import Link from "next/link";

const plans = [
  {
    name: "Draft",
    price: "£29",
    sub: "Finish your first draft",
    features: [
      "Full manuscript (50k+ words)",
      "DOCX download",
      "Outline review before generation",
      "Chapter approve & regenerate",
      "Author-owned. Never used for training.",
    ],
    cta: "Start at £29",
    href: "/start?plan=draft",
    featured: false,
  },
  {
    name: "Author",
    price: "£39",
    sub: "Most popular — full control",
    features: [
      "Everything in Draft",
      "DOCX + PDF export",
      "Structure repair & style control",
      "Revisions & re-weaves included",
      "UK spelling & grammar",
      "Pause, select-and-steer, branch-and-revert",
    ],
    cta: "Get your book",
    href: "/start?plan=author",
    featured: true,
  },
  {
    name: "Publish-Ready",
    price: "£49",
    sub: "Retail-ready bundle",
    features: [
      "Everything in Author",
      "KDP/IngramSpark export profile",
      "Blurb & metadata help",
      "AI disclosure helper",
      "Quality-checked manuscript",
      "Cover brief pack included",
    ],
    cta: "Go publish-ready",
    href: "/start?plan=publish",
    featured: false,
  },
];

const addons = [
  { name: "Try one chapter", price: "Free", desc: "Submit your snippets. Get one chapter back. No card. Decide after." },
  { name: "AI edit pass", price: "£15", desc: "Style polish, grammar, pacing — applied after generation." },
  { name: "Remote Control studio", price: "£79/mo", desc: "For ghostwriters & agencies. Unlimited books, live steering, team seats." },
];

export default function PricingPage() {
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

      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3 text-center" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">One price. Full book.</h1>
        <p className="text-center font-sans mb-16" style={{ color: "var(--text-secondary)" }}>
          No per-word meters. No monthly traps. Pay for what you get.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {plans.map(({ name, price, sub, features, cta, href, featured }) => (
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
              <p className="font-sans text-xs uppercase tracking-widest mb-2" style={{ color: featured ? "var(--amber)" : "var(--text-dim)" }}>{name}</p>
              <p className="text-4xl font-bold mb-1">{price}</p>
              <p className="font-sans text-xs mb-6" style={{ color: featured ? "#666" : "var(--text-dim)" }}>{sub}</p>
              <ul className="space-y-2 mb-8 flex-1">
                {features.map((f) => (
                  <li key={f} className="font-sans text-sm flex gap-2" style={{ color: featured ? "#333" : "var(--text-secondary)" }}>
                    <span style={{ color: "var(--amber)" }}>✦</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                href={href}
                className="block text-center px-6 py-3 font-sans text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: featured ? "var(--ink)" : "var(--amber)", color: featured ? "var(--paper)" : "var(--ink)", borderRadius: "2px" }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="p-8" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
          <p className="font-sans text-xs uppercase tracking-widest mb-6" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Optional add-ons</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map(({ name, price, desc }) => (
              <div key={name}>
                <div className="flex justify-between items-baseline mb-1">
                  <p className="font-semibold">{name}</p>
                  <p className="font-sans text-sm" style={{ color: "var(--amber)" }}>{price}</p>
                </div>
                <p className="font-sans text-sm" style={{ color: "var(--text-secondary)" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-sans text-xs" style={{ color: "var(--text-dim)" }}>All prices in GBP. VAT may apply. <Link href="/contact" className="underline">Questions?</Link></p>
        </div>
      </section>
    </main>
  );
}
