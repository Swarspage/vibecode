25 — POST-INCIDENT REVIEW

We had this incident: [describe what happened, impact, and timeline].

Act as a blameless postmortem facilitator. Guide me through writing a post-incident review with these sections:

1) Summary: what happened, in 2-3 sentences.
2) Impact: what users experienced, for how long, and what was affected.
3) Timeline: a minute-by-minute or phase-by-phase account, from first detection to resolution.
4) Root cause: the actual technical cause, not just the symptom.
5) Contributing factors: what made it worse or harder to detect.
6) What went well: detection, communication, decision-making, or recovery steps worth keeping.
7) What went badly: process, tooling, or knowledge gaps.
8) Action items: each with a clear owner, due date, and priority.
9) Monitoring and alerts to add or improve.
10) Follow-up: any questions that remain unanswered.

For each action item, make it specific enough that someone can pick it up without additional context. Avoid generic statements like "improve testing." Instead use something like "Add an integration test that verifies the order-creation flow fails gracefully when the payment provider times out."
