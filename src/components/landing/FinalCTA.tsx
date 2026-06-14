import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl glass-strong p-10 text-center sm:p-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-soft" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-gradient-brand opacity-30 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.72_0.10_210/0.4),transparent_70%)] blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              Your expertise deserves a{" "}
              <span className="text-gradient">bigger audience</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
              Turn knowledge into content, content into audience, and audience
              into opportunities with ShareOn AI.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-brand px-5 py-3 text-sm font-medium text-white shadow-[0_18px_50px_-15px_oklch(0.60_0.09_250/0.8)] transition-transform hover:scale-[1.03]"
              >
                Start Free Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
