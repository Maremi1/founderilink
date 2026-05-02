## Add More Media Across the Site

Layer additional photography, video, and animated visuals into sections that are currently text/icon-heavy, while keeping the light editorial theme.

### New media to generate

1. **Hero ambient video** — soft slow-motion abstract loop (gold/blue light particles drifting across white marble) as a muted, low-opacity background layer behind the existing particle network.
2. **Trust shield illustration** — refined SVG-style render of a navy & gold shield with blueprint lines, for the "Why Trust" section header.
3. **Boardroom photo** — bright modern boardroom with people mid-discussion, used in the Architecture section as a side visual.
4. **Compliance / governance photo** — close-up of hands signing legal documents with fountain pen, for the Process timeline header.
5. **Kigali & Dar es Salaam city photos** — two real cityscape shots to anchor the Footprint section beside the stylized map.
6. **Founder portrait refresh** — a second editorial portrait (working at desk) for a small inset in the Founder section.
7. **Logo lockup mark** — clean transparent PNG of the brand wordmark for the footer.

### Section changes

- **Hero**: add ambient video layer (autoplay, muted, loop, `prefers-reduced-motion` aware) behind particles; keep current copy intact.
- **WhyTrust**: add the shield illustration to the left of the heading on desktop, with a soft scroll-parallax.
- **Architecture**: add boardroom photo as a framed image card above the active-pillar panel, with a subtle Ken Burns zoom on hover.
- **Process**: add the signing photo as a banner at the top of the timeline with a gradient overlay and animated caption.
- **Footprint**: convert each city card into an image card (real photo + city name overlay), keeping the animated map.
- **Founder**: add the second portrait as a small offset inset behind the main portrait for editorial depth.
- **Footer**: add the logo lockup and a small animated brand strip.
- **New "Insights" strip** between Pyramid and Footprint: 3 short stat tiles with animated counters and tiny background photos (wealth, governance, continuity).

### Technical notes

- Generate raster images with the image tool at appropriate aspect ratios; store under `src/assets/`.
- Generate the hero ambient clip with the video tool (5s, 1080p, 16:9, camera_fixed) and import via the `.asset.json` URL.
- All new `<img>` tags get `loading="lazy"`, explicit `width`/`height`, and descriptive `alt`.
- Respect `prefers-reduced-motion` for the hero video and Ken Burns effects.
- Continue using semantic tokens (`brand-navy`, `brand-gold`, `brand-blue-soft`, `surface-soft`) — no raw colors.
- Framer Motion for reveals, parallax, and counters; no new dependencies.

### Out of scope

- No copy rewrites beyond short captions for new media.
- No layout changes to sections not listed above.
