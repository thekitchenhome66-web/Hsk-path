import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HSK Path — Master Chinese",
  description:
    "A Duolingo-style platform for HSK Chinese exam preparation. Learn smarter, climb faster.",
  keywords: ["HSK", "Chinese", "Mandarin", "language learning", "exam prep"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="noise antialiased">{children}</body>
    </html>
  );
}
