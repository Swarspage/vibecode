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
import tracingRenders from "./prompts/workflow/26-frontend-tracing-renders.md?raw";
import accessibilityAudit from "./prompts/workflow/27-accessibility-audit.md?raw";
import layoutResponsiveBug from "./prompts/workflow/28-layout-responsive-bug.md?raw";
import dependencyAudit from "./prompts/workflow/29-dependency-audit.md?raw";
import evaluatingNewDependency from "./prompts/workflow/30-evaluating-new-dependency.md?raw";
import majorVersionUpgrade from "./prompts/workflow/31-major-version-upgrade.md?raw";
import featureSizing from "./prompts/workflow/32-feature-sizing-estimate.md?raw";
import namingConsistencyAudit from "./prompts/workflow/33-naming-pattern-consistency-audit.md?raw";
import tracingAuthFlow from "./prompts/workflow/34-tracing-auth-flow.md?raw";
import tracingErrorHandling from "./prompts/workflow/35-tracing-error-handling.md?raw";
import mappingFeatureFlags from "./prompts/workflow/36-mapping-feature-flags.md?raw";
import readingStackTrace from "./prompts/workflow/37-reading-stack-trace.md?raw";
import debuggingMemoryLeak from "./prompts/workflow/38-debugging-memory-leak.md?raw";
import debuggingRaceCondition from "./prompts/workflow/39-debugging-race-condition.md?raw";
import debuggingDeadlock from "./prompts/workflow/40-debugging-deadlock.md?raw";
import debuggingEnvironmentSpecificBug from "./prompts/workflow/41-debugging-environment-specific-bug.md?raw";
import settingUpLocalDevEnvironment from "./prompts/workflow/42-setting-up-local-dev-environment.md?raw";
import writingUnitTestsExistingCode from "./prompts/workflow/43-writing-unit-tests-existing-code.md?raw";
import addingFeatureFlag from "./prompts/workflow/44-adding-feature-flag.md?raw";
import buildingCliTool from "./prompts/workflow/45-building-cli-tool.md?raw";
import creatingApiClient from "./prompts/workflow/46-creating-api-client.md?raw";
import mockingExternalServices from "./prompts/workflow/47-mocking-external-services.md?raw";
import postDeploymentVerification from "./prompts/workflow/48-post-deployment-verification.md?raw";
import changelogReleaseNotes from "./prompts/workflow/49-changelog-release-notes.md?raw";
import canaryReleasePlan from "./prompts/workflow/50-canary-release-plan.md?raw";
import auditingLoggingObservability from "./prompts/workflow/51-auditing-logging-observability.md?raw";
import auditingErrorMessagesApi from "./prompts/workflow/52-auditing-error-messages-api.md?raw";
import auditingCiPipeline from "./prompts/workflow/53-auditing-ci-pipeline.md?raw";
import explainingEntireProject from "./prompts/workflow/54-explaining-entire-project.md?raw";
import seoPerformanceAudit from "./prompts/workflow/55-seo-performance-web-audit.md?raw";
import documentationAudit from "./prompts/workflow/56-documentation-audit.md?raw";
import productionReadinessAudit from "./prompts/workflow/57-production-readiness-audit.md?raw";
import codeHealthMaintainabilityAudit from "./prompts/workflow/58-code-health-maintainability-audit.md?raw";

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
    category: "audit",
    summary: "Static security review with prioritized remediation.",
    tags: ["security", "audit", "vulnerabilities", "review"],
    prompt: auditingSecurity
  },
  {
    id: "mapping-test-coverage",
    number: 15,
    title: "Mapping Test Coverage & Risk",
    slug: "mapping-test-coverage",
    category: "audit",
    summary: "Map test coverage to critical paths and prioritize missing tests.",
    tags: ["testing", "coverage", "risk", "quality"],
    prompt: mappingTestCoverage
  },
  {
    id: "tracing-performance-bottleneck",
    number: 16,
    title: "Tracing a Performance Bottleneck",
    slug: "tracing-performance-bottleneck",
    category: "debug",
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
    category: "ship",
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
    category: "investigate",
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
  },
  {
    id: "frontend-tracing-renders",
    number: 26,
    title: "Tracing a Component's State & Re-renders",
    slug: "frontend-tracing-renders",
    category: "debug",
    summary: "Trace frontend render paths, state changes, and stale UI behavior.",
    tags: ["frontend", "react", "renders", "state", "debugging"],
    prompt: tracingRenders
  },
  {
    id: "accessibility-audit",
    number: 27,
    title: "Accessibility Audit",
    slug: "accessibility-audit",
    category: "audit",
    summary: "WCAG 2.2 AA audit with prioritized fixes.",
    tags: ["accessibility", "a11y", "frontend", "audit"],
    prompt: accessibilityAudit
  },
  {
    id: "layout-responsive-bug",
    number: 28,
    title: "Diagnosing a Layout or Responsive Bug",
    slug: "layout-responsive-bug",
    category: "debug",
    summary: "Find the offending CSS or component structure before changing it.",
    tags: ["frontend", "css", "responsive", "layout", "debugging"],
    prompt: layoutResponsiveBug
  },
  {
    id: "dependency-audit",
    number: 29,
    title: "Auditing Outdated & Vulnerable Dependencies",
    slug: "dependency-audit",
    category: "audit",
    summary: "Review dependency health, security, and maintenance risk.",
    tags: ["dependencies", "security", "audit", "maintenance"],
    prompt: dependencyAudit
  },
  {
    id: "evaluating-new-dependency",
    number: 30,
    title: "Evaluating Whether to Add a New Dependency",
    slug: "evaluating-new-dependency",
    category: "build",
    summary: "Assess bundle, maintenance, and alternatives before installing.",
    tags: ["dependencies", "tradeoffs", "architecture", "planning"],
    prompt: evaluatingNewDependency
  },
  {
    id: "major-version-upgrade",
    number: 31,
    title: "Assessing a Major Version Upgrade",
    slug: "major-version-upgrade",
    category: "build",
    summary: "Investigate breaking changes and blast radius before upgrading.",
    tags: ["upgrade", "migration", "dependencies", "risk"],
    prompt: majorVersionUpgrade
  },
  {
    id: "feature-sizing-estimate",
    number: 32,
    title: "Estimating & Sizing a Feature Before Building",
    slug: "feature-sizing-estimate",
    category: "orient",
    summary: "Understand complexity, risk, and unknowns before planning.",
    tags: ["planning", "estimation", "architecture", "scoping"],
    prompt: featureSizing
  },
  {
    id: "naming-pattern-consistency-audit",
    number: 33,
    title: "Auditing Naming & Pattern Consistency Across the Repo",
    slug: "naming-pattern-consistency-audit",
    category: "investigate",
    summary: "Find drift, duplicate utilities, and inconsistent conventions.",
    tags: ["patterns", "naming", "consistency", "refactor"],
    prompt: namingConsistencyAudit
  }
  ,
  {
    id: "tracing-auth-flow",
    number: 34,
    title: "Tracing an Authentication & Authorization Flow",
    slug: "tracing-auth-flow",
    category: "investigate",
    summary: "Workflow prompt for Tracing an Authentication & Authorization Flow.",
    tags: ["auth","security","investigate","trace"],
    prompt: tracingAuthFlow
  }  ,
  {
    id: "tracing-error-handling",
    number: 35,
    title: "Tracing Error Handling & Recovery Paths",
    slug: "tracing-error-handling",
    category: "investigate",
    summary: "Workflow prompt for Tracing Error Handling & Recovery Paths.",
    tags: ["errors","recovery","trace","resilience"],
    prompt: tracingErrorHandling
  }  ,
  {
    id: "mapping-feature-flags",
    number: 36,
    title: "Mapping Feature Flags & Configuration",
    slug: "mapping-feature-flags",
    category: "investigate",
    summary: "Workflow prompt for Mapping Feature Flags & Configuration.",
    tags: ["config","feature-flags","environment","audit"],
    prompt: mappingFeatureFlags
  }  ,
  {
    id: "reading-stack-trace",
    number: 37,
    title: "Reading and Explaining a Stack Trace",
    slug: "reading-stack-trace",
    category: "debug",
    summary: "Workflow prompt for Reading and Explaining a Stack Trace.",
    tags: ["debugging","errors","stack-trace"],
    prompt: readingStackTrace
  }  ,
  {
    id: "debugging-memory-leak",
    number: 38,
    title: "Debugging a Memory Leak",
    slug: "debugging-memory-leak",
    category: "debug",
    summary: "Workflow prompt for Debugging a Memory Leak.",
    tags: ["debugging","memory","performance","leak"],
    prompt: debuggingMemoryLeak
  }  ,
  {
    id: "debugging-race-condition",
    number: 39,
    title: "Debugging a Race Condition or Concurrency Bug",
    slug: "debugging-race-condition",
    category: "debug",
    summary: "Workflow prompt for Debugging a Race Condition or Concurrency Bug.",
    tags: ["debugging","concurrency","race-condition","state"],
    prompt: debuggingRaceCondition
  }  ,
  {
    id: "debugging-deadlock",
    number: 40,
    title: "Debugging a Deadlock",
    slug: "debugging-deadlock",
    category: "debug",
    summary: "Workflow prompt for Debugging a Deadlock.",
    tags: ["debugging","concurrency","deadlock","performance"],
    prompt: debuggingDeadlock
  }  ,
  {
    id: "debugging-environment-specific-bug",
    number: 41,
    title: "Debugging an Environment-Specific Bug",
    slug: "debugging-environment-specific-bug",
    category: "debug",
    summary: "Workflow prompt for Debugging an Environment-Specific Bug.",
    tags: ["debugging","environment","infrastructure","config"],
    prompt: debuggingEnvironmentSpecificBug
  }  ,
  {
    id: "setting-up-local-dev-environment",
    number: 42,
    title: "Setting Up a Local Development Environment",
    slug: "setting-up-local-dev-environment",
    category: "build",
    summary: "Workflow prompt for Setting Up a Local Development Environment.",
    tags: ["setup","onboarding","environment","build"],
    prompt: settingUpLocalDevEnvironment
  }  ,
  {
    id: "writing-unit-tests-existing-code",
    number: 43,
    title: "Writing Unit Tests for Existing Code",
    slug: "writing-unit-tests-existing-code",
    category: "build",
    summary: "Workflow prompt for Writing Unit Tests for Existing Code.",
    tags: ["testing","unit-tests","refactoring","quality"],
    prompt: writingUnitTestsExistingCode
  }  ,
  {
    id: "adding-feature-flag",
    number: 44,
    title: "Adding a Feature Flag Safely",
    slug: "adding-feature-flag",
    category: "build",
    summary: "Workflow prompt for Adding a Feature Flag Safely.",
    tags: ["feature-flags","deployment","safety","build"],
    prompt: addingFeatureFlag
  }  ,
  {
    id: "building-cli-tool",
    number: 45,
    title: "Building a CLI Tool or Script",
    slug: "building-cli-tool",
    category: "build",
    summary: "Workflow prompt for Building a CLI Tool or Script.",
    tags: ["cli","tooling","scripts","automation"],
    prompt: buildingCliTool
  }  ,
  {
    id: "creating-api-client",
    number: 46,
    title: "Creating an API Client Module",
    slug: "creating-api-client",
    category: "build",
    summary: "Workflow prompt for Creating an API Client Module.",
    tags: ["api","client","integration","architecture"],
    prompt: creatingApiClient
  }  ,
  {
    id: "mocking-external-services",
    number: 47,
    title: "Mocking External Services for Tests",
    slug: "mocking-external-services",
    category: "build",
    summary: "Workflow prompt for Mocking External Services for Tests.",
    tags: ["testing","mocking","integration","quality"],
    prompt: mockingExternalServices
  }  ,
  {
    id: "post-deployment-verification",
    number: 48,
    title: "Writing a Post-Deployment Verification Checklist",
    slug: "post-deployment-verification",
    category: "ship",
    summary: "Workflow prompt for Writing a Post-Deployment Verification Checklist.",
    tags: ["deployment","release","verification","qa"],
    prompt: postDeploymentVerification
  }  ,
  {
    id: "changelog-release-notes",
    number: 49,
    title: "Writing a Changelog & Release Notes",
    slug: "changelog-release-notes",
    category: "ship",
    summary: "Workflow prompt for Writing a Changelog & Release Notes.",
    tags: ["documentation","release","changelog","communication"],
    prompt: changelogReleaseNotes
  }  ,
  {
    id: "canary-release-plan",
    number: 50,
    title: "Planning a Canary Release or Gradual Rollout",
    slug: "canary-release-plan",
    category: "ship",
    summary: "Workflow prompt for Planning a Canary Release or Gradual Rollout.",
    tags: ["release","rollout","deployment","safety"],
    prompt: canaryReleasePlan
  }  ,
  {
    id: "auditing-logging-observability",
    number: 51,
    title: "Auditing Logging & Observability",
    slug: "auditing-logging-observability",
    category: "audit",
    summary: "Workflow prompt for Auditing Logging & Observability.",
    tags: ["audit","observability","logging","monitoring"],
    prompt: auditingLoggingObservability
  }  ,
  {
    id: "auditing-error-messages-api",
    number: 52,
    title: "Auditing Error Messages & API Responses",
    slug: "auditing-error-messages-api",
    category: "audit",
    summary: "Workflow prompt for Auditing Error Messages & API Responses.",
    tags: ["audit","api","errors","ux"],
    prompt: auditingErrorMessagesApi
  }  ,
  {
    id: "auditing-ci-pipeline",
    number: 53,
    title: "Auditing CI Pipeline & Build Health",
    slug: "auditing-ci-pipeline",
    category: "audit",
    summary: "Workflow prompt for Auditing CI Pipeline & Build Health.",
    tags: ["audit","ci-cd","build","infrastructure"],
    prompt: auditingCiPipeline
  },
  {
    id: "explaining-entire-project",
    number: 54,
    title: "Explaining the Entire Project in Detail",
    slug: "explaining-entire-project",
    summary: "Act as a senior staff engineer producing a complete, professional explanation of this repository for a new senior engineer.",
    prompt: explainingEntireProject,
    category: "orient",
    tags: ["Onboarding", "Documentation", "Architecture"]
  },
  {
    id: "seo-performance-web-audit",
    number: 55,
    title: "Technical SEO, Performance & Web Platform Audit",
    slug: "seo-performance-web-audit",
    summary: "Act as a senior technical SEO and web performance specialist to audit a project's public web presence.",
    prompt: seoPerformanceAudit,
    category: "audit",
    tags: ["SEO", "Performance", "Web Vitals", "Accessibility"]
  },
  {
    id: "documentation-audit",
    number: 56,
    title: "Documentation & Developer Onboarding Audit",
    slug: "documentation-audit",
    summary: "Audit the documentation and developer onboarding experience of a repository for a new engineer.",
    prompt: documentationAudit,
    category: "audit",
    tags: ["Documentation", "Onboarding", "Developer Experience"]
  },
  {
    id: "production-readiness-audit",
    number: 57,
    title: "Production Readiness & Reliability Audit",
    slug: "production-readiness-audit",
    summary: "Act as a senior SRE auditing a codebase for production readiness, configuration, logging, and scaling.",
    prompt: productionReadinessAudit,
    category: "audit",
    tags: ["SRE", "Reliability", "Production", "Monitoring"]
  },
  {
    id: "code-health-maintainability-audit",
    number: 58,
    title: "Code Health & Maintainability Deep Audit",
    slug: "code-health-maintainability-audit",
    summary: "Audit the long-term maintainability of a codebase focusing on complexity, duplication, and boundaries.",
    prompt: codeHealthMaintainabilityAudit,
    category: "audit",
    tags: ["Maintainability", "Code Health", "Tech Debt", "Refactoring"]
  }
];
