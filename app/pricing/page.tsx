import Link from "next/link";

const plans = [
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
    features: [
      "Full manuscript (50k–100k words)",
      "DOCX + PDF download",
      "Chapter review & approval",
      "UK spelling & grammar defaults",
      "Outline preview before generation",
    ],
    cta: "Get your book",
    href: "/start?plan=book",
    featured: true,
  },
  {
    name: "Remote Control",
    price: "£79/mo",
    sub: "Unlimited books",
    features: [
      "Everything in Full Book",
      "Live generation stream",
      "Real-time chapter steering",
      "Session save & resume",
      "Priority generation queue",
      "Co-author mode (coming soon)",
    ],
    cta: "Take control",
    href: "/start?plan=remote",
    featured: false,
  },
];

const addons = [
  { name: "AI edit pass", price: "£15", desc: "Style polish, grammar, pacing — applied after generation." },
  { name: "Cover brief pack", price: "£9", desc: "Midjourney-ready cover prompt pack tailored to your book." },
  { name: "UK Publishing Guide", price: "£9", desc: "ISBN, KDP, IngramSpark, distribution — complete self-pub checklist." },
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
