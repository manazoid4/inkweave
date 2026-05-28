export default function ContactPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <a href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>
          InkWeave
        </a>
      </nav>

      <section className="px-6 py-20 max-w-xl mx-auto">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>Contact</p>
        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
        <p className="font-sans mb-10" style={{ color: "var(--text-secondary)" }}>
          Questions, feedback, or partnership enquiries. We&apos;ll reply within 24 hours.
        </p>

        <form className="flex flex-col gap-5">
          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 font-sans text-sm outline-none"
              style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-muted)", color: "var(--text-primary)", borderRadius: "2px" }}
            />
          </div>
          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 font-sans text-sm outline-none"
              style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-muted)", color: "var(--text-primary)", borderRadius: "2px" }}
            />
          </div>
          <div>
            <label className="font-sans text-xs uppercase tracking-widest block mb-2" style={{ color: "var(--text-dim)" }}>Message</label>
            <textarea
              rows={6}
              className="w-full px-4 py-3 font-sans text-sm outline-none resize-none"
              style={{ background: "var(--ink-soft)", border: "1px solid var(--ink-muted)", color: "var(--text-primary)", borderRadius: "2px" }}
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 font-sans font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
          >
            Send message
          </button>
        </form>
      </section>
    </main>
  );
}
