06 — SOLVING A BUG, TRACING LOGICAL FLOW

I am debugging this issue: [describe the bug and the exact symptom, including the error message if there is one].

Before changing any code, trace the logical flow of the feature involved, from the entry point to where the bug manifests.

Identify every place the relevant variable, state, or data is read, set, or transformed along that path.

Based on that trace, give me:

- your top hypothesis for the root cause,
- your confidence level,
- the specific line or function you believe is responsible.

Tell me exactly where you would add a temporary log statement to confirm the hypothesis before we touch any logic.

Do not propose a fix until the cause is confirmed.
