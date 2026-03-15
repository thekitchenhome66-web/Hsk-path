"use client";

import { useState } from "react";
import Link from "next/link";

const GOALS = ["Pass HSK 1", "Pass HSK 2", "Pass HSK 3", "Pass HSK 4", "Pass HSK 5–6", "General fluency"];

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goal, setGoal] = useState("");
  const [loading, setLoading] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-ink flex flex-col items-center justify-center px-4 py-16">
      <Link href="/" className="flex items-center gap-2 mb-12">
        <span className="text-vermilion font-display text-2xl font-bold">汉</span>
        <span className="font-display text-paper text-lg font-semibold">HSK<span className="text-vermilion">Path</span></span>
      </Link>

      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-10">
        {[1, 2].map((s) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-semibold transition-all duration-300 ${step >= s ? "bg-vermilion text-paper" : "bg-surfaceLight border border-border text-mist"}`}>
              {s}
            </div>
            {s < 2 && <div className={`w-12 h-px transition-colors duration-300 ${step > s ? "bg-vermilion" : "bg-border"}`} />}
          </div>
        ))}
      </div>

      <div className="w-full max-w-sm">
        {step === 1 ? (
          <>
            <h1 className="font-display text-3xl font-bold text-paper mb-2">Create account</h1>
            <p className="text-mist font-body text-sm mb-8">
              Already have one?{" "}
              <Link href="/login" className="text-vermilion hover:underline font-medium">Sign in</Link>
            </p>
            <form onSubmit={handleStep1} className="space-y-4">
              <div>
                <label className="block text-paper text-xs font-body font-semibold uppercase tracking-wider mb-2">Full Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="Your name"
                  className="w-full bg-surfaceLight border border-border rounded-sm px-4 py-3 text-paper font-body text-sm placeholder:text-mist/50 focus:outline-none focus:border-vermilion transition-colors" />
              </div>
              <div>
                <label className="block text-paper text-xs font-body font-semibold uppercase tracking-wider mb-2">Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="you@example.com"
                  className="w-full bg-surfaceLight border border-border rounded-sm px-4 py-3 text-paper font-body text-sm placeholder:text-mist/50 focus:outline-none focus:border-vermilion transition-colors" />
              </div>
              <div>
                <label className="block text-paper text-xs font-body font-semibold uppercase tracking-wider mb-2">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Min. 8 characters" minLength={8}
                  className="w-full bg-surfaceLight border border-border rounded-sm px-4 py-3 text-paper font-body text-sm placeholder:text-mist/50 focus:outline-none focus:border-vermilion transition-colors" />
              </div>
              <button type="submit" className="w-full bg-vermilion hover:bg-vermilionLight text-paper font-body font-semibold py-3.5 rounded-sm transition-all duration-200 text-sm mt-2">
                Continue →
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="font-display text-3xl font-bold text-paper mb-2">Set your goal</h1>
            <p className="text-mist font-body text-sm mb-8">We&apos;ll personalise your learning path.</p>
            <form onSubmit={handleStep2} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {GOALS.map((g) => (
                  <button key={g} type="button" onClick={() => setGoal(g)}
                    className={`text-left p-4 rounded-sm border font-body text-sm transition-all duration-200 ${goal === g ? "border-vermilion bg-vermilion/10 text-paper" : "border-border bg-surfaceLight text-mist hover:border-mist hover:text-paper"}`}>
                    {g}
                  </button>
                ))}
              </div>
              <button type="submit" disabled={!goal || loading}
                className="w-full bg-vermilion hover:bg-vermilionLight disabled:opacity-50 disabled:cursor-not-allowed text-paper font-body font-semibold py-3.5 rounded-sm transition-all duration-200 text-sm mt-2">
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Creating account…
                  </span>
                ) : "Start Learning"}
              </button>
              <button type="button" onClick={() => setStep(1)} className="w-full text-mist hover:text-paper font-body text-sm py-2 transition-colors">
                ← Back
              </button>
            </form>
          </>
        )}

        <p className="text-mist/50 text-xs font-body text-center mt-8 leading-relaxed">
          By continuing, you agree to our{" "}
          <Link href="#" className="underline hover:text-mist">Terms</Link> and{" "}
          <Link href="#" className="underline hover:text-mist">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  );
}
