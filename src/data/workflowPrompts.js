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
  }
];
