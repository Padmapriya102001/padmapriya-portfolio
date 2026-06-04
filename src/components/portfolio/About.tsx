import { motion } from "framer-motion";
import { Counter } from "./Counter";

const STATS = [
  { value: 8, suffix: "M+", label: "Records Processed" },
  { value: 18, suffix: "+", label: "Dashboards Delivered" },
  { value: 99.2, suffix: "%", decimals: 1, label: "Data Accuracy" },
  { value: 40, suffix: "%", label: "Reporting Automation" },
];

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// about</div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Turning <span className="text-aurora">complex data</span> into clear decisions.
            </h2>
            <div className="relative mt-8 overflow-hidden rounded-3xl glass-strong p-8 shadow-elegant">
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 blur-3xl" style={{ background: "var(--gradient-hero)" }} />
              <p className="relative text-base leading-relaxed text-muted-foreground">
                Analytical and detail-oriented Data Analyst passionate about transforming complex business data
                into actionable insights. Experienced in <span className="text-foreground">SQL, Python, Power BI, Tableau, AWS,</span> and
                <span className="text-foreground"> Advanced Excel</span> with a proven record of delivering dashboards,
                automation solutions, and strategic business recommendations.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["SQL", "Python", "Power BI", "Tableau", "AWS", "Excel"].map((t) => (
                  <span key={t} className="rounded-full border border-border bg-white/5 px-3 py-1 font-mono text-xs">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative overflow-hidden rounded-3xl glass-strong p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <div className="font-display text-4xl font-bold sm:text-5xl text-aurora">
                  <Counter to={s.value} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-40" style={{ background: "var(--gradient-hero)" }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
