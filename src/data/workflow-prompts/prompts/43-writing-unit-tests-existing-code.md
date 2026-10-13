43 — WRITING UNIT TESTS FOR EXISTING CODE

I need to add tests to this existing module or file: [describe the file or function].

Before writing tests, understand:

1) the function's inputs, outputs, and side effects,
2) its dependencies and whether they can be mocked,
3) existing test patterns and frameworks,
4) what behavior is guaranteed by callers,
5) edge cases the code already handles,
6) which parts are pure logic and which require integration.

Then provide:

- a numbered list of test cases,
- for each test, what it should assert,
- the minimal mock/stub setup needed,
- any imports or test utilities to reuse,
- expected test file location and naming.

Do not write the tests yet. Wait for my approval on the test plan.