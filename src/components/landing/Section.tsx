import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative py-24 lg:py-32 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          {eyebrow && (
            <div className="mb-3 inline-flex items-center rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              {eyebrow}
            </div>
          )}
          <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-pretty text-base text-muted-foreground">
              {description}
            </p>
          )}
        </motion.div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
