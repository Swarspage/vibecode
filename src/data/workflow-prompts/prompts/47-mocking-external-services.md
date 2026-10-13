47 — MOCKING EXTERNAL SERVICES FOR TESTS

I need to test code that depends on an external API or service: [describe the dependency].

Before writing tests, identify:

1) which parts of the code are deterministic and which depend on the service,
2) existing mocking libraries or fixtures,
3) whether tests currently hit real services,
4) what failure modes must be tested: timeouts, rate limits, malformed responses,
5) whether integration tests are separate from unit tests.

Then propose:

- the mocking strategy,
- sample responses or fixtures,
- how to simulate failure cases,
- which tests should remain integration tests,
- where tests should live.

Do not write the tests yet. Provide the test plan first.