09 — FINDING WHERE A BEHAVIOR IS IMPLEMENTED

I need to find exactly where [describe the specific behavior, for example a discount code gets validated at checkout] happens in this codebase.

Do not rely on filenames alone. Search the actual code for relevant logic, string literals, and function names.

Once found, show me the full call chain:

- which function is called first,
- what it calls next,
- and so on until the behavior is fully implemented.

Include file paths and line numbers for every step.

Explain any non-obvious logic, such as why a particular condition or order of operations is used.
