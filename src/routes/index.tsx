import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Toaster } from "sonner";
import { Preloader } from "@/components/portfolio/Preloader";
import { MouseGlow } from "@/components/portfolio/MouseGlow";
import { Particles } from "@/components/portfolio/Particles";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { GlobeSection } from "@/components/portfolio/Globe";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Dashboard } from "@/components/portfolio/Dashboard";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { AskPadma } from "@/components/portfolio/AskPadma";
import { Recruiter } from "@/components/portfolio/Recruiter";
import { Contact } from "@/components/portfolio/Contact";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padmapriya R — Data Analyst · BI Specialist · Data Storyteller" },
      { name: "description", content: "Award-winning portfolio of Padmapriya R: Data Analyst, Business Analyst & Power BI Developer turning raw data into business growth." },
      { property: "og:title", content: "Padmapriya R — Data Analyst Portfolio" },
      { property: "og:description", content: "Analytics · BI · Automation · Visualization. 18+ dashboards. 8M+ records. 99.2% accuracy." },
    ],
  }),
  component: Index,
});

function Index() {
  const [loading, setLoading] = useState(true);
  const [askOpen, setAskOpen] = useState(false);
  const [recruiterOpen, setRecruiterOpen] = useState(false);

  return (
    <>
      <Preloader onDone={() => setLoading(false)} />
      <Toaster theme="dark" position="bottom-right" />
      {!loading && (
        <div className="relative">
          <Particles />
          <MouseGlow />
          <Nav onRecruiter={() => setRecruiterOpen(true)} onAskAI={() => setAskOpen(true)} />
          <main className="relative z-10">
            <Hero />
            <GlobeSection />
            <About />
            <Skills />
            <Dashboard />
            <Experience />
            <Projects />
            <Achievements />
            <Contact />
          </main>

          {/* Floating Ask AI FAB (mobile) */}
          <button
            onClick={() => setAskOpen(true)}
            className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full shadow-glow"
            style={{ background: "var(--gradient-hero)" }}
            aria-label="Ask Padma AI"
          >
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </button>

          <AskPadma open={askOpen} onClose={() => setAskOpen(false)} />
          <Recruiter open={recruiterOpen} onClose={() => setRecruiterOpen(false)} />
        </div>
      )}
    </>
  );
}
