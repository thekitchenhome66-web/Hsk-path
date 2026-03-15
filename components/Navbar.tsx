"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-ink/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-vermilion font-display text-2xl font-bold leading-none">汉</span>
            <span className="font-display text-paper text-lg font-semibold tracking-wide">
              HSK<span className="text-vermilion">Path</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-mist hover:text-paper transition-colors text-sm font-body tracking-wide">Features</Link>
            <Link href="/#levels" className="text-mist hover:text-paper transition-colors text-sm font-body tracking-wide">HSK Levels</Link>
            <Link href="/login" className="text-mist hover:text-paper transition-colors text-sm font-body tracking-wide">Sign In</Link>
            <Link href="/signup" className="bg-vermilion hover:bg-vermilionLight text-paper px-5 py-2.5 text-sm font-body font-medium rounded-sm transition-all duration-200 hover:shadow-lg hover:shadow-vermilion/20">
              Get Started
            </Link>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-paper transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64 pb-6" : "max-h-0"}`}>
          <div className="flex flex-col gap-4 pt-2 border-t border-border">
            <Link href="/#features" onClick={() => setMenuOpen(false)} className="text-mist hover:text-paper transition-colors text-sm font-body py-1">Features</Link>
            <Link href="/#levels" onClick={() => setMenuOpen(false)} className="text-mist hover:text-paper transition-colors text-sm font-body py-1">HSK Levels</Link>
            <Link href="/login" onClick={() => setMenuOpen(false)} className="text-mist hover:text-paper transition-colors text-sm font-body py-1">Sign In</Link>
            <Link href="/signup" onClick={() => setMenuOpen(false)} className="bg-vermilion text-paper px-5 py-2.5 text-sm font-body font-medium rounded-sm text-center">Get Started</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
