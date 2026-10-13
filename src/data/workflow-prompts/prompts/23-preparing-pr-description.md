23 — PREPARING A PR DESCRIPTION & TEST PLAN

I am about to open a pull request for this change: [describe the change or paste the diff/summary].

Act as a senior engineer helping me communicate the change clearly.

Generate:

1) a PR title that is concise and follows the repo's commit conventions,
2) a summary of what the change does and why,
3) a list of the main changes, grouped logically,
4) any behavioral changes or breaking changes,
5) the exact commands to run the relevant tests,
6) a test plan with manual and automated steps,
7) any screenshots, logs, or configuration that reviewers should see,
8) a risk assessment and rollback steps.

Before generating the PR, review the diff for:

- missing tests,
- accidental unrelated changes,
- leftover debug code or console.log,
- unhandled edge cases.

Output the final PR description in a format ready to paste into GitHub or GitLab.
