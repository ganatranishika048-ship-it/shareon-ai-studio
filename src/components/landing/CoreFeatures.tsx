import { motion } from "framer-motion";
import {
  Database,
  Mic2,
  UserCircle2,
  Video,
  CalendarDays,
  Share2,
  LineChart,
  Workflow,
} from "lucide-react";
import { Section } from "./Section";

const features = [
  { icon: Database, title: "Knowledge Base", desc: "Upload PDFs, documents, notes, and resources." },
  { icon: Mic2, title: "Brand Voice AI", desc: "Train AI to replicate your unique writing style." },
  { icon: UserCircle2, title: "Avatar Studio", desc: "Create personalized AI avatars and video content." },
  { icon: Video, title: "Document-to-Video", desc: "Convert documents into engaging video content automatically." },
  { icon: CalendarDays, title: "Content Calendar", desc: "Generate strategic monthly content plans." },
  { icon: Share2, title: "Multi-Platform Publishing", desc: "Publish across every social channel from one dashboard." },
  { icon: LineChart, title: "Analytics Dashboard", desc: "Track engagement, growth, and performance metrics." },
  { icon: Workflow, title: "Workflow Automation", desc: "Automate the entire content lifecycle, end to end." },
];

export function CoreFeatures() {
  return (
    <Section
      eyebrow="Core platform"
      title={<>Everything you need to <span className="text-gradient">ship and scale</span></>}
      description="A complete stack — from knowledge ingestion to multi-platform distribution."
    >
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.03 }}
            className="group relative bg-[oklch(0.18_0.028_270)] p-6 transition-colors hover:bg-[oklch(0.21_0.030_270)]"
          >
            <f.icon className="h-6 w-6 text-[oklch(0.82_0.15_200)]" />
            <h3 className="mt-4 text-sm font-semibold">{f.title}</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
