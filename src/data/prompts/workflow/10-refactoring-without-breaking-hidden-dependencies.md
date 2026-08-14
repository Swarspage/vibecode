10 — REFACTORING WITHOUT BREAKING HIDDEN DEPENDENCIES

I want to refactor [describe the file, function, or module].

Before any changes, find every place in the codebase that imports it, calls it, or depends on its output or side effects, directly or indirectly, including tests.

Present this as a dependency list with file paths.

For each dependent, note whether it is covered by an automated test.

Flag anything relying on this code's current behavior in a way that is not obvious from its name or signature, such as a specific return shape or a side effect like writing to a cache.

Then propose a refactor plan broken into small, independently safe steps, and tell me which existing tests to run after each step.
