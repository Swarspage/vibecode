import { useState, useEffect } from "react";
import { publicApis } from "../data/publicApis";
import BackButton from "../components/BackButton";

const PublicApiCard = ({ api, onClick }) => {
  return (
    <article
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-sm)",
        border: "1px solid var(--color-border)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: "24px",
        cursor: "pointer",
        transition: "border-color 0.15s ease",
      }}
      className="dp-card"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-muted)")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
        <h3
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 700,
            fontSize: "18px",
            color: "var(--color-fg)",
            lineHeight: 1.2,
          }}
        >
          {api.name}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            color: "var(--color-accent)",
            border: "1px solid var(--color-accent-dim)",
            borderRadius: "var(--radius-sm)",
            padding: "2px 8px",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100px",
          }}
          title={api.category}
        >
          {api.category}
        </span>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "var(--color-muted)",
          lineHeight: 1.6,
          flex: 1,
          margin: 0,
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {api.description}
      </p>
    </article>
  );
};

const PublicApisPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedApi, setSelectedApi] = useState(null);
  const [copied, setCopied] = useState(false);
  const [limit, setLimit] = useState(40);

  const query = searchQuery.trim().toLowerCase();

  const uniqueCategories = Array.from(
    new Set(publicApis.map((api) => api.category))
  ).sort();

  const matchesSearch = (api) => {
    if (!query) return true;
    
    // Combine every single property in the API object into one giant lowercase searchable string
    const haystack = Object.values(api)
      .map(val => (val == null ? "" : String(val).toLowerCase()))
      .join(" ");
      
    // Split query by spaces and ensure EVERY word exists in the haystack (order independent)
    const searchTerms = query.split(/\s+/).filter(Boolean);
    return searchTerms.every(term => haystack.includes(term));
  };

  const matchesCategory = (api) =>
    activeCategory === "all" || api.category === activeCategory;

  const filteredApis = publicApis.filter(
    (api) => matchesSearch(api) && matchesCategory(api)
  );

  const displayedApis = filteredApis.slice(0, limit);

  // Reset pagination limit when search or category changes
  useEffect(() => {
    setLimit(40);
  }, [searchQuery, activeCategory]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedApi) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedApi]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedApi(null);
    };
    if (selectedApi) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedApi]);

  const handleCopy = async (url) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      {/* Page Header */}
      <div style={{ marginBottom: "48px" }}>
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
          Public API Directory
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
          A curated directory of free public APIs for weather, finance, games,
          data, AI, and more. Copy the API URL and start building.
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
          {searchQuery.trim() || activeCategory !== "all"
            ? `${filteredApis.length} / ${publicApis.length} APIs`
            : `${publicApis.length} APIs`}
        </span>
      </div>

      {/* Docs Layout */}
      <div className="docs-layout">
        <button
          type="button"
          className="mobile-sidebar-toggle"
          aria-expanded={sidebarOpen}
          aria-controls="api-sidebar-nav"
          onClick={() => setSidebarOpen((open) => !open)}
        >
          {sidebarOpen ? "Close categories" : "Browse categories"}
        </button>

        {/* Sidebar */}
        <aside
          id="api-sidebar-nav"
          className={`docs-sidebar${sidebarOpen ? " open" : ""}`}
        >
          <div className="sidebar-search-filter" style={{ marginBottom: "24px" }}>
            <input
              type="search"
              className="search-input"
              placeholder="Search APIs..."
              aria-label="Search APIs"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav aria-label="API Categories navigation">
            {uniqueCategories.length === 0 ? (
              <p className="search-empty">No categories found.</p>
            ) : (
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                <li>
                  <button
                    onClick={() => setActiveCategory("all")}
                    className={`docs-sidebar-link ${activeCategory === "all" ? "active" : ""}`}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      background: activeCategory === "all" ? "var(--color-surface)" : "transparent",
                      border: "none",
                      borderLeft: `2px solid ${activeCategory === "all" ? "var(--color-accent)" : "transparent"}`,
                      cursor: "pointer",
                      padding: "10px 12px",
                    }}
                  >
                    All Categories
                  </button>
                </li>
                {uniqueCategories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`docs-sidebar-link ${activeCategory === cat ? "active" : ""}`}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: activeCategory === cat ? "var(--color-surface)" : "transparent",
                        border: "none",
                        borderLeft: `2px solid ${activeCategory === cat ? "var(--color-accent)" : "transparent"}`,
                        cursor: "pointer",
                        padding: "10px 12px",
                      }}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </aside>

        {/* Content */}
        <div className="docs-content">
          {displayedApis.length === 0 ? (
            <p className="search-empty" style={{ marginTop: "32px" }}>
              No APIs match &ldquo;{searchQuery}&rdquo; in this category.
            </p>
          ) : (
            <>
              <div className="prompt-grid">
                {displayedApis.map((api) => (
                  <PublicApiCard key={api.id} api={api} onClick={() => setSelectedApi(api)} />
                ))}
              </div>

              {limit < filteredApis.length && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}>
                  <button
                    onClick={() => setLimit((l) => l + 40)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "var(--color-fg)",
                      backgroundColor: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      borderRadius: "var(--radius-sm)",
                      padding: "14px 32px",
                      cursor: "pointer",
                      transition: "border-color 0.2s, background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-muted)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
                  >
                    Load More APIs
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedApi && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.8)",
            backdropFilter: "blur(4px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
          onClick={() => setSelectedApi(null)}
        >
          <div
            style={{
              backgroundColor: "var(--color-bg)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              width: "100%",
              maxWidth: "600px",
              padding: "32px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              boxShadow: "0 24px 48px rgba(0,0,0,0.5)",
            }}
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h2
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "24px",
                  fontWeight: 800,
                  color: "var(--color-fg)",
                  lineHeight: 1.2,
                }}
              >
                {selectedApi.name}
              </h2>
              <button
                onClick={() => setSelectedApi(null)}
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  color: "var(--color-muted)",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                }}
                aria-label="Close modal"
              >
                <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "16px",
                color: "var(--color-muted-bright)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {selectedApi.description}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "var(--color-accent)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-accent-dim)"
                }}
              >
                Category: {selectedApi.category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "var(--color-muted-bright)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-border)"
                }}
              >
                Auth: {selectedApi.auth}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: selectedApi.https ? "#4ADE80" : "var(--color-muted-bright)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-border)"
                }}
              >
                HTTPS: {selectedApi.https ? "YES" : "NO"}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  color: "var(--color-muted-bright)",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  border: "1px solid var(--color-border)"
                }}
              >
                CORS: {selectedApi.cors}
              </span>
            </div>

            <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
              <button
                onClick={() => handleCopy(selectedApi.url)}
                style={{
                  flex: 1,
                  height: "48px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  ...(copied && {
                    border: "1px solid var(--color-accent)",
                    color: "var(--color-accent)",
                  }),
                }}
                className={copied ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"}
              >
                {copied ? "Copied to clipboard!" : "Copy API URL"}
              </button>
              <a
                href={selectedApi.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "48px",
                  padding: "0 24px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  color: "var(--color-fg)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  backgroundColor: "transparent",
                  transition: "border-color 0.2s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "var(--color-muted)")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}
              >
                Open Documentation ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PublicApisPage;
