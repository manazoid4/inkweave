import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </Link>
      </nav>

      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
        <p className="font-sans text-xs mb-10" style={{ color: "var(--text-dim)" }}>Last updated: May 2026</p>

        <div className="space-y-8 font-sans leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>What we collect</h2>
            <p>Your email address (for account and delivery), your submitted snippets (to generate your manuscript), and payment information processed securely by Stripe. We do not store card details.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>How we use it</h2>
            <p>Snippets are used solely to generate your manuscript via the InkWeave AI pipeline. We do not use your content to train models. We do not sell your data.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Data retention</h2>
            <p>Generated manuscripts are stored for 30 days for re-download, then deleted. You can request deletion at any time by contacting us.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Third parties</h2>
            <p>We use Supabase (database), Stripe (payments), Anthropic (AI generation), and Resend (email). Each has their own privacy policy.</p>
          </div>
          <div>
            <h2 className="font-semibold text-base mb-2" style={{ color: "var(--text-primary)" }}>Your rights (UK GDPR)</h2>
            <p>You have the right to access, correct, or delete your personal data. Contact us at <a href="mailto:privacy@inkweave.co.uk" className="underline">privacy@inkweave.co.uk</a>.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
