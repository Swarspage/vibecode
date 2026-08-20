import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { workflowPrompts } from "../data/workflowPrompts";
import BackButton from "../components/BackButton";
import BookmarkButton from "../components/BookmarkButton";
import Seo from "../components/Seo";

const categories = [
  { id: "orient", label: "Orient" },
  { id: "investigate", label: "Investigate" },
  { id: "build", label: "Build" },
  { id: "debug", label: "Debug" },
  { id: "audit", label: "Audit" },
  { id: "ship", label: "Ship" },
];

const WorkflowPromptsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const query = searchQuery.trim().toLowerCase();

  const matchesSearch = (prompt) => {
    if (!query) return true;
    
    // Combine every single property (including the full markdown prompt body) into one giant searchable string
    const haystack = Object.values(prompt)
      .map(val => (val == null ? "" : String(val).toLowerCase()))
      .join(" ");
      
    // Split query by spaces and ensure EVERY word exists in the haystack (order independent)
    const searchTerms = query.split(/\s+/).filter(Boolean);
    return searchTerms.every(term => haystack.includes(term));
  };

  const matchesCategory = (prompt) =>
    activeCategory === "all" || prompt.category === activeCategory;

  const totalMatches = workflowPrompts.filter(
    (p) => matchesSearch(p) && matchesCategory(p)
  ).length;

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      <Seo 
        title="Workflow Prompts — Scaffold"
        description="Production workflow prompts for reading, debugging, refactoring, shipping, and reviewing real codebases with an AI IDE."
        canonical="/workflow-prompts"
      />
      {/* Page Header */}
      <div>
        <BackButton fallbackTo="/" />
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
          {/* Search & Filter */}
          <div className="sidebar-search-filter">
            <input
              type="search"
              className="search-input"
              placeholder="Search prompts"
              aria-label="Search workflow prompts"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="filter-chip-row">
              <button
                type="button"
                className={`filter-chip${activeCategory === "all" ? " active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={`filter-chip${activeCategory === cat.id ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <nav aria-label="Workflow prompt navigation">
            {totalMatches === 0 ? (
              <p className="search-empty">
                No workflow prompts match &ldquo;{searchQuery}&rdquo;.
              </p>
            ) : (
              categories.map((cat) => {
                if (activeCategory !== "all" && cat.id !== activeCategory) return null;

                const prompts = workflowPrompts.filter(
                  (p) => p.category === cat.id && matchesSearch(p)
                );
                if (prompts.length === 0) return null;
                return (
                  <div key={cat.id} className="docs-sidebar-group">
                    <div className="docs-sidebar-heading">{cat.label}</div>
                    {prompts.map((prompt) => (
                      <div key={prompt.id} style={{ position: "relative", display: "flex", alignItems: "center" }}>
                        <NavLink
                          to={`/workflow-prompts/${prompt.slug}`}
                          className={({ isActive }) =>
                            isActive
                              ? "docs-sidebar-link docs-sidebar-link-nested active"
                              : "docs-sidebar-link docs-sidebar-link-nested"
                          }
                          style={{ flex: 1, paddingRight: "36px" }}
                          onClick={() => setSidebarOpen(false)}
                        >
                          {prompt.number < 10 ? `0${prompt.number}` : prompt.number}{" "}
                          {prompt.title}
                        </NavLink>
                        <div style={{ position: "absolute", right: "0px", top: "50%", transform: "translateY(-50%)" }}>
                          <BookmarkButton
                            type="workflow"
                            slug={prompt.slug}
                            title={prompt.title}
                            style={{ width: "32px", height: "32px" }}
                          />
                        </div>
                      </div>
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
