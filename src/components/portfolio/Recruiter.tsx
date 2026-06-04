import { motion, AnimatePresence } from "framer-motion";
import { X, Briefcase, Database, BarChart3, Zap, CheckCircle2, Clock } from "lucide-react";

const ITEMS = [
  { icon: Clock, label: "Experience", value: "3+ Years" },
  { icon: BarChart3, label: "Skills", value: "SQL · Python · Power BI · Tableau · AWS" },
  { icon: Database, label: "Dashboards", value: "18+" },
  { icon: Briefcase, label: "Records Processed", value: "8M+" },
  { icon: Zap, label: "Automation", value: "40% Reduction" },
  { icon: CheckCircle2, label: "Availability", value: "Open for Data Analyst Opportunities" },
];

export function Recruiter({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center p-4"
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-strong shadow-elegant"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-hero)" }} />

            <div className="relative p-8">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">// recruiter summary</div>
                  <h3 className="mt-2 font-display text-3xl font-bold">Padmapriya R</h3>
                  <p className="text-muted-foreground">Data Analyst · BI Specialist · Storyteller</p>
                </div>
                <button onClick={onClose} className="rounded-full p-2 hover:bg-white/10"><X className="h-4 w-4" /></button>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {ITEMS.map((it, i) => (
                  <motion.div
                    key={it.label}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-white/5 p-4"
                  >
                    <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg" style={{ background: "var(--gradient-hero)" }}>
                      <it.icon className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{it.label}</div>
                      <div className="text-sm font-medium">{it.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                <a href="mailto:priyanika024@gmail.com" className="rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
                  Schedule a call
                </a>
                <a href="#contact" onClick={onClose} className="rounded-full glass px-5 py-2.5 text-sm font-semibold">
                  See full contact
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
