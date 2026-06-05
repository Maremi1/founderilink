import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, GitBranch, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import shield from "@/assets/trust-shield-emblem.png";
import { services } from "@/data/services";

const iconMap = { ShieldCheck, EyeOff, GitBranch };

export const WhyTrust = () => {
  return (
    <section id="services" className="relative bg-surface-soft py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
          <motion.img
            src={shield}
            alt="Trust shield emblem"
            width={1024}
            height={1024}
            loading="lazy"
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            whileHover={{ rotate: 3, scale: 1.04 }}
            className="mx-auto h-32 w-32 md:h-44 md:w-44"
          />
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
              Why Set Up a Trust
            </div>
            <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
              More Control. More Protection. <span className="text-gradient-brand">Less Risk.</span>
            </h2>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((it, i) => {
            const Icon = iconMap[it.icon];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={it.image}
                    alt={`${it.title} — editorial visual`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/20 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/95 text-brand-navy shadow-glow backdrop-blur transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col p-8">
                  <h3 className="text-2xl font-bold text-brand-navy">{it.title}</h3>
                  <p className="mt-3 text-muted-foreground">{it.desc}</p>
                  <div className="mt-6 h-0.5 w-12 bg-brand-gold transition-all duration-500 group-hover:w-24" />
                  <Link
                    to={`/services/${it.slug}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-brand-navy/20 px-4 py-2 text-sm font-semibold text-brand-navy transition-all hover:border-brand-blue hover:bg-brand-blue hover:text-white"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
