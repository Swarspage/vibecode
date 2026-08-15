15 — MAPPING TEST COVERAGE & RISK

Analyze the test suite in this repository and map it to the parts of the codebase that matter most.

First:

1) Identify the testing frameworks and commands used. Pull them from package manifests, CI config, or test runner config.
2) List the test files and describe what each covers.
3) Identify which directories or modules have the most test coverage and which have none.
4) Find the top 10 most critical files or functions in the codebase, based on how central they are, and note whether each is covered by tests.

Then assess:

- which types of tests exist: unit, integration, end-to-end, contract, visual, etc.,
- whether critical paths like auth, billing, data mutations, and external integrations are tested,
- whether tests assert behavior or just implementation details,
- whether tests are deterministic or likely to be flaky based on time, network, or order dependence,
- how long the test suite takes to run and whether that is a problem.

Finally, recommend a prioritized test-improvement plan:

1) the three most important missing tests to write first,
2) the three most fragile existing tests to fix or delete,
3) any test infrastructure improvements that would give the highest return.

Do not write the tests; just identify and justify.
