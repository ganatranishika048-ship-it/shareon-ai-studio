import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Section } from "./Section";

const plans = [
  {
    name: "Spark",
    tagline: "For beginners",
    price: "$0",
    sub: "free forever",
    features: ["Basic AI Content", "Limited Publishing", "Starter Analytics"],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Creator",
    tagline: "For serious creators",
    price: "$49",
    sub: "/ month",
    features: [
      "Brand Voice AI",
      "Video Generation",
      "Content Calendar",
      "Viral Prediction",
      "Advanced Analytics",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Pro",
    tagline: "For businesses & agencies",
    price: "$149",
    sub: "/ month",
    features: [
      "Unlimited Content",
      "Team Workspaces",
      "Brand CRM",
      "Competitor Intelligence",
      "Growth Roadmaps",
      "Priority Support",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <Section
      id="pricing"
      eyebrow="Pricing"
      title={<>Simple plans, <span className="text-gradient">serious leverage</span></>}
      description="Start free. Upgrade when you outgrow it. Cancel anytime."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {plans.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className={`relative overflow-hidden rounded-3xl p-6 ${
              p.highlight
                ? "glass-strong ring-1 ring-[oklch(0.68_0.22_295/0.5)]"
                : "glass"
            }`}
          >
            {p.highlight && (
              <>
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
                <div className="absolute right-5 top-5 rounded-full bg-gradient-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Most popular
                </div>
              </>
            )}
            <div className="relative">
              <div className="text-xs text-muted-foreground">{p.tagline}</div>
              <div className="mt-1 text-2xl font-semibold">{p.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-semibold">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.sub}</span>
              </div>

              <a
                href="#"
                className={`mt-6 block rounded-xl py-2.5 text-center text-sm font-medium transition-transform hover:scale-[1.02] ${
                  p.highlight
                    ? "bg-gradient-brand text-white shadow-[0_18px_50px_-15px_oklch(0.68_0.22_295/0.8)]"
                    : "glass-strong text-foreground"
                }`}
              >
                {p.cta}
              </a>

              <ul className="mt-6 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[oklch(0.82_0.15_200)]" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
