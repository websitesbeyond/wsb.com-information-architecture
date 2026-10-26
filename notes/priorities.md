# Priority list

Working list for the wireframe. Ordered so earlier items unblock later ones.
Updated 2026-10-17.

---

## The MVP shape (settled 2026-10-17)

Chad's call: narrow hard, ship ten pages, leverage what's already written.

The whole offering is **two things** — the build and the ongoing service — sold
to **two audiences**. The Solutions menu is exactly that, two columns of two:

```
By Industry                       Services
  Local Service Providers           Software Products & Systems
  Digital Marketing Agencies        Website Mission Control
```

Pages (9 routes, 11 built pages counting the two collection detail stubs):
Home · Mission · Local Service Providers · Digital Marketing Agencies ·
Software Products & Systems · Website Mission Control · Projects · Resources ·
Connect

What this closed:
- `/solutions/services` is gone. Its two real sections (Website Development,
  Web App Development) moved to the top of the Products page under a `Build`
  kicker; the page is now "Software Products & Systems" — the build work plus
  the product systems that run inside it.
- `/web-architecture` is gone. Its one piece of real copy is parked at
  `notes/parked/systematic-advantage.md`.
- `scratch-gauges.astro` deleted (it would have published to GitHub Pages).
- Nav lost `sections`, `includes`, and `footerLinks`. Columns are flat lists of
  real pages now, so the menu can't promise more than the site delivers.
- `SiteFooter` flattens nav groups, so Solutions no longer silently drops out.

---

## 1. Products page needs real copy

The structure is right; nearly all 13 sections are still PLACEHOLDER. This is
now the biggest hole in the site, because the page carries half the offering.

Order of attack: the two Build sections first (they're what a visitor is
actually shopping for), then Service Platform, then the rest.

## 2. Homepage sections 03/04/05 review

- `03-empower-marketers` — done, Chad's own copy ("Maximizing Web Performance").
- `04-structural-foundation` — heading + paragraph + status board. "secure,
  fast, and stable" still overlaps the three pillars in 03.
- `05-web-solutions` — cards renamed to the two offerings, `columns: 2`. Bodies
  are the originals, unedited. Open: the section has no heading, and the cards
  aren't clickable (`Card.astro` ignores the schema's `href`). Worth deciding
  whether the homepage should route to the two offering pages from here, given
  the hero already routes to the two industries.

## 3. Mission Control pricing + tiers

Two packages: **Cruise** (stability) and **Turbo** (growth). Not yet designed.
- Does email support sit in both tiers or only Turbo?
- Does user-level support push pricing to per-seat rather than per-site?
- Current page shows a single "$299/month" anchor that predates the tiers and
  predates email being bundled in.
- Caution: "stability vs. growth" shouldn't imply Cruise is the tier where things
  break. Better framed as baseline vs. baseline-plus-active-improvement.

## 4. Product naming pass

Rule that emerged: rename when the current word is empty (Management → Scheduler),
keep when the word is the searchable category (Careers Board).
- Done: Promotion Scheduler, Review Engine, Careers Board, Service Platform.
- Unresolved: "Team Manager" has the same empty "Manager" suffix.
- Service Taxonomy may be undersold — it's the moat (specificity-based
  resolution, auto-interlinking, schema generation) and may deserve to lead the
  product half of the page.

## 5. Showcase widget — moved out

The homepage's "See Our Work in Action" section is heading-only on purpose: the
widget that fills it is being built separately at

    ~/sandbox/wsb-project-demo-widget-poc

Direction (decided 2026-10-25): clone each finished client site into a curated
static mirror we host ourselves, rather than embedding live sites or showing flat
screenshots. A cross-origin iframe can't be styled or scripted, so chat widgets,
consent bars, and frozen scroll animations are unfixable; a same-origin mirror is
fully controllable. Spec and findings live in that repo's `notes/` and README.

Removed from here so nothing half-built ships: `BrowserFrame.astro`,
`SitePreview.astro`, `data/showcase.ts`, `scratch-browser.astro`, the Playwright
capture script, the `.scrollbar-minimal` CSS, and the placeholder screenshots.
All preserved in the POC. Comes back when it's real.

## 6. Loose ends

- Digital Marketing Agencies page is two placeholder sections. LSP has real copy.
- Homepage hero buttons list Digital Agencies first, LSP second. Deliberate?
- "Gravity" still hasn't appeared anywhere on the site. Chad wants it used.
- Mission page pillar renames under consideration: "Evolve Continuously" →
  "Relentless Refinement", "Care Deeply" → "Radical Ownership".

---

## Blocked / needs a decision from Chad

- **Email scope** — settled as setup + deliverability, not reseller, no end-user
  helpdesk. Chad wanted more time on it before it's final. Affects Mission
  Control pricing (item 3).
- **White-labeling for agencies** — still open. Affects how the Digital
  Marketing Agencies page is written.
