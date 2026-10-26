# Jobs To Be Done — raw notes

**Status: UNDECIDED.** Captured 2026-08-16 from a conversation with another AI agent,
based on Chad's prompting. Nothing here is approved copy or an approved positioning
statement. Held for consideration and refinement. Verify claims before anything ships —
especially the specific integration names, which imply capabilities we should confirm
we actually have.

---

## Proposed business purpose (draft)

> We eliminate the technical friction that kills marketing performance, ensuring local
> home-service brands completely own their digital infrastructure and agencies can
> deploy high-converting campaigns without technical roadblocks.

Framing premise: when a client buys a website they aren't buying code, they're hiring a
vehicle to make progress in their professional life. Analyzed below per segment across
four pillars — functional job, emotional/social job, struggles (push), anxieties (pull).

---

## Segment: Local service providers (home services)

Critique of current site copy: leans heavily on ownership and tech specs rather than the
progress the buyer is trying to make.

- **Functional job** — Secure a predictable stream of local, bookable service jobs
  without losing money to broken tech. The site should be a net that catches every
  marketing dollar spent.
- **Emotional / social job** — Feel in control of their own livelihood; look like a
  dominant, reliable authority in their local market. They hate feeling dumb or held
  hostage by "the tech guy."
- **Struggles / triggers (push)** — Paying an agency $5k+/month while the agency blames
  the slow website for low conversions. Or: the previous web guy went missing, taking
  the domain or booking integration with him.
- **Anxieties (pull / resistance)** — "If I move to Websites Beyond, will my
  ServiceTitan integration break and stop phone calls from coming in?" "Is this just
  another recurring fee that locks me into a new sandbox?"

## Segment: Digital agencies

Critique of current copy: "You focus on marketing strategy, we'll handle the web
architecture" is close, but soft on the actual progress being bought.

- **Functional job** — Maximize client campaign ROI and retain retainer accounts without
  burning payroll on technical troubleshooting.
- **Emotional / social job** — Look like geniuses to their clients; remove the internal
  stress of tech blockages. Account managers should be on strategy, not CSS bugs and
  broken forms.
- **Struggles / triggers (push)** — Agency launches a strong PPC or SEO campaign, but
  the client's cheap WordPress site crashes or loads in 6 seconds. Client blames the
  agency for bad leads. Strategists waste hours doing amateur web development.
- **Anxieties (pull / resistance)** — "Will outsourcing the web framework slow our
  deployment timeline?" "Will they talk directly to my client and steal the account, or
  make us look incompetent?"

---

## Suggested copy moves (unvetted)

1. **Replace abstract headers.** Instead of "Designed to Evolve" / "Engineered to
   Endure," speak to the job — e.g. "Web Architecture Built for Marketers, Not Drones."
   Point: strategists can spin up landing pages without touching core code.
2. **De-risk CRM/FMS integration.** Home service businesses live and die by their CRM
   (ServiceTitan, Housecall Pro). Address the anxiety openly rather than listing logos —
   e.g. "Zero Dropped Leads. We natively map your ServiceTitan booking funnels so your
   dispatch board stays full from day one."
   - ⚠️ Only usable if we genuinely do this. Naming a vendor is a capability claim.
3. **Sharpen the agency hook toward retention**, not friction — e.g. "Stop losing clients
   over bad web performance. We back your strategy with unshakeable web engineering."

---

---

## Brand vocabulary

**"Gravity" is unused on the site and should be worked in.** The brand already leans
space/mission/launch (Mission Control, "buckle in," all systems go) — gravity is the
one force word in that vocabulary we haven't touched. Candidate uses: the pull that
keeps a system together, the thing that holds a marketing stack in orbit, or the
center of mass a business is built around. Not yet placed — find the right home for it
rather than forcing it.

Related, already in use: mission, launch, ground crew, trajectory, orbit, buckle in.

## Design direction

- **Mission statement as gravity center.** The line "Our mission is to replace technical
  friction with operational certainty — fueling our partners to reach their potential
  and beyond" should be styled larger and bolder than surrounding copy, as a standalone
  pull-quote. Implemented at wireframe level in `sections/mission/01-intro.md`; the
  designer owns the final treatment.

## Pillar renaming — under consideration

Suggested by the other AI. **Not decided.**

| Current | Proposed |
| --- | --- |
| Care Deeply | Radical Ownership |
| Evolve Continuously | Relentless Refinement |
| Think Critically | (no proposal) |
| Execute Systematically | (no proposal) |

See the discussion in-thread: the concern is that "Radical Ownership" collides with the
customer-facing meaning of ownership (owning your own digital infrastructure), and that
renaming two of four breaks the shared grammar of the set (verb + adverb).

## Open questions this raises

- Does the "home services" narrowing (vs. local service providers generally) match the
  business we want? The JTBD notes assume home services throughout.
- Which CRM/FMS integrations do we actually support today, and at what depth?
- The agency account-poaching anxiety is real and unaddressed anywhere on the site.
  Worth an explicit non-compete/white-label stance once white-labeling is decided.
- Both segments' struggles center on *lost leads*, which supports treating lead-pipeline
  integrity as a product category, not just a feature.
