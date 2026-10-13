17 — DEBUGGING A FLAKY TEST

This test is flaky. It sometimes passes and sometimes fails, or it fails only in CI. Paste the test code and the exact error/output when it fails.

Before fixing it, determine why it is flaky.

Review the test and the code it exercises for:

1) shared mutable state between tests,
2) dependence on execution order or parallelization,
3) timing assumptions: setTimeout, fixed delays, real timers, animation frames,
4) network or database dependencies,
5) nondeterministic ordering of async operations,
6) clock/timezone or locale assumptions,
7) hidden dependencies on filesystem, environment variables, or external services.

Then state:

- which category of flakiness this most likely belongs to,
- the exact line or condition responsible,
- whether the bug is in the test or reveals a real issue in the implementation.

Propose the smallest fix first. If that is not possible, explain the next safest option, and add a comment in the test explaining why the non-obvious pattern is necessary.
