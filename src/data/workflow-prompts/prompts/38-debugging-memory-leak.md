38 — DEBUGGING A MEMORY LEAK

I suspect a memory leak in this application. The symptom is [describe the issue, e.g., "memory grows over time until the process crashes"].

Before changing code, investigate where memory is retained.

Identify:

1) objects that are cached globally or held in module scope,
2) event listeners, intervals, or timers that are not removed,
3) closures that capture large objects or contexts,
4) growing collections, caches, or arrays without eviction,
5) external resources such as database connections, file handles, or sockets,
6) frontend detached DOM nodes or uncleaned subscriptions,
7) whether the leak is in the backend, frontend, or shared code.

For each candidate, provide file and function.

Then recommend:

- the most likely source,
- how to reproduce and measure it,
- which memory profile or heap snapshot to capture,
- a minimal fix,
- tests or metrics to prevent regression.