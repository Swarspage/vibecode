24 — WRITING A ROLLBACK & RELEASE PLAN

We are about to release this change: [describe the change and what it affects].

Create a release and rollback plan for a zero-downtime deployment.

Include:

1) a pre-release checklist: tests, migrations, feature flags, data backfills,
2) the order in which services or components must be deployed,
3) whether the change is backward compatible with the previous version,
4) a feature flag plan, if applicable, for gradual rollout,
5) the exact command or button press to roll back,
6) how long rollback would take and what is lost during that time,
7) any data migrations that cannot be rolled back and how to handle them,
8) monitoring and alerts to watch during rollout,
9) who is responsible and what the escalation path is.

Be specific. If you do not know the deployment process from the codebase, say so and tell me exactly which files to check to find it.
