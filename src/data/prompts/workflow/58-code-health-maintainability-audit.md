58 — CODE HEALTH & MAINTAINABILITY DEEP AUDIT

Audit the long-term maintainability of this codebase. This is broader than
a PR review and should focus on systemic health.

Audit:

1) Complexity
   - long functions
   - deeply nested logic
   - complex conditionals
   - large classes or modules

2) Duplication
   - repeated code blocks
   - copy-pasted logic
   - near-duplicate utilities
   - repeated strings and constants

3) Dead Code
   - unused exports
   - unreachable branches
   - commented-out code
   - stale assets or configs

4) Dependencies
   - unused packages
   - overlapping packages
   - outdated packages
   - risky or unmaintained packages

5) Naming
   - vague variable and function names
   - inconsistent casing
   - misleading names

6) Tests
   - missing tests for core logic
   - overly coupled tests
   - slow tests
   - flaky tests

7) Types and Contracts
   - usage of any/dynamic types
   - missing validation
   - unclear function signatures

8) Architecture Boundaries
   - mixed concerns
   - circular dependencies
   - leaking abstractions
   - direct DB/network access from UI

9) Error Handling
   - swallowed errors
   - inconsistent error patterns
   - missing error context

10) Documentation
    - misleading comments
    - missing explanation for tricky code
    - stale README or docs

For each issue, provide:

- location,
- why it matters,
- difficulty to fix,
- suggested improvement.

End with:

- a maintainability score,
- the top fifteen problems,
- a phased improvement plan,
- which issues are safe to automate vs require manual refactoring.

Do not change code. Provide the audit as a report only.
