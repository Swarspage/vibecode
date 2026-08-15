32 — ESTIMATING & SIZING A FEATURE BEFORE BUILDING

I need to size this feature before deciding how to approach it: [describe the feature at a high level].

Investigate the codebase first. Do not produce a plan yet. Identify:

1) which existing systems or modules this feature will touch,
2) whether a similar feature exists that can be copied or extended,
3) what is simple and what is unexpectedly complex,
4) hidden work that isn't obvious from the feature description:
   - database changes,
   - API changes,
   - migration or backfill,
   - permissions and auth,
   - frontend and backend work,
   - tests,
   - documentation,
5) risk areas that could blow up scope,
6) whether the feature can be split into independently shippable parts.

Then provide:

- a complexity assessment: small / medium / large / very large,
- an approximate effort estimate with reasoning, not just a number,
- the riskiest part of the implementation,
- a phased breakdown if phased delivery is possible,
- which unknown needs to be resolved before a more accurate estimate is possible.

Do not write an implementation plan yet. The goal is to understand size, risk, and unknowns first.
