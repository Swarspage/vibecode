import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { designPrompts } from "../data/designPrompts";

const DesignPromptDetailPage = () => {
  const { slug } = useParams();
  const [copied, setCopied] = useState(false);

  const prompt = designPrompts.find((p) => p.slug === slug);

  if (!prompt) {
    return (
      <section style={{ paddingTop: "112px", paddingBottom: "96px" }}>
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
          to="/design-prompts"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--color-fg)",
            textDecoration: "underline",
          }}
        >
          Return to directory
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
      setCopied(false);
    }
  };

  const paletteEntries = Object.entries(prompt.palette);
  const typographyEntries = Object.entries(prompt.typography);

  return (
    <section style={{ paddingTop: "80px", paddingBottom: "96px", maxWidth: "800px" }}>
      {/* Top Area */}
      <div style={{ marginBottom: "48px" }}>
        <Link
          to="/design-prompts"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            marginBottom: "32px",
          }}
          className="detail-back-link"
        >
          ← All design prompts
        </Link>
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
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color: "var(--color-fg)",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          {prompt.name}
        </h1>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "var(--text-lg)",
            color: "var(--color-muted)",
            maxWidth: "560px",
            lineHeight: 1.65,
          }}
        >
          {prompt.summary}
        </p>
      </div>

      {/* Metadata Section */}
      <div style={{ marginBottom: "64px" }} className="flex flex-col md:flex-row gap-12">
        <div style={{ flex: 2 }}>
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
              <div key={key} style={{ width: "100%", maxWidth: "120px" }}>
                <div
                  style={{
                    height: "72px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: value,
                    border: "1px solid var(--color-border)",
                    marginBottom: "8px",
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

        <div style={{ flex: 1 }}>
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
              <div key={key} style={{ display: "flex", alignItems: "center" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-muted)",
                    width: "100px",
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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
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
            className={copied ? "dp-copy-btn" : "dp-copy-btn dp-copy-base"}
            style={{
              minWidth: "120px",
              height: "36px",
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
          >
            {copied ? "Copied" : "Copy Prompt"}
          </button>
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

export default DesignPromptDetailPage;
