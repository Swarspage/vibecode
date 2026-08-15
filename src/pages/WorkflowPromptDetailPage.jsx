import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { workflowPrompts } from "../data/workflowPrompts";

const categoryLabels = {
  orient: "Orient",
  investigate: "Investigate",
  build: "Build",
  debug: "Debug",
  audit: "Audit",
  ship: "Ship",
};

const WorkflowPromptDetailPage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const prompt = workflowPrompts.find((p) => p.slug === slug);

  if (!prompt) {
    return (
      <section style={{ paddingTop: "0", paddingBottom: "96px" }}>
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
        <Link
          to="/workflow-prompts"
          className="detail-back-link"
          style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
        >
          All workflow prompts
        </Link>
      </section>
    );
  }

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

  const categoryLabel = categoryLabels[prompt.category] ?? prompt.category;

  return (
    <section style={{ paddingTop: "0", paddingBottom: "96px" }}>
      {/* Top Area */}
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
            marginBottom: "20px",
          }}
        >
          {prompt.summary}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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
    </section>
  );
};

export default WorkflowPromptDetailPage;
