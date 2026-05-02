import { Button } from "@/components/ui/button";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import logo from "@/assets/founder-logo.jpeg";
import heroVideo from "@/assets/hero-ambient.mp4.asset.json";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <video
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40 motion-reduce:hidden"
        src={heroVideo.url}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 -z-10 bg-blueprint opacity-50" />
      <div className="absolute inset-0 -z-10">
        <ParticleNetwork />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-brand-navy shadow-soft backdrop-blur"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-brand-blue" />
            Trust & Corporate Structuring · Tanzania · Rwanda
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-brand-navy sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Secure Your <span className="text-gradient-brand">Legacy.</span>
            <br />
            Structure Your <span className="text-gradient-gold">Wealth.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            The Founder is a management consultancy architecting family trusts, corporate
            structures and generational wealth strategies for visionaries who plan beyond
            tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button asChild size="lg" className="bg-brand-navy hover:bg-brand-blue group">
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-brand-navy/20 text-brand-navy hover:bg-brand-blue-soft">
              <a href="#contact">Speak to an Advisor</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-6"
          >
            {[
              { v: "2", l: "Jurisdictions" },
              { v: "100%", l: "Confidential" },
              { v: "∞", l: "Generations" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold text-brand-navy">{s.v}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-brand-blue-soft blur-3xl opacity-60" />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative flex h-full w-full items-center justify-center rounded-3xl glass border border-border shadow-elegant"
          >
            <img src={logo} alt="The Founder mark" className="h-3/4 w-3/4 object-contain" />
          </motion.div>
          {/* orbiting dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-gold"
              animate={{ rotate: 360 }}
              transition={{ duration: 14 + i * 4, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${120 + i * 40}px 0` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
