26 — TRACING A COMPONENT'S STATE & RE-RENDERS

I am debugging this frontend issue: [describe the symptom, e.g., "this component re-renders on every keystroke even though the input value doesn't change" or "state goes stale after navigating away and back"].

Before changing any code, trace the component's render path.

Identify:

1) the component tree from the highest affected ancestor down to the specific component,
2) which props and state values change, and where they originate,
3) every parent that re-renders and whether its children are memoized or not,
4) all context providers, global stores, or subscriptions the component depends on,
5) any useEffect, useMemo, useCallback, or event handlers that reference unstable values or missing dependencies,
6) whether the issue is caused by state being lifted too high, prop drilling, or a shared store,
7) whether the problem is actual performance, correctness, or both.

For each step, give the file path and component/function name.

Then provide:

- your top hypothesis for why the behavior happens,
- your confidence level,
- the exact line or dependency that is likely responsible,
- a minimal reproduction or test that would confirm it,
- the smallest fix that would address the root cause without a rewrite.

Do not propose a fix until the behavior is traced and the responsible line is identified.
