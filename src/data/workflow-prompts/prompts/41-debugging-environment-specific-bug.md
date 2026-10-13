41 — DEBUGGING AN ENVIRONMENT-SPECIFIC BUG

This bug occurs only in one environment: [local, staging, production, CI, Docker, etc.].

First list differences between the affected environment and others:

1) operating system, architecture, or container image,
2) language/runtime versions,
3) environment variables,
4) dependency versions and lockfile state,
5) filesystem permissions or paths,
6) network access and DNS,
7) database or third-party service versions,
8) build settings and feature flags.

Then trace the failing code and identify where environment differences could affect behavior.

End with:

- the most likely environment-specific cause,
- evidence to collect from logs or config,
- a minimal reproduction,
- the smallest cross-environment fix.