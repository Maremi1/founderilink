## Goal
On the "Who We Serve" section, the photos in the cards (High-Net-Worth Families, Entrepreneurs & Owners, Real Estate & IP Holders, Parents & Guardians) currently sit under a strong gradient that fades to the card background, which makes them look washed out / semi-transparent. Make the imagery render more opaque and crisp while keeping the icon badge legible.

## Changes

File: `src/components/sections/Audience.tsx`

1. Image container
   - Increase image height from `h-48` to `h-56` so the photo has more presence.
   - Add a subtle inner ring for definition.

2. Overlay
   - Replace the heavy `bg-gradient-to-t from-card via-card/30 to-transparent` (which dims the whole image) with a much lighter bottom-only gradient: `bg-gradient-to-t from-card/70 via-transparent to-transparent`.
   - This keeps the icon badge readable at the bottom but lets the upper ~70% of the photo display at full opacity.

3. Image element
   - Add `brightness-105 saturate-110` for a slightly punchier look that matches the bright/airy site grading.
   - Keep the Ken Burns hover zoom.

4. Icon badge
   - Keep the floating badge but bump background to `bg-card/95` so it stays legible against the now-clearer photo.

No other sections, assets, or layout logic change. No new dependencies.

## Result
The four audience cards will show their African subject photography clearly and at full opacity in the upper portion, with only a soft fade behind the icon badge — matching the polished editorial feel of the rest of the site.
