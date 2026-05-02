import logo from "@/assets/founder-logo.jpeg";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="The Founder" className="h-12 w-12 rounded-md object-contain" />
              <div>
                <div className="text-base font-bold text-brand-navy">THE FOUNDER</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Securing Vision</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Family trust & corporate structuring, engineered for those who plan
              in generations.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-brand-blue">Family Trust Setup</a></li>
              <li><a href="#services" className="hover:text-brand-blue">Corporate Structuring</a></li>
              <li><a href="#services" className="hover:text-brand-blue">Advisory & Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Company</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#approach" className="hover:text-brand-blue">Approach</a></li>
              <li><a href="#audience" className="hover:text-brand-blue">Who We Serve</a></li>
              <li><a href="#process" className="hover:text-brand-blue">Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-brand-navy">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>+255 762 883 065</li>
              <li>info@thefoundergrid.com</li>
              <li>Dar es Salaam · Kigali</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} The Founder Management Consultancy. All rights reserved.</div>
          <div className="uppercase tracking-widest">Build · Protect · Transition</div>
        </div>
      </div>
    </footer>
  );
};
