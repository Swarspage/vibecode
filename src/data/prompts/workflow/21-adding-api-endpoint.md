21 — ADDING A NEW API ENDPOINT FOLLOWING CONVENTIONS

I want to add this endpoint: [describe method, path, request, response, and what it should do].

Before writing code, study the existing endpoints:

1) where routes are defined and what naming conventions are used,
2) how validation is performed on request parameters and bodies,
3) how authentication and authorization are applied,
4) how service/controller/handler layers are separated,
5) how errors are returned, including status codes and response shape,
6) how tests for endpoints are written.

Then output:

- the exact files that need to be created or changed,
- the route registration snippet following the existing pattern,
- the validation rules,
- the expected response shape for success and error cases,
- the tests you will write,
- any database or service functions that need to be added.

Follow the codebase's existing patterns exactly. If there are inconsistencies in how endpoints are built, say so and choose the pattern used by the most recent or most secure endpoint.

Stop and wait for my approval before writing any code.
