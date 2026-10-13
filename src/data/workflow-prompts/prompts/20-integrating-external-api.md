20 — INTEGRATING AN EXTERNAL API

I need to integrate this external service: [describe the API, including authentication method, base URL, and key endpoints if known].

First review the existing codebase for integration patterns:

1) are there existing external API clients I should follow,
2) how are secrets and API keys stored and accessed,
3) how are network errors, timeouts, and retries handled,
4) how are tests structured for external dependencies,
5) is there a caching or queueing layer for external calls.

Then design the integration:

- the module and file structure,
- the client interface and methods,
- authentication and secret management,
- error handling and retry strategy with backoff,
- timeout and cancellation behavior,
- data mapping and validation between the API and internal models,
- logging and monitoring.

Produce a numbered implementation plan with file paths and a one-line description for each change.

Also identify the failure modes: rate limiting, API downtime, malformed responses, slow requests, and how we will test each.

Do not write the implementation until I approve the plan.
