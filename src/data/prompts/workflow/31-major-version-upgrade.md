31 — ASSESSING A MAJOR VERSION UPGRADE

I want to upgrade this dependency or runtime: [e.g., React 17 to 18, Node 18 to 20, Next.js 13 to 14].

Before touching the lockfile or config, investigate the blast radius of the upgrade.

Identify:

1) which parts of the codebase import or rely on the package,
2) any breaking changes or deprecations in the new major version that affect those usages,
3) whether related packages also need upgrading,
4) whether the upgrade requires changes in config, build tooling, or deployment,
5) whether there are migration guides or codemods available,
6) whether the old version has known security or maintenance problems,
7) whether the new version changes behavior in any way that could affect users,
8) whether there are known ecosystem issues or compatibility conflicts with this repo.

For each affected file or usage, provide:

- file path,
- what currently relies on the old version,
- what needs to change,
- whether the change is mechanical, risky, or requires behavior verification.

Then produce:

- a step-by-step migration plan,
- a rollback plan if the upgrade fails,
- a test plan to verify the upgrade,
- the order in which to apply changes,
- a list of commands needed.

Do not perform the upgrade. Wait for my approval after reviewing the plan.
