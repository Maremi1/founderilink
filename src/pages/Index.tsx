import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Blueprint } from "@/components/sections/Blueprint";
import { WhyTrust } from "@/components/sections/WhyTrust";
import { TrustVsWill } from "@/components/sections/TrustVsWill";
import { Audience } from "@/components/sections/Audience";
import { Architecture } from "@/components/sections/Architecture";
import { Process } from "@/components/sections/Process";
import { Pyramid } from "@/components/sections/Pyramid";
import { Footprint } from "@/components/sections/Footprint";
import { Founder } from "@/components/sections/Founder";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Gallery } from "@/components/sections/Gallery";
import { Marquee } from "@/components/sections/Marquee";
import { Insights } from "@/components/sections/Insights";
import { SectionReveal } from "@/components/SectionReveal";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <SectionReveal variant="fade-up"><Blueprint /></SectionReveal>
      <SectionReveal variant="fade"><Marquee /></SectionReveal>
      <SectionReveal variant="slide-right"><WhyTrust /></SectionReveal>
      <SectionReveal variant="blur"><TrustVsWill /></SectionReveal>
      <SectionReveal variant="fade-up"><Audience /></SectionReveal>
      <SectionReveal variant="scale"><Gallery /></SectionReveal>
      <SectionReveal variant="slide-left"><Architecture /></SectionReveal>
      <SectionReveal variant="fade-up"><Process /></SectionReveal>
      <SectionReveal variant="blur"><Pyramid /></SectionReveal>
      <SectionReveal variant="fade-up"><Insights /></SectionReveal>
      <SectionReveal variant="slide-right"><Footprint /></SectionReveal>
      <SectionReveal variant="scale"><Founder /></SectionReveal>
      <SectionReveal variant="fade-up"><Contact /></SectionReveal>
      <Footer />
    </main>
  );
};

export default Index;
