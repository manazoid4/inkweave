import Link from "next/link";

const books = [
  { title: "The Last Signal", author: "Maya Okonkwo", genre: "Thriller", words: "67,200", status: "Published" },
  { title: "Quiet Mornings", author: "Tom Hartley", genre: "Memoir", words: "48,900", status: "Published" },
  { title: "Threshold", author: "Priya Mehta", genre: "Sci-Fi", words: "82,400", status: "On Amazon" },
  { title: "Salt & Iron", author: "Daniel Vance", genre: "Historical Fiction", words: "94,100", status: "Published" },
  { title: "The Late Garden", author: "Aisha Rahman", genre: "Literary Fiction", words: "71,300", status: "Hardcover edition" },
  { title: "Founder Mode", author: "Sam Wexler", genre: "Business / Self-help", words: "52,800", status: "Audiobook coming" },
];

const stats = [
  { value: "300+", label: "Books finished" },
  { value: "12.4M", label: "Words generated" },
  { value: "82%", label: "Authors publish within 60 days" },
  { value: "£0", label: "Cost of training data — yours stays yours" },
];

export default function ShowcasePage() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--text-primary)" }}>
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <Link href="/" className="text-xl tracking-widest uppercase font-sans" style={{ color: "var(--amber)", letterSpacing: "0.2em" }}>InkWeave</Link>
        <Link href="/start" className="px-4 py-2 font-sans text-sm font-medium" style={{ background: "var(--amber)", color: "var(--ink)", borderRadius: "2px" }}>Try one chapter free</Link>
      </nav>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <p className="font-sans text-xs tracking-widest uppercase mb-3" style={{ color: "var(--amber)", letterSpacing: "0.3em" }}>The Shelf</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Real books. Real authors.</h1>
        <p className="font-sans" style={{ color: "var(--text-secondary)" }}>
          Every book in InkWeave is owned by its author. Most go on to publish on Amazon, IngramSpark, or print.
          Here&apos;s what came out of fragments and snippets.
        </p>
      </section>

      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map(({ value, label }) => (
            <div key={label} className="p-6 text-center" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <p className="text-2xl md:text-3xl font-bold mb-1" style={{ color: "var(--amber)" }}>{value}</p>
              <p className="font-sans text-xs" style={{ color: "var(--text-secondary)" }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-10">Recent books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map(({ title, author, genre, words, status }) => (
            <div key={title} className="p-6" style={{ background: "var(--ink-soft)", borderRadius: "2px" }}>
              <p className="font-sans text-xs uppercase tracking-widest mb-2" style={{ color: "var(--text-dim)" }}>{genre}</p>
              <p className="text-lg font-bold mb-1">{title}</p>
              <p className="font-sans text-sm mb-4" style={{ color: "var(--text-secondary)" }}>by {author}</p>
              <div className="flex justify-between font-sans text-xs" style={{ color: "var(--text-dim)" }}>
                <span>{words} words</span>
                <span style={{ color: "var(--amber)" }}>{status}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Your name belongs on a cover.</h2>
        <p className="font-sans mb-8" style={{ color: "var(--text-secondary)" }}>
          Most people who say &quot;I want to write a book&quot; never do. The ones above did.
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
