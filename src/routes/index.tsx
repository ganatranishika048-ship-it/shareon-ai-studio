import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { CoreFeatures } from "@/components/landing/CoreFeatures";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Solutions } from "@/components/landing/Solutions";
import { Integrations } from "@/components/landing/Integrations";
import { Showcase } from "@/components/landing/Showcase";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShareOn AI — Personal Branding Operating System" },
      {
        name: "description",
        content:
          "ShareOn turns your expertise into content, videos, audience, leads, and revenue with next-generation AI workflows.",
      },
      { property: "og:title", content: "ShareOn AI — Personal Branding Operating System" },
      {
        property: "og:description",
        content:
          "Build a category-leading personal brand on autopilot. Content, videos, growth, and leads — powered by AI.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Features />
        <CoreFeatures />
        <HowItWorks />
        <Solutions />
        <Integrations />
        <Showcase />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
