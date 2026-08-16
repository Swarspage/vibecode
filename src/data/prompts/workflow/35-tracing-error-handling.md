35 — TRACING ERROR HANDLING & RECOVERY PATHS

Trace how errors are handled across this codebase.

Pick three representative failures:

- a validation error from user input,
- a database or external API failure,
- an unexpected runtime exception.

For each one, trace:

1) where the error is first raised,
2) how it propagates up the call stack,
3) which middleware or catch block handles it,
4) what the user receives,
5) what is logged,
6) whether the system retries, fails silently, or crashes.

Then assess:

- consistency of error response shapes,
- leaked internal details in error messages,
- missing error handling around external calls,
- places where errors are swallowed silently.

End with recommendations for a consistent error-handling pattern.