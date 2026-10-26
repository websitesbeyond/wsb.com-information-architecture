import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each page's sections live as individual markdown files under
// src/content/sections/<page>/NN-name.md — templates render from these,
// so copy is never hard-coded in .astro files.
//
// Frontmatter carries structured bits (heading, bullets, cards, buttons);
// the markdown body carries prose. All fields optional so a section can be
// prose-only, cards-only, etc.
const button = z.object({
  label: z.string(),
  href: z.string().default('#'),
  style: z.enum(['primary', 'secondary']).default('primary'),
});

const card = z.object({
  title: z.string().optional(),
  titleHtml: z.string().optional(), // raw HTML title, e.g. for <s>strikethrough</s>
  body: z.string().optional(),
  href: z.string().optional(),
});

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z.object({
    // Ordering + placement
    page: z.string(), // which page this section belongs to, e.g. "home", "mission"
    order: z.number().default(0),
    anchor: z.string().optional(), // id for deep links from the nav, e.g. "hosting"
    // Content
    heading: z.string().optional(),
    headingHtml: z.string().optional(), // raw-HTML heading, e.g. a two-line hero with <br>
    subheading: z.string().optional(), // secondary headline, e.g. under a hero H1
    hero: z.boolean().default(false), // render heading as the page H1 at hero scale
    left: z.boolean().default(false), // left-align this section (for long-form prose)
    kicker: z.string().optional(), // small label above the heading
    bullets: z.array(z.string()).optional(),
    // Numbered steps rendered as a connected vertical list (no divider lines
    // between them) — e.g. a cause-and-effect chain inside one section.
    steps: z
      .array(
        z.object({
          heading: z.string(),
          body: z.string().optional(),
        })
      )
      .optional(),
    stepsCountdown: z.boolean().default(false), // number the steps in reverse (3, 2, 1 — a countdown)
    // Grouped lists rendered as labeled columns (e.g. tools/integrations by category).
    groups: z
      .array(
        z.object({
          label: z.string(),
          items: z.array(z.string()),
        })
      )
      .optional(),
    // Compact icon + label tiles, for listing many short items (trades,
    // integrations) where a full card would be far too heavy. `icon` is a
    // Lucide name without the set prefix, e.g. "zap" -> lucide:zap.
    tiles: z
      .array(
        z.object({
          label: z.string(),
          icon: z.string(),
          body: z.string().optional(), // a few words under the label
          muted: z.boolean().default(false), // for a trailing "and more" tile
        })
      )
      .optional(),
    // Renders the WorkShowcase component — a browser frame showing curated
    // static mirrors of real client sites, with a site list beside it.
    showcase: z.boolean().default(false),
    // Renders the StatusBoard component — dials, trends, and system status.
    // The readouts are evidence the standards we build to are holding.
    statusBoard: z.boolean().default(false),
    cards: z.array(card).optional(),
    buttons: z.array(button).optional(),
    columns: z.number().default(3), // card grid columns
    masonry: z.boolean().default(false), // flow cards in CSS columns so uneven heights pack tightly
  }),
});

// Individual project pages. The /projects page lists these;
// each also gets its own detail page at /projects/<slug>.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(), // shown on the listing card
    order: z.number().default(0),
  }),
});

// Individual resource pages, same pattern at /resources/<slug>.
const resources = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resources' }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { sections, projects, resources };
