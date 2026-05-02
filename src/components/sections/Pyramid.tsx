import { motion } from "framer-motion";

const tiers = [
  { label: "Generational Legacy", w: 30, color: "hsl(var(--brand-gold))" },
  { label: "Wealth Transition", w: 50, color: "hsl(var(--brand-blue))" },
  { label: "Asset Protection", w: 70, color: "hsl(var(--brand-navy))" },
  { label: "Foundation & Governance", w: 90, color: "hsl(215 50% 30%)" },
];

export const Pyramid = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            The Outcome
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            The Result of <span className="text-gradient-brand">Proper Structuring</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Structures built deliberately compound advantage over decades. Each
            tier reinforces the one above it — creating a legacy that
            withstands time, regulation and circumstance.
          </p>
          <p className="mt-6 font-serif text-3xl italic text-brand-navy">
            Build. Protect. Transition.
            <span className="block text-base not-italic text-muted-foreground tracking-widest uppercase mt-2">— The Right Way</span>
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md flex-col items-center gap-3 py-8">
          {tiers.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (tiers.length - 1 - i) * 0.15 }}
              style={{ width: `${t.w}%`, background: t.color }}
              className="relative flex h-16 items-center justify-center rounded-md text-sm font-semibold uppercase tracking-wider text-white shadow-elegant"
            >
              {t.label}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
