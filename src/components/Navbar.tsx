import logo from "@/assets/founder-logo.jpeg";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#approach", label: "Approach" },
  { href: "#audience", label: "Who We Serve" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-soft border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="The Founder logo" className="h-10 w-10 rounded-md object-contain" />
          <div className="hidden sm:block leading-tight">
            <div className="text-sm font-bold tracking-wide text-brand-navy">THE FOUNDER</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Securing Vision</div>
          </div>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="hidden md:block">
          <Button asChild className="bg-brand-navy hover:bg-brand-blue">
            <a href="#contact">Book Consultation</a>
          </Button>
        </div>
        <button
          className="md:hidden text-brand-navy"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass border-t border-border/60">
          <div className="container flex flex-col gap-4 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium">
                {l.label}
              </a>
            ))}
            <Button asChild className="bg-brand-navy hover:bg-brand-blue">
              <a href="#contact" onClick={() => setOpen(false)}>Book Consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
