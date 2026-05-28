import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </Link>
      </nav>

      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
        <p className="font-sans text-xs mb-10" style={{ color: "var(--text-dim)" }}>Last updated: May 2026</p>

        <div className="space-y-8 font-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Service</h2>
            <p>InkWeave provides an AI-assisted manuscript generation service. You supply the source material; we return a generated manuscript. The output is a creative first draft and should be reviewed before publication.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Your content</h2>
            <p>You retain full ownership of your submitted snippets and generated manuscript. InkWeave does not claim any rights to your work.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Payments</h2>
            <p>One-time payments are non-refundable once generation has started. Monthly subscriptions can be cancelled at any time; you retain access until the end of the billing period.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Acceptable use</h2>
            <p>You must not submit content that is unlawful, infringes third-party rights, or is intended to deceive or cause harm. InkWeave reserves the right to terminate accounts that violate these terms.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Limitation of liability</h2>
            <p>InkWeave is not liable for the accuracy, publishability, or commercial viability of generated manuscripts. Use at your own editorial discretion.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Governing law</h2>
            <p>These terms are governed by the laws of England and Wales.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
