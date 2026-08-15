18 — DEBUGGING A PRODUCTION INCIDENT FROM LOGS

We had this production incident: [describe what happened, when, and the user-visible impact]. I will paste logs, stack traces, and any relevant context.

Act as an on-call engineer. First create a timeline:

1) what time did the incident start,
2) what was the first error or unusual signal,
3) what changed just before that: a deploy, config change, traffic spike, database migration, third-party failure,
4) what systems were affected,
5) what actions were taken and when.

Then analyze the logs/stack traces to identify:

- the root cause, with evidence,
- any cascading failures that made it worse,
- whether this is a known issue or a new one,
- what monitoring or alerting gap allowed it to go unnoticed or delayed detection.

End with:

- a short-term fix to restore service now,
- a medium-term fix to prevent recurrence,
- a list of alerts or dashboards to add so we catch this class of problem earlier.

Do not propose a permanent fix until the root cause is confirmed with specific log lines or metrics.
