import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  "Loading Analytics Engine...",
  "Connecting Data Sources...",
  "Generating Insights...",
  "Building Dashboards...",
  "Portfolio Ready",
];

export function Preloader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step < STEPS.length - 1) {
      const t = setTimeout(() => setStep(step + 1), 520);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDone(true);
      setTimeout(onDone, 700);
    }, 700);
    return () => clearTimeout(t);
  }, [step, onDone]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 flex flex-col items-center gap-10"
          >
            <div className="relative">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-primary/30" style={{ width: 180, height: 180 }} />
              <div className="absolute inset-2 animate-spin-slow rounded-full border border-accent/40" style={{ width: 164, height: 164, animationDirection: "reverse", animationDuration: "20s" }} />
              <div className="flex h-[180px] w-[180px] items-center justify-center">
                <div className="text-center">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Padma · OS</div>
                  <div className="mt-2 font-display text-3xl font-bold text-aurora">PR</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h1 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                PADMAPRIYA <span className="text-aurora">R</span>
              </h1>
              <div className="mt-6 h-7 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="font-mono text-sm text-muted-foreground"
                  >
                    <span className="text-primary">›</span> {STEPS[step]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="h-[2px] w-72 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
                transition={{ duration: 0.4 }}
                className="h-full"
                style={{ background: "var(--gradient-hero)" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
