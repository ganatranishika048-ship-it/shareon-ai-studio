import { motion } from "framer-motion";
import { Section } from "./Section";

const integrations = [
  "LinkedIn",
  "Instagram",
  "YouTube",
  "Canva",
  "X",
  "Facebook",
  "TikTok",
];

function Logo({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white shadow-[0_8px_24px_-12px_oklch(0.60_0.09_250/0.8)]">
      {initials}
    </div>
  );
}

export function Integrations() {
  return (
    <Section
      id="integrations"
      eyebrow="Integrations"
      title={<>Publish everywhere that <span className="text-gradient">matters</span></>}
      description="Connect your entire social presence. Create once, distribute everywhere — seamlessly."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {integrations.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="group flex items-center gap-3 rounded-2xl glass p-4 transition-all hover:bg-white/[0.06]"
          >
            <Logo name={name} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{name}</div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.10_210)] shadow-[0_0_8px_oklch(0.72_0.10_210)]" />
                Connected
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}