import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { designPrompts } from "../data/designPrompts";
import BackButton from "../components/BackButton";
import BookmarkButton from "../components/BookmarkButton";
import Seo from "../components/Seo";

const DesignPromptDetailPage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewLoaded, setPreviewLoaded] = useState(false);

  const prompt = designPrompts.find((p) => p.slug === slug);

  useEffect(() => {
    setPreviewLoaded(false);
  }, [prompt?.previewUrl]);

  useEffect(() => {
    if (isPreviewOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setIsPreviewOpen(false);
      };
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isPreviewOpen]);

  if (!prompt) {
    return (
      <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
        <Seo title="Not Found — Scaffold" description="Prompt not found." canonical={`/design-prompts/${slug}`} />
        <div style={{ marginBottom: "16px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Not Found
          </span>
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-fg)",
            marginBottom: "24px",
          }}
        >
          Prompt not found
        </h1>
        <BackButton fallbackTo="/design-prompts" />
      </section>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": `${prompt.name} Design Prompt`,
        "description": prompt.summary,
        "url": `https://scaffold.swarshinde.dev/design-prompts/${prompt.slug}`,
        "datePublished": "2026-08-18",
        "dateModified": "2026-08-18",
        "author": {
          "@type": "Organization",
          "name": "Scaffold"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Scaffold",
          "url": "https://scaffold.swarshinde.dev"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://scaffold.swarshinde.dev/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Design Prompts",
            "item": "https://scaffold.swarshinde.dev/design-prompts"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${prompt.name} Design Prompt`,
            "item": `https://scaffold.swarshinde.dev/design-prompts/${prompt.slug}`
          }
        ]
      }
    ]
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 1500);
    }
  };

  const paletteEntries = Object.entries(prompt.palette);
  const typographyEntries = Object.entries(prompt.typography);

  return (
    <section style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}>
      <Seo 
        title={`${prompt.name} Design Prompt — Scaffold`}
        description={prompt.summary}
        canonical={`/design-prompts/${prompt.slug}`}
        ogType="article"
        structuredData={structuredData}
      />
      {/* Top Area */}
      <div style={{ marginBottom: "48px" }}>
        <BackButton fallbackTo="/design-prompts" />
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              color: "var(--color-accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Design System Prompt
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
          <h1
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--color-fg)",
              lineHeight: 1.1,
            }}
          >
            {prompt.name}
          </h1>
          <BookmarkButton
            type="design"
            slug={prompt.slug}
            title={prompt.name}
            style={{ flexShrink: 0 }}
          />
        </div>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--color-muted)",
            lineHeight: 1.65,
          }}
        >
          {prompt.summary}
        </p>
      </div>

      {/* Live Preview — only if previewUrl exists */}
      {prompt.previewUrl && (
        <div style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Live Preview
          </h2>
          <div
            className={`preview-frame${previewLoaded ? " is-ready" : " is-loading"}`}
          >
            <iframe
              src={prompt.previewUrl}
              loading="lazy"
              title={`${prompt.name} live preview`}
              className="preview-iframe"
              tabIndex={-1}
              onLoad={() => setPreviewLoaded(true)}
            />

            <div className="preview-skeleton preview-skeleton-glow" aria-hidden="true">
              <div className="preview-skeleton-shimmer preview-skeleton-title" />
              <div className="preview-skeleton-shimmer preview-skeleton-line" />
              <div className="preview-skeleton-dots">
                {Object.values(prompt.palette).map((color, index) => (
                  <div
                    key={index}
                    className="preview-skeleton-shimmer preview-skeleton-dot"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
            <div
              className="preview-fallback"
              style={{ backgroundColor: prompt.palette.background }}
            >
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 800,
                  fontSize: "20px",
                  letterSpacing: "-0.02em",
                  color: prompt.palette.foreground,
                }}
              >
                {prompt.name}
              </span>
              <div style={{ display: "flex", gap: "6px" }}>
                {paletteEntries.map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      border: "1px solid rgba(0,0,0,0.2)",
                      backgroundColor: value,
                    }}
                  />
                ))}
              </div>
            </div>
            <button
              type="button"
              className="preview-expand-overlay"
              aria-label="Expand preview"
              onClick={() => setIsPreviewOpen(true)}
            >
              <span className="preview-expand-label">Tap to expand</span>
            </button>
          </div>
        </div>
      )}

      {/* Metadata Section */}
      <div
        style={{
          marginBottom: "64px",
          display: "flex",
          flexDirection: "column",
          gap: "48px",
        }}
      >
        {/* Palette */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Palette
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            {paletteEntries.map(([key, value]) => (
              <div key={key} style={{ width: "100%", maxWidth: "100px" }}>
                <div
                  style={{
                    height: "56px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: value,
                    border: "1px solid var(--color-border)",
                    marginBottom: "6px",
                  }}
                />
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                    marginBottom: "2px",
                  }}
                >
                  {key}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "10px",
                    color: "var(--color-fg)",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div>
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "16px",
            }}
          >
            Typography
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {typographyEntries.map(([key, value]) => (
              <div key={key} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    minWidth: "80px",
                  }}
                >
                  {key}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    color: "var(--color-fg)",
                  }}
                >
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prompt Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Prompt
          </h2>
          <button
            onClick={handleCopy}
            className={
              copied || copyError
                ? "dp-copy-btn"
                : "dp-copy-btn dp-copy-base"
            }
            style={{
              minWidth: "120px",
              height: "44px",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              backgroundColor: "var(--color-surface)",
              borderRadius: "var(--radius-sm)",
              cursor: "pointer",
              ...(copied && {
                border: "1px solid var(--color-accent)",
                color: "var(--color-accent)",
              }),
              ...(copyError && {
                border: "1px solid var(--color-border)",
                color: "var(--color-muted)",
              }),
            }}
          >
            {copied ? "Copied" : copyError ? "Copy failed" : "Copy Prompt"}
          </button>
          {/* aria-live region — visible to screen readers, hidden visually */}
          <span
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {copied ? "Copied to clipboard" : ""}
          </span>
        </div>
        <pre
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            lineHeight: 1.7,
            color: "var(--color-fg)",
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-sm)",
            padding: "24px",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            maxHeight: "600px",
            overflowY: "auto",
            marginTop: "16px",
          }}
        >
          {prompt.prompt}
        </pre>
      </div>

      {/* Expanded Preview Modal */}
      {isPreviewOpen && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "var(--color-bg)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 24px",
              borderBottom: "1px solid var(--color-border)",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 600,
                fontSize: "14px",
                color: "var(--color-fg)",
              }}
            >
              {prompt.name} Preview
            </span>
            <button
              onClick={() => setIsPreviewOpen(false)}
              autoFocus
              style={{
                width: "44px",
                height: "44px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                color: "var(--color-fg)",
                cursor: "pointer",
              }}
              aria-label="Close preview"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            style={{
              flex: 1,
              overflow: "auto",
              WebkitOverflowScrolling: "touch",
              touchAction: "auto",
            }}
          >
            <iframe
              src={prompt.previewUrl}
              title={`${prompt.name} full preview`}
              className="preview-modal-iframe"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default DesignPromptDetailPage;
