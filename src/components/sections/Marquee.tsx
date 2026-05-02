import { motion } from "framer-motion";

const words = [
  "Trust Architecture",
  "Corporate Structuring",
  "Generational Wealth",
  "Asset Protection",
  "Governance",
  "Legacy",
  "Advisory",
  "Continuity",
];

export const Marquee = () => {
  const loop = [...words, ...words];
  return (
    <section className="relative overflow-hidden border-y border-border bg-brand-navy py-8">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <motion.div
        className="relative flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((w, i) => (
          <div key={i} className="flex items-center gap-12">
            <span className="font-serif text-3xl italic text-white/90 md:text-5xl">{w}</span>
            <span className="h-2 w-2 flex-none rounded-full bg-brand-gold" />
          </div>
        ))}
      </motion.div>
    </section>
  );
};
