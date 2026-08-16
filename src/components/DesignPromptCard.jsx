import { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const DesignPromptCard = ({ prompt }) => {
  const [copied, setCopied] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const cardPreviewFrameRef = useRef(null);
  const [viewportScale, setViewportScale] = useState(0.25);

  useEffect(() => {
    setIframeLoaded(false);
  }, [prompt.previewUrl]);

  useLayoutEffect(() => {
    const el = cardPreviewFrameRef.current;
    if (!el) return;

    const updateScale = () => {
      const width = el.getBoundingClientRect().width;
      setViewportScale(width / 1280);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(el);

    return () => observer.disconnect();
  }, [prompt.previewUrl]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const paletteColors = [
    prompt.palette.background,
    prompt.palette.foreground,
    prompt.palette.muted,
    prompt.palette.accent,
    prompt.palette.border,
  ];

  return (
    <article
      style={{
        backgroundColor: "var(--color-surface)",
        borderRadius: "var(--radius-sm)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
      className="dp-card-base dp-card"
    >
      {/* Preview area — iframe if previewUrl exists, swatch if not */}
      <Link
        to={`/design-prompts/${prompt.slug}`}
        style={{ display: "block", color: "inherit", textDecoration: "none" }}
      >
        {prompt.previewUrl ? (
          /* ── Live iframe preview with scaling sandbox ── */
          <div
            ref={cardPreviewFrameRef}
            className={`card-preview-frame${iframeLoaded ? " is-ready" : " is-loading"}`}
          >
            <div
              className="card-preview-viewport"
              style={{ transform: `scale(${viewportScale})` }}
            >
              <iframe
                src={prompt.previewUrl}
                loading="lazy"
                title={`${prompt.name} card preview`}
                tabIndex={-1}
                onLoad={() => setIframeLoaded(true)}
              />
            </div>

            <div className="preview-skeleton preview-skeleton-glow" aria-hidden="true">
              <div className="preview-skeleton-shimmer preview-skeleton-title" />
              <div className="preview-skeleton-shimmer preview-skeleton-line" />
              <div className="preview-skeleton-dots">
                {paletteColors.map((color, index) => (
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
                {paletteColors.map((color, index) => (
                  <div
                    key={index}
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "2px",
                      border: "1px solid rgba(0,0,0,0.2)",
                      backgroundColor: color,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ── Swatch preview (unchanged) ── */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: prompt.palette.background,
              height: "120px",
              borderBottom: "1px solid var(--color-border)",
            }}
          >
            <h2
              style={{
                color: prompt.palette.foreground,
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "24px",
                letterSpacing: "-0.02em",
              }}
            >
              {prompt.name}
            </h2>
            <div style={{ display: "flex", gap: "6px", marginTop: "8px" }}>
              {paletteColors.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "2px",
                    border: "1px solid rgba(0,0,0,0.2)",
                    backgroundColor: color,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </Link>

      {/* Body Area — identical for all cards */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Link to={`/design-prompts/${prompt.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
          <h3
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 600,
              fontSize: "16px",
              color: "var(--color-fg)",
            }}
          >
            {prompt.name}
          </h3>
        </Link>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "13px",
            color: "var(--color-muted)",
            lineHeight: 1.5,
            marginTop: "4px",
          }}
        >
          {prompt.summary}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "12px", gap: "6px" }}>
          {prompt.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "2px 8px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          style={{
            marginTop: "16px",
            width: "100%",
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
          }}
          className={copied ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"}
        >
          {copied ? "Copied" : "Copy Prompt"}
        </button>
      </div>
    </article>
  );
};

export default DesignPromptCard;
