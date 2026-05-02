import portrait from "@/assets/founder-portrait.jpg";
import { motion } from "framer-motion";

export const Founder = () => {
  return (
    <section className="relative bg-surface-soft py-24 md:py-32">
      <div className="container grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-blue-soft to-brand-gold-soft" />
          <div className="relative overflow-hidden rounded-3xl shadow-elegant">
            <img src={portrait} alt="The Founder leadership" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-2xl bg-brand-navy px-5 py-3 text-white shadow-elegant">
            <div className="text-xs uppercase tracking-widest text-brand-gold">Leadership</div>
            <div className="font-semibold">Securing Vision</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Our Founder
          </div>
          <blockquote className="mt-6 font-serif text-3xl leading-snug text-brand-navy md:text-4xl">
            "A legacy is not what you accumulate.
            It is the architecture you leave behind so your vision continues
            to compound — long after you've stopped building."
          </blockquote>
          <div className="mt-8 h-0.5 w-16 bg-brand-gold" />
          <p className="mt-4 text-sm uppercase tracking-widest text-muted-foreground">
            The Founder · Management Consultancy
          </p>
        </motion.div>
      </div>
    </section>
  );
};
