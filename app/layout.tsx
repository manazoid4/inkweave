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
  title: "InkWeave — Finish the book you already started",
  description: "Turn scattered notes, snippets, and half-written scenes into a coherent manuscript you still control. AI-assisted, author-owned, publish-ready.",
  keywords: ["finish my book", "AI book writing", "manuscript generator", "self publishing UK", "KDP", "snippet to book", "author owned AI"],
  openGraph: {
    title: "InkWeave — Finish the book you already started",
    description: "You steer. InkWeave weaves. Snippets in, coherent manuscript out. Author-owned. KDP-aware.",
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
