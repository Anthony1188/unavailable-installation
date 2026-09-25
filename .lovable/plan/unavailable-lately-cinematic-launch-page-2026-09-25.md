# UNAVAILABLE, LATELY. — Cinematic Launch Page

## Direction
Build a single-page architectural fashion installation using the uploaded concrete interior as the full visual environment and the five individual transparent shirt assets as the only product imagery. The uploaded full-page composition remains a visual reference only.

The visual system will stay strictly within black, charcoal concrete, warm grey, and off-white, with a premium grotesk typeface, sharp geometry, thin rules, restrained editorial labels, and large negative space. No cards, glow, glass, stock imagery, generated products, or ecommerce-template styling.

## Page sequence
1. **Full-screen opening installation**
   - Layer the five exact product assets at controlled depths over the concrete environment rather than arranging them as a grid.
   - Add the supplied headline, supporting copy, primary collection button, and release-notification link.
   - Use a minimal brand header without introducing cart or storefront features.

2. **Scroll-led separation and construction story**
   - Gradually separate the five shirts as the visitor scrolls out of the opening frame.
   - Present “FIVE COLORS. ONE CONSTRUCTION.” with the five supplied construction statements revealed sequentially.

3. **Full-screen colorway archive**
   - Show one large shirt at a time with the five-item vertical selector.
   - Map each selector entry to its matching uploaded image: Deep Charcoal, Washed Graphite, Coastal Sand, Bone White, and Midnight Navy.
   - Crossfade between the exact assets and subtly shift environmental light by colorway without recoloring the garments.

4. **Garment detail study**
   - Create close crops from the original uploaded product imagery for collar, fabric, shoulder seam, woven label, and hem construction.
   - Pair them with “BUILT TO HOLD ITS FORM.” and the supplied construction copy.
   - Follow with the sparse “NOTHING EXTERNAL.” statement and its four lines.

5. **Release and notification**
   - Build the full-screen “RELEASE 001” countdown composition.
   - Keep the supplied `00 DAYS : 00 HOURS : 00 MINUTES : 00 SECONDS` state because no launch date was provided; structure it so a real target date can be inserted later without redesign.
   - Both notification links scroll to one inline email field with lightweight validation and an on-page confirmation state. No mailing service or data storage will be added in this pass.

6. **Final frame**
   - Fade the concrete environment into darkness and center the brand name, city, and coordinates exactly as supplied.

## Motion and interaction
- Build slow camera drift, layered pointer parallax, subtle light movement, and extremely slow shirt float using restrained transforms only.
- Tie the shirt separation and story reveals to scroll progress with smooth, non-bouncy easing.
- Avoid shirt rotation, fast cuts, blanket text animation, or exaggerated depth effects.
- Respect reduced-motion preferences by removing parallax and continuous movement while preserving the composition.

## Responsive behavior
- Preserve the cinematic 16:9 opening composition on wide screens while adapting it into a carefully cropped, full-height mobile installation.
- Recompose product depth, selector placement, typography, and detail crops for phone widths without overlap or clipped text.
- Keep controls keyboard accessible, visible focus states, descriptive image text, and sufficient contrast.

## Technical implementation
- Register the uploaded concrete background and five individual shirt files through the project asset flow; do not use the duplicate lineup image as a product source.
- Replace the placeholder home screen with focused React sections and small reusable pieces for the installation, colorway selector, detail study, countdown, and signup.
- Add semantic design tokens and the chosen grotesk font through the existing global style system.
- Add page-specific title, description, Open Graph text, and Twitter metadata for the brand launch page.
- Verify the finished page in the running preview at desktop and mobile widths, including scroll progression, selector swaps, signup scrolling, reduced motion, image fidelity, overlaps, and console errors.