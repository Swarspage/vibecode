import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { workflowPrompts } from "../data/workflowPrompts";
import BackButton from "../components/BackButton";
import BookmarkButton from "../components/BookmarkButton";
import Seo from "../components/Seo";

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
        <Seo title="Not Found — Scaffold" description="Prompt not found." canonical={`/workflow-prompts/${slug}`} />
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
        <BackButton fallbackTo="/workflow-prompts" />
      </section>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "headline": `${prompt.title} Workflow Prompt`,
        "description": prompt.summary,
        "url": `https://scaffold.swarshinde.dev/workflow-prompts/${prompt.slug}`,
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
            "name": "Workflow Prompts",
            "item": "https://scaffold.swarshinde.dev/workflow-prompts"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${prompt.title} Workflow Prompt`,
            "item": `https://scaffold.swarshinde.dev/workflow-prompts/${prompt.slug}`
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

  const categoryLabel = categoryLabels[prompt.category] ?? prompt.category;
  const relatedPrompts = workflowPrompts
    .filter((p) => p.category === prompt.category && p.slug !== prompt.slug)
    .slice(0, 3);

  return (
    <section style={{ paddingTop: "0", paddingBottom: "96px" }}>
      <Seo 
        title={`${prompt.title} Workflow Prompt — Scaffold`}
        description={prompt.summary}
        canonical={`/workflow-prompts/${prompt.slug}`}
        ogType="article"
        structuredData={structuredData}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 items-start">
        {/* Main Content Column */}
        <div>
          {/* Top Area */}
          <div style={{ marginBottom: "40px" }}>
            <BackButton fallbackTo="/workflow-prompts" />
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
            {prompt.title}
          </h1>
          <BookmarkButton
            type="workflow"
            slug={prompt.slug}
            title={prompt.title}
            style={{ flexShrink: 0 }}
          />
        </div>
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
      </div>

      {/* Right Sidebar Column */}
      <aside className="hidden lg:flex flex-col gap-8 sticky top-[120px]">
        
        {/* Pro Tip Card */}
        <div 
          style={{
            backgroundColor: "var(--color-surface)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-fg)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Pro Tip</span>
          </div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-muted)", lineHeight: 1.6, margin: 0 }}>
            Paste this prompt into your IDE's AI chat or a new Claude/ChatGPT session. For the best context, use an AI IDE like Cursor or Windsurf that can read your workspace automatically.
          </p>
        </div>

        {/* Related Workflows */}
        {relatedPrompts.length > 0 && (
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-muted-bright)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Related Workflows
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {relatedPrompts.map((related) => (
                <Link
                  key={related.id}
                  to={`/workflow-prompts/${related.slug}`}
                  className="dp-card"
                  style={{
                    display: "block",
                    padding: "16px",
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    borderRadius: "var(--radius-sm)",
                    textDecoration: "none",
                  }}
                >
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-accent)", marginBottom: "4px" }}>
                    {related.number < 10 ? `0${related.number}` : related.number}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: "14px", fontWeight: 500, color: "var(--color-fg)", lineHeight: 1.4 }}>
                    {related.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </aside>
      </div>
    </section>
  );
};

export default WorkflowPromptDetailPage;
