46 — CREATING AN API CLIENT MODULE

I need to create a client for an internal or external API: [describe the API or paste its docs].

First review the existing client patterns:

1) existing HTTP clients and wrappers,
2) how base URLs and endpoints are organized,
3) how auth headers or tokens are attached,
4) how response data is deserialized and validated,
5) how timeouts, retries, and cancellation are handled,
6) how errors are mapped to domain-specific errors.

Then design the module:

- file structure and naming,
- exported methods and types,
- request/response shapes,
- auth handling,
- error handling,
- caching or retry strategy,
- tests using mocks or recorded fixtures.

Provide a numbered implementation plan and wait for approval.