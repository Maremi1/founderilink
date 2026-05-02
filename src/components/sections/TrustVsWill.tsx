import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { dim: "Activation Timeline", trust: "Takes effect immediately or when desired", will: "Only takes effect after death" },
  { dim: "Legal Friction", trust: "Avoids probate, delays & court battles", will: "Subject to probate & legal disputes" },
  { dim: "Discretion & Privacy", trust: "Keeps your affairs private", will: "Becomes public record" },
  { dim: "Vulnerability", trust: "Protects beneficiaries from misuse, creditors, lawsuits", will: "No protection from creditors or family conflict" },
  { dim: "Asset Control", trust: "Ongoing control over how assets are used", will: "One-time transfer on death" },
];

export const TrustVsWill = () => {
  return (
    <section id="approach" className="relative py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Diagnostic Comparison
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            Trust <span className="font-serif italic text-muted-foreground">vs.</span> Will
          </h2>
          <p className="mt-4 text-muted-foreground">
            Two instruments. One offers protection in your lifetime; the other only after.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-border bg-card shadow-elegant">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr_1.2fr]">
            <div className="hidden bg-brand-navy p-6 md:block" />
            <div className="bg-gradient-to-br from-brand-blue to-brand-navy p-6 text-white">
              <div className="text-xs uppercase tracking-widest opacity-80">Recommended</div>
              <div className="mt-1 text-2xl font-bold">The Trust</div>
            </div>
            <div className="border-t border-border bg-surface-soft p-6 md:border-t-0 md:border-l">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Traditional</div>
              <div className="mt-1 text-2xl font-bold text-brand-navy">The Will</div>
            </div>
          </div>

          {rows.map((r, i) => (
            <motion.div
              key={r.dim}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-1 border-t border-border md:grid-cols-[1fr_1.2fr_1.2fr]"
            >
              <div className="bg-surface-soft p-6 text-sm font-semibold uppercase tracking-wider text-brand-navy md:bg-card">
                {r.dim}
              </div>
              <div className="flex items-start gap-3 p-6 md:border-l md:border-border">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue text-white">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground">{r.trust}</span>
              </div>
              <div className="flex items-start gap-3 border-t border-border p-6 text-muted-foreground md:border-l md:border-t-0">
                <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <X className="h-3.5 w-3.5" />
                </span>
                <span>{r.will}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
