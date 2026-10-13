54 — EXPLAINING THE ENTIRE PROJECT IN DETAIL

Act as a senior staff engineer and technical writer producing a complete,
professional explanation of this repository for a new senior engineer.

Do not assume the reader has any prior context about the product or code.

Read the README, package manifests, config files, entry points, folder
structure, and representative source files first.

Produce a detailed document with these sections:

1) Executive Summary
   - What the product does
   - Who it is for
   - What problem it solves
   - The current state of the product

2) Tech Stack
   - Languages, frameworks, runtimes
   - Databases, caches, queues, and storage
   - Build tools, test frameworks, linters
   - Infrastructure and deployment platform

3) High-Level Architecture
   - Frontend, backend, API, database, background jobs
   - How layers communicate
   - Architectural pattern and why it is used

4) Core Domain Concepts
   - The main entities and business rules
   - Critical workflows or user journeys
   - Where the business logic lives

5) Folder Structure
   - Annotated tree of the important folders
   - One line per folder explaining its role
   - Skip node_modules, build output, and vendored code

6) APIs and Integrations
   - Internal API surface
   - External services and APIs used
   - Authentication and authorization approach

7) Data Model
   - Main tables or collections
   - Key relationships
   - Migrations and seed data

8) Testing Strategy
   - Testing levels in use
   - How tests are organized and run
   - Gaps in coverage if visible

9) Development Workflow
   - Local setup steps
   - Build, run, test, and lint commands
   - Environment variables and secrets required

10) Deployment and Operations
    - How the app is built and deployed
    - CI/CD pipeline overview
    - Logging, monitoring, and alerting setup

11) Known Issues and Risks
    - Fragile code
    - Tech debt
    - Security or performance concerns
    - Missing documentation

12) Recommended First Steps for a New Engineer
    - Files to read first
    - Small safe tasks
    - Who or what to ask when stuck

Be specific. Use file paths, command names, and concrete examples. If the
repo documentation is missing or wrong, say so instead of guessing.
