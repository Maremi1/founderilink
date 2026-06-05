import { motion } from "framer-motion";
import pyramidImg from "@/assets/pyramid-glass.jpg";

const tiers = [
  { label: "Generational Legacy", w: 42, color: "hsl(var(--brand-gold))" },
  { label: "Wealth Transition", w: 60, color: "hsl(var(--brand-blue))" },
  { label: "Asset Protection", w: 78, color: "hsl(var(--brand-navy))" },
  { label: "Foundation & Governance", w: 96, color: "hsl(215 50% 30%)" },
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
          <motion.img
            src={pyramidImg}
            alt="Glass pyramid representing layered wealth structuring"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.18, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="pointer-events-none absolute inset-0 -z-0 m-auto h-full w-full object-contain"
          />
          {tiers.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (tiers.length - 1 - i) * 0.15 }}
              style={{ width: `${t.w}%`, background: t.color }}
              className="relative flex h-16 items-center justify-center rounded-md px-4 text-center text-[11px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider leading-tight text-white shadow-elegant whitespace-nowrap"
            >
              <span className="block w-full text-center">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
