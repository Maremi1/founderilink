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
import { Insights } from "@/components/sections/Insights";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Blueprint />
      <Marquee />
      <WhyTrust />
      <TrustVsWill />
      <Audience />
      <Gallery />
      <Architecture />
      <Process />
      <Pyramid />
      <Insights />
      <Footprint />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
