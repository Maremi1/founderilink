import { motion } from "framer-motion";
import { ShieldCheck, EyeOff, GitBranch } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Asset Protection",
    desc: "Shield your assets from lawsuits, divorce settlements, and creditor claims with structures built to endure.",
  },
  {
    icon: EyeOff,
    title: "Absolute Privacy",
    desc: "Keep your estate entirely out of public records — discretion engineered into every layer.",
  },
  {
    icon: GitBranch,
    title: "Succession Certainty",
    desc: "Prevent legal delays and reduce family disputes with crystal-clear, legally fortified transitions.",
  },
];

export const WhyTrust = () => {
  return (
    <section id="services" className="relative bg-surface-soft py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Why Set Up a Trust
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            More Control. More Protection. <span className="text-gradient-brand">Less Risk.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-blue-soft opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-brand-navy text-white shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-brand-navy">{it.title}</h3>
                <p className="mt-3 text-muted-foreground">{it.desc}</p>
                <div className="mt-6 h-0.5 w-12 bg-brand-gold transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
