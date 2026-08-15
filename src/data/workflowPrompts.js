import exploringNewCodebase from "./prompts/workflow/01-exploring-a-new-codebase.md?raw";
import understandingArchitecture from "./prompts/workflow/02-understanding-the-architecture.md?raw";
import buildingFeature from "./prompts/workflow/03-building-a-feature-with-little-context.md?raw";
import tracingBackend from "./prompts/workflow/04-tracing-how-the-backend-works.md?raw";
import understandingApis from "./prompts/workflow/05-understanding-how-apis-are-running.md?raw";
import solvingBug from "./prompts/workflow/06-solving-a-bug-tracing-logical-flow.md?raw";
import reviewingPr from "./prompts/workflow/07-reviewing-a-pr-you-did-not-write.md?raw";
import onboardingLegacy from "./prompts/workflow/08-onboarding-a-legacy-codebase.md?raw";
import findingBehavior from "./prompts/workflow/09-finding-where-a-behavior-is-implemented.md?raw";
import refactoring from "./prompts/workflow/10-refactoring-without-breaking-hidden-dependencies.md?raw";
import dataFlow from "./prompts/workflow/11-understanding-how-data-flows.md?raw";
import checkingChange from "./prompts/workflow/12-checking-if-a-change-is-safe-to-ship.md?raw";
import failingTest from "./prompts/workflow/13-why-a-test-is-failing.md?raw";
import auditingSecurity from "./prompts/workflow/14-auditing-security.md?raw";
import mappingTestCoverage from "./prompts/workflow/15-mapping-test-coverage.md?raw";
import tracingPerformance from "./prompts/workflow/16-tracing-performance-bottleneck.md?raw";
import debuggingFlakyTest from "./prompts/workflow/17-debugging-flaky-test.md?raw";
import debuggingProductionIncident from "./prompts/workflow/18-debugging-production-incident.md?raw";
import writingDatabaseMigration from "./prompts/workflow/19-writing-database-migration.md?raw";
import integratingExternalApi from "./prompts/workflow/20-integrating-external-api.md?raw";
import addingApiEndpoint from "./prompts/workflow/21-adding-api-endpoint.md?raw";
import characterizingLegacyCode from "./prompts/workflow/22-characterizing-legacy-code.md?raw";
import preparingPrDescription from "./prompts/workflow/23-preparing-pr-description.md?raw";
import writingRollbackReleasePlan from "./prompts/workflow/24-writing-rollback-release-plan.md?raw";
import postIncidentReview from "./prompts/workflow/25-post-incident-review.md?raw";

export const workflowPrompts = [
  {
    id: "exploring-new-codebase",
    number: 1,
    title: "Exploring a New Codebase",
    slug: "exploring-new-codebase",
    category: "orient",
    summary: "First-pass repo review: stack, folder tree, key files, run commands.",
    tags: ["onboarding", "architecture", "readme"],
    prompt: exploringNewCodebase
  },
  {
    id: "understanding-architecture",
    number: 2,
    title: "Understanding the Architecture",
    slug: "understanding-architecture",
    category: "orient",
    summary: "Map layers, communication paths, and architecture violations.",
    tags: ["architecture", "layers", "dependencies"],
    prompt: understandingArchitecture
  },
  {
    id: "building-feature",
    number: 3,
    title: "Building a Feature with Little Context",
    slug: "building-feature",
    category: "build",
    summary: "Investigate patterns and produce an implementation plan before coding.",
    tags: ["feature", "planning", "patterns"],
    prompt: buildingFeature
  },
  {
    id: "tracing-backend",
    number: 4,
    title: "Tracing How the Backend Works",
    slug: "tracing-backend",
    category: "investigate",
    summary: "Follow an endpoint from route definition to final response.",
    tags: ["backend", "trace", "execution"],
    prompt: tracingBackend
  },
  {
    id: "understanding-apis",
    number: 5,
    title: "Understanding How APIs Are Running",
    slug: "understanding-apis",
    category: "investigate",
    summary: "Catalog every API endpoint and flag security/consistency issues.",
    tags: ["api", "endpoints", "security"],
    prompt: understandingApis
  },
  {
    id: "solving-bug",
    number: 6,
    title: "Solving a Bug, Tracing Logical Flow",
    slug: "solving-bug",
    category: "debug",
    summary: "Trace logical flow and locate the root cause before changing code.",
    tags: ["debugging", "trace", "hypothesis"],
    prompt: solvingBug
  },
  {
    id: "reviewing-pr",
    number: 7,
    title: "Reviewing a PR You Did Not Write",
    slug: "reviewing-pr",
    category: "ship",
    summary: "Strict senior-engineer PR review with prioritized findings.",
    tags: ["review", "pull-request", "quality"],
    prompt: reviewingPr
  },
  {
    id: "onboarding-legacy",
    number: 8,
    title: "Onboarding a Legacy Codebase",
    slug: "onboarding-legacy",
    category: "orient",
    summary: "Inherit an undocumented system and map fragile areas.",
    tags: ["legacy", "onboarding", "risk"],
    prompt: onboardingLegacy
  },
  {
    id: "finding-behavior",
    number: 9,
    title: "Finding Where a Behavior Is Implemented",
    slug: "finding-behavior",
    category: "investigate",
    summary: "Locate exact implementation of a behavior, not just filenames.",
    tags: ["search", "call-chain", "behavior"],
    prompt: findingBehavior
  },
  {
    id: "refactoring",
    number: 10,
    title: "Refactoring Without Breaking Hidden Dependencies",
    slug: "refactoring",
    category: "build",
    summary: "Map all dependents before refactoring, then plan safe steps.",
    tags: ["refactor", "dependencies", "safety"],
    prompt: refactoring
  },
  {
    id: "data-flow",
    number: 11,
    title: "Understanding How Data Flows",
    slug: "data-flow",
    category: "investigate",
    summary: "Trace a specific piece of data from creation to storage and display.",
    tags: ["data", "flow", "trace"],
    prompt: dataFlow
  },
  {
    id: "checking-change",
    number: 12,
    title: "Checking If a Change Is Safe to Ship",
    slug: "checking-change",
    category: "ship",
    summary: "Review uncommitted changes before opening a PR.",
    tags: ["safety", "diff", "review"],
    prompt: checkingChange
  },
  {
    id: "failing-test",
    number: 13,
    title: "Why a Test Is Failing",
    slug: "failing-test",
    category: "debug",
    summary: "Trace a failing test to determine whether code or test is wrong.",
    tags: ["testing", "debugging", "trace"],
    prompt: failingTest
  },
  {
    id: "auditing-security",
    number: 14,
    title: "Auditing Security & Attack Surface",
    slug: "auditing-security",
    category: "investigate",
    summary: "Static security review with prioritized remediation.",
    tags: ["security", "audit", "vulnerabilities", "review"],
    prompt: auditingSecurity
  },
  {
    id: "mapping-test-coverage",
    number: 15,
    title: "Mapping Test Coverage & Risk",
    slug: "mapping-test-coverage",
    category: "investigate",
    summary: "Map test coverage to critical paths and prioritize missing tests.",
    tags: ["testing", "coverage", "risk", "quality"],
    prompt: mappingTestCoverage
  },
  {
    id: "tracing-performance-bottleneck",
    number: 16,
    title: "Tracing a Performance Bottleneck",
    slug: "tracing-performance-bottleneck",
    category: "investigate",
    summary: "Trace a slow operation and locate the bottleneck before fixing.",
    tags: ["performance", "trace", "optimization", "profiling"],
    prompt: tracingPerformance
  },
  {
    id: "debugging-flaky-test",
    number: 17,
    title: "Debugging a Flaky Test",
    slug: "debugging-flaky-test",
    category: "debug",
    summary: "Diagnose and fix non-deterministic test failures.",
    tags: ["testing", "flaky", "debugging", "ci"],
    prompt: debuggingFlakyTest
  },
  {
    id: "debugging-production-incident",
    number: 18,
    title: "Debugging a Production Incident from Logs",
    slug: "debugging-production-incident",
    category: "debug",
    summary: "Build a timeline and root-cause analysis from logs and stack traces.",
    tags: ["production", "incident", "logs", "debugging"],
    prompt: debuggingProductionIncident
  },
  {
    id: "writing-database-migration",
    number: 19,
    title: "Writing a Database Migration Safely",
    slug: "writing-database-migration",
    category: "build",
    summary: "Plan a reversible migration with rollback and zero-downtime steps.",
    tags: ["database", "migration", "safety", "backfill"],
    prompt: writingDatabaseMigration
  },
  {
    id: "integrating-external-api",
    number: 20,
    title: "Integrating an External API",
    slug: "integrating-external-api",
    category: "build",
    summary: "Design a robust external API integration following repo patterns.",
    tags: ["api", "integration", "client", "errors"],
    prompt: integratingExternalApi
  },
  {
    id: "adding-api-endpoint",
    number: 21,
    title: "Adding a New API Endpoint Following Conventions",
    slug: "adding-api-endpoint",
    category: "build",
    summary: "Plan a new endpoint by matching existing patterns exactly.",
    tags: ["api", "endpoint", "backend", "patterns"],
    prompt: addingApiEndpoint
  },
  {
    id: "characterizing-legacy-code",
    number: 22,
    title: "Characterizing Legacy Code with Tests",
    slug: "characterizing-legacy-code",
    category: "build",
    summary: "Pin down untested legacy behavior before making changes.",
    tags: ["legacy", "testing", "refactor", "safety"],
    prompt: characterizingLegacyCode
  },
  {
    id: "preparing-pr-description",
    number: 23,
    title: "Preparing a PR Description & Test Plan",
    slug: "preparing-pr-description",
    category: "ship",
    summary: "Generate a clear PR description with test plan and risk assessment.",
    tags: ["pr", "communication", "review", "test-plan"],
    prompt: preparingPrDescription
  },
  {
    id: "writing-rollback-release-plan",
    number: 24,
    title: "Writing a Rollback & Release Plan",
    slug: "writing-rollback-release-plan",
    category: "ship",
    summary: "Create a zero-downtime release plan with rollback steps.",
    tags: ["release", "rollback", "deployment", "safety"],
    prompt: writingRollbackReleasePlan
  },
  {
    id: "post-incident-review",
    number: 25,
    title: "Post-Incident Review",
    slug: "post-incident-review",
    category: "ship",
    summary: "Facilitate a blameless postmortem with clear action items.",
    tags: ["postmortem", "incident", "review", "learning"],
    prompt: postIncidentReview
  }
];
