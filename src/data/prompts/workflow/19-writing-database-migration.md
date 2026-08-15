19 — WRITING A DATABASE MIGRATION SAFELY

I need to make this schema change: [describe the change, e.g., "add a new column to the users table" or "split a column into two"].

Before writing the migration, analyze the existing database patterns:

1) which migration framework and language are used,
2) how existing migrations are named and organized,
3) whether migrations are reversible and whether down migrations are tested,
4) whether the application is deployed in a zero-downtime fashion,
5) how large the affected tables are and whether locking is a concern.

Then produce:

- the migration steps for small/empty tables,
- the migration steps for large production tables, including batching, backfilling, and avoiding lock contention,
- an explicit rollback plan if the migration fails midway,
- any application code changes that need to happen in parallel.

Warn about:

- adding a NOT NULL column without a default,
- locking a large table for too long,
- changing a column type that is used by existing indexes,
- irreversible data loss.

Write only a plan and the migration code, with comments explaining each step. Wait for my approval before generating the actual files.
