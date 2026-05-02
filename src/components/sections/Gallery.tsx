import { motion } from "framer-motion";
import family from "@/assets/family-legacy.jpg";
import skyline from "@/assets/skyline-corporate.jpg";
import handshake from "@/assets/handshake-advisory.jpg";
import entrepreneur from "@/assets/entrepreneur.jpg";

const tiles = [
  { src: family, title: "Family", caption: "Generational stewardship", h: "row-span-2", w: 1280, hgt: 896 },
  { src: skyline, title: "Enterprise", caption: "Corporate structuring", h: "", w: 1280, hgt: 896 },
  { src: handshake, title: "Advisory", caption: "Trusted counsel", h: "", w: 1280, hgt: 896 },
  { src: entrepreneur, title: "Founders", caption: "Securing vision", h: "row-span-2", w: 1024, hgt: 1280 },
];

export const Gallery = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            In Practice
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            A Portrait of <span className="text-gradient-brand">Stewardship</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Glimpses into the families, founders and enterprises whose architecture we quietly engineer.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4 md:gap-6">
          {tiles.map((t, i) => (
            <motion.figure
              key={t.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-elegant ${t.h}`}
            >
              <img
                src={t.src}
                alt={t.title}
                width={t.w}
                height={t.hgt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-90" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-gold">{t.caption}</div>
                <div className="mt-1 text-xl font-bold">{t.title}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
