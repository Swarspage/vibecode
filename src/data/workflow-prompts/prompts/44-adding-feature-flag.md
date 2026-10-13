44 — ADDING A FEATURE FLAG SAFELY

I want to gate this feature behind a feature flag: [describe the feature and rollout plan].

First review existing feature-flag patterns:

1) how flags are defined and stored,
2) how flags are read in the frontend and backend,
3) how flag values are changed without redeploying,
4) whether flags have types, defaults, or expiry,
5) how flags are removed after rollout.

Then produce:

- the flag name and suggested default,
- exact files to change,
- the code snippet for the flag check,
- behavior when the flag is on vs off,
- how to test both paths,
- a removal plan after the feature is fully shipped.

Do not implement anything until the plan is approved.