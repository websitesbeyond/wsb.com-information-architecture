// Single source of truth for the primary navigation.
// A link is either a plain top-level link or, if it has `groups`, a dropdown.
// A link with `groups` has no `href` — its label opens the menu rather than
// going anywhere.
export interface NavLink {
  label: string;
  href?: string;
  // One-line explanation shown under the label in the dropdown. Without these,
  // a visitor has to already know what a name means.
  description?: string;
  groups?: NavGroup[];
}

// One labeled group inside a multi-group menu. Deliberately flat: a group is a
// label plus a short list of links, nothing nested, no icons. Every item is a
// real page, so the menu never promises more than the site delivers.
export interface NavGroup {
  label: string;
  items: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Mission', href: '/mission' },
  {
    // Two groups, two items each, stacked one above the other. One group
    // answers "who is this for", the other "what do you sell" — and the whole
    // offering is just two things: the build and the ongoing service.
    //
    // PARKED 2026-10-25 — every item here is a dead link for now. The pages all
    // still exist and build; they just aren't ready to be linked. Real routes
    // are kept beside each one, so restoring is a copy-paste.
    label: 'Solutions',
    groups: [
      {
        label: 'By Industry',
        items: [
          {
            label: 'Home Services & Trades',
            // /solutions/local-service-providers — the URL still says
            // local-service-providers; the label was renamed without moving
            // the route.
            href: '#',
            description: 'Heating & air, plumbing, electrical, roofing, and more',
          },
          {
            label: 'Digital Marketing Agencies',
            // /solutions/digital-agencies
            href: '#',
            description: 'Web engineering behind your client campaigns',
          },
        ],
      },
      {
        label: 'Services',
        items: [
          {
            label: 'Software Products & Systems',
            // /solutions/products
            href: '#',
            description: 'Websites, applications, and the systems that run them',
          },
          {
            label: 'Website Mission Control',
            // /solutions/mission-control
            href: '#',
            // "Ongoing" is the load-bearing word: it's what separates this from
            // the project-based build sitting directly above it.
            description: 'Ongoing fully managed websites',
          },
        ],
      },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Resources', href: '/resources' },
  { label: 'Connect', href: '/connect' },
];
