import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dar from "@/assets/dar-city.jpg";
import kigali from "@/assets/kigali-city.jpg";

const cities = [
  { name: "Dar es Salaam", country: "Tanzania", x: "55%", y: "62%", img: dar },
  { name: "Kigali", country: "Rwanda", x: "38%", y: "48%", img: kigali },
];

export const Footprint = () => {
  return (
    <section className="relative bg-brand-navy py-24 text-white md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="container relative grid items-center gap-12 md:grid-cols-2">
        <div>
          <div className="inline-block rounded-full border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
            Regional Footprint
          </div>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Anchored in <span className="text-gradient-gold">East Africa.</span>
          </h2>
          <p className="mt-6 text-lg text-white/70">
            Two strategic hubs serving entrepreneurs, families and institutions
            across the region — with discretion, fluency in local regulation,
            and global standards of practice.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {cities.map((c) => (
              <motion.div
                key={c.name}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 shadow-elegant"
              >
                <img
                  src={c.img}
                  alt={`${c.name}, ${c.country}`}
                  width={1024}
                  height={1024}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="flex items-center gap-2 text-brand-gold">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-[10px] uppercase tracking-widest">{c.country}</span>
                  </div>
                  <div className="mt-1 text-xl font-bold text-white">{c.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative aspect-square">
          {/* Stylized continent */}
          <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full">
            <defs>
              <radialGradient id="mapglow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(207 64% 46%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(207 64% 46%)" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="90" fill="url(#mapglow)" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(207 64% 46% / 0.2)" strokeDasharray="2 4" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(207 64% 46% / 0.15)" strokeDasharray="2 4" />
            {/* arc between cities */}
            <motion.path
              d="M 76 96 Q 90 70 110 124"
              fill="none"
              stroke="hsl(41 60% 60%)"
              strokeWidth="1"
              strokeDasharray="3 3"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
            />
          </svg>
          {cities.map((c, i) => (
            <div key={c.name} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: c.x, top: c.y }}>
              <motion.div
                className="absolute -inset-3 rounded-full bg-brand-gold/40"
                animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
              />
              <div className="relative h-3 w-3 rounded-full bg-brand-gold ring-4 ring-brand-navy" />
              <div className="mt-2 whitespace-nowrap text-xs font-semibold">{c.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
