import Link from "next/link";

const STREAK_DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const COMPLETED_DAYS = [0, 1, 2, 3];

const LESSONS = [
  { id: 1, title: "Greetings & Introductions", level: "HSK 1", xp: 20, complete: true, hanzi: "你好" },
  { id: 2, title: "Numbers & Counting", level: "HSK 1", xp: 20, complete: true, hanzi: "数字" },
  { id: 3, title: "Family Members", level: "HSK 1", xp: 25, complete: false, active: true, hanzi: "家人" },
  { id: 4, title: "Time & Dates", level: "HSK 1", xp: 25, complete: false, hanzi: "时间" },
  { id: 5, title: "Food & Eating", level: "HSK 1", xp: 30, complete: false, hanzi: "饮食" },
];

const STATS = [
  { label: "Day Streak", value: "4", icon: "🔥", sub: "Keep it up!" },
  { label: "XP Earned", value: "480", icon: "⚡", sub: "This week" },
  { label: "Characters", value: "67", icon: "🀄", sub: "Mastered" },
  { label: "Accuracy", value: "91%", icon: "🎯", sub: "Last session" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-ink">
      {/* Top nav */}
      <header className="sticky top-0 z-40 bg-ink/90 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-vermilion font-display text-2xl font-bold">汉</span>
            <span className="font-display text-paper text-lg font-semibold hidden sm:block">
              HSK<span className="text-vermilion">Path</span>
            </span>
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 text-gold font-body text-sm font-semibold">
              <span>🔥</span><span>4</span>
            </div>
            <div className="flex items-center gap-1.5 text-paper font-body text-sm font-semibold">
              <span>⚡</span><span>480 XP</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-vermilion/20 border border-vermilion/40 flex items-center justify-center text-vermilion text-xs font-body font-bold">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-vermilion/20 to-vermilion/5 border border-vermilion/20 rounded-sm p-6 mb-8 relative overflow-hidden">
          <div className="absolute right-4 top-0 font-display text-7xl font-bold text-vermilion/10 leading-none select-none">加油</div>
          <div className="relative z-10">
            <p className="text-vermilion text-xs font-body uppercase tracking-widest mb-1">Good morning</p>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-paper">Ready to learn, Alex?</h1>
            <p className="text-mist font-body text-sm mt-1">You&apos;re on a 4-day streak. Don&apos;t break it!</p>
          </div>
        </div>

        {/* Weekly streak */}
        <div className="bg-surface border border-border rounded-sm p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-body text-xs font-semibold uppercase tracking-widest text-mist">Weekly Progress</h2>
            <span className="text-gold text-xs font-body font-semibold">4 / 7 days</span>
          </div>
          <div className="flex gap-2">
            {STREAK_DAYS.map((day, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div className={`w-full aspect-square rounded-sm flex items-center justify-center text-xs font-body font-semibold transition-all duration-200 ${
                  COMPLETED_DAYS.includes(i) ? "bg-vermilion text-paper" : i === 4 ? "border-2 border-vermilion/50 text-mist bg-surfaceLight" : "bg-surfaceLight text-mist/40"
                }`}>
                  {COMPLETED_DAYS.includes(i) ? "✓" : i === 4 ? "→" : ""}
                </div>
                <span className="text-mist text-[10px] font-body">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {STATS.map(({ label, value, icon, sub }) => (
            <div key={label} className="bg-surface border border-border rounded-sm p-4">
              <div className="text-xl mb-2">{icon}</div>
              <div className="font-display text-2xl font-bold text-paper">{value}</div>
              <div className="text-paper text-xs font-body font-semibold mt-0.5">{label}</div>
              <div className="text-mist text-[10px] font-body mt-0.5">{sub}</div>
            </div>
          ))}
        </div>

        {/* Lesson path */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl font-bold text-paper">HSK 1 Path</h2>
            <span className="text-mist text-xs font-body">2 / 5 complete</span>
          </div>
          <div className="space-y-3">
            {LESSONS.map((lesson, i) => (
              <div key={lesson.id} className={`relative flex items-center gap-4 p-5 rounded-sm border transition-all duration-200 ${
                lesson.complete ? "bg-surface border-border opacity-60" :
                (lesson as any).active ? "bg-gradient-to-r from-vermilion/15 to-surface border-vermilion/40 cursor-pointer hover:from-vermilion/20" :
                "bg-surface border-border opacity-40 cursor-not-allowed"
              }`}>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-body font-bold ${
                  lesson.complete ? "bg-emerald-900/60 text-emerald-400 border border-emerald-800" :
                  (lesson as any).active ? "bg-vermilion text-paper" :
                  "bg-surfaceLight text-mist border border-border"
                }`}>
                  {lesson.complete ? "✓" : i + 1}
                </div>

                <div className="flex-shrink-0 hidden sm:flex items-center justify-center w-12 h-12 bg-ink rounded-sm border border-border">
                  <span className="font-display text-lg font-bold text-paper/60">{lesson.hanzi}</span>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className={`font-body font-semibold text-sm ${(lesson as any).active ? "text-paper" : lesson.complete ? "text-paper/60" : "text-mist/40"}`}>
                      {lesson.title}
                    </h3>
                    {(lesson as any).active && (
                      <span className="bg-vermilion/20 text-vermilion text-[10px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full">Next</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-mist text-[11px] font-body">{lesson.level}</span>
                    <span className="text-mist/40 text-[11px]">·</span>
                    <span className="text-gold text-[11px] font-body">⚡ {lesson.xp} XP</span>
                  </div>
                </div>

                {(lesson as any).active && (
                  <Link href="#" className="flex-shrink-0 bg-vermilion hover:bg-vermilionLight text-paper font-body font-semibold text-xs px-4 py-2 rounded-sm transition-all duration-200">
                    Start
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
