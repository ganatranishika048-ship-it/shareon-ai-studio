import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Briefcase,
  Building2,
  BookOpen,
  Megaphone,
} from "lucide-react";
import { Section } from "./Section";

const solutions = [
  { icon: Rocket, title: "Founders", desc: "Build authority and attract opportunities at scale." },
  { icon: GraduationCap, title: "Coaches", desc: "Convert expertise into scalable, evergreen content." },
  { icon: Briefcase, title: "Consultants", desc: "Generate inbound leads consistently and on autopilot." },
  { icon: Building2, title: "Agencies", desc: "Manage multiple client brands from one workspace." },
  { icon: BookOpen, title: "Educators", desc: "Transform lessons into engaging, distributable content." },
  { icon: Megaphone, title: "Creators", desc: "Grow audience and unlock new monetization channels." },
];

export function Solutions() {
  return (
    <Section
      id="solutions"
      eyebrow="Solutions"
      title={<>Built for <span className="text-gradient">every operator</span></>}
      description="From solo founders to multi-brand agencies — ShareOn adapts to how you work."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.05]"
          >
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-brand opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-soft">
              <s.icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
