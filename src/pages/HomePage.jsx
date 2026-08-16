import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import DesignPromptCard from "../components/DesignPromptCard";
import { designPrompts } from "../data/designPrompts";
import { workflowPrompts } from "../data/workflowPrompts";
import { imagePrompts } from "../data/imagePrompts";

// First 3 design systems for the preview row
const designPreview = designPrompts.slice(0, 3);

// A hand-picked cross-section of 5 workflow prompts spanning all 5 categories
const workflowPreview = [
  workflowPrompts.find((p) => p.slug === "exploring-new-codebase"),
  workflowPrompts.find((p) => p.slug === "tracing-backend"),
  workflowPrompts.find((p) => p.slug === "building-feature"),
  workflowPrompts.find((p) => p.slug === "solving-bug"),
  workflowPrompts.find((p) => p.slug === "checking-change"),
];

// First 6 image prompts for the preview grid
const imagePreview = imagePrompts.slice(0, 6);

// Inline category label map — mirrors WorkflowPromptDetailPage
const categoryLabels = {
  orient: "Orient",
  investigate: "Investigate",
  build: "Build",
  debug: "Debug",
  ship: "Ship",
};

/* ─── Shared section styles ──────────────────────────────────────── */
const sectionStyle = {
  paddingTop: "72px",
  paddingBottom: "72px",
  borderTop: "1px solid var(--color-border)",
};

const sectionLabelStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-2xs)",
  color: "var(--color-accent)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  display: "block",
  marginBottom: "8px",
};

const sectionHeadingStyle = {
  fontFamily: "var(--font-sans)",
  fontSize: "clamp(1.25rem, 3vw, 1.75rem)",
  fontWeight: 700,
  letterSpacing: "-0.02em",
  color: "var(--color-fg)",
  marginBottom: "8px",
};

const sectionDescStyle = {
  fontFamily: "var(--font-body)",
  fontSize: "var(--text-base)",
  color: "var(--color-muted-bright)",
  lineHeight: 1.6,
  maxWidth: "480px",
};

const viewAllLinkStyle = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-xs)",
  color: "var(--color-muted-bright)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "6px",
  borderBottom: "1px solid var(--color-border)",
  paddingBottom: "2px",
  transition: "color 0.15s ease, border-color 0.15s ease",
};

const HomePage = () => {
  return (
    <>
      <Hero />

      {/* ─── Design Prompts Preview ──────────────────────────────── */}
      <section style={sectionStyle} aria-labelledby="home-design-heading">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span style={sectionLabelStyle}>Design Prompts</span>
            <h2 id="home-design-heading" style={sectionHeadingStyle}>
              Design Systems
            </h2>
            <p style={sectionDescStyle}>
              Drop-in design-system prompts for AI codegen. Each one ships
              a complete visual identity — palette, typography, and component
              rules in one copy.
            </p>
          </div>
          <Link
            to="/design-prompts"
            style={viewAllLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted-bright)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            View all systems →
          </Link>
        </div>

        {/* Card grid — reuses DesignPromptCard exactly as-is */}
        <div className="prompt-grid">
          {designPreview.map((prompt) => (
            <DesignPromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      </section>

      {/* ─── Workflow Prompts Preview ────────────────────────────── */}
      <section style={sectionStyle} aria-labelledby="home-workflow-heading">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span style={sectionLabelStyle}>Workflow Prompts</span>
            <h2 id="home-workflow-heading" style={sectionHeadingStyle}>
              Codebase Workflows
            </h2>
            <p style={sectionDescStyle}>
              13 production prompts for reading, debugging, refactoring, and
              shipping real codebases with an AI IDE. Organised by workflow
              stage.
            </p>
          </div>
          <Link
            to="/workflow-prompts"
            style={viewAllLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted-bright)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            View all prompts →
          </Link>
        </div>

        {/* Lightweight prompt rows */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {workflowPreview.map((prompt, index) => (
            <Link
              key={prompt.id}
              to={`/workflow-prompts/${prompt.slug}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "16px 20px",
                textDecoration: "none",
                color: "inherit",
                borderTop:
                  index === 0 ? "none" : "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              {/* Left: number + title */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    color: "var(--color-muted-bright)",
                    letterSpacing: "0.08em",
                    flexShrink: 0,
                  }}
                >
                  {prompt.number < 10 ? `0${prompt.number}` : prompt.number}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 500,
                    color: "var(--color-fg)",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {prompt.title}
                </span>
              </div>

              {/* Right: category tag + arrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    color: "var(--color-muted-bright)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {categoryLabels[prompt.category] ?? prompt.category}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted-bright)",
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── Image Prompts Preview ────────────────────────────── */}
      <section style={sectionStyle} aria-labelledby="home-image-heading">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div>
            <span style={sectionLabelStyle}>Image Prompts</span>
            <h2 id="home-image-heading" style={sectionHeadingStyle}>
              Gemini Image Generation
            </h2>
            <p style={sectionDescStyle}>
              Copy-paste prompts for Gemini photo editing and image generation.
              Portraits, restyling, restoration, seasonal edits, and cinematic
              effects — grouped by what you want to make.
            </p>
          </div>
          <Link
            to="/image-prompts"
            style={viewAllLinkStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--color-accent)";
              e.currentTarget.style.borderColor = "var(--color-accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--color-muted-bright)";
              e.currentTarget.style.borderColor = "var(--color-border)";
            }}
          >
            View all image prompts →
          </Link>
        </div>

        {/* Preview card rows */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1px",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
          }}
        >
          {imagePreview.map((prompt) => (
            <Link
              key={prompt.id}
              to="/image-prompts"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: "14px 20px",
                textDecoration: "none",
                color: "inherit",
                borderTop: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-border)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--color-surface)";
              }}
            >
              {/* Left: title */}
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "var(--text-sm)",
                  fontWeight: 500,
                  color: "var(--color-fg)",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  flex: 1,
                  minWidth: 0,
                }}
              >
                {prompt.title}
              </span>

              {/* Right: upload badge + arrow */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-2xs)",
                    color: prompt.requiresUpload
                      ? "var(--color-muted-bright)"
                      : "var(--color-accent)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    padding: "2px 8px",
                    whiteSpace: "nowrap",
                  }}
                >
                  {prompt.requiresUpload ? "Upload" : "Standalone"}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "var(--text-xs)",
                    color: "var(--color-muted-bright)",
                  }}
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
