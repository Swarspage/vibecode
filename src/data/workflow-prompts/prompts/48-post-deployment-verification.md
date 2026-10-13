48 — WRITING A POST-DEPLOYMENT VERIFICATION CHECKLIST

We have just deployed this change: [describe the release or PR].

Create a post-deployment verification checklist.

Include:

1) the key user flows that must work,
2) API endpoints that must respond correctly,
3) database queries or migrations that need validation,
4) third-party integrations that must be checked,
5) performance or error-rate metrics to watch,
6) any feature flags that were enabled,
7) rollback signals that would trigger an immediate revert,
8) logs or dashboards to monitor,
9) a step-by-step smoke test.

Be specific. Include exact URLs, expected statuses, and commands where possible.