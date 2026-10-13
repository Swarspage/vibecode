05 — UNDERSTANDING HOW APIs ARE RUNNING

Catalog every API endpoint exposed by this codebase.

For each one list:

- HTTP method,
- full route path,
- the file and function that handles it,
- required authentication or authorization,
- request parameters or body shape,
- a one sentence description of what it does.

Group the endpoints by domain area, for example auth, users, billing.

After the catalog, flag three things specifically:

- endpoints with no visible authentication check,
- endpoints that appear unused anywhere in the frontend or tests,
- any inconsistent patterns across endpoints, such as some routes validating input and others not.
