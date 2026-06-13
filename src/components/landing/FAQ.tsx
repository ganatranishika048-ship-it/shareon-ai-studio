import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Section } from "./Section";

const faqs = [
  {
    q: "How does Brand Voice AI work?",
    a: "Upload a few writing samples or connect your existing channels. Brand Voice AI extracts tone, cadence, vocabulary, and structure into a private voice model used to generate content that genuinely sounds like you.",
  },
  {
    q: "Can I upload PDFs and documents?",
    a: "Yes. Drop in PDFs, Notion exports, transcripts, slide decks, or markdown notes. The Knowledge Graph extracts ideas and themes, then turns them into a steady pipeline of content opportunities.",
  },
  {
    q: "How accurate is Viral Prediction?",
    a: "Our engine is trained on millions of high-performing posts across platforms. It predicts reach, engagement, and a 0–100 virality score — most users see prediction accuracy within ±15% of real-world performance.",
  },
  {
    q: "Which platforms are supported?",
    a: "LinkedIn, X, YouTube, TikTok, Instagram, Facebook, and more. Publish, schedule, and analyze from a single workspace.",
  },
  {
    q: "Can I manage clients?",
    a: "On the Pro plan, agencies get multi-brand workspaces, role-based permissions, white-label reporting, and a unified content pipeline across every client.",
  },
  {
    q: "Is there a free trial?",
    a: "Spark is free forever. Creator includes a 14-day trial of all premium features — no credit card required.",
  },
  {
    q: "How does the Brand Score work?",
    a: "We continuously analyze posting cadence, voice consistency, engagement quality, and topic authority across your channels, producing a 0–100 score with weekly improvement recommendations.",
  },
  {
    q: "What makes ShareOn different?",
    a: "ShareOn is not a generator. It's an operating system: knowledge in, brand voice trained, content created, predicted, scheduled, distributed, measured — and your CRM updated as leads come in.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Questions, <span className="text-gradient">answered</span></>}
    >
      <div className="mx-auto max-w-3xl space-y-2">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className="overflow-hidden rounded-2xl glass"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-medium sm:text-base">{f.q}</span>
                <Plus
                  className={`h-4 w-4 shrink-0 transition-transform ${
                    isOpen ? "rotate-45" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
