import { motion } from "framer-motion";
import { Award, GraduationCap, ShieldCheck } from "lucide-react";
import { Counter } from "./Counter";

const KPI = [
  { v: 99.2, s: "%", l: "Data Accuracy", d: 1 },
  { v: 40, s: "%", l: "Automation Improvement" },
  { v: 12, s: "%", l: "Customer Retention Growth" },
  { v: 18, s: "%", l: "Campaign Effectiveness Growth" },
  { v: 20, s: "%", l: "Inventory Cost Reduction" },
];

export function Achievements() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// impact</div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Achievements & Credentials</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {KPI.map((k, i) => (
            <motion.div
              key={k.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl glass-strong p-6 text-center"
            >
              <div className="font-display text-4xl font-bold text-aurora">
                <Counter to={k.v} suffix={k.s} decimals={k.d ?? 0} />
              </div>
              <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k.l}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl glass-strong p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" style={{ background: "var(--amber-glow)", opacity: 0.3 }} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--amber-glow)20", border: "1px solid var(--amber-glow)" }}>
                  <ShieldCheck className="h-6 w-6" style={{ color: "var(--amber-glow)" }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Certification</div>
                  <h3 className="font-display text-xl font-semibold">AWS DevOps Engineer</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Hands-on experience designing, deploying and monitoring AWS infrastructure with CI/CD pipelines and observability.
              </p>
              <div className="mt-5 flex items-center gap-2 font-mono text-xs">
                <Award className="h-3.5 w-3.5 text-amber-glow" />
                <span className="text-muted-foreground">Verified · Cloud Practitioner Track</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl glass-strong p-8"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl" style={{ background: "var(--violet-glow)", opacity: 0.3 }} />
            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: "var(--violet-glow)20", border: "1px solid var(--violet-glow)" }}>
                  <GraduationCap className="h-6 w-6" style={{ color: "var(--violet-glow)" }} />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Education</div>
                  <h3 className="font-display text-xl font-semibold">Bachelor of Computer Applications</h3>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">CGPA <span className="text-foreground font-semibold">8.0 / 10</span> · Focused on data structures, databases & business systems.</p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: "80%" }} viewport={{ once: true }}
                  transition={{ duration: 1.4 }} className="h-full"
                  style={{ background: "var(--gradient-hero)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
