import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Customer Retention & Sales Performance Dashboard",
    desc: "End-to-end BI suite covering segmentation, forecasting and KPI monitoring.",
    tech: ["Power BI", "SQL", "Python"],
    features: ["Customer Segmentation", "Sales Analytics", "Retention Tracking", "Forecasting", "KPI Monitoring"],
    color: "var(--cyan-glow)",
  },
  {
    title: "DevOps Incident Intelligence Console",
    desc: "Real-time observability dashboard cutting incident detection time by 35%.",
    tech: ["AWS CloudWatch", "Python", "Tableau"],
    features: ["Anomaly Detection", "SLA Tracking", "Auto Alerts", "MTTR Insights"],
    color: "var(--violet-glow)",
  },
  {
    title: "Campaign ROI & Attribution Engine",
    desc: "Cross-channel marketing analytics that lifted campaign performance by 18%.",
    tech: ["SQL", "Power BI", "DAX"],
    features: ["Multi-Touch Attribution", "Funnel Analytics", "Cohort Lift", "Budget Optimizer"],
    color: "var(--emerald-glow)",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// selected work</div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Project Showcase</h2>
          </div>
          <a href="#contact" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            See all <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${p.color}, transparent)` }} />
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-50" style={{ background: p.color }} />

              <div className="relative">
                <div className="mb-4 flex items-center gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest">{t}</span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-semibold leading-tight">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>

                <ul className="mt-5 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="h-1 w-1 rounded-full" style={{ background: p.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                    <ExternalLink className="h-3 w-3" /> Live Demo
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                    <Github className="h-3 w-3" /> GitHub
                  </button>
                  <button className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-xs hover:bg-white/10">
                    <FileText className="h-3 w-3" /> Case Study
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
