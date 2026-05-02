import { motion } from "framer-motion";
import blueprint from "@/assets/blueprint-tomorrow.jpg";

export const Blueprint = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-3xl bg-grid opacity-40" />
          <div className="relative overflow-hidden rounded-2xl shadow-elegant">
            <img src={blueprint} alt="The blueprint of your tomorrow" className="h-full w-full object-cover" />
            <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <motion.path
                d="M5 95 L50 5 L95 95 Z"
                fill="none"
                stroke="hsl(var(--brand-gold))"
                strokeWidth="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.circle
                cx="50" cy="50" r="20"
                fill="none"
                stroke="hsl(var(--brand-blue))"
                strokeWidth="0.3"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Our Philosophy
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            The Blueprint of Your <span className="text-gradient-brand">Tomorrow</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you are building generational wealth or stewarding a growing
            enterprise, how you structure and protect your assets today defines
            the legacy you leave tomorrow.
          </p>
          <p className="mt-4 font-serif text-2xl italic text-brand-navy/80">
            "We design the architecture beneath ambition."
          </p>
        </motion.div>
      </div>
    </section>
  );
};
