16 — TRACING A PERFORMANCE BOTTLENECK

I have observed this performance problem: [describe the symptom, e.g., "the /api/dashboard endpoint takes 4 seconds to respond" or "the search page freezes while typing"].

Before changing any code, trace the path that the slow operation takes.

Identify:

1) the entry point and the full call chain down to the slow code,
2) every database query, external API call, file read, or CPU-intensive loop along that path,
3) any N+1 query patterns, missing indexes, unbounded queries, or repeated work,
4) any synchronous blocking that could be async or cached,
5) whether the slowness is in the frontend, backend, database, or network.

Then provide:

- the most likely bottleneck, with file and function references,
- your confidence level,
- which metrics or logs would confirm it,
- a specific measurement or profiling command we should run first,
- a list of possible fixes ordered by risk and expected impact.

Do not implement the fix until the bottleneck is confirmed.
