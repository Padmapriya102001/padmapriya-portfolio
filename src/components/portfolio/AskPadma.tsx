import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Send } from "lucide-react";

const SUGGESTIONS = [
  "What tools do you know?",
  "Tell me about your projects.",
  "What is your experience?",
  "Show your skills.",
  "Why should we hire you?",
];

const ANSWERS: Record<string, string> = {
  "What tools do you know?":
    "SQL, Python (Pandas/NumPy/Matplotlib), Power BI, Tableau, Advanced Excel, DAX, Power Query, and AWS (CloudWatch, EC2, S3, RDS, EKS).",
  "Tell me about your projects.":
    "I've shipped 18+ dashboards including a Customer Retention & Sales Performance suite (Power BI + SQL + Python), an incident intelligence console for DevOps, and a campaign ROI attribution engine that lifted performance by 18%.",
  "What is your experience?":
    "3+ years across Cloudbees Tech and Mobius Knowledge Services as a Data / Business Analyst — processing 8M+ records and automating 40% of reporting workflows.",
  "Show your skills.":
    "Programming, BI & Visualization, Cloud (AWS) and Automation — see the Skills section above for proficiency breakdowns.",
  "Why should we hire you?":
    "I combine deep technical fluency with a storyteller's eye — turning complex data into decisions that move revenue, retention and efficiency at the same time.",
};

export function AskPadma({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([
    { role: "ai", text: "Hi! I'm Padma AI ✨ Ask me anything about my work, tools or experience." },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    const answer = ANSWERS[text] ?? "Great question! Padmapriya specializes in turning raw data into business growth via analytics, BI dashboards and automation. Reach out via the contact section for specifics.";
    setMessages((m) => [...m, { role: "user", text }, { role: "ai", text: answer }]);
    setInput("");
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-end p-4 sm:place-items-center"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl glass-strong shadow-elegant"
          >
            <div className="flex items-center justify-between border-b border-border p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ background: "var(--gradient-hero)" }}>
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display font-semibold">Ask Padma AI</div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="h-1.5 w-1.5 animate-pulse-glow rounded-full bg-emerald-glow" /> online
                  </div>
                </div>
              </div>
              <button onClick={onClose} className="rounded-full p-2 hover:bg-white/10"><X className="h-4 w-4" /></button>
            </div>

            <div className="max-h-[55vh] space-y-3 overflow-y-auto p-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${m.role === "user" ? "text-primary-foreground" : "glass text-foreground"}`}
                    style={m.role === "user" ? { background: "var(--gradient-hero)" } : undefined}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-3">
              <div className="mb-2 flex flex-wrap gap-1.5">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-border bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground hover:text-foreground">
                    {s}
                  </button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a question..."
                  className="flex-1 rounded-full bg-white/5 px-4 py-2 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-primary"
                />
                <button type="submit" className="grid h-9 w-9 place-items-center rounded-full" style={{ background: "var(--gradient-hero)" }}>
                  <Send className="h-4 w-4 text-primary-foreground" />
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
