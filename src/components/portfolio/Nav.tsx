import { useEffect, useState } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onRecruiter, onAskAI }: { onRecruiter: () => void; onAskAI: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all ${scrolled ? "glass-strong" : ""}`}>
          <a href="#top" className="flex items-center gap-2">
            <div className="relative grid h-9 w-9 place-items-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
              <span className="font-display text-sm font-bold text-primary-foreground">PR</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-display text-sm font-semibold leading-tight">Padmapriya R</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Data · BI · Insights</div>
            </div>
          </a>
          <div className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onAskAI}
              className="hidden rounded-full glass px-3 py-1.5 text-xs font-medium text-foreground transition hover:bg-white/10 md:inline-flex"
            >
              ✨ Ask Padma AI
            </button>
            <button
              onClick={onRecruiter}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-primary-foreground transition hover:opacity-90"
              style={{ background: "var(--gradient-hero)" }}
            >
              Recruiter Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
