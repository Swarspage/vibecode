28 — DIAGNOSING A LAYOUT OR RESPONSIVE BUG

I am seeing this visual bug: [describe the exact issue, e.g., "the sidebar overflows below 640px" or "this card stretches wider than its grid column on tablet"].

Before changing any CSS or JSX, investigate the layout behavior.

Identify:

1) the viewport or container widths where the bug appears,
2) the CSS display/grid/flex/position properties involved,
3) whether the issue comes from the component's own styles or inherited/global styles,
4) any absolute positioning, fixed widths, min-width, max-width, or overflow that may conflict,
5) whether the component is using responsive utilities correctly or has conflicting breakpoints,
6) whether the bug is related to browser default behavior, box-sizing, or a missing viewport meta,
7) whether the same issue appears in multiple components, suggesting a shared layout primitive is the cause,
8) whether the layout is breaking due to content length, missing wrapping, or a fixed-height container.

Then provide:

- your top hypothesis for the root cause,
- the exact file and style rule responsible,
- a minimal browser test or devtools check to confirm it,
- the smallest CSS or component-structure fix,
- how to verify the fix across the relevant breakpoints.

Do not rewrite the layout until the offending rule or structure is confirmed.
