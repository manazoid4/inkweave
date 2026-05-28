import Link from "next/link";

const objections = [
  {
    objection: "I want to write a real book. I don't want AI to write it for me.",
    answer: "Then use Author Mode. You write the paragraphs. InkWeave helps with the next sentence, suggests transitions, and keeps your voice consistent. The book is yours, line by line. The AI is optional at every step.",
    test: "Try Author Mode in the free chapter. Write one paragraph yourself. Hit 'continue in my voice'. Decide if it sounds like you.",
  },
  {
    objection: "If it's AI, it's not really my book.",
    answer: "Every sentence in your manuscript shows the source snippet it came from — your characters, your scenes, your ideas. The Receipts Trail proves your story is yours. AI assembles what you already had. Like a typist who never argues.",
    test: "Open the Receipts panel after generation. Click any paragraph. See exactly which of your notes it expanded.",
  },
  {
    objection: "Publishers will reject it. KDP bans AI books.",
    answer: "KDP doesn't ban AI-assisted books. It requires disclosure. There's a difference. InkWeave generates the correct KDP disclosure language and certifies your manuscript as 'AI-assisted, author-reviewed' — the exact phrase Amazon accepts. IngramSpark is similar. You stay inside platform rules, automatically.",
    test: "Go to /publish. Read the actual KDP policy. We link to the official Amazon page.",
  },
  {
    objection: "It'll sound generic. Like every other AI book.",
    answer: "Voice Match: upload three samples of your existing writing (emails, blog posts, journal). InkWeave trains a private voice profile only on your samples. Output sounds like you wrote it on a good day.",
    test: "Upload an old blog post. Generate one paragraph with Voice Match on, one with it off. The difference is obvious.",
  },
  {
    objection: "Why not just use ChatGPT for £20/mo?",
    answer: "ChatGPT can write a paragraph. It can't structure a 70,000-word book, hold a 12-chapter outline in working memory, format for KDP paperback, register an ISBN, or generate AI disclosure. InkWeave is the pipeline from idea to bookshelf. ChatGPT is one tool inside that pipeline.",
    test: "Try writing chapter 7 of a book in ChatGPT. Now try chapter 8. See if it remembers who the characters are.",
  },
  {
    objection: "My friends/colleagues will think I cheated.",
    answer: "Most authors today use AI somewhere — research, editing, brainstorming. Many won't tell you. InkWeave is honest about it: AI-assisted, author-led. You wrote the brief. You approved every chapter. You own the copyright. That's authorship, not cheating.",
    test: "Open any modern non-fiction acknowledgements section. Count the tools, editors, and assistants thanked. You're already part of a team.",
  },
  {
    objection: "What if it gets facts wrong?",
    answer: "InkWeave is built for fiction-first, non-fiction-careful. For non-fiction, every claim is flagged. You provide source links. The Pre-commit Sanity Check highlights any chapter where AI generated content without grounding in your snippets. You catch issues before export.",
    test: "Submit a non-fiction snippet. Watch the sanity check flag any unsourced claim before final export.",
  },
  {
    objection: "I'll lose my creative voice / become dependent.",
    answer: "Cancel anytime. Export your snippets, manuscripts, voice profile, and Memory Vault as a ZIP. No lock-in. Your data is yours.",
    test: "Go to settings. Click 'Export everything'. You get a real ZIP. No account needed to read it.",
  },
  {
    objection: "I write better than AI. I just need a structure tool.",
    answer: "Use InkWeave as a structure tool only. Outline mode generates chapter-by-chapter scaffolding from your snippets. You write the prose. Skip the AI generation entirely. £9/mo Reader plan.",
    test: "Pick Outline-only mode in /start. Get a 12-chapter structure. Write it yourself.",
  },
  {
    objection: "What if the quality is bad?",
    answer: "Free chapter, no card. If it's bad, walk away. No refund process needed. We're confident enough to give it away first.",
    test: "Try one chapter. Free. No card. That's the test.",
  },
];

export default function HonestPage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>InkWeave</Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>Try one chapter free</Link>
      </nav>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>The honest page</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Reasons you might not want this.</h1>
        <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
          We&apos;d rather you read this before paying than after. Every real objection, our actual answer, and a way to test if we&apos;re right.
        </p>
      </section>

      <section className="px-6 pb-16 max-w-4xl mx-auto space-y-6">
        {objections.map(({ objection, answer, test }, i) => (
          <div key={i} className="p-8" style={{ background: "var(--ink-soft)", borderLeft: "3px solid var(--amber)" }}>
            <p className="font-sans text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>Objection {String(i + 1).padStart(2, "0")}</p>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text-primary)" }}>
              &quot;{objection}&quot;
            </h2>
            <p className="font-sans leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{answer}</p>
            <div className="pt-4 mt-4 border-t font-sans text-sm" style={{ borderColor: "var(--ink-muted)", color: "var(--amber)" }}>
              <span className="font-bold">Test it:</span> <span style={{ color: "var(--text-secondary)" }}>{test}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="px-6 py-16 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Still not sure?</h2>
        <p className="font-sans mb-8" style={{ color: "var(--text-secondary)" }}>
          One chapter. Free. No card. If it&apos;s not your book, walk away.
        </p>
        <Link
          href="/start"
          className="inline-block px-10 py-5 text-base font-sans font-semibold transition-all hover:opacity-90"
          style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}
        >
          Try one chapter free
        </Link>
      </section>
    </main>
  );
}
