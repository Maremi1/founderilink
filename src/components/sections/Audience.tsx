import { motion } from "framer-motion";
import { Crown, Briefcase, Building2, Users } from "lucide-react";

const audiences = [
  {
    icon: Crown,
    title: "High-Net-Worth Families",
    desc: "Efficient wealth transfer without legal delays and guaranteed privacy over the estate.",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs & Owners",
    desc: "Business continuity, founder exits, and protection from corporate liability.",
  },
  {
    icon: Building2,
    title: "Real Estate & IP Holders",
    desc: "Centralized control and ironclad protection for shares, properties and intellectual property.",
  },
  {
    icon: Users,
    title: "Parents & Guardians",
    desc: "Future security — protecting children and beneficiaries from misuse of funds.",
  },
];

export const Audience = () => {
  return (
    <section id="audience" className="relative bg-surface-soft py-24 md:py-32">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Who We Serve
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            Who Requires <span className="text-gradient-brand">Structured Protection?</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -10, rotate: -1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-gold transition-transform duration-500 group-hover:scale-x-100" />
              <a.icon className="h-9 w-9 text-brand-blue transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-gold" strokeWidth={1.4} />
              <h3 className="mt-5 text-xl font-bold text-brand-navy">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
