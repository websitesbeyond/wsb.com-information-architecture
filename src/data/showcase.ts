// The showcased sites.
//
// Source of truth is each mirror's own `site.json`, colocated with the mirror
// under `public/showcase/<slug>/`. This file just discovers them, validates the
// contract from notes/mirror-architecture.md, and puts them in display order.
//
// Why colocated rather than a central list: a mirror is a self-contained,
// portable directory. Dropping one in or deleting one is the whole operation —
// no registry to keep in sync. When the clone pipeline replaces these demo
// sites with real ones, nothing here changes.
//
// This runs in Node at build time, so plain `fs` is correct. `import.meta.glob`
// is not an option: Vite doesn't process `public/`.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { url } from '../lib/url';

export interface ShowcasePage {
  label: string; // shown in the page-selector dropdown — keep it short
  path: string;  // page path within the mirror, e.g. "/" or "/contact/"
}

export interface ShowcaseSite {
  name: string;
  slug: string;
  host: string;
  source: 'demo' | 'mirror'; // demo sites are placeholders; real clones are "mirror"
  captureWidth: number;      // the desktop viewport the mirror is designed for
  capturedAt: string;
  pages: ShowcasePage[];     // ordered; the first is shown initially
}

const ROOT = fileURLToPath(new URL('../../public/showcase/', import.meta.url));

// Featured-first display order. Anything not listed falls in behind,
// alphabetically — so a newly added mirror shows up without touching this.
const ORDER = ['summitpeakhvac', 'ironleaflandscape', 'brightpathdental', 'northgatelegal'];

function parse(slug: string): ShowcaseSite {
  const file = join(ROOT, slug, 'site.json');
  const bad = (msg: string): never => {
    throw new Error(`showcase/${slug}/site.json: ${msg}`);
  };

  if (!existsSync(file)) bad('missing — every mirror needs a manifest');

  let raw: any;
  try {
    raw = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    bad(`invalid JSON — ${(err as Error).message}`);
  }

  // Validate rather than trust. These mirrors are generated, and a silently
  // wrong manifest renders a blank frame that reads as a widget bug.
  if (raw.slug !== slug) bad(`slug "${raw.slug}" doesn't match its directory name`);
  for (const key of ['name', 'host', 'capturedAt'] as const) {
    if (typeof raw[key] !== 'string' || !raw[key]) bad(`"${key}" must be a non-empty string`);
  }
  if (raw.source !== 'demo' && raw.source !== 'mirror') bad('"source" must be "demo" or "mirror"');
  if (!Number.isFinite(raw.captureWidth)) bad('"captureWidth" must be a number');
  if (!Array.isArray(raw.pages) || raw.pages.length === 0) bad('"pages" must be a non-empty array');

  for (const page of raw.pages) {
    if (typeof page?.label !== 'string' || !page.label) bad('every page needs a "label"');
    if (typeof page?.path !== 'string' || !page.path.startsWith('/') || !page.path.endsWith('/')) {
      bad(`page "${page?.label}" has path "${page?.path}" — must start and end with "/"`);
    }
    // The manifest promises a page exists. Check it, so a typo'd path is a
    // build error instead of a 404 inside a frame.
    if (!existsSync(join(ROOT, slug, page.path, 'index.html'))) {
      bad(`page "${page.label}" points at "${page.path}" but there's no index.html there`);
    }
  }

  return raw as ShowcaseSite;
}

function load(): ShowcaseSite[] {
  if (!existsSync(ROOT)) return []; // no mirrors built yet — the page shows an empty state

  const rank = (slug: string) => {
    const i = ORDER.indexOf(slug);
    return i === -1 ? ORDER.length : i;
  };

  return readdirSync(ROOT, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => parse(e.name))
    .sort((a, b) => rank(a.slug) - rank(b.slug) || a.slug.localeCompare(b.slug));
}

export const sites: ShowcaseSite[] = load();

/**
 * Where a mirror page is served from.
 *
 * `index.html` is explicit rather than relying on directory-index resolution:
 * Astro's dev server doesn't do it for nested `public/` directories (verified —
 * `/showcase/<slug>/` 404s while `/showcase/<slug>/index.html` is a 200), and
 * static hosts vary. The URL only ever appears as an iframe `src`; the address
 * pill is rendered from `host` and the page label, so nothing user-facing shows
 * it.
 *
 * Wrapped in `url()` because this site deploys under a base path. The mirrors'
 * own internal references (stylesheet, script) are relative for the same
 * reason — a mirror stays portable and knows nothing about where it's mounted.
 */
export const pageUrl = (slug: string, path: string) =>
  url(`/showcase/${slug}${path}index.html`);
