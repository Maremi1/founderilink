import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 -z-10 bg-blueprint opacity-50" />
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-block rounded-full border border-brand-blue/20 bg-brand-blue-soft px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Begin the Conversation
          </div>
          <h2 className="mt-4 text-4xl font-bold text-brand-navy md:text-5xl">
            Ready to Structure Your <span className="text-gradient-brand">Legacy?</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Personalised, confidential trust and corporate structuring — built around your vision.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 rounded-3xl border border-border bg-brand-navy p-8 text-white"
          >
            <h3 className="text-2xl font-bold">Speak directly</h3>
            <div className="space-y-4 text-sm">
              <a href="tel:+255762883065" className="flex items-start gap-3 hover:text-brand-gold">
                <Phone className="mt-0.5 h-4 w-4 text-brand-gold" />
                <span>+255 762 883 065</span>
              </a>
              <a href="mailto:info@thefoundergrid.com" className="flex items-start gap-3 hover:text-brand-gold">
                <Mail className="mt-0.5 h-4 w-4 text-brand-gold" />
                <span>info@thefoundergrid.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-brand-gold" />
                <span>P.O. Box 60434, 85 Kinondoni<br />Dar es Salaam, Tanzania</span>
              </div>
            </div>
            <div className="border-t border-white/10 pt-6 font-serif text-xl italic text-white/80">
              "Your vision deserves architecture worthy of it."
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              toast({ title: "Inquiry received", description: "An advisor will reach out shortly." });
              (e.target as HTMLFormElement).reset();
            }}
            className="grid gap-4 rounded-3xl border border-border bg-card p-8 shadow-elegant glass"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required className="mt-1.5" placeholder="Your name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required className="mt-1.5" placeholder="you@company.com" />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" className="mt-1.5" placeholder="+255 ..." />
              </div>
              <div>
                <Label htmlFor="interest">Area of Interest</Label>
                <Input id="interest" className="mt-1.5" placeholder="Family Trust, Restructuring..." />
              </div>
            </div>
            <div>
              <Label htmlFor="msg">Message</Label>
              <Textarea id="msg" rows={5} className="mt-1.5" placeholder="Tell us about your goals..." />
            </div>
            <Button type="submit" size="lg" className="bg-brand-navy hover:bg-brand-blue group">
              Send Inquiry
              <Send className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
