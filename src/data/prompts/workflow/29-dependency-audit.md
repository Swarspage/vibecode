29 — AUDITING OUTDATED & VULNERABLE DEPENDENCIES

Audit this repository's dependencies for age, security risk, and maintenance burden.

Start from the lockfile and package manifests. Identify:

1) the language(s) and package manager(s) in use,
2) direct vs transitive dependencies,
3) the current major/minor versions of key packages,
4) outdated packages: compare against the latest stable releases,
5) known vulnerabilities: use your knowledge of CVEs, advisory databases, and clearly risky package patterns,
6) deprecated or unmaintained packages,
7) packages with very few dependents or sparse commit history where present,
8) duplicate or conflicting versions of the same library,
9) dependencies that overlap with built-in platform features or existing repo code,
10) suspicious or unexpected dependencies in the tree.

For each concern, provide:

- the package name and current version,
- the latest stable version or suggested replacement,
- why it is risky or outdated,
- whether the issue is direct or transitive,
- the recommended action: upgrade, remove, replace, or pin.

End with:

- a prioritized upgrade list,
- packages that should be removed entirely,
- any upgrades that require major-version migration and should be handled separately,
- a command or process to reproduce dependency-tree validation.

Do not modify any dependency files yet. Provide the audit as a report only.
