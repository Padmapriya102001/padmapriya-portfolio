import { motion } from "framer-motion";

const CITIES = [
  { name: "India", x: 70, y: 55 },
  { name: "USA", x: 22, y: 45 },
  { name: "UK", x: 48, y: 32 },
  { name: "Singapore", x: 76, y: 65 },
  { name: "Australia", x: 84, y: 78 },
];

export function GlobeSection() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// global data network</div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Data, Connected Worldwide</h2>
          <p className="mt-3 text-muted-foreground">Live signal across the regions I've delivered analytics for.</p>
        </div>

        <div className="relative mx-auto aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-3xl glass-strong p-8">
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

          {/* Globe core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-[340px] w-[340px] sm:h-[440px] sm:w-[440px]">
              <div className="absolute inset-0 rounded-full border border-primary/30 animate-spin-slow" />
              <div className="absolute inset-6 rounded-full border border-accent/30 animate-spin-slow" style={{ animationDuration: "40s", animationDirection: "reverse" }} />
              <div className="absolute inset-12 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: "50s" }} />
              <div className="absolute inset-0 rounded-full opacity-40" style={{ background: "var(--gradient-aurora)", filter: "blur(60px)" }} />
              <div className="absolute inset-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-glow" />
            </div>
          </div>

          {/* Connection SVG */}
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="gline" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.82 0.16 210)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.82 0.16 210)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="oklch(0.7 0.22 300)" stopOpacity="0" />
              </linearGradient>
            </defs>
            {CITIES.map((c, i) => {
              const next = CITIES[(i + 1) % CITIES.length];
              return (
                <motion.line
                  key={c.name}
                  x1={c.x} y1={c.y} x2={next.x} y2={next.y}
                  stroke="url(#gline)" strokeWidth="0.3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
              );
            })}
          </svg>

          {CITIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.15 }}
              className="absolute"
              style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%,-50%)" }}
            >
              <div className="relative">
                <div className="absolute inset-0 animate-pulse-glow rounded-full bg-primary/40" style={{ width: 24, height: 24, left: -8, top: -8 }} />
                <div className="h-2 w-2 rounded-full bg-primary shadow-glow" />
                <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md glass px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest">
                  {c.name}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Floating numbers */}
          <div className="absolute left-6 top-6 glass-strong rounded-xl p-3 font-mono text-xs">
            <div className="text-muted-foreground">LIVE QUERIES</div>
            <div className="text-aurora text-lg font-bold">1,284 / sec</div>
          </div>
          <div className="absolute right-6 bottom-6 glass-strong rounded-xl p-3 font-mono text-xs">
            <div className="text-muted-foreground">UPTIME</div>
            <div className="text-aurora text-lg font-bold">99.98%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
