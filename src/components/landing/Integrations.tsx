import { motion } from "framer-motion";
import { Section } from "./Section";

const integrations = [
  "Anthropic Claude",
  "Google Gemini",
  "Mistral AI",
  "Groq",
  "Supabase",
  "Vercel",
  "LinkedIn",
  "YouTube",
  "TikTok",
  "Instagram",
  "X",
  "Facebook",
  "Notion",
  "Canva",
  "Zapier",
  "Slack",
];

function Logo({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-brand text-sm font-bold text-white shadow-[0_8px_24px_-12px_oklch(0.68_0.22_295/0.8)]">
      {initials}
    </div>
  );
}

export function Integrations() {
  return (
    <Section
      id="integrations"
      eyebrow="Integrations"
      title={<>Plays nicely with your <span className="text-gradient">entire stack</span></>}
      description="Connect the tools you already use. Add new capabilities without changing your workflow."
    >
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {integrations.map((name, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
            className="group flex items-center gap-3 rounded-2xl glass p-4 transition-all hover:bg-white/[0.06]"
          >
            <Logo name={name} />
            <div className="min-w-0 flex-1">
              <div className="truncate text-sm font-medium">{name}</div>
              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.82_0.15_200)] shadow-[0_0_8px_oklch(0.82_0.15_200)]" />
                Connected
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
