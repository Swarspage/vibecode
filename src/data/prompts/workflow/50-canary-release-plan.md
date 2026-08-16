50 — PLANNING A CANARY RELEASE OR GRADUAL ROLLOUT

We want to release this change gradually: [describe the feature or change].

Before rollout, design a canary or progressive-delivery plan.

Identify:

1) which users or traffic percentage receive the new version first,
2) how the canary group is selected,
3) how success is measured,
4) which metrics would trigger a rollback,
5) how long each rollout phase lasts,
6) what happens if a failure occurs during partial rollout,
7) whether feature flags or deployment rings are already available,
8) how the current infrastructure supports gradual releases.

Then produce:

- a phased rollout schedule,
- monitoring and alerting requirements,
- rollback automation or runbook,
- stakeholder communication plan.

Do not execute the rollout. Provide the plan only.