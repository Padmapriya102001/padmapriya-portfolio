import { motion } from "framer-motion";
import { Code2, BarChart3, Cloud, Zap } from "lucide-react";

const GROUPS = [
  {
    icon: Code2,
    title: "Programming",
    color: "var(--cyan-glow)",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 88 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 82 },
    ],
  },
  {
    icon: BarChart3,
    title: "BI & Visualization",
    color: "var(--violet-glow)",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "Tableau", level: 88 },
      { name: "Excel", level: 96 },
      { name: "Power Query", level: 90 },
      { name: "DAX", level: 87 },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud (AWS)",
    color: "var(--emerald-glow)",
    skills: [
      { name: "CloudWatch", level: 85 },
      { name: "EC2", level: 82 },
      { name: "S3", level: 88 },
      { name: "RDS", level: 80 },
      { name: "EKS", level: 75 },
    ],
  },
  {
    icon: Zap,
    title: "Automation",
    color: "var(--amber-glow)",
    skills: [
      { name: "VBA", level: 86 },
      { name: "Excel Macros", level: 92 },
      { name: "Python Automation", level: 90 },
    ],
  },
];

function Radial({ level, color }: { level: number; color: string }) {
  const c = 2 * Math.PI * 26;
  return (
    <div className="relative h-16 w-16">
      <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="26" fill="none" stroke="oklch(1 0 0 / 0.08)" strokeWidth="5" />
        <motion.circle
          cx="32" cy="32" r="26" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c - (c * level) / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ filter: `drop-shadow(0 0 6px ${color})` }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center font-mono text-xs font-semibold">{level}%</div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// stack</div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Toolbox & Proficiency</h2>
          <p className="mt-3 text-muted-foreground">A futuristic dashboard view of what I work with daily.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.7 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-7"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: `${g.color}20`, border: `1px solid ${g.color}40` }}>
                    <g.icon className="h-5 w-5" style={{ color: g.color }} />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{g.title}</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {g.skills.length} tools
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {g.skills.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 rounded-xl border border-border bg-white/[0.02] p-3">
                    <Radial level={s.level} color={g.color} />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium">{s.name}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">proficient</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: `radial-gradient(400px circle at 50% 0%, ${g.color}20, transparent 60%)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
