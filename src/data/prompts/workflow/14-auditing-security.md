14 — AUDITING SECURITY & ATTACK SURFACE

Act as a senior application-security engineer performing a security review of this codebase. Do not attempt to exploit anything; perform a static review only.

First identify:

1) what kind of application this is and what sensitive data it handles,
2) the authentication and authorization mechanisms in use,
3) all places where user or external input enters the system,
4) all places where data is persisted, logged, or sent to external services.

Then review:

- secrets and credentials: API keys, DB passwords, tokens, private keys committed to the repo,
- input validation and sanitization across HTTP handlers, forms, file uploads, and CLI args,
- authentication and session management: password hashing, session expiry, JWT validation, CSRF,
- authorization: whether each endpoint or function checks ownership/role and not just authentication,
- injection risks: SQL, NoSQL, command, path traversal, template injection,
- logging practices: whether sensitive data like passwords, tokens, or PII is being logged,
- dependency risk: known vulnerable packages and outdated runtimes, based on lockfiles,
- file upload and path handling: directory traversal, unrestricted file types, size limits.

For each finding, provide:

- severity: critical / high / medium / low,
- file and line reference,
- a one-sentence description of the vulnerability,
- a concrete recommendation for fixing or mitigating it.

End with a prioritized remediation list starting with critical issues that should block release.
