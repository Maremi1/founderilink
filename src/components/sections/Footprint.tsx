import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dar from "@/assets/dar-city.jpg";
import kigali from "@/assets/kigali-city.jpg";
import africaData from "@/assets/africa-paths.json";

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

// Real Africa map rendered from GeoJSON country geometry
const HIGHLIGHTED = new Set(["Rwanda", "Tanzania", "United Republic of Tanzania"]);

const { width: MAP_W, height: MAP_H, projectInfo, features: countries } =
  africaData as {
    width: number;
    height: number;
    projectInfo: { offsetX: number; offsetY: number; scale: number; minLon: number; maxLat: number };
    features: { name: string; d: string }[];
  };

const projectLngLat = (lon: number, lat: number) => ({
  x: projectInfo.offsetX + (lon - projectInfo.minLon) * projectInfo.scale,
  y: projectInfo.offsetY + (projectInfo.maxLat - lat) * projectInfo.scale,
});

const cityMarkers = [
  { name: "Kigali", country: "Rwanda", lon: 30.0619, lat: -1.9441 },
  { name: "Dar es Salaam", country: "Tanzania", lon: 39.2083, lat: -6.7924 },
];

const AfricaMap = () => {
  const kigaliPt = projectLngLat(cityMarkers[0].lon, cityMarkers[0].lat);
  const darPt = projectLngLat(cityMarkers[1].lon, cityMarkers[1].lat);

  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-md">
      <svg
        viewBox={`0 0 ${MAP_W} ${MAP_H}`}
        className="absolute inset-0 h-full w-full"
        aria-label="Map of Africa highlighting Rwanda and Tanzania"
      >
        <defs>
          <radialGradient id="mapglow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="hsl(41 60% 60%)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(41 60% 60%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="continentFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(220 30% 22%)" />
            <stop offset="100%" stopColor="hsl(220 35% 14%)" />
          </linearGradient>
          <linearGradient id="highlightFill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(41 70% 62%)" />
            <stop offset="100%" stopColor="hsl(41 60% 48%)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width={MAP_W} height={MAP_H} fill="url(#mapglow)" />

        {countries.map((c) => {
          const highlighted = HIGHLIGHTED.has(c.name);
          return (
            <motion.path
              key={c.name}
              d={c.d}
              fill={highlighted ? "url(#highlightFill)" : "url(#continentFill)"}
              stroke={highlighted ? "hsl(41 70% 70%)" : "hsl(41 60% 60% / 0.25)"}
              strokeWidth={highlighted ? 1.2 : 0.6}
              initial={highlighted ? { opacity: 0 } : false}
              whileInView={highlighted ? { opacity: 1 } : undefined}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <title>{c.name}</title>
            </motion.path>
          );
        })}

        {/* Dashed arc between the two cities */}
        <motion.path
          d={`M ${kigaliPt.x} ${kigaliPt.y} Q ${(kigaliPt.x + darPt.x) / 2} ${
            Math.min(kigaliPt.y, darPt.y) - 30
          } ${darPt.x} ${darPt.y}`}
          fill="none"
          stroke="hsl(41 70% 65%)"
          strokeWidth="1.4"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        />
      </svg>

      {cityMarkers.map((m, i) => {
        const { x, y } = projectLngLat(m.lon, m.lat);
        return (
          <div
            key={m.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${(x / MAP_W) * 100}%`, top: `${(y / MAP_H) * 100}%` }}
          >
            <motion.div
              className="absolute left-1/2 top-1/2 -ml-4 -mt-4 h-8 w-8 rounded-full bg-brand-gold/40"
              animate={{ scale: [1, 2.2, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
            />
            <div className="relative h-3 w-3 rounded-full bg-brand-gold ring-4 ring-brand-navy" />
            <div className="mt-2 whitespace-nowrap text-xs font-semibold text-white">
              {m.name}
              <span className="ml-1 text-[10px] uppercase tracking-widest text-brand-gold/80">
                {m.country}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
