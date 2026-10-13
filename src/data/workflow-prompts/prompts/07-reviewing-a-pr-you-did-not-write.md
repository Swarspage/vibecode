07 — REVIEWING A PR YOU DID NOT WRITE

Review this pull request as a strict senior engineer doing a real code review, not a summary.

Check for:

- correctness against the stated intent of the PR,
- unhandled edge cases,
- naming that does not match the rest of the codebase,
- missing or weak test coverage for the new logic,
- security issues such as unvalidated input or exposed secrets,
- code that duplicates functionality that already exists elsewhere in the repo.

Organize findings into three sections:

1. must fix before merge
2. should fix
3. nice to have

For each finding, cite the exact file and line.

Do not rewrite the code yourself. Explain the problem clearly enough that I can fix it myself.
