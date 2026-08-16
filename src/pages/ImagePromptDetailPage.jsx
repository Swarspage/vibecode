import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { imagePrompts } from "../data/imagePrompts";
import BackButton from "../components/BackButton";

const categoryLabels = {
  "trending-portraits": "Trending Portraits",
  "3d-and-toy": "3D & Toy",
  "editing-and-restyle": "Editing & Restyle",
  "restoration-and-repair": "Restoration & Repair",
  "seasonal-and-festival": "Seasonal & Festival",
  "aesthetic-and-cinematic": "Aesthetic & Cinematic",
};

const ImagePromptDetailPage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const prompt = imagePrompts.find((p) => p.slug === slug);

  /* ── Not found ───────────────────────────────────────────────────── */
  if (!prompt) {
    return (
      <section
        style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}
      >
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
        <BackButton fallbackTo="/image-prompts" />
      </section>
    );
  }

  /* ── Copy handler ────────────────────────────────────────────────── */
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

  const categoryLabel =
    categoryLabels[prompt.category] ?? prompt.category;

  /* ── Page ────────────────────────────────────────────────────────── */
  return (
    <section
      style={{ paddingTop: "var(--space-page-top)", paddingBottom: "96px" }}
    >
      {/* Back link */}
      <div style={{ marginBottom: "32px" }}>
        <BackButton fallbackTo="/image-prompts" />
      </div>

      {/* ── Top area ───────────────────────────────────────────────── */}
      <div style={{ marginBottom: "40px" }}>
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
            {categoryLabel}
          </span>
        </div>

        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-fg)",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {prompt.title}
        </h1>

        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-base)",
            color: "var(--color-muted)",
            lineHeight: 1.65,
            maxWidth: "640px",
            marginBottom: "20px",
          }}
        >
          {prompt.summary}
        </p>

        {/* Badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: prompt.requiresUpload
                ? "var(--color-muted)"
                : "var(--color-accent)",
              border: "1px solid",
              borderColor: prompt.requiresUpload
                ? "var(--color-border)"
                : "var(--color-accent)",
              borderRadius: "var(--radius-sm)",
              padding: "4px 10px",
            }}
          >
            {prompt.requiresUpload ? "Requires Upload" : "Standalone"}
          </span>

          {prompt.aspectRatio && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: "var(--color-muted)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-sm)",
                padding: "4px 10px",
              }}
            >
              {prompt.aspectRatio}
            </span>
          )}

          {(prompt.tags ?? []).map((tag) => (
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
                padding: "4px 10px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ── Preview image ──────────────────────────────────────────── */}
      {prompt.detailImage || prompt.image ? (
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
            Example Output
          </h2>
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-sm)",
              overflow: "hidden",
            }}
          >
            <img
              src={prompt.detailImage || prompt.image}
              alt={`${prompt.title} example output`}
              loading="lazy"
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "620px",
                objectFit: "contain",
                display: "block",
              }}
            />
          </div>
        </div>
      ) : (
        /* ── Placeholder when no image ──────────────────────────── */
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              aspectRatio: "16 / 10",
              borderRadius: "var(--radius-sm)",
              border: "1px solid var(--color-border)",
              backgroundColor: "var(--color-surface)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-muted)",
              }}
            >
              No preview image
            </span>
            <div
              style={{
                width: "32px",
                height: "2px",
                background:
                  "linear-gradient(90deg, var(--color-accent), var(--color-accent-dim))",
                borderRadius: "1px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--color-muted)",
                opacity: 0.5,
              }}
            >
              {categoryLabel}
            </span>
          </div>
        </div>
      )}

      {/* ── Prompt section ─────────────────────────────────────────── */}
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

          <div style={{ display: "flex", gap: "8px" }}>
            {/* The useless external copy buttons were removed */}

            <button
              id={`copy-detail-${prompt.id}`}
              onClick={handleCopy}
              className={
                copied || copyError ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"
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
              aria-label="Copy prompt to clipboard"
            >
              {copied ? "Copied" : copyError ? "Copy failed" : "Copy Prompt"}
            </button>
          </div>

          {/* Screen-reader live region */}
          <span aria-live="polite" aria-atomic="true" className="sr-only">
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
            marginTop: "0",
          }}
        >
          {prompt.prompt}
        </pre>
      </div>
    </section>
  );
};

export default ImagePromptDetailPage;
