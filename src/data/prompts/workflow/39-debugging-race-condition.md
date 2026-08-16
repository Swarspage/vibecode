39 — DEBUGGING A RACE CONDITION OR CONCURRENCY BUG

I am seeing nondeterministic behavior: [describe the symptom, e.g., "sometimes the second request overwrites the first" or "two users can claim the same resource"].

Identify every place where shared state is read and written:

1) database rows or tables with read-modify-write patterns,
2) shared caches or in-memory state,
3) file writes or external API calls,
4) user sessions or authentication state,
5) event handlers, queues, or background jobs,
6) frontend async operations that may resolve out of order.

For each location, determine:

- whether operations are atomic,
- whether locks, transactions, or idempotency keys are used,
- whether there are unique constraints protecting invariants,
- whether stale reads are possible,
- whether asynchronous UI events can overwrite newer state.

End with:

- your top hypothesis,
- the exact line or query responsible,
- a reproducible test scenario,
- the smallest fix that guarantees correctness.