# Portfolio Design System

## Source and Scope

`app/typography.css` is the type contract, imported once by `app/layout.tsx` after
`app/globals.css`. Portfolio main elements opt in with `portfolio-content`.
Shared `.header`, identity, education tooltip, and footer roles are also styled.
The game and unused third-party component library do not opt in.

`app/globals.css` owns the existing palette and layouts; `app/about/profile.css`
and the Truck Mission CSS module own local layouts, not independent type scales.
Older unscoped base and legacy workbench styles remain for compatibility; do not
copy their hardcoded typography into portfolio components.

## Typography Tokens

| Role / token | Desktop | Tablet <=800px | Mobile <=540px | Family / weight |
| --- | --- | --- | --- | --- |
| H1 / `--type-page` | 64px | 52px | 40px | Editorial / 400 |
| Home hero / `--type-home` | 64px | 52px | 40px | Editorial / 400 |
| Home first introduction / `--type-home-intro` | 20px | 20px | 19px | Body / 400 |
| H2 / `--type-section` | 38px | 34px | 30px | Editorial / 400 |
| H3, H4 / `--type-subsection` | 23px | 22px | 21px | Body / 600 |
| Lead / `--type-lead` | 22px | 21px | 20px | Body / 400 |
| Body / `--type-body` | 18px | 18px | 17px | Body / 400 |
| Navigation / `--type-nav` | 16px | 16px | 15px | Body / 400 |
| Actions / `--type-action` | 17px | 17px | 16px | Body / links 400, buttons 500 |
| Caption / `--type-meta` | 14px | 14px | 13px | Body / 400 or labels 500 |

- `--font-editorial`: Georgia, 'Times New Roman', serif.
- `--font-body`: Arial, Helvetica, sans-serif.
- `--weight-regular`: 400; `--weight-medium`: 500; `--weight-semibold`: 600.
- `--type-brand`: 64px desktop, 52px at <=1150px, 40px at <=540px,
  34px at <=380px. This separate chrome role allows the school marks to fit.
- `--tracking`: 0. No negative or decorative expanded letter spacing.

The shared stepped scale is intentional: no viewport-width font sizing and no
independent page-specific mobile scale. Layout breakpoints may differ from the
type breakpoints. Fonts keep their role while narrow containers wrap naturally.

## Rhythm and Color

| Token | Value / purpose |
| --- | --- |
| `--leading-title` | 1.1, H1 and brand |
| `--leading-heading` | 1.2, H2 |
| `--leading-subheading` | 1.25, H3/H4 |
| `--leading-body` | 1.65, prose |
| `--leading-compact` | 1.5, lead, actions, navigation, captions |
| `--measure-body` | 70ch maximum; narrower columns remain narrower |
| `--space-heading` | 24px desktop, 22px tablet, 20px mobile |
| `--space-subheading` | 14px |
| `--space-paragraph` | 20px between adjacent prose paragraphs |
| `--space-section` | 60px desktop, 44px at <=800px; standard case-study rhythm |
| `--text-body` | `--foreground`, #20252a |
| `--text-muted` | `--muted-foreground`, #60605a |
| `--text-accent` | `--primary`, #b33118 |
| `--text-inverse` | `--primary-foreground`, #fff |

Paper remains `--background` (#faf6ee) and subtle rules use `--border` (#d5cec2).
Existing photographic, grid, and section layouts are preserved. Layout-specific
spacing can remain where it has a compositional purpose; it is not another type
scale. Truck Mission's closing reflection deliberately uses compact 36px/24px
section padding. Screenshot annotation badges retain line-height 1 for centering.

## Usage

```tsx
<main id="project-main" className="portfolio-content wrap curriculum-page">
  <h1>Project title</h1>
  <p className="type-lead">A concise introduction.</p>
  <section aria-labelledby="design-title">
    <h2 id="design-title">Design decisions</h2>
    <h3>A specific decision</h3>
    <p>Regular-weight rationale, constrained to the shared reading width.</p>
    <p className="type-meta">An evidence note or caption.</p>
  </section>
</main>
```

Semantic H1/H2/H3 and paragraphs receive the system automatically. Use
`type-page`, `type-section`, `type-subsection`, `type-body`, `type-lead`,
`type-meta`, `type-label`, `type-action`, and `type-button` for explicit roles.
Keep heading semantics appropriate; do not pick a heading level for appearance.
Buttons use medium weight; ordinary text links stay regular. Body strong/b tags
inherit regular weight; a purposeful label such as Trade-off uses the semibold
token through its named component class.

## Intentional Compact Roles

- Homepage display title uses `--type-home`; normal page titles use `--type-page`.
- Homepage introduction uses a 1.55 line-height; its second paragraph uses the
  regular body role and muted color. Headline-to-prose, paragraph, and link gaps
  are 24px, 18px, and 22px. These rules are scoped to `#main .intro`.
- The homepage header caps its brand at 52px while retaining the existing
  40px/34px mobile scale. Above 1150px, a 349px by 70.4px minimum brand slot
  preserves the original education-mark and navigation positions. Depth layers
  inherit the brand font; other pages retain their original brand size.
- Above 1150px the homepage hero retains its existing 454px layout height so
  reducing prose does not resize the absolutely positioned portrait. Portrait
  image, fit, masks, and positioning rules remain unchanged.
- The brand has its own responsive size because it shares space with school marks.
- Project-index tile H2 titles use the sans-serif subsection role.
- Footer contact labels are metadata-sized, semibold sans-serif, not large H2s.
- Image captions remain metadata-sized even when containing paragraph elements.
- All four Selected Projects use the same ProjectCard: editorial serif H3 titles
  at the section-size token, regular weight, and action-sized medium-weight CTAs.
  The shared layout lives in `components/project-card.module.css`. Teacher Decision
  Lab is explicitly a concept in development; its cover uses an illustrative
  notebook-and-planning image, not a product screenshot or actual research notes.
  The second card row reserves matching metadata space for the optional status
  line on desktop; mobile cards keep their natural single-column spacing.
  Historical Teacher Research lives separately at
  `/projects/teacher-research`, linked by the preserved `#research` archive anchor.
- `/projects` reuses the homepage's `ProjectGrid` with H2 card titles beneath
  its H1. Projects navigation and project-return links use `/projects`; the old
  `/work/from-curiosity-to-curriculum` overview is a static-compatible redirect,
  not an index of nested routes. Sensory and Truck Mission keep their URLs.
- FeelZoo contribution-grid H3s use the existing lead-size token (22/21/20px)
  with the standard subsection family, weight, and line-height for a compact role.

The homepage's My Design Philosophy section uses the standard H2, sans-serif H3,
and regular body roles. Its three principles retain red metadata-size numbers;
the introduction precedes the compact desktop grid and mobile stack.

No numbered prefixes in Truck Mission case-study headings or the homepage's
section labels. Game levels, interface annotations, and the three design
philosophy principle numbers remain.

## Maintenance and QA

Read root `AGENTS.md` before changes. Reuse this system for future pages and
redesigns; document any new reusable exception here and in CSS at the same time.
Do not add main IDs to an allowlist: use `portfolio-content`. Do not apply it to
games, embedded third-party UI, or preview canvases.

Review all portfolio routes at desktop, tablet, and mobile widths; expand the
homepage's project destinations and test `#research`. Verify regular prose, heading sizes, lead and
metadata roles, link/button type, wrapping, and zero horizontal overflow. Confirm
the game has not opted into this scope and its source is unchanged. Run
`git diff --check` and `vinext build` before reporting completion.

## Motion and Concept Artifacts

Homepage Selected Projects and My Design Philosophy use React Bits AnimatedContent
for a one-time 12px scroll reveal. Hero and footer remain static. Content stays
available without JavaScript; keyboard focus and reduced-motion changes reveal it
immediately. No continuous motion or staggered card layout is introduced.

Teacher Decision Lab's five-stage flow uses native buttons with pressed states,
arrow/Home/End keyboard navigation, and previous/next controls. All nodes stay
visible above the detail panel. CSS transitions are disabled for reduced motion;
the proposed learning flow does not imply a completed or validated scenario.
