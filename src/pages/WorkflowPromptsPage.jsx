import { useState } from "react";
import { workflowPrompts } from "../data/workflowPrompts";

const WorkflowPromptRow = ({ prompt }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  const formattedNumber = prompt.number < 10 ? `0${prompt.number}` : prompt.number;

  return (
    <article
      className="workflow-row-base workflow-row"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "16px",
        background: "var(--color-surface)",
        borderRadius: "var(--radius-sm)",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-muted)",
              minWidth: "32px",
              paddingTop: "2px",
            }}
          >
            {formattedNumber}
          </span>
          <div>
            <h3
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--color-fg)",
                marginBottom: "4px",
              }}
            >
              {prompt.title}
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "13px",
                color: "var(--color-muted)",
                lineHeight: 1.5,
              }}
            >
              {prompt.summary}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div className="flex flex-wrap gap-1.5">
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
      </div>
    </article>
  );
};

const WorkflowPromptsPage = () => {
  // Define category order and labels
  const categories = [
    { id: "understand", label: "Understand" },
    { id: "build", label: "Build" },
    { id: "debug", label: "Debug" },
    { id: "review", label: "Review" },
    { id: "refactor", label: "Refactor" },
    { id: "ship", label: "Ship" },
  ];

  // Group prompts
  const groupedPrompts = categories.map((cat) => ({
    ...cat,
    prompts: workflowPrompts.filter((p) => p.category === cat.id),
  })).filter((group) => group.prompts.length > 0);

  return (
    <section style={{ paddingTop: "112px", paddingBottom: "96px" }}>
      <div className="flex items-center gap-2 mb-8">
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-2xs)",
            color: "var(--color-accent)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Workflow Prompts
        </span>
      </div>
      <h1
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
          color: "var(--color-fg)",
          maxWidth: "680px",
          marginBottom: "24px",
        }}
      >
        Workflow Prompts
      </h1>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-lg)",
          color: "var(--color-muted)",
          maxWidth: "480px",
          lineHeight: 1.65,
        }}
      >
        Production prompts for reading, debugging, refactoring, and
        shipping real codebases with an AI IDE.
      </p>

      <div style={{ marginTop: "64px" }}>
        {groupedPrompts.map((group) => (
          <div key={group.id} style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "var(--color-accent)",
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              {group.label}
            </h2>
            <div className="flex flex-col">
              {group.prompts.map((prompt) => (
                <WorkflowPromptRow key={prompt.id} prompt={prompt} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkflowPromptsPage;
