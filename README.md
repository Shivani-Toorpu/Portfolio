# Personal Portfolio Website

A single-page personal portfolio built from the provided wireframe: sticky nav, hero with marquee, About Me card grid, Skills, Projects carousel, and a Contact form that emails to Gmail.

## Tech Stack

| Concern | Choice |
|---|---|
| Framework | Next.js (App Router) + React + TypeScript |
| Styling | Tailwind CSS |
| Email | Next.js API route + Nodemailer (Gmail App Password) |
| Toasts | `sonner` (or `react-hot-toast`) |
| Carousel | Embla Carousel (touch-swipe + autoplay plugin) |
| Icons | `lucide-react` + `react-icons` (tech/brand icons) |
| Deployment | Vercel |
| Version control | Git + GitHub |

## Workflow Rules

- One phase at a time; we do not start the next phase until the current one is reviewed.
- Each phase ends with a commit (Conventional Commits) pushed to GitHub.
- Work on `main` for simplicity, or on a `phase-N` branch merged at the end of each phase (decide in Phase 0).

## Visual Direction (Monochrome, Minimalist)

**Reference:** [beminimalist.co](https://beminimalist.co/): clean, text-first, lots of whitespace, solid black call-to-action buttons, thin-bordered rounded cards, small icon + short-label feature grids, and imagery doing the talking.

**Rules**
1. **Palette is black, white and grays only.** No accent colors anywhere in the UI. The only color on the site comes from the images you supply (headshot, book covers, project screenshots, logos).
2. **Grays are for effects**, not decoration: hover states, borders, dividers, shadows, card backgrounds, disabled states, skeleton/loading states, and the highlight effects below.
3. **Word highlights use grays only, and only in two places:**
   - **Home page (hero):** key words in the bio (e.g. "user-friendly", "simple", "delightful", "front-end", "back-end", "flexibility", "clarity", "collaboration") get a light-gray highlight background instead of the wireframe's yellow/purple.
   - **Navbar on scroll:** the active link gets a gray highlight pill (replacing the wireframe's yellow) and updates as sections scroll into view.
   - No word highlighting in any other section.
4. Typography does the heavy lifting: one clean sans-serif family, strong size/weight contrast, generous line-height and spacing.
5. Buttons: primary = solid black with white text; secondary = white with a thin black/gray border. Hover = shift to a darker/lighter gray, never a color.
6. Links, icons and toasts (success/error) are also monochrome; differentiate with icon shape and text, not color.

**Gray scale tokens (Tailwind theme, defined in Phase 1)**

| Token | Hex | Use |
|---|---|---|
| `bg` | `#FFFFFF` | Page background |
| `surface` | `#F7F7F7` | Cards, contact panel |
| `highlight` | `#E5E5E5` | Word highlights, active nav pill |
| `border` | `#D4D4D4` | Card borders, dividers |
| `muted` | `#737373` | Secondary text |
| `text` | `#171717` | Body text |
| `ink` | `#000000` | Headings, primary buttons |

(Exact values can be tuned when we review Phase 1.)

---

## Wireframe Summary

| Section | Key elements |
|---|---|
| Navigation | Sticky pill nav: HOME, ABOUT ME, SKILLS, PROJECTS, CONTACT; active link highlighted with a gray pill (wireframe yellow becomes gray); logo on the left |
| Hero | Scrolling marquee ("actively seeking roles..."), intro headline + bio with highlighted words, buttons (View LinkedIn / GitHub / Resume), portrait on the right |
| About Me | Card grid: Experience (Offer Letter, Certificate, GitHub), Education (Webpage + 2 placeholder buttons), Pass-time (book covers), Publication (View Paper, Certificate, GitHub), several `?` placeholder cards, quote card |
| Skills | Large empty container: categorized icon grid (Frontend, Backend, Cloud/DevOps) with hover animations |
| Projects | Horizontal carousel with left/right arrows, swipe, optional autoplay |
| Contact | "Get in Touch" panel: intro text, email, social icons; form with First Name, Last Name, Email*, Message, Send |

---

## Phases

### Phase 0: Project Setup and Repository
**Goal:** A clean, running skeleton on GitHub.
- [ ] Create GitHub repo; initialize local git
- [ ] Scaffold Next.js + TypeScript + Tailwind (`create-next-app`)
- [ ] Add ESLint/Prettier, `.gitignore`, `.env.example`
- [ ] Add this `README.md`
- [ ] Define folder structure: `components/`, `sections/`, `data/`, `public/`, `app/api/`
- [ ] Verify `npm run dev` shows the default page

**Commit:** `chore: initial project setup`

### Phase 1: Design System and Layout Shell
**Goal:** Global look and feel plus the page skeleton.
- [ ] Tailwind theme: strictly black/white/gray tokens (see Visual Direction), no accent colors; fonts, radii, spacing
- [ ] Utility class for the gray word-highlight effect (used only in hero and navbar)
- [ ] Lint/check to make sure no non-gray color utilities slip in (e.g. restrict Tailwind palette to `black`, `white`, `neutral`)
- [ ] Rounded "card frame" wrapper component used by every section
- [ ] Page skeleton with empty sections and anchor IDs: `home`, `about`, `skills`, `projects`, `contact`
- [ ] Reusable `Button`, `Card`, `SectionWrapper` components
- [ ] Dark/light handling decision (optional, default: light only, as in wireframe)

**Commit:** `feat: design tokens, base layout and shared components`

### Phase 2: Navigation Bar
**Goal:** Sticky, working navigation.
- [ ] Logo + pill-style nav links
- [ ] Sticky positioning with subtle blur/shadow on scroll
- [ ] Smooth scrolling to anchors (with offset for the sticky header)
- [ ] Active-section highlighting via `IntersectionObserver` (gray highlight pill, updates on scroll)
- [ ] Mobile menu (hamburger) for small screens

**Commit:** `feat: sticky navbar with scroll-spy`

### Phase 3: Hero Section
**Goal:** The first impression.
- [ ] Infinite marquee banner (CSS animation, pause on hover, `prefers-reduced-motion` respected)
- [ ] Headline and bio with gray-highlighted keywords (the only content area with word highlights)
- [ ] Buttons: LinkedIn, GitHub, Resume (open in new tab, `rel="noopener noreferrer"`)
- [ ] Portrait with rounded frame, `next/image` (the photo keeps its original color)
- [ ] Responsive two-column layout that stacks on mobile

**Commit:** `feat: hero section with marquee`

### Phase 4: About Me Section
**Goal:** The card grid.
- [ ] Content stored in `data/about.ts` (easy to edit)
- [ ] Experience card (role, company, dates, location, buttons)
- [ ] Education card (college, degree, dates, buttons)
- [ ] Publication card (title, venue badges, buttons)
- [ ] Pass-time card (book cover images, which keep their original colors)
- [ ] Quote card
- [ ] Placeholder `?` cards: decide what each becomes (e.g. Certifications, Achievements, Languages, Current Focus) or remove them
- [ ] Responsive masonry-style grid

**Commit:** `feat: about me card grid`

### Phase 5: Skills Section
**Goal:** Categorized, animated skills.
- [ ] Skills data in `data/skills.ts` grouped by category (Frontend, Backend, Databases, Cloud/DevOps, Tools)
- [ ] Icon grid with labels; icons rendered in monochrome (black/gray), hover shifts gray shade
- [ ] Hover animations (scale, color) and optional scroll-in fade
- [ ] Accessible labels for icons

**Commit:** `feat: skills section`

### Phase 6: Projects Carousel
**Goal:** Browsable project showcase.
- [ ] Project data in `data/projects.ts` (title, description, tech tags, image, live link, repo link)
- [ ] Embla carousel with left/right arrow buttons
- [ ] Touch-swipe and keyboard support
- [ ] Optional autoplay (pauses on hover/focus)
- [ ] Project card design with image (original colors), gray tag chips, and links

**Commit:** `feat: projects carousel`

### Phase 7: Contact Section UI
**Goal:** Contact layout and client-side form behavior.
- [ ] Split layout: "Get in Touch" text, email link, social icons (left); form (right)
- [ ] Fields: First Name, Last Name, Email*, Message
- [ ] Client-side validation (valid email, non-empty message) with inline errors
- [ ] Loading/disabled state on Send
- [ ] Toast notifications set up (success/error), monochrome styling

**Commit:** `feat: contact section UI and validation`

### Phase 8: Email Backend (API Route)
**Goal:** Form submissions land in Gmail.
- [ ] `app/api/contact/route.ts` with server-side validation
- [ ] Nodemailer with Gmail SMTP using an App Password (2FA required)
- [ ] Secrets in `.env.local` (`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_TO`); never committed
- [ ] Spam protection: honeypot field + basic rate limiting
- [ ] Wire the form to the API; show success/error toasts
- [ ] Test with a real submission

**Commit:** `feat: contact API route with Nodemailer`

### Phase 9: Polish, Accessibility and SEO
- [ ] Responsive QA (mobile, tablet, desktop)
- [ ] Accessibility pass: contrast, focus states, alt text, aria labels, keyboard navigation
- [ ] Metadata, Open Graph image, favicon, `sitemap`/`robots`
- [ ] Performance: image optimization, font loading, Lighthouse check (target 90+)
- [ ] Section entrance animations (subtle)

**Commit:** `chore: polish, a11y and SEO`

### Phase 10: Deployment
- [ ] Connect GitHub repo to Vercel
- [ ] Add environment variables in Vercel dashboard
- [ ] Verify production contact form
- [ ] (Optional) custom domain
- [ ] Add live URL and screenshots to this README

**Commit:** `docs: add live URL and screenshots`

---

## Content Checklist (needed from you)

- Name, headline, and bio text (the wireframe shows a template name, so confirm yours)
- Headshot photo
- Marquee text
- Links: LinkedIn, GitHub, resume PDF, offer letter, certificates, publication paper, college webpage
- Book covers / hobby images, and the quote
- What the `?` cards should be
- Skills list
- Project list (title, description, image, links)
- Contact email and social links
- Gmail account to receive messages (App Password will be set up in Phase 8)

## Environment Variables

```
GMAIL_USER=
GMAIL_APP_PASSWORD=
CONTACT_TO=
```

## Getting Started (after Phase 0)

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Status

| Phase | Status |
|---|---|
| 0. Setup | Not started |
| 1. Design system | Not started |
| 2. Navbar | Not started |
| 3. Hero | Not started |
| 4. About Me | Not started |
| 5. Skills | Not started |
| 6. Projects | Not started |
| 7. Contact UI | Not started |
| 8. Email backend | Not started |
| 9. Polish | Not started |
| 10. Deployment | Not started |