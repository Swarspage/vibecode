import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { designPrompts } from "../data/designPrompts";
import DesignPromptCard from "../components/DesignPromptCard";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";

const ITEMS_PER_PAGE = 12;

const DesignPromptsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const gridTopRef = useRef(null);

  const initialPage = parseInt(searchParams.get("page") || "1", 10) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const query = searchQuery.trim().toLowerCase();

  const filteredPrompts = designPrompts
    .filter((prompt) => {
      if (!query) return true;
      
      // Combine every single property into one giant searchable string
      const haystack = Object.values(prompt)
        .map(val => (val == null ? "" : String(val).toLowerCase()))
        .join(" ");
        
      // Split query by spaces and ensure EVERY word exists in the haystack (order independent)
      const searchTerms = query.split(/\s+/).filter(Boolean);
      return searchTerms.every(term => haystack.includes(term));
    })
    .sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });

  // Calculate pagination
  const totalPages = Math.max(1, Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredPrompts.length);
  const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

  // Reset to page 1 on search change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
    setSearchParams(e.target.value ? { q: e.target.value } : {});
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === safePage) return;
    setCurrentPage(newPage);
    
    const nextParams = {};
    if (searchQuery.trim()) nextParams.q = searchQuery.trim();
    if (newPage > 1) nextParams.page = String(newPage);
    setSearchParams(nextParams);

    // Smooth scroll back to top of grid
    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10) || 1;
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      <Seo 
        title="Design System Prompts — Scaffold"
        description="Browse curated design-system prompts for AI codegen. Copy complete visual identities with tokens, typography, components, and motion."
        canonical="/design-prompts"
      />
      {/* Page Header */}
      <div style={{ marginBottom: "48px" }} ref={gridTopRef}>
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
          Design System Prompts
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
          A curated collection of design-system prompts for AI codegen. Pick a
          system by look — copy it and paste it into your AI IDE.
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
          {searchQuery.trim()
            ? `${filteredPrompts.length} / ${designPrompts.length} systems`
            : `${designPrompts.length} systems total`}
        </span>
      </div>

      {/* Search */}
      <div style={{ marginTop: "24px" }}>
        <input
          type="search"
          className="search-input"
          placeholder="Search by name, summary, or tag"
          aria-label="Search design prompts"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Card Grid */}
      {filteredPrompts.length === 0 ? (
        <p className="search-empty">
          No design prompts match &ldquo;{searchQuery}&rdquo;.
        </p>
      ) : (
        <>
          <div className="prompt-grid">
            {paginatedPrompts.map((prompt) => (
              <DesignPromptCard key={prompt.id} prompt={prompt} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div
              style={{
                marginTop: "48px",
                paddingTop: "24px",
                borderTop: "1px solid var(--color-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  color: "var(--color-muted)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Showing {startIndex + 1}–{endIndex} of {filteredPrompts.length} systems
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                {/* Previous Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage - 1)}
                  disabled={safePage <= 1}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-surface)",
                    color: safePage <= 1 ? "var(--color-muted)" : "var(--color-fg)",
                    border: "1px solid var(--color-border)",
                    cursor: safePage <= 1 ? "not-allowed" : "pointer",
                    opacity: safePage <= 1 ? 0.4 : 1,
                    transition: "all 150ms ease",
                  }}
                >
                  Prev
                </button>

                {/* Page Number Buttons */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-xs)",
                      fontWeight: pageNum === safePage ? 700 : 500,
                      width: "34px",
                      height: "34px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor:
                        pageNum === safePage ? "rgba(201, 162, 39, 0.12)" : "var(--color-surface)",
                      color:
                        pageNum === safePage ? "var(--color-accent)" : "var(--color-muted)",
                      border:
                        pageNum === safePage
                          ? "1px solid var(--color-accent)"
                          : "1px solid var(--color-border)",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 150ms ease",
                    }}
                  >
                    {pageNum}
                  </button>
                ))}

                {/* Next Button */}
                <button
                  type="button"
                  onClick={() => handlePageChange(safePage + 1)}
                  disabled={safePage >= totalPages}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    padding: "6px 14px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: "var(--color-surface)",
                    color: safePage >= totalPages ? "var(--color-muted)" : "var(--color-fg)",
                    border: "1px solid var(--color-border)",
                    cursor: safePage >= totalPages ? "not-allowed" : "pointer",
                    opacity: safePage >= totalPages ? 0.4 : 1,
                    transition: "all 150ms ease",
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default DesignPromptsPage;

