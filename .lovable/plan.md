# The Founder — Corporate Website Plan

A polished, light-themed single-page corporate website for **The Founder Management Consultancy**, inspired by the business card's clean blue/black/white identity and built around the Family Trust & Corporate Structuring service line from the Legacy Architecture deck.

## Brand Direction
- **Palette (light):** Soft white background (#FBFBFD), deep navy text (#0E1A2B), signature brand blue (#2A7FBF) accent, subtle gold (#C9A24A) for "legacy/wealth" highlights.
- **Typography:** Strong geometric sans for headings (e.g. Inter / Space Grotesk), refined serif touches for editorial quotes.
- **Tagline:** "Securing Vision."

## Page Sections

1. **Sticky translucent navbar** — logo left, anchor links (Services, Approach, Who We Serve, Process, Contact), CTA "Book Consultation".
2. **Hero**
   - Headline: *Secure Your Legacy. Structure Your Wealth.*
   - Sub: Family Trust & Corporate Structuring for visionaries.
   - Two CTAs: "Explore Services" / "Speak to an Advisor".
   - **Interactive background:** animated canvas particle network (nodes + connecting lines, slow drift, mouse-reactive) in soft blue — evokes structure, networks, governance.
   - Floating logo mark with subtle parallax.
3. **The Blueprint of Your Tomorrow** — editorial intro section with split layout: handshake/family imagery, blueprint SVG overlay that draws itself in on scroll.
4. **Why Set Up a Trust?** — three animated cards (Asset Protection, Privacy, Succession Certainty) with custom SVG icons that animate on hover (shield assembling, eye closing, family tree growing).
5. **Trust vs. Will — Interactive Comparison**
   - Toggle/tabs or side-by-side animated table; rows reveal sequentially on scroll with check/cross morph animations across 5 dimensions (Activation, Legal Friction, Privacy, Vulnerability, Asset Control).
6. **Who Requires Structured Protection?** — 4 illustrated tiles (HNW Families, Entrepreneurs, Real Estate/IP, Parents & Guardians). Hover lifts card and reveals a short vignette; each tile uses a hand-drawn line illustration that animates stroke-draw on view.
7. **Architecture of Our Services** — interactive layered diagram: hover/click between three pillars (Family Trust Setup, Corporate Structuring, Advisory & Ongoing Support); center pillar "Generational Wealth" pulses.
8. **Our Process — Two Phases**
   - Phase I: Structural Engineering (Corporate Structuring + Family Trust Setup)
   - Phase II: Continuity & Advisory (Compliance, Future Generations, Governance)
   - Animated vertical timeline with progress line that fills as user scrolls; each milestone expands.
9. **The Result — Pyramid of Outcomes** — animated SVG pyramid (4 tiers) building bottom-up on scroll, ending with "Build. Protect. Transition."
10. **Regional Footprint** — Dar es Salaam & Kigali; stylized map with two glowing pins and a connecting arc animation.
11. **Founder / Leadership snapshot** — portrait card with quote.
12. **Contact / Consultation CTA** — form (name, email, phone, interest area, message) + direct details (phone, email, P.O. Box). Light-themed card with subtle glassmorphism.
13. **Footer** — logo, nav, socials, copyright.

## Interactive & Motion Layer
- Particle network hero background (canvas).
- Scroll-triggered reveals + stroke-draw SVG illustrations.
- Animated counters (years, clients, jurisdictions — placeholder values).
- Smooth anchor scrolling and section transitions.
- Cursor-reactive subtle blueprint grid behind key sections.
- Hover micro-interactions on every card and CTA.

## Media
- Reuse The Founder logo (from upload) in nav, hero mark, footer.
- Use deck imagery (handshake/family blueprint, founder portrait, infinity governance graphic, pyramid) as supporting media, restyled to fit light theme.
- Custom SVG illustrations for icons, diagrams, pyramid, map arc.

## Technical Notes
- React + Vite + Tailwind + shadcn (existing stack).
- Framer Motion for transitions and scroll reveals.
- Custom canvas component for hero particle network.
- All colors via HSL tokens in `index.css`; new semantic tokens for `brand-blue`, `brand-navy`, `brand-gold`, `surface-soft`.
- Copy uploaded images into `src/assets/` and import as ES modules.
- Single route `/` composed of section components under `src/components/sections/`.
- Fully responsive; respects `prefers-reduced-motion`.
