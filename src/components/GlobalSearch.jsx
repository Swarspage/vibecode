import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { designPrompts } from "../data/designPrompts";
import { workflowPrompts } from "../data/workflowPrompts";
import { imagePrompts } from "../data/imagePrompts";
import { publicApis } from "../data/publicApis";

const GlobalSearch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Open on Ctrl+K or Cmd+K
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    
    const openSearch = () => setIsOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-global-search", openSearch);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-global-search", openSearch);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
      setQuery("");
      setSelectedIndex(0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  // Consolidate data
  const allItems = [
    ...designPrompts.map(p => ({ ...p, type: 'Design Prompt', link: `/design-prompts/${p.slug}` })),
    ...workflowPrompts.map(p => ({ ...p, name: p.title, type: 'Workflow Prompt', link: `/workflow-prompts/${p.slug}` })),
    ...imagePrompts.map(p => ({ ...p, name: p.title, type: 'Image Prompt', link: `/image-prompts/${p.slug}` })),
    ...publicApis.map(p => ({ ...p, type: 'Public API', link: p.url, external: true }))
  ];

  const filteredItems = query.trim() === "" ? [] : allItems.filter(item => {
    const q = query.toLowerCase();
    return (
      (item.name && item.name.toLowerCase().includes(q)) ||
      (item.summary && item.summary.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.tags && item.tags.some(t => t.toLowerCase().includes(q))) ||
      (item.category && item.category.toLowerCase().includes(q))
    );
  }).slice(0, 8); // Limit to 8 results to keep it clean

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item) => {
    setIsOpen(false);
    if (item.external && item.link) {
      window.open(item.link, '_blank', 'noopener,noreferrer');
    } else if (item.link) {
      navigate(item.link);
    }
  };

  const handleInputKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < filteredItems.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        handleSelect(filteredItems[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "12vh",
      }}
      onClick={() => setIsOpen(false)}
    >
      <div
        style={{
          width: "100%", maxWidth: "640px",
          backgroundColor: "var(--color-bg)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-border)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          margin: "0 16px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input area */}
        <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--color-border)", display: "flex", alignItems: "center" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "12px", flexShrink: 0 }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search prompts, APIs, and tags..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleInputKeyDown}
            style={{
              flex: 1,
              backgroundColor: "transparent",
              border: "none",
              outline: "none",
              color: "var(--color-fg)",
              fontFamily: "var(--font-sans)",
              fontSize: "18px",
            }}
          />
          <button
            onClick={() => setIsOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "var(--color-muted)",
              cursor: "pointer",
              padding: "4px 8px",
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              backgroundColor: "var(--color-surface)",
              borderRadius: "4px",
              border: "1px solid var(--color-border)",
              marginLeft: "12px",
            }}
          >
            ESC
          </button>
        </div>

        {/* Results area */}
        <div style={{ maxHeight: "400px", overflowY: "auto", padding: "8px" }}>
          {query.trim() === "" ? (
            <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--color-muted)", fontFamily: "var(--font-body)", fontSize: "14px" }}>
              Start typing to search across Design, Workflow, Images, and APIs.
            </div>
          ) : filteredItems.length === 0 ? (
            <div style={{ padding: "40px 20px", textAlign: "center", color: "var(--color-muted)", fontFamily: "var(--font-body)", fontSize: "14px" }}>
              No results found for <strong style={{ color: "var(--color-fg)" }}>"{query}"</strong>
            </div>
          ) : (
            filteredItems.map((item, index) => (
              <div
                key={`${item.type}-${item.id || item.slug || index}`}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleSelect(item)}
                style={{
                  padding: "12px 16px",
                  borderRadius: "var(--radius-sm)",
                  cursor: "pointer",
                  backgroundColor: index === selectedIndex ? "var(--color-surface)" : "transparent",
                  display: "flex",
                  flexDirection: "column",
                  gap: "6px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: "15px", color: "var(--color-fg)", fontWeight: 500 }}>
                    {item.name}
                  </span>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", marginLeft: "12px", flexShrink: 0 }}>
                    {item.external && (
                      <span style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        color: "var(--color-muted)",
                      }}>↗</span>
                    )}
                    <span style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "10px",
                      color: "var(--color-accent)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      border: "1px solid var(--color-border)",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      whiteSpace: "nowrap",
                    }}>
                      {item.type}
                    </span>
                  </div>
                </div>
                {(item.summary || item.description) && (
                  <span style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    color: "var(--color-muted)",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}>
                    {item.summary || item.description}
                  </span>
                )}
                {item.tags && item.tags.length > 0 && (
                  <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginTop: "4px" }}>
                    {item.tags.slice(0, 4).map(tag => (
                      <span key={tag} style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        color: "var(--color-muted)",
                        backgroundColor: "var(--color-bg)",
                        padding: "2px 6px",
                        borderRadius: "2px",
                        border: "1px solid var(--color-border)"
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;
