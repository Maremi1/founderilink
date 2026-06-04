import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import family from "@/assets/family-legacy.jpg";
import governance from "@/assets/governance-infinity.jpg";
import skyline from "@/assets/skyline-corporate.jpg";

const stats = [
  { value: 25, suffix: "+", label: "Years of combined advisory", img: governance },
  { value: 100, suffix: "%", label: "Confidential by design", img: family },
  { value: 2, suffix: "", label: "Strategic jurisdictions", img: skyline },
];

const Counter = ({ to, suffix }: { to: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, mv]);

  return (
    <motion.span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </motion.span>
  );
};

export const Insights = () => {
  return (
    <section className="relative bg-background py-20 md:py-28">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant transition-shadow"
            >
              <img
                src={s.img}
                alt=""
                aria-hidden
                width={1280}
                height={896}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-card via-card/85 to-card/60" />
              <div className="relative">
                <div className="text-5xl font-bold text-brand-navy md:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 h-0.5 w-12 bg-brand-gold" />
                <div className="mt-3 text-sm uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
