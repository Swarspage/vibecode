52 — AUDITING ERROR MESSAGES & API RESPONSES

Audit every user-facing and API-facing error message in this codebase.

For each error path, check:

1) whether the message explains what happened in plain language,
2) whether it suggests what the user should do next,
3) whether it exposes internal details, stack traces, or secrets,
4) whether it follows a consistent shape across endpoints,
5) whether status codes are correct,
6) whether validation errors list all invalid fields,
7) whether errors are localized or only English,
8) whether errors are logged with enough context.

End with:

- a list of problematic error messages,
- recommended wording,
- a consistent error-response schema,
- any security concerns found.