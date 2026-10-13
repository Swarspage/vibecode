34 — TRACING AN AUTHENTICATION & AUTHORIZATION FLOW

Trace exactly how a user is authenticated and authorized in this codebase.

Start from the login or signup entry point, then follow:

1) how credentials or tokens are submitted,
2) how the user identity is verified,
3) how sessions or tokens are created, stored, and validated,
4) how authorization checks are performed after authentication,
5) how logout, token refresh, and session expiry work,
6) how failed login attempts or invalid tokens are handled.

For every step, give file paths and function names.

Then flag:

- any place authentication is missing or only partially enforced,
- any authorization check that relies on client-side state,
- any route or function that trusts user-supplied IDs or roles without validation,
- any hardcoded credentials or insecure token handling.

End with a small diagram of the auth flow and a prioritized list of risks.