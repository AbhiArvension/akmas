# AKMAS College Website Implementation Plan

## Background & Motivation
The objective is to build a modern, highly credible, and dynamic educational website for Ayyankali Memorial Arts and Science College (AKMAS), managed by the Ayyankali Cultural Trust. The user provided local images and documents which need to be integrated. The chosen design aesthetic is **Modern & Dynamic** with a **Modern Academic color palette** (Navy Blue, White, Gold) and a **Multi-Page Traditional** structure.

## Scope & Impact
- Initialize a new Next.js application inside the `webapp/` directory.
- Utilize Tailwind CSS for a mobile-first, responsive design.
- Implement `framer-motion` for engaging, modern animations.
- Structure the site into distinct pages: Home, About (incorporating the Trust and Chairman's details), Courses, and Contact.
- Migrate provided local assets (`images/` and `doc/`) into the web application's public directory.

## Proposed Solution
We will use Next.js (App Router) to build a fast, SEO-friendly multi-page application.
The UI will feature:
- **Navy Blue primary color** conveying trust and academic excellence.
- **Gold/Yellow accents** for call-to-actions and highlights.
- **Framer Motion** for scroll-triggered animations and page transitions.

## Phased Implementation Plan

### Phase 1: Project Setup & Asset Migration
1. Run `npx create-next-app@latest webapp` with Tailwind CSS, TypeScript, and App Router enabled.
2. Copy all images from `images/` into `webapp/public/images/`.
3. Install additional dependencies: `framer-motion`, `lucide-react` (for icons).

### Phase 2: Core Layout & Styling
1. Configure `tailwind.config.ts` with the Modern Academic color palette (Navy Blue: `#0f172a`, Gold: `#eab308`).
2. Create a global Layout component including a responsive Navbar (with mobile hamburger menu) and a comprehensive Footer.

### Phase 3: Page Development
1. **Home Page (`app/page.tsx`):**
   - Dynamic Hero section with a background image from local assets and animated introductory text.
   - Quick links/cards to Courses, Admissions, and Trust details.
2. **About Page (`app/about/page.tsx`):**
   - Details about AKMAS College's history, vision, and mission.
   - Section dedicated to the Ayyankali Cultural Trust.
   - Section for Chairman Punnala Sreekumar's message and background.
3. **Courses Page (`app/courses/page.tsx`):**
   - Grid layout detailing offered UG programs (B.A. English, B.Com, B.Sc., etc.).
4. **Contact Page (`app/contact/page.tsx`):**
   - Location details (Kuryottumala, Punalur), contact form UI, and Google Maps placeholder.

### Phase 4: Polish & Verification
1. Review all pages for mobile responsiveness.
2. Ensure `framer-motion` animations are smooth and not distracting.
3. Build the project to verify there are no compilation errors.

## Verification & Testing
- Run Next.js dev server and verify routing.
- Check Lighthouse scores (simulated) for performance and accessibility.
- Confirm all local images are rendering correctly.
