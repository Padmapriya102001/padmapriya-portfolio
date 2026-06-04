import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Sparkles } from "lucide-react";


const ROLES = [
  "Data Analyst",
  "Business Analyst",
  "Power BI Developer",
  "Business Intelligence Specialist",
  "Data Storyteller",
];

const WIDGETS = [
  { label: "Revenue Growth", value: "+18%", color: "var(--emerald-glow)", x: "6%", y: "22%", d: 0 },
  { label: "Customer Retention", value: "+12%", color: "var(--cyan-glow)", x: "78%", y: "18%", d: 0.4 },
  { label: "Reporting Efficiency", value: "+40%", color: "var(--violet-glow)", x: "10%", y: "70%", d: 0.8 },
  { label: "Data Accuracy", value: "99.2%", color: "var(--amber-glow)", x: "76%", y: "68%", d: 1.2 },
];

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    if (!del && text === word) {
      const t = setTimeout(() => setDel(true), pause);
      return () => clearTimeout(t);
    }
    if (del && text === "") {
      setDel(false);
      setI((p) => p + 1);
      return;
    }
    const t = setTimeout(() => {
      setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24">
      {/* Video bg */}
      <div className="absolute inset-0 z-0">
        <video
           autoPlay
  muted
  loop
  playsInline
  className="h-full w-full object-cover opacity-90"
  style={{ filter: "brightness(0.8) saturate(120%)" }}
  >       
  <source src="/videos/padmapriya-hero.mp4" type="video/mp4" /> 
         </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute inset-0 grid-bg opacity-20" />
      </div>

      {/* Floating widgets */}
      {WIDGETS.map((w) => (
        <motion.div
          key={w.label}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: w.d + 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute z-10 hidden lg:block"
          style={{ left: w.x, top: w.y }}
        >
          <div className="animate-float glass-strong rounded-2xl p-4 shadow-elegant" style={{ animationDelay: `${w.d}s` }}>
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 animate-pulse-glow rounded-full" style={{ background: w.color, boxShadow: `0 0 12px ${w.color}` }} />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{w.label}</div>
                <div className="font-display text-2xl font-bold" style={{ color: w.color }}>{w.value}</div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Center */}
      <div className="relative z-20 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-glow" />
          Available for opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.9 }}
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          PADMAPRIYA <span className="text-aurora">R</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 flex h-12 items-center justify-center"
        >
          <span className="font-mono text-lg text-muted-foreground sm:text-2xl">
            <span className="text-primary">{">"}</span> {role}
            <span className="caret h-6 sm:h-8" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
        >
          Transforming raw data into business growth through analytics, automation & visualization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="h-4 w-4" /> Explore Portfolio
            <span className="absolute inset-0 animate-shimmer opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/10"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
          >
            <Mail className="h-4 w-4" /> Contact Me
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </div>
      </motion.a>
    </section>
  );
}
