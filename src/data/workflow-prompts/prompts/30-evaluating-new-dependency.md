30 — EVALUATING WHETHER TO ADD A NEW DEPENDENCY

I am considering adding this dependency: [name and what it does]. Before installing anything, evaluate whether it is the right choice for this codebase.

Investigate:

1) does the codebase already solve this problem internally, and where,
2) is there an existing dependency that already covers it,
3) what is the package size, and what would it add to the bundle,
4) how many dependencies of its own does it bring,
5) how actively maintained is it, and what does the release history look like,
6) what is its security posture and history,
7) how well does it match the codebase's language, framework, and patterns,
8) is it overkill, or is a small internal utility the better option,
9) what would it look like to implement only the needed functionality ourselves,
10) is the license compatible with the project.

Then provide:

- a recommendation: add it, avoid it, or build internally,
- the trade-off for each option,
- the risk introduced by adding it,
- what the implementation would look like if added,
- what the implementation would look like if built internally,
- any smaller or better-maintained alternatives,
- the exact package manager command and lockfile changes if added.

Do not install anything or modify files. Wait for my decision after reading the recommendation.
