import { motion } from "framer-motion";
import { Section } from "./Section";

const items = [
  {
    name: "Elena Marquez",
    role: "Founder, Lumen Labs",
    quote:
      "ShareOn replaced three tools and an entire content hire. We're shipping 5x more, with a sharper voice.",
    metric: "+340% inbound demos in 90 days",
  },
  {
    name: "Devon Park",
    role: "Executive Coach",
    quote:
      "Brand Voice AI feels like me on a good day. The viral prediction is uncanny.",
    metric: "+62K LinkedIn followers",
  },
  {
    name: "Aisha Rahman",
    role: "Strategy Consultant",
    quote:
      "I closed two enterprise contracts directly from posts ShareOn generated and scheduled.",
    metric: "$210K pipeline in Q1",
  },
  {
    name: "Marcus Holt",
    role: "Agency Owner, Northstar",
    quote:
      "Managing 14 client brands used to be chaos. Now it's a single dashboard with reporting clients love.",
    metric: "14 brands · 1 workspace",
  },
  {
    name: "Yuki Tanaka",
    role: "Creator · 480K subs",
    quote:
      "The repurposing studio turns one YouTube essay into a week of content. Game-changer.",
    metric: "+3.2M monthly impressions",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Loved by operators"
      title={<>Results that <span className="text-gradient">speak louder</span> than features</>}
      description="Founders, coaches, consultants, agencies, and creators — building category-leading brands."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="flex h-full flex-col justify-between rounded-2xl glass p-6"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/90">
              "{t.quote}"
            </blockquote>
            <div className="mt-5">
              <div className="rounded-lg bg-gradient-soft px-3 py-2 text-xs text-gradient">
                {t.metric}
              </div>
              <figcaption className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand" />
                <div>
                  <div className="text-sm font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </div>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
