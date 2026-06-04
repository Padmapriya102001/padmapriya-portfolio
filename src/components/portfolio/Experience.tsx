import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ROLES = [
  {
    company: "Cloudbees Tech",
    role: "DevOps & Business Analyst",
    period: "Present",
    achievements: [
      "Built 8+ dashboards driving exec decisions",
      "Processed 3M+ records across pipelines",
      "35% faster incident detection",
      "99.2% reporting accuracy",
    ],
  },
  {
    company: "Mobius Knowledge Services",
    role: "Business & Data Analyst",
    period: "Previous",
    achievements: [
      "Built 10+ dashboards across functions",
      "Processed 5M+ records",
      "12% customer retention growth",
      "18% campaign performance increase",
      "40% reduction in manual reporting",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// timeline</div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Work Experience</h2>
          <p className="mt-3 text-muted-foreground">Shipping measurable outcomes across analytics, BI and automation.</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-px md:left-1/2" style={{ background: "linear-gradient(to bottom, transparent, var(--cyan-glow), var(--violet-glow), transparent)" }} />

          <div className="space-y-12">
            {ROLES.map((r, i) => (
              <motion.div
                key={r.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`relative grid gap-6 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}`}>
                  <div className="font-mono text-xs uppercase tracking-widest text-primary">{r.period}</div>
                  <h3 className="mt-2 font-display text-2xl font-bold">{r.company}</h3>
                  <p className="mt-1 text-muted-foreground">{r.role}</p>
                </div>

                <div className="absolute left-4 top-1 md:left-1/2 md:-translate-x-1/2">
                  <div className="grid h-8 w-8 place-items-center rounded-full glass-strong shadow-glow">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>
                </div>

                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="rounded-2xl glass-strong p-6">
                    <ul className="space-y-2 text-sm">
                      {r.achievements.map((a) => (
                        <li key={a} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary shadow-glow" />
                          <span className="text-muted-foreground">{a}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
