"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      setError(
        authError.message === "Invalid login credentials"
          ? "Incorrect email or password. Please try again."
          : authError.message
      );
      setLoading(false);
      return;
    }

router.refresh();
router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-ink flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-surface border-r border-border items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-vermilion/10 blur-[100px]" />
        </div>
        <div className="relative z-10 text-center px-16">
          <div className="font-display text-[160px] font-bold leading-none text-gradient opacity-20 select-none">学</div>
          <p className="font-display text-2xl font-semibold text-paper mt-4">Welcome back.</p>
          <p className="text-mist font-body text-sm mt-3 leading-relaxed max-w-xs mx-auto">
            Continue your journey towards HSK mastery. Every character learned is a step forward.
          </p>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 py-16 sm:px-12">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <span className="text-vermilion font-display text-2xl font-bold">汉</span>
          <span className="font-display text-paper text-lg font-semibold">HSK<span className="text-vermilion">Path</span></span>
        </Link>

        <div className="w-full max-w-sm">
          <h1 className="font-display text-3xl font-bold text-paper mb-2">Sign in</h1>
          <p className="text-mist font-body text-sm mb-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-vermilion hover:underline font-medium">Sign up free</Link>
          </p>

          {error && (
            <div className="bg-red-950/50 border border-red-800/60 text-red-300 font-body text-sm px-4 py-3 rounded-sm mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-paper text-xs font-body font-semibold uppercase tracking-wider mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="w-full bg-surfaceLight border border-border rounded-sm px-4 py-3 text-paper font-body text-sm placeholder:text-mist/50 focus:outline-none focus:border-vermilion transition-colors"
              />
            </div>

            <div>
              <label className="block text-paper text-xs font-body font-semibold uppercase tracking-wider mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="w-full bg-surfaceLight border border-border rounded-sm px-4 py-3 text-paper font-body text-sm placeholder:text-mist/50 focus:outline-none focus:border-vermilion transition-colors"
              />
            </div>

            <div className="flex justify-end">
              <Link href="#" className="text-mist hover:text-paper text-xs font-body transition-colors">Forgot password?</Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-vermilion hover:bg-vermilionLight disabled:opacity-60 disabled:cursor-not-allowed text-paper font-body font-semibold py-3.5 rounded-sm transition-all duration-200 text-sm mt-2"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Signing in…
                </span>
              ) : "Sign In"}
            </button>
          </form>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-mist text-xs font-body">or</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          <button className="w-full border border-border hover:border-mist text-mist hover:text-paper font-body text-sm py-3 rounded-sm transition-all duration-200 flex items-center justify-center gap-3">
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
