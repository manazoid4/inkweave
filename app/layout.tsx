import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InkWeave — Your Book, Finished",
  description: "Submit your snippets. Get a full manuscript. No blank page. No stalling. One price, full book.",
  keywords: ["write a book", "AI book writing", "finish my book", "self publishing UK", "manuscript generator"],
  openGraph: {
    title: "InkWeave — Your Book, Finished",
    description: "Turn your snippets into a full manuscript. UK-built, author-first.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
