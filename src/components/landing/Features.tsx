import { motion } from "framer-motion";
import {
  Gauge,
  Eye,
  Sparkles,
  Recycle,
  Radar,
  Network,
  Users,
  Map,
  type LucideIcon,
} from "lucide-react";
import { Section } from "./Section";

const items: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Gauge,
    title: "AI Brand Score",
    desc: "Analyze your personal brand presence and get actionable improvement recommendations.",
  },
  {
    icon: Eye,
    title: "Competitor Intelligence",
    desc: "Track competitors and uncover the content opportunities they're missing.",
  },
  {
    icon: Sparkles,
    title: "Viral Prediction Engine",
    desc: "Predict engagement, reach, and virality before you ever hit publish.",
  },
  {
    icon: Recycle,
    title: "Content Repurposing Studio",
    desc: "Blogs → LinkedIn. Videos → Shorts. Podcasts → Carousels. Webinars → Series.",
  },
  {
    icon: Radar,
    title: "Trend Radar",
    desc: "Discover trending industry topics weeks before your competitors.",
  },
  {
    icon: Network,
    title: "Knowledge Graph Engine",
    desc: "Turn uploaded knowledge into a network of interconnected content opportunities.",
  },
  {
    icon: Users,
    title: "Personal Brand CRM",
    desc: "Manage audience relationships, leads, and conversions in one place.",
  },
  {
    icon: Map,
    title: "AI Growth Roadmap",
    desc: "Generate personalized 30, 60, and 90-day growth plans tuned to your goals.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="Why ShareOn is different"
      title={<>An operating system for your <span className="text-gradient">personal brand</span></>}
      description="Not another generator. ShareOn is the intelligence layer behind category-leading creators and operators."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl glass p-5 transition-all hover:bg-white/[0.05]"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand shadow-[0_8px_24px_-12px_oklch(0.68_0.22_295/0.8)]">
              <it.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-4 text-base font-semibold">{it.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
              {it.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
