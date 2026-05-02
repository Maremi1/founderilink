import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    tag: "Phase I",
    title: "Structural Engineering",
    items: [
      { h: "Corporate Structuring", p: "Restructuring for tax efficiency. Holding company & trust ownership. Founder exit planning." },
      { h: "Family Trust Setup", p: "Drafting & official registration. Trustee, beneficiary & custom-term strategy. Ironclad protection." },
    ],
  },
  {
    tag: "Phase II",
    title: "Continuity & Advisory",
    items: [
      { h: "Compliance", p: "Comprehensive annual trust reviews ensuring full regulatory alignment." },
      { h: "Future Generations", p: "Dedicated wealth planning for children, dependents and heirs." },
      { h: "Governance", p: "Ongoing trustee education and rigorous corporate governance." },
    ],
  },
];

export const Process = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative bg-surface-soft py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Our Process
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            Two Phases. <span className="text-gradient-brand">One Legacy.</span>
          </h2>
        </div>

        <div ref={ref} className="relative mx-auto mt-20 max-w-3xl">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border md:left-1/2" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 top-0 w-px bg-gradient-to-b from-brand-blue via-brand-blue to-brand-gold md:left-1/2"
          />

          <div className="space-y-16">
            {phases.flatMap((ph, pi) =>
              ph.items.map((it, ii) => {
                const idx = pi * 10 + ii;
                const left = idx % 2 === 0;
                return (
                  <motion.div
                    key={`${pi}-${ii}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`relative flex items-start gap-6 md:gap-12 ${left ? "" : "md:flex-row-reverse"}`}
                  >
                    <div className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-brand-blue ring-4 ring-background md:left-1/2" />
                    <div className="ml-12 flex-1 md:ml-0 md:w-1/2">
                      <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                        {ii === 0 && (
                          <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand-gold">{ph.tag} · {ph.title}</div>
                        )}
                        <h3 className="text-xl font-bold text-brand-navy">{it.h}</h3>
                        <p className="mt-2 text-muted-foreground">{it.p}</p>
                      </div>
                    </div>
                    <div className="hidden flex-1 md:block md:w-1/2" />
                  </motion.div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
