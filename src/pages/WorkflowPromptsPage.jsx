import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { workflowPrompts } from "../data/workflowPrompts";

const categories = [
  { id: "orient", label: "Orient" },
  { id: "investigate", label: "Investigate" },
  { id: "build", label: "Build" },
  { id: "debug", label: "Debug" },
  { id: "ship", label: "Ship" },
];

const WorkflowPromptsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();

  const matchesSearch = (prompt) => {
    if (!query) return true;
    const category = categories.find((c) => c.id === prompt.category);
    const haystack = [
      prompt.title,
      prompt.summary,
      String(prompt.number),
      ...(prompt.tags ?? []),
      category?.label ?? prompt.category,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  };

  const totalMatches = workflowPrompts.filter(matchesSearch).length;

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      {/* Page Header */}
      <div>
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-2xs)",
              color: "var(--color-accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Workflow Prompts
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            color: "var(--color-fg)",
            maxWidth: "560px",
            marginBottom: "16px",
          }}
        >
          Workflow Prompts
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--color-muted)",
            maxWidth: "480px",
            lineHeight: 1.65,
            marginBottom: "12px",
          }}
        >
          Production prompts for reading, debugging, refactoring, and shipping
          real codebases with an AI IDE.
        </p>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-muted)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {workflowPrompts.length} prompts
        </span>
      </div>

      {/* Docs Layout */}
      <div className="docs-layout">
        <button
          type="button"
          className="mobile-sidebar-toggle"
          aria-expanded={sidebarOpen}
          aria-controls="workflow-sidebar-nav"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          {sidebarOpen ? "Close prompts" : "Browse prompts"}
        </button>
        <aside
          id="workflow-sidebar-nav"
          className={`docs-sidebar${sidebarOpen ? " open" : ""}`}
        >
          {/* Search */}
          <div style={{ marginBottom: "16px" }}>
            <input
              type="search"
              className="search-input"
              placeholder="Search prompts"
              aria-label="Search workflow prompts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav aria-label="Workflow prompt navigation">
            {totalMatches === 0 ? (
              <p className="search-empty">
                No workflow prompts match &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              categories.map((cat) => {
                const prompts = workflowPrompts.filter(
                  (p) => p.category === cat.id && matchesSearch(p)
                );
                if (prompts.length === 0) return null;
                return (
                  <div key={cat.id} className="docs-sidebar-group">
                    <div className="docs-sidebar-heading">{cat.label}</div>
                    {prompts.map((prompt) => (
                      <NavLink
                        key={prompt.id}
                        to={`/workflow-prompts/${prompt.slug}`}
                        className={({ isActive }) =>
                          isActive
                            ? "docs-sidebar-link docs-sidebar-link-nested active"
                            : "docs-sidebar-link docs-sidebar-link-nested"
                        }
                        onClick={() => setSidebarOpen(false)}
                      >
                        {prompt.number < 10 ? `0${prompt.number}` : prompt.number}{" "}
                        {prompt.title}
                      </NavLink>
                    ))}
                  </div>
                );
              })
            )}
          </nav>
        </aside>
        <div className="docs-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default WorkflowPromptsPage;
