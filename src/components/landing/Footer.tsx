import { Sparkles } from "lucide-react";

const cols = [
  { title: "Product", links: ["Features", "Pricing", "Integrations"] },
  { title: "Solutions", links: ["Founders", "Coaches", "Consultants", "Agencies"] },
  { title: "Resources", links: ["Blog", "Guides", "Changelog", "Help Center"] },
  { title: "Company", links: ["About", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Security"] },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-16">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-base font-semibold tracking-tight">
                ShareOn <span className="text-gradient">AI</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              The Personal Branding Operating System for the AI era.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-wider text-foreground/80">
                {c.title}
              </div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ShareOn AI. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
