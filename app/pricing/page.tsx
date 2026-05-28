import Link from "next/link";

const subscriptions = [
  {
    name: "Reader",
    price: "£9",
    period: "/mo",
    annual: "£79/year",
    annualSave: "Save £29",
    sub: "Start writing",
    features: [
      "1 book draft per quarter (4/year)",
      "DOCX export",
      "Basic revisions",
      "Author-owned. Never used for training.",
    ],
    cta: "Start Reader",
    href: "/start?plan=reader",
    featured: false,
  },
  {
    name: "Author",
    price: "£19",
    period: "/mo",
    annual: "£179/year",
    annualSave: "Save £49 — 2 months free",
    sub: "Most popular",
    features: [
      "1 book per month (up to 12/year)",
      "DOCX + PDF + EPUB export",
      "Structure repair & style control",
      "Revisions & re-weaves included",
      "UK publishing guide included",
      "Pause, select-and-steer, branch-and-revert",
    ],
    cta: "Start Author",
    href: "/start?plan=author",
    featured: true,
  },
  {
    name: "Pro",
    price: "£49",
    period: "/mo",
    annual: "£449/year",
    annualSave: "Save £139 — best value",
    sub: "Unlimited writing",
    features: [
      "Unlimited book generation",
      "Live remote control (steering)",
      "Priority generation queue",
      "All formats: DOCX, PDF, EPUB",
      "AI disclosure helper",
      "White-glove onboarding",
    ],
    cta: "Start Pro",
    href: "/start?plan=pro",
    featured: false,
  },
];

const oneTime = [
  {
    name: "Single Book",
    price: "£39",
    desc: "One manuscript. DOCX export. No subscription.",
    cta: "Buy single book",
    href: "/start?plan=single",
  },
  {
    name: "Author Bundle",
    price: "£89",
    desc: "Manuscript + edit pass + cover brief + KDP-ready export.",
    cta: "Buy bundle",
    href: "/start?plan=bundle",
  },
];

const publishingServices = [
  {
    name: "UK ISBN (author-owned)",
    price: "£29",
    desc: "Registered to you via Nielsen. Yours forever. Works on KDP, IngramSpark, anywhere.",
  },
  {
    name: "Paperback formatting + KDP upload",
    price: "£39",
    desc: "Print-ready interior, cover specs, KDP listing setup. Live in 72h.",
  },
  {
    name: "Hardcover edition setup",
    price: "£49",
    desc: "Hardcover trim, dust jacket spec, premium binding via KDP Hardcover or IngramSpark.",
  },
  {
    name: "IngramSpark global distribution",
    price: "£59",
    desc: "Listed across 45,000+ retailers, libraries, and bookshops worldwide.",
  },
  {
    name: "AI disclosure pack",
    price: "£9",
    desc: "KDP-compliant AI assistance disclosure. Stays inside Amazon and IngramSpark rules.",
  },
  {
    name: "The Publish Bundle",
    price: "£179",
    desc: "ISBN + paperback + hardcover + IngramSpark + disclosure. Save £6 vs separate.",
    highlight: true,
  },
];

const addons = [
  { name: "AI edit pass", price: "£15", desc: "Style polish, grammar, pacing after generation." },
  { name: "Cover brief pack", price: "£9", desc: "Midjourney-ready cover prompts tailored to your book." },
  { name: "Blurb + metadata pack", price: "£12", desc: "Back-cover copy, keywords, BISAC codes, Amazon categories." },
  { name: "Try one chapter", price: "Free", desc: "Submit snippets. Get one chapter. No card." },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>InkWeave</Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>Try one chapter free</Link>
      </nav>

      {/* HEADER */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Pricing</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Write books. Publish them. Make money from them.</h1>
        <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
          Subscription for writers. One-time for casual authors. Real UK publishing services bolted on.
          No per-word meters. No hidden fees.
        </p>
      </section>

      {/* SUBSCRIPTIONS */}
      <section className="px-6 pb-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Subscriptions</p>
          <h2 className="text-2xl md:text-3xl font-bold">Write more than one book? Subscribe.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {subscriptions.map(({ name, price, period, annual, annualSave, sub, features, cta, href, featured }) => (
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
              <div className="flex items-baseline gap-1 mb-1">
                <p className="text-4xl font-bold">{price}</p>
                <p className="font-sans text-sm" style={{ color: featured ? "#666" : "var(--text-dim)" }}>{period}</p>
              </div>
              <p className="font-sans text-xs mb-1" style={{ color: featured ? "#444" : "var(--text-secondary)" }}>or {annual}</p>
              <p className="font-sans text-xs mb-5" style={{ color: featured ? "var(--amber)" : "var(--amber)" }}>{annualSave}</p>
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
      </section>

      {/* ONE-TIME */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>One-time</p>
          <h2 className="text-2xl md:text-3xl font-bold">Just one book? Pay once.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {oneTime.map(({ name, price, desc, cta, href }) => (
            <div key={name} className="p-8 flex flex-col" style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-muted)", borderRadius: "2px" }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>{name}</p>
              <p className="text-4xl font-bold mb-3">{price}</p>
              <p className="font-sans text-sm mb-6 flex-1" style={{ color: "var(--text-secondary)" }}>{desc}</p>
              <Link
                href={href}
                className="block text-center px-6 py-3 font-sans text-sm font-semibold transition-all hover:opacity-90"
                style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
              >
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* UK PUBLISHING SERVICES */}
      <section className="px-6 py-20 max-w-5xl mx-auto" style={{ borderTop: "1px solid var(--ink-muted)", borderBottom: "1px solid var(--ink-muted)" }}>
        <div className="text-center mb-12">
          <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>UK Publishing</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Not just a manuscript. A published book.</h2>
          <p className="font-sans max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Real services that put your book on Amazon, Waterstones, and IngramSpark&apos;s 45,000+ retail network.
            ISBN registration. Paperback and hardcover formatting. Global distribution.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {publishingServices.map(({ name, price, desc, highlight }) => (
            <div
              key={name}
              className="p-6"
              style={{
                background: highlight ? "var(--amber)" : "var(--ink-soft)",
                color: highlight ? "var(--ink)" : "var(--text-primary)",
                borderRadius: "2px",
                borderLeft: highlight ? "none" : "3px solid var(--amber)",
              }}
            >
              <div className="flex justify-between items-baseline mb-2">
                <p className="font-semibold">{name}</p>
                <p className="font-sans text-sm font-bold">{price}</p>
              </div>
              <p className="font-sans text-sm" style={{ color: highlight ? "#222" : "var(--text-secondary)" }}>{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 font-sans text-xs" style={{ color: "var(--text-dim)" }}>
          Sold as bolt-ons to any subscription or one-time plan. Pay only for what you need.
        </p>
      </section>

      {/* ADDONS */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="font-sans text-xs tracking-widest uppercase mb-2" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Add-ons</p>
          <h2 className="text-2xl md:text-3xl font-bold">Small upgrades, big difference.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {addons.map(({ name, price, desc }) => (
            <div key={name} className="p-5" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <div className="flex justify-between items-baseline mb-2">
                <p className="font-semibold text-sm">{name}</p>
                <p className="font-sans text-sm" style={{ color: "var(--amber)" }}>{price}</p>
              </div>
              <p className="font-sans text-xs" style={{ color: "var(--text-secondary)" }}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GUARANTEES */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">Built to keep you in control.</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-xs" style={{ color: "var(--text-secondary)" }}>
          <div>
            <p className="font-bold mb-1" style={{ color: "var(--amber)" }}>Author-owned</p>
            <p>Your manuscript. Your copyright. Always.</p>
          </div>
          <div>
            <p className="font-bold mb-1" style={{ color: "var(--amber)" }}>Never trained</p>
            <p>Your snippets are never used to train models.</p>
          </div>
          <div>
            <p className="font-bold mb-1" style={{ color: "var(--amber)" }}>Cancel anytime</p>
            <p>Subscriptions end-of-period. No traps.</p>
          </div>
          <div>
            <p className="font-bold mb-1" style={{ color: "var(--amber)" }}>UK-built</p>
            <p>VAT receipts. GBP pricing. UK GDPR.</p>
          </div>
        </div>
        <p className="mt-10 text-xs" style={{ color: "var(--text-dim)" }}>All prices ex-VAT. <Link href="/contact" className="underline">Questions?</Link></p>
      </section>
    </main>
  );
}
