import { motion } from "framer-motion";
import {
  Play,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Calendar,
  BarChart3,
  Users,
  Mic2,
  Flame,
  CheckCircle2,
} from "lucide-react";

const trust = [
  { value: "10,000+", label: "Creators" },
  { value: "2M+", label: "Posts Generated" },
  { value: "500K+", label: "Videos Created" },
  { value: "95%", label: "Retention Rate" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,oklch(0.60_0.09_250/0.35),transparent_60%)] blur-2xl" />

      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
            <span className="grid h-4 w-4 place-items-center rounded-full bg-gradient-brand">
              <Sparkles className="h-2.5 w-2.5 text-white" />
            </span>
            Introducing ShareOn 3.0 — Brand OS for the AI era
          </div>

          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Build a Category-Leading{" "}
            <span className="text-gradient">Personal Brand</span> on Autopilot
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg">
            ShareOn transforms your expertise into content, videos, audience
            growth, leads, and revenue using next-generation AI workflows.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_18px_50px_-15px_oklch(0.60_0.09_250/0.8)] transition-transform hover:scale-[1.03]"
            >
              Start Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-medium text-foreground hover:bg-white/10"
            >
              <Play className="h-4 w-4" /> Watch Demo
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trust.map((t) => (
              <div key={t.label} className="text-center">
                <div className="text-xl font-semibold sm:text-2xl">
                  <span className="text-gradient">{t.value}</span>
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {t.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Dashboard preview */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-16 max-w-6xl"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-brand opacity-30 blur-3xl" />
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl p-3 shadow-elevated sm:p-4">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-white/5 px-2 pb-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <div className="rounded-md bg-white/5 px-3 py-1 text-[11px] text-muted-foreground">
          app.shareon.ai / dashboard
        </div>
        <div className="h-2.5 w-12" />
      </div>

      <div className="grid grid-cols-12 gap-3 p-2 sm:gap-4">
        {/* Sidebar */}
        <aside className="col-span-12 rounded-xl bg-white/[0.02] p-3 lg:col-span-2">
          <div className="flex items-center gap-2 px-1 pb-3">
            <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-xs font-medium">ShareOn</span>
          </div>
          <div className="space-y-1">
            {[
              { icon: BarChart3, label: "Overview", active: true },
              { icon: Sparkles, label: "Generator" },
              { icon: Calendar, label: "Calendar" },
              { icon: Users, label: "CRM" },
              { icon: Flame, label: "Trends" },
              { icon: Mic2, label: "Avatar Studio" },
            ].map((i) => (
              <div
                key={i.label}
                className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] ${
                  i.active
                    ? "bg-white/8 text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <i.icon className="h-3.5 w-3.5" /> {i.label}
              </div>
            ))}
          </div>
        </aside>

        {/* Main */}
        <main className="col-span-12 space-y-3 lg:col-span-7">
          <div className="grid grid-cols-3 gap-3">
            <StatCard label="Brand Score" value="87" delta="+12" tone="purple" />
            <StatCard label="Reach (30d)" value="248K" delta="+34%" tone="blue" />
            <StatCard label="New Leads" value="412" delta="+18%" tone="cyan" />
          </div>

          <div className="rounded-xl bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-xs text-muted-foreground">
                  AI Content Generator
                </div>
                <div className="text-sm font-medium">
                  3 posts ready to publish
                </div>
              </div>
              <span className="rounded-md bg-gradient-brand px-2 py-1 text-[10px] font-medium text-white">
                Viral Score 92
              </span>
            </div>
            <div className="space-y-2">
              {[
                "5 lessons I learned scaling to $1M ARR…",
                "The honest truth about content velocity in 2026…",
                "Stop optimizing for the algorithm. Optimize for…",
              ].map((t, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-lg bg-white/[0.03] px-3 py-2"
                >
                  <div className="min-w-0 flex-1 truncate text-xs text-muted-foreground">
                    {t}
                  </div>
                  <div className="ml-3 flex shrink-0 items-center gap-2 text-[10px] text-muted-foreground">
                    <CheckCircle2 className="h-3 w-3 text-[oklch(0.72_0.10_210)]" />
                    Ready
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chart */}
          <div className="rounded-xl bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center justify-between">
              <div className="text-sm font-medium">Audience Growth</div>
              <div className="text-[11px] text-muted-foreground">
                Last 30 days
              </div>
            </div>
            <MiniChart />
          </div>
        </main>

        {/* Right rail */}
        <aside className="col-span-12 space-y-3 lg:col-span-3">
          <div className="rounded-xl bg-white/[0.02] p-4">
            <div className="text-xs text-muted-foreground">
              Content Calendar
            </div>
            <div className="mt-3 grid grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded ${
                    [3, 6, 9, 12, 15, 18, 21, 24].includes(i)
                      ? "bg-gradient-brand"
                      : "bg-white/5"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.02] p-4">
            <div className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">Lead Gen</div>
              <TrendingUp className="h-3.5 w-3.5 text-[oklch(0.72_0.10_210)]" />
            </div>
            <div className="mt-2 text-xl font-semibold">$48.2k</div>
            <div className="text-[11px] text-muted-foreground">
              Pipeline value
            </div>
            <div className="mt-3 space-y-1.5">
              {["Acme Co.", "Northwind", "Vertex Labs"].map((n) => (
                <div
                  key={n}
                  className="flex items-center justify-between text-[11px]"
                >
                  <span className="text-muted-foreground">{n}</span>
                  <span className="rounded bg-white/5 px-1.5 py-0.5">Hot</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="glass-strong absolute -left-4 top-1/3 hidden rounded-xl p-3 lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand">
            <Flame className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Trend Radar</div>
            <div className="text-xs font-medium">+ 28 hot topics</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="glass-strong absolute -right-4 top-1/4 hidden rounded-xl p-3 lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-brand">
            <Mic2 className="h-3.5 w-3.5 text-white" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Brand Voice</div>
            <div className="text-xs font-medium">Trained · 98% match</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({
  label,
  value,
  delta,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  tone: "purple" | "blue" | "cyan";
}) {
  const toneClass =
    tone === "purple"
      ? "from-[oklch(0.60_0.09_250/0.3)] to-transparent"
      : tone === "blue"
        ? "from-[oklch(0.58_0.07_245/0.3)] to-transparent"
        : "from-[oklch(0.72_0.10_210/0.3)] to-transparent";
  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white/[0.02] p-3`}
    >
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${toneClass} blur-xl`}
      />
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-lg font-semibold">{value}</span>
        <span className="text-[10px] text-[oklch(0.72_0.10_210)]">{delta}</span>
      </div>
    </div>
  );
}

function MiniChart() {
  const points = [12, 18, 16, 24, 22, 30, 28, 36, 34, 44, 42, 56, 60, 72];
  const max = Math.max(...points);
  const w = 600;
  const h = 120;
  const step = w / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * step;
      const y = h - (p / max) * h;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-28 w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.60 0.09 250)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="oklch(0.60 0.09 250)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.60 0.09 250)" />
          <stop offset="100%" stopColor="oklch(0.72 0.10 210)" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#g)" />
      <path d={path} fill="none" stroke="url(#s)" strokeWidth="2.5" />
    </svg>
  );
}