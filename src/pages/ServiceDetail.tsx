import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ShieldCheck, EyeOff, GitBranch } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { getService, services } from "@/data/services";
import { useEffect } from "react";

const iconMap = { ShieldCheck, EyeOff, GitBranch };

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getService(slug) : undefined;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} — The Founder`;
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [service]);

  if (!service) return <Navigate to="/" replace />;

  const Icon = iconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />

      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-blue-soft/40 to-transparent" />
        <div className="container">
          <Link
            to="/#services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-brand-blue"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <div className="mt-8 grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-gold">
                <Icon className="h-3.5 w-3.5" /> Service
              </div>
              <h1 className="mt-4 text-4xl font-bold text-brand-navy md:text-6xl">
                {service.title}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">{service.tagline}</p>
              <p className="mt-6 text-foreground/80">{service.desc}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild className="bg-brand-navy hover:bg-brand-blue">
                  <a href="https://wa.me/255765658595?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation%20regarding%20your%20services." target="_blank" rel="noopener noreferrer">Book Consultation</a>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/#services">All Services</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-brand-gold/30 to-brand-blue/30 blur-2xl" />
              <img
                src={service.image}
                alt={`${service.title} — illustrative editorial photograph`}
                width={1024}
                height={1024}
                loading="eager"
                className="relative aspect-square w-full rounded-3xl object-cover shadow-elegant"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-soft">
        <div className="container">
          <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">
            How we deliver <span className="text-gradient-brand">{service.title.toLowerCase()}</span>
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-7 shadow-soft"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-navy text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-brand-navy">{h.title}</h3>
                <p className="mt-2 text-muted-foreground">{h.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">What's included</h2>
            <p className="mt-3 text-muted-foreground">
              Every engagement is bespoke. Below is a baseline of deliverables you can expect.
            </p>
            <ul className="mt-6 space-y-3">
              {service.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-blue text-white">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img
src={service.detailImage}
              alt={`${service.title} detail`}
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-surface-soft">
        <div className="container">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold text-brand-navy md:text-4xl">Explore other services</h2>
            <Link to="/#services" className="hidden text-sm font-medium text-brand-blue hover:underline md:inline">
              View all
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant"
              >
                <div className="grid grid-cols-[140px_1fr]">
                  <img src={s.image} alt={s.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-brand-navy">{s.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{s.tagline}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-blue">
                      Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;
