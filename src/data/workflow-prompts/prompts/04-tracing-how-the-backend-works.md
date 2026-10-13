04 — TRACING HOW THE BACKEND WORKS

Trace the complete backend execution path for [describe the endpoint or action, for example POST /api/orders].

Start at the route definition and follow the code exactly as it executes:

- middleware in order,
- the controller or handler function,
- every service or helper function it calls,
- all database queries or external API calls,
- the final response returned to the client.

For each step, give the file path and function name.

Note every conditional branch, if/else, try/catch, or feature flag that changes the execution path, and explain the condition under which each branch is taken.

If async or background processing is involved, queues, workers, webhooks, trace that separately and note where the two paths reconnect, if they ever do.
