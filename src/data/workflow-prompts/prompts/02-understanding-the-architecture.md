02 — UNDERSTANDING THE ARCHITECTURE

Map the architecture of this codebase without writing any code. Identify every major layer or module, for example API layer, service layer, data access layer, background jobs, frontend.

For each layer, list the folders and files that belong to it and the responsibilities it owns.

Describe how layers communicate: direct function calls, HTTP, message queue, or events.

Name the architectural pattern in use, layered, hexagonal, MVC, microservices, or monolith, and justify your answer with specific file references, not general impressions.

Draw the dependency direction between layers as a text diagram using arrows.

Finally, list any places where the architecture is violated, such as a UI file importing directly from the database layer, and explain why that is a problem.
