import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-ink mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-vermilion font-display text-2xl font-bold">汉</span>
              <span className="font-display text-paper text-lg font-semibold">HSK<span className="text-vermilion">Path</span></span>
            </div>
            <p className="text-mist text-sm font-body leading-relaxed">
              Master Chinese with a structured, gamified path built for HSK success.
            </p>
          </div>

          <div>
            <h4 className="text-paper text-xs font-body font-semibold uppercase tracking-widest mb-4">Learn</h4>
            <ul className="space-y-2">
              {["HSK 1", "HSK 2", "HSK 3", "HSK 4+"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-mist hover:text-paper text-sm font-body transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-paper text-xs font-body font-semibold uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Privacy", "Terms"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-mist hover:text-paper text-sm font-body transition-colors">{l}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-mist text-xs font-body">© 2026 HSKPath. All rights reserved.</p>
          <p className="text-mist text-xs font-body">Made with 热情 (rèqíng)</p>
        </div>
      </div>
    </footer>
  );
}
