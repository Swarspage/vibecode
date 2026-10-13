51 — AUDITING LOGGING & OBSERVABILITY

Audit the observability of this codebase.

Review:

1) what is logged and where,
2) log levels and whether they are used consistently,
3) whether sensitive data is ever logged,
4) whether requests include correlation or trace IDs,
5) whether critical paths have metrics or SLIs,
6) whether errors include enough context to debug,
7) whether logs are structured or plain text,
8) whether dashboards and alerts exist for key business metrics,
9) whether logging is noisy or missing in important areas.

For each issue, provide file/function references and a concrete fix.

End with:

- the five highest-impact observability improvements,
- a logging standards proposal,
- suggested alerts and dashboards.