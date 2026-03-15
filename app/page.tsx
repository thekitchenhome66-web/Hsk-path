import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const HSK_LEVELS = [
  { level: "HSK 1", chars: "150", desc: "Basic greetings & survival phrases", hanzi: "一", color: "from-emerald-900/40 to-emerald-950/20", accent: "text-emerald-400", border: "border-emerald-900/50" },
  { level: "HSK 2", chars: "300", desc: "Daily conversations & routines", hanzi: "二", color: "from-sky-900/40 to-sky-950/20", accent: "text-sky-400", border: "border-sky-900/50" },
  { level: "HSK 3", chars: "600", desc: "Express opinions & emotions", hanzi: "三", color: "from-violet-900/40 to-violet-950/20", accent: "text-violet-400", border: "border-violet-900/50" },
  { level: "HSK 4", chars: "1200", desc: "Complex topics & abstract ideas", hanzi: "四", color: "from-amber-900/40 to-amber-950/20", accent: "text-amber-400", border: "border-amber-900/50" },
  { level: "HSK 5", chars: "2500", desc: "Read newspapers & watch films", hanzi: "五", color: "from-rose-900/40 to-rose-950/20", accent: "text-rose-400", border: "border-rose-900/50" },
  { level: "HSK 6", chars: "5000+", desc: "Near-native fluency & mastery", hanzi: "六", color: "from-vermilion/20 to-vermilion/5", accent: "text-vermilion", border: "border-vermilion/30" },
];

const FEATURES = [
  { icon: "🎯", title: "Adaptive Learning", desc: "AI-powered lessons that adjust to your pace, strengths, and weak spots." },
  { icon: "🔥", title: "Daily Streaks", desc: "Build consistent habits with streak rewards and progress tracking." },
  { icon: "🀄", title: "Character Mastery", desc: "Stroke-by-stroke animations with spaced-repetition flashcards." },
  { icon: "🎧", title: "Native Audio", desc: "Authentic pronunciation examples from native Mandarin speakers." },
  { icon: "📊", title: "Exam Simulation", desc: "Practice with real HSK-format mock tests and instant analysis." },
  { icon: "🏆", title: "Leaderboards", desc: "Compete with learners globally and climb the weekly rankings." },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-ink flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="hanzi-bg top-8 right-[-2%] opacity-60">学</div>
          <div className="hanzi-bg bottom-[-4%] left-[-3%] opacity-40" style={{ fontSize: "clamp(100px, 15vw, 200px)" }}>中</div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-vermilion/5 blur-[120px]" />
          <div className="absolute top-20 right-1/4 w-[200px] h-[200px] rounded-full bg-gold/5 blur-[80px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-surfaceLight border border-border rounded-full px-4 py-2 mb-8 opacity-0-init animate-fade-in delay-100">
            <span className="w-2 h-2 rounded-full bg-vermilion animate-pulse" />
            <span className="text-mist text-xs font-body tracking-widest uppercase">HSK 1 – 6 · 10,000+ learners</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-6 opacity-0-init animate-fade-up delay-200">
            <span className="text-paper">Your path to</span>
            <br />
            <span className="text-gradient">Chinese fluency</span>
            <br />
            <span className="text-paper">starts here.</span>
          </h1>

          <p className="text-mist text-base sm:text-lg font-body max-w-xl mx-auto leading-relaxed mb-10 opacity-0-init animate-fade-up delay-300">
            A Duolingo-style platform crafted for HSK mastery. Structured levels, gamified lessons, and real exam preparation — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0-init animate-fade-up delay-400">
            <Link
              href="/signup"
              className="w-full sm:w-auto bg-vermilion hover:bg-vermilionLight text-paper font-body font-semibold px-8 py-4 rounded-sm text-base transition-all duration-200 glow-vermilion hover:scale-[1.02] active:scale-[0.98]"
            >
              Start Learning — It&apos;s Free
            </Link>
            <Link
              href="/#levels"
              className="w-full sm:w-auto border border-border hover:border-mist text-mist hover:text-paper font-body font-medium px-8 py-4 rounded-sm text-base transition-all duration-200"
            >
              Explore HSK Levels →
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12 opacity-0-init animate-fade-up delay-500">
            {[
              { value: "10K+", label: "Learners" },
              { value: "6", label: "HSK Levels" },
              { value: "98%", label: "Pass Rate" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-display text-2xl font-bold text-paper">{value}</div>
                <div className="text-mist text-xs font-body uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0-init animate-fade-in delay-600">
          <span className="text-mist text-xs font-body uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-mist to-transparent" />
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-4 bg-surface">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-vermilion text-xs font-body uppercase tracking-widest mb-3">Why HSKPath</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper">Everything you need to pass</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {FEATURES.map(({ icon, title, desc }) => (
              <div key={title} className="bg-surface p-8 group hover:bg-surfaceLight transition-colors duration-300">
                <div className="text-3xl mb-4">{icon}</div>
                <h3 className="font-display text-lg font-semibold text-paper mb-2 group-hover:text-gold transition-colors">{title}</h3>
                <p className="text-mist text-sm font-body leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HSK LEVELS */}
      <section id="levels" className="py-24 px-4 bg-ink relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-vermilion/3 blur-[150px] rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-vermilion text-xs font-body uppercase tracking-widest mb-3">The Journey</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper">Six levels. One destination.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HSK_LEVELS.map(({ level, chars, desc, hanzi, color, accent, border }) => (
              <div key={level} className={`relative bg-gradient-to-br ${color} border ${border} rounded-sm p-6 group hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden`}>
                <div className={`absolute -right-3 -top-3 font-display text-7xl font-bold opacity-10 ${accent}`}>{hanzi}</div>
                <div className="relative z-10">
                  <div className={`font-body text-xs font-semibold uppercase tracking-widest mb-2 ${accent}`}>{level}</div>
                  <div className="font-display text-2xl font-bold text-paper mb-1">
                    {chars} <span className="text-base font-normal text-mist">characters</span>
                  </div>
                  <p className="text-mist text-sm font-body leading-relaxed">{desc}</p>
                  <div className={`mt-4 text-xs font-body font-semibold ${accent} group-hover:underline`}>Start level →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-4 bg-vermilion relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hanzi-bg top-[-20%] right-[-5%] text-white/10">道</div>
        </div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-paper mb-6">Begin your path today.</h2>
          <p className="text-paper/70 font-body text-lg mb-10">Join thousands of learners already on their way to HSK certification.</p>
          <Link href="/signup" className="inline-block bg-paper text-vermilion font-body font-bold px-10 py-4 rounded-sm text-base hover:bg-ink hover:text-paper transition-all duration-300">
            Create Free Account
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
