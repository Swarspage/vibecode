27 — ACCESSIBILITY AUDIT

Act as a senior frontend accessibility specialist reviewing this codebase against WCAG 2.2 AA standards. Do not change any code yet.

Audit these areas:

1) semantic structure: headings, landmarks, lists, buttons vs links, form labels,
2) keyboard navigation: tab order, skip links, focus traps, keyboard access to interactive elements,
3) focus visibility: focus indicators, focus management after modals/route changes,
4) ARIA: correct roles, labels, descriptions, aria-expanded, aria-live, and no misuse of ARIA to patch poor semantics,
5) color contrast: text, icons, focus indicators, disabled states,
6) forms: label association, error messaging, required fields, validation announcements,
7) media: alt text, captions, transcripts,
8) motion: prefers-reduced-motion support, flashing content, animation control,
9) touch targets: size and spacing,
10) dynamic content: screen reader announcements for toasts, loading, errors, route changes.

For each issue, provide:

- severity: blocker / major / minor,
- file and approximate line or component,
- the WCAG success criterion or accessibility principle violated,
- a concrete fix recommendation.

End with:

- the five highest-impact fixes,
- any systemic patterns causing repeated issues,
- a short list of automated accessibility checks that would catch these early in CI.

Do not rewrite the code. Explain each problem clearly enough that I can fix it myself.
