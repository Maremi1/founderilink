import { motion } from "framer-motion";
import { useState } from "react";
import { Layers, Building, LifeBuoy } from "lucide-react";
import boardroom from "@/assets/boardroom.jpg";

const pillars = [
  {
    icon: Layers,
    title: "Family Trust Setup",
    desc: "Expert drafting and official registration of family trusts. Strategic appointment of trustees, beneficiaries and custom terms.",
    points: ["Drafting & registration", "Trustee strategy", "Asset protection terms"],
  },
  {
    icon: Building,
    title: "Corporate Structuring",
    desc: "Restructuring businesses for tax efficiency. Holding company & trust ownership models. Founder exit and intergenerational transfer.",
    points: ["Tax-efficient restructuring", "Holdco & trust ownership", "Founder exit planning"],
  },
  {
    icon: LifeBuoy,
    title: "Advisory & Ongoing Support",
    desc: "Annual trust reviews, rigorous corporate governance, ongoing trustee education and dedicated wealth planning for dependents.",
    points: ["Annual trust reviews", "Trustee education", "Wealth planning for heirs"],
  },
];

export const Architecture = () => {
  const [active, setActive] = useState(0);
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Service Architecture
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            A Cohesive Strategy to <span className="text-gradient-brand">Build, Protect & Transition</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-3">
            {pillars.map((p, i) => (
              <motion.button
                key={p.title}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                whileHover={{ x: 4 }}
                className={`group flex items-start gap-4 rounded-2xl border p-6 text-left transition-all ${
                  active === i
                    ? "border-brand-blue bg-brand-blue-soft/60 shadow-elegant"
                    : "border-border bg-card hover:border-brand-blue/40"
                }`}
              >
                <div className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${active === i ? "bg-brand-navy text-white" : "bg-surface-soft text-brand-navy"}`}>
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-brand-navy">{p.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{p.desc}</div>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group relative w-full overflow-hidden rounded-3xl shadow-elegant"
            >
              <img
                src={boardroom}
                alt="Advisory boardroom"
                width={1280}
                height={896}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
              <div className="absolute bottom-4 left-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">In Counsel</div>
                <div className="text-lg font-semibold">Advisory Boardroom</div>
              </div>
            </motion.div>
            <div className="absolute inset-0 rounded-3xl bg-grid opacity-30 -z-10" />
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-elegant"
            >
              <div className="text-xs uppercase tracking-widest text-brand-gold">Pillar {active + 1}</div>
              <h3 className="mt-2 text-3xl font-bold text-brand-navy">{pillars[active].title}</h3>
              <ul className="mt-6 space-y-3">
                {pillars[active].points.map((pt) => (
                  <li key={pt} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-brand-gold" />
                    <span className="text-foreground">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Outcome</div>
                  <div className="mt-1 font-semibold text-brand-navy">Generational Wealth</div>
                </div>
                <div className="relative h-12 w-12">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-brand-blue/30"
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                  />
                  <div className="absolute inset-2 rounded-full bg-brand-blue" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
