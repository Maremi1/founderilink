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

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Blueprint />
      <WhyTrust />
      <TrustVsWill />
      <Audience />
      <Architecture />
      <Process />
      <Pyramid />
      <Footprint />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
