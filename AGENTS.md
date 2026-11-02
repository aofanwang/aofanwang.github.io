# Portfolio Design Principles

These rules apply to all current and future portfolio pages, components, case
studies, and redesigns in this repository. Read `docs/design-system.md`,
`app/typography.css`, and the relevant existing components before UI changes.

1. Use the global typography system on every portfolio page. Add
   `portfolio-content` to the page's main element; retain its existing ID for
   navigation and accessibility. The root layout imports the shared stylesheet.
2. New components must reuse existing typography tokens and semantic styles.
   Do not introduce arbitrary font sizes, weights, or additional font families.
3. Keep H1 page titles and H2 section headings editorial serif, regular weight.
   Use sans-serif semibold H3 subheadings. Do not skip heading levels for size.
4. Keep body paragraphs regular weight. Use bold sparingly for meaningful labels,
   not decorative emphasis. Use the existing lead, metadata, and action roles.
5. Preserve Georgia/Times New Roman headings and Arial/Helvetica body text,
   warm off-white paper, charcoal text, restrained red accents, and zero tracking.
6. Reuse shared line-height, paragraph-width, heading-spacing, paragraph-spacing,
   and section-spacing tokens. Keep prose near 70ch where the layout permits.
   Do not use typography to fill empty space or create unrelated layouts.
7. New case studies follow the same system. Truck Mission case-study headings
   have no decorative numeric prefixes. Preserve meaningful Level 1/2/3 labels,
   screenshot annotation numbers, and unrelated pages' meaningful numbering.
8. Keep responsive type in the single shared breakpoint scale. Do not add
   component-specific viewport-based font sizes or competing mobile type scales.
9. Any necessary exception must be intentional, documented in
   `docs/design-system.md`, and reusable where possible. Update CSS and docs
   together so the documented contract remains accurate.
10. Keep game surfaces and third-party UI outside `portfolio-content`. Do not
    modify the standalone Truck Mission game or generated assets as a side
    effect of portfolio styling. Avoid new unscoped heading, paragraph, or button
    selectors; existing legacy base/game styles are not the portfolio contract.

## Validation and Scope

- Confirm the active localhost server's checkout before editing; multiple older
  portfolio copies may exist. Preserve unrelated changes and private files.
- Review Home, About, Contact, all project routes, and the Truck Mission case
  study at desktop, tablet, and mobile sizes. Check overflow, heading hierarchy,
  regular body weight, navigation, buttons, captions, and disclosure states.
- Run `git diff --check` and the existing `vinext build` command. If local Node
  is not on PATH, use the available bundled runtime; do not replace dependencies
  simply to run validation. Report verification limits rather than inventing results.
- Keep text, evidence claims, navigation, and interactions unchanged unless the
  current request explicitly authorizes them. Do not publish or push unless asked.
