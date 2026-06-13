import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Gauge,
  TrendingUp,
  Users,
  Eye,
  BarChart3,
} from "lucide-react";
import { Section } from "./Section";

const tabs = [
  { id: "gen", label: "Content Generator", icon: Sparkles },
  { id: "brand", label: "Brand Score", icon: Gauge },
  { id: "viral", label: "Viral Prediction", icon: TrendingUp },
  { id: "crm", label: "CRM", icon: Users },
  { id: "comp", label: "Competitor Intel", icon: Eye },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
];

export function Showcase() {
  const [active, setActive] = useState("gen");

  return (
    <Section
      eyebrow="Product tour"
      title={<>Every surface, <span className="text-gradient">production-grade</span></>}
      description="Tap through the modules. Real workflows, designed for daily use."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_1fr]">
        <div className="space-y-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-all ${
                active === t.id
                  ? "glass-strong text-foreground"
                  : "text-muted-foreground hover:bg-white/5"
              }`}
            >
              <t.icon className="h-4 w-4" />
              {t.label}
            </button>
          ))}
        </div>

        <div className="relative min-h-[420px] overflow-hidden rounded-2xl glass-strong p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {active === "gen" && <PanelGen />}
              {active === "brand" && <PanelBrand />}
              {active === "viral" && <PanelViral />}
              {active === "crm" && <PanelCRM />}
              {active === "comp" && <PanelComp />}
              {active === "analytics" && <PanelAnalytics />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function PanelGen() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
      <div className="rounded-xl bg-white/[0.03] p-4">
        <div className="text-xs text-muted-foreground">Prompt</div>
        <div className="mt-2 text-sm">
          "Write a LinkedIn post about scaling AI workflows for solo founders."
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {["Tone: Bold", "Length: Medium", "CTA: Newsletter"].map((c) => (
            <span key={c} className="rounded-md bg-white/5 px-2 py-1 text-[10px]">
              {c}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-white/[0.03] p-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Generated</div>
          <span className="rounded-md bg-gradient-brand px-2 py-0.5 text-[10px] font-medium text-white">
            Viral 92
          </span>
        </div>
        <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">
          <p>I used to spend 8 hours a week on content. Now it's 30 minutes.</p>
          <p>Here's the 4-step workflow every solo founder should steal…</p>
          <p>1. Capture ideas in one place. 2. Train your voice. 3. Generate. 4. Schedule.</p>
        </div>
      </div>
    </div>
  );
}

function PanelBrand() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="md:col-span-1">
        <div className="relative mx-auto grid aspect-square w-full max-w-[220px] place-items-center">
          <svg viewBox="0 0 100 100" className="absolute inset-0">
            <circle cx="50" cy="50" r="42" stroke="oklch(1 0 0 / 0.08)" strokeWidth="6" fill="none" />
            <circle
              cx="50"
              cy="50"
              r="42"
              stroke="url(#bg)"
              strokeWidth="6"
              fill="none"
              strokeDasharray={`${(87 / 100) * 264} 264`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            <defs>
              <linearGradient id="bg" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.68 0.22 295)" />
                <stop offset="100%" stopColor="oklch(0.82 0.15 200)" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center">
            <div className="text-4xl font-semibold text-gradient">87</div>
            <div className="text-[10px] text-muted-foreground">Brand Score</div>
          </div>
        </div>
      </div>
      <div className="space-y-2 md:col-span-2">
        {[
          { l: "Voice Consistency", v: 92 },
          { l: "Posting Cadence", v: 78 },
          { l: "Engagement Quality", v: 88 },
          { l: "Topic Authority", v: 84 },
        ].map((m) => (
          <div key={m.l} className="rounded-lg bg-white/[0.03] p-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">{m.l}</span>
              <span>{m.v}</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full bg-gradient-brand"
                style={{ width: `${m.v}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelViral() {
  return (
    <div className="space-y-3">
      {[
        { t: "The honest truth about content velocity in 2026", s: 94 },
        { t: "5 mistakes I made building in public — and what I learned", s: 81 },
        { t: "Why most LinkedIn posts fail (and how to fix it in 60s)", s: 88 },
      ].map((p) => (
        <div key={p.t} className="rounded-xl bg-white/[0.03] p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{p.t}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">
                Predicted reach · 24K – 48K · CTR 3.8%
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-semibold text-gradient">{p.s}</div>
              <div className="text-[10px] text-muted-foreground">viral</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function PanelCRM() {
  const rows = [
    { n: "Sarah Lin", c: "Vertex Labs", s: "Demo booked", h: true },
    { n: "Marco Idris", c: "Northwind", s: "Replied", h: true },
    { n: "Priya Shah", c: "Acme Co.", s: "Followed", h: false },
    { n: "James Okafor", c: "Helix", s: "Newsletter", h: false },
  ];
  return (
    <div className="overflow-hidden rounded-xl bg-white/[0.03]">
      <div className="grid grid-cols-12 border-b border-white/5 px-4 py-2 text-[10px] uppercase tracking-wide text-muted-foreground">
        <div className="col-span-4">Contact</div>
        <div className="col-span-4">Company</div>
        <div className="col-span-3">Stage</div>
        <div className="col-span-1 text-right">Heat</div>
      </div>
      {rows.map((r) => (
        <div key={r.n} className="grid grid-cols-12 items-center px-4 py-3 text-sm">
          <div className="col-span-4 flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-brand" />
            <span className="truncate">{r.n}</span>
          </div>
          <div className="col-span-4 text-muted-foreground">{r.c}</div>
          <div className="col-span-3">
            <span className="rounded-md bg-white/5 px-2 py-0.5 text-[11px]">{r.s}</span>
          </div>
          <div className="col-span-1 text-right">
            <span
              className={`inline-block h-2 w-2 rounded-full ${
                r.h ? "bg-[oklch(0.82_0.15_200)] shadow-[0_0_8px_oklch(0.82_0.15_200)]" : "bg-white/15"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function PanelComp() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {["@kieranbeck", "@laraweiss", "@morgan.io"].map((u) => (
        <div key={u} className="rounded-xl bg-white/[0.03] p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-brand" />
            <div>
              <div className="text-sm font-medium">{u}</div>
              <div className="text-[11px] text-muted-foreground">Competitor</div>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-[11px]">
            <Row l="Posts / wk" v="12" />
            <Row l="Avg reach" v="38K" />
            <Row l="Topic gap" v="AI workflows" />
            <Row l="Opportunity" v="High" tone />
          </div>
        </div>
      ))}
    </div>
  );
}

function Row({ l, v, tone }: { l: string; v: string; tone?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{l}</span>
      <span className={tone ? "text-gradient font-medium" : ""}>{v}</span>
    </div>
  );
}

function PanelAnalytics() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
      {[
        { l: "Impressions", v: "1.2M", d: "+42%" },
        { l: "Engagement", v: "84K", d: "+28%" },
        { l: "Followers", v: "+6.4K", d: "30d" },
        { l: "Leads", v: "412", d: "+18%" },
      ].map((s) => (
        <div key={s.l} className="rounded-xl bg-white/[0.03] p-4">
          <div className="text-[10px] text-muted-foreground">{s.l}</div>
          <div className="mt-1 text-2xl font-semibold">{s.v}</div>
          <div className="text-[11px] text-[oklch(0.82_0.15_200)]">{s.d}</div>
        </div>
      ))}
      <div className="md:col-span-4 rounded-xl bg-white/[0.03] p-4">
        <div className="mb-2 text-sm font-medium">Channel Performance</div>
        <div className="space-y-2">
          {[
            { c: "LinkedIn", v: 84 },
            { c: "X", v: 62 },
            { c: "YouTube", v: 71 },
            { c: "Instagram", v: 48 },
          ].map((c) => (
            <div key={c.c} className="flex items-center gap-3">
              <div className="w-20 text-xs text-muted-foreground">{c.c}</div>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/5">
                <div className="h-full bg-gradient-brand" style={{ width: `${c.v}%` }} />
              </div>
              <div className="w-10 text-right text-xs">{c.v}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
