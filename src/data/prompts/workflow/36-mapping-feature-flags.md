36 — MAPPING FEATURE FLAGS & CONFIGURATION

Map every feature flag, environment variable, and runtime configuration in this codebase.

Identify:

1) all feature flags and what they control,
2) where flags are evaluated,
3) all environment variables and their defaults,
4) which config values are safe to expose in the client,
5) configuration values that differ across environments,
6) any unused or stale feature flags,
7) any hardcoded values that should be configurable.

For each item, provide file path and line/function.

Then assess:

- naming consistency,
- missing documentation,
- flags that are always true/false and can be removed,
- dangerous defaults,
- config that affects security or billing.

End with a clean configuration inventory and suggested cleanup.