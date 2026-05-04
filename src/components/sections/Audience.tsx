import { motion } from "framer-motion";
import { Crown, Briefcase, Building2, Users } from "lucide-react";
import audienceFamily from "@/assets/audience-family.jpg";
import audienceEntrepreneur from "@/assets/audience-entrepreneur.jpg";
import audienceRealestate from "@/assets/audience-realestate.jpg";
import audienceParents from "@/assets/audience-parents.jpg";

const audiences = [
  {
    icon: Crown,
    title: "High-Net-Worth Families",
    desc: "Efficient wealth transfer without legal delays and guaranteed privacy over the estate.",
    image: audienceFamily,
    alt: "Elegant African family in a refined interior",
  },
  {
    icon: Briefcase,
    title: "Entrepreneurs & Owners",
    desc: "Business continuity, founder exits, and protection from corporate liability.",
    image: audienceEntrepreneur,
    alt: "Confident African entrepreneur in a modern office",
  },
  {
    icon: Building2,
    title: "Real Estate & IP Holders",
    desc: "Centralized control and ironclad protection for shares, properties and intellectual property.",
    image: audienceRealestate,
    alt: "African professional reviewing property blueprints",
  },
  {
    icon: Users,
    title: "Parents & Guardians",
    desc: "Future security — protecting children and beneficiaries from misuse of funds.",
    image: audienceParents,
    alt: "African parents holding hands in a sunlit garden",
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
              whileHover={{ y: -10 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={a.image}
                  alt={a.alt}
                  width={800}
                  height={640}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/90 shadow-soft backdrop-blur-sm">
                  <a.icon className="h-5 w-5 text-brand-blue transition-colors duration-500 group-hover:text-brand-gold" strokeWidth={1.6} />
                </div>
              </div>

              <div className="relative flex-1 p-6">
                <h3 className="text-xl font-bold text-brand-navy">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
                <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-blue to-brand-gold transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
