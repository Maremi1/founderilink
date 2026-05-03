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

        <AfricaMap />
      </div>
    </section>
  );
};

// Approximate lon/lat -> SVG coords for our viewBox (0 0 500 600)
// Africa bounding roughly: lon -20..55, lat 38..-35
const project = (lon: number, lat: number) => {
  const x = ((lon - -20) / (55 - -20)) * 500;
  const y = ((38 - lat) / (38 - -35)) * 600;
  return { x, y };
};

const markers = [
  { name: "Kigali", country: "Rwanda", lon: 30.06, lat: -1.94 },
  { name: "Dar es Salaam", country: "Tanzania", lon: 39.28, lat: -6.82 },
];

const AfricaMap = () => {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-md">
      <svg viewBox="0 0 500 600" className="absolute inset-0 h-full w-full" aria-label="Map of Africa highlighting Rwanda and Tanzania">
        <defs>
          <radialGradient id="mapglow" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="hsl(207 64% 46%)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(207 64% 46%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="continentFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(220 30% 18%)" />
            <stop offset="100%" stopColor="hsl(220 35% 12%)" />
          </linearGradient>
        </defs>
        <ellipse cx="250" cy="320" rx="240" ry="280" fill="url(#mapglow)" />

        {/* Africa continent (simplified outline) */}
        <path
          d="M 175 70
             C 210 55, 270 55, 305 72
             C 345 92, 380 95, 405 115
             C 425 132, 420 158, 405 178
             C 395 195, 388 215, 395 235
             C 405 260, 410 285, 400 310
             C 392 332, 378 350, 372 372
             C 365 398, 355 420, 340 442
             C 325 465, 310 488, 295 510
             C 280 530, 262 545, 245 552
             C 225 558, 208 548, 198 530
             C 185 505, 175 478, 168 452
             C 158 420, 148 388, 140 358
             C 132 328, 122 300, 118 270
             C 114 240, 118 210, 125 180
             C 132 150, 148 118, 158 95
             C 162 85, 168 76, 175 70 Z"
          fill="url(#continentFill)"
          stroke="hsl(41 60% 60% / 0.35)"
          strokeWidth="1.2"
        />

        {/* Madagascar */}
        <path
          d="M 388 408 C 395 420, 398 440, 392 460 C 388 472, 382 478, 378 470 C 374 455, 376 430, 384 412 Z"
          fill="url(#continentFill)"
          stroke="hsl(41 60% 60% / 0.35)"
          strokeWidth="1"
        />

        {/* Highlighted region: Tanzania (approx) */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          d="M 318 360 L 360 358 L 372 378 L 368 405 L 350 418 L 320 415 L 308 395 L 308 372 Z"
          fill="hsl(41 60% 60% / 0.35)"
          stroke="hsl(41 60% 60%)"
          strokeWidth="1.5"
        />
        {/* Highlighted region: Rwanda (small) */}
        <motion.path
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          d="M 314 354 L 326 352 L 330 362 L 322 368 L 312 364 Z"
          fill="hsl(41 60% 60% / 0.55)"
          stroke="hsl(41 60% 60%)"
          strokeWidth="1.5"
        />

        {/* Connecting arc between the two cities */}
        <motion.path
          d={`M ${project(markers[0].lon, markers[0].lat).x} ${project(markers[0].lon, markers[0].lat).y} Q 360 340 ${project(markers[1].lon, markers[1].lat).x} ${project(markers[1].lon, markers[1].lat).y}`}
          fill="none"
          stroke="hsl(41 60% 60%)"
          strokeWidth="1.2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>

      {markers.map((m, i) => {
        const { x, y } = project(m.lon, m.lat);
        return (
          <div
            key={m.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(x / 500) * 100}%`, top: `${(y / 600) * 100}%` }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full bg-brand-gold/40"
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
            />
            <div className="relative h-3 w-3 rounded-full bg-brand-gold ring-4 ring-brand-navy" />
            <div className="mt-2 whitespace-nowrap text-xs font-semibold text-white">
              {m.name}
              <span className="ml-1 text-[10px] uppercase tracking-widest text-brand-gold/80">{m.country}</span>
            </div>
          </div>
        );
      })}
      </div>
    </section>
  );
};
