import { motion } from "framer-motion";
import {
  Upload,
  Mic2,
  Sparkles,
  Video,
  Send,
  TrendingUp,
} from "lucide-react";
import { Section } from "./Section";

const steps = [
  { icon: Upload, title: "Upload Knowledge", desc: "Bring your PDFs, notes, and ideas." },
  { icon: Mic2, title: "Train Brand Voice", desc: "Teach the AI your unique style." },
  { icon: Sparkles, title: "Generate Content", desc: "Posts, threads, scripts, in seconds." },
  { icon: Video, title: "Create Videos", desc: "AI avatars and shorts on demand." },
  { icon: Send, title: "Publish Everywhere", desc: "One click to every platform." },
  { icon: TrendingUp, title: "Analyze & Scale", desc: "Iterate with deep insights." },
];

export function HowItWorks() {
  return (
    <Section
      eyebrow="How it works"
      title={<>From idea to audience in <span className="text-gradient">six steps</span></>}
      description="A connected workflow that takes you from raw knowledge to measurable growth."
    >
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative text-center"
            >
              <div className="relative mx-auto grid h-[72px] w-[72px] place-items-center">
                <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-30 blur-xl" />
                <div className="relative grid h-[72px] w-[72px] place-items-center rounded-2xl glass-strong">
                  <s.icon className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[10px] font-semibold text-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="mt-4 text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
