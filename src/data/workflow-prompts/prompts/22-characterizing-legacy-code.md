22 — CHARACTERIZING LEGACY CODE WITH TESTS

I have this legacy code that is not tested and I need to change it: [describe the file or function and what it is supposed to do].

Act as a senior engineer who is not going to rewrite the code, but who needs to make changes safely.

First:

1) read the code and its callers, and explain in plain language what it actually does,
2) identify its inputs and outputs, and all side effects,
3) list every external dependency that would make it hard to test,
4) identify the existing behavior that must be preserved, even if it looks wrong.

Then design characterization tests:

- tests that pin down the current behavior without changing it,
- tests that cover the main paths and edge cases,
- tests that will fail if the behavior changes unexpectedly.

For each test, specify what it asserts and why.

Do not write the tests yet. Provide a numbered test plan and explain which existing behavior should be preserved intentionally and which might be bugs we should flag separately.
