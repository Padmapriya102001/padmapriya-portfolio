import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";

const LINKS = [
  { icon: Mail, label: "Email", value: "priyanika024@gmail.com", href: "mailto:priyanika024@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "padma-priya-b9180a2a3", href: "https://linkedin.com/in/padma-priya-b9180a2a3" },
  { icon: Github, label: "GitHub", value: "Padmapriya102001", href: "https://github.com/Padmapriya102001" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <div className="font-mono text-xs uppercase tracking-widest text-primary">// let's build something</div>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-6xl">
            Ready when <span className="text-aurora">you are</span>.
          </h2>
          <p className="mt-3 text-muted-foreground">Open to full-time, contract and consulting opportunities.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="space-y-3 lg:col-span-2"
          >
            {LINKS.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer"
                className="group flex items-center gap-4 rounded-2xl glass-strong p-4 transition hover:bg-white/10"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                  <l.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l.label}</div>
                  <div className="truncate text-sm font-medium">{l.value}</div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={(e) => {
              e.preventDefault();
              toast.success("Message queued ✨", { description: "Padmapriya will get back to you shortly." });
              setForm({ name: "", email: "", message: "" });
            }}
            className="rounded-3xl glass-strong p-6 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
              </div>
            </div>
            <div className="mt-4">
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-xl bg-white/5 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <button type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
              style={{ background: "var(--gradient-hero)" }}
            >
              Send message <Send className="h-4 w-4" />
            </button>
          </motion.form>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()} · Padmapriya R · Crafted with data & care
        </div>
      </div>
    </section>
  );
}
