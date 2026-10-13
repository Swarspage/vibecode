import { useState, useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { designPrompts } from "../data/designPrompts";
import DesignPromptCard from "../components/DesignPromptCard";
import BackButton from "../components/BackButton";
import Seo from "../components/Seo";

const ITEMS_PER_PAGE = 12;

// Clean vector iconography matching the Scaffold theme
const MoonIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

const ResetIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);

// Curated high-signal theme options
const THEME_FILTERS = [
  { id: "all", shortLabel: "All", fullSuffix: " Themes" },
  { id: "dark", shortLabel: "Dark", fullSuffix: " Mode", Icon: MoonIcon },
  { id: "light", shortLabel: "Light", fullSuffix: " Mode", Icon: SunIcon },
];

// Curated high-signal aesthetic archetypes
const VIBE_FILTERS = [
  { id: "all", label: "All Styles" },
  { id: "minimal", label: "Minimal & Clean" },
  { id: "editorial", label: "Editorial & Serif" },
  { id: "tactile", label: "Tactile & Retro" },
  { id: "3d", label: "3D & Spatial" },
  { id: "bold", label: "Bold & Expressive" },
];

// Determine if a prompt belongs to 'dark' or 'light'
const getPromptTheme = (prompt) => {
  const tags = prompt.tags || [];
  if (tags.includes("dark") || tags.includes("lights-out")) return "dark";
  if (tags.includes("light")) return "light";

  const bg = (prompt.palette?.background || "").toLowerCase().trim();
  if (bg.startsWith("#")) {
    const hex = bg.replace("#", "");
    if (hex.length === 6) {
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;
      return brightness < 128 ? "dark" : "light";
    }
  }
  return "dark";
};

// Check if a prompt belongs to a specific vibe archetype
const matchesPromptVibe = (prompt, vibeId) => {
  if (vibeId === "all") return true;
  const tags = (prompt.tags || []).map((t) => t.toLowerCase());
  const heading = (prompt.typography?.heading || "").toLowerCase();

  switch (vibeId) {
    case "minimal":
      return tags.some((t) =>
        [
          "minimal",
          "minimalist",
          "monochrome",
          "utilitarian",
          "clean",
          "saas",
          "corporate",
          "terminal",
          "flat",
          "hairline",
          "modern",
          "linear",
          "material",
          "precision",
        ].includes(t)
      );
    case "editorial":
      return (
        tags.some((t) =>
          ["editorial", "serif", "luxury", "wealth", "academic", "institutional", "art deco"].includes(t)
        ) ||
        heading.includes("serif") ||
        heading.includes("garamond")
      );
    case "tactile":
      return tags.some((t) =>
        [
          "hardware",
          "tactile",
          "receipt",
          "thermal",
          "skeuomorphism",
          "neumorphism",
          "retro",
          "90s",
          "bauhaus",
          "print",
        ].includes(t)
      );
    case "3d":
      return tags.some((t) =>
        [
          "3d",
          "spatial",
          "claymorphism",
          "cyberpunk",
          "glitch",
          "defi",
          "crypto",
          "vaporwave",
          "frosted-glass",
        ].includes(t)
      );
    case "bold":
      return tags.some((t) =>
        [
          "bold",
          "kinetic",
          "maximalist",
          "brutalist",
          "neo-brutalism",
          "playful",
          "hand-drawn",
          "loud",
          "marquee",
        ].includes(t)
      );
    default:
      return true;
  }
};

const DesignPromptsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const gridTopRef = useRef(null);

  // Read initial states from URL query params
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [activeTheme, setActiveTheme] = useState(searchParams.get("theme") || "all");
  const [activeVibe, setActiveVibe] = useState(searchParams.get("vibe") || "all");
  const [onlyNew, setOnlyNew] = useState(searchParams.get("new") === "true");
  const [currentPage, setCurrentPage] = useState(
    parseInt(searchParams.get("page") || "1", 10) || 1
  );

  // Sync state from URL on back/forward navigation
  useEffect(() => {
    const qFromUrl = searchParams.get("q") || "";
    const themeFromUrl = searchParams.get("theme") || "all";
    const vibeFromUrl = searchParams.get("vibe") || "all";
    const newFromUrl = searchParams.get("new") === "true";
    const pageFromUrl = parseInt(searchParams.get("page") || "1", 10) || 1;

    setSearchQuery(qFromUrl);
    setActiveTheme(themeFromUrl);
    setActiveVibe(vibeFromUrl);
    setOnlyNew(newFromUrl);
    setCurrentPage(pageFromUrl);
  }, [searchParams]);

  // Push filter state changes to URL
  const updateUrlParams = (updates) => {
    const nextQ = "q" in updates ? updates.q : searchQuery;
    const nextTheme = "theme" in updates ? updates.theme : activeTheme;
    const nextVibe = "vibe" in updates ? updates.vibe : activeVibe;
    const nextNew = "new" in updates ? updates.new : onlyNew;
    const nextPage = "page" in updates ? updates.page : 1;

    const params = {};
    if (nextQ.trim()) params.q = nextQ.trim();
    if (nextTheme !== "all") params.theme = nextTheme;
    if (nextVibe !== "all") params.vibe = nextVibe;
    if (nextNew) params.new = "true";
    if (nextPage > 1) params.page = String(nextPage);

    setSearchParams(params);
  };

  const query = searchQuery.trim().toLowerCase();

  // Multi-dimensional filtering logic
  const filteredPrompts = useMemo(() => {
    return designPrompts
      .filter((prompt) => {
        // Keyword Search
        if (query) {
          const haystack = Object.values(prompt)
            .map((val) => (val == null ? "" : String(val).toLowerCase()))
            .join(" ");
          const searchTerms = query.split(/\s+/).filter(Boolean);
          if (!searchTerms.every((term) => haystack.includes(term))) return false;
        }

        // Theme filter (Dark / Light)
        if (activeTheme !== "all" && getPromptTheme(prompt) !== activeTheme) {
          return false;
        }

        // Vibe archetype filter
        if (activeVibe !== "all" && !matchesPromptVibe(prompt, activeVibe)) {
          return false;
        }

        // Newly added filter
        if (onlyNew && !prompt.isNew) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
  }, [query, activeTheme, activeVibe, onlyNew]);

  // Compute category counts for badge indicators
  const themeCounts = useMemo(() => {
    return {
      all: designPrompts.length,
      dark: designPrompts.filter((p) => getPromptTheme(p) === "dark").length,
      light: designPrompts.filter((p) => getPromptTheme(p) === "light").length,
    };
  }, []);

  const vibeCounts = useMemo(() => {
    const counts = { all: designPrompts.length };
    VIBE_FILTERS.forEach((v) => {
      if (v.id !== "all") {
        counts[v.id] = designPrompts.filter((p) => matchesPromptVibe(p, v.id)).length;
      }
    });
    return counts;
  }, []);

  const newCount = useMemo(() => {
    return designPrompts.filter((p) => p.isNew).length;
  }, []);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredPrompts.length / ITEMS_PER_PAGE));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, filteredPrompts.length);
  const paginatedPrompts = filteredPrompts.slice(startIndex, endIndex);

  // Check if any non-default filter is active
  const hasActiveFilters =
    searchQuery.trim().length > 0 ||
    activeTheme !== "all" ||
    activeVibe !== "all" ||
    onlyNew;

  // Handlers
  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    setCurrentPage(1);
    updateUrlParams({ q: val, page: 1 });
  };

  const handleThemeChange = (themeId) => {
    setActiveTheme(themeId);
    setCurrentPage(1);
    updateUrlParams({ theme: themeId, page: 1 });
  };

  const handleVibeChange = (vibeId) => {
    setActiveVibe(vibeId);
    setCurrentPage(1);
    updateUrlParams({ vibe: vibeId, page: 1 });
  };

  const handleToggleNew = () => {
    const nextVal = !onlyNew;
    setOnlyNew(nextVal);
    setCurrentPage(1);
    updateUrlParams({ new: nextVal, page: 1 });
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setActiveTheme("all");
    setActiveVibe("all");
    setOnlyNew(false);
    setCurrentPage(1);
    setSearchParams({});
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages || newPage === safePage) return;
    setCurrentPage(newPage);
    updateUrlParams({ page: newPage });

    if (gridTopRef.current) {
      gridTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      <Seo
        title="Design System Prompts — Scaffold"
        description="Browse curated design-system prompts for AI codegen. Copy complete visual identities with tokens, typography, components, and motion."
        canonical="/design-prompts"
      />

      {/* Page Header */}
      <div style={{ marginBottom: "32px" }} ref={gridTopRef}>
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
          {hasActiveFilters
            ? `${filteredPrompts.length} / ${designPrompts.length} systems (filtered)`
            : `${designPrompts.length} systems total`}
        </span>
      </div>

      {/* Search Input */}
      <div style={{ position: "relative" }}>
        <input
          type="search"
          className="search-input"
          placeholder="Search by name, summary, tokens, or keywords..."
          aria-label="Search design prompts"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Curated High-Signal Filters Toolbar */}
      <div className="dp-filters-toolbar">
        {/* Row 1: Theme Mode Pills + Meta Controls */}
        <div className="dp-filters-primary-row">
          {/* Theme Segmented Control */}
          <div className="filter-pill-group" role="group" aria-label="Filter by theme mode">
            {THEME_FILTERS.map((theme) => {
              const isActive = activeTheme === theme.id;
              const IconComponent = theme.Icon;
              return (
                <button
                  key={theme.id}
                  type="button"
                  className={`filter-pill${isActive ? " active" : ""}`}
                  onClick={() => handleThemeChange(theme.id)}
                  aria-pressed={isActive}
                >
                  {IconComponent && <IconComponent />}
                  <span>
                    {theme.shortLabel}
                    <span className="hide-on-mobile">{theme.fullSuffix}</span>
                  </span>
                  <span className="filter-chip-badge">({themeCounts[theme.id]})</span>
                </button>
              );
            })}
          </div>

          {/* Row 1 Meta Controls: Newly Added + Reset */}
          <div className="dp-filters-meta-row">
            <button
              type="button"
              className={`filter-chip${onlyNew ? " active" : ""}`}
              onClick={handleToggleNew}
              aria-pressed={onlyNew}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "6px 12px",
                fontSize: "11px",
              }}
            >
              <span
                className="badge-new-dot"
                style={{ width: "6px", height: "6px", flexShrink: 0 }}
                aria-hidden="true"
              />
              <span>Newly Added</span>
              <span className="filter-chip-badge">({newCount})</span>
            </button>

            {hasActiveFilters && (
              <button
                type="button"
                className="filter-reset-btn"
                onClick={handleClearFilters}
                title="Reset all search queries and filters"
              >
                <ResetIcon />
                <span>Reset filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Aesthetic Vibe Chips (Horizontal swipeable track on mobile) */}
        <div
          className="filter-chip-row"
          role="group"
          aria-label="Filter by design style"
        >
          {VIBE_FILTERS.map((vibe) => {
            const isActive = activeVibe === vibe.id;
            return (
              <button
                key={vibe.id}
                type="button"
                className={`filter-chip${isActive ? " active" : ""}`}
                onClick={() => handleVibeChange(vibe.id)}
                aria-pressed={isActive}
              >
                <span>{vibe.label}</span>
                <span className="filter-chip-badge">({vibeCounts[vibe.id]})</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Card Grid or Empty State */}
      {filteredPrompts.length === 0 ? (
        <div
          style={{
            padding: "48px 24px",
            textAlign: "center",
            backgroundColor: "var(--color-surface)",
            border: "1px dashed var(--color-border)",
            borderRadius: "var(--radius-sm)",
            marginTop: "24px",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-sm)",
              color: "var(--color-fg)",
              marginBottom: "12px",
            }}
          >
            No design prompts match your active search and filter criteria.
          </p>
          <button
            type="button"
            className="filter-reset-btn"
            onClick={handleClearFilters}
            style={{
              borderColor: "var(--color-accent)",
              color: "var(--color-accent)",
              padding: "8px 16px",
            }}
          >
            <ResetIcon />
            <span>Clear all filters</span>
          </button>
        </div>
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
