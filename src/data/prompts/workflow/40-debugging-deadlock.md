40 — DEBUGGING A DEADLOCK

The application freezes or hangs under load. I suspect a deadlock.

Investigate:

1) all locks, mutexes, transactions, or database locks in use,
2) the order in which resources are acquired,
3) any circular wait between two or more operations,
4) long-running transactions that hold locks,
5) synchronous calls that may block the event loop,
6) promises or async operations that never resolve.

Then provide:

- the likely deadlock cycle,
- the specific resource ordering problem,
- evidence from logs, lock tables, or thread dumps,
- a short-term mitigation,
- a long-term fix such as lock ordering or timeouts.

Do not change code until the exact wait cycle is identified.