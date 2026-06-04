import { motion } from "framer-motion";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart,
  Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { TrendingUp, Users, Target, Activity, Sparkles } from "lucide-react";
import { Counter } from "./Counter";

const revenue = [
  { m: "Jan", v: 240 }, { m: "Feb", v: 280 }, { m: "Mar", v: 310 }, { m: "Apr", v: 365 },
  { m: "May", v: 410 }, { m: "Jun", v: 470 }, { m: "Jul", v: 520 }, { m: "Aug", v: 590 },
  { m: "Sep", v: 640 }, { m: "Oct", v: 710 }, { m: "Nov", v: 780 }, { m: "Dec", v: 860 },
];
const retention = [
  { m: "W1", v: 72 }, { m: "W2", v: 76 }, { m: "W3", v: 78 }, { m: "W4", v: 81 },
  { m: "W5", v: 83 }, { m: "W6", v: 85 }, { m: "W7", v: 87 }, { m: "W8", v: 89 },
];
const campaigns = [
  { name: "Email", v: 64 }, { name: "Social", v: 78 }, { name: "Paid", v: 52 },
  { name: "SEO", v: 88 }, { name: "Referral", v: 41 },
];
const segments = [
  { name: "Loyal", v: 42, c: "oklch(0.82 0.16 210)" },
  { name: "New", v: 28, c: "oklch(0.7 0.22 300)" },
  { name: "At-Risk", v: 18, c: "oklch(0.82 0.17 75)" },
  { name: "Churned", v: 12, c: "oklch(0.65 0.24 25)" },
];

const tooltipStyle = {
  background: "oklch(0.17 0.03 265)",
  border: "1px solid oklch(0.3 0.04 270)",
  borderRadius: 12,
  fontFamily: "JetBrains Mono",
  fontSize: 12,
};

const KPIS = [
  { icon: TrendingUp, label: "Revenue MTD", value: 860, suffix: "K", color: "var(--emerald-glow)" },
  { icon: Users, label: "Active Users", value: 24580, suffix: "", color: "var(--cyan-glow)" },
  { icon: Target, label: "Forecast Accuracy", value: 94.2, suffix: "%", color: "var(--violet-glow)", decimals: 1 },
  { icon: Activity, label: "Pipeline Health", value: 99.2, suffix: "%", color: "var(--amber-glow)", decimals: 1 },
];

export function Dashboard() {
  return (
    <section id="dashboard" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-primary">// live preview</div>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Interactive BI Dashboard</h2>
            <p className="mt-3 max-w-xl text-muted-foreground">A sample of the kind of executive-ready dashboards I ship — animated, responsive, and decision-grade.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full glass-strong px-4 py-2">
            <span className="h-2 w-2 animate-pulse-glow rounded-full bg-emerald-glow" />
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">streaming live</span>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {KPIS.map((k, i) => (
            <motion.div
              key={k.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl glass-strong p-5"
            >
              <div className="flex items-center justify-between">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{k.label}</div>
                <k.icon className="h-4 w-4" style={{ color: k.color }} />
              </div>
              <div className="mt-3 font-display text-3xl font-bold" style={{ color: k.color }}>
                <Counter to={k.value} suffix={k.suffix} decimals={k.decimals ?? 0} />
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, delay: 0.2 + i * 0.08 }}
                  className="h-full"
                  style={{ background: k.color }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6 lg:col-span-2"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold">Revenue Trends</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">FY · USD (K)</p>
              </div>
              <span className="rounded-full bg-emerald-glow/15 px-2.5 py-0.5 font-mono text-xs text-emerald-glow">+18.4%</span>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={revenue}>
                <defs>
                  <linearGradient id="rev" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.82 0.16 210)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.82 0.16 210)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="m" stroke="oklch(0.7 0.03 260)" fontSize={11} />
                <YAxis stroke="oklch(0.7 0.03 260)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} />
                <Area type="monotone" dataKey="v" stroke="oklch(0.82 0.16 210)" strokeWidth={2.5} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6"
          >
            <h3 className="font-display text-lg font-semibold">Customer Segments</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">share of base</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={segments} dataKey="v" innerRadius={50} outerRadius={80} paddingAngle={3}>
                  {segments.map((s) => <Cell key={s.name} fill={s.c} />)}
                </Pie>
                <Tooltip contentStyle={tooltipStyle} />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
              {segments.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: s.c }} />
                  <span className="text-muted-foreground">{s.name}</span>
                  <span className="ml-auto font-mono">{s.v}%</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6"
          >
            <h3 className="font-display text-lg font-semibold">Customer Retention</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">weekly cohort %</p>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={retention}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="m" stroke="oklch(0.7 0.03 260)" fontSize={11} />
                <YAxis stroke="oklch(0.7 0.03 260)" fontSize={11} domain={[60, 100]} />
                <Tooltip contentStyle={tooltipStyle} />
                <Line type="monotone" dataKey="v" stroke="oklch(0.7 0.22 300)" strokeWidth={2.5} dot={{ r: 3, fill: "oklch(0.7 0.22 300)" }} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="rounded-3xl glass-strong p-6 lg:col-span-2"
          >
            <h3 className="font-display text-lg font-semibold">Campaign Performance</h3>
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">conversion lift by channel</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={campaigns}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(1 0 0 / 0.06)" />
                <XAxis dataKey="name" stroke="oklch(0.7 0.03 260)" fontSize={11} />
                <YAxis stroke="oklch(0.7 0.03 260)" fontSize={11} />
                <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "oklch(1 0 0 / 0.04)" }} />
                <Bar dataKey="v" radius={[8, 8, 0, 0]}>
                  {campaigns.map((_, i) => <Cell key={i} fill={i % 2 ? "oklch(0.78 0.18 165)" : "oklch(0.82 0.16 210)"} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
